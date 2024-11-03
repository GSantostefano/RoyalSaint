import Layout from "../../Components/Layout";
import { useLocation } from "react-router-dom";

function ProductDetail() {
  const { state } = useLocation(); // Accede al objeto `state` enviado con `navigate`
  const { card } = state || {}; // Desestructura `card` desde el `state`
  console.log(card);
  if (!card) {
    return <p>Producto no encontrado</p>; // Si no hay `card`, muestra un mensaje de error
  }

  return (
    <Layout>
      <div className="min-h-[100vh] w-fit flex flex-col justify-top items-center p-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-center bg-clip-text tracking-wide leading-tight text-gray-800 drop-shadow-lg">
          {card.category.name} - {card.name}
        </h1>
  
        <img 
          className="min-w-full sm:min-w-3/4 md:min-w-2/3 lg:min-w-1/2 xl:min-w-1/3 
                     max-h-96 object-cover rounded-lg mt-6 mb-8"
          src={card.image} 
          alt={card.name} 
        />
  
        <div className="flex flex-col space-y-4 text-gray-700 text-lg max-w-md px-4">
          <p className="text-xl font-semibold text-green-700">
            Precio: <span className="font-bold">${card.price}</span>
          </p>
          
          <p className="text-lg font-medium text-gray-600">
            Categoría: <span className="font-bold">{card.category.name}</span>
          </p>
          
          <p className="text-md leading-relaxed text-gray-500">
            Descripción: <span className="italic">{card.description}</span>
          </p>
        </div>
      </div>
    </Layout>
  );
  
}

export default ProductDetail;
