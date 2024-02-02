import React from 'react'
import Header from '../layout/header';
import LayoutPage from '../layout';
import Slider from './slider';
import ShopUs from './shopUs';
import NewCustmore from './newCustmore';

function LandingPage() {
    return (
        <div>
{/* <LayoutPage/> */}
<Slider/>
<ShopUs/>
<NewCustmore/>
        </div>
    )
}

export default LandingPage;