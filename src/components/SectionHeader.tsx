import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  accentColor?: 'blue' | 'red' | 'white';
  theme?: 'light' | 'dark';
  id?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  alignment = 'left',
  accentColor = 'red',
  theme = 'light',
  id,
}) => {
  const isCenter = alignment === 'center';
  const isDark = theme === 'dark';

  const accentClasses = {
    blue: 'bg-[#003da5]',
    red: 'bg-[#e31937]',
    white: 'bg-white',
  }[accentColor];

  return (
    <div
      id={id}
      className={`mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : ''}`}>
          <span className={`h-1 w-7 ${accentClasses}`} aria-hidden="true" />
          <span
            className={`text-xs font-black tracking-[0.25em] uppercase font-mono ${
              isDark ? 'text-gray-300' : 'text-[#e31937]'
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight font-heading ${
          isDark ? 'text-white' : 'text-[#052d6e]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            isDark ? 'text-gray-300 font-normal' : 'text-[#596579] font-normal'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

