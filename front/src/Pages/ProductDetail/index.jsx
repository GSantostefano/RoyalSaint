import Layout from '../../Components/Layout';
import { useLocation } from 'react-router-dom';

function ProductDetail() {
  const { state } = useLocation(); // Accede al objeto `state` enviado con `navigate`
  const { card } = state || {}; // Desestructura `card` desde el `state`
console.log(card);
  if (!card) {
    return <p>Producto no encontrado</p>; // Si no hay `card`, muestra un mensaje de error
  }

  return (
    <Layout>
      <div>
        <h2>{card.name}</h2>
        <p>Precio: ${card.price}</p>
        <p>Categoría: {card.category.name}</p>
        <img src={card.image} alt={card.name} />
        {/* Puedes mostrar aquí más detalles del producto */}
      </div>
    </Layout>
  );
}

export default ProductDetail;
