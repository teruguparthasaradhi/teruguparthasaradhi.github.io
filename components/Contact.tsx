import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert(`Thank you, ${formData.name}! I'll get back to you shortly.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50 dark:bg-black border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-neutral-900 dark:text-white">Ready to work together?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
             Experienced in delivering high-quality software solutions and innovative architectures. Let's discuss how I can contribute to your team.
          </p>
        </div>

        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 md:p-10 shadow-sm border border-neutral-100 dark:border-neutral-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 transition-colors outline-none"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 transition-colors outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
              <div className="relative">
                <div className="absolute top-3 left-3 text-neutral-400 pointer-events-none">
                  <MessageSquare size={18} />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full pl-10 pr-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 transition-colors resize-none outline-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};