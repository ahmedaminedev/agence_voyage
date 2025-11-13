import React, { useContext } from 'react';
import { AppContext, Page } from '../context/AppContext';

const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0 0 12 13.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.953 11.953 0 0 1 12 10.5c2.998 0 5.74 1.1 7.843 2.918m-15.686 0A8.959 8.959 0 0 1 3 12c0-.778.099-1.533.284-2.253m0 0A11.953 11.953 0 0 0 12 13.5c2.998 0 5.74 1.1 7.843 2.918" />
    </svg>
);
  
const SocialIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a href="#" className="text-gray-400 hover:text-brand-orange transform hover:scale-110 transition-all duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
    const { setCurrentPage } = useContext(AppContext);

    const handleLinkClick = (page: Page) => (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentPage(page);
    };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <a href="#" onClick={handleLinkClick(Page.Home)} className="flex items-center space-x-2 rtl:space-x-reverse">
              <GlobeIcon className="h-8 w-8 text-brand-blue" />
              <span className="text-2xl font-bold">Voyage<span className="text-brand-orange">Étoile</span></span>
            </a>
            <p className="text-gray-400 text-sm">Votre aventure commence ici. Explorez le monde avec confiance et sérénité.</p>
            <div className="flex space-x-4 rtl:space-x-reverse pt-2">
              <SocialIcon>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.675 0h-21.35C.582 0 0 .582 0 1.305v21.39C0 23.418.582 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.743 0 1.325-.582 1.325-1.305V1.305C24 .582 23.418 0 22.675 0z" /></svg>
              </SocialIcon>
              <SocialIcon>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>
              </SocialIcon>
              <SocialIcon>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.634 4.208 3.803 4.649-.6.165-1.23.217-1.874.174.596 1.877 2.333 3.248 4.393 3.284-1.793 1.405-4.065 2.24-6.523 2.24-.42 0-.834-.025-1.242-.073 2.305 1.476 5.048 2.34 8.001 2.34 9.608 0 14.878-7.95 14.878-14.878 0-.226-.005-.452-.015-.676.982-.713 1.832-1.602 2.508-2.604z" /></svg>
              </SocialIcon>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white">Liens utiles</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" onClick={handleLinkClick(Page.About)} className="text-gray-400 hover:text-brand-orange transition">À propos de nous</a></li>
              <li><a href="#" onClick={handleLinkClick(Page.Stays)} className="text-gray-400 hover:text-brand-orange transition">Nos séjours</a></li>
              <li><a href="#" onClick={handleLinkClick(Page.Blog)} className="text-gray-400 hover:text-brand-orange transition">Blog</a></li>
              <li><a href="#" onClick={handleLinkClick(Page.Contact)} className="text-gray-400 hover:text-brand-orange transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition">Mentions légales</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-start"><span className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 mt-1 text-brand-orange">&#9992;</span> 123 Rue du Voyage, 75001 Paris, France</li>
              <li className="flex items-center"><span className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 text-brand-orange">&#9742;</span> +33 1 23 45 67 89</li>
              <li className="flex items-center"><span className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 text-brand-orange">&#9993;</span> contact@voyageetoile.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-400">Recevez nos meilleures offres en avant-première.</p>
            <form className="mt-4 flex">
              <input type="email" placeholder="Votre email" className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-orange" />
              <button type="submit" className="bg-brand-orange text-white px-4 py-2 rounded-r-md hover:bg-brand-orange-dark font-semibold transition-colors">OK</button>
            </form>
          </div>

        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} VoyageÉtoile. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;