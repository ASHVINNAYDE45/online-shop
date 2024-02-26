// import ProductData from '@/components/productData';
import React from 'react'
// import ProductList from '@/components/productList'
import NewProduct from '@/components/newProduct';
import LayoutPage from '@/components/layout';

function product() {
  return (
    // <ProductData/>

  // <ProductList/>
  <NewProduct/>
  )
}
product.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default product;