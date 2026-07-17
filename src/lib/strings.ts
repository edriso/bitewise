import type { Bilingual } from './types'

/**
 * All user-interface strings live here as { ar, en } pairs.
 * Arabic is written in simple, clear Modern Standard Arabic so it is easy
 * for all ages to read. English is kept plain and friendly.
 */
export const strings = {
  // Brand
  'brand.name': { ar: 'لُقمة', en: 'Bitewise' },
  'brand.tagline': {
    ar: 'تعلّم الغذاء، وكُل بذكاء',
    en: 'Learn food, eat wise',
  },

  // Navigation
  'nav.home': { ar: 'الرئيسية', en: 'Home' },
  'nav.learn': { ar: 'تعلّم', en: 'Learn' },
  'nav.foods': { ar: 'الأطعمة', en: 'Foods' },
  'nav.tools': { ar: 'أدوات', en: 'Tools' },
  'nav.about': { ar: 'عن الموقع', en: 'About' },

  // Actions / chrome
  'action.toLang': { ar: 'English', en: 'العربية' },
  'action.theme': { ar: 'تبديل السِّمة', en: 'Toggle theme' },
  'action.light': { ar: 'الوضع الفاتح', en: 'Light mode' },
  'action.dark': { ar: 'الوضع الداكن', en: 'Dark mode' },
  'action.menu': { ar: 'القائمة', en: 'Menu' },
  'action.close': { ar: 'إغلاق', en: 'Close' },
  'action.back': { ar: 'رجوع', en: 'Back' },

  // Home
  'home.badge': {
    ar: '🌱 دليلك المبسّط للتغذية',
    en: '🌱 Your simple nutrition guide',
  },
  'home.title1': { ar: 'افهم طعامك،', en: 'Understand your food,' },
  'home.title2': { ar: 'واعتنِ بصحّتك', en: 'take care of your health' },
  'home.subtitle': {
    ar: 'نشرح لك عالم الغذاء بلغة سهلة وأمثلة واضحة: ما هي السعرات الحرارية؟ ما الفرق بين البروتين والنشويات والدهون؟ وكيف تختار طعامك بحكمة لتصل إلى هدفك.',
    en: 'We explain the world of food in simple words with clear examples: what are calories? What is the difference between protein, carbs, and fat? And how to choose your food wisely to reach your goal.',
  },
  'home.ctaPrimary': { ar: 'ابدأ التعلّم', en: 'Start learning' },
  'home.ctaSecondary': { ar: 'استكشف الأطعمة', en: 'Explore foods' },
  'home.statFoods': { ar: 'طعامًا', en: 'foods' },
  'home.statTopics': { ar: 'موضوعًا', en: 'topics' },
  'home.statTools': { ar: 'أدوات', en: 'tools' },
  'home.featuresTitle': { ar: 'ماذا ستجد هنا؟', en: 'What you will find here' },
  'home.featuresIntro': {
    ar: 'كل ما تحتاجه لتفهم غذاءك وتبني عادات صحية، في مكان واحد.',
    en: 'Everything you need to understand your food and build healthy habits, in one place.',
  },
  'home.f1Title': { ar: 'دروس مبسّطة', en: 'Simple lessons' },
  'home.f1Desc': {
    ar: 'نبدأ من الصفر: السعرات، البروتين، النشويات، الدهون، الفيتامينات والمعادن — كلها بأمثلة من حياتك اليومية.',
    en: 'We start from zero: calories, protein, carbs, fat, vitamins and minerals — all with examples from daily life.',
  },
  'home.f2Title': { ar: 'موسوعة الأطعمة', en: 'Food library' },
  'home.f2Desc': {
    ar: 'ابحث عن أي طعام واعرف قيمته الغذائية لكل ١٠٠ غرام: كم سعرة؟ كم بروتين؟ كم نشويات؟',
    en: 'Search any food and see its nutrition per 100g: how many calories? How much protein? How many carbs?',
  },
  'home.f3Title': { ar: 'أدوات حسابية', en: 'Smart calculators' },
  'home.f3Desc': {
    ar: 'احسب مؤشر كتلة جسمك، وسعراتك اليومية، وتوزيع البروتين والنشويات والدهون حسب هدفك.',
    en: 'Calculate your body mass index, your daily calories, and your split of protein, carbs, and fat by goal.',
  },
  'home.f4Title': { ar: 'بالعربية والإنجليزية', en: 'Arabic & English' },
  'home.f4Desc': {
    ar: 'المحتوى كامل بلغتين بلمسة زر، مع دعم الاتجاهين، ليتعلّم الجميع بلغته المفضّلة.',
    en: 'Full content in two languages with one tap, with right-to-left support, so everyone learns in their favorite language.',
  },
  'home.macrosTitle': {
    ar: 'العناصر الغذائية الكبرى',
    en: 'The big nutrients (macros)',
  },
  'home.macrosIntro': {
    ar: 'طعامك يتكوّن أساسًا من ثلاثة عناصر تعطيك الطاقة. اضغط أيّها لتتعلّم المزيد.',
    en: 'Your food is mainly made of three nutrients that give you energy. Tap any of them to learn more.',
  },
  'home.howTitle': { ar: 'كيف تستفيد من الموقع؟', en: 'How to use the site' },
  'home.how1Title': { ar: '١ · تعلّم الأساسيات', en: '1 · Learn the basics' },
  'home.how1Desc': {
    ar: 'ابدأ بقسم «تعلّم» لتفهم معنى السعرة والعناصر الغذائية.',
    en: 'Start with the “Learn” section to understand calories and nutrients.',
  },
  'home.how2Title': { ar: '٢ · تعرّف على طعامك', en: '2 · Know your food' },
  'home.how2Desc': {
    ar: 'استخدم موسوعة الأطعمة لمعرفة ما في صحنك حقًّا.',
    en: 'Use the food library to know what is really on your plate.',
  },
  'home.how3Title': { ar: '٣ · احسب هدفك', en: '3 · Plan your goal' },
  'home.how3Desc': {
    ar: 'استعن بالأدوات لتعرف احتياجك اليومي وتخطّط لوجباتك.',
    en: 'Use the tools to find your daily needs and plan your meals.',
  },
  'home.bannerTitle': {
    ar: 'جاهز لتأكل بذكاء؟',
    en: 'Ready to eat wise?',
  },
  'home.bannerDesc': {
    ar: 'رحلة الألف ميل تبدأ بلقمة واحدة واعية. لنبدأ الآن.',
    en: 'A journey of a thousand miles begins with one mindful bite. Let’s start now.',
  },

  // Learn
  'learn.title': { ar: 'تعلّم التغذية خطوة بخطوة', en: 'Learn nutrition step by step' },
  'learn.intro': {
    ar: 'اخترنا لك أهم المفاهيم وشرحناها بلغة سهلة وأمثلة قريبة منك. اختر أي موضوع لتبدأ.',
    en: 'We picked the most important ideas and explained them simply with close examples. Pick any topic to begin.',
  },
  'learn.groupMacro': {
    ar: 'العناصر الكبرى (الطاقة)',
    en: 'Macronutrients (energy)',
  },
  'learn.groupMicro': {
    ar: 'العناصر الدقيقة (الفيتامينات والمعادن)',
    en: 'Micronutrients (vitamins & minerals)',
  },
  'learn.groupOther': { ar: 'عناصر أساسية أخرى', en: 'Other essentials' },
  'learn.perGram': { ar: 'سعرة/غرام', en: 'kcal/gram' },
  'learn.readMore': { ar: 'اقرأ المزيد', en: 'Read more' },
  'learn.what': { ar: 'ما هو؟', en: 'What is it?' },
  'learn.why': { ar: 'لماذا نحتاجه؟', en: 'Why do we need it?' },
  'learn.howMuch': { ar: 'كم نحتاج منه؟', en: 'How much do we need?' },
  'learn.foundIn': { ar: 'أين نجده؟', en: 'Where do we find it?' },
  'learn.examples': { ar: 'أمثلة من طعامك', en: 'Examples from your food' },
  'learn.tip': { ar: 'نصيحة سريعة', en: 'Quick tip' },
  'learn.backToLearn': { ar: 'كل الدروس', en: 'All lessons' },
  'learn.notFound': { ar: 'لم نجد هذا الدرس.', en: 'We could not find this lesson.' },

  // Foods
  'foods.title': { ar: 'موسوعة الأطعمة', en: 'Food library' },
  'foods.intro': {
    ar: 'ابحث عن أي طعام لتعرف قيمته الغذائية لكل ١٠٠ غرام. الأرقام تقريبية ومصدرها قواعد بيانات موثوقة.',
    en: 'Search any food to see its nutrition per 100g. Values are approximate, from trusted databases.',
  },
  'foods.search': { ar: 'ابحث عن طعام… (مثال: تفاح، أرز، دجاج)', en: 'Search a food… (e.g. apple, rice, chicken)' },
  'foods.all': { ar: 'الكل', en: 'All' },
  'foods.per100g': { ar: 'لكل ١٠٠ غرام', en: 'per 100g' },
  'foods.calories': { ar: 'سعرة حرارية', en: 'calories' },
  'foods.kcal': { ar: 'سعرة', en: 'kcal' },
  'foods.protein': { ar: 'بروتين', en: 'Protein' },
  'foods.carbs': { ar: 'نشويات', en: 'Carbs' },
  'foods.fat': { ar: 'دهون', en: 'Fat' },
  'foods.fiber': { ar: 'ألياف', en: 'Fiber' },
  'foods.sugar': { ar: 'سكريات', en: 'Sugar' },
  'foods.grams': { ar: 'غ', en: 'g' },
  'foods.resultsOne': { ar: 'نتيجة واحدة', en: '1 result' },
  'foods.none': { ar: 'لا توجد نتائج. جرّب كلمة أخرى.', en: 'No results. Try another word.' },
  'foods.sortCalDesc': { ar: 'الأعلى سعرات', en: 'Highest calories' },
  'foods.sortCalAsc': { ar: 'الأقل سعرات', en: 'Lowest calories' },
  'foods.sortProtein': { ar: 'الأعلى بروتينًا', en: 'Highest protein' },
  'foods.sortName': { ar: 'أبجديًّا', en: 'Alphabetical' },
  'foods.sortLabel': { ar: 'ترتيب', en: 'Sort' },

  // Food categories
  'cat.fruits': { ar: 'فواكه', en: 'Fruits' },
  'cat.vegetables': { ar: 'خضروات', en: 'Vegetables' },
  'cat.grains': { ar: 'حبوب ونشويات', en: 'Grains' },
  'cat.protein': { ar: 'لحوم وبروتين', en: 'Protein' },
  'cat.legumes': { ar: 'بقوليات', en: 'Legumes' },
  'cat.dairy': { ar: 'ألبان', en: 'Dairy' },
  'cat.nuts': { ar: 'مكسّرات', en: 'Nuts' },
  'cat.fats': { ar: 'زيوت ودهون', en: 'Oils & fats' },
  'cat.beverages': { ar: 'مشروبات', en: 'Beverages' },
  'cat.sweets': { ar: 'حلويات', en: 'Sweets' },

  // Tools
  'tools.title': { ar: 'أدوات صحّية', en: 'Health tools' },
  'tools.intro': {
    ar: 'أدوات بسيطة تساعدك على فهم جسمك واحتياجاتك. النتائج تقديرية وليست بديلًا عن استشارة مختصّ.',
    en: 'Simple tools to help you understand your body and needs. Results are estimates, not a substitute for a professional.',
  },
  'tools.tabBmi': { ar: 'مؤشر كتلة الجسم', en: 'Body Mass Index' },
  'tools.tabCalories': { ar: 'السعرات اليومية', en: 'Daily calories' },
  'tools.tabMacros': { ar: 'توزيع العناصر', en: 'Macro split' },
  'tools.age': { ar: 'العمر', en: 'Age' },
  'tools.years': { ar: 'سنة', en: 'years' },
  'tools.gender': { ar: 'الجنس', en: 'Sex' },
  'tools.male': { ar: 'ذكر', en: 'Male' },
  'tools.female': { ar: 'أنثى', en: 'Female' },
  'tools.weight': { ar: 'الوزن', en: 'Weight' },
  'tools.kg': { ar: 'كغم', en: 'kg' },
  'tools.height': { ar: 'الطول', en: 'Height' },
  'tools.cm': { ar: 'سم', en: 'cm' },
  'tools.activity': { ar: 'مستوى النشاط', en: 'Activity level' },
  'tools.actSedentary': { ar: 'قليل الحركة (عمل مكتبي)', en: 'Sedentary (little exercise)' },
  'tools.actLight': { ar: 'نشاط خفيف (١–٣ أيام رياضة)', en: 'Light (1–3 days/week)' },
  'tools.actModerate': { ar: 'نشاط متوسّط (٣–٥ أيام)', en: 'Moderate (3–5 days/week)' },
  'tools.actActive': { ar: 'نشيط (٦–٧ أيام)', en: 'Active (6–7 days/week)' },
  'tools.actVery': { ar: 'نشيط جدًّا (عمل بدني + رياضة)', en: 'Very active (hard job + training)' },
  'tools.goal': { ar: 'الهدف', en: 'Goal' },
  'tools.goalLose': { ar: 'إنقاص الوزن', en: 'Lose weight' },
  'tools.goalMaintain': { ar: 'المحافظة', en: 'Maintain' },
  'tools.goalGain': { ar: 'زيادة الوزن', en: 'Gain weight' },
  'tools.calculate': { ar: 'احسب', en: 'Calculate' },
  'tools.yourResult': { ar: 'نتيجتك', en: 'Your result' },
  'tools.bmiDesc': {
    ar: 'مؤشر كتلة الجسم يقارن وزنك بطولك ليعطي فكرة عامة عن وزنك. لا يميّز بين العضل والدهن، لذا هو دليل تقريبي فقط.',
    en: 'BMI compares your weight to your height for a general idea. It cannot tell muscle from fat, so treat it as a rough guide.',
  },
  'tools.bmiUnder': { ar: 'نحافة', en: 'Underweight' },
  'tools.bmiNormal': { ar: 'وزن صحّي', en: 'Healthy weight' },
  'tools.bmiOver': { ar: 'زيادة في الوزن', en: 'Overweight' },
  'tools.bmiObese': { ar: 'سمنة', en: 'Obesity' },
  'tools.bmiHealthyRange': {
    ar: 'النطاق الصحّي عادةً بين ١٨٫٥ و٢٤٫٩',
    en: 'The healthy range is usually 18.5 – 24.9',
  },
  'tools.caloriesDesc': {
    ar: 'نقدّر سعراتك باستخدام معادلة «ميفلين–سانت جور» المعتمدة علميًّا. «الأيض الأساسي» هو ما يحرقه جسمك وأنت ساكن، ثم نضربه في نشاطك.',
    en: 'We estimate your calories with the science-backed Mifflin–St Jeor equation. Your basal metabolism is what your body burns at rest, then we multiply by your activity.',
  },
  'tools.bmr': { ar: 'الأيض الأساسي', en: 'Basal metabolism (BMR)' },
  'tools.tdee': { ar: 'السعرات للمحافظة', en: 'Maintenance calories' },
  'tools.goalCalories': { ar: 'سعرات هدفك', en: 'Goal calories' },
  'tools.perDay': { ar: 'سعرة/يوم', en: 'kcal/day' },
  'tools.macrosDesc': {
    ar: 'بعد معرفة سعراتك، نوزّعها على البروتين والنشويات والدهون. اختر النمط الذي يناسبك.',
    en: 'After knowing your calories, we split them into protein, carbs, and fat. Choose the style that suits you.',
  },
  'tools.macroBalanced': { ar: 'متوازن', en: 'Balanced' },
  'tools.macroLowCarb': { ar: 'قليل النشويات', en: 'Low-carb' },
  'tools.macroHighProtein': { ar: 'عالي البروتين', en: 'High-protein' },
  'tools.gramsPerDay': { ar: 'غرام/يوم', en: 'g/day' },
  'tools.enterCalories': { ar: 'أدخل سعراتك اليومية', en: 'Enter your daily calories' },
  'tools.useCalc': {
    ar: 'أو احسبها من تبويب «السعرات اليومية».',
    en: 'Or calculate it from the “Daily calories” tab.',
  },
  'tools.invalid': {
    ar: 'يرجى إدخال قيم صحيحة في كل الحقول.',
    en: 'Please enter valid values in all fields.',
  },

  // About
  'about.title': { ar: 'عن لُقمة', en: 'About Bitewise' },
  'about.lead': {
    ar: 'لُقمة موقع تعليمي يبسّط علم التغذية للجميع، بالعربية والإنجليزية، ليأكل كل فرد بوعي وحكمة.',
    en: 'Bitewise is an educational site that makes nutrition simple for everyone, in Arabic and English, so we all eat with awareness.',
  },
  'about.missionTitle': { ar: 'رسالتنا', en: 'Our mission' },
  'about.missionBody': {
    ar: 'نؤمن أن الطعام الجيّد يبدأ بالمعرفة. كثير منّا يسمع كلمات مثل «سعرات» و«بروتين» و«نشويات» دون أن يفهم معناها الحقيقي. هدفنا أن نشرح هذه المفاهيم بلغة سهلة وأمثلة واقعية، حتى يستطيع الطفل والكبير فهمها واتخاذ قرارات غذائية أفضل.',
    en: 'We believe good eating starts with knowledge. Many of us hear words like “calories”, “protein”, and “carbs” without truly understanding them. Our goal is to explain these ideas in simple words and real examples, so both children and adults can understand and make better food choices.',
  },
  'about.langTitle': { ar: 'لغة سهلة للجميع', en: 'Easy language for all' },
  'about.langBody': {
    ar: 'نكتب بالعربية الفصحى المبسّطة — واضحة وصحيحة وقريبة من القلب — على غرار أسلوب البرامج التعليمية المحبوبة. كل شرح مصحوب بأمثلة وحالات من الحياة اليومية.',
    en: 'We write in simple Modern Standard Arabic — clear, correct, and warm — like beloved educational shows. Every explanation comes with examples and everyday cases.',
  },
  'about.sourcesTitle': { ar: 'مصادرنا الموثوقة', en: 'Our trusted sources' },
  'about.sourcesBody': {
    ar: 'نعتمد في معلوماتنا وأرقامنا على جهات علمية معترف بها عالميًّا، منها:',
    en: 'Our information and numbers rely on globally recognized scientific bodies, including:',
  },
  'about.disclaimerTitle': { ar: 'تنبيه مهم', en: 'Important note' },
  'about.disclaimerBody': {
    ar: 'هذا الموقع للتثقيف والتعلّم فقط، وليس بديلًا عن استشارة الطبيب أو أخصائي التغذية. الأرقام تقريبية وقد تختلف من مصدر لآخر ومن شخص لآخر. استشر مختصًّا قبل أي تغيير كبير في نظامك الغذائي.',
    en: 'This site is for education only and is not a substitute for a doctor or dietitian. Numbers are approximate and may differ between sources and people. Consult a professional before any big change to your diet.',
  },

  // Footer
  'footer.tagline': {
    ar: 'نتعلّم الغذاء لنأكل بذكاء ونعيش بصحّة.',
    en: 'Learning food to eat wisely and live healthily.',
  },
  'footer.explore': { ar: 'استكشف', en: 'Explore' },
  'footer.about': { ar: 'الموقع', en: 'The site' },
  'footer.disclaimer': {
    ar: 'محتوى تثقيفي فقط — ليس نصيحة طبية.',
    en: 'Educational content only — not medical advice.',
  },
  'footer.rights': {
    ar: 'صُنع بحبّ لتعلّم أفضل.',
    en: 'Made with love for better learning.',
  },

  // Misc
  'common.notFound': { ar: 'الصفحة غير موجودة', en: 'Page not found' },
  'common.goHome': { ar: 'العودة للرئيسية', en: 'Back home' },
} satisfies Record<string, Bilingual>

export type StringKey = keyof typeof strings
