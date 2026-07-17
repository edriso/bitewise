import type { Nutrient } from '../lib/types'

/**
 * Educational content. Facts and figures follow WHO, the Dietary Guidelines
 * for Americans, NIH, USDA and Harvard's Nutrition Source. Arabic is written
 * in simple Modern Standard Arabic so all ages can follow it.
 */
export const nutrients: Nutrient[] = [
  {
    id: 'calories',
    group: 'other',
    emoji: '🔥',
    accent: 'var(--accent)',
    name: { ar: 'السعرات الحرارية', en: 'Calories' },
    short: {
      ar: 'وحدة الطاقة التي يمنحها الطعام لجسمك.',
      en: 'The unit of energy your food gives your body.',
    },
    what: {
      ar: 'السعرة الحرارية هي وحدة لقياس الطاقة. تخيّل أن جسمك سيّارة، والطعام هو الوقود؛ فالسعرات هي مقدار الوقود في كل نوع من الطعام. الرقم المكتوب على العبوات هو في الحقيقة «كيلوسعرة»، لكننا نسمّيه اختصارًا «سعرة».',
      en: 'A calorie is a unit that measures energy. Imagine your body is a car and food is the fuel; calories tell you how much fuel each food holds. The number on packages is really a “kilocalorie” (kcal), but we simply call it a calorie.',
    },
    why: {
      ar: 'يحتاج جسمك للطاقة في كل لحظة: للتنفّس، ونبض القلب، والحركة، وحتى التفكير. إذا حصلت على طاقة أقل من حاجتك تشعر بالتعب، وإذا زادت عن حاجتك يخزّنها الجسم على شكل دهون.',
      en: 'Your body needs energy every moment: to breathe, to beat your heart, to move, even to think. If you get less energy than you need you feel tired; if you get more than you need, the body stores it as fat.',
    },
    howMuch: {
      ar: 'يختلف الاحتياج حسب العمر والوزن والطول والنشاط. كتقدير عام: تحتاج المرأة البالغة نحو ١٦٠٠–٢٤٠٠ سعرة يوميًّا، والرجل نحو ٢٠٠٠–٣٠٠٠ سعرة. استخدم حاسبة السعرات لمعرفة رقمك أنت.',
      en: 'Needs depend on age, weight, height and activity. As a rough guide: an adult woman needs about 1,600–2,400 kcal a day, and a man about 2,000–3,000 kcal. Use the calorie calculator to find your own number.',
    },
    sources: {
      ar: 'كل طعام فيه بروتين أو نشويات أو دهون يحتوي على سعرات. أما الماء والفيتامينات والمعادن فلا تحتوي على سعرات تقريبًا.',
      en: 'Any food with protein, carbs, or fat contains calories. Water, vitamins, and minerals have almost no calories.',
    },
    examples: [
      { ar: 'تفاحة متوسطة ≈ ٩٥ سعرة', en: 'A medium apple ≈ 95 kcal' },
      { ar: 'ملعقة زيت زيتون كبيرة ≈ ١٢٠ سعرة', en: '1 tbsp olive oil ≈ 120 kcal' },
      { ar: 'كوب أرز مطبوخ ≈ ٢٠٠ سعرة', en: '1 cup cooked rice ≈ 200 kcal' },
    ],
    tip: {
      ar: 'ليست كل السعرات متساوية في الفائدة: ١٠٠ سعرة من المكسّرات أنفع لجسمك من ١٠٠ سعرة من الحلوى. انتبه للكمية والنوع معًا.',
      en: 'Not all calories are equal: 100 kcal from nuts helps your body more than 100 kcal from candy. Watch both the amount and the quality.',
    },
  },
  {
    id: 'protein',
    group: 'macro',
    emoji: '🥚',
    accent: 'var(--protein)',
    kcalPerGram: 4,
    name: { ar: 'البروتين', en: 'Protein' },
    short: {
      ar: 'حجر البناء الذي يبني عضلاتك ويصلح جسمك.',
      en: 'The building block that builds muscle and repairs the body.',
    },
    what: {
      ar: 'البروتين هو مادة البناء في جسمك، ويتكوّن من وحدات صغيرة تُسمّى «الأحماض الأمينية». مثله كمثل الطوب الذي نبني به بيتًا: يبني العضلات والجلد والشعر والأظافر، ويصنع الإنزيمات التي تساعد الجسم على العمل.',
      en: 'Protein is your body’s building material, made of small units called amino acids. Like the bricks used to build a house, it builds muscle, skin, hair, and nails, and makes the enzymes that keep the body working.',
    },
    why: {
      ar: 'نحتاج البروتين للنموّ وإصلاح ما يتلف من الجسم، ولتقوية المناعة، وصنع الهرمونات. كما أنه يشعرك بالشبع مدّة أطول، فيساعدك على عدم الإفراط في الأكل.',
      en: 'We need protein to grow, to repair what wears out, to strengthen immunity, and to make hormones. It also keeps you full for longer, helping you avoid overeating.',
    },
    howMuch: {
      ar: 'يحتاج الشخص البالغ العادي نحو ٠٫٨ غرام لكل كيلوغرام من وزنه يوميًّا. فمن يزن ٧٠ كغم يحتاج نحو ٥٦ غرامًا. ويحتاج الرياضيّون كمية أكبر (١٫٢–٢ غرام لكل كيلوغرام).',
      en: 'An average adult needs about 0.8 g per kilogram of body weight each day. So a 70 kg person needs about 56 g. Athletes need more (1.2–2 g per kg).',
    },
    sources: {
      ar: 'مصادر حيوانية: اللحوم، الدجاج، السمك، البيض، الحليب ومنتجاته. مصادر نباتية: العدس، الحمّص، الفول، الفاصولياء، المكسّرات.',
      en: 'Animal sources: meat, chicken, fish, eggs, milk and dairy. Plant sources: lentils, chickpeas, fava beans, beans, and nuts.',
    },
    examples: [
      { ar: 'بيضة واحدة ≈ ٦ غ بروتين', en: '1 egg ≈ 6 g protein' },
      { ar: '١٠٠ غ صدر دجاج ≈ ٣١ غ بروتين', en: '100 g chicken breast ≈ 31 g protein' },
      { ar: 'كوب عدس مطبوخ ≈ ١٨ غ بروتين', en: '1 cup cooked lentils ≈ 18 g protein' },
    ],
    tip: {
      ar: 'وزّع البروتين على وجباتك خلال اليوم بدلًا من تركيزه في وجبة واحدة، وامزج المصادر النباتية (كالعدس مع الأرز) لتحصل على بروتين متكامل.',
      en: 'Spread protein across your meals instead of one big serving, and mix plant sources (like lentils with rice) to get a complete protein.',
    },
  },
  {
    id: 'carbs',
    group: 'macro',
    emoji: '🍞',
    accent: 'var(--carbs)',
    kcalPerGram: 4,
    name: { ar: 'النشويات (الكربوهيدرات)', en: 'Carbohydrates (carbs)' },
    short: {
      ar: 'مصدر الطاقة السريع المفضّل لدماغك وعضلاتك.',
      en: 'The quick energy source your brain and muscles love.',
    },
    what: {
      ar: 'النشويات هي مصدر الطاقة الأول والسريع لجسمك. يحوّلها الجسم إلى «سكر الجلوكوز» ليستخدمه وقودًا. تنقسم إلى نوعين: نشويات معقّدة (بطيئة وصحّية مثل الشوفان والحبوب الكاملة)، وسكريات بسيطة (سريعة مثل سكر الحلوى).',
      en: 'Carbs are your body’s first, fast energy source. The body turns them into “glucose” to use as fuel. They come in two kinds: complex carbs (slow and healthy, like oats and whole grains) and simple sugars (fast, like the sugar in sweets).',
    },
    why: {
      ar: 'الدماغ يعتمد على الجلوكوز كوقود أساسي، والعضلات تحتاجه للحركة والرياضة. بدون نشويات كافية قد تشعر بالتعب وضعف التركيز.',
      en: 'The brain runs mainly on glucose, and muscles need it to move and exercise. Without enough carbs you may feel tired and lose focus.',
    },
    howMuch: {
      ar: 'يُنصح بأن تشكّل النشويات نحو ٤٥–٦٥٪ من سعراتك اليومية. الأفضل اختيار النشويات المعقّدة (الخبز الأسمر، الأرز البنّي، الشوفان) لأنها تعطي طاقة أطول وألياف أكثر.',
      en: 'Carbs should make up about 45–65% of your daily calories. It’s best to choose complex carbs (whole-grain bread, brown rice, oats) because they give longer energy and more fiber.',
    },
    sources: {
      ar: 'الخبز، الأرز، المعكرونة، البطاطس، الشوفان، الفواكه، البقوليات، والسكر.',
      en: 'Bread, rice, pasta, potatoes, oats, fruits, legumes, and sugar.',
    },
    examples: [
      { ar: 'شريحة خبز ≈ ١٥ غ نشويات', en: '1 slice of bread ≈ 15 g carbs' },
      { ar: 'موزة متوسطة ≈ ٢٧ غ نشويات', en: 'A medium banana ≈ 27 g carbs' },
      { ar: 'كوب أرز مطبوخ ≈ ٤٥ غ نشويات', en: '1 cup cooked rice ≈ 45 g carbs' },
    ],
    tip: {
      ar: 'فضّل النشويات المعقّدة على البسيطة: طبق شوفان في الصباح يمنحك طاقة تدوم ساعات، بينما قطعة حلوى تعطيك طاقة سريعة تختفي بسرعة.',
      en: 'Prefer complex carbs over simple ones: a bowl of oats in the morning gives hours of energy, while a piece of candy gives a quick burst that fades fast.',
    },
  },
  {
    id: 'fat',
    group: 'macro',
    emoji: '🥑',
    accent: 'var(--fat)',
    kcalPerGram: 9,
    name: { ar: 'الدهون', en: 'Fat' },
    short: {
      ar: 'مخزون الطاقة، وحارس الأعضاء، وناقل الفيتامينات.',
      en: 'Energy store, organ protector, and vitamin carrier.',
    },
    what: {
      ar: 'الدهون هي أكثر العناصر كثافةً في الطاقة؛ فكل غرام يعطي ٩ سعرات (أكثر من ضعف البروتين والنشويات). ليست الدهون عدوًّا كما يظنّ البعض؛ فهي مهمّة، لكن المهمّ نوعها وكمّيتها.',
      en: 'Fat is the most energy-dense nutrient; each gram gives 9 kcal (more than double protein or carbs). Fat is not the enemy some think it is; it is important — what matters is the type and amount.',
    },
    why: {
      ar: 'تخزّن الدهون الطاقة لوقت الحاجة، وتحمي الأعضاء، وتدخل في بناء جدران الخلايا وصنع الهرمونات، وتساعد الجسم على امتصاص الفيتامينات (أ، د، هـ، ك).',
      en: 'Fat stores energy for later, protects organs, helps build cell walls and hormones, and helps the body absorb vitamins A, D, E, and K.',
    },
    howMuch: {
      ar: 'يُنصح بأن تكون الدهون نحو ٢٠–٣٥٪ من سعراتك. اختر الدهون الصحّية (زيت الزيتون، المكسّرات، السمك، الأفوكادو)، وقلّل الدهون المشبعة، وابتعد عن الدهون المتحوّلة الموجودة في الأطعمة المقليّة والمصنّعة.',
      en: 'Fat should be about 20–35% of your calories. Choose healthy fats (olive oil, nuts, fish, avocado), limit saturated fat, and avoid trans fats found in fried and processed foods.',
    },
    sources: {
      ar: 'الزيوت، الزبدة، المكسّرات، البذور، الأفوكادو، الأسماك الدهنية (كالسلمون)، وزيت الزيتون.',
      en: 'Oils, butter, nuts, seeds, avocado, fatty fish (like salmon), and olive oil.',
    },
    examples: [
      { ar: 'ملعقة زيت زيتون كبيرة ≈ ١٤ غ دهون', en: '1 tbsp olive oil ≈ 14 g fat' },
      { ar: 'حفنة لوز (٢٨ غ) ≈ ١٤ غ دهون', en: 'A handful of almonds (28 g) ≈ 14 g fat' },
      { ar: 'نصف ثمرة أفوكادو ≈ ١٥ غ دهون', en: 'Half an avocado ≈ 15 g fat' },
    ],
    tip: {
      ar: 'استبدل الدهون المقليّة بالدهون الصحّية: رشّة زيت زيتون على السلطة خير من الطعام المقلي، وحفنة مكسّرات خير من رقائق البطاطس.',
      en: 'Swap fried fats for healthy ones: a drizzle of olive oil on salad beats fried food, and a handful of nuts beats potato chips.',
    },
  },
  {
    id: 'fiber',
    group: 'other',
    emoji: '🌾',
    accent: 'var(--fiber)',
    name: { ar: 'الألياف', en: 'Fiber' },
    short: {
      ar: 'نوع من النشويات لا يُهضم، لكنه ينظّف أمعاءك ويشبعك.',
      en: 'A carb the body can’t digest, but it cleans your gut and fills you up.',
    },
    what: {
      ar: 'الألياف نوع خاص من النشويات لا يستطيع الجسم هضمه، فيمرّ عبر الأمعاء كالمكنسة. لها نوعان: ألياف ذائبة (تلين وتنظّم السكر والكوليسترول)، وألياف غير ذائبة (تساعد على حركة الأمعاء).',
      en: 'Fiber is a special carb the body can’t digest, so it passes through the gut like a broom. There are two kinds: soluble fiber (softens and helps control sugar and cholesterol) and insoluble fiber (helps move things through the gut).',
    },
    why: {
      ar: 'تساعد الألياف على الهضم الصحّي، وتمنع الإمساك، وتغذّي البكتيريا النافعة في الأمعاء، وتنظّم السكر في الدم، وتشعرك بالشبع فتساعد على ضبط الوزن.',
      en: 'Fiber supports healthy digestion, prevents constipation, feeds good gut bacteria, steadies blood sugar, and keeps you full — which helps with weight.',
    },
    howMuch: {
      ar: 'يُنصح بنحو ٢٥ غرامًا يوميًّا للنساء و٣٨ غرامًا للرجال. معظم الناس لا يحصلون على ما يكفي منها.',
      en: 'About 25 g a day for women and 38 g for men is recommended. Most people don’t get enough.',
    },
    sources: {
      ar: 'الخضروات، الفواكه (مع القشر)، الحبوب الكاملة، الشوفان، البقوليات، والمكسّرات.',
      en: 'Vegetables, fruits (with the skin), whole grains, oats, legumes, and nuts.',
    },
    examples: [
      { ar: 'كوب عدس مطبوخ ≈ ١٥ غ ألياف', en: '1 cup cooked lentils ≈ 15 g fiber' },
      { ar: 'تفاحة بقشرها ≈ ٤ غ ألياف', en: 'An apple with skin ≈ 4 g fiber' },
      { ar: 'كوب شوفان مطبوخ ≈ ٤ غ ألياف', en: '1 cup cooked oats ≈ 4 g fiber' },
    ],
    tip: {
      ar: 'زد الألياف تدريجيًّا واشرب ماءً كافيًا معها، حتى لا تُصاب بانتفاخ. أبقِ القشرة على الفواكه والخضار كلما أمكن.',
      en: 'Add fiber slowly and drink enough water with it to avoid bloating. Keep the skin on fruits and vegetables when you can.',
    },
  },
  {
    id: 'sugar',
    group: 'other',
    emoji: '🍬',
    accent: 'var(--carbs)',
    name: { ar: 'السكر', en: 'Sugar' },
    short: {
      ar: 'أبسط أنواع النشويات؛ لذيذ لكن الزائد منه ضار.',
      en: 'The simplest carb; tasty, but too much is harmful.',
    },
    what: {
      ar: 'السكر هو أبسط أنواع النشويات وأسرعها هضمًا. هناك سكر طبيعي موجود في الفواكه والحليب، وسكر مضاف يُوضع في الحلويات والمشروبات الغازية. الفرق مهمّ جدًّا!',
      en: 'Sugar is the simplest and fastest-digesting carb. There is natural sugar found in fruit and milk, and added sugar put into sweets and soft drinks. The difference matters a lot!',
    },
    why: {
      ar: 'يعطي السكر طاقة سريعة، لكن السكر المضاف يمنحك «سعرات فارغة»: طاقة بلا فيتامينات أو ألياف. والإكثار منه يرتبط بزيادة الوزن وتسوّس الأسنان وأمراض أخرى.',
      en: 'Sugar gives quick energy, but added sugar gives “empty calories”: energy with no vitamins or fiber. Too much of it is linked to weight gain, tooth decay, and other diseases.',
    },
    howMuch: {
      ar: 'توصي منظمة الصحة العالمية بأن يكون السكر المضاف أقلّ من ١٠٪ من سعراتك، والأفضل أقلّ من ٥٪ (نحو ٢٥ غرامًا أو ٦ ملاعق صغيرة يوميًّا للبالغين).',
      en: 'The WHO recommends keeping added sugar under 10% of your calories, ideally under 5% (about 25 g, or 6 teaspoons, a day for adults).',
    },
    sources: {
      ar: 'مضاف: المشروبات الغازية، العصائر المحلّاة، الحلويات، الكعك. طبيعي: الفواكه والحليب.',
      en: 'Added: soft drinks, sweetened juices, sweets, cakes. Natural: fruit and milk.',
    },
    examples: [
      { ar: 'علبة مشروب غازي ≈ ٣٥ غ سكر (نحو ٩ ملاعق!)', en: '1 can of soda ≈ 35 g sugar (about 9 teaspoons!)' },
      { ar: 'ملعقة عسل كبيرة ≈ ١٧ غ سكر', en: '1 tbsp honey ≈ 17 g sugar' },
      { ar: 'تفاحة ≈ ١٩ غ سكر طبيعي (مع ألياف)', en: 'An apple ≈ 19 g natural sugar (with fiber)' },
    ],
    tip: {
      ar: 'السكر الطبيعي في الفاكهة الكاملة لا بأس به لأنه يأتي مع الألياف والفيتامينات. أكبر خطوة مفيدة: قلّل المشروبات المحلّاة.',
      en: 'Natural sugar in whole fruit is fine because it comes with fiber and vitamins. The biggest helpful step: cut back on sweetened drinks.',
    },
  },
  {
    id: 'water',
    group: 'other',
    emoji: '💧',
    accent: 'var(--fat)',
    name: { ar: 'الماء', en: 'Water' },
    short: {
      ar: 'لا سعرات فيه، لكن لا حياة بدونه.',
      en: 'No calories, yet there is no life without it.',
    },
    what: {
      ar: 'الماء ليس فيه سعرات، لكنه أهمّ عنصر في جسمك؛ فنحو ٦٠٪ من جسمك ماء! كل خليّة فيك تحتاجه لتعمل.',
      en: 'Water has no calories, but it is the most important thing in your body; about 60% of your body is water! Every cell in you needs it to work.',
    },
    why: {
      ar: 'ينظّم الماء حرارة جسمك، وينقل الغذاء إلى الخلايا، ويطرد الفضلات، ويحمي المفاصل. قلّة الماء تسبّب الصداع والتعب وضعف التركيز.',
      en: 'Water regulates your temperature, carries nutrients to cells, removes waste, and cushions your joints. Too little water causes headaches, tiredness, and poor focus.',
    },
    howMuch: {
      ar: 'كتقدير عام تحتاج المرأة نحو ٢–٢٫٧ لتر يوميًّا، والرجل نحو ٢٫٥–٣٫٧ لتر (من الشراب والطعام معًا). دليل بسيط: نحو ٦–٨ أكواب، وأكثر في الحرّ أو أثناء الرياضة.',
      en: 'As a rough guide, a woman needs about 2–2.7 L a day and a man about 2.5–3.7 L (from drinks and food together). A simple guide: about 6–8 cups, and more in heat or during exercise.',
    },
    sources: {
      ar: 'الماء أولًا، ثم الأطعمة الغنيّة بالماء مثل الخيار والبطّيخ والحساء والفواكه.',
      en: 'Water first, then water-rich foods like cucumber, watermelon, soup, and fruit.',
    },
    examples: [
      { ar: 'الخيار ≈ ٩٦٪ ماء', en: 'Cucumber ≈ 96% water' },
      { ar: 'البطّيخ ≈ ٩١٪ ماء', en: 'Watermelon ≈ 91% water' },
      { ar: 'جزء من ماء يومك يأتي من الطعام', en: 'Part of your daily water comes from food' },
    ],
    tip: {
      ar: 'اشرب الماء على مدار اليوم ولا تنتظر العطش. لون البول الفاتح علامة جيّدة، أما الغامق فيعني: اشرب أكثر.',
      en: 'Drink water throughout the day; don’t wait until you’re thirsty. Light-colored urine is a good sign; dark urine means: drink more.',
    },
  },
  {
    id: 'vitamins',
    group: 'micro',
    emoji: '🍊',
    accent: 'var(--primary)',
    name: { ar: 'الفيتامينات', en: 'Vitamins' },
    short: {
      ar: 'كميات صغيرة تؤدّي وظائف كبيرة في جسمك.',
      en: 'Tiny amounts that do big jobs in your body.',
    },
    what: {
      ar: 'الفيتامينات مواد يحتاجها الجسم بكميات صغيرة جدًّا ليعمل بشكل سليم. هناك ١٣ فيتامينًا أساسيًّا، تنقسم إلى نوعين: ذائبة في الماء (مثل ب وج)، وذائبة في الدهون (مثل أ ود وهـ وك).',
      en: 'Vitamins are substances the body needs in very small amounts to work properly. There are 13 essential vitamins, in two groups: water-soluble (like B and C) and fat-soluble (like A, D, E, and K).',
    },
    why: {
      ar: 'لكل فيتامين وظيفة: فيتامين (أ) للنظر، وفيتامين (ج) للمناعة والتئام الجروح، وفيتامين (د) لعظام قويّة، ومجموعة (ب) لاستخلاص الطاقة من الطعام، وفيتامين (ك) لتخثّر الدم.',
      en: 'Each vitamin has a job: vitamin A for eyesight, vitamin C for immunity and healing, vitamin D for strong bones, the B group for turning food into energy, and vitamin K for blood clotting.',
    },
    howMuch: {
      ar: 'نحتاج كميات صغيرة (بالمليغرام أو الميكروغرام). أفضل طريقة للحصول عليها هي التنوّع في الطعام: «كُل بألوان قوس قزح» من الخضار والفواكه.',
      en: 'We need small amounts (milligrams or micrograms). The best way to get them is variety: “eat the rainbow” of vegetables and fruits.',
    },
    sources: {
      ar: 'الفواكه والخضروات، الحبوب الكاملة، الألبان، البيض، الأسماك، وأشعة الشمس (لفيتامين د).',
      en: 'Fruits and vegetables, whole grains, dairy, eggs, fish, and sunlight (for vitamin D).',
    },
    examples: [
      { ar: 'فيتامين ج → البرتقال والفلفل', en: 'Vitamin C → oranges and peppers' },
      { ar: 'فيتامين أ → الجزر', en: 'Vitamin A → carrots' },
      { ar: 'فيتامين د → الشمس والأسماك الدهنية', en: 'Vitamin D → sun and fatty fish' },
    ],
    tip: {
      ar: 'الصحن الملوّن هو أسهل طريق لفيتامينات كثيرة. لا تحتاج المكمّلات إلا إذا نصحك بها الطبيب.',
      en: 'A colorful plate is the easiest path to many vitamins. You don’t need supplements unless a doctor advises them.',
    },
  },
  {
    id: 'minerals',
    group: 'micro',
    emoji: '🧂',
    accent: 'var(--accent)',
    name: { ar: 'المعادن', en: 'Minerals' },
    short: {
      ar: 'عناصر من الأرض تبني عظامك وتنقل الأكسجين.',
      en: 'Elements from the earth that build bones and carry oxygen.',
    },
    what: {
      ar: 'المعادن عناصر أصلها من الأرض والماء، يحتاجها جسمك ليعمل. منها معادن رئيسية نحتاجها بكمية أكبر (كالكالسيوم والبوتاسيوم والصوديوم والمغنيسيوم)، ومعادن نادرة نحتاجها بكمية قليلة جدًّا (كالحديد والزنك واليود).',
      en: 'Minerals are elements that come from the earth and water, which your body needs to function. Some are major minerals needed in larger amounts (like calcium, potassium, sodium, and magnesium), and some are trace minerals needed in tiny amounts (like iron, zinc, and iodine).',
    },
    why: {
      ar: 'الكالسيوم يبني العظام والأسنان، والحديد يحمل الأكسجين في الدم، والبوتاسيوم والصوديوم يساعدان الأعصاب والعضلات على العمل. نقص الحديد مثلًا يسبّب فقر الدم والتعب.',
      en: 'Calcium builds bones and teeth, iron carries oxygen in the blood, and potassium and sodium help nerves and muscles work. Low iron, for example, causes anemia and tiredness.',
    },
    howMuch: {
      ar: 'يختلف حسب المعدن؛ فالكالسيوم نحو ١٠٠٠ مغم يوميًّا للبالغين، والحديد ٨ مغم للرجال و١٨ مغم للنساء. أما الصوديوم (الملح) فالأفضل أن يكون أقلّ من ٢٠٠٠ مغم يوميًّا (نحو ملعقة صغيرة ملح).',
      en: 'It varies by mineral; calcium is about 1,000 mg a day for adults, iron 8 mg for men and 18 mg for women. Sodium (salt) is best kept under 2,000 mg a day (about one teaspoon of salt).',
    },
    sources: {
      ar: 'الكالسيوم في الألبان، والحديد في اللحوم الحمراء والعدس والسبانخ، والبوتاسيوم في الموز والبطاطس، والمغنيسيوم في المكسّرات.',
      en: 'Calcium in dairy, iron in red meat, lentils, and spinach, potassium in bananas and potatoes, and magnesium in nuts.',
    },
    examples: [
      { ar: 'الكالسيوم → الحليب والزبادي والجبن', en: 'Calcium → milk, yogurt, cheese' },
      { ar: 'الحديد → اللحم الأحمر والعدس', en: 'Iron → red meat and lentils' },
      { ar: 'البوتاسيوم → الموز والبطاطس', en: 'Potassium → banana and potato' },
    ],
    tip: {
      ar: 'انتبه للملح! معظم الصوديوم الذي نأكله مخبّأ في الأطعمة المصنّعة والوجبات الجاهزة، لا في ملّاحة الطعام.',
      en: 'Watch the salt! Most of the sodium we eat is hidden in processed and ready-made foods, not in the salt shaker.',
    },
  },
]

export function getNutrient(id: string): Nutrient | undefined {
  return nutrients.find((n) => n.id === id)
}
