import React from 'react';

import styled from 'styled-components';

import { Button } from '../styledComponents/theme';
import { Heading2 } from '../styledComponents/typography';
import Layout from "../layouts";
import { navigate } from "gatsby";

const PhoneLayout = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding-top: 150px;
  text-align: center;
  padding-bottom: 200px;
`;

const PhoneImage = styled.img`
margin: 0 auto 40px;
    display: block;
`;
const ResponsiveButton = styled.button`
display: block;
margin-top: 20px;
    background-color: #fdcc08;
    color: #000;
    border: none;
    min-width: 260px;
    padding: 15px 20px;
    -webkit-text-decoration: none;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    line-height: 1;
    margin: 20px auto 0;
`;
const PhoneName = styled.div`
    font-size: 20px;
`;
const CartWrapper = styled.div`

`;
const ItemsWrapper = styled.div`
    margin-bottom: 60px;
`;

const getItems = () => {
    let items = localStorage.getItem('cart') || '{ "items": [] }';
    items = JSON.parse(items);
    return items.items;
}
const clearItems = () => {
    localStorage.removeItem('cart');
    navigate('/');

}

const DetailsPage = props => {
 console.log(props);
  return (
    <Layout>
      <PhoneLayout>
          <Heading2>Your cart</Heading2>
          <CartWrapper>
              <ItemsWrapper>
            { getItems().map((item) => {
                return <div>{item}</div>;
            }) }
              </ItemsWrapper>
            <ResponsiveButton onClick={ (e) => { clearItems(); } }>Checkout</ResponsiveButton>
            <ResponsiveButton onClick={ (e) => { navigate('/mobile'); } }>Go back</ResponsiveButton>
          </CartWrapper>
      </PhoneLayout>
    </Layout>
  );
};

export default DetailsPage;
