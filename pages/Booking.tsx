import React, { useContext, useState } from 'react';
import { AppContext, Page } from '../context/AppContext';
import type { Stay } from '../types';

// --- ICONS ---
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>;
const PassportIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm11.707 3.707a1 1 0 00-1.414-1.414L10 10.586 8.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>;
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>;
const BedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>;


// --- HOTEL BOOKING COMPONENTS (EXISTING) ---
const InputField = ({ icon, label, ...props }: { icon?: React.ReactNode, label?: string, [key: string]: any }) => (
    <div>
        {label && <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
        <div className="relative">
            {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>}
            <input {...props} className={`w-full ${icon ? 'pl-10' : 'px-3'} pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-orange focus:border-brand-orange`} />
        </div>
    </div>
);
const SelectField = ({ children, ...props }: { children: React.ReactNode, [key: string]: any }) => (
    <div>
        {props.label && <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">{props.label}</label>}
        <select {...props} className="w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-orange focus:border-brand-orange">
            {children}
        </select>
    </div>
);
const HotelBookingSection: React.FC<{number: number, title: string, children: React.ReactNode}> = ({number, title, children}) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl bg-brand-orange">
                {number}
            </div>
            <h3 className="ml-4 text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        {children}
    </div>
);
const HotelReservationSidebar: React.FC<{ stay: Stay }> = ({ stay }) => {
    const { convertPrice } = useContext(AppContext);
    const subTotal = stay.price; // Use stay price as subtotal
    const fraisDossier = 4.000;
    const timbreFiscal = 1.000;
    const total = subTotal + fraisDossier + timbreFiscal;
    
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 space-y-4">
            <img src={stay.imageUrl} alt={stay.title} className="rounded-lg w-full h-48 object-cover"/>
            <h3 className="text-xl font-bold text-gray-800">{stay.title}</h3>
            <div className="text-sm text-gray-600 space-y-1">
                <p>{stay.destination}</p>
                <p>Du 23/09/2025 Au 24/09/2025, soit 1 nuitée(s)</p>
                <a href="#" className="text-brand-blue font-semibold hover:underline text-xs">{"<< Modifier votre recherche"}</a>
            </div>
            <div className="border-t pt-4">
                <p className="font-semibold">1. Chambre Standard en Petit Déjeuner <span className="text-green-600 font-bold">Disponible</span></p>
                <div className="flex justify-between text-sm mt-1"><span>Adultes</span><span>x2</span></div>
                <div className="flex justify-between text-sm"><span>Enfants</span><span>x0</span></div>
            </div>
            <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between"><span>Sous total :</span><span>{convertPrice(subTotal)}</span></div>
                <div className="flex justify-between"><span>Frais de dossier:</span><span>{convertPrice(fraisDossier)}</span></div>
                <div className="flex justify-between"><span>Timbre fiscal :</span><span>{convertPrice(timbreFiscal)}</span></div>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total réservation :</span><span>{convertPrice(total)}</span>
            </div>
            <div className="border-t pt-4">
                <div className="flex">
                    <input type="text" placeholder="Coupon Réduction" className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-brand-orange focus:border-brand-orange" />
                    <button className="bg-blue-600 text-white font-bold px-4 rounded-r-md">OK</button>
                </div>
            </div>
        </div>
    );
};
const HotelBookingView: React.FC<{ stay: Stay }> = ({ stay }) => {
    return (
        <div className="min-h-screen py-12 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">Réservation d'Hôtel</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2 space-y-8">
                            <HotelBookingSection number={1} title="Informations Client">
                                <form className="space-y-4">
                                    <InputField label="Nom & Prénom *" id="fullName" placeholder="Entrez votre nom & prénom" icon={<UserIcon />} required />
                                    <InputField label="Email *" id="email" type="email" placeholder="Entrez votre email" icon={<MailIcon />} required />
                                    <InputField label="Numéro de Mobile *" id="phone" type="tel" placeholder="Entrez votre Numéro de Mobile" icon={<PhoneIcon />} required />
                                    <InputField label="Adresse" id="address" placeholder="Entrez votre adresse" icon={<LocationIcon />} />
                                </form>
                            </HotelBookingSection>
                            <HotelBookingSection number={2} title="Occupations des chambres">
                                <div className="p-4 border rounded-md">
                                    <h4 className="font-semibold">1. Chambre Standard en Petit Déjeuner <span className="text-green-600">Disponible</span></h4>
                                    <div className="mt-4 space-y-4">
                                        <div>
                                            <p className="font-medium text-gray-700 mb-2">adulte 1 (Principale) *</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                <SelectField id="civility1"><option>Mr.</option><option>Mme.</option></SelectField>
                                                <InputField placeholder="Nom" />
                                                <InputField placeholder="Prénom" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-700 mb-2">adulte 2 *</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                <SelectField id="civility2"><option>Mr.</option><option>Mme.</option></SelectField>
                                                <InputField placeholder="Nom" />
                                                <InputField placeholder="Prénom" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </HotelBookingSection>
                            <HotelBookingSection number={3} title="Conditions d'annulations et informations importantes">
                                <div className="p-4 bg-red-50 border-l-4 border-red-400 text-red-800 space-y-1 text-sm rounded-r-md mb-4">
                                    <p>Annulation avant arrivée: 1 nutées, à partir de 22-09-2025 23:26</p>
                                    <p>No Show: 1 nutées</p>
                                    <p>Départ prématuré: 100.00 %</p>
                                </div>
                                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800 text-sm rounded-r-md">
                                    <p>Une taxe de séjour est a payer à l'hôtel pour tous les clients quelques soit leurs nationalités (âgés plus de 12 ans). Le montant est calculé en fonction de la loi en vigueur.</p>
                                </div>
                            </HotelBookingSection>
                            <HotelBookingSection number={4} title="Options prises en compte dans la mesure du possible">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <label className="flex items-center"><input type="checkbox" className="custom-checkbox mr-2"/> Si possible, Arrivée Tardive.</label>
                                    <label className="flex items-center"><input type="checkbox" className="custom-checkbox mr-2"/> Si possible, Grand lit.</label>
                                    <label className="flex items-center"><input type="checkbox" className="custom-checkbox mr-2"/> Baby Cote</label>
                                    <label className="flex items-center"><input type="checkbox" className="custom-checkbox mr-2"/> Traitement VIP</label>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Commentaire</label>
                                    <textarea id="comment" placeholder="Entrez votre commentaire" rows={4} className="w-full p-2 border rounded-md focus:outline-none focus:ring-brand-orange focus:border-brand-orange"></textarea>
                                </div>
                            </HotelBookingSection>
                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mt-8">
                                <div className="flex items-center">
                                    <input id="terms" type="checkbox" className="custom-checkbox" />
                                    <label htmlFor="terms" className="ml-3 block text-sm text-gray-900">En cliquant sur Finalisez ma réservation vous confirmez accepter nos <a href="#" className="text-red-500 font-semibold hover:underline">conditions générales de vente</a>.</label>
                                </div>
                                <div className="text-left mt-6">
                                    <button type="button" onClick={() => alert("Réservation d'hôtel finalisée (simulation)!")} className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors">
                                        Finalisez ma réservation
                                    </button>
                                </div>
                            </div>
                        </div>
                        <aside>
                            <div className="sticky top-24">
                            <HotelReservationSidebar stay={stay} />
                            </div>
                        </aside>
                </div>
            </div>
        </div>
    );
};


