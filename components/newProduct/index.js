
import React, { useEffect, useState } from 'react'




function NewProduct() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState([]);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();

    }, []);
    const Loading = () => {
        return
        <>
            Loading.......
        </>;
    };


    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }
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
                        <>
                            <div className='col-md-3'>
                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                        <p class="card-text lead fw-bold">${product.price}</p>
                                        <a href="#" class="btn btn-outline-dark">buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </>

                    );

                })}
            </>
        );
    };
    return (
        <div>
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className=" display-6 fw-bolder text-center">
                        Latest Products
                    </h1>
                    <hr />

                </div>

            </div>
            <div className=" row justify-content-center">
                {loading ? <loading /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default NewProduct;