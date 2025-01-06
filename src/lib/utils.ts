import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { techNameMap } from "../../constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDeviconClassName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, '').toLowerCase();

  return techNameMap[normalizedTechName] ? `${techNameMap[normalizedTechName]} colored` : 'devicon-devicon-plain';
}