import React from 'react';
import Select from '@material-ui/core/Select';

interface Props<T>{
  data: T[],
  render: (data: T)=>any,
  value: T,
  className: string,
  onChange: (data: T)=>void
}
function AppDropDown (props: Props) {
  const { render, data, value, className, onChange } = props;
  return (
    <Select SelectDisplayProps={{ style: { backgroundColor: 'white' } }} onChange={(event) => { onChange(event.target.value); }} className={className} value={value} displayEmpty>
      {
        data.map((value) => {
          return render(value);
        })
      }
    </Select>
  );
}

export default React.memo(AppDropDown);
