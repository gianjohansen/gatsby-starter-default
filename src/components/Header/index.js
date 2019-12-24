import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SignIn from '../SignIn/index';
import GoogleIcon from '../Icons/Google';

const HeaderWrapper = styled.div`
  position: absolute;
  top: 20px;
  width: 100%;
  z-index: 3;
  font-family: "Lato";

  @media screen and (max-width: 700px) {
    top: 0;
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;
const HeaderTop = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 42px;
  position: relative;
  background: #000;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
`;
const NavLevel1 = styled.div`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
position: relative;
z-index: 1;
`;
const NavLevel1Link = styled.div`
text-transform: uppercase;
margin: 0 10px;
-webkit-text-decoration: none;
text-decoration: none;
display: inline-block;
font-size: 12px;
font-family: Lato;
-webkit-letter-spacing: 0.4px;
-moz-letter-spacing: 0.4px;
-ms-letter-spacing: 0.4px;
letter-spacing: 0.4px;
color: #fff;
-webkit-font-smoothing: antialiased;
-webkit-transition: color 250ms ease-out;
transition: color 250ms ease-out;
line-height: inherit;
position: relative;
font-weight: 700;
`;
const NavLevel2 = styled.div`
background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #d1d7da;
    height: 30px;
    line-height: 30px;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;
const NavLevel2Link = styled.div`
margin: 0 10px;
-webkit-text-decoration: none;
text-decoration: none;
display: inline-block;
font-size: 14px;
line-height: 30px;
font-family: Lato;
color: #191919;
-webkit-font-smoothing: antialiased;
position: relative;
-webkit-transition: color 250ms ease-out;
transition: color 250ms ease-out;
line-height: inherit;
font-weight: 700;
`;

const BACKGROUND = 'background-color: #20232a';

const Header = ({ background, title, isAuthed }) => (
  <div id="a9df9ec0-203d-11ea-8809-892de51dd2c9" data-component="ux-header-optus">
      <HeaderWrapper>
          <Container>
              <header>
                  <HeaderTop>
                      <NavLevel1><NavLevel1Link  href="/content/optus/en/for-you.html?wcmmode=disabled">For You</NavLevel1Link><NavLevel1Link  href="/content/optus/en/for-you.html?wcmmode=disabled">For Business</NavLevel1Link><NavLevel1Link  href="/content/optus/en/for-you.html?wcmmode=disabled">Enterprise</NavLevel1Link></NavLevel1>
                      <div className="OptusLogo__Wrapper-sc-1sxlcmc-0 kdjNIV">
                          <a href="/" className="OptusLogo__Link-sc-1sxlcmc-1 gMzpuv"></a>
                      </div>
                  </HeaderTop>
                  <NavLevel2>
                      <nav><NavLevel2Link href="/content/optus/en/for-you/mobile.html?wcmmode=disabled" className="HeaderNavLevel2Desktop__Link-sc-1bcp4r8-1 lfVJQk">Mobile</NavLevel2Link><NavLevel2Link href="/content/optus/en/for-you/broadband-nbn.html?wcmmode=disabled" className="HeaderNavLevel2Desktop__Link-sc-1bcp4r8-1 lfVJQk">Broadband &amp; NBN</NavLevel2Link><NavLevel2Link href="/content/optus/en/for-you/prepaid.html?wcmmode=disabled" className="HeaderNavLevel2Desktop__Link-sc-1bcp4r8-1 lfVJQk">Prepaid</NavLevel2Link><NavLevel2Link href="/content/optus/en/for-you/entertainment.html?wcmmode=disabled" className="HeaderNavLevel2Desktop__Link-sc-1bcp4r8-1 lfVJQk">Entertainment</NavLevel2Link><NavLevel2Link href="/content/optus/en/for-you/customer-extras.html?wcmmode=disabled" className="HeaderNavLevel2Desktop__Link-sc-1bcp4r8-1 lfVJQk">Perks &amp; Extras</NavLevel2Link><NavLevel2Link href="/content/optus/en/for-you/support.html?wcmmode=disabled" className="HeaderNavLevel2Desktop__Link-sc-1bcp4r8-1 lfVJQk">Help &amp; Support</NavLevel2Link><NavLevel2Link href="/content/optus/en/for-you/deals.html?wcmmode=disabled" className="HeaderNavLevel2Desktop__Link-sc-1bcp4r8-1 lfVJQk">Deals &amp; Bundles</NavLevel2Link><NavLevel2Link href="/content/optus/en/for-you/5g.html?wcmmode=disabled" className="HeaderNavLevel2Desktop__Link-sc-1bcp4r8-1 lfVJQk">5G</NavLevel2Link></nav>
                  </NavLevel2>
              </header>
          </Container>
      </HeaderWrapper>
  </div>
);

Header.defaultProps = {
  background: BACKGROUND,
};

Header.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string,
  isAuthed: PropTypes.bool,
};

export default Header;
