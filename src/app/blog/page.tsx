'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';

// Sample blog categories
const categories = [
  { id: 'all', name: 'همه' },
  { id: 'language', name: 'آموزش زبان' },
  { id: 'immigration', name: 'مهاجرت' },
  { id: 'news', name: 'اخبار موسسه' },
  { id: 'culture', name: 'فرهنگ آلمانی' },
];

// Sample blog posts
const blogPosts = [
  {
    id: '1',
    title: 'راهنمای جامع آزمون TestDaF',
    excerpt: 'همه چیز درباره آزمون TestDaF و نحوه آمادگی برای آن',
    category: 'language',
    author: 'دکتر محمدی',
    date: '2024-01-15',
    imageUrl: '/images/blog/Leonardo_Phoenix_10_Highcontrast_minimalist_photography_style_1.jpg',
  },
  {
    id: '2',
    title: 'تحصیل در دانشگاه‌های آلمان',
    excerpt: 'مراحل اپلای و پذیرش از دانشگاه‌های معتبر آلمان',
    category: 'immigration',
    author: 'دکتر رضایی',
    date: '2024-01-20',
    imageUrl: '/images/blog/Leonardo_Phoenix_10_Highcontrast_minimalist_photography_style_2.jpg',
  },
  {
    id: '3',
    title: 'فرهنگ کار در آلمان',
    excerpt: 'آشنایی با محیط کار و فرهنگ شغلی در آلمان',
    category: 'culture',
    author: 'دکتر علوی',
    date: '2024-01-25',
    imageUrl: '/images/blog/Leonardo_Phoenix_10_Highcontrast_minimalist_photography_featur_2.jpg',
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            وبلاگ درخت خرد
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            آخرین مقالات و اخبار در زمینه آموزش زبان آلمانی و مهاجرت
          </p>
        </div>

        {/* Categories */}
        <div className="mt-8 flex justify-center space-x-4 space-x-reverse">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedCategory === category.id
                  ? 'bg-primary-red text-white'
                  : 'text-gray-500 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt={post.title}
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary-green">
                    {categories.find(c => c.id === post.category)?.name}
                  </p>
                  <a href={`/blog/${post.id}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                      {post.excerpt}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">نویسنده</span>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {post.author}
                    </p>
                  </div>
                  <div className="mr-auto">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('fa-IR')}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
} 