// --- TRIP BOOKING COMPONENTS (NEW) ---

const TripReservationSidebar: React.FC<{ stay: Stay }> = ({ stay }) => {
    const { convertPrice } = useContext(AppContext);
    const subTotal = stay.price; 
    const tax = 0.34;
    const total = subTotal + tax;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-4">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-3">Détails Réservation</h3>
            <div className="text-sm text-gray-600 space-y-2">
                <p><strong className="text-gray-800">Itinéraire :</strong> {stay.destination}</p>
                <p><strong className="text-gray-800">Type vol :</strong> {stay.type}</p>
                <p><strong className="text-gray-800">Départ :</strong> La 28-09-2025 à 05:40</p>
                <p><strong className="text-gray-800">Bagage départ :</strong> 0 piece(s)</p>
                <p><strong className="text-gray-800">Retour :</strong> La 31-10-2025 à 17:00</p>
                <p><strong className="text-gray-800">Bagage retour :</strong> 0 piece(s)</p>
                <a href="#" className="text-green-600 font-semibold hover:underline">Conditions [+]</a>
            </div>
            <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between"><span>Adulte(s) :</span><strong>x1</strong></div>
                <div className="flex justify-between"><span>Sous total :</span><span>{convertPrice(subTotal)}</span></div>
                <div className="flex justify-between"><span>Timbre fiscal :</span><span>{convertPrice(tax)}</span></div>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total Réservation :</span><span>{convertPrice(total)}</span>
            </div>
            <div className="border-t pt-4">
                <div className="flex">
                    <input type="text" placeholder="Code du coupon de réduction" className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-brand-orange focus:border-brand-orange" />
                    <button className="bg-gray-800 text-white font-bold px-4 rounded-r-md">OK</button>
                </div>
            </div>
        </div>
    );
};

