import React from 'react';
import Feature from '../feature/Feature';

const PriceCard = ({ price }) => {

    return (
        <div className='bg-green-100 rounded-md shadow-lg p-5 mb-7'>
            <img className='w-full mb-5' src={price.img} alt="" />
            <div>
                <h4 className='text-xl font-medium'>{price.name}</h4>
                <h6 className='font-semibold py-3 text-green-950'>Price: ${price.price}</h6>
                <p><span className='text-xl font-semibold'>Features</span>:
                    {
                        price.features.map((feature) => <Feature
                        key={feature}
                        feature={feature}
                        ></Feature>)
                    }
                </p>
                <button className='bg-red-500 px-5 py-2 rounded-md text-white mt-5'>Buy Now</button>
            </div>

        </div>
    );
};

export default PriceCard;