import React, {Fragment} from 'react';
import Aux from '../../hoc/Auxiliarily';
import classes from './Layout.css';

const layout = (props) => {
  return (
      <Aux>
        <div>
          Toolbar, SideDrawer, Backdrop
        </div>
        <main className={classes.Content}>
          {props.children}
        </main>
      </Aux>
  );
};

export default layout;
