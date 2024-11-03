import Layout from '../../Components/Layout'
import { useParams } from 'react-router-dom';




function ProductDetail({ products }) {
    const { id } = useParams(); // Obtener el id del producto de la URL
  // const product = products.find((prod) => prod.id === parseInt(id)); // Buscar el producto en el array

  // if (!product) return <div>Producto no encontrado</div>;

  return (
    <Layout>
      <div>
        <h1>Hola mundo</h1>
        <h1>Detalles del Producto {id}</h1>
      </div>
    </Layout>
  )
}

export default ProductDetail