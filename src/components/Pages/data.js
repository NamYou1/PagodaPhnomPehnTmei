import { VisakBocheaMain, VisakBocheaPhoto } from "../../assets/VisakBochea";
import { KathinaPhoto, KathinaMain } from "../../assets/Kaṭhina";
import { MahabaliMain, MahabaliPhoto } from "../../assets/Mahabali/index.js";
import { MeakBocheaMain, MeakBocheaPhoto } from "../../assets/MeakBochea/index.js";
import { AlmsbowlMeakBocheaMain, AlmsbowlMeakBocheaPhoto } from "../../assets/AlmsbowlMeakBochea/index.js";
import { KathenMain, kathen24Photo } from "../../assets/kathen24/index.js";
import { SamakSilverFlowerFestivalMain, SamakSilverFlowerFestivalPhoto } from "../../assets/SamakSilverFlowerFestiva2025/index.js";
// import { Children } from "react";

export const initialData = [
    {
        id: 1,
        title: "Kathena Festival",
        titleKm: "កឋិនទាន",
        description:
            `Please accept the Angkathana Maha Samaki Festival at Wat Phnom Thmey
            Sunday, 5th of the month of Asso, year of the Rat, Buddhist Era 2569, corresponding to October 12, 2025`,
        descriptionKm:
            `សូមអនុមោទនា ពិធីបុណ្យអង្គកឋិនទានមហាសាមគ្គី វត្តភ្នំពេញថ្មី
            ថ្ងៃអាទិត្យ ៥រោច ខែអស្សុជ ឆ្នាំម្សាញ់ សប្តស័ក ពុទ្ធសករាជ ២៥៦៩ ត្រូវនឹងថ្ងៃទី១២ ខែតុលា ឆ្នាំ២០២៥`,
        imgUrl: KathinaMain,
        vdourl: "",
        year: 2025,
        Children: KathinaPhoto.map((img, index) => ({
            id: index + 1,
            image: img
        }))
    },
    {
        id: 2,
        title: "Blessing ceremony and spreading kindness",
        titleKm: "ពិធីក្រង់ពិលី និងផ្សាយមេត្តាធម៌",
        description:
            `Sunday, 5th of the month of Ashoka, year of the Monkey, Buddhist Era 2569, corresponding to October 12, 2025`,
        descriptionKm:
            `ថ្ងៃអាទិត្យ ៥រោច ខែអស្សុជ ឆ្នាំម្សាញ់ សប្តស័ក ពុទ្ធសករាជ ២៥៦៩ ត្រូវនឹងថ្ងៃទី១២ ខែតុលា ឆ្នាំ២០២៥`,
        imgUrl: MahabaliMain,
        vdourl: "https://www.facebook.com/share/v/17SAmw2aMU/",
        year: 2025,
        Children: MahabaliPhoto.map((img, index) => ({
            id: index + 1,
            image: img
        }))
    },
    {
        id: 3,
        title: "Visak Bochea Festival",
        titleKm: "ពិធី​បុណ្យ​វិសាខ​បូជា ",
        description:
            `Sunday, May 11, 2025 which in Lunar is day of 15 Koeut, month of Vesak, year of Snake, Sabpaksak era, Buddhist era 2568.`,
        descriptionKm:
            `ថ្ងៃអាទិត្យ ១៥កើត ខែពិសាខ ឆ្នាំម្សាញ់ សប្តស័ក ពុទ្ធសករាជ ២៥៦៨ ត្រូវនឹងថ្ងៃទី១១ ខែឧសភា ឆ្នាំ២០២៥ ។`,
        imgUrl: VisakBocheaMain,
        vdourl: "https://www.facebook.com/share/v/17SAmw2aMU/",
        year: 2025,
        Children: VisakBocheaPhoto.map((img, index) => ({
            id: index + 1,
            image: img
        }))
    },
    {
        id: 4,
        title: "Meak Bochea Festival",
        titleKm: "បុណ្យមាឃ បូជា",
        description:
            `Wednesday, February 12, 2025 which in Lunar is day of 15 Koeut, month of Meak, year of Dragon, Chhorsak era, Buddhist era 2568.`,
        descriptionKm:
            `ថ្ងៃពុធ ១៥កើត ខែមាឃ ឆ្នាំរោង ឆស័ក ពុទ្ធសករាជ ២៥៦៨ ត្រូវនឹងថ្ងៃទី១២ ខែកុម្ភៈ ឆ្នាំ២០២៥​ ។`,
        imgUrl: MeakBocheaMain,
        vdourl: "https://www.facebook.com/share/v/17SAmw2aMU/",
        year: 2025,
        Children: MeakBocheaPhoto.map((img, index) => ({
            id: index + 1,
            image: img
        }))
    },
    // {
    //     id: 5,
    //     title: "Cambodian New Year",
    //     titleKm: "ចូលឆ្នាំខ្មែរ",
    //     description:
    //         ``,
    //     descriptionKm:
    //         ``,
    //     imgUrl: KathinaMain,
    //     vdourl: "https://www.facebook.com/share/v/17SAmw2aMU/",
    //     year: 2025,
    // },
    // {
    //     id: 6,
    //     title: "Pchum Ben",
    //     titleKm: "បុណ្យភ្ជុំបិណ្ឌ",
    //     description:
    //         ``,
    //     descriptionKm:
    //         ``,
    //     imgUrl: KathinaMain,
    //     vdourl: "",
    //     year: 2025,
    // },
    {
        id: 7,
        title: "Buddha image ceremony",
        titleKm: "ពិធីសិតនូវព្រះពុទ្ធរូប",
        description:
            ` Ceremony of installing the Buddha image made of metal, Wat Phnom Thmei Sunday, 15th Kert, full moon of the month of Mikasi, corresponding to 15th December, 2568 CE, 2024 .`,
        descriptionKm:
            `សូមជ្រះថ្លាអនុមោទនា!!!
            ពិធីសិតនូវព្រះពុទ្ធរូប សាងឡើងអំពីរលោហៈ វត្តភ្នំពេញថ្មី
            ថ្ងៃអាទិត្យ ១៥កើត ពេញបូណ៌មី ខែមិគសិរ ត្រូវនឹងថ្ងៃទី១៥ ​ខែធ្នូ ព.ស.២៥៦៨ គ.ស.២០២៤`,
        imgUrl: AlmsbowlMeakBocheaMain,
        vdourl: "",
        year: 2024,
        Children: AlmsbowlMeakBocheaPhoto.map((img, index) => ({
            id: index + 1,
            image: img
        }))
    },
    {
        id: 8,
        title: "Kathena Festival",
        titleKm: "កឋិនទាន",
        description:
            `Please accept the Angkathana Maha Samaki Festival at Wat Phnom Thmey
            Sunday, 5th of the month of Asso, year of the Rat, Buddhist Era 2569, corresponding to October 12, 2025`,
        descriptionKm:
            `សូមអនុមោទនា ពិធីបុណ្យអង្គកឋិនទានមហាសាមគ្គី វត្តភ្នំពេញថ្មី
            ថ្ងៃអាទិត្យ ៥រោច ខែអស្សុជ ឆ្នាំម្សាញ់ សប្តស័ក ពុទ្ធសករាជ ២៥៦៩ ត្រូវនឹងថ្ងៃទី១២ ខែតុលា ឆ្នាំ២០២៥`,
        imgUrl: KathenMain,
        vdourl: "",
        year: 2024,
        Children: kathen24Photo.map((img, index) => ({
            id: index + 1,
            image: img
        }))
    },
    {
        id: 9,
        title: "Samak Silver Flower Festival",
        titleKm: "បុណ្យផ្កាប្រាក់សាមគ្គី",
        description:
            `Please accept the Angkathana Maha Samaki Festival at Wat Phnom Thmey
            Sunday, 5th of the month of Asso, year of the Rat, Buddhist Era 2569, corresponding to October 12, 2025`,
        descriptionKm:
            `សូមអនុមោទនា ពិធីបុណ្យអង្គកឋិនទានមហាសាមគ្គី វត្តភ្នំពេញថ្មី
            ថ្ងៃអាទិត្យ ៥រោច ខែអស្សុជ ឆ្នាំម្សាញ់ សប្តស័ក ពុទ្ធសករាជ ២៥៦៩ ត្រូវនឹងថ្ងៃទី១២ ខែតុលា ឆ្នាំ២០២៥`,
        imgUrl: SamakSilverFlowerFestivalMain,
        vdourl: "",
        year: 2025,
        Children: SamakSilverFlowerFestivalPhoto.map((img, index) => ({
            id: index + 1,
            image: img
        }))
    },


];
