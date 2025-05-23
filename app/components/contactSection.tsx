import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Invalid email address').required('Please enter your email'),
    message: Yup.string().required('Please enter a message'),
  });

  // Handle form submission
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Send email using the Next.js API route
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error('Failed to send email');
        }

        setSubmitted(true);
        resetForm();

        // Reset submission status after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } catch (error) {
        console.error('Error submitting form', error);
      }
    },
  });

  // Animations for elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
      },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden min-h-screen flex items-center bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-white  z-0" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            backgroundPosition: 'center center',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-medium mb-12 font-anton relative">
          <span className="bg-gradient-to-r from-black via-gray-500 to-gray-900 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
            Get in Touch
          </span>
        </h1>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left column with contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Interested in working together? I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>

              <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="flex items-center group" variants={itemVariants}>
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-5 group-hover:bg-gray-200 transition-colors duration-300 shadow-sm">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg group-hover:text-black transition-colors duration-300">
                    fauzangolawala164@gmail.com
                  </span>
                </motion.div>

                <motion.div className="flex items-center group" variants={itemVariants}>
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-5 group-hover:bg-gray-200 transition-colors duration-300 shadow-sm">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg group-hover:text-black transition-colors duration-300">
                    India
                  </span>
                </motion.div>

                <motion.div className="flex items-center group" variants={itemVariants}>
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-5 group-hover:bg-gray-200 transition-colors duration-300 shadow-sm">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg group-hover:text-black transition-colors duration-300">
                    +91 8320445493
                  </span>
                </motion.div>
              </motion.div>

              <div className="mt-12 flex space-x-6">
                <a
                  href="https://github.com/Fauzan-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 shadow-sm"
                >
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/fauzangolawala164/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 shadow-sm"
                >
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right column with contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.form
                onSubmit={formik.handleSubmit}
                className="bg-white rounded-2xl p-8 relative overflow-hidden transition-all duration-500 border border-gray-200 shadow-lg"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Subtle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 -z-10" />
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-gray-100 to-transparent rounded-bl-full transform -translate-y-1/2 translate-x-1/2 -z-5"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-t from-gray-100 to-transparent rounded-tr-full transform translate-y-1/2 -translate-x-1/2 -z-5"></div>

                {/* Success message */}
                {submitted && (
                  <motion.div
                    className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center rounded-2xl z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="text-center p-6">
                      <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto flex items-center justify-center mb-4">
                        <svg
                          className="w-8 h-8 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}

                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${
                      formik.touched.name && formik.errors.name
                        ? 'border-red-400 focus:ring-red-300'
                        : 'border-gray-200 focus:ring-gray-300'
                    } text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                    whileFocus={{ scale: 1.005 }}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.name}</p>
                  )}
                </motion.div>

                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${
                      formik.touched.email && formik.errors.email
                        ? 'border-red-400 focus:ring-red-300'
                        : 'border-gray-200 focus:ring-gray-300'
                    } text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                    whileFocus={{ scale: 1.005 }}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
                  )}
                </motion.div>

                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${
                      formik.touched.message && formik.errors.message
                        ? 'border-red-400 focus:ring-red-300'
                        : 'border-gray-200 focus:ring-gray-300'
                    } text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                    whileFocus={{ scale: 1.005 }}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.message}</p>
                  )}
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full py-3 px-4 border border-black bg-gradient-to-r from-white to-gray-50 rounded-full text-black font-medium transition-all relative overflow-hidden shadow-md hover:scale-105 bg-white"
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 hover:opacity-100 transition-opacity duration-300" /> */}
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;