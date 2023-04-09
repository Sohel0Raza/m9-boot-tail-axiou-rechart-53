import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([])

    useEffect(()=>{
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    }, [])
    return (
        <div className='w-10/12 mx-auto mb-5'>
            <h2 className='text-3xl font-semibold text-red-900 my-8'>Awesome Affordable Prices</h2>
            <div className='md:grid grid-cols-3 gap-5'>
            {
                prices.map(price=> <PriceCard 
                key={price.id}
                price={price}
                ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;