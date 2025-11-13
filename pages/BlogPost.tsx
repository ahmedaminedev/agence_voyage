
import React, { useContext } from 'react';
import { AppContext, Page } from '../context/AppContext';
import { articles } from '../constants';

const BlogPost: React.FC = () => {
    const { getSelectedArticle, setCurrentPage } = useContext(AppContext);
    const article = getSelectedArticle();

    if (!article) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold">Article non trouvé</h1>
                <button onClick={() => setCurrentPage(Page.Blog)} className="mt-4 bg-brand-blue text-white px-6 py-2 rounded-full">Retour au blog</button>
            </div>
        );
    }
    
    const similarArticles = articles.filter(a => a.id !== article.id).slice(0, 2);

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <article>
                    <header className="mb-8">
                        <div className="text-sm text-gray-500 mb-2">
                           <span>{article.date} / Par {article.author}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">{article.title}</h1>
                        <div className="mt-4">
                            {article.tags.map(tag => (
                                <span key={tag} className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-semibold mr-2 rtl:ml-2 rtl:mr-0 px-2.5 py-0.5 rounded-full">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </header>
                    
                    <img src={article.imageUrl} alt={article.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8" />
                    
                    <div 
                        className="prose lg:prose-xl max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </article>

                <div className="mt-12 border-t pt-8">
                    <h3 className="text-lg font-bold">Partager cet article</h3>
                    <div className="flex space-x-4 rtl:space-x-reverse mt-2">
                        <a href="#" className="text-gray-500 hover:text-blue-600">Facebook</a>
                        <a href="#" className="text-gray-500 hover:text-green-500">WhatsApp</a>
                        <a href="#" className="text-gray-500 hover:text-sky-500">Twitter</a>
                    </div>
                </div>

                <div className="mt-16 border-t pt-8">
                    <h2 className="text-2xl font-bold text-gray-800">Articles similaires</h2>
                    <div className="mt-6 grid gap-8 md:grid-cols-2">
                        {similarArticles.map(simArt => (
                            <div key={simArt.id} className="group cursor-pointer" onClick={() => setCurrentPage(Page.BlogPost, { id: simArt.id })}>
                                <img src={simArt.imageUrl} alt={simArt.title} className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-brand-orange transition">{simArt.title}</h3>
                                <p className="text-gray-600 mt-1 text-sm">{simArt.summary.substring(0, 80)}...</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogPost;
