import React, { useContext, useState } from 'react';
import { AppContext, Page } from '../context/AppContext';
import { Flight } from '../types';

// --- ICONS ---
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>;
const PassportIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm11.707 3.707a1 1 0 00-1.414-1.414L10 10.586 8.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>;
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>;


// --- FORM FIELD COMPONENTS ---
const InputField = ({ icon, label, ...props }) => (
    <div>
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>
            <input {...props} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-orange focus:border-brand-orange" />
        </div>
    </div>
);

const SelectField = ({ label, children, ...props }) => (
    <div>
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select {...props} className="w-full pr-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-orange focus:border-brand-orange">
            {children}
        </select>
    </div>
);


// --- RESERVATION SIDEBAR ---
const ReservationSidebar = ({ flight }: { flight: Flight }) => {
    const subTotal = 212.82; // Example values from screenshot
    const tax = 0.34;
    const total = subTotal + tax;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-4">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-3">Détails Réservation</h3>
            <div className="text-sm text-gray-600 space-y-2">
                <p><strong className="text-gray-800">Itinéraire :</strong> Aéroport international de Tunis Carthage - Aéroport Paris-Orly</p>
                <p><strong className="text-gray-800">Type vol :</strong> Aller-retour</p>
                <p><strong className="text-gray-800">Départ :</strong> La 28-09-2025 à {flight.departureLeg.departureTime}</p>
                <p><strong className="text-gray-800">Bagage départ :</strong> 0 piece(s)</p>
                <p><strong className="text-gray-800">Retour :</strong> La 31-10-2025 à {flight.returnLeg.departureTime}</p>
                <p><strong className="text-gray-800">Bagage retour :</strong> 0 piece(s)</p>
                <a href="#" className="text-green-600 font-semibold hover:underline">Conditions [+]</a>
            </div>
            <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between"><span>Adulte(s) :</span><strong>x1</strong></div>
                <div className="flex justify-between"><span>Sous total :</span><span>{subTotal.toFixed(2)} DT</span></div>
                <div className="flex justify-between"><span>Timbre fiscal :</span><span>{tax.toFixed(2)} DT</span></div>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total Réservation :</span><span>{total.toFixed(2)} DT</span>
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

// --- STEP COMPONENTS ---
const StepIndicator: React.FC<{ number: number; title: string; active: boolean }> = ({ number, title, active }) => (
    <div className="flex items-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-2xl ${active ? 'bg-brand-orange' : 'bg-gray-300'}`}>
            {number}
        </div>
        <h2 className={`ml-4 text-3xl font-bold ${active ? 'text-gray-800' : 'text-gray-400'}`}>{title}</h2>
    </div>
);

const ClientDetailsStep: React.FC<{ onNext: () => void }> = ({ onNext }) => (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <StepIndicator number={1} title="Détails du client" active={true} />
        <form className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SelectField label="Sexe *" id="gender"><option>Femme</option><option>Homme</option></SelectField>
                <InputField label="Prénom *" id="firstName" placeholder="Entrez votre prénom" icon={<UserIcon />} required />
                <InputField label="Nom *" id="lastName" placeholder="Entrez votre nom" icon={<UserIcon />} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Email *" id="email" type="email" placeholder="Entrez votre Email" icon={<MailIcon />} required />
                <InputField label="Confirmation Email *" id="emailConfirm" type="email" placeholder="Entrez à nouveau votre Email" icon={<MailIcon />} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SelectField label="Code du pays *" id="countryCode"><option>Tunisia (+216)</option></SelectField>
                <InputField label="Numéro du téléphone *" id="phone" type="tel" placeholder="Entrez votre numéro" icon={<PhoneIcon />} required />
                <SelectField label="Pays *" id="country"><option>Tunisia</option></SelectField>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InputField label="Ville *" id="city" placeholder="Entrez votre ville" icon={<LocationIcon />} required />
                <InputField label="Code postal *" id="postalCode" placeholder="Entrez votre code postal" icon={<LocationIcon />} required />
                <InputField label="Adresse *" id="address" placeholder="Entrez votre adresse" icon={<LocationIcon />} required />
            </div>
            <div className="flex items-center pt-4">
                <input id="isPassenger" type="checkbox" className="h-4 w-4 text-brand-orange border-gray-300 rounded focus:ring-brand-orange" />
                <label htmlFor="isPassenger" className="ml-2 block text-sm text-gray-900">Sélectionner en tant que passager</label>
            </div>
            <div className="text-right pt-4">
                <button type="button" onClick={onNext} className="btn-gradient text-white font-bold py-3 px-8 rounded-lg">Suivant</button>
            </div>
        </form>
    </div>
);

const PassengerDetailsStep: React.FC<{ onNext: () => void; onBack: () => void }> = ({ onNext, onBack }) => (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <StepIndicator number={2} title="Détails Passagers" active={true} />
        <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-bold mb-6">Détails Adulte 1</h3>
            <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SelectField label="Sexe *" id="paxGender"><option>Femme</option><option>Homme</option></SelectField>
                    <InputField label="Prénom *" id="paxFirstName" placeholder="Entrez votre prénom" icon={<UserIcon />} required />
                    <InputField label="Nom *" id="paxLastName" placeholder="Entrez votre nom" icon={<UserIcon />} required />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Date de naissance *" id="paxDob" type="date" icon={<CalendarIcon />} required />
                    <SelectField label="Nationalité *" id="paxNationality"><option>Tunisia</option></SelectField>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Passeport *" id="paxPassport" placeholder="Entrez votre numéro passeport" icon={<PassportIcon />} required />
                    <InputField label="Date d'expiration Passeport *" id="paxPassportExpiry" type="date" icon={<CalendarIcon />} required />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SelectField label="Code du pays *" id="paxCountryCode"><option>Tunisia (+216)</option></SelectField>
                    <InputField label="Numéro du téléphone *" id="paxPhone" type="tel" placeholder="Entrez votre numéro" icon={<PhoneIcon />} required />
                    <InputField label="Email *" id="paxEmail" type="email" placeholder="Entrez votre Email" icon={<MailIcon />} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Numéro voyageur fréquent" id="paxFreqFlyer" placeholder="Entrez votre carte numéro voyageur fréquent" icon={<UserIcon />} />
                    <InputField label="Numéro carte nationale" id="paxNatId" placeholder="Entrez votre carte nationale" icon={<UserIcon />} />
                </div>
                <div>
                    <label className="block text-lg font-bold text-blue-800 mb-2">Joindre copie(s) passeport</label>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">Télécharger votre fichier</span>
                        <button type="button" className="text-green-600 hover:text-green-800"><PlusIcon /></button>
                        <button type="button" className="text-red-500 hover:text-red-700"><TrashIcon /></button>
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
            <StepIndicator number={3} title="Mode de paiement" active={true} />
            <div className="mt-8 border-t pt-6">
                <div className="flex border-b">
                    <button onClick={() => setPaymentTab('agency')} className={`py-2 px-4 text-lg font-semibold ${paymentTab === 'agency' ? 'border-b-2 border-brand-orange text-brand-orange' : 'text-gray-500'}`}>Paiement à l'agence</button>
                    <button onClick={() => setPaymentTab('online')} className={`py-2 px-4 text-lg font-semibold ${paymentTab === 'online' ? 'border-b-2 border-brand-orange text-brand-orange' : 'text-gray-500'}`}>Paiement en ligne</button>
                </div>
                <div className="py-6">
                    {paymentTab === 'online' && (
                        <div className="space-y-4">
                            <label className="flex items-center"><input type="radio" name="paymentType" className="h-4 w-4 text-brand-orange" defaultChecked /> <span className="ml-2">Paiement de la totalité en ligne</span></label>
                            <div className="pl-6">
                                <p className="text-sm">Paiement électronique par <span className="font-bold">les cartes</span></p>
                                <div className="flex items-center space-x-2 mt-2"><img src="https://i.imgur.com/k2301iR.png" alt="Payment methods" className="h-6" /></div>
                            </div>
                        </div>
                    )}
                    {paymentTab === 'agency' && (
                        <div className="space-y-4">
                            <label className="flex items-center"><input type="radio" name="paymentType" className="h-4 w-4 text-brand-orange" defaultChecked /> <span className="ml-2">Paiement espèce à l'agence</span></label>
                             <div className="pl-6 space-y-4">
                                <h4 className="font-bold text-blue-700">Veuillez sélectionner une agence :</h4>
                                {agencies.map((agency, index) => (
                                    <label key={agency.name} className="flex items-start p-3 border rounded-md">
                                        <input type="radio" name="agency" className="h-4 w-4 text-brand-orange mt-1" defaultChecked={index === 0} />
                                        <div className="ml-3">
                                            <p className="font-bold">{agency.name}</p>
                                            <p className="text-sm text-gray-600"><LocationIcon /> {agency.address}</p>
                                            <p className="text-sm text-gray-600"><PhoneIcon /> Tél: {agency.tel}</p>
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
                    <input type="checkbox" id="terms" className="h-4 w-4 text-brand-orange rounded" />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600">En cliquant sur Finalisez ma réservation vous confirmez accepter nos <a href="#" className="text-red-500 underline">conditions générales de vente</a>.</label>
                </div>
                 <div className="flex justify-between pt-8">
                    <button type="button" onClick={onBack} className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg">Précédent</button>
                    <button type="button" onClick={onConfirm} className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600">Finalisez ma réservation</button>
                </div>
            </div>
        </div>
    );
};

const ConfirmationStep: React.FC<{ flight: Flight }> = ({ flight }) => {
    const { setCurrentPage } = useContext(AppContext);
    return (
        <div className="bg-white p-12 rounded-lg shadow-lg text-center max-w-3xl mx-auto">
             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto checkmark-animation">
                <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
             </div>
             <h2 className="text-3xl font-bold mt-6">Réservation confirmée !</h2>
             <p className="text-gray-600 mt-2">Votre réservation pour le vol <strong>{flight.departureLeg.departureAirport} - {flight.departureLeg.arrivalAirport}</strong> a bien été enregistrée. Un email de confirmation vous a été envoyé.</p>
             <button onClick={() => setCurrentPage(Page.Home)} className="mt-8 bg-brand-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-blue-dark transition">
                Retour à l'accueil
            </button>
        </div>
    );
};


// --- MAIN BOOKING COMPONENT ---
const FlightBooking: React.FC = () => {
    const { getSelectedFlight, setCurrentPage } = useContext(AppContext);
    const flight = getSelectedFlight();
    const [step, setStep] = useState(1);

    if (!flight) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold">Vol non trouvé</h1>
                <button onClick={() => setCurrentPage(Page.Flights)} className="mt-4 bg-brand-blue text-white px-6 py-2 rounded-full">Retour aux vols</button>
            </div>
        );
    }
    
    const renderStep = () => {
        switch (step) {
            case 1: return <ClientDetailsStep onNext={() => setStep(2)} />;
            case 2: return <PassengerDetailsStep onNext={() => setStep(3)} onBack={() => setStep(1)} />;
            case 3: return <PaymentStep onConfirm={() => setStep(4)} onBack={() => setStep(2)} />;
            case 4: return <ConfirmationStep flight={flight} />;
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
                               <ReservationSidebar flight={flight} />
                            </div>
                        </aside>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FlightBooking;