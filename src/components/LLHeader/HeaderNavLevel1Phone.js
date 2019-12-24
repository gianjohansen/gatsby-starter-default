import React, { useState } from 'react';
import MenuButton from './MenuButton';
import { useHeaderContext } from './HeaderContext';
import loadable from '@loadable/component';

const HeaderNavLevel1PhoneItems = loadable(() =>
  import('./HeaderNavLevel1PhoneItems')
);

function HeaderNavLevel1Phone() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [{ searchOpen }] = useHeaderContext();

  return (
    <React.Fragment>
      <MenuButton onClick={isOpen => setMenuOpen(isOpen)} />
      {menuOpen && !searchOpen && <HeaderNavLevel1PhoneItems />}
    </React.Fragment>
  );
}

export default HeaderNavLevel1Phone;
