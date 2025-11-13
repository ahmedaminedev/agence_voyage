
import React, { useContext } from 'react';
import { wellnessStays } from '../constants';
import { AppContext, Page } from '../context/AppContext';
import { Stay } from '../types';

const WellnessCard: React.FC<{ stay: Stay }> = ({ stay }) => {
    const { setCurrentPage } = useContext(AppContext);
    return (
        <div 
            onClick={() => setCurrentPage(Page.StayDetail, { id: stay.id })}
            className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
            <div className="overflow-hidden">
                <img src={stay.imageUrl} alt={stay.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-semibold font-serif text-gray-800 group-hover:text-brand-orange transition-colors">{stay.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{stay.destination}</p>
                <p className="mt-3 text-gray-600">{stay.description}</p>
                 <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <p className="text-2xl font-bold text-brand-blue">{stay.price} TND</p>
                    <span className="font-semibold text-brand-orange">Découvrir &rarr;</span>
                </div>
            </div>
        </div>
    );
}

const Wellness: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-40 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/wellness-hero/1920/700')" }}>
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-6xl font-serif font-bold text-gray-800 drop-shadow-lg">Évadez-vous. Ressourcez-vous.</h1>
                    <p className="mt-4 text-xl max-w-2xl mx-auto text-gray-700 drop-shadow-md">Nos séjours bien-être sont une invitation à la détente et à la reconnexion avec soi-même.</p>
                </div>
            </section>

             {/* Stays List Section */}
            <section className="py-16 bg-brand-beige">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800">Nos Escapades Bien-Être</h2>
                        <p className="mt-2 text-gray-600">Des lieux d'exception pour une parenthèse de sérénité.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {wellnessStays.map(stay => (
                            <WellnessCard key={stay.id} stay={stay} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Wellness;