const StepIndicator: React.FC<{ number: number; title: string; }> = ({ number, title }) => (
    <div className="flex items-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-2xl bg-brand-orange`}>
            {number}
        </div>
        <h2 className={`ml-4 text-3xl font-bold text-gray-800`}>{title}</h2>
    </div>
);

const ClientDetailsStep: React.FC<{ onNext: () => void }> = ({ onNext }) => (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <StepIndicator number={1} title="Détails du client" />
        <form className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SelectField label="Sexe *"><option>Femme</option><option>Homme</option></SelectField>
                <InputField label="Prénom *" placeholder="Entrez votre prénom" icon={<UserIcon />} required />
                <InputField label="Nom *" placeholder="Entrez votre nom" icon={<UserIcon />} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Email *" type="email" placeholder="Entrez votre Email" icon={<MailIcon />} required />
                <InputField label="Confirmation Email *" type="email" placeholder="Entrez à nouveau votre Email" icon={<MailIcon />} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SelectField label="Code du pays *"><option>Tunisia (+216)</option></SelectField>
                <InputField label="Numéro du téléphone *" type="tel" placeholder="Entrez votre numéro" icon={<PhoneIcon />} required />
                <SelectField label="Pays *"><option>Tunisia</option></SelectField>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InputField label="Ville *" placeholder="Entrez votre ville" icon={<LocationIcon />} required />
                <InputField label="Code postal *" placeholder="Entrez votre code postal" icon={<LocationIcon />} required />
                <InputField label="Adresse *" placeholder="Entrez votre adresse" icon={<LocationIcon />} required />
            </div>
            <div className="flex items-center pt-4">
                <input id="isPassenger" type="checkbox" className="custom-checkbox" />
                <label htmlFor="isPassenger" className="ml-3 block text-sm text-gray-900">Sélectionner en tant que passager</label>
            </div>
            <div className="text-right pt-4">
                <button type="button" onClick={onNext} className="btn-gradient text-white font-bold py-3 px-8 rounded-lg">Suivant</button>
            </div>
        </form>
    </div>
);

