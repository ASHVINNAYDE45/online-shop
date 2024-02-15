// import { useParams } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

// function ProductDetails() {
//     const {id}=useParams();
//     const[product,setProduct]=useState([]);
//     const[loading,setLoading]=useState(fasle);
    
//     useEffect(()=>{
//         const getProduct=async()=>{
//             setLoading(true);
//             const response = await fetch(`https://fakestoreapi.com/product/${id}`);
//             setProduct(await response.json());
//             setLoading(false);
//         }
//         getProduct
//     },[input]);

//     const Loading=()=>{
//         return(
//             <>
//             Loading......
//             </>
//         )
//     }
//     const ShowProduct=()=>{
//         return(
//             <>
//             <div className='col-md-6'>
//                 <img src={product.image} alt={product.title}
//                 height={400} width={400}/>

//             </div>
//             <div className='col-md-6'>
//                 <h4 className=' text-uppercase text-black-50'>
//                     {product.category}
//                 </h4>
//                 <h1 className='display-5'>
//                 {product.title}
//                 </h1>
//                 <p className='lead fw-bolder'>
//                     Rating {product.rating && product.rating.rate}
//                 </p>
//                 <h3 className='display-6 fw-bold my-4'> ${product.prize}</h3>
//                 <p className='lead'>
//                     {product.description}
              
//                 </p>
//                 <button className='btn btn-outline-dark'> Add To Cart</button>
//                     <button className='btn btn-outline-dark'> Go To Cart</button>
//             </div>
//             </>
//         )
//     }
//   return (
//     <div className="container">
//      <div className="row">
//         {loading?<loading/>:<ShowProduct/>}
//      </div>
//     </div>
//   )
// }

// export default ProductDetails


import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        };
        getProduct();
    }, [id]);

    const Loading = () => {
        return <div>Loading......</div>;
    };

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height={400} width={400} />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">Rating {product.rating && product.rating.rate}</p>
                    <h3 className="display-6 fw-bold my-4"> ${product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark">Add To Cart</button>
                    <button className="btn btn-outline-dark">Go To Cart</button>
                </div>
            </>
        );
    };

    return (
        <div className="container">
            <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        </div>
    );
}

export default ProductDetails;
