import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {ListItem} from 'widgets';

const style = {
  borderBottom: `1px solid rgba(0,0,0,.15)`,
  fontSize: 20
};

@Radium
export default class ShoppingListTitlebar extends ValidatedComponent {
  static propTypes = {

  }

  render() {

    return <ListItem key={0} style={style} big>
      Shopping List
    </ListItem>;
  }

}
