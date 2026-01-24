import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation'
import { articlesData } from '../Data/articleData'

const ArticleDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { language } = useTranslation()
    const article = articlesData.find(a => a.id === parseInt(id))

    if (!article) {
        return (
            <div className="min-h-screen bg-base-200 py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-4">
                        {language === 'en' ? 'Article Not Found' : 'រកមិនឃើញអត្ថបទ'}
                    </h1>
                    <button
                        onClick={() => navigate('/article')}
                        className="btn btn-primary"
                    >
                        ← {language === 'en' ? 'Back to Articles' : 'ត្រឡប់ទៅអត្ថបទ'}
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="mt-10 min-h-screen bg-base-200 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/article')}
                    className="btn  mb-3 btn-primary transition-all"
                >
                    ← {language === 'en' ? 'Back to Articles' : 'ត្រឡប់ទៅអត្ថបទ'}
                </button>

                {/* Article Detail Card */}
                <div className="bg-base-100 rounded-lg shadow-xl overflow-hidden animate-fadeIn">
                    {/* Featured Image */}
                    <figure className="relative h-[700px] overflow-hidden">
                        <img
                            src={article.image}
                            alt={language === 'en' ? article.title : article.titleKm}
                            className="w-full h-full hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="badge badge-primary badge-lg">
                                {language === 'en' ? article.category.replace('-', ' ').toUpperCase() : article.categoryKm}
                            </span>
                        </div>
                    </figure>

                    {/* Article Content */}
                    <div className="p-8 md:p-12">
                        {/* YouTube Video Section */}
                        {article.videoUrl && (
                            <div className="mb-8 overflow-hidden rounded-lg shadow-xl">
                                <div className="relative w-full hover:scale-105 transition-transform duration-500" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                                        src={article.videoUrl}
                                        title={language === 'en' ? article.title : article.titleKm}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )}

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-3 text-sm text-base-content/60 mb-6">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span>{language === 'en' ? article.author : article.authorKm}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{article.date}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{language === 'en' ? article.readTime : article.readTimeKm}</span>
                            </div>
                        </div>

                        {/* Article Title */}
                        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                            {language === 'en' ? article.title : article.titleKm}
                        </h1>

                        {/* Article Excerpt */}
                        <div className="bg-base-200 p-6 rounded-lg mb-8 border-l-4 border-primary">
                            <p className="text-lg italic text-base-content/80">
                                {language === 'en' ? article.excerpt : article.excerptKm}
                            </p>
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-base-content/90 leading-relaxed whitespace-pre-line text-justify">
                                {language === 'en' ? article.content : article.contentKm}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="divider my-8"></div>

                        {/* Share Section */}
                        {/* <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">
                                    {language === 'en' ? 'Share this article:' : 'ចែករំលែកអត្ថបទនេះ៖'}
                                </span>
                                <button className="btn btn-circle btn-sm btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </button>
                                <button className="btn btn-circle btn-sm btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </button>
                            </div>
                            <button
                                onClick={() => navigate('/article')}
                                className="btn btn-primary"
                            >
                                {language === 'en' ? 'Read More Articles' : 'អានអត្ថបទបន្ថែម'}
                            </button>
                        </div> */}
                    </div>
                </div>

                {/* Related Articles Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">
                        {language === 'en' ? 'Related Articles' : 'អត្ថបទពាក់ព័ន្ធ'}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {articlesData
                            .filter(a => a.category === article.category && a.id !== article.id)
                            .slice(0, 3)
                            .map(relatedArticle => (
                                <div
                                    key={relatedArticle.id}
                                    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
                                    onClick={() => navigate(`/article/${relatedArticle.id}`)}
                                >
                                    <figure className="h-40 overflow-hidden">
                                        <img
                                            src={relatedArticle.image}
                                            alt={language === 'en' ? relatedArticle.title : relatedArticle.titleKm}
                                            className="w-full h-full object-cover"
                                        />
                                    </figure>
                                    <div className="card-body p-4">
                                        <h3 className="card-title text-sm">
                                            {language === 'en' ? relatedArticle.title : relatedArticle.titleKm}
                                        </h3>
                                        <p className="text-xs text-base-content/70 line-clamp-2">
                                            {language === 'en' ? relatedArticle.excerpt : relatedArticle.excerptKm}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetail
