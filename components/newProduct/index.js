

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js


function NewProduct() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setData(data);
                setFilter(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getProducts();

    }, []);

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className='btn btn-outline-dark' onClick={() => setFilter(data)}>
                        All
                    </button >
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>
                        Mens Clothing
                    </button >
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>
                        Womens Clothing
                    </button >
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>
                        Jewelery
                    </button >
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>
                        Electronic Item
                    </button >
                </div>
                {filter.map((product) => {
                    return (
                        <div className='col-md-3' key={product.id}>
                            <div className="card h-100 text-center p-4">
                                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    {/* Use Link to navigate to the product view page */}
                                    <Link href={`/productView/${product.id}`}>
                                        <button className="btn btn-outline-dark">Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    };

    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">
                            Latest Products
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <div>Loading...</div> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
}

export default NewProduct;