const PassengerDetailsStep: React.FC<{ onNext: () => void; onBack: () => void }> = ({ onNext, onBack }) => (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <StepIndicator number={2} title="Détails Passagers" />
        <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-bold mb-6">Détails Adulte 1</h3>
            <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SelectField label="Sexe *"><option>Femme</option><option>Homme</option></SelectField>
                    <InputField label="Prénom *" placeholder="Entrez votre prénom" icon={<UserIcon />} required />
                    <InputField label="Nom *" placeholder="Entrez votre nom" icon={<UserIcon />} required />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Date de naissance *" type="date" icon={<CalendarIcon />} required />
                    <SelectField label="Nationalité *"><option>Tunisia</option></SelectField>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Passeport *" placeholder="Entrez votre numéro passeport" icon={<PassportIcon />} required />
                    <InputField label="Date d'expiration Passeport *" type="date" icon={<CalendarIcon />} required />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SelectField label="Code du pays *"><option>Tunisia (+216)</option></SelectField>
                    <InputField label="Numéro du téléphone *" type="tel" placeholder="Entrez votre numéro" icon={<PhoneIcon />} required />
                    <InputField label="Email *" type="email" placeholder="Entrez votre Email" icon={<MailIcon />} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Numéro voyageur fréquent" placeholder="Entrez votre carte numéro voyageur fréquent" icon={<UserIcon />} />
                    <InputField label="Numéro carte nationale" placeholder="Entrez votre carte nationale" icon={<UserIcon />} />
                </div>
                <div>
                    <label className="block text-lg font-bold text-blue-800 mb-2">Joindre copie(s) passeport</label>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">Télécharger votre fichier</span>
                        <button type="button" className="p-1 hover:bg-gray-100 rounded-full"><PlusIcon /></button>
                        <button type="button" className="p-1 hover:bg-gray-100 rounded-full"><TrashIcon /></button>
                    </div>
                </div>
                <div className="flex justify-between pt-4">
                    <button type="button" onClick={onBack} className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg">Précédent</button>
                    <button type="button" onClick={onNext} className="btn-gradient text-white font-bold py-3 px-8 rounded-lg">Suivant</button>
                </div>
            </form>
        </div>
    </div>
);

