import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation'

// Example hierarchical data. Add `imgUrl` to any node to show a picture.
const orgData = {
    id: 'ceo',
    name: 'Yu YiHak',
    nameKm: 'យូ យីហាក់',
    title: 'Chief Executive Officer',
    titleKm: 'ប្រធានប្រតិបត្តិ',
    imgUrl: '',
    children: [
        {
            id: 'left-vp',
            name: 'Tol SokMean',
            nameKm: 'តល សក្មាន',
            title: 'VP - Product',
            titleKm: 'ប្រធាននាយក - ផលិតផល',
            imgUrl: '',
            children: [
                {
                    id: 'prod-1',
                    name: 'Sok Leng',
                    nameKm: 'សក លេង',
                    title: 'Product Manager',
                    titleKm: 'អ្នកគ្រប់គ្រងផលិតផល',
                    imgUrl: '',
                    children: [
                        {
                            id: 'ui-1',
                            name: 'Rith',
                            nameKm: 'រិទ្ធ',
                            title: 'UI/UX Designer',
                            titleKm: 'អ្នកច្នៃប្រឌិត UI/UX',
                            imgUrl: '',
                        },
                        {
                            id: 'ui-2',
                            name: 'Sophea',
                            nameKm: 'សូផា',
                            title: 'UI/UX Designer',
                            titleKm: 'អ្នកច្នៃប្រឌិត UI/UX',
                            imgUrl: '',
                        }
                    ]
                },
                {
                    id: 'prod-2',
                    name: 'Pheng Chhunmeng Tong',
                    nameKm: 'ផេង ឆុនម៉ង់ ទង',
                    title: 'UI/UX Lead',
                    titleKm: 'ប្រធាន UI/UX',
                    imgUrl: '',
                },
            ],
        },
        {
            id: 'right-vp',
            name: 'Von Bunny',
            nameKm: 'វ័ន បុនិយ',
            title: 'VP - Operations',
            titleKm: 'ប្រធាននាយក - ប្រតិបត្តិការ',
            imgUrl: '',
            children: [
                {
                    id: 'ops-1',
                    name: 'Den San',
                    nameKm: 'ដែន សាន',
                    title: 'Operations Manager',
                    titleKm: 'អ្នកគ្រប់គ្រងប្រតិបត្តិការ',
                    imgUrl: '',
                },
                {
                    id: 'ops-2',
                    name: 'Nam You',
                    nameKm: 'នាម យូ',
                    title: 'Logistics',
                    titleKm: 'ឡូជីស្ទីក',
                    imgUrl: '',
                }
            ],
        },
    ],
}

const Avatar = ({ name, imgUrl }) => {
    if (imgUrl) {
        return (
            <img
                src={imgUrl}
                alt={name}
                className="w-20 h-20 rounded-full object-cover shadow-md"
            />
        )
    }

    const initials = name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')

    return (
        <div className="w-20 h-20 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-lg shadow-md">
            {initials}
        </div>
    )
}

const OrgNode = ({ node, language }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="p-2 md:p-3">
                <Avatar name={language === 'en' ? node.name : node.nameKm} imgUrl={node.imgUrl} />
            </div>

            <div className="mt-2">
                <div className="font-semibold text-sm md:text-base">
                    {language === 'en' ? node.name : node.nameKm}
                </div>
                <div className="text-xs md:text-sm text-gray-500">
                    {language === 'en' ? node.title : node.titleKm}
                </div>
            </div>

            {node.children && node.children.length > 0 && (
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200 w-full">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6">
                        {node.children.map((child) => (
                            <div key={child.id} className="relative">
                                {/* vertical connector from the top border to the child */}
                                <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 w-px h-4 md:h-6 bg-gray-200" />
                                <OrgNode node={child} language={language} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

const Structure = () => {
    const { t, language } = useTranslation()

    return (
        <main className="min-h-screen bg-base-100">
            <div className="container mx-auto px-3 md:px-4 py-8 md:py-12">
                <header className="text-center mb-6 md:mb-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                        {language === 'en' ? t('structure.title') : 'រចនាសម្ព័ន្ធអង្គការ'}
                    </h1>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                        {language === 'en'
                            ? 'A simple, responsive org chart. Add `imgUrl` to any node in the data to show an image.'
                            : 'ផែនទីលម្អិតសាមញ្ញ និងប្រតिកម្ម។ បន្ថែម `imgUrl` ទៅលើថ្នាំណាមួយដើម្បីបង្ហាញរូបភាព។'}
                    </p>
                </header>

                <section className="flex justify-center overflow-x-auto pb-6">
                    <div className="w-full max-w-5xl min-w-min">
                        <OrgNode node={orgData} language={language} />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Structure
