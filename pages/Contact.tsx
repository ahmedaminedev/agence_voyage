import React from 'react';

// --- SVG Icons ---
const PhoneIcon = ({ className = "w-5 h-5", ...rest }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} {...rest}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>;
const EnvelopeIcon = ({ className = "w-5 h-5", ...rest }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} {...rest}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25-2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;
const CalendarIcon = ({ className = "w-5 h-5", ...rest }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} {...rest}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /></svg>;
const WhatsAppIcon = ({ className = "w-5 h-5", ...rest }: { className?: string }) => <svg fill="currentColor" viewBox="0 0 24 24" className={className} {...rest}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.847 6.062l-1.011 3.697 3.824-1.004z"/></svg>;


const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4 bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/contactbg/1920/1080')"}}>
<div className="w-full max-w-5xl bg-[#FFEFD5]/30 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12 border border-gray-200/50">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 drop-shadow-sm">Contactez-nous</h1>
                <p className="mt-2 text-lg text-gray-600">Une question ? Une envie de voyage ? Nous sommes là pour vous aider.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Left Column */}
                <div className="space-y-8">
                <div>
                    <h2 className="text-3xl font-bold mb-2 text-brand-blue-dark">Informations de contact</h2>
                    <p className="font-semibold text-gray-700">Réponse en moins de 24h</p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <PhoneIcon className="w-6 h-6 text-brand-blue" />
                        <span className="text-gray-700">+33 1 23 45 67 89</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <EnvelopeIcon className="w-6 h-6 text-brand-blue" />
                        <span className="text-gray-700">contact@voyageetoile.com</span>
                    </div>
                </div>

                <hr className="border-t border-gray-200" />

                <div>
                    <h3 className="text-2xl font-bold mb-4 text-brand-blue-dark">Nos CTAs rapides :</h3>
                    <div className="space-y-3">
                    <a href="https://wa.me/33123456789" target="_blank" rel="noopener noreferrer" className="btn-gradient text-white flex items-center justify-center w-full px-4 py-3 rounded-lg font-semibold space-x-2">
                        <WhatsAppIcon className="w-5 h-5" /> <span>Écrire sur WhatsApp</span>
                    </a>
                    <a href="mailto:contact@voyageetoile.com" className="btn-contact-secondary flex items-center justify-center w-full px-4 py-3 rounded-lg font-semibold space-x-2">
                        <CalendarIcon className="w-5 h-5" /> <span>Planifier un rendez-vous</span>
                    </a>
                    </div>
                </div>

                <div className="text-center pt-4">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/33123456789&bgcolor=ffffff&color=000000" alt="QR Code WhatsApp" className="mx-auto rounded-lg bg-white p-2" />
                </div>
                </div>

                {/* Right Column */}
                <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-blue-dark">Envoyez-nous un message</h2>
                <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Votre nom complet" required className="contact-input w-full px-4 py-3 rounded-lg" />
                    <input type="email" placeholder="Votre adresse email" required className="contact-input w-full px-4 py-3 rounded-lg" />
                    <select required className="contact-input contact-select w-full px-4 py-3 rounded-lg appearance-none">
                    <option value="" disabled selected>Choix de service...</option>
                    <option value="reservation">Réservation</option>
                    <option value="info">Demande d’info</option>
                    <option value="support">Support</option>
                    </select>
                    <textarea placeholder="Votre message..." rows={5} required className="contact-input w-full px-4 py-3 rounded-lg"></textarea>
                    <button type="submit" className="w-full btn-gradient text-white py-3 rounded-lg text-lg font-bold">
                    Envoyer le message
                    </button>
                </form>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Contact;