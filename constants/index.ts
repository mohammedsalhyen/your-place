import { FaSearch, FaStar, FaMapMarkedAlt, FaBell, FaBuilding, FaUser, } from 'react-icons/fa';
import { MdOutlineAdminPanelSettings } from "react-icons/md";

export const navlinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "من نحن !", href: "#about" },
    { name: "خدماتنا", href: "#service" },
    { name: "تواصل معنا", href: "#contact" },
]
export const placeTypes = [
    { name: "اختر تصنيف", value:""},
    { name: "مستشفيات", value: "مستشفيات" },
    { name: "عيادات", value: "عيادات" },
    { name: "صيدليات", value: "صيدليات" },
    { name: "مدارس", value: "مدارس" },
    { name: "جامعات", value: "جامعات" },
    { name: "مطاعم", value: "مطاعم" },
    { name: "مقاهي", value: "مقاهي" },
    { name: "محلات بقالة", value: "محلات بقالة" },
    { name: "سوبرماركت", value: "سوبرماركت" },
    { name: "مراكز تسوق", value: "مراكز تسوق" },
    { name: "متاجر الملابس", value: "متاجر الملابس" },
    { name: "محلات الأحذية", value: "محلات الأحذية" },
    { name: "محلات الأجهزة الإلكترونية", value: "محلات الأجهزة الإلكترونية" },
    { name: "صالات رياضية", value: "صالات رياضية" },
    { name: "مراكز اللياقة البدنية", value: "مراكز اللياقة البدنية" },
    { name: "حدائق ومنتزهات", value: "حدائق ومنتزهات" },
    { name: "أماكن سياحية", value: "أماكن سياحية" },
    { name: "فنادق", value: "فنادق" },
    { name: "مكتبات", value: "مكتبات" },
    { name: "محطات الوقود", value: "محطات الوقود" },
    { name: "محطات القطار", value: "محطات القطار" },
    { name: "مطارات", value: "مطارات" },
    { name: "مكاتب البريد", value: "مكاتب البريد" },
    { name: "بنوك", value: "بنوك" },
    { name: "صرافات آلية", value: "صرافات آلية" },
    { name: "مساجد", value: "مساجد" },
    { name: "مراكز الشرطة", value: "مراكز الشرطة" },
    { name: "إدارات حكومية", value: "إدارات حكومية" },
    { name: "محطات الحافلات", value: "محطات الحافلات" }
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

export const adminContolIcons = [
    {
        icon: FaBuilding,
        text: 'اضافة مؤسسة',
        href: "https://your-place.sanity.studio/structure/business"
    },
    {
        icon: FaUser,
        text: 'اضافة عضو',
        href: "https://your-place.sanity.studio/structure/user"
    },
    {
        icon: MdOutlineAdminPanelSettings,
        text: 'اضافة مسئول',
        href: "/"
    },
];