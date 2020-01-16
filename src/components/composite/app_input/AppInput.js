import React from 'react';
import TextField from '@material-ui/core/TextField';

interface Props{
    onChange: (text: string)=>void,
    value: string,
    style?: any,
    className: any,
    placeHolder: string,
    variant: string
}
function AppInput (props: Props) {
  const { onChange, value, style, className, placeHolder, variant } = props;
  return (
    <TextField label={placeHolder} variant={variant} style={style} className={className} value={value} onChange={(e) => { onChange(e.target.value); }}/>
  );
}

export default React.memo(AppInput);
