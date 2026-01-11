import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation'
import { articlesData } from '../Data/articleData'

const Article = () => {
    const navigate = useNavigate()
    const { language } = useTranslation()
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')

    // Get unique categories
    const categories = ['all', ...new Set(articlesData.map(article => article.category))]

    // Filter articles
    const filteredArticles = articlesData.filter(article => {
        const title = language === 'en' ? article.title : article.titleKm
        const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const getCategoryName = (category) => {
        if (category === 'all') return language === 'en' ? 'All Articles' : 'អត្ថបទទាំងអស់'
        const article = articlesData.find(a => a.category === category)
        return language === 'en' ? article?.category.replace('-', ' ') : article?.categoryKm
    }

    return (
        <div className="mt-10 min-h-screen bg-base-200 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        {language === 'en' ? 'Buddhist Articles & Festival Insights' : 'អត្ថបទព្រះពុទ្ធសាសនា និងព័ត៌មានលម្អិតអំពីពិធីបុណ្យ'}
                    </h1>
                    <p className="text-lg text-base-content/80 mb-4">
                        {language === 'en' ? 'Explore Buddhist teachings, temple life, and festival traditions' : 'ស្វែងយល់អំពីការបង្រៀនព្រះពុទ្ធសាសនា ជីវិតវត្ត និងប្រពៃណីពិធីបុណ្យ'}
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder={language === 'en' ? 'Search articles...' : 'ស្វែងរកអត្ថបទ...'}
                        className="input input-primary w-full mb-4"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="flex gap-2 flex-wrap justify-center">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-ghost'}`}
                            >
                                {getCategoryName(category)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map(article => (
                        <div
                            key={article.id}
                            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
                            onClick={() => navigate(`/article/${article.id}`)}
                        >
                            <figure className="h-48 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={language === 'en' ? article.title : article.titleKm}
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="badge badge-primary badge-sm">
                                        {language === 'en' ? article.category.replace('-', ' ') : article.categoryKm}
                                    </span>
                                    <span className="text-xs text-base-content/60">
                                        {language === 'en' ? article.readTime : article.readTimeKm}
                                    </span>
                                </div>
                                <h2 className="card-title text-lg">
                                    {language === 'en' ? article.title : article.titleKm}
                                </h2>
                                <p className="text-sm text-base-content/70 line-clamp-3">
                                    {language === 'en' ? article.excerpt : article.excerptKm}
                                </p>
                                <div className="card-actions justify-between items-center mt-4">
                                    <span className="text-xs text-base-content/60">
                                        {language === 'en' ? article.author : article.authorKm}
                                    </span>
                                    <button className="btn btn-primary btn-sm">
                                        {language === 'en' ? 'Read More' : 'អានបន្ថែម'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results Message */}
                {filteredArticles.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-base-content/60">
                            {language === 'en' ? 'No articles found' : 'រកមិនឃើញអត្ថបទទេ'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Article
