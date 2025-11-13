import React, { useState } from 'react';
import SearchWidget from '../components/SearchWidget';
import { airlinePartners, flightFaqs } from '../constants';

// Accordion Item Component
const AccordionItem: React.FC<{
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-2">
      <button
        onClick={onClick}
        className={`w-full flex justify-between items-center p-5 text-left transition-colors duration-300 ${isOpen ? 'bg-blue-50 text-brand-blue' : 'bg-white hover:bg-gray-50'}`}
      >
        <h3 className="text-base md:text-lg font-semibold text-gray-800">{faq.question}</h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-5 bg-white border-t border-gray-200">
          <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
        </div>
      </div>
    </div>
  );
};

const Flights: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const handleFaqClick = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/colorful-suitcases/1920/1080')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 -mb-24">
                     <SearchWidget defaultTab="Vols" />
                </div>
            </section>

            <div className="pt-32 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Intro Text Section */}
                    <section className="max-w-4xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl font-bold font-serif text-gray-800">Réservez votre Vol & achetez vos billets d'avion aux meilleurs tarifs</h2>
                        <p className="text-gray-600">Vous êtes en train de planifier votre prochain voyage, pour découvrir une nouvelle destination, pour un voyage en famille, pour une virée entre amis ou pour un voyage d'affaires ? Vous souhaitez dénicher les billets d'avion qui respectent votre budget et qui vous permettent de profiter de votre voyage ? Traveltodo vous propose les meilleures offres et vous facilite la réservation de vos billets d'avion à prix imbattables selon votre plan de voyage et surtout selon votre budget !</p>
                        
                        <h3 className="text-2xl font-bold font-serif text-gray-800 pt-6">Trouvez votre vol & comparez les meilleures offres</h3>
                        <p className="text-gray-600">Au départ des aéroports de la Tunisie et de partout dans le monde, nous vous proposons les meilleures offres des compagnies aériennes nationales et internationales. Tunisair, Nouvelair, Air france, Lufthansa, Qatar Airways Turkish Airlines... Recherchez vos billets d'avion selon vos critères et vos besoins. Comparez puis sélectionnez le vol qui respecte vos dates, vos horaires de départs et d'arrivée et surtout votre budget.</p>
                        
                        <h3 className="text-2xl font-bold font-serif text-gray-800 pt-6">Achetez vos billets d'avion en ligne et voyagez malin</h3>
                        <p className="text-gray-600">Vous avez réussi à trouver le vol qui vous convient à prix imbattable sur Traveltodo ! Commandez alors vos billets d'avion et payez-les en ligne en toute sécurité et en quelques clics. Vos billets vous seront envoyés par mail sous forme de billet électronique. Vous pouvez aussi passer à l'agence Traveltodo la plus proche de chez vous pour finaliser le paiement et la réservation de votre billet d'avion.</p>
                        <p className="text-gray-600">Notre conseil : Réservez vos billets d'avion 3 à 6 mois à l'avance et partez à la découverte du monde. Vous profiterez ainsi des meilleures offres possibles vers la destination de vos rêves: Paris, Rome, Londres, Istanbul et plus encore. N'hésitez pas à nous contacter si vous avez besoin d'aide ou si vous hésitez pour la réservation et l'achat de billet d'avion en ligne. Traveltodo vous souhaite une bonne recherche et surtout les plus beaux des voyages !</p>
                    </section>

                    {/* Partners Section */}
                    <section className="py-16">
                        <h2 className="text-3xl font-bold font-serif text-center text-gray-800 mb-8">Compagnies aériennes</h2>
                        <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-8">
                            {airlinePartners.map(partner => (
                                <img key={partner.id} src={partner.logoUrl} alt={partner.name} className="h-10 sm:h-12 object-contain" />
                            ))}
                        </div>
                    </section>
                    
                    {/* FAQ Section */}
                    <section className="max-w-4xl mx-auto py-16">
                        <h2 className="text-3xl font-bold font-serif text-center text-gray-800 mb-10">Questions Les Plus Posées</h2>
                        <div className="w-full">
                            {flightFaqs.map((faq, index) => (
                                <AccordionItem 
                                    key={index}
                                    faq={faq}
                                    isOpen={openFaqIndex === index}
                                    onClick={() => handleFaqClick(index)}
                                />
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default Flights;
