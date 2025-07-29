import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'ko'] as const;
// Use 'always' for static export to ensure locale is always in the URL
export const localePrefix = 'always'; 

export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix});