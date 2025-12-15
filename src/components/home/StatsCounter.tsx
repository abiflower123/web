import { useEffect, useRef, useState } from 'react';
import { Users, Calendar, Package } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ clients: 0, years: 0, products: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    {
      icon: <Users className="h-8 w-8" />,
      value: 90,
      suffix: '+',
      label: 'Happy Clients',
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      value: 7,
      suffix: '+',
      label: 'Years Experience',
    },
    {
      icon: <Package className="h-8 w-8" />,
      value: 54,
      suffix: '+',
      label: 'Products',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const counters = [
        { key: 'clients', target: 90 },
        { key: 'years', target: 7 },
        { key: 'products', target: 54 },
      ];

      counters.forEach(({ key, target }) => {
        let current = 0;
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, interval);
      });
    }
  }, [isVisible]);

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-full">
              {stat.icon}
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-800">
                {index === 0 && counts.clients}
                {index === 1 && counts.years}
                {index === 2 && counts.products}
                {stat.suffix}
              </div>
              <p className="text-gray-600 font-medium mt-2">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
