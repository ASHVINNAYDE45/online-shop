import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FaStar } from 'react-icons/fa6';
// import { useDispatch } from 'react-redux';
//  import { addCart } from '@/redux/action';

function ProductDetails() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
  

//  const dispatch= useDispatch();
//      const addProduct=(product)=>{
//          dispatch(addCart(product));
//      }
    useEffect(() => {
        const fetchProduct = async () => {
            if (id) {
                try {
                    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                    setProduct(response.data);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching product:', error);
                }
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="row mt-5"  >

            <div className="col-md-6" key={product.id} >
                <img src={product.image} alt={product.title} height={400} width={400} />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">{product.category}</h4>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead fw-bolder">Rating {product.rating && product.rating.rate}<FaStar className='fa fa-star'/></p>
                <h3 className="display-6 fw-bold my-4">${product.price}</h3>
                <p className="lead">{product.description}</p>
                <button className="btn btn-outline-dark" onClick={()=>addProduct(product)}>Add To Cart</button>
                <button className="btn btn-outline-dark">Go To Cart</button>
            </div>
        </div>
    );


}

export default ProductDetails;
