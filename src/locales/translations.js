import { Activities, Purpose } from "../components/Pages";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      structure: "Structure",
      founder: "Founder",
      contact: "Contact",
      Activities: "Activities",
      Dharma: "Dharma",
      purpose: "Purpose"
    },
    home: {
      title: "Featured Activities",
      viewDetails: "View Details",
    },
    about: {
      hero: {
        title: "History of monks coming to live at Wat Phnom Thmei",
        description:
          "In response to the request of the abbot of the Samonkosal Buddhist Monastery, Phnom Penh Thmey, Samdech Preah Sakyamuni Kittbandit Ratsaroen, Preah Sub-district of Sen Sok District, Phnom Penh, the abbot of Wat Samrong Anthet has appointed the abbot of Wat Samrong Anthet, Monk Vong You Yihak Sovannsarro, to reside at the Buddhist Monastery On Friday, the 10th day of the month of Visakha, year of the Roka Nipasak, B.E. 2560, corresponding to May 5, 2017, the monks were the most important ones to manage and lead the construction.",
        // learnMore: "Learn More",
      },
      timeline: {
        title: "Our History",
        // foundation: "Foundation",
        // growth: "Growth",
        // expansion: "Next process",
        // adaptation: "Leadership in 2020",
        // transformation: "Digital Transformation",
        // awards: "Innovation Award",
        // innovation: "Industry Leadership",
        // future: "Future Forward",
        desc2017:
          "Started as a small team with big dreams. Launched our first product and secured initial funding.",
        desc2018: `According to the request of the Committee of the Monks of the New Phnom Penh Buddhist School dated Friday, 5th Rouch,
                  Pisakha month,
                  Cha Samritsak year, B.E. 2562, corresponding to May 6, 2018, regarding the appointment of monks at the New Phnom Penh Buddhist School
                  according to the needs of the New Phnom Penh Buddhist School

                  Decide

                  Article 1: Appointed Preah Sasanvong Yu Yihak, surnamed Pannati Sovann Soro, who resides at Wat Monisakor (Samrong Andet), Sangkat Kork Khlang, Khan Sen Sok, Phnom Penh
                  as the head monk of the New Phnom Penh Buddhist School from now on.

                  Article 2: This appointment decision is effective from the date of this signing.
                  Friday, 7th Rouch,
                  Thuthiyasath month,
                  Cha Samritsak year, B.E. 2562, held at the Sub-district Office on August 3, 2018, signed by Samdech Preah Sakyamuni Rath Saroeun`,

        desc2019: `Two monks and their relatives built a hut made of iron and cement, with two rooms and one bathroom, for the monks to temporarily stay in.`,
        desc2020:
          "The project to build a building began with the demolition of the old building and the construction of a new building measuring 6.5 meters wide, 27 meters long, and 5 meters high, elevated above the ground, with functions such as a common area, 1 living room, 3 bathrooms, 1 kitchen, along with a zinc roof, built on top for monks and students to live in.",
        desc2021: `Continue to build an interconnected building, adding functions that meet the needs of the use
which is 10 meters wide, 15.6 meters long, and 2 stories high.
which can currently support 12 monks and 12 students.`,
        desc2023:
          `Continue to build an interconnected building, adding functions that meet the needs of the use
which is 10 meters wide, 15.6 meters long, and 2 stories high.
which can currently support 12 monks and 12 students.`,
        desc2024:
          `Continue to build an interconnected building, adding functions that meet the needs of the use
which is 10 meters wide, 15.6 meters long, and 2 stories high.
which can currently support 12 monks and 12 students.`,
        desc2025:
          `Continue to build an interconnected building, adding functions that meet the needs of the use
which is 10 meters wide, 15.6 meters long, and 2 stories high.
which can currently support 12 monks and 12 students.`,
      },
    },
    contact: {
      title: "Get in Touch",
      description: "We'd love to hear from you. Here's how you can reach us.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      addressDetails: "Str 1982 , Phnom Penh Tmei , Sen Sok , Phnom Penh , Cambodai ",
      phoneNumber: "096 4563 693",
      emailAddress: "namyou854@gamil.com",
      ourSocials: "Our Socials"
    },
    details: {
      moreActivities: "More Activities",
      backButton: "Back",
    },
    founder: {
      name: "Yu YiHak",
      title: "Leader of the construction of the Wat Phnom Penh Tmei",
      bio: "Passionate about building innovative solutions that make a difference. With over 15 years of experience in technology and entrepreneurship, I'm committed to creating products that empower people and transform industries.",
      achievements: "Key Achievements",

      team: "Leadership Team",
      testimonials: "What People Say",
      cta: "Let's Build the Future Together",
    },
    structure: {
      title: "Organization Structure of WatPhnom Pehn Tmei",
    },
    activities: {
      searchPlaceholder: "Search activities...",
    },
  },
  km: {
    nav: {
      home: "ទំព័រដើម",
      about: "អំពីយើង",
      structure: "រចនាសម្ព័ន្ធ",
      founder: "អ្នកដឹកនាំកសាង",
      contact: "ទាក់ទងយើង",
      Activities: "សកម្មភាពនានា",
      Dharma: "ស្តាប់ព្រះធម៌",
      purpose: "គោលបំណង"
    },
    home: {
      title: "សកម្មភាពនានា",
      viewDetails: "មើលលម្អិត",
    },
    about: {
      hero: {
        title: "ប្រវត្តិព្រះសង្ឃមកគង់នៅ វត្តភ្នំពេញថ្មី",
        description:
          `តបទៅតាមសំណើរសូមរបស់អាចារ្យគណ:កម្មការ សាលាបុណ្យ សន្សំកុសល ភ្នំពេញថ្មី សម្តេចព្រះសក្យមុនី កិត្តិបណ្ឌិត រ័ត្នសារឿន ព្រះអនុគណ ខណ្ឌ សែនសុខ រាជធានី ភ្នំពេញ
           ព្រះចៅអធិការវត្ត សំរោងអណ្តែត បានចាត់តាំង ព្រះគ្រូសាសនាវង្ស យូ យីហាក់ សុវណ្ណស្សរោ ឲ្យមកគង់នៅសាលាបុណ្យ  
          នាថ្ងៃ សុក្រ ១០កើត ខែពិសាខ ឆ្នាំ រកា នព្វស័ក ព.ស ២៥៦០ ត្រូវនឹង ថ្ងៃទី០៥ ខែ ឧសភា ឆ្នាំ២០១៧ ជាព្រះសង្ឃដំបងគេបំផុត ដើម្បីគ្រប់គ្រងដឹកនាំកសាង។`,
      },
      timeline: {
        title: "ដំណើរការកសាងរបស់ វត្តភ្នំពេញថ្មី",
        foundation: "ការចាប់ផ្តើមកសាងវត្តភ្នំពេញថ្មី",
        desc2017:
          `យោងតាមសំណើរសុំរបស់គណៈកម្មការអាចារ្យសាលាបុណ្យភ្នំពេញថ្មីចុះថ្ងៃសុក្រ ៥រោច ខែ
          ពិសាខ ឆ្នាំចសំរឹទ្ធិស័ក ព.ស២៥៦២ ត្រូវនឹងថ្ងៃទី៦ ខែ ឧសភា ឆ្នាំ២០១៨ ស្តីអំពីការនិមន្ត
          ព្រះសង្ឃនៅសាលាបុណ្យភ្នំពេញថ្មី
          តាមការចាំបាច់របស់សាលាបុណ្យភូមិភ្នំពេញថ្មី។`,
        desc2018: `យោងតាមសំណើរសុំរបស់គណៈកម្មការអាចារ្យសាលាបុណ្យភ្នំពេញថ្មីចុះថ្ងៃសុក្រ ៥រោច ខែ
          ពិសាខ ឆ្នាំចសំរឹទ្ធិស័ក ព.ស២៥៦២ ត្រូវនឹងថ្ងៃទី៦ ខែ ឧសភា ឆ្នាំ២០១៨ ស្តីអំពីការនិមន្ត
          ព្រះសង្ឃនៅសាលាបុណ្យភ្នំពេញថ្មី
          តាមការចាំបាច់របស់សាលាបុណ្យភូមិភ្នំពេញថ្មី។
          សម្រេច
          ប្រការ១ : ត្រូវបានតែងតាំង ព្រះគ្រូសាសនវង្ស យូ យីហាក់ នាមបញ្ញាតិ សុវណ្ណសោរោ ដែល
          គង់នៅវត្តមុនីសាគរ (សំរោងអណ្ដែត) សង្កាត់គោកឃ្លាង ខណ្ឌសែនសុខ រាជធានីភ្នំពេញ
          ជាប្រធានសង្ឃសាលាបុណ្យភូមិភ្នំពេញថ្មីតទៅ។
          ប្រការ២ : សេចក្តីសម្រេចតែងតាំងនេះ មានប្រសិទ្ធភាព ចាំពីថ្ងៃចុះហត្ថលេខានេះតទៅ។
          ថ្ងៃសុក្រ ៧រោច ខែ ទុតិយាសាឍ ឆ្នាំច សំរឹទ្ធស័ក ព.ស ២៥៦២ ធ្វើនៅសាលាអនុគណ
          ខណ្ឌ ថ្ងៃទី ០៣ ខែ សីហា ឆ្នាំ២០១៨ ហត្ថលេខាដោយ សម្ដេចព្រះសាក្យមុនី រ័ត្ន សារឿន`,
        desc2019: `ព្រះសង្ឃ២អង្គ និងញាតិញោមមានការកសាងកុដិធ្វើអំពីដែក និងស៊ីម៉ង ដែលមាន បន្ទប់២ និងបន្ទប់ទឹក១ សម្រាប់ព្រះសង្ឃគង់ស្នាក់នៅបណ្តោះអាសន្ន។`,
        desc2020: `ចាំផ្តើមគម្រោងកសាងអាគារដោយមានការរុះរើសអាគារចាស់ចោល និងផ្ដើមដោយ
          ការកសាងអាគារថ្មីនោះឡើងដោយមានប្រវែង ទទឹង៦ម៉ែត្រកន្លះ និងបណ្ដោយ
          ២៧ម៉ែត្រ កម្ពស់៥ម៉ែត្រ លើកកម្ពស់ផុតពីដី ដែលមានមុខងារដូចជា លំហបើ
          ប្រាស់រួម បន្ទប់ស្នាក់នៅ១ បន្ទប់ទឹក៣ ចង្ក្រានបាយ១ ព្រមជាមួយការប្រក់តំបូល
          ស័ង្កសី សង់ពីលើបន្ថែមសម្រាប់ព្រះសង្ឃគង់នៅ និងនិស្សិត។`,
        desc2021: `បន្តការកសាងអាគារភ្ជាប់គ្នា ដោយបន្ថែមុខងារដែលជាតម្រូវការនៃការប្រើប្រាស់
          ដែលមានទទឹង១០ម៉ែត្រ បណ្តោយ ១៥ម៉ែត្រ៦តឹក កម្ពស់២ជាន់។
          ដែលបច្ចុប្បន្នភាព អាចទ្រទ្រង់ព្រះសង្ឃ១២អង្គ និងនិស្សិត១២នាក់។`,
        desc2023:
          `បន្តការកសាងអាគារភ្ជាប់គ្នា ដោយបន្ថែមុខងារដែលជាតម្រូវការនៃការប្រើប្រាស់
          ដែលមានទទឹង១០ម៉ែត្រ បណ្តោយ ១៥ម៉ែត្រ៦តឹក កម្ពស់២ជាន់។
          ដែលបច្ចុប្បន្នភាព អាចទ្រទ្រង់ព្រះសង្ឃ១២អង្គ និងនិស្សិត១២នាក់។`,
        desc2024:
          `បន្តការកសាងអាគារភ្ជាប់គ្នា ដោយបន្ថែមុខងារដែលជាតម្រូវការនៃការប្រើប្រាស់
          ដែលមានទទឹង១០ម៉ែត្រ បណ្តោយ ១៥ម៉ែត្រ៦តឹក កម្ពស់២ជាន់។
          ដែលបច្ចុប្បន្នភាព អាចទ្រទ្រង់ព្រះសង្ឃ១២អង្គ និងនិស្សិត១២នាក់។`,
        desc2025:
          `បន្តការកសាងអាគារភ្ជាប់គ្នា ដោយបន្ថែមុខងារដែលជាតម្រូវការនៃការប្រើប្រាស់
          ដែលមានទទឹង១០ម៉ែត្រ បណ្តោយ ១៥ម៉ែត្រ៦តឹក កម្ពស់២ជាន់។
          ដែលបច្ចុប្បន្នភាព អាចទ្រទ្រង់ព្រះសង្ឃ១២អង្គ និងនិស្សិត១២នាក់។`,
      },
    },
    details: {
      moreActivities: "សកម្មភាពលម្អិត",
      backButton: "ត្រឡប់ក្រោយ",
    },
    founder: {
      name: " ព្រះអង្គគ្រូសាសនាវង្ស យូ យីហាក់ ",
      title: "អ្នកដឹកនាំកសាង វត្តភ្នំពេញថ្មី",
      bio: `តបទៅតាមសំណើរសូមរបស់អាចារ្យគណ:កម្មការ សាលាបុណ្យ សន្សំកុសល ភ្នំពេញថ្មី សម្តេចព្រះសក្យមុនី កិត្តិបណ្ឌិត រ័ត្នសារឿន ព្រះអនុគណ ខណ្ឌ សែនសុខ រាជធានី ភ្នំពេញ
           ព្រះចៅអធិការវត្ត សំរោងអណ្តែត បានចាត់តាំង ព្រះគ្រូសាសនាវង្ស យូ យីហាក់ សុវណ្ណស្សរោ ឲ្យមកគង់នៅសាលាបុណ្យ  
          នាថ្ងៃ សុក្រ ១០កើត ខែពិសាខ ឆ្នាំ រកា នព្វស័ក ព.ស ២៥៦០ ត្រូវនឹង ថ្ងៃទី០៥ ខែ ឧសភា ឆ្នាំ២០១៧ ជាព្រះសង្ឃដំបងគេបំផុត ដើម្បីគ្រប់គ្រងដឹកនាំកសាង។`,
    },
    contact: {
      title: "ទាក់ទងយើង",
      description: "ទំនាក់ទំនងមកវត្តភ្នំពេញថ្មី និង ទីតាំងរបស់វត្តភ្នំពេញថ្មី",
      phone: "ទូរស័ព្ទ",
      email: "អ៊ីមែល",
      address: "អាសយដ្ឋាន",
      addressDetails: "ផ្លូវ ១៩៨២ , ភ្នំពេញថ្មី , សែនសុខ , រាជធានីភ្នំពេញ , កម្ពុជា ",
      phoneNumber: "០៩៦ ៤៥៦៣ ៦៩៣",
      emailAddress: "namyou854@gmail.com",
      ourSocials: "បណ្តាញសង្គមរបស់យើង"

    },
    activities: {
      searchPlaceholder: "ស្វែងរកសកម្មភាពនានា...",
    },
    structure: {
      title: "រចនាសម្ព័ន្ធ​ វត្តភ្នំពេញថ្មី",
    },
    purpose: {

    }
  },
};

export default translations;
