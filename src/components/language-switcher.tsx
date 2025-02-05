'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const languages = [
  { code: 'fa', name: 'فارسی' },
  { code: 'de', name: 'Deutsch' },
];

export function LanguageSwitcher() {
  const handleLanguageChange = (languageCode: string) => {
    // TODO: Implement language change logic with next-intl
    console.log(`Switching to ${languageCode}`);
  };

  return (
    <Menu as="div" className="relative inline-block text-right">
      <Menu.Button className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <GlobeAltIcon className="h-5 w-5" aria-hidden="true" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-36 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages.map((language) => (
              <Menu.Item key={language.code}>
                {({ active }) => (
                  <button
                    onClick={() => handleLanguageChange(language.code)}
                    className={`${
                      active
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : 'text-gray-900 dark:text-gray-100'
                    } group flex w-full items-center px-4 py-2 text-sm`}
                  >
                    {language.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
} 
