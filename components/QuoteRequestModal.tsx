import React, { useState } from 'react';
import type { Stay } from '../types';

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const InputField: React.FC<{ label: string, name: string, value: string | number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, type?: string, placeholder?: string, required?: boolean, srOnly?: boolean }> = ({ label, name, value, onChange, type = 'text', placeholder, required = false, srOnly = false }) => (
    <div>
        <label htmlFor={name} className={`block text-sm font-medium text-gray-700 mb-1 ${srOnly ? 'sr-only' : ''}`}>{label}{required && '*'}</label>
        <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder || label}
            required={required}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
        />
    </div>
);


const QuoteRequestModal: React.FC<{ stay: Stay; isOpen: boolean; onClose: () => void }> = ({ stay, isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        adults: 2,
        children: 0,
        infants: 0,
        departureDate: '',
        nom: '',
        prenom: '',
        email: '',
        mobile: '',
        ville: '',
        pays: '',
        remarks: ''
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
            // Reset form for next time
            setTimeout(() => setIsSubmitted(false), 300); 
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4 animate-fadeIn" style={{ animationDuration: '0.3s' }} onClick={onClose}>
            <div className="bg-white w-full max-w-3xl rounded-lg shadow-2xl overflow-hidden animate-scaleIn relative" style={{ animationDuration: '0.3s' }} onClick={e => e.stopPropagation()}>
                <div className="px-8 py-4 border-b flex justify-between items-center bg-gray-50">
                    <h2 className="text-xl font-bold text-gray-800">{stay.title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-700"><CloseIcon className="w-7 h-7" /></button>
                </div>

                {isSubmitted ? (
                    <div className="p-16 text-center flex flex-col items-center">
                         <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                         <h3 className="text-2xl font-bold text-green-600">Demande envoyée !</h3>
                         <p className="mt-2 text-gray-600">Merci ! Nous vous contacterons bientôt avec votre devis personnalisé.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[80vh] overflow-y-auto">
                        <h3 className="text-lg font-semibold" style={{color: '#c71585'}}>Recevez votre devis gratuit pour</h3>
                        
                        {/* Participants */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <InputField label="Adulte(s)" name="adults" type="number" value={formData.adults} onChange={handleChange} />
                            <div>
                                <InputField label="Enfant(s)" name="children" type="number" value={formData.children} onChange={handleChange} />
                                <span className="text-xs text-gray-500">(2-12 ans)</span>
                            </div>
                            <div>
                                <InputField label="Bébé(s)" name="infants" type="number" value={formData.infants} onChange={handleChange} />
                                <span className="text-xs text-gray-500">(-2 ans)</span>
                            </div>
                        </div>

                        {/* Departure Date */}
                        <div>
                             <label className="block text-sm font-medium" style={{color: '#c71585'}}>Date de départ souhaitée</label>
                             <div className="flex items-center gap-2 mt-1">
                                <input type="text" name="departureDate" value={formData.departureDate} onChange={handleChange} placeholder="jj/mm/aaaa" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"/>
                                <button type="button" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 whitespace-nowrap bg-white hover:bg-gray-50">+/- 3 jours</button>
                             </div>
                        </div>
                        
                        {/* Coordonnées */}
                        <div>
                            <h4 className="text-lg font-medium mb-2" style={{color: '#c71585'}}>Entrez vos coordonnées</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <InputField label="Nom*" name="nom" value={formData.nom} onChange={handleChange} srOnly placeholder="Nom*" required />
                                <InputField label="Prénom*" name="prenom" value={formData.prenom} onChange={handleChange} srOnly placeholder="Prénom*" required />
                                <InputField label="E-mail*" name="email" type="email" value={formData.email} onChange={handleChange} srOnly placeholder="E-mail*" required />
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                <InputField label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} srOnly placeholder="Mobile"/>
                                <InputField label="Ville" name="ville" value={formData.ville} onChange={handleChange} srOnly placeholder="Ville"/>
                                <InputField label="Pays" name="pays" value={formData.pays} onChange={handleChange} srOnly placeholder="Pays"/>
                            </div>
                        </div>

                        {/* Remarks */}
                        <div>
                            <h4 className="text-lg font-medium mb-2" style={{color: '#c71585'}}>Informations complémentaires</h4>
                            <textarea name="remarks" value={formData.remarks} onChange={handleChange} rows={4} placeholder="Remarques ou demandes particulières" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"></textarea>
                        </div>
                        
                        <div className="flex justify-end space-x-4 pt-4 border-t">
                            <button type="button" onClick={onClose} className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium">Fermer</button>
                            <button type="submit" className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 font-semibold shadow-md">Envoyez votre demande</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default QuoteRequestModal;
