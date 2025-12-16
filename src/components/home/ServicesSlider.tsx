import { useState, useEffect } from 'react';
import { Code, Brain, GraduationCap, FolderKanban, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      icon: <Code className="h-16 w-16" />,
      title: 'Web Designing',
      description: 'Crafting beautiful, responsive, and user-friendly websites tailored to your business needs with cutting-edge technologies.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: <Brain className="h-16 w-16" />,
      title: 'AI/ML Solutions',
      description: 'Innovative artificial intelligence and machine learning solutions to transform your business and drive intelligent automation.',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: <FolderKanban className="h-16 w-16" />,
      title: 'Student Projects',
      description: 'Comprehensive project development and guidance for students across various domains with expert mentorship.',
      color: 'from-blue-700 to-blue-900',
    },
    {
      icon: <GraduationCap className="h-16 w-16" />,
      title: 'Internship Courses',
      description: 'Industry-focused internship programs and professional training courses for skill development and career advancement.',
      color: 'from-blue-500 to-blue-700',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-gray-800">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-full px-8 py-16 md:px-16 md:py-20"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl text-white shadow-xl transform hover:scale-105 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-blue-600 dark:bg-blue-500'
                : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}