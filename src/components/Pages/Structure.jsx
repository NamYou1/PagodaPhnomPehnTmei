import { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { dataMonks } from '../Data/dataMonk';

// dataMo
// Modal Component for Member Details
const MemberDetailModal = ({ member, language, onClose }) => {
    if (!member) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white/80 rounded-full p-2 shadow-md hover:shadow-lg transition-all z-10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Header with image */}
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
                        <img
                            src={member.imgUrl}
                            alt={language === 'en' ? member.name : member.nameKm}
                            className="w-32 h-32 rounded-full object-fit-contain mx-auto shadow-xl border-4 border-white"
                        />
                        <h2 className="text-3xl font-bold text-primary mt-4">
                            {language === 'en' ? member.name : member.nameKm}
                        </h2>
                        <p className="text-lg text-gray-600 mt-2">
                            {language === 'en' ? member.title : member.titleKm}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-6">
                        {member.joinYear && (
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        {member.leftYear
                                            ? (language === 'en' ? 'Period' : 'រយៈពេល')
                                            : (language === 'en' ? 'Joined Year' : 'ចូលមកស្នាក់នៅ')
                                        }
                                    </p>
                                    <p className="text-lg font-semibold text-gray-800">
                                        {member.joinYear}
                                        {member.leftYear && (
                                            <span className="text-red-600"> - {member.leftYear}</span>
                                        )}
                                        {member.leftYear && (
                                            <span className="text-xs ml-2 text-red-600">
                                                {language === 'en' ? '(Left)' : '(បានចាកចេញ)'}
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        )}

                        {member.bio && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {language === 'en' ? 'About' : 'អំពី'}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {language === 'en' ? member.bio : member.bioKm}
                                </p>
                            </div>
                        )}


                    </div>
                </div>
            </div>
        </div>
    );
};

const Avatar = ({ name, imgUrl, onClick }) => {
    if (imgUrl) {
        return (
            <img
                src={imgUrl}
                alt={name}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-fit-contain object-center shadow-md cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300"
                onClick={onClick}
            />
        )
    }

    const initials = name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')

    return (
        <div
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs sm:text-base md:text-lg shadow-md cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300"
            onClick={onClick}
        >
            {initials}
        </div>
    )
}

