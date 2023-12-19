import React from 'react';

const PopularProductcard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] object-contain" />
      <h3 className="text-xl font-bold mt-4">{name}</h3>
      <p className="text-gray-500">${price}</p>
    </div>
  );
};

export default PopularProductcard;