import type { FoodCategory } from './types'

export type Sex = 'male' | 'female'
export type Activity = 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive'
export type Goal = 'lose' | 'maintain' | 'gain'
export type MacroStyle = 'balanced' | 'lowCarb' | 'highProtein'

export const ACTIVITY_FACTORS: Record<Activity, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
}

export const GOAL_FACTORS: Record<Goal, number> = {
  lose: 0.8, // ~20% deficit
  maintain: 1,
  gain: 1.15, // ~15% surplus
}

/** Mifflin–St Jeor Basal Metabolic Rate (kcal/day). */
export function bmr(sex: Sex, weightKg: number, heightCm: number, age: number): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age
  return sex === 'male' ? base + 5 : base - 161
}

export function tdee(bmrValue: number, activity: Activity): number {
  return bmrValue * ACTIVITY_FACTORS[activity]
}

export function goalCalories(tdeeValue: number, goal: Goal): number {
  return tdeeValue * GOAL_FACTORS[goal]
}

/** Body Mass Index. */
export function bmi(weightKg: number, heightCm: number): number {
  const m = heightCm / 100
  return weightKg / (m * m)
}

export type BmiCategory = 'under' | 'normal' | 'over' | 'obese'

export function bmiCategory(value: number): BmiCategory {
  if (value < 18.5) return 'under'
  if (value < 25) return 'normal'
  if (value < 30) return 'over'
  return 'obese'
}

/** Healthy weight range (kg) for a given height, using BMI 18.5–24.9. */
export function healthyWeightRange(heightCm: number): [number, number] {
  const m = heightCm / 100
  return [18.5 * m * m, 24.9 * m * m]
}

export const MACRO_RATIOS: Record<MacroStyle, { protein: number; carbs: number; fat: number }> = {
  balanced: { protein: 0.25, carbs: 0.45, fat: 0.3 },
  lowCarb: { protein: 0.3, carbs: 0.25, fat: 0.45 },
  highProtein: { protein: 0.4, carbs: 0.35, fat: 0.25 },
}

export interface MacroGrams {
  protein: { grams: number; kcal: number; pct: number }
  carbs: { grams: number; kcal: number; pct: number }
  fat: { grams: number; kcal: number; pct: number }
}

/** Split total daily calories into macro grams. Protein & carbs = 4 kcal/g, fat = 9 kcal/g. */
export function macroSplit(calories: number, style: MacroStyle): MacroGrams {
  const r = MACRO_RATIOS[style]
  return {
    protein: { grams: (calories * r.protein) / 4, kcal: calories * r.protein, pct: r.protein },
    carbs: { grams: (calories * r.carbs) / 4, kcal: calories * r.carbs, pct: r.carbs },
    fat: { grams: (calories * r.fat) / 9, kcal: calories * r.fat, pct: r.fat },
  }
}

/** A distinct hue per food category, used for chips and accents. */
export const CATEGORY_COLORS: Record<FoodCategory, string> = {
  fruits: '#e0567f',
  vegetables: '#43ad64',
  grains: '#d9971f',
  protein: '#dd5a4a',
  legumes: '#b07a3c',
  dairy: '#3f8fd0',
  nuts: '#9a6b3f',
  fats: '#e0a52c',
  beverages: '#39b0b7',
  sweets: '#b061d0',
}

export const round = (n: number, digits = 0): number => {
  const f = 10 ** digits
  return Math.round(n * f) / f
}
