// src/components/Card.js


const Card = ({ card, showProduct, renderIcon, navigate }) => {
  return (
    <div
      className="border border-white hover:shadow-lg hover:shadow-white/50 bg-black/20 cursor-pointer w-full h-auto rounded-lg overflow-hidden transform transition-all duration-300"
      onClick={() => showProduct(card)}
    >
      <figure className="relative w-full h-48 sm:h-52 md:h-60 lg:h-72">
        <span className="absolute bottom-0 left-0 bg-black/10 rounded text-white text-xs m-2 px-3 py-0.5">
          {card.label} <span className="text-sm font-light ml-1">{card.category.name}</span>
        </span>
        <div className="w-full h-full overflow-hidden rounded-lg group">
          <img
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            src={card.images[0]}
            alt={card.category.name}
          />
        </div>
        {renderIcon(card.id)}
      </figure>
      <div className="px-4 py-3 text-center">
        <p className="text-white text-xl font-semibold truncate">{card.title}</p>
        <p className="text-white text-xl font-bold">${card.price}</p>
      </div>
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
  );
};

export default Card;
