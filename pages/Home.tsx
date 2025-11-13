

import React, { useContext, useRef, useEffect, useState, ReactNode } from 'react';
import StayCard from '../components/StayCard';
import { stays, testimonials, partners, tunisianHotelPromos, aLaCarteTrips, circuitsAndExcursions, omraPackages, organizedTrips, hotelSelection } from '../constants';
import { AppContext, Page } from '../context/AppContext';
import SearchWidget from '../components/SearchWidget';
import { Stay } from '../types';


// --- NEW CARD COMPONENTS ---

const DestinationCard: React.FC<{ stay: Stay }> = ({ stay }) => {
  const { setCurrentPage, convertPrice } = useContext(AppContext);

  return (
    <div
      onClick={() => setCurrentPage(Page.StayDetail, { id: stay.id })}
      className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
    >
      <img src={stay.imageUrl} alt={stay.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-5 text-white w-full">
        <h3 className="text-2xl font-bold font-serif">{stay.title}</h3>
        <p className="text-sm opacity-90">{stay.destination}</p>
        <div className="flex justify-between items-end mt-4">
          <div>
            <span className="text-xs opacity-80">Dès</span>
            <p className="text-xl font-bold">{convertPrice(stay.price)}</p>
          </div>
          <a href="#" onClick={(e) => e.preventDefault()} className="font-semibold text-sm flex items-center">
            Voir l'offre
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const WideCard: React.FC<{ stay: Stay }> = ({ stay }) => {
  const { setCurrentPage } = useContext(AppContext);
  const LocationIcon: React.FC<{className?: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-5 h-5"}><path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.42-.25.692-.455.272-.204.57-.45.868-.72.297-.269.62-.59.924-.963.303-.372.583-.797.81-1.262a9.43 9.43 0 00.65-1.618c.203-.65.327-1.328.39-2.028.062-.7.074-1.412.03-2.128a9.042 9.042 0 00-1.826-5.245c-.582-.839-1.318-1.542-2.154-2.102a9.042 9.042 0 00-5.245-1.826 9.25 9.25 0 00-2.128.03 9.43 9.43 0 00-2.028.39 9.43 9.43 0 00-1.618.65c-.465.227-.89.507-1.262.81-.373.304-.694.627-.963.924-.27.298-.516.598-.72.868-.205.272-.355.508-.455.692a5.741 5.741 0 00-.14.282l-.008.018-.003.006-.001.002C.11 19.02 0 19 0 19s.11.02.308-.066l.002-.001zM10 8a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>);
  const CalendarIcon: React.FC<{className?: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-5 h-5"}><path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5a.75.75 0 00-.75.75v6.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75v-6.5a.75.75 0 00-.75-.75H4.75z" clipRule="evenodd" /></svg>);
  const StarIcon: React.FC<{ filled: boolean; className?: string }> = ({ filled, className }) => (<svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'} ${className}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.05 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" /></svg>);

  return (
    <div
      onClick={() => setCurrentPage(Page.StayDetail, { id: stay.id })}
      className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer aspect-video md:aspect-[2.5/1]"
    >
      <img src={stay.imageUrl} alt={stay.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full md:w-2/3">
        <h3 className="text-3xl lg:text-4xl font-bold font-serif leading-tight drop-shadow-md">{stay.title}</h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3">
          <div className="flex items-center text-sm">
            <LocationIcon className="w-4 h-4 mr-1.5" />
            <span>{stay.destination}</span>
          </div>
          <div className="flex items-center text-sm">
            <CalendarIcon className="w-4 h-4 mr-1.5" />
            <span>{stay.duration} jours</span>
          </div>
        </div>
        <div className="flex items-center mt-3">
          {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < Math.round(stay.rating)} />)}
          <span className="ml-2 text-sm opacity-90">({stay.reviews.length} avis)</span>
        </div>
      </div>
    </div>
  );
};


const ImageOverlayCard: React.FC<{ stay: Stay, buttonText?: string }> = ({ stay, buttonText = "Découvrir" }) => {
  const { setCurrentPage } = useContext(AppContext);

  return (
    <div
      onClick={() => setCurrentPage(Page.StayDetail, { id: stay.id })}
      className="relative aspect-square rounded-xl overflow-hidden shadow-lg group cursor-pointer"
    >
      <img src={stay.imageUrl} alt={stay.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white text-center transition-all duration-300 group-hover:justify-end group-hover:pb-8">
        <div className="transition-transform duration-300 group-hover:-translate-y-4">
            <h3 className="text-2xl font-bold font-serif drop-shadow-md">{stay.title}</h3>
            <p className="mt-1 text-sm opacity-90">{stay.destination}</p>
        </div>
        <button className="mt-4 bg-brand-orange text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-brand-orange-dark transition-all duration-300 shadow-md hover:shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2">
          {buttonText}
        </button>
      </div>
    </div>
  );
};


// --- Reusable Hooks & Components ---

const useAnimateOnScroll = () => {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    return ref;
};

const Carousel: React.FC<{ children: ReactNode; type?: 'normal' | '3d' }> = ({ children, type = 'normal' }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={`carousel-container ${type === '3d' ? 'carousel-3d' : ''}`}>
            <button onClick={() => scroll('left')} className="carousel-button prev">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <div ref={scrollRef} className="carousel-scroll -mx-4 px-4">
                {React.Children.map(children, (child, index) => (
                    <div key={index} className={`carousel-item w-[calc(100%-2rem)] sm:w-1/2 lg:w-1/3 ${type === '3d' ? '' : 'xl:w-1/4'} px-2`}>
                        {child}
                    </div>
                ))}
            </div>
            <button onClick={() => scroll('right')} className="carousel-button next">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
        </div>
    );
};

const FeaturedCarousel: React.FC<{ stays: Stay[] }> = ({ stays }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const changeSlide = (newIndex: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setIsAnimating(false);
        }, 300); // Corresponds to transition duration
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? stays.length - 1 : currentIndex - 1;
        changeSlide(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === stays.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        changeSlide(newIndex);
    };

    if (!stays || stays.length === 0) return null;
    
    const currentStay = stays[currentIndex];

    return (
        <div className="relative w-full h-full group">
            <div className={`transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <WideCard stay={currentStay} />
            </div>
             {/* Left Arrow */}
            <button onClick={goToPrevious} className="absolute top-1/2 -translate-y-1/2 left-4 z-10 p-2 bg-white/70 hover:bg-white rounded-full shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-800"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            {/* Right Arrow */}
            <button onClick={goToNext} className="absolute top-1/2 -translate-y-1/2 right-4 z-10 p-2 bg-white/70 hover:bg-white rounded-full shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-800"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
        </div>
    );
};

const StaySection: React.FC<{ title: string, subtitle: string, stays: Stay[], buttonText: string, buttonPage: Page, buttonParams?: any, bgColor?: string, layout?: 'grid' | 'carousel', carouselType?: 'normal' | '3d' }> = ({ title, subtitle, stays, buttonText, buttonPage, buttonParams, bgColor = 'bg-brand-beige', layout = 'grid', carouselType='normal' }) => {
  const { setCurrentPage } = useContext(AppContext);
  const sectionRef = useAnimateOnScroll();
  
  const gridCols = stays.length >= 4 ? 'lg:grid-cols-4' : `lg:grid-cols-${stays.length}`;
  
  if (!stays || stays.length === 0) return null;

  return (
    <section ref={sectionRef as React.RefObject<HTMLDivElement>} className={`py-16 ${bgColor} transition-all duration-1000 ease-out opacity-0 translate-y-10`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">{title}</h2>
        <p className="text-center mt-2 text-gray-600">{subtitle}</p>
        
        <div className="mt-12">
          {layout === 'grid' ? (
              <div className={`grid gap-8 md:grid-cols-2 ${gridCols}`}>
                {stays.map(stay => <StayCard key={stay.id} stay={stay} />)}
              </div>
          ) : (
              <Carousel type={carouselType}>
                {stays.map(stay => <StayCard key={stay.id} stay={stay} />)}
              </Carousel>
          )}
        </div>

        <div className="text-center mt-12">
            <button onClick={() => setCurrentPage(buttonPage, buttonParams)} className="btn-gradient text-white px-8 py-3 rounded-full font-semibold text-lg">
                {buttonText}
            </button>
        </div>
      </div>
    </section>
  );
};

const OmraBanner = () => {
    const { setCurrentPage, convertPrice } = useContext(AppContext);
    const sectionRef = useAnimateOnScroll();
    return (
        <section ref={sectionRef as React.RefObject<HTMLDivElement>} className="py-16 bg-brand-blue-dark transition-all duration-1000 ease-out opacity-0 translate-y-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-cover bg-center bg-fixed rounded-lg p-8 relative overflow-hidden" style={{backgroundImage: "url('https://picsum.photos/seed/kaaba/1200/300')"}}>
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative z-10 text-center md:text-left">
                        <h2 className="text-4xl font-bold font-serif text-white">Omra 2025</h2>
                        <p className="mt-2 text-lg text-gray-200">Voyages spirituels 2025-2026 - À partir de <span className="font-bold text-yellow-300">{convertPrice(4250)}</span></p>
                    </div>
                    <div className="relative z-10">
                        <button onClick={() => setCurrentPage(Page.Omra)} className="bg-yellow-400 text-brand-blue-dark px-10 py-4 rounded-full font-bold text-xl hover:bg-yellow-300 transition-colors shadow-lg animate-pulse-whatsapp">
                            Réservez
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

const HotelSelectionSection = () => {
    const { setCurrentPage } = useContext(AppContext);
    const sectionRef = useAnimateOnScroll();
    const hotelCategories = [
        { name: 'Hôtels avec Toboggan', icon: '🌊', params: { amenities: 'waterpark' } },
        { name: 'Hôtels de Luxe', icon: '💎', params: { category: 'luxury' } },
        { name: 'Beach Hotels & Resort', icon: '🏖️', params: { category: 'beach' } },
        { name: 'El Mouradi Hôtels', icon: '🏨', params: { chain: 'el-mouradi' } },
        { name: 'Iberostar Hôtels', icon: '⭐', params: { chain: 'iberostar' } },
        { name: 'One Resorts Hôtels', icon: '🌴', params: { chain: 'one-resorts' } },
    ];

    return (
        <section ref={sectionRef as React.RefObject<HTMLDivElement>} className="py-16 bg-white transition-all duration-1000 ease-out opacity-0 translate-y-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-gray-800">Notre Sélection d'Hôtels</h2>
                <p className="text-center mt-2 text-gray-600">Filtrez par type d'hôtel pour trouver votre séjour idéal.</p>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {hotelCategories.map(cat => (
                        <div key={cat.name} onClick={() => setCurrentPage(Page.Hotels, cat.params)} className="group cursor-pointer text-center p-4 bg-brand-beige rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center">
                            <div className="text-4xl mb-2">{cat.icon}</div>
                            <p className="font-semibold text-gray-700 group-hover:text-brand-orange transition h-12 flex items-center">{cat.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const Star: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.05 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
);
// FIX: Changed type of `icon` prop from `JSX.Element` to `ReactNode` to fix "Cannot find namespace 'JSX'" error.
const WhyUsItem: React.FC<{ icon: ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-brand-orange/10 to-brand-blue/10 text-brand-blue-dark mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{text}</p>
    </div>
);


const Home: React.FC = () => {
    const { setCurrentPage } = useContext(AppContext);
    const whyUsRef = useAnimateOnScroll();
    const testimonialsRef = useAnimateOnScroll();
    const partnersRef = useAnimateOnScroll();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex flex-col text-center">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{backgroundImage: "url('https://picsum.photos/seed/travelhero/1920/1080')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/70 via-black/40 to-brand-orange/20 z-10"></div>
        <div className="relative z-20 flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg animate-fadeInUp" style={{animationDelay: '0.2s', opacity: 0}}>L'Aventure de Votre Vie Vous Attend</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white drop-shadow-md animate-fadeInUp" style={{animationDelay: '0.4s', opacity: 0}}>Découvrez des destinations uniques et créez des souvenirs inoubliables avec nous.</p>
        </div>
        <div className="relative z-20 w-full container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <SearchWidget />
        </div>
      </section>

      {/* --- NEW Best Destinations Section --- */}
      <section className="py-16 bg-brand-beige">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-800">Nos meilleures destinations</h2>
            <p className="text-center mt-2 text-gray-600">Explorez nos destinations coup de cœur, choisies pour vous.</p>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {stays.slice(0, 3).map(stay => <DestinationCard key={stay.id} stay={stay} />)}
            </div>
            <div className="text-center mt-12">
                <button onClick={() => setCurrentPage(Page.Stays)} className="btn-gradient text-white px-8 py-3 rounded-full font-semibold text-lg">
                    Voir toutes les destinations
                </button>
            </div>
        </div>
      </section>
      
      <StaySection
        title="Super Promo Hôtels en Tunisie"
        subtitle="Trouvez les meilleures promotions du moment"
        stays={tunisianHotelPromos}
        buttonText="Voir Liste"
        buttonPage={Page.Hotels}
        buttonParams={{ destination: 'Tunisie' }}
        layout="carousel"
        carouselType="3d"
      />
      
      {/* --- NEW Organized Trips Section --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-800">Nos Meilleurs Voyages Organisés</h2>
            <p className="text-center mt-2 text-gray-600">Trouvez les meilleures destinations avec nos idées de voyage !</p>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {organizedTrips.map(stay => <ImageOverlayCard key={stay.id} stay={stay} />)}
            </div>
            <div className="text-center mt-12">
                <button onClick={() => setCurrentPage(Page.Stays, { type: 'organise' })} className="btn-gradient text-white px-8 py-3 rounded-full font-semibold text-lg">
                    Voir tous les voyages organisés
                </button>
            </div>
        </div>
      </section>

      <OmraBanner />
      
      <StaySection
        title="Omra 2025"
        subtitle="Choisissez la formule qui convient à votre pèlerinage."
        stays={omraPackages}
        buttonText="Voir Détails"
        buttonPage={Page.Omra}
        buttonParams={{ type: 'omra' }}
        layout="carousel"
      />

      <StaySection
        title="Nos Meilleurs Voyages à la Carte"
        subtitle="Composez le voyage qui vous ressemble."
        stays={aLaCarteTrips}
        buttonText="Voir Liste"
        buttonPage={Page.Stays}
        buttonParams={{ type: 'a-la-carte' }}
        layout="grid"
        bgColor="bg-white"
      />
      
      {/* --- NEW Featured Carousel Section --- */}
      <section className="py-16 bg-brand-beige">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center text-gray-800">Nos suggestions vedettes</h2>
              <p className="text-center mt-2 text-gray-600">Des expériences uniques plébiscitées par nos voyageurs.</p>
              <div className="mt-12">
                  <FeaturedCarousel stays={[stays[1], stays[2]]} />
              </div>
          </div>
      </section>

      {/* --- NEW Circuits & Excursions Section --- */}
       <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-gray-800">Nos Meilleurs Circuits & Excursions</h2>
                <p className="text-center mt-2 text-gray-600">Découvrez la Tunisie autrement avec nos circuits thématiques.</p>
                <div className="mt-12">
                    <Carousel>
                        {circuitsAndExcursions.map(stay => <ImageOverlayCard key={stay.id} stay={stay} buttonText="Explorer"/>)}
                    </Carousel>
                </div>
                <div className="text-center mt-12">
                    <button onClick={() => setCurrentPage(Page.Circuits)} className="btn-gradient text-white px-8 py-3 rounded-full font-semibold text-lg">
                        Voir tous les circuits
                    </button>
                </div>
            </div>
        </section>
      
      <HotelSelectionSection />
      
      <StaySection
        title="Quelques Hôtels de notre Sélection"
        subtitle="Des établissements choisis pour leur qualité et leur service."
        stays={hotelSelection}
        buttonText="Voir plus d'hôtels"
        buttonPage={Page.Hotels}
        buttonParams={{ destination: 'Tunisie' }}
        layout="carousel"
      />

      <section ref={whyUsRef as React.RefObject<HTMLDivElement>} className="py-16 bg-white transition-all duration-1000 ease-out opacity-0 translate-y-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800">Pourquoi Nous Choisir ?</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <WhyUsItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
                title="Paiement Sécurisé"
                text="Transactions 100% sécurisées pour votre tranquillité d'esprit."
            />
             <WhyUsItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>}
                title="Offres Exclusives"
                text="Accédez à des tarifs et des expériences que vous ne trouverez nulle part ailleurs."
            />
             <WhyUsItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
                title="Support 24/7"
                text="Notre équipe est disponible à tout moment pour vous assister durant votre voyage."
            />
             <WhyUsItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                title="Guides Experts"
                text="Découvrez vos destinations avec des guides locaux passionnés et expérimentés."
            />
          </div>
        </div>
      </section>

      <section ref={testimonialsRef as React.RefObject<HTMLDivElement>} className="py-16 transition-all duration-1000 ease-out opacity-0 translate-y-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-800">Ce que nos clients disent</h2>
            <div className="mt-12">
              <Carousel>
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg text-center h-full">
                        <div className="absolute top-0 left-0 -translate-x-3 -translate-y-3">
                            <svg className="w-16 h-16 text-brand-orange/10" fill="currentColor" viewBox="0 0 32 32"><path d="M9.984 20.016q0 2.375-1.391 3.828t-3.578 1.453q-2.125 0-3.578-1.453t-1.453-3.828q0-2.328 1.453-3.813t3.578-1.484q2.125 0 3.578 1.484t1.391 3.813zM25.984 20.016q0 2.375-1.391 3.828t-3.578 1.453q-2.125 0-3.578-1.453t-1.453-3.828q0-2.328 1.453-3.813t3.578-1.484q2.125 0 3.578 1.484t1.391 3.813z"></path></svg>
                        </div>
                        <div className="flex justify-center">{[...Array(5)].map((_, i) => <Star key={i} filled={i < testimonial.rating} />)}</div>
                        <p className="mt-4 text-gray-600 italic">"{testimonial.quote}"</p>
                        <p className="mt-4 font-bold text-gray-800">- {testimonial.name}</p>
                    </div>
                ))}
              </Carousel>
            </div>
        </div>
      </section>

      <section ref={partnersRef as React.RefObject<HTMLDivElement>} className="py-12 bg-white transition-all duration-1000 ease-out opacity-0 translate-y-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-gray-500 font-semibold text-xl">Nos partenaires de confiance</h3>
            <div className="mt-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                {partners.map(partner => (
                    <img key={partner.id} src={partner.logoUrl} alt={partner.name} className="h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all" />
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;