import React from 'react';
import { GraduationCap, Award, BadgeCheck } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../constants';

export const Sidebar: React.FC = () => {
  return (
    <div className="space-y-8 sticky top-24">
      
      {/* Education */}
      <div className="bg-white dark:bg-neutral-900 p-6 lg:p-8 rounded-2xl shadow-lg shadow-neutral-200/50 dark:shadow-none border border-neutral-100 dark:border-neutral-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <GraduationCap size={140} />
        </div>
        
        <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2 relative z-10 text-neutral-900 dark:text-white">
          <GraduationCap className="text-blue-500" />
          Education
        </h3>
        
        <div className="space-y-8 relative z-10">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="relative pl-4 border-l-2 border-blue-100 dark:border-blue-900">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                {edu.period}
              </span>
              <h4 className="text-base font-bold text-neutral-900 dark:text-white leading-tight mb-1">
                {edu.school}
              </h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 italic">
                {edu.degree}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 lg:p-8 rounded-2xl shadow-lg relative overflow-hidden">
        {/* Decor */}
        <div className="absolute -bottom-6 -right-6 bg-white/10 w-32 h-32 rounded-full blur-2xl"></div>
        <div className="absolute top-0 right-0 p-6 opacity-20">
          <Award size={80} />
        </div>

        <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2 relative z-10">
          <BadgeCheck className="text-blue-200" />
          Certifications
        </h3>

        <ul className="space-y-6 relative z-10">
          {CERTIFICATIONS.map((cert, index) => (
            <li key={cert.id} className="flex gap-4 group">
              <span className="font-bold text-xl leading-none text-blue-200 opacity-60 font-serif">
                {index + 1}.
              </span>
              <div>
                <p className="font-semibold text-white leading-tight group-hover:text-blue-100 transition-colors">
                  {cert.title}
                </p>
                {cert.description ? (
                  <p className="text-xs text-blue-100/80 mt-1">
                    {cert.issuer} - {cert.description}
                  </p>
                ) : (
                   <p className="text-xs text-blue-100/80 mt-1">
                    {cert.issuer}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};