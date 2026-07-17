export type Lang = 'ar' | 'en'

export interface Bilingual {
  ar: string
  en: string
}

export type FoodCategory =
  | 'fruits'
  | 'vegetables'
  | 'grains'
  | 'protein'
  | 'legumes'
  | 'dairy'
  | 'nuts'
  | 'fats'
  | 'beverages'
  | 'sweets'

export interface Food {
  id: string
  category: FoodCategory
  name: Bilingual
  emoji: string
  per100g: {
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
    sugar: number
  }
}

export type MacroKey = 'protein' | 'carbs' | 'fat' | 'fiber'

export interface Source {
  name: Bilingual
  url: string
}

export interface Nutrient {
  id: string
  /** Which learn group this belongs to. */
  group: 'macro' | 'micro' | 'other'
  emoji: string
  /** Tailwind token used for the accent color (protein/carbs/fat/fiber/primary/accent). */
  accent: string
  name: Bilingual
  short: Bilingual
  kcalPerGram?: number
  what: Bilingual
  why: Bilingual
  howMuch: Bilingual
  sources: Bilingual
  examples: Bilingual[]
  tip: Bilingual
}
