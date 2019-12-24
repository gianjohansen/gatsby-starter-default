import React from 'react';
import HeaderControlButton from './HeaderControlButton';
import { useHeaderContext } from './HeaderContext';

const HeaderSearch = () => {
  const [, headerContextDispatcher] = useHeaderContext();

  const openSearch = value => {
    headerContextDispatcher({ payload: { searchOpen: value } });
  };

  return (
    <>
      <HeaderControlButton
        icon="search"
        text="Search"
        onClick={() => openSearch(true)}
      />
    </>
  );
};

export default HeaderSearch;
