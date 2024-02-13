import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
};

const ProductCard = ({ title, price, description, image }) => {
    const truncatedDescription = truncateDescription(description, 100);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} style={{ height: '150px', width: '180px' }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Price: ${price}</Card.Subtitle>
                <Card.Text>{truncatedDescription}</Card.Text>
                <Button variant="primary" className="me-2">Buy Now</Button>
                <Button variant="secondary">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="row">
            {products.map(product => (
                <div key={product.id} className="col-md-4">
                    <ProductCard
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                    />
                </div>
            ))}
        </div>
    );
}

export default ProductList;
