
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, light, centered = true }) => {
  return (
    <div className={`mb-10 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-emerald-100/80' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-1 w-16 md:w-24 bg-emerald-600 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;
