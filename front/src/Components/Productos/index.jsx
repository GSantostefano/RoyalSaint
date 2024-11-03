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
      <div className="hero min-h-[100vh] w-auto flex flex-col justify-center items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgi2})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            filter: "blur(5px)",
          }}
        />

        <div
          className="mt-40 md:mt-40 lg:mt-40 flex flex-col items-center text-white relative z-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8))",
          }}
        >
          <h1
            className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Jabónes
          </h1>
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light -mt-2 md:-mt-3">
            Artesanales
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative  p-10 z-2 overflow-y-auto h-[calc(75vh-12rem)] pr-6">
        {cardsData.map((card) => (
  <div
    key={card.id}
    className=" border-spacing-x-1 border-white border-4 hover:shadow-xl hover:shadow-white/50 bg-white cursor-pointer w-56 h-120 rounded-lg overflow-hidden"
    
  >
    <figure className="relative mb-2 w-full h-3/5 p-2 rounded-lg">
      <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
        {card.label}
        <span className="text-sm font-light">{card.category.name}</span>
      </span>
      <div className="w-full h-full overflow-hidden rounded-lg group">
  <img
    className="w-[110%] h-[110%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
    src={card.image}
    alt={card.category.name}
  />
</div>

    </figure>
    <p className="grid justify-between items-center px-2">
      <span className="text-black text-xl truncate w-auto">{card.name}</span>
      <span className="text-black m-2 text-lg font-bold ml-auto font-price">$ {card.price}</span>

    </p>
    <div className="flex justify-center mt-2 mb-2">



    <button 
              className="inline-flex w-4/5 justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md text-black border-black bg-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 hover:text-white hover:border-black focus:ring-green-600"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/productdetail/${card.id}`, { state: { card } }); // Envía `card` como `state`
                console.log(card);
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
