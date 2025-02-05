'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';
import { MobileNav } from './mobile-nav';

const navigationItems = [
  { name: 'خانه', href: '/' },
  { name: 'دوره‌ها', href: '/courses' },
  { name: 'مشاوره', href: '/consultation' },
  { name: 'وبلاگ', href: '/blog' },
  { name: 'درباره ما', href: '/about' },
  { name: 'تماس با ما', href: '/contact' },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary-red">
                درخت خرد
              </Link>
            </div>
            <div className="hidden sm:mr-6 sm:flex sm:space-x-8 sm:space-x-reverse">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-primary-red dark:hover:text-primary-red"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <ThemeToggle />
            <LanguageSwitcher />
            <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
} 