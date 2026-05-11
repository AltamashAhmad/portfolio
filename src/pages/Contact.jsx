import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { contactInfo } from '../data/contactData';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // Send email with parameters matching the template variables
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          email: formData.email, // Add this to ensure email is included
          name: formData.name,   // Add this to ensure name is included
        }
      );

      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };



  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">Let's Connect</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Ready to discuss opportunities? I respond to all messages within 24 hours. 
          Choose your preferred way to get in touch!
        </p>
      </motion.div>

      {/* Status Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
      >
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 px-6 py-3 rounded-full border border-purple-200 dark:border-purple-800 flex items-center gap-2 justify-center shadow-sm">
          <span className="text-lg">⚡</span>
          <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">Responds within 24 hours</span>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 px-6 py-3 rounded-full border border-green-200 dark:border-green-800 flex items-center gap-2 justify-center shadow-sm">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">Open to full-time roles</span>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-5 sm:p-8 md:p-10 w-full max-w-2xl transition-colors duration-200">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Me a Message</h3>
            
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 px-4 py-3 rounded mb-6"
              >
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm">I&apos;ll get back to you as soon as possible.</p>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded mb-6"
              >
                <p className="font-medium">Oops! Something went wrong.</p>
                <p className="text-sm">Please try again or contact me directly via email.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email Address (for replies)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Your email address (so I can reply to you)"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Your message here..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-5 sm:p-8 transition-colors duration-200">
            <h2 className="text-2xl font-heading font-bold mb-6 text-gray-800 dark:text-white">
              Quick Contact Options
            </h2>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={info.title}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-purple-400 hover:shadow-md transition-all duration-300 group bg-white dark:bg-gray-800"
                >
                  <div className="text-xl sm:text-2xl bg-purple-50 dark:bg-purple-900/30 p-2.5 sm:p-3 rounded-lg group-hover:bg-purple-100 dark:group-hover:bg-purple-800/50 transition-colors flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors truncate">
                      {info.title}
                    </p>
                    <p className="text-[11px] sm:text-sm text-purple-600 dark:text-purple-400 mb-0.5 sm:mb-1 truncate">{info.description}</p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 break-all sm:break-normal truncate sm:truncate-none">{info.value}</p>
                  </div>
                  <svg 
                    className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>


        </motion.div>
      </div>
      </div>
    </section>
  );
}

export default Contact; 