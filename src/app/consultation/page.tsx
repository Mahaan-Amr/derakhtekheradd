'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';

const consultationTypes = [
  {
    id: 'language',
    title: 'مشاوره زبان',
    description: 'مشاوره تخصصی برای یادگیری زبان آلمانی و آمادگی آزمون‌های بین‌المللی',
  },
  {
    id: 'immigration',
    title: 'مشاوره مهاجرت',
    description: 'مشاوره در زمینه مهاجرت تحصیلی و کاری به آلمان',
  },
];

const timeSlots = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00',
];

export default function ConsultationPage() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement booking submission
    console.log({
      type: selectedType,
      date: selectedDate,
      time: selectedTime,
      name,
      email,
      phone,
      description,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            رزرو مشاوره
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            با کارشناسان ما در زمینه یادگیری زبان و مهاجرت مشاوره کنید
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Consultation Type */}
            <div>
              <label className="text-base font-medium text-gray-900 dark:text-white">
                نوع مشاوره
              </label>
              <div className="mt-4 grid grid-cols-1 gap-4">
                {consultationTypes.map((type) => (
                  <label
                    key={type.id}
                    className={`relative flex cursor-pointer rounded-lg border p-4 ${
                      selectedType === type.id
                        ? 'border-primary-red bg-primary-red bg-opacity-5'
                        : 'border-gray-300 dark:border-gray-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="consultation-type"
                      value={type.id}
                      className="sr-only"
                      onChange={(e) => setSelectedType(e.target.value)}
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {type.title}
                      </span>
                      <span className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {type.description}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Date & Time Selection */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  تاریخ
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  ساعت
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                >
                  <option value="">انتخاب ساعت</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
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
                  شماره تماس
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  توضیحات
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-red"
              >
                ثبت درخواست مشاوره
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
} 