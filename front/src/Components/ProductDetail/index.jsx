import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetail = () => {
  // const { productId } = useParams(); // Obtener el productId de la URL
  // const [product, setProduct] = useState(null);

  // const fetchProductDetails = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3000/api/v1/products/:1`);
  //     setProduct(response.data);
  //   } catch (error) {
  //     console.error("Error fetching product details:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProductDetails();
  // }, [productId]);

  // if (!product) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <h1>hola munddo soy un jaboncito en detalle</h1>
    </div>
    // <div>
    //   <h1>{product.name}</h1>
    //   <p>{product.description}</p>
    //   <p>Price: ${product.price}</p>
    //   {/* Otros detalles del producto */}
    // </div>
  );
};

export default ProductDetail;
