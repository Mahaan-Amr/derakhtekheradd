import { CourseCard } from '@/components/course-card';
import { FaGraduationCap, FaUsers, FaGlobe, FaCertificate } from 'react-icons/fa';
import { AnimatedSection } from '@/components/animated-section';
import { AnimatedStat } from '@/components/animated-stat';
import { BackToTop } from '@/components/back-to-top';
import { StickyHeader } from '@/components/sticky-header';
import { HeroCarousel } from '@/components/hero-carousel';
import { Tooltip } from '@/components/tooltip';
import { FloatingChat } from '@/components/floating-chat';

// Sample featured courses data
const featuredCourses = [
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
];

// Sample blog posts for homepage
const latestBlogPosts = [
  {
    id: '1',
    title: 'راهنمای جامع آزمون TestDaF',
    excerpt: 'همه چیز درباره آزمون TestDaF و نحوه آمادگی برای آن',
    author: 'دکتر محمدی',
    date: '2024-01-15',
    imageUrl: '/images/blog/Leonardo_Phoenix_10_Highcontrast_minimalist_photography_style_1.jpg',
  },
  {
    id: '2',
    title: 'تحصیل در دانشگاه‌های آلمان',
    excerpt: 'مراحل اپلای و پذیرش از دانشگاه‌های معتبر آلمان',
    author: 'دکتر رضایی',
    date: '2024-01-20',
    imageUrl: '/images/blog/Leonardo_Phoenix_10_Highcontrast_minimalist_photography_style_2.jpg',
  },
];

// Sample testimonials
const testimonials = [
  {
    id: '1',
    content: 'کیفیت آموزش در درخت خرد عالی بود. من موفق شدم در مدت کوتاهی به سطح B2 برسم.',
    name: 'سارا احمدی',
    role: 'دانشجوی پزشکی در آلمان',
  },
  {
    id: '2',
    content: 'مشاوره‌های دقیق و حرفه‌ای اساتید به من در پذیرش از دانشگاه برلین کمک زیادی کرد.',
    name: 'علی کریمی',
    role: 'دانشجوی مهندسی در برلین',
  },
  {
    id: '3',
    content: 'بهترین تجربه یادگیری زبان را در درخت خرد داشتم. اساتید فوق‌العاده حرفه‌ای هستند.',
    name: 'مریم حسینی',
    role: 'دانشجوی معماری در مونیخ',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <BackToTop />
      <FloatingChat />
      
      {/* Hero Section */}
      <HeroCarousel />

      {/* Statistics Section */}
      <section className="bg-primary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <AnimatedStat endValue={1000} label="دانشجوی موفق" suffix="+" />
            <AnimatedStat endValue={15} label="سال تجربه" suffix="+" />
            <AnimatedStat endValue={50} label="دوره تخصصی" suffix="+" />
            <AnimatedStat endValue={98} label="رضایت دانشجویان" suffix="٪" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <AnimatedSection>
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                چرا درخت خرد؟
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                ما با تجربه و تخصص خود، مسیر موفقیت شما را هموار می‌کنیم
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Tooltip content="اساتید ما دارای مدرک دکترا از دانشگاه‌های معتبر آلمان هستند">
                <div className="text-center">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary rounded-lg">
                      <FaGraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">اساتید مجرب</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    تدریس توسط اساتید با تجربه و دارای مدرک دکترا
                  </p>
                </div>
              </Tooltip>

              <Tooltip content="کلاس‌های کوچک برای توجه بیشتر به هر دانشجو">
                <div className="text-center">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary rounded-lg">
                      <FaUsers className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">کلاس‌های کم‌جمعیت</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    توجه ویژه به هر دانشجو با کلاس‌های حداکثر ۱۰ نفره
                  </p>
                </div>
              </Tooltip>

              <Tooltip content="امکان شرکت در کلاس‌ها به صورت آنلاین یا حضوری">
                <div className="text-center">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary rounded-lg">
                      <FaGlobe className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">آموزش آنلاین و حضوری</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    انعطاف‌پذیری در نحوه برگزاری کلاس‌ها
                  </p>
                </div>
              </Tooltip>

              <Tooltip content="گواهینامه معتبر مورد تایید موسسات آلمانی">
                <div className="text-center">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary rounded-lg">
                      <FaCertificate className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">گواهینامه معتبر</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    ارائه گواهینامه معتبر پایان دوره
                  </p>
                </div>
              </Tooltip>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Courses Section */}
      <AnimatedSection>
        <section className="bg-gray-50 dark:bg-gray-800 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                دوره‌های ویژه
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                برترین دوره‌های آموزش زبان آلمانی با تدریس اساتید مجرب
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Latest Blog Posts Section */}
      <AnimatedSection>
        <section className="bg-white dark:bg-gray-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                آخرین مقالات
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                جدیدترین مطالب آموزشی و اخبار مهاجرت به آلمان
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {latestBlogPosts.map((post) => (
                <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {post.author}
                        </span>
                      </div>
                      <div className="mr-3">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/blog"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-secondary"
              >
                مشاهده همه مقالات
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection>
        <section className="bg-gray-50 dark:bg-gray-800 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                نظرات دانشجویان
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                آنچه دانشجویان ما درباره درخت خرد می‌گویند
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8"
                >
                  <p className="text-gray-600 dark:text-gray-300">{testimonial.content}</p>
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact CTA Section */}
      <AnimatedSection>
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                آماده شروع یادگیری هستید؟
              </h2>
              <p className="mt-4 text-xl text-white">
                همین حالا با ما تماس بگیرید و مشاوره رایگان دریافت کنید
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary"
                >
                  تماس با ما
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
