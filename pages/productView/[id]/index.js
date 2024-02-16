// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// function ProductView() {
//     const router = useRouter();
//     const { id } = router.query; // Access the product ID from the URL query parameter
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             if (id) {
//                 try {
//                     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//                     const data = await response.json();
//                     setProduct(data);
//                     setLoading(false);
//                 } catch (error) {
//                     console.error('Error fetching product:', error);
//                 }
//             }
//         };

//         fetchProduct();
//     }, [id]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!product) {
//         return <div>Product not found</div>;
//     }

//     return (
        // <div>
        //     <h1>{product.title}</h1>
        //     <p>Price: ${product.price}</p>
        //     <p>Description: {product.description}</p>
        //     {/* Add more product details as needed */}
        // </div>
//         <div className="row">
//             <div className="col-md-6" key={product.id}>
//                 <img src={product.image} alt={product.title} height={400} width={400} />
//             </div>
//             <div className="col-md-6">
//                 <h4 className="text-uppercase text-black-50">{product.category}</h4>
//                 <h1 className="display-5">{product.title}</h1>
//                 <p className="lead fw-bolder">Rating {product.rating && product.rating.rate}</p>
//                 <h3 className="display-6 fw-bold my-4">${product.price}</h3>
//                 <p className="lead">{product.description}</p>
//                 <button className="btn btn-outline-dark">Add To Cart</button>
//                 <button className="btn btn-outline-dark">Go To Cart</button>
//             </div>
//         </div>
//     );
// }

// export default ProductView;

import ProductDetails from '@/components/productDetails'
import React from 'react'

function ProductView() {
  return (
    <ProductDetails/>
  )
}

export default ProductView