'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    console.log({ name, email, subject, message });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            تماس با ما
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            برای ارتباط با ما و دریافت اطلاعات بیشتر با ما در تماس باشید
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              اطلاعات تماس
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-primary-red">آدرس</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  شیراز، خیابان ملاصدرا، ساختمان درخت خرد، طبقه دوم
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary-red">تلفن تماس</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  ۰۷۱-۳۲۳۴۵۶۷۸
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary-red">ایمیل</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  info@derakhtkherad.com
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary-red">ساعات کاری</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  شنبه تا پنجشنبه: ۹ صبح تا ۷ عصر
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg">
              {/* TODO: Add Google Maps integration */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                نقشه موقعیت موسسه
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              فرم تماس
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  ایمیل
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  موضوع
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  پیام
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-red"
                >
                  ارسال پیام
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
} 