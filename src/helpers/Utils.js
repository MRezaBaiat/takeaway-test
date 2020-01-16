export function formatDate (date) {
  var d = new Date(date);
  var month = '' + (d.getMonth() + 1);
  var day = '' + d.getDate();
  var year = d.getFullYear();

  if (month.length < 2) { month = '0' + month; }
  if (day.length < 2) { day = '0' + day; }

  return [year, month, day].join('-');
}

export function getCSSRootValue (valueName: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(valueName);
}

export function cssValueToPixel (value: string) {
  return document.documentElement.clientHeight * 0.65;
}

export function combineClassNames (classNames: []) {
  return classNames.join(' ');
}

export function inputToState (fieldName, state, setState) {
  return (event) => {
    const newState = { ...state };
    newState[fieldName] = event.target.value;
    setState(newState);
  };
}

export function getCookieValue (cookies, name) {
  const found = cookies.filter(c => c.trim().split('=')[0] === name);
  return found.length > 0 ? found[0].split('=')[1].split(';')[0] : null;
}

export function validateJoi (schema, text, opts: {allowUnknown: boolean}): {value: string, error: string} {
  // if (text === '') text = undefined;
  const res = schema.validate(text === undefined ? null : text, opts);
  if (res.error) {
    const error = translateJoiError(res);
    return { error };
  }
  return { value: text };
}

function translateJoiError (res) {
  const detail = res.error.details[0];
  switch (detail.type) {
    case 'any.empty':
      return 'Please provide a value';
    case 'string.min':
      return 'Must be atleast ' + detail.context.limit + ' characters long';
    case 'string.max':
      return 'The input should not be longer than ' + detail.context.limit + ' characters';
    case 'string.email':
      return 'Please provide a valid email';
    case 'string.alphanum':
      return 'Please provide a valid alphabet value';
    case 'string.phonenumber':
      return 'The phone number looks invalid!';
    default:
      return res.error.message;
  }
}
