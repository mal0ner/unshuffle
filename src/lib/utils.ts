/*
 * This is copied from shadcn-ui.
 * https://ui.shadcn.com/docs/installation/manual
 * It is very useful!
 */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
