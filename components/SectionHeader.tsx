
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, light, centered = true }) => {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tighter ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm md:text-base lg:text-lg max-w-2xl font-light leading-relaxed mb-6 ${centered ? 'mx-auto' : ''} ${light ? 'text-emerald-100/80' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`group relative h-[2px] w-20 md:w-24 bg-emerald-600/20 rounded-full overflow-hidden ${centered ? 'mx-auto' : ''}`}>
        <div className="absolute inset-0 bg-emerald-600 w-full transform translate-x-[-100%] group-active:translate-x-0 transition-transform duration-1000 ease-out"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
