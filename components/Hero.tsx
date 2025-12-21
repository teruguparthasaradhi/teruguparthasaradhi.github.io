import React from 'react';
import { Mail, Phone, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white dark:from-black dark:to-neutral-950 -z-10"></div>
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Profile Image */}
          <div className="relative group shrink-0">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full p-1.5 bg-gradient-to-br from-blue-500 to-purple-500 shadow-xl shadow-blue-500/20">
              <img 
                src="https://github.com/teruguparthasaradhi.png"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-black bg-white dark:bg-neutral-900"
              />
            </div>
            {/* Online Indicator */}
            <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-5 h-5 lg:w-6 lg:h-6 bg-green-500 border-4 border-white dark:border-black rounded-full"></div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white">
              {PERSONAL_INFO.name} <span className="text-blue-600 dark:text-blue-500">{PERSONAL_INFO.lastName}</span>
            </h1>
            
            <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.title}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium hover:border-blue-500 dark:hover:border-blue-400 transition-colors shadow-sm text-neutral-600 dark:text-neutral-300">
                <Mail size={16} className="text-blue-500" />
                {PERSONAL_INFO.email}
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium hover:border-blue-500 dark:hover:border-blue-400 transition-colors shadow-sm text-neutral-600 dark:text-neutral-300">
                <Phone size={16} className="text-blue-500" />
                {PERSONAL_INFO.phone}
              </a>
            </div>

            <div className="pt-2">
               <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2 mx-auto lg:mx-0">
                 <Download size={18} />
                 Download Resume
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};