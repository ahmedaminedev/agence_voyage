import React, { useState } from 'react';

const Auth: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const SocialButton: React.FC<{
        provider: 'Google' | 'Facebook';
        children: React.ReactNode;
        }> = ({ provider, children }) => (
        <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white/90 hover:bg-white transition">
            {children}
            <span className="ml-4 rtl:mr-4 rtl:ml-0 text-sm font-medium text-gray-700">Continuer avec {provider}</span>
        </button>
    );

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/authbg/1600/1200')"}}>
            <div className="max-w-lg w-full space-y-8 bg-[#FFEFD5]/30 backdrop-blur-xl p-12 rounded-2xl shadow-2xl border border-gray-200/50">
                <div>
                    <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-800 drop-shadow-sm">
                        {isLogin ? 'Bon retour parmi nous' : 'Rejoignez l\'aventure'}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Ou{' '}
                        <button onClick={() => setIsLogin(!isLogin)} className="font-medium text-brand-orange hover:text-orange-700">
                            {isLogin ? 'créez un nouveau compte' : 'connectez-vous'}
                        </button>
                    </p>
                </div>
                <form className="mt-8 space-y-5" action="#" method="POST">
                    {!isLogin && (
                         <div>
                            <input id="fullname" name="fullname" type="text" required className="contact-input w-full px-4 py-3 rounded-lg" placeholder="Nom complet" />
                        </div>
                    )}
                    <div>
                        <input id="email-address" name="email" type="email" autoComplete="email" required className="contact-input w-full px-4 py-3 rounded-lg" placeholder="Adresse email" />
                    </div>
                    <div>
                         <input id="password" name="password" type="password" autoComplete="current-password" required className="contact-input w-full px-4 py-3 rounded-lg" placeholder="Mot de passe" />
                    </div>
                    {!isLogin && (
                        <div>
                            <input id="confirm-password" name="confirm-password" type="password" required className="contact-input w-full px-4 py-3 rounded-lg" placeholder="Confirmer le mot de passe" />
                        </div>
                    )}

                    {isLogin && (
                        <div className="flex items-center justify-between">
                             <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-brand-blue focus:ring-brand-orange border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 rtl:mr-2 rtl:ml-0 block text-sm text-gray-700">
                                    Se souvenir de moi
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-brand-orange hover:text-orange-700">
                                    Mot de passe oublié ?
                                </a>
                            </div>
                        </div>
                    )}

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white btn-gradient">
                            {isLogin ? 'Se connecter' : 'S\'inscrire'}
                        </button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-navajo-white-80 text-gray-600 rounded-full">Ou continuer avec</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-3">
                       <SocialButton provider="Google">
                          <img className="h-5 w-5" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
                       </SocialButton>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Auth;