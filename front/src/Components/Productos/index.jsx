import { useEffect, useState } from 'react';
import axios from 'axios';
import bgi2 from "../../assets/img/pexels-karolina-grabowska-4210336.jpg";
import { useNavigate } from 'react-router-dom';


const Componente = () => {
  const [cardsData, setCardsData] = useState([]); // Estado para almacenar los productos

  const navigate = useNavigate();
  // Función para hacer la llamada al backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/products/');
      setCardsData(response.data); // Asigna los productos al estado
    } catch (error) {
      console.error("Error fetching products:", error); // Manejo de errores
    }
  };

  useEffect(() => {
    fetchProducts(); // Llama a la función para obtener productos al montar el componente
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  return (
    <div>
      <div className="hero min-h-[100vh] w-full flex flex-col justify-center items-center relative">
        {/* Background with blur */}
        <div
          className="absolute inset-0 bg-cover bg-top filter blur-sm"
          style={{
            backgroundImage: `url(${bgi2})`,
          }}
        />
  
        {/* Hero Text */}
        <div
          className="flex flex-col items-center text-white relative z-10 mt-24 md:mt-32 lg:mt-40"
          style={{
            fontFamily: "'Playfair Display', serif",
            filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8))",
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Jabones
          </h1>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-2">
            Artesanales
          </span>
        </div>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 p-6 md:p-10 w-full max-w-7xl">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="border border-white hover:shadow-lg hover:shadow-white/50 bg-white cursor-pointer w-full h-auto rounded-lg overflow-hidden transform transition-all duration-300"
            >
              <figure className="relative w-full h-48 sm:h-52 md:h-60 lg:h-72">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded text-black text-xs m-2 px-3 py-0.5">
                  {card.label}
                  <span className="text-sm font-light ml-1">{card.category.name}</span>
                </span>
                <div className="w-full h-full overflow-hidden rounded-lg group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={card.image}
                    alt={card.category.name}
                  />
                </div>
              </figure>
  
              {/* Product Details */}
              <div className="px-4 py-3 text-center">
                <p className="text-black text-lg font-semibold truncate">{card.name}</p>
                <p className="text-black text-xl font-bold">${card.price}</p>
              </div>
  
              {/* Details Button */}
              <div className="flex justify-center pb-4">
                <button
                  className="w-10/12 md:w-4/5 lg:w-3/4 py-2 border border-black text-sm font-medium rounded-md bg-white text-black hover:bg-black hover:text-white transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/productdetail/${card.id}`, { state: { card } });
                  }}
                >
                  Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Componente;
