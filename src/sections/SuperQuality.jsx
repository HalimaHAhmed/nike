import React from 'react';
import Button from '../Components/Button';
import shoe8 from '../assets/images/shoe8.svg';

function SuperQuality() {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide
          <span className="text-coral-red">Super</span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="font-montseeat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Our team of experts is dedicated to providing the highest quality service. From conceptualization and design, through manufacturing and installation, we ensure
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our team of highly skilled professionals is dedicated to providing
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} width={570} height={522} className='object-contain'/>

      </div>
    </section>
  );
}

export default SuperQuality;