interface HeroImages {
  large: string;
  small: string[];
  images?: string[]; // Optional for some services
}

interface HeroSection {
  title: string;
  summary: string;
}

interface ContentOverviewItem {
  title: string;
  description: string | string[];
}

interface Content {
  sectionTitle: string;
  overview: ContentOverviewItem[];
}

interface ServiceDetails {
  heroSection: HeroSection;
  content: Content;
}

interface LocalizedContent {
  title: string;
  description: string;
  details: ServiceDetails;
}

interface Service {
  slug: string[];
  id?: string; // Optional, only some services have ID
  coverImage: string;
  heroImages: HeroImages;
  sectionImage: string;
  galleryImages: string[];
  en: LocalizedContent;
  ar: LocalizedContent;
}

export type ServiceData = Service;

export const serviceData: ServiceData[] = [
  {
    slug: ["palms-maintenance", "palms-maintenance-arabic"],
    coverImage:
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men-1200x800.jpg",
    heroImages: {
      large:
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men-1200x800.jpg",
      small: [
        "https://gulfpalms.com/wp-content/uploads/2023/06/pexels-vincent-gerbouin-1168764-700x466.jpg",
        "https://gulfpalms.com/wp-content/uploads/2023/06/pexels-nextvoyage-1470403-700x449.jpg",
      ],
    },
    sectionImage: "/images/services/palms_section_image.jpg",
    galleryImages: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men-1200x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/08/Medjool-50-100CM.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/08/Barhi-120-200CM-2-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01281-533x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/08/Barhi-120-200CM-4.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/d90d38a23f0f2287c13b16a1decd8cbb.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/08/Medjool-120-200CM-2-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/08/Barhi-120-200CM-3-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/3-mian-img.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/08/Medjool-50-100CM-3-800x800.jpg",
    ],
    en: {
      title: "Palms Maintenance",
      description:
        "Gulf palms is the main grower and supplier of all the major verities of date Palms in Kuwait. We have above 30 years of experience of growing and maintaining date palms and producing dates in all areas of Kuwait. It’s Gulf Palms who have the honour of winning “the Sheikh Khalifa Award” for adopting its best practices in growing and maintaining of date palms and producing of dates in Kuwait.",
      details: {
        heroSection: {
          title: "Palms Maintenance",
          summary:
            "We have above 30 years of experience of growing and maintaining date palms and producing dates in all areas of Kuwait.",
        },
        content: {
          sectionTitle: "Keep Your Palms Happy and Healthy",
          overview: [
            {
              title: "",
              description:
                "Gulf palms is the main grower and supplier of all the major verities of date Palms in Kuwait. We have above 30 years of experience of growing and maintaining date palms and producing dates in all areas of Kuwait. It’s Gulf Palms who have the honour of winning “the Sheikh Khalifa Award” for adopting its best practices in growing and maintaining of date palms and producing of dates in Kuwait.",
            },
            {
              title: "",
              description:
                "Gulf Palms provides the best services in supply, planting, transplanting, growing and production of date Palms. We have the best experts in diseases control, pest management, fertilization and watering requirements of date palms.",
            },
            {
              title: "What our maintenance contracts include:",
              description: [
                "Pre-scheduled weekly visits by trained and skilled gardeners led by a professional supervisor",
                "Pre-scheduled monthly visits of experienced and professional landscape/Irrigation Engineer",
                "Making sure your unique selection of plants are precisely watered.",
                "Fertilizing and feeding as required to encourage healthy growth.",
                "Cleaning and shining of foliage as necessary.",
                "Pruning & trimming to remove any undesirable foliage.",
                "Repotting of plants, if necessary.",
                "Regular inspections for pest and plant disease with appropriate treatment as necessary.",
                "Replacement of any plants that show signs of decline.",
              ],
            },
          ],
        },
      },
    },
    ar: {
      title: "صيانة النخيل",
      description:
        "تعتبر شركة نخيل الخليج الشركة الرئيسية لزراعة و توزيع النخيل بأنواعة المختلفة في الكويت. لدينا خبرة ٣٠ سنة في مجال زراعة و صيانة النخيل و انتاج التمر في جميع مناطق الكويت.  و تشرفت نخيل الخليج بالفوز بجائزة الشيخ خليفة لأفضل منتنج للنخيل و التمر مع الصيانة في الكويت. توفر شركتنا أفضل الخدمات لتوزيع و زراعة و نقل و انماء و انتاج النخيل المثمر. بالاضافة الى ذلك لدينا أفضل المختصين في مجال أمراض النبات و مقاومة الافات و الحشرات و التسميد و الري للنخيل.",
      details: {
        heroSection: {
          title: "صيانة النخيل",
          summary:
            "لدينا أكثر من 30 عامًا من الخبرة في زراعة وصيانة نخيل التمر وإنتاج التمور في جميع مناطق الكويت.",
        },
        content: {
          sectionTitle: "حافظ على نخيلك سعيدًا وصحيًا",
          overview: [
            {
              title: "",
              description:
                "تعتبر شركة نخيل الخليج الشركة الرئيسية لزراعة وتوزيع النخيل بأنواعه المختلفة في الكويت. لدينا خبرة 30 سنة في مجال زراعة وصيانة النخيل وإنتاج التمر في جميع مناطق الكويت.  و تشرفت نخيل الخليج بالفوز بجائزة الشيخ خليفة لأفضل منتج للنخيل والتمر مع الصيانة في الكويت. توفر شركتنا أفضل الخدمات لتوزيع و زراعة و نقل و نمو وانتاج النخيل المثمر. بالإضافة إلى ذلك لدينا أفضل المختصين في مجال أمراض النبات ومقاومة الآفات و الحشرات و التسميد و الري للنخيل.",
            },
            {
              title: "ماذا يشمل عقد الصيانة",
              description: [
                "جدول زيارات أسبوعي لخبراء الحدائق مع اشراف خبير محترف.",
                "جدول زيارات شهرية لمقاولين الحدائق و مهندسين الري.",
                "التأكد من ري نباتاتك المختارة بالكمية الصحيحة.",
                "التسميد والتغذية حسب الحاجة للحصول على نمو صحي.",
                "تنظيف وتلميع أوراق الشجر حسب الحاجة.",
                "التنسيق و التقليم لأوراق الأشجار الغير مرغوب بها.",
                "إعادة زراعة الأحواض عند الحاجة.",
                "فحص دوري الحشرات و الافات وامراض مع إعطاء العلاج المناسب عند الحاجة.",
                "استبدال أي نباتات تعطي مؤشرات لتدهور حالتها الصحية.",
              ],
            },
          ],
        },
      },
    },
  },
  {
    slug: ["garden-maintenance", "garden-maintenance-arabic"],
    coverImage:
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_106616339-1200x800.jpg",
    heroImages: {
      large:
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_106616339-1200x800.jpg",
      small: [
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-Untitled_1.2.1-450x800.jpg",
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_667654081-1199x800.jpg",
      ],
    },
    sectionImage: "/images/services/garden_section_image.jpg",
    galleryImages: [
      "https://clone.gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_667654081-1199x800.jpg",
      "https://clone.gulfpalms.com/wp-content/uploads/2023/10/compressed-Untitled_1.2.1-450x800.jpg",
      "https://clone.gulfpalms.com/wp-content/uploads/2023/10/compressed-Untitled_1.6.1-450x800.jpg",
      "https://clone.gulfpalms.com/wp-content/uploads/2023/10/compressed-Untitled_1.8.1-450x800.jpg",
      "https://clone.gulfpalms.com/wp-content/uploads/2023/10/compressed-Untitled_1.7.1-450x800.jpg",
      "https://clone.gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_106616339-1200x800.jpg",
      "https://clone.gulfpalms.com/wp-content/uploads/2023/10/compressed-Untitled_1.5.1-450x800.jpg"
    ],
    en: {
      title: "Garden Maintenance",
      description:
        "Gulf palms provides a complete range of landscaping maintenance services to maintain the forever charm of your outdoor living spaces. We sign an annual contract for the overall maintenance of the aesthetics of your exterior spaces. Through regular maintenance and cleaning, our technicians strive to catch the problems before they go out of hand.",
      details: {
        heroSection: {
          title: "Garden Maintenance",

          summary:
            "Gulf palms provides a complete range of landscaping maintenance services to maintain the forever charm of your outdoor living spaces.",
        },
        content: {
          sectionTitle: "Our Elite Garden Maintenance",

          overview: [
            {
              title: "",
              description:
                "Gulf palms provides a complete range of landscaping maintenance services to maintain the forever charm of your outdoor living spaces. We sign an annual contract for the overall maintenance of the aesthetics of your exterior spaces. Through regular maintenance and cleaning, our technicians strive to catch the problems before they go out of hand.",
            },
            {
              title: "What our maintenance contracts include:",
              description: [
                "Pre-scheduled weekly visits by trained and skilled gardeners led by a professional supervisor",
                "Pre-scheduled monthly visits of experienced and professional landscape/Irrigation Engineer",
                "Making sure your unique selection of plants are precisely watered.",
                "Fertilizing and feeding as required to encourage healthy growth.",
                "Cleaning and shining of foliage as necessary.",
                "Pruning & trimming to remove any undesirable foliage.",
                "Repotting of plants, if necessary.",
                "Regular inspections for pest and plant disease with appropriate treatment as necessary.",
                "Replacement of any plants that show signs of decline.",
              ],
            },
          ],
        },
      },
    },
    ar: {
      title: "صيانة الحدائق",

      description:
        "توفر شركة نخيل الخليج نطاق متكامل لخدمات صيانة الحدائق لابقاء الرونق المميز لمساحاتك الخارجية بعقد سنوي يعمل فيه الفنيين على الصيانة الدورية و ابقاء مساحاتك نظيفة بالاضافة الى ضبط اي مشاكل قبل أن تكبر.",
      details: {
        heroSection: {
          title: "صيانة الحدائق",

          summary:
            "تقدم نخيل الخليج مجموعة كاملة من خدمات صيانة المناظر الطبيعية للحفاظ على السحر الدائم لمساحات المعيشة الخارجية الخاصة بك.",
        },
        content: {
          sectionTitle: "النخبة لدينا لصيانة الحدائق",
          overview: [
            {
              title: "",
              description:
                "تقدم نخيل الخليج مجموعة كاملة من خدمات صيانة المناظر الطبيعية للحفاظ على السحر الدائم لمساحات المعيشة الخارجية الخاصة بك. نوقع عقدًا سنويًا للصيانة الشاملة لجماليات المساحات الخارجية الخاصة بك. من خلال الصيانة والتنظيف المنتظمين، يسعى فنيونا جاهدين لمعالجة المشكلات قبل أن تخرج عن السيطرة.",
            },
            {
              title: "ماذا يشمل عقد الصيانة",
              description: [
                "تقليم وتشذيب وتشكيل النباتات والأشجار",
                "جز وتحديد حواف المروج",
                "إزالة الأعشاب الضارة وتغطية أحواض الحديقة",
                "التسميد ومكافحة الآفات",
                "صيانة نظام الري",
                "الزراعة الموسمية وإعادة الزراعة",
                "تنظيف مناطق الحديقة",
                "الفحوصات والتقارير المنتظمة",
                "إزالة والتخلص من النفايات",
                "خطط صيانة مخصصة بناءً على احتياجاتك",
              ],
            },
          ],
        },
      },
    },
  },
  {
    slug: ["farm-development", "farm-development-arabic"],
    coverImage:
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_567716494-1199x800.jpg",
    heroImages: {
      large:
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_567716494-1199x800.jpg",
      small: [
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_1854326206-1173x800.jpg",
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_626590571-1200x800.jpg",
      ],
    },
    sectionImage: "/images/services/farm_section_image.jpg",
    galleryImages: [
      "https://clone.gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_1854326206-1173x800.jpg",
      "https://clone.gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_626590571-1200x800.jpg",
      "https://clone.gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_567716494-1199x800.jpg",
      "https://clone.gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_590308763-1067x800.jpg",
      "https://clone.gulfpalms.com/wp-content/uploads/2023/10/IMG_EE4609C5A18F-1-643x800.jpeg",
      "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC08580-533x800.jpg",
    ],
    en: {
      title: "Farm Development",
      description:
        "Our services provide numerous environmental social, emotional and physical benefits. We design, build and manage a diverse portfolio of landscapes, golf courses, resorts and gated communities. We grow and supply assets with a core service centered around water green and sustainability",
      details: {
        heroSection: {
          title: "Farm Development",

          summary:
            "We grow and supply assets with a core service centered around water green and sustainability",
        },
        content: {
          sectionTitle:
            "Learn how we help lower risk for your project on-the-ground",
          overview: [
            {
              title: "",
              description:
                "Our services provide numerous environmental social, emotional and physical benefits. We design, build and manage a diverse portfolio of landscapes, golf courses, resorts and gated communities. We grow and supply assets with a core service centered around water green and sustainability",
            },
            {
              title: "Our Farm Development Services Include",
              description:
                "Gulf Palm owns and manages the largest nurseries setup, we stock a wide selection of plants ranging from the exotic to the more familiar tried and tested ornamental species with a selection of native local plants We assist many of the landscape consultants and contractors to help select plants suitable for the project.",
            },
          ],
        },
      },
    },
    ar: {
      title: "تطوير المزارع",
      description:
        "نقوم بتصميم وبناء وإدارة مجموعة متنوعة من المناظر الطبيعية وملاعب الجولف والمنتجعات والمجتمعات المسورة. نحن ننمو ونزود الأصول بخدمة أساسية تتمحور حول المياه الخضراء والاستدامة",
      details: {
        heroSection: {
          title: "تطوير المزارع",
          summary:
            "نحن ننمو ونزود الأصول بخدمة أساسية تتمحور حول المياه الخضراء والاستدامة",
        },
        content: {
          sectionTitle:
            "تعرف على كيف نساعد في تقليل المخاطر التي يتعرض لها مشروعك على أرض الواقع",

          overview: [
            {
              title: "",
              description:
                "توفر خدماتنا العديد من الفوائد الاجتماعية والعاطفية والجسدية البيئية. نقوم بتصميم وبناء وإدارة مجموعة متنوعة من المناظر الطبيعية وملاعب الجولف والمنتجعات والمجتمعات المسورة. نحن ننمو ونزود الأصول بخدمة أساسية تتمحور حول المياه الخضراء والاستدامة",
            },
            {
              title: "",
              description:
                "تمتلك شركة جلف بالم وتدير أكبر مشاتل، حيث نقوم بتخزين مجموعة واسعة من النباتات التي تتراوح من الأنواع الغريبة إلى أنواع الزينة الأكثر شهرة والمجربة والمختبرة مع مجموعة مختارة من النباتات المحلية المحلية. نحن نساعد العديد من مستشاري ومقاولي المناظر الطبيعية للمساعدة في اختيار النباتات مناسبة للمشروع.",
            },
          ],
        },
      },
    },
  },
  {
    slug: ["designing-landscaping", "designing-landscaping-arabic"],
    coverImage:
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-008-1-1289x800.jpg",
    heroImages: {
      large:
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-008-1-1289x800.jpg",
      small: [
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-001-1289x800.jpg",
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-mo-005-1067x800.jpg",
      ],
    },
    sectionImage:
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-mo-005-1067x800.jpg",
    galleryImages: [
      "https://gulfpalms.com/wp-content/uploads/2023/06/image-001-1063x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/06/image-024.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-mo-005-1067x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/06/image-002-1-1068x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/06/image-025-986x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/06/image-014.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-mo-004-1286x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-002-1289x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/06/image-023.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-005-1289x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/06/image-016.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-008-1-1289x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-001-1289x800.jpg",
    ],
    en: {
      title: "Designing & Landscaping",
      description:
        "Fall in love with the newfound functionality of your outdoors seamlessly with our bespoke hardscape additions in Kuwait. While working closely with you, our hardscape experts ensure to meet all your design expectations for an exquisite landscape design. We believe in creating durable structures that require minimal garden maintenance in our hardscape process.",
      details: {
        heroSection: {
          title: "Designing & Landscaping",
          summary:
            "We believe in creating durable structures that require minimal garden maintenance in our hardscape process.",
        },
        content: {
          sectionTitle: "Delivering Landscape Development Excellence",

          overview: [
            {
              title: "Hardscape",
              description:
                "Fall in love with the newfound functionality of your outdoors seamlessly with our bespoke hardscape additions in Kuwait. While working closely with you, our hardscape experts ensure to meet all your design expectations for an exquisite landscape design. We believe in creating durable structures that require minimal garden maintenance in our hardscape process. Our hardscape services include driveway paving, water features, lighting, fencing, pergolas, benches and garden furniture.",
            },
            {
              title: "Softscape",
              description:
                "Indulge into the vibes of air perfectly balanced designs by adding a series of assorted desert plants in the outdoors of your property. At Gulf palms, our professional landscape designers and engineers have avid knowledge of various types of deserts adopted trees, shrubs, groundcovers, flowers and grasses for adding a touch of elegance and a feel of freshness to your landscape layout. The trees frame a view or provide shade, shrubs and hedges ensure privacy, flowering plants follow a colour scheme, and all together they create a space that everyone loves to use and that provides pleasure throughout the year.",
            },
          ],
        },
      },
    },
    ar: {
      title: "التصميم والمناظر الطبيعية",
      description:
        "حقق حلمك الى واقع مع حلولنا التصميمية المفصلة لأجلك. سواء أن تتمنى مسبح من وحي الطبيعة أو أن تطور مساحاتك مائية أو تخلق مساحات نباتية رائعة, سوف نعطيك تصاميماً تضفي الحياة و الرونق لمساحاتك الخارجية. جميع تصاميمنا مستدامة بتكلفة فعالة و عملية بحيث تحافظ على العناصر الطبيعية و الطاقة و الماء على حد سواء و تعطيك قيمة اقتصادية و بيئية و اجتماعية.",
      details: {
        heroSection: {
          title: "تصميم المناظر الطبيعية",
          summary:
            "نحن نؤمن بأهمية إنشاء هياكل متينة تتطلب الحد الأدنى من صيانة الحدائق في عملية هاردسكيب لدينا.",
        },
        content: {
          sectionTitle: "تقديم التميز في تطوير المناظر الطبيعية",
          overview: [
            {
              title: "تصميم الحدائق",
              description:
                "ستقع بحب مساحاتك الخارجية مع خدماتنا الحصرية لاضافة المناظر الطبيعية لها مع مراعاة الوظائف العملية. سيعمل معك خبرائنا المتخصصين للتأكد بأن كل توقعاتك للمناظر الخلابة لحديقتك سوف تصبح واقعا جميلا بتصاميم قوية طويلة الأمد و تتطلب أقل قدر من الصيانة لتوفير الراحة لك. تشمل هذه الخدمة رصف ممر السيارات و التصاميم المائية مثل البرك و النوافير و الاضاءة بأنواعها و السياج و مظلات المجالس الخارجية و الأثاث.",
            },
            {
              title: "التصميم النباتي",
              description:
                "قم باضافة أجمل الأجواء لحديقتك مع مجموعة مختارة من النباتات الصحراوية. سيحرص المصممين و المهندسين لدى نخيل الخليج مع خبرتهم الفائقة بالنباتات الصحراوية و قوية التحمل لهذه الظروف باضافة غطاء نباتي يتكون من الأشجار و الشجيرات الصغيرة و العشب و الأزهار لتتمتع حديقتك برونق خلاب و احساس بالانتعاش. تشمل التصاميم وضع النباتات بشكل استراتيجي حيث أن الأشجار توفر الظل في الأماكن المناسبة و الشجيرات توفر الخصوصية و الأزهار و الورود متناسقة من حيث اللون و الشكل. و كنتيجة نهائية تجتمع كل هذه العوامل لتعطيك مساحة محبوبة من قبل جميع من تحب و توفر لك المتعة و الراحة طوال السنة.",
            },
          ],
        },
      },
    },
  },
  {
    slug: ["project-execution", "project-execution-arabic"],
    coverImage:
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_590308763-1067x800.jpg",
    heroImages: {
      large:
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_590308763-1067x800.jpg",
      small: [
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_567716494-1199x800.jpg",
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_626590571-1200x800.jpg",
      ],
    },
    sectionImage:
      "https://gulfpalms.com/wp-content/uploads/2023/10/IMG_EE4609C5A18F-1-643x800.jpeg",
    galleryImages: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_590308763-1067x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_567716494-1199x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_626590571-1200x800.jpg",
    ],
    en: {
      title: "Project Execution",
      description:
        "Transform your dream designs for a cosy outdoors into reality with our customised design solutions. Whether you wish to install nature–inspired swimming pools, enchanting water features, picturesque plantings, or whatnot, our bespoke designs will sprinkle life in each of your outdoor elements. All our designs are sustainable, cost effective and resource efficient.",
      details: {
        heroSection: {
          title: "Project Execution",
          summary:
            "Transform your dream designs for a cosy outdoors into reality with our customised design solutions.",
        },
        content: {
          sectionTitle: "Creating A Project Plan For Your Garden",

          overview: [
            {
              title: "",
              description:
                "Transform your dream designs for a cosy outdoors into reality with our customised design solutions. Whether you wish to install nature–inspired swimming pools, enchanting water features, picturesque plantings, or whatnot, our bespoke designs will sprinkle life in each of your outdoor elements. All our designs are sustainable, cost effective and resource efficient. They preserve nature, water, energy, environment and reduce the cost of maintenance significantly. They create value through significant economic, social and environmental benefits.",
            },
          ],
        },
      },
    },
    ar: {
      title: "تنفيذ المشاريع",
      description:
        "قم بتحويل تصماميم أحلامك الخاصة بالأماكن الخارجية المريحة إلى حقيقة من خلال حلول التصميم المخصصة لدينا. سواء كنت ترغب في تركيب حمامات سباحة مستوحاة من الطبيعة، أو ميزات مائية ساحرة، أو مزارع خلابة، أو غير ذلك، فإن تصميماتنا المخصصة سوف تبث الحياة في كل عنصر من عناصرك الخارجية. جميع تصميماتنا مستدامة وفعالة من حيث التكلفة وفعالة في استخدام الموارد.",
      details: {
        heroSection: {
          title: "تنفيذ المشاريع",
          summary:
            "قم بتحويل تصميمات أحلامك الخاصة بالأماكن الخارجية المريحة إلى حقيقة من خلال حلول التصميم المخصصة لدينا.",
        },
        content: {
          sectionTitle: "إنشاء خطة مشروع لحديقتك",
          overview: [
            {
              title: "",
              description:
                "قم بتحويل تصميمات أحلامك الخاصة بالأماكن الخارجية المريحة إلى حقيقة من خلال حلول التصميم المخصصة لدينا. سواء كنت ترغب في تركيب حمامات سباحة مستوحاة من الطبيعة، أو ميزات مائية ساحرة، أو مزارع خلابة، أو غير ذلك، فإن تصميماتنا المخصصة سوف تبث الحياة في كل عنصر من عناصرك الخارجية. جميع تصميماتنا مستدامة وفعالة من حيث التكلفة وفعالة في استخدام الموارد. إنها تحافظ على الطبيعة والمياه والطاقة والبيئة وتقلل من تكلفة الصيانة بشكل كبير. فهي تخلق قيمة من خلال فوائد اقتصادية واجتماعية وبيئية كبيرة.",
            },
          ],
        },
      },
    },
  },
  {
    slug: [
      "irrigation-system-installation",
      "irrigation-system-installation-arabic",
    ],
    coverImage:
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_2177077673-1200x800.jpg",
    heroImages: {
      large:
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_2177077673-1200x800.jpg",
      small: [
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_130857710-2-1200x800.jpg",
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_1862574064-1200x800.jpg",
      ],
    },
    sectionImage:
      "https://gulfpalms.com/wp-content/uploads/2023/10/IMG_EE4609C5A18F-1-643x800.jpeg",
    galleryImages: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-Untitled_1.6.1-450x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-Untitled_1.8.1-450x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-Untitled_1.7.1-450x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_130857710-2-1200x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_2177077673-1200x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_1862574064-1200x800.jpg",
    ],
    en: {
      title: "Irrigation System Installation",
      description:
        "We never stay out of the league, especially when it’s about following the latest technologies for incorporating state-of-the-art irrigation systems that can utilize water efficiently and effectively and that ensure the right amount of water at the right time. Being a pioneer landscaping company across the Kuwait, we use superior quality materials and technologies in our automated irrigation solutions.",
      details: {
        heroSection: {
          title: "Irrigation System Installation",
          summary:
            "Being a pioneer landscaping company across the Kuwait, we use superior quality materials and technologies in our automated irrigation solutions.",
        },
        content: {
          sectionTitle: "IRRIGATION INSTALLATION & SERVICES",

          overview: [
            {
              title: "",
              description:
                "We never stay out of the league, especially when it’s about following the latest technologies for incorporating state-of-the-art irrigation systems that can utilize water efficiently and effectively and that ensure the right amount of water at the right time.",
            },
            {
              title: "",
              description:
                "Being a pioneer landscaping company across the Kuwait, we use superior quality materials and technologies in our automated irrigation solutions. Our ultimate focus is to maintain the freshness of your garden, and to preserve maximum amount of water, with well-equipped irrigation facilities",
            },
          ],
        },
      },
    },
    ar: {
      title: "أنظمة الري",
      description:
        "نحن لا نتأخر في تتبع تكنولوجيا الري الحديثة لنوفر لك خيارات رائعة لأنظمة الري. تعمل انظمتنا بكفاءة عالية لتوفير الماء بكميات مناسبة في الوقت المناسب. كوننا في صدارة تنسيق الحدائق في الكويت, لا نستعمل الا أحدث المواد و التكنولوجيا في حلول الري الالية. محور تركيزنا هو الحفاظ على نضارة حديقتك مع توفير أكبر قدر من الماء بواسطة معداتنا المعتمدة.",
      details: {
        heroSection: {
          title: "أنظمة الري",
          summary:
            "كوننا شركة رائدة في تنسيق الحدائق في جميع أنحاء الكويت، فإننا نستخدم مواد وتقنيات عالية الجودة في حلول الري الآلية الخاصة بنا.",
        },
        content: {
          sectionTitle: "تركيب وخدمات الري",
          overview: [
            {
              title: "",
              description:
                "نحن لا نتأخر في تتبع تكنولوجيا الري الحديثة لنوفر لك خيارات رائعة لأنظمة الري. تعمل انظمتنا بكفاءة عالية لتوفير الماء بكميات مناسبة في الوقت المناسب. كوننا في صدارة تنسيق الحدائق في الكويت، لا نستعمل إلا أحدث المواد والتكنولوجيا في حلول الري الآلية. محور تركيزنا هو الحفاظ على نضارة حديقتك مع توفير أكبر قدر من الماء بواسطة معداتنا المعتمدة.",
            },
          ],
        },
      },
    },
  },
  {
    slug: ["indoor-plants-maintenance", "indoor-plants-maintenance-arabic"],
    coverImage: "/images/services/compressed-shutterstock_2243201639.jpg",
    heroImages: {
      large:
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_2177077673-1200x800.jpg",
      small: [
        "https://gulfpalms.com/wp-content/uploads/2023/10/q600by800-thumb.jpg",
        "https://gulfpalms.com/wp-content/uploads/2023/09/600by600-thumb1.jpg",
      ],
    },
    sectionImage: "/images/services/indoor_section_image.jpg",
    galleryImages: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/e600by800-thumb.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/09/600by6003-thumb.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/w600by800-thumb.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/09/600by800-thumb12.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/q600by800-thumb.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/09/600by800-thumb45.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/09/600by600-thumb2.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/09/600by600-thumb1.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/jjf600by800-thumb.jpg",
    ],
    en: {
      title: "Indoor Plants Maintenance",
      description:
        "Our dedication to our clients is best illustrated in the skill-level, professionalism and zeal of our Plant Care Teams. With dedicated teams that specialize in interior and exterior plant maintenance for commercial offices, hotels and hospitality, retail, healthcare, education, government, private palaces and residential, we ensure that your space is cared for by people that know how. Each of our Plant Care Teams is supported by a supervisor, to ensure an open line of communication for all clients and make sure your expectations are exceeded.",
      details: {
        heroSection: {
          title: "Indoor Plants Maintenance",
          summary:
            "With dedicated teams that specialize in interior and exterior plant maintenance for commercial offices, hotels and hospitality, retail, healthcare, education, government, private palaces and residential,",
        },
        content: {
          sectionTitle: "ALL THE BENEFITS. NONE OF THE HASSLE",
          overview: [
            {
              title: "",
              description:
                "It takes expert finesse and experience to keep plants looking their absolute best. Caring for indoor plants and trees can be quite demanding as a significant number of factors have to be considered to keep plants looking vibrant and healthy. Some plants love lots of light and water while other types of plants require indirect light and shade with infrequent watering. The soil type and content need also differ from one plant to the other.",
            },
            {
              title: "",
              description:
                "Our dedication to our clients is best illustrated in the skill-level, professionalism and zeal of our Plant Care Teams. With dedicated teams that specialize in interior and exterior plant maintenance for commercial offices, hotels and hospitality, retail, healthcare, education, government, private palaces and residential, we ensure that your space is cared for by people that know how. Each of our Plant Care Teams is supported by a supervisor, to ensure an open line of communication for all clients and make sure your expectations are exceeded.",
            },
            {
              title: "What our maintenance contracts include",
              description: [
                "Pre-scheduled weekly visits by trained and skilled gardeners led by a professional supervisor",
                "Pre-scheduled monthly visits of experienced and professional landscape/Irrigation Engineer",
                "Making sure your unique selection of plants are precisely watered.",
                "Fertilizing and feeding as required to encourage healthy growth.",
                "Cleaning and shining of foliage as necessary.",
                "Pruning & trimming to remove any undesirable foliage.",
                "Repotting of plants, if necessary.",
                "Regular inspections for pest and plant disease with appropriate treatment as necessary.",
                "Replacement of any plants that show signs of decline.",
              ],
            },
          ],
        },
      },
    },
    ar: {
      title: "صيانة النباتات الداخلية",
      description:
        " يمكن للعناية بالنباتات و الأشجار الداخلية أن تكون مجهدة و ذلك لوجود العديد من العوامل التي تؤثر على جودة و صحة و رونق النبات. بعض النباتات تحتاج أشعة شمس عالية و كميات عالية من الماء و بعضها يحتاج الى اضاءة خفيفة مظللة و ماء بتردد أقل. بالاضافة الى ذلك تختلف مكونات و عوامل التربة من نبات الى اخر.و لذلك نوفر لك التزامنا بالحفاظ على نباتاتك من خلال خبرائنا المحترفين لأنك تستحق الأفضل. فرقنا المختصة بالنباتات الداخلية و الخارجية بخدمتك سواء أن كان لديك مكتب أو فندق أو محل تجاري أو عيادة طبية أو مكان عمل خاص أو حكومي أو جهة تعليمية أو  سكن خاص و يضمن لك الحفاظ على رونق مكانك. جميع فرقنا يعملون تحت مشرف فريق لضمان السهولة في التواصل و التعامل لكي تحصل للتأكد من حصولك على جميع توقعاتك.",
      details: {
        heroSection: {
          title: "صيانة النباتات الداخلية",
          summary:
            "مع فرق متخصصة متخصصة في صيانة المصانع الداخلية والخارجية للمكاتب التجارية والفنادق والضيافة وتجارة التجزئة والرعاية الصحية والتعليم والحكومة والقصور الخاصة والسكنية،",
        },
        content: {
          sectionTitle: "جميع الفوائد. لا شيء من المتاعب",
          overview: [
            {
              title: "",
              description:
                "إبقاء النباتات بأجمل و أروع مظهر يحتاج اختصاص وخبرة عالية. يمكن للعناية بالنباتات و الأشجار الداخلية أن تكون مجهدة و ذلك لوجود العديد من العوامل التي تؤثر على جودة و صحة و رونق النبات. بعض النباتات تحتاج أشعة شمس عالية وكميات عالية من الماء و بعضها يحتاج الى اضاءة خفيفة مظللة و ماء بتردد أقل. بالإضافة إلى ذلك تختلف مكونات وعوامل التربة من نبات الى اخر. ",
            },
            {
              title: "",
              description:
                "و لذلك نوفر لك التزامنا بالحفاظ على نباتاتك من خلال خبرائنا المحترفين لأنك تستحق الأفضل. فرقنا المختصة بالنباتات الداخلية و الخارجية بخدمتك سواء أن كان لديك مكتب أو فندق أو محل تجاري أو عيادة طبية أو مكان عمل خاص أو حكومي أو جهة تعليمية أو  سكن خاص و يضمن لك الحفاظ على رونق مكانك. جميع فرقنا يعملون تحت مشرف فريق لضمان السهولة في التواصل والتعامل لكي تحصل للتأكد من حصولك على جميع توقعاتك.",
            },
            {
              title: "ماذا يشمل عقد الصيانة",
              description: [
                "جدول زيارات أسبوعي لخبراء الحدائق مع اشراف خبير محترف.",
                "جدول زيارات شهرية لمقاولين الحدائق و مهندسين الري.",
                "التأكد من ري نباتاتك المختارة بالكمية الصحيحة.",
                "التسميد والتغذية حسب الحاجة للحصول على نمو صحي.",
                "تنظيف وتلميع أوراق الشجر حسب الحاجة.",
                "التنسيق و التقليم لأوراق الأشجار الغير مرغوب بها.",
                "إعادة زراعة الأحواض عند الحاجة.",
                "فحص دوري الحشرات و الافات وامراض مع إعطاء العلاج المناسب عند الحاجة.",
                "استبدال أي نباتات تعطي مؤشرات لتدهور حالتها الصحية.",
              ],
            },
          ],
        },
      },
    },
  },
  {
    slug: ["consultation", "consultation-arabic"],
    coverImage:
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_1983129773-1200x800.jpg",
    heroImages: {
      large:
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_1983129773-1200x800.jpg",
      small: [
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-Untitled_1.8.1-450x800.jpg",
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_667654081-1199x800.jpg",
      ],
    },
    sectionImage:
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-Untitled_1.5.1-450x800.jpg",
    galleryImages: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_1983129773-1200x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_667654081-1199x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men-1200x800.jpg",
    ],
    en: {
      title: "Consultation",
      description:
        "Our landscaping consulting service is excellent for the do-it-yourself homeowner that needs a little step in the right direction. The outcome of your consultation with Gulf palms Landscaping will be wonderful, rewarding, and affordable. We offer endless ideas of possibilities of redesigning, renovating and upgrading existing landscaped areas, solutions to Irrigation errors, plant selection, diseases, nutrient deficiencies, pruning, trimming and shaping of plants",
      details: {
        heroSection: {
          title: "Consultation",
          summary:
            "Our landscaping consulting service is excellent for the do-it- yourself homeowner that needs a little step in the right direction.",
        },
        content: {
          sectionTitle: "PLANT CARE CONSULTATION",
          overview: [
            {
              title: "",
              description:
                "Our landscaping consulting service is excellent for the do-it- yourself homeowner that needs a little step in the right direction. The outcome of your consultation with Gulf palms Landscaping will be wonderful, rewarding, and affordable.",
            },
            {
              title: "",
              description:
                "We offer endless ideas of possibilities of redesigning, renovating and upgrading existing landscaped areas, solutions to Irrigation errors, plant selection, diseases, nutrient deficiencies, pruning, trimming and shaping of plants. We trained people, prepare program for fertilisation, pest management and watering to make the garden beautiful, attractive and live throughout the year.",
            },
          ],
        },
      },
    },
    ar: {
      title: "الخدمات الاستشارية",
      description:
        "نوفر لك خدمات استشارية مميزة اذا كنت ترغب بالعمل على مساحاتك الخارجية بنفسك و تحتاج استشارة لعمل الخطوات الصحيحة للحصول على نتيجة جميلة بتكلفة معقولة. سنعطيك العديد من الأفكار و الخيارات من ناحية اعادة التصميم و التجديد و تطوير المساحات المتواجدة و حلول الري و اختيار النباتات المناسبة و مقاومة أمراض النبات و تغذية النبات و التسميد و مقاومة الحشرات و الافات و التقليم و الحرث و أكثر. لدينا موظفين مدربين و برامج معتمدة للتسميد و مقاومة الافات و الري لابقاء حديقتك جميلة و جذابة طوال السنة.",
      details: {
        heroSection: {
          title: "الخدمات الاستشارية",
          summary:
            "تعتبر خدمتنا الاستشارية في مجال تنسيق الحدائق ممتازة لصاحب المنزل الذي يحتاج إلى خطوة صغيرة في الاتجاه الصحيح.",
        },
        content: {
          sectionTitle: "استشارات رعاية النباتات",
          overview: [
            {
              title: "",
              description:
                "نوفر لك خدمات استشارية مميزة إذا كنت ترغب بالعمل على مساحاتك الخارجية بنفسك و تحتاج استشارة لعمل الخطوات الصحيحة للحصول على نتيجة جميلة بتكلفة معقولة. سنعطيك العديد من الأفكار و الخيارات من ناحية اعادة التصميم و التجديد و تطوير المساحات المتواجدة و حلول الري و اختيار النباتات المناسبة و مقاومة أمراض النبات و تغذية النبات و التسميد و مقاومة الحشرات و الآفات و التقليم و الحرث و أكثر. لدينا موظفين مدربين و برامج معتمدة للتسميد ومقاومة الآفات و الري لإبقاء حديقتك جميلة و جذابة طوال السنة.",
            },
          ],
        },
      },
    },
  },
];
