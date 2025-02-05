'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { CourseCard } from '@/components/course-card';

// Sample courses data (in a real app, this would come from an API)
const allCourses = [
  {
    id: '1',
    title: 'دوره A1 زبان آلمانی',
    description: 'شروع یادگیری زبان آلمانی از پایه با تمرکز بر مکالمه و گرامر',
    level: 'مبتدی',
    teacher: 'دکتر محمدی',
    price: 2500000,
    imageUrl: '/images/courses/Leonardo_Phoenix_10_Highcontrast_minimalist_photography_style_1.jpg',
    startDate: '2024-04-01',
  },
  {
    id: '2',
    title: 'دوره B1 زبان آلمانی',
    description: 'تقویت مهارت‌های زبانی برای آزمون B1 گوته',
    level: 'متوسط',
    teacher: 'دکتر رضایی',
    price: 3200000,
    imageUrl: '/images/courses/Leonardo_Phoenix_10_Highcontrast_minimalist_photography_style_2.jpg',
    startDate: '2024-04-15',
  },
  {
    id: '3',
    title: 'آمادگی آزمون TestDaF',
    description: 'دوره فشرده آمادگی برای آزمون TestDaF با تمرکز بر مهارت‌های آکادمیک',
    level: 'پیشرفته',
    teacher: 'دکتر علوی',
    price: 4500000,
    imageUrl: '/images/courses/Leonardo_Phoenix_10_Highcontrast_minimalist_photography_featur_2.jpg',
    startDate: '2024-05-01',
  },
  // Add more courses...
];

const levels = ['همه', 'مبتدی', 'متوسط', 'پیشرفته'];
const teachers = ['همه', 'دکتر محمدی', 'دکتر رضایی', 'دکتر علوی'];

export default function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState('همه');
  const [selectedTeacher, setSelectedTeacher] = useState('همه');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = allCourses.filter((course) => {
    const matchesLevel = selectedLevel === 'همه' || course.level === selectedLevel;
    const matchesTeacher = selectedTeacher === 'همه' || course.teacher === selectedTeacher;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesTeacher && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            دوره‌های آموزشی
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            تمامی دوره‌های آموزش زبان آلمانی در درخت خرد
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="جستجو در دوره‌ها..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          <select
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            {teachers.map((teacher) => (
              <option key={teacher} value={teacher}>
                {teacher}
              </option>
            ))}
          </select>
        </div>

        {/* Course Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-500 dark:text-gray-400">
              هیچ دوره‌ای با معیارهای انتخاب شده یافت نشد.
            </p>
          </div>
        )}
      </main>
    </div>
  );
} 