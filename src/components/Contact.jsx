import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { churchData } from '../data/churchData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message or prayer request.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F4F0EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-px bg-[#C5A880]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880]">
              Get in Touch
            </span>
            <span className="w-6 h-px bg-[#C5A880]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#0C1222] tracking-tight"
          >
            We'd Love to <span className="italic font-normal text-[#A5865E]">Hear From You</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed font-light"
          >
            {churchData.contact.subtitle}
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#E8E2D8] shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-[#0C1222] mb-6">
                Church Secretariat
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D8] flex items-center justify-center text-[#C5A880] shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                      Address
                    </h4>
                    <p className="text-sm font-medium text-[#0C1222] mt-1 leading-relaxed">
                      {churchData.identity.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D8] flex items-center justify-center text-[#C5A880] shrink-0 mt-0.5 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                      Phone
                    </h4>
                    <p className="text-sm font-medium text-[#0C1222] mt-1">
                      <a href={`tel:${churchData.identity.phone}`} className="hover:text-[#A5865E]">
                        {churchData.identity.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D8] flex items-center justify-center text-[#C5A880] shrink-0 mt-0.5 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                      Email
                    </h4>
                    <p className="text-sm font-medium text-[#0C1222] mt-1">
                      <a href={`mailto:${churchData.identity.email}`} className="hover:text-[#A5865E]">
                        {churchData.identity.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D8] flex items-center justify-center text-[#C5A880] shrink-0 mt-0.5 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                      Office Hours
                    </h4>
                    <p className="text-xs font-normal text-[#475569] mt-1 leading-relaxed">
                      {churchData.contact.officeHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick prayer notice */}
            <div className="p-6 rounded-3xl bg-[#0C1222] text-white">
              <h4 className="font-serif text-lg font-medium text-[#DFC69D]">
                Need Personal Prayer?
              </h4>
              <p className="text-xs text-[#E8E2D8]/80 mt-2 leading-relaxed">
                Our prayer team and pastoral staff pray over every request with confidentiality and care. Send us a note or approach any elder after Sunday service.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#E8E2D8] shadow-sm">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#C5A880]/20 text-[#A5865E] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#0C1222]">
                      Thank You for Reaching Out
                    </h3>
                    <p className="mt-3 text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                      Your message has been received by the GKMI Karunia team. We will get back to you as soon as possible. May God’s peace be with you.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-full bg-[#0C1222] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#1E293B]"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} noValidate className="space-y-6">
                    <h3 className="text-2xl font-serif font-bold text-[#0C1222] mb-6">
                      Send a Message or Prayer Request
                    </h3>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-[#475569] mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Maria Santoso"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#0C1222] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-colors ${
                          errors.name ? 'border-red-400 focus:ring-red-400' : 'border-[#E8E2D8]'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email & Phone in 2 cols */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-[#475569] mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="maria@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#0C1222] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-colors ${
                            errors.email ? 'border-red-400 focus:ring-red-400' : 'border-[#E8E2D8]'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-[#475569] mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+62 812 3456 7890"
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#0C1222] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-colors ${
                            errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-[#E8E2D8]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-[#475569] mb-2">
                        Message or Prayer Request <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we assist or pray for you today?"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#0C1222] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-colors resize-none ${
                          errors.message ? 'border-red-400 focus:ring-red-400' : 'border-[#E8E2D8]'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0C1222] text-[#FAF8F5] text-sm uppercase tracking-wider font-semibold hover:bg-[#1E293B] active:scale-95 transition-all shadow-md disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#C5A880]" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
