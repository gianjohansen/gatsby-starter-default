import React from 'react';

import styled from 'styled-components';

import { Button } from '../styledComponents/theme';
import { Heading2 } from '../styledComponents/typography';
import Layout from "../layouts"
import { navigate } from "gatsby";

const PhoneLayout = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding-top: 150px;
`;
const AllTiles = styled.div`
display: flex;
flex-direction: row;
-webkit-flex-wrap: wrap;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
justify-content: center;
`;
const Tile = styled.div`
width: 320px;
margin: 0 20px 40px;
border: 1px solid #d1d7da;
padding: 20px;
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
const PhoneImage = styled.img`
margin: 0 auto 40px;
    display: block;
`;
const PhoneHeading = styled.h2`
text-align: center;
margin-bottom: 60px;
`;
const PhoneName = styled.div`
font-size: 20px;
`


const IndexPage = props => {
  const createPhone = (phone) => {
    console.log('creating phone', phone);
    const pricing = phone.pricing;
    return <Tile key={phone.brand + ' ' + phone.name}>
      <PhoneImage src={phone.media[0].largeImg} />
      <PhoneName><strong>{ phone.brand + ' ' + phone.name }</strong></PhoneName>
      <div><strong>${pricing[Object.keys(pricing)[0]].plan || "49"}</strong> per month</div>
      <ResponsiveButton onClick={ (e) => { navigate(`/details?ph=${phone.name}`); e.preventDefault(); }}>Buy now</ResponsiveButton>
    </Tile>;
  }

  const ctx = { 'abc': 'def', 'phones': [
  
    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "iPhone",
        "name": "11 Pro",
        "os": "iOS",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/iphone/iphone-11-pro",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/apple/iphone-11-pro",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 3,
        "rank_best": 3,
        "stickers": [],
        "lease": false,
        "features": [
            "5.8-inch Super Retina XDR OLED display",
            "IP68 dust and water resistant",
            "Triple-camera system with 12MP Ultra Wide, Wide, and Telephoto cameras"
        ],

        "capacity": [
                "64GB",
                "256GB",
                "512GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Consumer/Mobile/Media/Images/Handsets/iPhone/iPhone-11-pro-max/iphone-11-pro-midnight-green-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "64GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 48,
                "device_outright": 1728,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },
    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "iPhone",
        "name": "11 Pro Max",
        "os": "iOS",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/iphone/iphone-11-pro-max",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/apple/iphone-11-pro-max",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 5,
        "rank_best": 5,
        "stickers": [],
        "lease": false,
        "features": [
            "6.5-inch Super Retina XDR OLED display",
            "IP68 dust and water resistant",
            "Triple-camera system with 12MP Ultra Wide, Wide, and Telephoto cameras"
        ],

        "capacity": [
                "64GB",
                "256GB",
                "512GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Consumer/Mobile/Media/Images/Handsets/iPhone/iPhone-11-pro-max/iphone-11-pro-max-midnight-green-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "64GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 53,
                "device_outright": 1872,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },
    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "iPhone",
        "name": "11",
        "os": "iOS",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/iphone/iphone-11",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/apple/iphone-11",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 7,
        "rank_best": 7,
        "stickers": [],
        "lease": false,
        "features": [
            "6.1-inch Liquid Retina HD LCD display",
            "IP68 dust and water resistant",
            "Dual-camera system with 12MP Ultra Wide and Wide cameras"
        ],

        "capacity": [
                "64GB",
                "128GB",
                "256GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Consumer/Mobile/Media/Images/Handsets/iPhone/iPhone-11-pro-max/iphone-11-purple-green-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "64GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 33,
                "device_outright": 1188,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "type": "handset",
        "wifi_calling":true,
        "status": "available",
        "brand": "iPhone",
        "name": "7",
        "os": "iOS",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/iphone/iphone-7",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/apple/iphone-7",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 8,
        "rank_best": 150,
        "stickers": [""],
        "lease": false,
        "features": [
            "4.7-inch (diagonal) Retina HD display with 1334-by-750 resolution and wide colour",
            "3D Touch",
            "New 12MP camera, optical image stabilization, Quad-LED True Tone"
        ],

        "capacity": [
                "32GB",
                "128GB",
                "256GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Consumer/Mobile/Media/Images/Handsets/iPhone/iPhone 7/apple-iphone-7-jet-black-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "32GB": {
                    "pricingtype": "startingfrom",
                    "plan": 39,
                    "plan_credit": 0,
                    "plan_mb_cost": 0.0293,
                    "device_mro": 14,
                    "device_outright": 1320,
                    "term": 36,
                    "in_stock":true,
                    "default": true
            },

            "128GB": {
                    "pricingtype": "startingfrom",
                    "plan": 39,
                    "plan_credit": 0,
                    "plan_mb_cost": 0.0293,
                    "device_mro":14,
                    "device_outright": 2160,
                    "term": 36,
                    "in_stock":true
            },

            "256GB":{
                    "pricingtype": "startingfrom",
                    "plan": 39,
                    "plan_credit": 0,
                    "plan_mb_cost": 0.0293,
                    "device_mro": 17,
                    "device_outright": 2400,
                    "term": 36,
                    "in_stock":true
            }

        }
    },
    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "Google",
        "name": "Pixel 4",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/google/pixel-4",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/google/pixel-4",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 9,
        "rank_best": 8,
        "stickers": ["offer"],
        "lease": false,
        "features": [
            "Motion Sense",
            "Night Sight",
            "5.7\" FHD + flexible OLED (1080x2280)"
        ],

        "capacity": [],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Consumer/Assets/Images/pixel-4-black-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {
            "pricingtype": "startingfrom",
            "plan": 39,
            "plan_credit": 0,
            "plan_mb_cost": 0.0293,
            "device_mro": 29,
            "device_outright": 2520,
            "term": 36,
            "in_stock":true,
            "default": true
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "Google",
        "name": "Pixel 4 XL",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/google/pixel-4-xl",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/google/pixel-4-xl",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 10,
        "rank_best": 9,
        "stickers": ["offer"],
        "lease": false,
        "features": [
            "Motion Sense",
            "Night Sight",
            "6.3\" flexible OLED (1440x3040)"
        ],

        "capacity": [],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Consumer/Assets/Images/pixel-4-xl-black-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {
            "pricingtype": "startingfrom",
            "plan": 39,
            "plan_credit": 0,
            "plan_mb_cost": 0.0293,
            "device_mro": 35,
            "device_outright": 2772,
            "term": 36,
            "in_stock":true,
            "default": true
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "iPhone",
        "name": "XS",
        "os": "iOS",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/iphone/iphone-xs",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/apple/iphone-xs",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 11,
        "rank_best": 205,
        "stickers": [],
        "lease": false,
        "features": [
            "5.8-inch Super Retina display (OLED) with HDR",
            "IP68 dust and water resistant",
            "12MP dual cameras with dual OIS and 7MP TrueDepth front camera"
        ],

        "capacity": [
                "64GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Consumer/Mobile/Media/Images/Handsets/iPhone/iPhone XS/apple-iphone-xs-gold-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "64GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 44,
                "device_outright": 3240,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "iPhone",
        "name": "XS Max",
        "os": "iOS",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/iphone/iphone-xs-max",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/apple/iphone-xs-max",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 15,
        "rank_best": 205,
        "stickers": [],
        "lease": false,
        "features": [
            "6.5-inch Super Retina display (OLED) with HDR",
            "IP68 dust and water resistant",
            "12MP dual cameras with dual OIS and 7MP TrueDepth front camera"
        ],

        "capacity": [
                "64GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Consumer/Mobile/Media/Images/Handsets/iPhone/iPhone XS Max/apple-iphone-xs-max-gold-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "64GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 49,
                "device_outright": 3384,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "iPhone",
        "name": "XR",
        "os": "iOS",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/iphone/iphone-xr",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/apple/iphone-xr",
        "outright_url": "",
        "rating": 0,
        "network": ["4g-plus"],
        "mobile_network":["4g-plus"],
        "rank_top": 20,
        "rank_best": 205,
        "stickers": [],
        "lease": false,
        "features": [
            "6.1-inch Liquid Retina LCD display",
            "IP67 dust and water resistant",
            "12MP camera with OIS and 7MP TrueDepth front camera"
        ],

        "capacity": [
                "64GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Consumer/Mobile/Media/Images/Handsets/iPhone/iPhone XR/apple-iphone-xr-black-146x243-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "64GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 29,
                "device_outright": 2304,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "Samsung",
        "name": "Galaxy A90 5G",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/samsung/galaxy-a90",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/samsung/galaxy-a90",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["5g-capable","4g-plus"],
        "rank_top": 24,
        "rank_best": 205,
        "stickers": ["offer"],
        "lease": false,
        "features": [
            "Stream, download and post at seriously fast speeds with 5G",
            "Snapdragon 855, 7nm Octa core chipset",
            "4500mAh battery and 25W Super-fast Charging"
        ],

        "capacity": [
                "128GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/samsung-galaxy-a90/samsung-galaxy-a90-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "128GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 30,
                "device_outright": 1080,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "Samsung",
        "name": "Galaxy Note10+ 5G",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/samsung/galaxy-note10-plus-5g",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/samsung/galaxy-note10-plus-5g",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["5g-capable","4g-plus","top-pick-regional"],
        "rank_top": 28,
        "rank_best": 205,
        "stickers": ["offer"],
        "lease": false,
        "features": [
            "All-new Intelligent S Pen",
            "Quad Rear Camera with 3D Depth Camera",
            "4,300mAh (typical) battery and 45W Super-fast Charging 2.02"
        ],

        "capacity": [
                "512GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/samsung-galaxy-note10-plus/note10plus-listing.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "512GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 53,
                "device_outright": 1908,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "Samsung",
        "name": "Galaxy S10 5G",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/samsung/galaxy-s10-5g",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/samsung/galaxy-s10-5g",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["5g-capable","4g-plus"],
        "rank_top": 30,
        "rank_best": 205,
        "stickers": ["offer"],
        "lease": false,
        "features": [
            "Experience 5G on our Cinematic Dynamic AMOLED display",
            "Capture, create and film every angle with our six lens camera",
            "Power through your day with the battery designed to keep up with you"
        ],

        "capacity": [
                "256GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/samsung-galaxy-s10-5g/s10-listing.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "256GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 46,
                "device_outright": 1656,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "OPPO",
        "name": "Reno 5G",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/oppo/reno-5g",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/oppo/reno-5g",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["5g-capable","4g-plus"],
        "rank_top": 32,
        "rank_best": 210,
        "stickers": ["offer"],
        "lease": false,
        "features": [
            "10x Hybrid Zoom",
            "48MP Triple Camera delivering high resolution",
            "Ultra Night Mode for low light scenarios"
        ],

        "capacity": [
                "256GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/oppo-reno-5g/oppo-reno-5g-listing.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "256GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 36,
                "device_outright": 2760,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "OPPO",
        "name": "Reno Z",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/oppo/reno-z",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/oppo/reno-z",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 33,
        "rank_best": 210,
        "stickers": [""],
        "lease": false,
        "features": [
            "16/20MP camera with 2x Zoom",
            "32MP Selfie camera",
            "Aluminium unibody construction"
        ],

        "capacity": [
                "128GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/oppo-reno-z/oppo-reno-z-black-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "128GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 10,
                "device_outright": 360,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "Samsung",
        "name": "Galaxy Note10+",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/samsung/galaxy-note10-plus",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/samsung/galaxy-note10-plus",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus","top-pick-regional"],
        "rank_top": 35,
        "rank_best": 205,
        "stickers": [],
        "lease": false,
        "features": [
            "4,300mAh battery and 45W Super-fast Charging 2.01",
            "All-new Intelligent S Pen",
            "Quad Rear Camera with 3D Depth Camera"
        ],

        "capacity": [
                "256GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/samsung-galaxy-note10-plus/note10plus-listing.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "256GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 45,
                "device_outright": 2520,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "Samsung",
        "name": "Galaxy S10",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/samsung/galaxy-s10",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/samsung/galaxy-s10",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus","top-pick-regional"],
        "rank_top": 40,
        "rank_best": 205,
        "stickers": [],
        "lease": false,
        "features": [
            "6.1” Quad HD+ Infinity-O display with HDR10+",
            "Triple camera with Ultrawide lens",
            "Ultrasonic In-display Fingerprint"
        ],

        "capacity": [
                "128GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/Samsung-Galaxy-S10/samsung-galaxy-s10-white-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "128GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 27,
                "device_outright": 2136,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "Samsung",
        "name": "Galaxy S10+",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/samsung/galaxy-s10-plus",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/samsung/galaxy-s10-plus",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus","top-pick-regional"],
        "rank_top": 42,
        "rank_best": 205,
        "stickers": [""],
        "lease": false,
        "features": [
            "6.4” Quad HD+ Infinity-O display with HDR10+",
            "Triple camera with Ultrawide lens",
            "Ultrasonic In-display Fingerprint"
        ],

        "capacity": [
                "128GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/Samsung-Galaxy-S10-Plus/samsung-galaxy-s10-plus-white-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "128GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 36,
                "device_outright": 2400,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "Samsung",
        "name": "Galaxy A50",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/samsung/galaxy-a50",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/samsung/galaxy-a50",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus","top-pick-regional"],
        "rank_top": 55,
        "rank_best": 205,
        "stickers": [],
        "lease": false,
        "features": [
            "6.4\" FHD+ Infinity-U Display",
            "Triple Rear Camera (25MP+8MP+5MP)",
            "25MP Smart Selfie Camera"
        ],

        "capacity": [
                "64GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/samsung-a50/samsung-a50-black-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "64GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 12,
                "device_outright": 432,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "Samsung",
        "name": "Galaxy S10e",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/samsung/galaxy-s10e",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/samsung/galaxy-s10e",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus","top-pick-regional"],
        "rank_top": 60,
        "rank_best": 205,
        "stickers": [""],
        "lease": false,
        "features": [
            "5.8\" Full HD+ Infinity-O display with HDR10+",
            "Dual camera with Ultrawide lens",
            "Convenient Side Fingerprint Sensor"
        ],

        "capacity": [
                "128GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/Samsung-Galaxy-S10e/samsung-galaxy-s10e-white-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "128GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 34,
                "device_outright": 1536,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "Samsung",
        "name": "Galaxy S9",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/samsung/galaxy-s9",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/samsung/galaxy-s9",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus","top-pick-regional"],
        "rank_top": 80,
        "rank_best": 205,
        "stickers": [],
        "lease": false,
        "features": [
            "12MP Super Speed camera with Super Slow-mo",
            "5.8” Quad HD+ Infinity Display"
        ],

        "capacity": [
                "64GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/Samsung S9/samsung-galaxy-s9-purple-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "64GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 20,
                "device_outright": 2040,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "Samsung",
        "name": "Galaxy S9+",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/samsung/galaxy-s9-plus",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/samsung/galaxy-s9-plus",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus","top-pick-regional"],
        "rank_top": 90,
        "rank_best": 205,
        "stickers": [""],
        "lease": false,
        "features": [
            "12MP Super Speed camera with Super Slow-mo",
            "6.2” Quad HD+ Infinity Display"
        ],

        "capacity": [
                "64GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/Samsung S9/samsung-galaxy-s9-purple-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "64GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 34,
                "device_outright": 2160,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "Google",
        "name": "Pixel 3",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/google/pixel-3",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/google/pixel-3",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 100,
        "rank_best": 205,
        "stickers": [""],
        "lease": false,
        "features": [
            "5.5” FHD+ flexible OLED (2160 x 1080)",
            "12.2MP camera with Group Selfies",
            "With the Google Assistant built-in"
        ],

        "capacity": [],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/Google-Pixel-3/Pixel3_White-146x243-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {
            "pricingtype": "startingfrom",
            "plan": 39,
            "plan_credit": 0,
            "plan_mb_cost": 0.0293,
            "device_mro": 23,
            "device_outright": 1800,
            "term": 36,
            "in_stock":true,
            "default": true
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "Google",
        "name": "Pixel 3 XL",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/google/pixel-3-xl",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/google/pixel-3-xl",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 110,
        "rank_best": 205,
        "stickers": [""],
        "lease": false,
        "features": [
            "6.3” QHD+ flexible OLED (2960 x 1440)",
            "12.2MP camera with Group Selfies",
            "With the Google Assistant built-in"
        ],

        "capacity": [
                "64GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/Google-Pixel-3-XL/Pixel3XL_White-colour-146x243-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "64GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 31,
                "device_outright": 1920,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },

    {
        "visible": true,
        "type": "handset",
        "status":"available",
        "brand": "Huawei",
        "name": "P30 Lite",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/huawei/p30-lite",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/huawei/p30-lite",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 116,
        "rank_best": 55,
        "stickers": ["new"],
        "features": [
            "Beauty in Every Shot",
            "Wider View. Wider Possibilities",
            "Your Smart Camera Assistant"
        ],



        "capacity":[],
        "colour": [],
        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/huawei-p30-lite/huawei-p30-lite-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {
            "pricingtype": "startingfrom",
            "plan": 39,
            "plan_credit": 0,
            "plan_mb_cost": 0.0293,
            "device_mro": 12,
            "device_outright": 432,
            "term": 36,
            "in_stock":true,
            "default": true
        }
    },

    {
        "visible": true,
        "type": "handset",
        "status":"available",
        "brand": "Huawei",
        "name": "P30",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/huawei/p30",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/huawei/p30",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 117,
        "rank_best": 55,
        "stickers": [],
        "features": [
            "AI Powered Leica Camera System",
            "Super Ultra Wide Angle Photography",
            "Super Night Photography & Videography"
        ],



        "capacity":[],
        "colour": [],
        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/huawei-p30/huawei-P30-Aurora-LRG.png",
                "smallImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/huawei-p30/huawei-P30-Aurora-SML.png",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {
            "pricingtype": "startingfrom",
            "plan": 39,
            "plan_credit": 0,
            "plan_mb_cost": 0.0293,
            "device_mro": 25,
            "device_outright": 900,
            "term": 36,
            "in_stock":true,
            "default": true
        }
    },

    {
        "visible": true,
        "type": "handset",
        "status":"available",
        "brand": "Huawei",
        "name": "P30 Pro",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/huawei/p30-pro",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/huawei/p30-pro",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 118,
        "rank_best": 55,
        "stickers": [],
        "features": [
            "AI Powered Leica Camera System",
            "Super Ultra Wide Angle Photography",
            "Super Night Photography & Videography"
        ],



        "capacity":[],
        "colour": [],
        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/huawei-p30-pro/huawei-P30-Pro-aurora-LRG.png",
                "smallImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/huawei-p30-pro/huawei-P30-Pro-aurora-SML.png",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {
            "pricingtype": "startingfrom",
            "plan": 39,
            "plan_credit": 0,
            "plan_mb_cost": 0.0293,
            "device_mro": 36,
            "device_outright": 1296,
            "term": 36,
            "in_stock":true,
            "default": true
        }
    },




    {
        "visible": true,
        "type": "handset",
        "status":"available",
        "brand": "Huawei",
        "name": "Mate20 Pro",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/huawei/mate20-pro",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/huawei/mate20-pro",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 180,
        "rank_best": 55,
        "stickers": [],
        "features": [
            "Precise 6.39\" OLED display with in-screen fingerprint sensor",
            "AI-powered LEICA triple lens 40 MP main camera",
            "Just 30 minutes charge for over a day's use"
        ],



        "capacity":[],
        "colour": [],
        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/Huawei Mate20 Pro/huawei-mate20-pro-LRG.png",
                "smallImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/Huawei Mate20 Pro/huawei-mate20-pro-SML.png",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {
            "pricingtype": "startingfrom",
            "plan": 39,
            "plan_credit": 0,
            "plan_mb_cost": 0.0293,
            "device_mro": 27,
            "device_outright": 972,
            "term": 36,
            "in_stock":true,
            "default": true
        }
    },

    {
        "visible": true,
        "type": "handset",
        "status": "available",
        "brand": "Samsung",
        "name": "Galaxy S8",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/samsung/galaxy-s8",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/samsung/galaxy-s8",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus","top-pick-regional"],
        "rank_top": 160,
        "rank_best": 160,
        "wifi_calling": true,
        "stickers": [],
        "lease": false,
        "features": [
            "5.8\" Infinity Display with QuadHD+ resolution",
            "12MP Dual Pixel Camera with 8MP front camera",
            "Water and dust resistant (IP68)"
        ],



        "capacity": [],
        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared%20Media/Devices/MobilePhones/Samsung%20S8/samsung-galaxy-s8-black-LRG.png",
                "smallImg": "//smb.optus.com.au/opfiles/Shop/Shared%20Media/Devices/MobilePhones/Samsung%20S8/samsung-galaxy-s8-black-SML.png",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {
            "pricingtype": "startingfrom",
            "plan": 39,
            "plan_credit": 0,
            "plan_mb_cost":0.0293,
            "device_mro": 28,
            "device_outright": 1920,
            "term": 36,
            "in_stock":true,
            "default": true
        }
    },

    {
        "visible": true,
        "wifi_calling":true,
        "type": "handset",
        "status": "available",
        "brand": "iPhone",
        "name": "8",
        "os": "iOS",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/iphone/iphone-8",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/apple/iphone-8",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 170,
        "rank_best": 210,
        "stickers": [],
        "lease": false,
        "features": [
            "4.7-inch Retina HD display with True Tone",
            "All-glass and aluminium design, water and dust resistant",
            "12MP camera with OIS and 4K video up to 60 fps"
        ],

        "capacity": [
            "64GB"
        ],

        "colour": [],

        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Consumer/Mobile/Media/Images/Handsets/iPhone/iPhone 8/apple-iphone-8-gold-LRG.png",
                "smallImg": "",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {

            "64GB": {
                "pricingtype": "startingfrom",
                "plan": 39,
                "plan_credit": 0,
                "plan_mb_cost": 0.0293,
                "device_mro": 22,
                "device_outright": 2040,
                "term": 36,
                "in_stock":true,
                "default": true
            }
        }
    },




    {
        "visible": true,
        "type": "handset",
        "status":"available",
        "brand": "Huawei",
        "name": "Nova 3i",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/huawei/nova-3i",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/huawei/nova-3i",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 200,
        "rank_best": 55,
        "stickers": [""],
        "features": [
            "6.3 inch* HUAWEI FullView Display 2.0 featuring an ultra-slim bezel",
            "Four Camera System: AI enabled Dual Front & Dual Rear Cameras",
            "128GB built-in memory"
        ],



        "capacity":[],
        "colour": [],
        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/Huawei nova 3i/Huawei-Nova-3i-146x243-LRG .png",
                "smallImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/Huawei nova 3i/Huawei-Nova-3i-60x100-SML.png",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {
            "pricingtype": "startingfrom",
            "plan": 39,
            "plan_credit": 0,
            "plan_mb_cost": 0.0293,
            "device_mro": 17,
            "device_outright": 1488,
            "term": 36,
            "in_stock":true,
            "default": true
        }
    },



    {
        "visible": true,
        "type": "handset",
        "status":"available",
        "brand": "OPPO",
        "name": "R15 Pro",
        "os": "Android",
        "url_cmr": "https://www.optus.com.au/shop/mobile/phones/oppo/r15-pro",
        "url_smb": "https://www.optus.com.au/business/mobile/phones/oppo/r15-pro",
        "outright_url": "",
        "rating": 0,
        "network": [""],
        "mobile_network":["4g-plus"],
        "rank_top": 210,
        "rank_best": 55,
        "stickers": [""],
        "features": [
            "6.28\" Full HD+ Touchscreen",
            "Dual 20MP AI-enhanced Cameras",
            "NFC enabled and Water resistant (IP67)"
        ],



        "capacity":[],
        "colour": [],
        "media": [
            {
                "type": "image",
                "largeImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/Oppo-R15-Pro/oppo-r15pro-purple-listingpage.png",
                "smallImg": "//smb.optus.com.au/opfiles/Shop/Shared Media/Devices/MobilePhones/Oppo-R15-Pro/oppo-r15-pro-purple-SML.png",
                "default": true,
                "quickview": false
            }
        ],

        "pricing": {
            "pricingtype": "startingfrom",
            "plan": 39,
            "plan_credit": 0,
            "plan_mb_cost": 0.0293,
            "device_mro": 16,
            "device_outright": 1776,
            "term": 36,
            "in_stock":true,
            "default": true
        }
    }

]
 };
  return (
    <Layout>
      <PhoneLayout>
        <PhoneHeading>Shop All Phones</PhoneHeading>
        <AllTiles>
        { ctx.phones.map(createPhone.bind(this)) }
        </AllTiles>
      </PhoneLayout>
    </Layout>
  );
};

export default IndexPage;
