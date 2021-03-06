import { faCreditCard, faMap, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';


const Services = () => {
    const gymServices = [
        {
            icon: faMap,
            title: "Get a personalized trip",
            details: "A complete day by day itinerary\nbased on your preferences"
        },
        {
            icon: faPlaneDeparture,
            title: "Book it",
            details: "Find and book your trip destination"
        },
        {
            icon: faCreditCard,
            title: "Manage it",
            details: "Everything in one place.\nEveryone on the same page."
        }
    ];
    return (
        <div className="w-full mx-auto my-8 flex flex-wrap justify-center">

            {
                gymServices.map((item, index) => <ServiceCard key={index} data={item}></ServiceCard>)
            }
        </div>
    );
};

export default Services;