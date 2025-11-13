import React, { useContext } from 'react';
import { articles } from '../constants';
import { AppContext, Page } from '../context/AppContext';

const Blog: React.FC = () => {
    const { setCurrentPage } = useContext(AppContext);

    return (
        <div className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900">Notre Blog</h1>
                    <p className="mt-2 text-lg text-gray-600">Inspiration, conseils et récits de voyage de nos experts.</p>
                </div>
                
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map(article => (
                        <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                            <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover"/>
                            <div className="p-6 flex-grow flex flex-col">
                                <p className="text-sm text-brand-blue font-semibold">{article.tags.join(', ')}</p>
                                <h2 className="mt-2 text-2xl font-bold text-gray-800">{article.title}</h2>
                                <p className="mt-3 text-gray-600 flex-grow">{article.summary}</p>
                                <div className="mt-6">
                                    <button
                                        onClick={() => setCurrentPage(Page.BlogPost, { id: article.id })}
                                        className="font-semibold text-brand-orange hover:text-orange-700 transition"
                                    >
                                        Lire la suite &rarr;
                                    </button>
                                </div>
                            </div>
                             <div className="bg-gray-50 px-6 py-3 text-sm text-gray-500">
                                Par {article.author} &bull; {article.date}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;