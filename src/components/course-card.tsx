'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CoursePreviewModal } from './course-preview-modal';
import { FaShare, FaWhatsapp, FaTelegram, FaTwitter, FaLink } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  level: string;
  teacher: string;
  price: number;
  imageUrl: string;
  startDate: string;
}

export function CourseCard(course: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showShareButtons, setShowShareButtons] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('fa-IR');
  };

  useEffect(() => {
    setShareUrl(`${window.location.origin}/courses/${course.id}`);
  }, [course.id]);
  
  const shareButtons = [
    {
      icon: FaWhatsapp,
      label: 'واتساپ',
      onClick: () => shareUrl && window.open(`https://wa.me/?text=${encodeURIComponent(`${course.title}\n${shareUrl}`)}`, '_blank'),
      color: 'bg-green-500'
    },
    {
      icon: FaTelegram,
      label: 'تلگرام',
      onClick: () => shareUrl && window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(course.title)}`, '_blank'),
      color: 'bg-blue-500'
    },
    {
      icon: FaTwitter,
      label: 'توییتر',
      onClick: () => shareUrl && window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${course.title}\n${shareUrl}`)}`, '_blank'),
      color: 'bg-sky-500'
    },
    {
      icon: FaLink,
      label: 'کپی لینک',
      onClick: () => {
        if (shareUrl) {
          navigator.clipboard.writeText(shareUrl);
          alert('لینک کپی شد!');
        }
      },
      color: 'bg-gray-500'
    }
  ];

  return (
    <>
      <motion.div
        className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transform-gpu"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative flex-shrink-0">
          <motion.img
            className="h-48 w-full object-cover"
            src={course.imageUrl}
            alt={course.title}
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="px-4 py-2 bg-primary-red text-white rounded-md hover:bg-red-700 transition-colors"
              onClick={() => setIsModalOpen(true)}
            >
              مشاهده جزئیات
            </button>
          </motion.div>
        </div>

        <div className="flex-1 p-6 flex flex-col">
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {course.title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-red text-white">
                  {course.level}
                </span>
                <div className="relative">
                  <motion.button
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setShowShareButtons(!showShareButtons)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaShare className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </motion.button>
                  <AnimatePresence>
                    {showShareButtons && (
                      <motion.div
                        className="absolute left-0 mt-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-10 flex flex-col gap-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {shareButtons.map((button, index) => (
                          <motion.button
                            key={index}
                            className={`flex items-center gap-2 px-3 py-2 rounded-md text-white ${button.color}`}
                            onClick={button.onClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <button.icon className="w-4 h-4" />
                            <span className="text-sm">{button.label}</span>
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
              {course.description}
            </p>
          </div>

          <div className="mt-6 flex items-center">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <span>مدرس: </span>
              <span className="font-medium text-gray-900 dark:text-white">{course.teacher}</span>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div className="text-lg font-semibold text-primary-red">
              {formatPrice(course.price)} تومان
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              شروع: {formatDate(course.startDate)}
            </div>
          </div>
        </div>
      </motion.div>

      <CoursePreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={course}
      />
    </>
  );
} 