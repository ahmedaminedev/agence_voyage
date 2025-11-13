
import React, { useContext } from 'react';
import { circuitsAndExcursions } from '../constants';
import { AppContext, Page } from '../context/AppContext';
import { Stay } from '../types';

const CircuitCard: React.FC<{ stay: Stay, reverseLayout?: boolean }> = ({ stay, reverseLayout = false }) => {
    const { setCurrentPage } = useContext(AppContext);
    return (
        <div className={`flex flex-col ${reverseLayout ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center bg-white rounded-xl shadow-lg overflow-hidden my-8`}>
            <img src={stay.imageUrl} alt={stay.title} className="w-full lg:w-1/2 h-64 lg:h-auto object-cover" />
            <div className="p-8 lg:p-12 flex-1">
                <h3 className="text-3xl font-bold font-serif text-gray-800">{stay.title}</h3>
                <p className="mt-2 text-brand-blue font-semibold">{stay.destination} - {stay.duration} jours</p>
                <p className="mt-4 text-gray-600">{stay.description}</p>
                <div className="mt-6 flex items-center justify-between">
                    <div>
                        <span className="text-sm text-gray-500">À partir de</span>
                        <p className="text-3xl font-bold text-brand-orange">{stay.price} TND</p>
                    </div>
                     <button onClick={() => setCurrentPage(Page.StayDetail, { id: stay.id })} className="btn-gradient text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        Explorer le circuit
                    </button>
                </div>
            </div>
        </div>
    );
};

const Circuits: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/circuits-hero/1920/600')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-6xl font-serif font-bold drop-shadow-xl">Circuits & Excursions</h1>
                    <p className="mt-4 text-xl max-w-3xl mx-auto drop-shadow-lg">Découvrez le monde autrement, à travers des itinéraires pensés pour l'aventure et la découverte.</p>
                </div>
            </section>

             {/* Circuits List Section */}
            <section className="py-16 bg-brand-beige">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {circuitsAndExcursions.map((circuit, index) => (
                        <CircuitCard key={circuit.id} stay={circuit} reverseLayout={index % 2 !== 0} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Circuits;
