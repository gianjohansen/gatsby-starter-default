/* eslint-disable react/prop-types, import/no-extraneous-dependencies */
import React from 'react';

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = (
    <div>
      {element}
    </div>
  );

  return ConnectedRootElement;
};