const OrgNode = ({ node, language, onMemberClick }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="p-1 sm:p-2 md:p-3">
                <Avatar
                    name={language === 'en' ? node.name : node.nameKm}
                    imgUrl={node.imgUrl}
                    onClick={() => onMemberClick(node)}
                />
            </div>

            <div className="mt-1 sm:mt-2">
                <div className="font-semibold text-xs sm:text-sm md:text-base">
                    {language === 'en' ? node.name : node.nameKm}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                    {language === 'en' ? node.title : node.titleKm}
                </div>
                {/* {node.joinYear && (
                    <div className="text-[10px] sm:text-xs mt-1">
                        {node.leftYear ? (
                            <span className="text-red-600/70">
                                {node.joinYear} - {node.leftYear}
                            </span>
                        ) : (
                            <span className="text-primary/70">
                                {language === 'en' ? `Since ${node.joinYear}` : `ចាប់ពី ${node.joinYear}`}
                            </span>
                        )}
                    </div>
                )} */}
            </div>

            {/* Only show children in hierarchy if the member hasn't left */}
            {node.children && node.children.length > 0 && !node.leftYear && (
                <div className="mt-3 sm:mt-4 md:mt-6 pt-3 sm:pt-4 md:pt-6 border-t border-gray-200 w-full">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                        {node.children.map((child) => (
                            <div key={child.id} className="relative">
                                {/* vertical connector from the top border to the child */}
                                <div className="absolute -top-3 sm:-top-4 md:-top-6 left-1/2 transform -translate-x-1/2 w-px h-3 sm:h-4 md:h-6 bg-gray-200" />
                                <OrgNode node={child} language={language} onMemberClick={onMemberClick} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

// Helper function to get all years from org data
const getAllYears = (node) => {
    let years = new Set();
    if (node.joinYear) years.add(node.joinYear);
    if (node.leftYear) years.add(node.leftYear);

    if (node.children) {
        node.children.forEach(child => {
            const childYears = getAllYears(child);
            childYears.forEach(year => years.add(year));
        });
    }

    return Array.from(years).sort((a, b) => b - a);
};
// Helper function to flatten all members from hierarchy into a single array
// CEO first, then direct reports (Bunny second, Tol Sokmean third), then the rest
const flattenMembers = (node, members = [], isRoot = true) => {
    if (isRoot) {
        // Add CEO first
        members.push(node);

        // Add direct children in specific order: Bunny second, Tol Sokmean third, then others
        if (node.children) {
            // Find Bunny and Tol Sokmean by id or name
            const bunny = node.children.find(child => child.id === 'right-vp' || child.name === 'Von Bunny');
            const tolSokmean = node.children.find(child => child.id === 'left-vp' || child.name === 'Tol SokMean');

            // Add Bunny first, then Tol Sokmean
            if (bunny) members.push(bunny);
            if (tolSokmean) members.push(tolSokmean);

            // Add other direct children (like Phai Phally and Yan Bunthoeun)
            node.children.forEach(child => {
                if (child.id !== 'right-vp' && child.id !== 'left-vp') {
                    members.push(child);
                }
            });

            // Then add grandchildren and below
            node.children.forEach(child => {
                if (child.children) {
                    child.children.forEach(grandchild => {
                        flattenMembers(grandchild, members, false);
                    });
                }
            });
        }
    } else {
        // For non-root nodes, add normally
        members.push(node);
        if (node.children) {
            node.children.forEach(child => flattenMembers(child, members, false));
        }
    }

    return members;
};
// Helper function to filter org data by year
const filterByYear = (node, year, onlyCurrentMembers = false) => {
    // Check if this node was active during the selected year
    let nodeMatches;

    if (onlyCurrentMembers) {
        // For NOW: only show members currently in the pagoda (no leftYear or leftYear > current year)
        nodeMatches = !node.joinYear || (node.joinYear <= year && !node.leftYear);
    } else {
        // For specific years: show who was active during that year
        nodeMatches = !node.joinYear || (node.joinYear <= year && (!node.leftYear || node.leftYear >= year));
    }

    if (!nodeMatches) return null;

    // Filter children recursively, but keep original children for modal display
    const filteredChildren = node.children
        ? node.children
            .map(child => filterByYear(child, year, onlyCurrentMembers))
            .filter(child => child !== null)
        : [];

    return {
        ...node,
        // Keep original children for modal, but use filtered for hierarchy display
        originalChildren: node.children,
        children: filteredChildren
    };
};

const Structure = () => {
    const { t, language } = useTranslation();
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState('NOW');
    const [selectedMember, setSelectedMember] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'tree'
    // dataMonks
    const availableYears = getAllYears(dataMonks);

    // For NOW, only show members still in the pagoda (no leftYear or leftYear in the future)
    // For specific years, show who was active during that year
    const filteredData = selectedYear === 'NOW'
        ? filterByYear(dataMonks, currentYear, true) // true = only show current members
        : filterByYear(dataMonks, parseInt(selectedYear), false);

    // Get flat list of all members for grid view
    const allMembers = filteredData ? flattenMembers(filteredData) : [];

    return (
        <main className="">
            <div className="mx-auto">
                <header className="text-center mb-8">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                        {language === 'en' ? t('structure.title') : 'ចំនួនព្រះសង្ឃដែលគង់នៅ​ វត្តភ្នំពេញថ្មី'}
                    </h1>

                    {/* View Mode Toggle */}
                    <div className="mt-4 flex justify-center gap-2">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === 'grid'
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                {language === 'en' ? 'Grid View' : 'មើលជាក្រឡា'}
                            </span>
                        </button>
                        <button
                            onClick={() => setViewMode('tree')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === 'tree'
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                </svg>
                                {language === 'en' ? 'Tree View' : 'មើលជាមែកធាង'}
                            </span>
                        </button>
                    </div>

                    {/* Year Filter */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedYear('NOW')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedYear === 'NOW'
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {language === 'en' ? 'NOW' : 'ឥឡូវនេះ'}
                            </button>
                            {availableYears.map(year => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year.toString())}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedYear === year.toString()
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                </header>

                <section className="flex justify-center overflow-x-auto px-4">
                    {viewMode === 'grid' ? (
                        /* Grid View - All members in a flat grid */
                        <div className="w-full max-w-6xl">
                            <div className={`grid ${selectedYear === '2017' ? 'grid-cols-3' :
                                selectedYear === '2018' ? 'grid-cols-2 sm:grid-cols-4' :
                                    selectedYear === '2020' ? 'grid-cols-3 sm:grid-cols-6' :
                                        'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
                                } gap-4 md:gap-6`}>
                                {allMembers.map((member, index) => (
                                    <div
                                        key={member.id}
                                        className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer animate-fadeInUp"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                        onClick={() => setSelectedMember(member)}
                                    >
                                        <Avatar
                                            name={language === 'en' ? member.name : member.nameKm}
                                            imgUrl={member.imgUrl}
                                            onClick={() => { }}
                                        />
                                        <div className="mt-3">
                                            <div className="font-semibold text-sm md:text-base">
                                                {language === 'en' ? member.name : member.nameKm}
                                            </div>
                                            <div className="text-xs md:text-sm text-gray-500 mt-1">
                                                {language === 'en' ? member.title : member.titleKm}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Tree View - Hierarchical structure */
                        <div className="w-full max-w-5xl min-w-min scale-75 sm:scale-90 md:scale-100 origin-top">
                            {filteredData && <OrgNode node={filteredData} language={language} onMemberClick={setSelectedMember} />}
                        </div>
                    )}
                </section>
            </div>

            {/* Member Detail Modal */}
            {selectedMember && (
                <MemberDetailModal
                    member={selectedMember}
                    language={language}
                    onClose={() => setSelectedMember(null)}
                />
            )}
        </main>
    )
}

export default Structure
