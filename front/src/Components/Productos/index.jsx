import bgi2 from "../../assets/img/pexels-karolina-grabowska-4210336.jpg";
const Componente = () => {

  const cardsData = [
    { id: 1, title: "Jabon Blackrose", price: 3000, img: "blackrose.jpg", label: "blackrose" },

  ];


  return (
    <div>
      <div className="hero min-h-[100vh] w-auto flex flex-col justify-center items-center ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgi2})`,
            backgroundSize: "cover",
            backgroundPosition: "top", // Centra la imagen

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
    Jabones
  </h1>
  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light -mt-2 md:-mt-3">
    Artesanales
  </span>
</div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 relative z-2 overflow-y-auto h-[calc(75vh-12rem)] pr-6">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-white cursor-pointer w-56 h-60 rounded-lg"
              onClick={() => showProduct(card)}
            >
              <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                  {card.label}
                </span>
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={card.img}
                  alt={card.title}
                />
              </figure>
              <p className="flex justify-between items-center px-2">
                <span className="text-sm font-light">{card.title}</span>
                <span className="text-lg font-medium">$ {card.price}</span>
              </p>
            </div>
          ))}
        </div>

        

      </div>
    </div>
  );
};

export default Componente;
