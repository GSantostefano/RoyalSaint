// src/pages/Componente.js
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import bgi2 from "../../assets/img/pexels-karolina-grabowska-4210336.jpg";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from '../../Context';
import Card from '../Card/index';
import Loading from '../Loading/Loading'; // Importamos el componente Loading
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';

const Componente = () => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true); // Agregar estado de carga
  const navigate = useNavigate();
  const context = useContext(ShoppingCartContext);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://royalsaint.onrender.com/api/v1/products/");
      setCardsData(response.data);
      setLoading(false); // Los datos se han cargado, actualizamos el estado
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false); // Si hay error, también dejamos de mostrar el loading
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    if (!context.cartProducts.some(product => product.id === productData.id)) {
      context.setCount(context.count + 1);
      context.setCartProducts([...context.cartProducts, productData]);
      context.openCheckoutSideMenu();
      context.closeProductDetail();
    }
  };

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.some(product => product.id === id);
    return (
      <div
        className={`absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 ${isInCart ? 'bg-black' : 'bg-white'}`}
        onClick={(event) => !isInCart && addProductsToCart(event, cardsData.find(card => card.id === id))}>
        {isInCart ? <CheckIcon className="h-6 w-6 text-white" /> : <PlusIcon className="h-6 w-6 text-black" />}
      </div>
    );
  };

  if (loading) {
    return <Loading />; // Si estamos en estado de carga, mostramos el componente Loading
  }

  return (
    <div>
      <div className="hero min-h-[100vh] w-full flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-cover bg-top filter blur-sm" style={{ backgroundImage: `url(${bgi2})` }} />
        <div
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex flex-col items-center text-white relative z-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8))',
          }}
        >
          Jabones
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-2">Artesanales</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 p-6 md:p-10 w-full max-w-7xl">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              card={card}
              showProduct={showProduct}
              renderIcon={renderIcon}
              navigate={navigate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Componente;
