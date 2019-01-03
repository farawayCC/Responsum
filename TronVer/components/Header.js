import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '15px' }}>
      <Link route="/">
        <a className="item">
          DecReview
        </a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Products</a>
        </Link>

        <Link route="/products/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  )
};
