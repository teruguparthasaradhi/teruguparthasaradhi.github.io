import React from 'react';
import { CheckCircle2, Code, Layers, Settings, Database, Briefcase } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCE } from '../constants';

const icons = {
  code: Code,
  layers: Layers,
  settings: Settings,
  database: Database
};

export const MainContent: React.FC = () => {
  return (
    <div className="space-y-16">
      
      {/* Professional Summary */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-serif font-bold text-neutral-900 dark:text-white">Professional Summary</h2>
        </div>
        
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 lg:p-8 shadow-sm border border-neutral-100 dark:border-neutral-800">
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed text-lg">
            {PERSONAL_INFO.summary}
          </p>
          <ul className="space-y-4">
            {PERSONAL_INFO.summaryPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 shrink-0" aria-hidden="true" />
                <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technical Arsenal */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-serif font-bold text-neutral-900 dark:text-white">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((category) => {
            const Icon = icons[category.icon];
            return (
              <div key={category.title} className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.colorClass}`}>
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Experience */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-serif font-bold text-neutral-900 dark:text-white">Professional Experience</h2>
        </div>

        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-3 space-y-12">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="relative pl-8 lg:pl-10">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-blue-500"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-serif">{job.role}</h3>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {job.period}
                </span>
              </div>
              
              <div className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-4 flex items-center gap-2">
                <Briefcase size={18} className="text-neutral-400" aria-hidden="true" />
                {job.company}
              </div>

              <ul className="space-y-2">
                {job.description.map((desc, i) => (
                  <li key={i} className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base pl-4 border-l-2 border-neutral-100 dark:border-neutral-700/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};