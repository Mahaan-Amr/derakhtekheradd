'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    image: '/images/hero/Leonardo_Phoenix_10_Highcontrast_minimalist_photography_style_1.jpg',
    title: 'آموزش زبان آلمانی',
    subtitle: 'در درخت خرد',
    description: 'با بهترین اساتید زبان آلمانی در شیراز همراه شوید',
  },
  {
    id: 2,
    image: '/images/hero/Leonardo_Phoenix_10_Highcontrast_minimalist_photography_style_2.jpg',
    title: 'کلاس‌های آنلاین و حضوری',
    subtitle: 'با امکانات کامل',
    description: 'انعطاف‌پذیری در برگزاری کلاس‌ها متناسب با نیاز شما',
  },
  {
    id: 3,
    image: '/images/hero/Leonardo_Phoenix_10_Highcontrast_minimalist_photography_featur_2.jpg',
    title: 'مشاوره تخصصی',
    subtitle: 'مهاجرت تحصیلی',
    description: 'راهنمایی در مسیر تحصیل در معتبرترین دانشگاه‌های آلمان',
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  const nextSlide = () => paginate(1);
  const prevSlide = () => paginate(-1);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold text-white sm:text-5xl md:text-6xl"
              >
                {slides[currentSlide].title}
                <span className="block text-primary-red">{slides[currentSlide].subtitle}</span>
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-xl text-gray-100"
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex justify-center space-x-4 space-x-reverse"
              >
                <a
                  href="/courses"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-red hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                >
                  مشاهده دوره‌ها
                </a>
                <a
                  href="/consultation"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-red bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  مشاوره رایگان
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
        onClick={prevSlide}
      >
        <FaChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
        onClick={nextSlide}
      >
        <FaChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-4' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
} 