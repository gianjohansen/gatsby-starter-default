import React from 'react';
import HeaderControlButton from './HeaderControlButton';
import styled from 'styled-components';
import fetchJSON from '../utils/fetchJSON';
import get from 'lodash-es/get';
import { size } from '../Breakpoints/Breakpoints';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

const EmptyCartPopup = loadable(() => import('./EmptyCartPopup'));

const Wrapper = styled.div`
  position: relative;
  .badge {
    box-sizing: border-box;
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 12px;
    line-height: 16px;
    font-family: MarkProBold;
    color: #000;
    text-align: center;
    width: 16px;
    height: 16px;
    background: #fdcc08;
    border-radius: 50%;
    padding-top: 2px;
    display: inline-block;

    @media (min-width: ${size.largeAndUp}px) {
      left: 30px;
    }
  }
`;

const fetchProductCount = encryptedOrderId => {
  const encodedId = encodeURIComponent(encryptedOrderId);
  const url = `/mcssapi/rp-webapp-9-common/ordering/anonymous/searchOrder?encryptedOrderId=${encodedId}`;

  return fetchJSON(url).then(data => {
    return get(data, 'ImplSearchOrderRestOutput.cartHeader.productsCounter', 0);
  });
};

const goToCart = url => {
  if (url) {
    location.href = url;
  }
};

const HeaderCart = ({ shoppingCartUrl = '' }) => {
  const [productCount, setProductCount] = React.useState(0);
  const [showEmptyCartPopup, setEmptyCartPopup] = React.useState(false);

  React.useEffect(() => {
    const encryptedOrderId = localStorage.getItem('encrOid');
    if (encryptedOrderId) {
      fetchProductCount(encryptedOrderId).then(count => setProductCount(count));
    }
  }, []);

  if (!productCount) {
    return (
      <Wrapper>
        <HeaderControlButton
          icon="cart"
          text="Cart"
          ariaLabel="You have no items in your cart"
          onClick={() => setEmptyCartPopup(true)}
        />
        {showEmptyCartPopup && (
          <EmptyCartPopup onClose={() => setEmptyCartPopup(false)} />
        )}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <span className="badge" aria-hidden="true">
        {productCount}
      </span>
      <HeaderControlButton
        icon="cart"
        text="Cart"
        ariaLabel={`You have ${productCount} item${
          productCount > 1 ? 's' : ''
        } in your cart. Click to go to your shopping cart`}
        onClick={() => goToCart(shoppingCartUrl)}
      />
    </Wrapper>
  );
};

HeaderCart.propTypes = {
  shoppingCartUrl: PropTypes.string
};

export default HeaderCart;
