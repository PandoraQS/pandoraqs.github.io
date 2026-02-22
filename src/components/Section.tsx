import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "", maxWidth = "6xl" }) => (
  <section id={id} className={`max-w-${maxWidth} mx-auto py-24 px-8 ${className}`}>
    {children}
  </section>
);

export default Section;