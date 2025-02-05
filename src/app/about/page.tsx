'use client';

import { Navigation } from '@/components/navigation';

const staffMembers = [
  {
    name: 'دکتر محمدی',
    role: 'مدیر موسسه و مدرس زبان آلمانی',
    imageUrl: '/images/staff/Leonardo_Phoenix_10_Highcontrast_minimalist_photography_style_1.jpg',
    bio: 'دکترای زبان آلمانی از دانشگاه برلین با ۱۵ سال سابقه تدریس',
    specialties: ['مکالمه', 'گرامر پیشرفته', 'آزمون TestDaF'],
  },
  {
    name: 'دکتر رضایی',
    role: 'مشاور تحصیلی و مدرس',
    imageUrl: '/images/staff/Leonardo_Phoenix_10_Highcontrast_minimalist_photography_style_2.jpg',
    bio: 'متخصص در امور مهاجرت تحصیلی با ۱۰ سال تجربه',
    specialties: ['مشاوره تحصیلی', 'آزمون‌های زبان', 'مکاتبات آکادمیک'],
  },
  {
    name: 'دکتر علوی',
    role: 'مدرس ارشد و مشاور مهاجرت',
    imageUrl: '/images/staff/Leonardo_Phoenix_10_Highcontrast_minimalist_photography_featur_2.jpg',
    bio: 'فارغ‌التحصیل دانشگاه مونیخ با تخصص در آموزش زبان آلمانی',
    specialties: ['مهاجرت کاری', 'زبان تخصصی', 'مکالمه پیشرفته'],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Institution Overview */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            درباره درخت خرد
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            موسسه زبان درخت خرد با هدف ارائه آموزش‌های با کیفیت زبان آلمانی و خدمات مشاوره مهاجرت در شیراز تاسیس شده است.
            ما با بهره‌گیری از اساتید مجرب و متدهای نوین آموزشی، مسیر یادگیری زبان آلمانی را برای شما هموار می‌کنیم.
          </p>
        </div>

        {/* Our Values */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            ارزش‌های ما
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-primary-red">کیفیت آموزشی</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                استفاده از جدیدترین متدهای آموزشی و منابع معتبر بین‌المللی
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-primary-green">پشتیبانی مستمر</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                ارائه خدمات مشاوره و پشتیبانی در تمام مراحل یادگیری
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-primary-blue">تعهد به موفقیت</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                همراهی با دانشجویان تا رسیدن به اهداف زبانی و تحصیلی
              </p>
            </div>
          </div>
        </div>

        {/* Staff Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            اساتید و مشاوران
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            {staffMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="space-y-4">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    src={member.imageUrl}
                    alt={member.name}
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      {member.name}
                    </div>
                    <div className="text-sm text-primary-red">
                      {member.role}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <p>{member.bio}</p>
                    <div className="mt-4">
                      <h4 className="text-gray-900 dark:text-white font-medium">تخصص‌ها:</h4>
                      <ul className="mt-2 flex flex-wrap justify-center gap-2">
                        {member.specialties.map((specialty) => (
                          <li
                            key={specialty}
                            className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-xs"
                          >
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 