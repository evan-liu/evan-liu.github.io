import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Tailwind class constructing + merge(), used by ShadcnUI */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
