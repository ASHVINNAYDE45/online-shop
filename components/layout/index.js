import HeaderPage from './header';
import React from 'react'
import FooterPage from './footerPage';

function LayoutPage({children}) {
  return (
    <div>
        <HeaderPage/>
         {children}
        <FooterPage/>

    </div>
  )
}

export default LayoutPage;