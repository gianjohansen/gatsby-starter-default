import { createContext, useContext } from 'react';

const HeaderContext = createContext();

export const reducer = (state, action) => {
  const type = action.type || 'updateState';

  if (type === 'updateState') {
    return { ...state, ...action.payload };
  }
  return state;
};

export const useHeaderContext = () => useContext(HeaderContext);

export default HeaderContext;
