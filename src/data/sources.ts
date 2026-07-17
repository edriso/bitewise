import type { Source } from '../lib/types'

/**
 * Globally recognized, authoritative sources behind the facts and figures
 * used throughout the site.
 */
export const sources: Source[] = [
  {
    name: {
      ar: 'منظمة الصحة العالمية (WHO)',
      en: 'World Health Organization (WHO)',
    },
    url: 'https://www.who.int/health-topics/nutrition',
  },
  {
    name: {
      ar: 'وزارة الزراعة الأمريكية — قاعدة بيانات الأغذية (USDA FoodData Central)',
      en: 'USDA FoodData Central',
    },
    url: 'https://fdc.nal.usda.gov/',
  },
  {
    name: {
      ar: 'الإرشادات الغذائية للأمريكيين (Dietary Guidelines for Americans)',
      en: 'Dietary Guidelines for Americans',
    },
    url: 'https://www.dietaryguidelines.gov/',
  },
  {
    name: {
      ar: 'مكتب المكمّلات الغذائية — المعاهد الوطنية للصحة (NIH)',
      en: 'NIH Office of Dietary Supplements',
    },
    url: 'https://ods.od.nih.gov/',
  },
  {
    name: {
      ar: 'مصدر التغذية — كلية هارفارد للصحة العامة',
      en: 'The Nutrition Source — Harvard T.H. Chan School of Public Health',
    },
    url: 'https://nutritionsource.hsph.harvard.edu/',
  },
  {
    name: {
      ar: 'مايو كلينك (Mayo Clinic)',
      en: 'Mayo Clinic',
    },
    url: 'https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating',
  },
]