const PaymentStep: React.FC<{ onConfirm: () => void; onBack: () => void }> = ({ onConfirm, onBack }) => {
    const [paymentTab, setPaymentTab] = useState('online');
    const agencies = [
        { name: 'Centre Urbain Nord', address: 'Immeuble Le Palace, Tunis 1082', tel: '58313958 / 58528286 / 71 822 099' },
        { name: 'Sousse Khezama', address: 'Rue 14 Janvier Sousse, Khezema, Sousse, 4051', tel: '53 274 049 / 58 401 013 / 31 320 777' },
        { name: 'Tunis Boumhal', address: 'P7PW+PW5, Boumhel El Bassatine', tel: '58 578 345 / 58 578 345' },
    ];

    return (
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <StepIndicator number={3} title="Mode de paiement" />
            <div className="mt-8 border-t pt-6">
                <div className="flex border-b">
                    <button onClick={() => setPaymentTab('agency')} className={`py-2 px-4 text-lg font-semibold ${paymentTab === 'agency' ? 'border-b-2 border-brand-orange text-brand-orange' : 'text-gray-500'}`}>Paiement à l'agence</button>
                    <button onClick={() => setPaymentTab('online')} className={`py-2 px-4 text-lg font-semibold ${paymentTab === 'online' ? 'border-b-2 border-brand-orange text-brand-orange' : 'text-gray-500'}`}>Paiement en ligne</button>
                </div>
                <div className="py-6">
                    {paymentTab === 'online' && (
                        <div className="space-y-4">
                            <label className="flex items-center"><input type="radio" name="paymentType" className="custom-checkbox" defaultChecked /> <span className="ml-3">Paiement de la totalité en ligne</span></label>
                            <div className="pl-6">
                                <p className="text-sm">Paiement électronique par <span className="font-bold">les cartes</span></p>
                                <img src="https://i.imgur.com/k2301iR.png" alt="Payment methods" className="h-6 mt-2" />
                            </div>
                        </div>
                    )}
                    {paymentTab === 'agency' && (
                        <div className="space-y-4">
                            <label className="flex items-center"><input type="radio" name="paymentType" className="custom-checkbox" defaultChecked /> <span className="ml-3">Paiement espèce à l'agence</span></label>
                             <div className="pl-6 space-y-4">
                                <h4 className="font-bold text-blue-700">Veuillez sélectionner une agence :</h4>
                                {agencies.map((agency, index) => (
                                    <label key={agency.name} className="flex items-start p-3 border rounded-md cursor-pointer">
                                        <input type="radio" name="agency" className="custom-checkbox mt-1" defaultChecked={index === 0} />
                                        <div className="ml-3">
                                            <p className="font-bold">{agency.name}</p>
                                            <p className="text-sm text-gray-600 flex items-center"><LocationIcon /> <span className="ml-1">{agency.address}</span></p>
                                            <p className="text-sm text-gray-600 flex items-center"><PhoneIcon /> <span className="ml-1">Tél: {agency.tel}</span></p>
                                        </div>
                                    </label>
                                ))}
                                <button className="w-full text-center bg-gray-200 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-300">Afficher plus</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                    <p>Les tarifs varient selon la disponibilité à la date de paiement</p>
                    <p>Les tarifs sont valables uniquement pour les réservations effectuées en ligne.</p>
                </div>
                <div className="mt-6 flex items-center">
                    <input type="checkbox" id="terms" className="custom-checkbox" />
                    <label htmlFor="terms" className="ml-3 text-sm text-gray-600">En cliquant sur Finalisez ma réservation vous confirmez accepter nos <a href="#" className="text-red-500 underline">conditions générales de vente</a>.</label>
                </div>
                 <div className="flex justify-between pt-8">
                    <button type="button" onClick={onBack} className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg">Précédent</button>
                    <button type="button" onClick={onConfirm} className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600">Finalisez ma réservation</button>
                </div>
            </div>
        </div>
    );
};

const ConfirmationStep: React.FC<{ stay: Stay }> = ({ stay }) => {
    const { setCurrentPage } = useContext(AppContext);
    return (
        <div className="bg-white p-12 rounded-lg shadow-lg text-center max-w-3xl mx-auto">
             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto checkmark-animation">
                <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
             </div>
             <h2 className="text-3xl font-bold mt-6">Réservation confirmée !</h2>
             <p className="text-gray-600 mt-2">Votre réservation pour le voyage <strong>{stay.title}</strong> a bien été enregistrée. Un email de confirmation vous a été envoyé.</p>
             <button onClick={() => setCurrentPage(Page.Home)} className="mt-8 bg-brand-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-blue-dark transition">
                Retour à l'accueil
            </button>
        </div>
    );
};

const TripBookingView: React.FC<{ stay: Stay }> = ({ stay }) => {
    const [step, setStep] = useState(1);

    const renderStep = () => {
        switch (step) {
            case 1: return <ClientDetailsStep onNext={() => setStep(2)} />;
            case 2: return <PassengerDetailsStep onNext={() => setStep(3)} onBack={() => setStep(1)} />;
            case 3: return <PaymentStep onConfirm={() => setStep(4)} onBack={() => setStep(2)} />;
            case 4: return <ConfirmationStep stay={stay} />;
            default: return null;
        }
    };
    
    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="container mx-auto px-4">
                {step === 4 ? (
                    <div className="flex justify-center items-center pt-16">{renderStep()}</div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">{renderStep()}</div>
                        <aside>
                            <div className="sticky top-24">
                                <TripReservationSidebar stay={stay} />
                            </div>
                        </aside>
                    </div>
                )}
            </div>
        </div>
    );
}

// --- MAIN COMPONENT ---
const Booking: React.FC = () => {
    const { getSelectedStay, setCurrentPage } = useContext(AppContext);
    const stay = getSelectedStay();

    if (!stay) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold">Aucun séjour sélectionné</h1>
                <button onClick={() => setCurrentPage(Page.Stays)} className="mt-4 bg-brand-blue text-white px-6 py-2 rounded-full">Choisir un séjour</button>
            </div>
        );
    }

    const isHotelBooking = stay.type === 'hotel' || stay.type === 'promo';
    
    if(isHotelBooking) {
        return <HotelBookingView stay={stay} />
    }

    return <TripBookingView stay={stay} />;
};

export default Booking;
