import React from 'react';

import styled from 'styled-components';

import { Button } from '../styledComponents/theme';
import { Heading2 } from '../styledComponents/typography';
import Layout from "../layouts"
import { navigate } from "gatsby"

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;
const BannerBase = styled.div`
visibility: visible;
    opacity: 1;
`;
const BlueBanner = styled.div`
-webkit-transition: all 250ms ease-in-out;
    transition: all 250ms ease-in-out;
    position: relative;
    padding-top: 92px;
    padding-bottom: 92px;
    text-align: inherit;
    background-color: #00a3ad;
    background-attachment: scroll;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;

display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
`;
const BlackBanner = styled.div`
-webkit-transition: all 250ms ease-in-out;
    transition: all 250ms ease-in-out;
    position: relative;
    padding-top: 92px;
    padding-bottom: 92px;
    text-align: inherit;
    background-color: #000;
    background-attachment: scroll;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;

display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
`;
const PromoBannerWrapper = styled.div`
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
padding-top: 92px;
@media screen and (max-width: 720px) {
  padding-top: 20px;
}
`;
const PromoBanner = styled.div`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
text-align: left;
-webkit-flex-direction: row;
-ms-flex-direction: row;
flex-direction: row;
@media screen and (max-width: 720px) {
  display: block;
}
`;
const ContentSection = styled.div`
width: 50%;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    margin-bottom: 0;
    @media screen and (max-width: 720px) {
      padding: 20px;
      width: 100%;
    }
`;
const ImageSection = styled.div`
width: 50%;
-webkit-align-items: flex-end;
-webkit-box-align: flex-end;
-ms-flex-align: flex-end;
align-items: flex-end;
-webkit-box-pack: end;
-webkit-justify-content: flex-end;
-ms-flex-pack: end;
justify-content: flex-end;
margin-bottom: 0;
@media screen and (max-width: 720px) {
  padding: 20px;
  width: 100%;
}
`;
const ContentHeading = styled.h1`
font-size: 60px;
width: 100%;
line-height: 1;
font-weight: 700;
text-transform: none;
overflow-wrap: break-word;
margin: 0px 0px 20px;
@media screen and (max-width: 720px) {
  font-size: 24px;
}
`;
const ContentSubHeading = styled.div`
width: 100%;
font-size: 24px;
line-height: 30px;
max-width: 650px;
margin: 0px 0px 20px;
font-weight: normal;
text-transform: none;
`;
const ContentDescription = styled.div`
width: 100%;
    font-size: 16px;
    line-height: 24px;
    max-width: 650px;
    margin-bottom: 20px;
`;
const WhiteHeading = styled.h1`
font-size: 60px;
width: 100%;
line-height: 1;
font-weight: 700;
text-transform: none;
overflow-wrap: break-word;
margin: 0px 0px 20px;
color: #FFF;
`;
const WhiteSubHeading = styled.div`
width: 100%;
font-size: 24px;
line-height: 30px;
max-width: 650px;
margin: 0px 0px 20px;
font-weight: normal;
text-transform: none;
color: #FFF;
`;
const WhiteDescription = styled.div`
width: 100%;
    font-size: 16px;
    line-height: 24px;
    max-width: 650px;
    margin-bottom: 20px;
    color: #FFF;
`;
const ResponsiveImage = styled.img`
max-width: 100%;
-webkit-transition: opacity 300ms ease-in-out;
transition: opacity 300ms ease-in-out;
opacity: 1;
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
`;


const IndexPage = props => {
  const createPhone = (phone) => {
    const { history } = props;
    console.log('creating phone', phone);
    return <div key={phone.name}>
      <a href={`/phone/${phone.name}`} onClick={ (e) => { history.push(`/phone/${phone.name}`); e.preventDefault(); }}>{ phone.name }</a>
    </div>;
  }

  const { pageContext } = props;
  return (
    <Layout>
      <div id="b41ebad1-2040-11ea-b995-73069e538de9" data-component="ux-banner-promo">
        <BannerBase>
            <BlueBanner>
                <PromoBannerWrapper>
                    <Container>
                        <PromoBanner>
                            <ContentSection>
                                <ContentHeading><div className="cmb-title sd-component-text-title sd-component-standard-text-base sd-component-text-base sd-component-base">
                                    Help us shape our new online shop experience 
                                  </div>
                                </ContentHeading>
                                <ContentSubHeading><div className="cmb-subtitle sd-component-text-subtitle sd-component-standard-text-base sd-component-text-base sd-component-base">
                                  Our new online shop is getting ready to launch – but we can’t do it without you! 
                                </div></ContentSubHeading>
                                <ContentDescription>
                                    <div className="cmb-description sd-component-text-description sd-component-standard-text-base sd-component-text-base sd-component-base">
                                        You could be rewarded with a $20 Coles Myer giftcard and Beats Solo3 headphones or Optus branded shoes with $30 purchase and feedback.&nbsp;&nbsp;
                                        <a href="https://espressoau.singtelgroup.net/depts/springdigitalshop/Documents/Spring%20Digital%20Beta%20Launch%20T%20and%20Cs.pdf">T &amp; C’s</a>&nbsp;apply.&nbsp;&nbsp;
                                        <br /> Authorised under NSW Permit No. LTPS/19/34925 &amp; SA Permit No. T19/857
                                    </div>
                                </ContentDescription>
                            </ContentSection>
                            <ImageSection className="PromoBanner__ImageSection-sc-1m2ci64-3 kxqsrO">
                              <ResponsiveImage src="https://www.optus.com.au/content/dam/optus/images/promotions/survey/banner-1024x1024px.png/renditions/version-1559015084664/492.png" srcset="https://www.optus.com.au/content/dam/optus/images/promotions/survey/banner-1024x1024px.png/renditions/version-1559015084664/492.png 492w, https://www.optus.com.au/content/dam/optus/images/promotions/survey/banner-1024x1024px.png/renditions/version-1559015084664/852.png 852w, https://www.optus.com.au/content/dam/optus/images/promotions/survey/banner-1024x1024px.png/renditions/version-1559015084664/1020.png 1020w" />
                            </ImageSection>
                        </PromoBanner>
                    </Container>
                </PromoBannerWrapper>
            </BlueBanner>
        </BannerBase>
        <BannerBase>
            <BlackBanner>
                <PromoBannerWrapper>
                    <Container>
                        <PromoBanner>
                            <ContentSection>
                                <WhiteHeading>Shop all mobile</WhiteHeading>
                                <WhiteSubHeading>Your plan, your way.</WhiteSubHeading>
                                <WhiteDescription>Choose your ideal phone and pay it off interest free over 12, 24 or 36 months.
                                  <ResponsiveButton onClick={ (e) => { navigate(`/mobile`); e.preventDefault(); }}>Learn more</ResponsiveButton>
                                </WhiteDescription>
                            </ContentSection>
                            <ImageSection className="PromoBanner__ImageSection-sc-1m2ci64-3 kxqsrO">
                              <ResponsiveImage src="https://smb.optus.com.au/opfiles/Shop/Consumer/Assets/Images/Prepaid/double-data-online-only-120gb.png" />
                            </ImageSection>
                        </PromoBanner>
                    </Container>
                </PromoBannerWrapper>
            </BlackBanner>
        </BannerBase>
    </div>
    </Layout>
  );
};

export default IndexPage;
