
import { useTranslation } from '../../hooks/useTranslation';
import masterHak from '../../assets/img/masterHak.jpg';
import lokbgmean from '../../assets/img/lokbgmean.jpg';
import lkbgbunny from '../../assets/img/lokbgbunny.jpg';
import tong from '../../assets/img/tong.jpg';
import chhaiya from '../../assets/img/yaya.jpg';
const orgData = {
    id: 'ceo',
    name: 'Yu YiHak',
    nameKm: 'យូ យីហាក់',
    title: 'CEO',
    titleKm: 'ប្រធានសង្ឃ',
    imgUrl: masterHak,
    children: [
        {
            id: 'left-vp',
            name: 'Tol SokMean',
            nameKm: 'តុល សុខមាន',
            title: 'phikkho',
            titleKm: 'ភិក្ខុ',
            imgUrl: lokbgmean,
            children: [
                {
                    id: 'prod-1',
                    name: 'Sok Leng',
                    nameKm: 'សុខ​ ឡេង',
                    title: 'phikkho',
                    titleKm: 'ភិក្ខុ',
                    imgUrl: masterHak,
                    children: [
                        {
                            id: 'ui-1',
                            name: 'Khy ChhaiYa',
                            nameKm: 'ឃី ឆៃយ៉ា',
                            title: 'samner',
                            titleKm: 'សាមណេរ',
                            imgUrl: chhaiya,
                        },
                        {
                            id: 'ui-2',
                            name: 'Nam You',
                            nameKm: 'ណាំ យ៉ូ',
                            title: 'samner',
                            titleKm: 'សាមណេរ',
                            imgUrl: tong,
                        }
                    ]
                },
                {
                    id: 'prod-2',
                    name: 'Pheng Chhunmeng Tong',
                    nameKm: 'ផេង ឆុនម៉ង់ ទង',
                    title: 'phikkho',
                    titleKm: 'ភិក្ខុ',
                    imgUrl: tong,
                },
            ],
        },
        {
            id: 'right-vp',
            name: 'Von Bunny',
            nameKm: 'វ៉ុន ប៊ុន្នី',
            title: 'phikkho',
            titleKm: 'ភិក្ខុ',
            imgUrl: lkbgbunny,
            children: [
                {
                    id: 'ops-2',
                    name: 'Den San',
                    nameKm: 'ដែន សាន',
                    title: 'phikkho',
                    titleKm: 'ភិក្ខុ',
                    imgUrl: masterHak,
                },

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
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover shadow-md"
            />
        )
    }

    const initials = name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')

    return (
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs sm:text-base md:text-lg shadow-md">
            {initials}
        </div>
    )
}

const OrgNode = ({ node, language }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="p-1 sm:p-2 md:p-3">
                <Avatar name={language === 'en' ? node.name : node.nameKm} imgUrl={node.imgUrl} />
            </div>

            <div className="mt-1 sm:mt-2">
                <div className="font-semibold text-xs sm:text-sm md:text-base">
                    {language === 'en' ? node.name : node.nameKm}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                    {language === 'en' ? node.title : node.titleKm}
                </div>
            </div>

            {node.children && node.children.length > 0 && (
                <div className="mt-3 sm:mt-4 md:mt-6 pt-3 sm:pt-4 md:pt-6 border-t border-gray-200 w-full">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                        {node.children.map((child) => (
                            <div key={child.id} className="relative">
                                {/* vertical connector from the top border to the child */}
                                <div className="absolute -top-3 sm:-top-4 md:-top-6 left-1/2 transform -translate-x-1/2 w-px h-3 sm:h-4 md:h-6 bg-gray-200" />
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
            <div className="container mx-auto px-2 sm:px-3 md:px-4 py-6 sm:py-8 md:py-12">
                <header className="text-center mb-4 sm:mb-6 md:mb-8">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                        {language === 'en' ? t('structure.title') : 'រចនាសម្ព័ន្ធអង្គការ'}
                    </h1>

                </header>

                <section className="flex justify-center overflow-x-auto pb-4 sm:pb-6">
                    <div className="w-full max-w-5xl min-w-min scale-75 sm:scale-90 md:scale-100 origin-top">
                        <OrgNode node={orgData} language={language} />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Structure
