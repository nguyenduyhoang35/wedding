import { type ClassValue, clsx } from "clsx"
import dayjs from "dayjs"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate1 = (date?: any) => dayjs(date).format('DD MMMM, YYYY')

export const formatDate2 = (date?: any) => dayjs(date).format('DD.MM.YYYY')

export const formatDate3 = (date?: any) => dayjs(date).format('MMM D, YYYY')
