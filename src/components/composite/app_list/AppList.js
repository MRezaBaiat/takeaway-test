import React from 'react';
import List from '@material-ui/core/List';

interface Props<T>{
    items: T[],
    render: (data: T)=>any,
    style?: any,
    className?: any
}
function AppComp (props: Props) {
  const { items, style, className, render } = props;
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={className}
      style={style}
    >
      {
        items.map((item) => {
          return render(item);
        })
      }
    </List>
  );
}

export default React.memo(AppComp);
