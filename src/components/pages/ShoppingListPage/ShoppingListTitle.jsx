import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {ListItem} from 'widgets';

const style = {

};

@Radium
export default class ShoppingListTitlebar extends ValidatedComponent {
  static propTypes = {

  }

  render() {

    return <ListItem>
      Shopping List
    </ListItem>;
  }

}