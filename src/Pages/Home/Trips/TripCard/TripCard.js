
import React from 'react';
import { Link } from 'react-router-dom';
const TripCard = (props) => {
    const { _id, name, description, image, price } = props.data;
    return (
        <div className="lg:w-1/3 md:w-3/4 sm:w-full m-2 my-7 bg-white rounded-md shadow-sm p-4 flex flex-col justify-between">
            <div className='w-full'>
                <div className="w-full h-60 rounded-lg overflow-hidden">
                    <img src={image} className="w-full h-full" alt="" />
                </div>
                <div className="py-4">
                    <p className="text-gray-700 text-3xl font-bold">{name}</p>
                    <p className="text-gray-400">
                        {description}
                    </p>
                </div>
            </div>

            <div className='w-full flex-col flex items-center'>
                <p className="text-yellow-500 font-bold text-3xl text-center">
                    {price} <span className="text-black text-xl">/person</span>
                </p>
                <Link className="w-2/3" to={`/trip/${_id}`}>
                    <button className="w-full mt-3 bg-blue-500 text-white text-center py-2 px-4">
                        Book Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TripCard;