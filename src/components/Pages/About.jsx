import React from 'react'
import { useTranslation } from '../../hooks/useTranslation'

const About = () => {
  const { t } = useTranslation()

  const History = [
    {
      id: 1,
      year: 2017,
      title: t('about.timeline.foundation'),
      description: t('about.timeline.desc2017')
    },
    {
      id: 2,
      year: 2018,
      title: t('about.timeline.growth'),
      description: t('about.timeline.desc2018')
    },
    {
      id: 3,
      year: 2019,
      title: t('about.timeline.expansion'),
      description: t('about.timeline.desc2019')
    },
    {
      id: 4,
      year: 2020,
      title: t('about.timeline.adaptation'),
      description: t('about.timeline.desc2020')
    },
    {
      id: 5,
      year: 2021,
      title: t('about.timeline.transformation'),
      description: t('about.timeline.desc2021')
    },
    {
      id: 6,
      year: 2023,
      title: t('about.timeline.awards'),
      description: t('about.timeline.desc2023')
    },
    {
      id: 7,
      year: 2024,
      title: t('about.timeline.innovation'),
      description: t('about.timeline.desc2024')
    },
    {
      id: 8,
      year: 2025,
      title: t('about.timeline.future'),
      description: t('about.timeline.desc2025')
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="hero min-h-[400px] bg-base-200 rounded-box mb-12">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-8">{t('about.hero.title')}</h1>
            <p className="text-xl mb-6">{t('about.hero.description')}</p>
            <button className="btn btn-primary">{t('about.hero.learnMore')}</button>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{t('about.timeline.title')}</h2>

        <ul className="timeline timeline-vertical">
          {History.map((item, index) => (
            <li key={item.id}>
              {index !== 0 && <hr />}
              <div className={index % 2 === 0 ? 'timeline-start timeline-box' : 'timeline-end timeline-box'}>
                <h3 className="font-bold text-lg">{item.year} - {item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              {index !== History.length - 1 && <hr />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default About