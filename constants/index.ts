import { FaSearch, FaStar, FaMapMarkedAlt, FaBell } from 'react-icons/fa';

export const navlinks=[
    { name: "الرئيسية", href: "#hero"},
    { name: "من نحن !", href: "#about"},
    { name: "خدماتنا", href: "#service"},
    { name: "تواصل معنا", href: "#contact"},
]
export const placeTypes = [
    { name: "مستشفيات", value: "hospitals" },
    { name: "عيادات", value: "clinics" },
    { name: "صيدليات", value: "pharmacies" },
    { name: "مدارس", value: "schools" },
    { name: "جامعات", value: "universities" },
    { name: "مطاعم", value: "restaurants" },
    { name: "مقاهي", value: "cafes" },
    { name: "محلات بقالة", value: "groceryStores" },
    { name: "سوبرماركت", value: "supermarkets" },
    { name: "مراكز تسوق", value: "shoppingCenters" },
    { name: "متاجر الملابس", value: "clothingStores" },
    { name: "محلات الأحذية", value: "shoeStores" },
    { name: "محلات الأجهزة الإلكترونية", value: "electronicsStores" },
    { name: "صالات رياضية", value: "gyms" },
    { name: "مراكز اللياقة البدنية", value: "fitnessCenters" },
    { name: "حدائق ومنتزهات", value: "parks" },
    { name: "أماكن سياحية", value: "touristAttractions" },
    { name: "فنادق", value: "hotels" },
    { name: "مكتبات", value: "libraries" },
    { name: "محطات الوقود", value: "gasStations" },
    { name: "محطات القطار", value: "trainStations" },
    { name: "مطارات", value: "airports" },
    { name: "مكاتب البريد", value: "postOffices" },
    { name: "بنوك", value: "banks" },
    { name: "صرافات آلية", value: "atms" },
    { name: "مساجد", value: "mosques" },
    { name: "مراكز الشرطة", value: "policeStations" },
    { name: "إدارات حكومية", value: "governmentOffices" },
    { name: "محطات الحافلات", value: "busStations" }
];

export const services = [
    { 
        name: "البحث المتقدم عن الأماكن", 
        description: "تتيح لك هذه الخدمة البحث عن الأماكن باستخدام فلاتر متقدمة مثل الموقع، النوع، ساعات العمل، والتقييمات.",
        icon: FaSearch 
    },
    { 
        name: "مراجعات وتقييمات المستخدمين", 
        description: "قراءة وكتابة مراجعات وتقييمات للأماكن المختلفة لتوفير توصيات حقيقية من المستخدمين الآخرين.",
        icon: FaStar 
    },
    { 
        name: "توجيهات ومواقع على الخريطة", 
        description: "توفر لك إرشادات تفصيلية للوصول إلى الأماكن وعرض المواقع على خرائط تفاعلية.",
        icon: FaMapMarkedAlt 
    },
    { 
        name: "إشعارات وتنبيهات مخصصة", 
        description: "احصل على إشعارات وتنبيهات مخصصة حول العروض والفعاليات والتغييرات في الأماكن التي تهمك.",
        icon: FaBell 
    }
];

export const steps = [
    {
        title: "البحث",
        description: "ابدأ بالبحث عن المكان الذي ترغب في زيارته باستخدام شريط البحث.",
    },
    {
        title: " اختيار المكان المناسب",
        description: "اختر مكانك المناسب من خلال العديد من الاماكن التي ستظهر لك في نتائج البحث ",
    },
    {
        title: "مراجعة المعلومات",
        description: "اقرأ المراجعات والتقييمات الخاصة بالمكان للحصول على تفاصيل إضافية ومعلومات موثوقة.",
    }
];
