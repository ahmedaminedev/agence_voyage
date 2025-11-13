
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const GroupRequestModal: React.FC = () => {
    const { isGroupModalOpen, toggleGroupModal } = useContext(AppContext);

    if (!isGroupModalOpen) {
        return null;
    }

    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div 
            className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4 animate-fadeIn"
            style={{ animationDuration: '0.3s' }}
            onClick={toggleGroupModal}
        >
            <div 
                className="bg-white w-full max-w-5xl max-h-[90vh] rounded-lg shadow-2xl flex overflow-hidden animate-scaleIn"
                style={{ animationDuration: '0.3s' }}
                onClick={stopPropagation}
            >
                {/* Left side: Image */}
                <div className="hidden lg:block lg:w-1/3">
                    <img 
                        src="https://picsum.photos/seed/group-travel/800/1200" 
                        alt="Group of friends traveling" 
                        className="w-full h-full object-cover" 
                    />
                </div>

                {/* Right side: Form */}
                <div className="w-full lg:w-2/3 p-8 overflow-y-auto relative">
                    <button 
                        onClick={toggleGroupModal}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 z-10"
                        aria-label="Close modal"
                    >
                        <CloseIcon className="w-7 h-7" />
                    </button>
                    
                    <h2 className="text-3xl font-bold font-serif text-brand-blue">Groupe et comité d'entreprise</h2>
                    <p className="mt-2 text-gray-600">
                        Dès lors que vous êtes un groupe d'au moins <strong>20 personnes</strong>, vous pouvez bénéficier de <strong>réductions</strong> sur votre voyage de groupes. Pour effectuer une demande de devis, il vous suffit de remplir le formulaire ci-dessous. Complétez soigneusement les informations demandées, elles seront nécessaires au bon traitement de votre dossier.
                    </p>

                    <h3 className="text-2xl font-bold font-serif text-brand-orange mt-6 mb-4 border-b pb-2">Demande de devis</h3>
                    
                    <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="groupType" className="block text-sm font-medium text-gray-700">Type de groupe *</label>
                                <select id="groupType" name="groupType" className="mt-1 block w-full contact-input contact-select rounded-md py-2 px-3">
                                    <option>Groupe d'amis</option>
                                    <option>Comité d'entreprise</option>
                                    <option>Association</option>
                                    <option>Voyage scolaire</option>
                                    <option>Autre</option>
                                </select>
                            </div>
                             <div>
                                <label htmlFor="participants" className="block text-sm font-medium text-gray-700">Nombre de participants *</label>
                                <input type="number" name="participants" id="participants" min="20" className="mt-1 block w-full contact-input rounded-md py-2 px-3" />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                             <div>
                                <label htmlFor="hotelName" className="block text-sm font-medium text-gray-700">Nom de l'Hôtel ou catégorie *</label>
                                <input type="text" name="hotelName" id="hotelName" placeholder="Nom de Hôtel ou catégorie" className="mt-1 block w-full contact-input rounded-md py-2 px-3" />
                            </div>
                             <div>
                                <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-700">Arrivée *</label>
                                <input type="date" name="arrivalDate" id="arrivalDate" className="mt-1 block w-full contact-input rounded-md py-2 px-3" />
                            </div>
                             <div>
                                <label htmlFor="nights" className="block text-sm font-medium text-gray-700">Nombre de nuits *</label>
                                <input type="number" name="nights" id="nights" min="1" className="mt-1 block w-full contact-input rounded-md py-2 px-3" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="formula" className="block text-sm font-medium text-gray-700">Formule *</label>
                                <select id="formula" name="formula" className="mt-1 block w-full contact-input contact-select rounded-md py-2 px-3">
                                    <option>Logement Petit Déjeuner</option>
                                    <option>Demi Pension</option>
                                    <option>Pension Complète</option>
                                    <option>All Inclusive</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget/personne *</label>
                                <input type="text" name="budget" id="budget" placeholder="Budget/personne" className="mt-1 block w-full contact-input rounded-md py-2 px-3" />
                            </div>
                             <div>
                                <label htmlFor="specificRequest" className="block text-sm font-medium text-gray-700">Demande spécifique *</label>
                                <textarea name="specificRequest" id="specificRequest" placeholder="Demande spécifique" rows={1} className="mt-1 block w-full contact-input rounded-md py-2 px-3"></textarea>
                            </div>
                        </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                             <div>
                                <label htmlFor="civility" className="block text-sm font-medium text-gray-700">Civilité *</label>
                                <select id="civility" name="civility" className="mt-1 block w-full contact-input contact-select rounded-md py-2 px-3">
                                    <option>Mr</option>
                                    <option>Mme</option>
                                    <option>Mlle</option>
                                </select>
                            </div>
                             <div>
                                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Nom contact *</label>
                                <input type="text" name="contactName" id="contactName" placeholder="Nom & prénom" className="mt-1 block w-full contact-input rounded-md py-2 px-3" />
                            </div>
                             <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone *</label>
                                <input type="tel" name="phone" id="phone" placeholder="Entrer votre Téléphone" className="mt-1 block w-full contact-input rounded-md py-2 px-3" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                                <input type="email" name="email" id="email" placeholder="Entrer votre email" className="mt-1 block w-full contact-input rounded-md py-2 px-3" />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Adresse *</label>
                                <input type="text" name="address" id="address" placeholder="Entrer votre adresse" className="mt-1 block w-full contact-input rounded-md py-2 px-3" />
                            </div>
                        </div>
                        
                        <div className="pt-4">
                            <button type="submit" className="w-auto btn-gradient text-white font-bold py-3 px-10 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                Envoyer demande
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GroupRequestModal;
