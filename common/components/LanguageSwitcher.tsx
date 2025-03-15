'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import Link from 'next/link';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from './ui/select';

const COOKIE_NAME = 'NEXT_LOCALE';
const DEFAULT_LOCALE = 'en';

export default function LanguageSwitcher() {
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    const savedLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${COOKIE_NAME}=`))
      ?.split('=')[1] || DEFAULT_LOCALE;
    setCurrentLocale(savedLocale);
  }, []);

  const handleLanguageChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);

    document.cookie = `${COOKIE_NAME}=${newLocale}; path=/; expires=${date.toUTCString()}; SameSite=Strict`;
    setCurrentLocale(newLocale);
    router.refresh();
  }, [router]);

  return (
    <>
      <Select value={currentLocale} onValueChange={(value) => {
        handleLanguageChange({ target: { value } } as React.ChangeEvent<HTMLSelectElement>);
      }}>
        <SelectTrigger className="w-fit">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="no">Norsk</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}