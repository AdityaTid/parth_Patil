import React, { useState } from 'react';

// --- Types ---
interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

// --- Data for the image accordion (Manufacturing Industry) ---
const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: 'EOT Cranes',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Goliath Crane',
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Jib Crane',
    imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Wire Rope Hoist',
    imageUrl: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Under Slung EOT',
    imageUrl: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop',
  },
];

// --- Accordion Item Component ---
const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Amber accent line at bottom when active */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-amber-500 transition-transform duration-500 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out font-['Oswald',sans-serif] tracking-wider uppercase
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0 text-xl'
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90 text-base'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};


// --- Main Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-[#141210] font-sans min-h-screen">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-amber-500 text-xs font-semibold tracking-[2px] uppercase font-['Barlow_Condensed',sans-serif]">
                ISO 9001 Certified
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter font-['Oswald',sans-serif]">
              Precision Heavy{' '}
              <span className="text-amber-500">Lifting</span>{' '}
              Solutions
            </h1>
            <p className="mt-6 text-lg text-[#a89e94] max-w-xl mx-auto md:mx-0 font-['Barlow',sans-serif]">
              Leading manufacturers &amp; exporters of EOT cranes, Goliath cranes, Jib cranes, 
              wire rope electric hoists, and industrial lifting systems. Engineered for performance, 
              built for reliability.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-amber-500 text-[#141210] font-semibold px-8 py-3 rounded-sm shadow-lg hover:bg-amber-400 transition-all duration-300 uppercase tracking-[1.5px] text-sm font-['Barlow_Condensed',sans-serif]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.09 2.18 2 2 0 012.06 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                </svg>
                Request Quote
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-transparent text-white border border-[#4e4840] font-semibold px-8 py-3 rounded-sm hover:border-amber-500 hover:text-amber-500 transition-all duration-300 uppercase tracking-[1.5px] text-sm font-['Barlow_Condensed',sans-serif]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
                View Products
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 flex-wrap justify-center md:justify-start">
              <div>
                <div className="text-3xl font-bold text-white font-['Oswald',sans-serif]">25<span className="text-amber-500">+</span></div>
                <div className="text-xs font-semibold tracking-[1.5px] uppercase text-[#8a7f73] font-['Barlow_Condensed',sans-serif] mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-['Oswald',sans-serif]">500<span className="text-amber-500">+</span></div>
                <div className="text-xs font-semibold tracking-[1.5px] uppercase text-[#8a7f73] font-['Barlow_Condensed',sans-serif] mt-1">Cranes Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-['Oswald',sans-serif]">30<span className="text-amber-500">+</span></div>
                <div className="text-xs font-semibold tracking-[1.5px] uppercase text-[#8a7f73] font-['Barlow_Condensed',sans-serif] mt-1">Countries Exported</div>
              </div>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
