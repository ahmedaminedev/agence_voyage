import React, { useState, useEffect, useRef } from 'react';
import { team, partners } from '../constants';

const AnimatedCounter: React.FC<{ value: number; label: string }> = ({ value, label }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const duration = 2000;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let startTime: number | null = null;
                    const animate = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const percentage = Math.min(progress / duration, 1);
                        const easedPercentage = easeOutCubic(percentage);
                        setCount(Math.floor(easedPercentage * value));
                        if (progress < duration) {
                            requestAnimationFrame(animate);
                        }
                    };
                    requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [value]);
    
    return (
        <div className="text-center" ref={ref}>
            <p className="text-5xl font-bold text-brand-orange">{count.toLocaleString()}+</p>
            <p className="mt-1 text-gray-600">{label}</p>
        </div>
    );
};


const About: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-gray-800 py-24 sm:py-32">
                <img src="https://picsum.photos/seed/about/1920/500" alt="Team working" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Notre Mission</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
                        Créer des expériences de voyage authentiques et inoubliables qui connectent les gens aux cultures du monde, tout en promouvant un tourisme durable et responsable.
                    </p>
                </div>
            </div>

            {/* Presentation Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800">Qui sommes-nous ?</h2>
                            <p className="mt-4 text-gray-600">
                                VoyageÉtoile est née d'une passion commune pour l'exploration et la découverte. Fondée en 2015, notre agence s'est donné pour mission de transformer de simples vacances en aventures humaines enrichissantes. Nous croyons que le voyage est le meilleur moyen d'ouvrir son esprit, de briser les barrières et de créer des liens durables.
                            </p>
                            <p className="mt-4 text-gray-600">
                                Nos valeurs fondamentales sont l'authenticité, la qualité et le respect. Chaque itinéraire est soigneusement conçu par nos experts pour vous offrir une immersion totale, loin des sentiers battus.
                            </p>
                        </div>
                        <div>
                            <img src="https://picsum.photos/seed/about2/800/600" alt="Carte du monde" className="rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Key Figures Section */}
            <section className="bg-brand-beige py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AnimatedCounter value={10000} label="Clients Satisfaits" />
                        <AnimatedCounter value={150} label="Destinations Uniques" />
                        <AnimatedCounter value={9} label="Années d'Expérience" />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-800">Notre Équipe</h2>
                    <p className="text-center mt-2 text-gray-600">Les artisans de vos voyages de rêve.</p>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {team.map(member => (
                            <div key={member.id} className="text-center">
                                <img src={member.imageUrl} alt={member.name} className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg" />
                                <h3 className="mt-4 text-2xl font-semibold text-gray-900">{member.name}</h3>
                                <p className="text-brand-blue">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Partners Section */}
            <section className="py-12 bg-brand-beige">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-800">Nos Partenaires</h2>
                    <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                        {partners.map(partner => (
                            <img key={partner.id} src={partner.logoUrl} alt={partner.name} className="h-12 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all" />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;