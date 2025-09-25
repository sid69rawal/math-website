'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { contactConfig } from '@/config/contact';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Left Side - Logo, Message, Social Media */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo and Brand */}
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <Image
                src="/logo.png"
                alt="Level Up Math Academy Logo"
                width={90}
                height={90}
                className="rounded-lg"
              />
              <div className="text-white font-bold text-2xl">
                Level Up Math Academy
              </div>
            </div>

            {/* Inspirational Message */}
            <motion.p
              className="text-gray-300 text-xl font-medium mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              &quot;Where Math Becomes Easy &amp; Learning Becomes Fun&quot;
            </motion.p>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold text-xl mb-4">Follow Us</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <motion.a
                  href={contactConfig.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  href={contactConfig.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-pink-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-6 h-6 text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Middle - Quick Links */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h4 className="text-white font-bold text-2xl mb-6">Quick Links</h4>
            
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Courses Column */}
              <div>
                <h5 className="text-white font-semibold text-xl mb-3">Courses</h5>
                <ul className="space-y-2 ml-4">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Link href="/courses/grades-3-5">
                      <motion.div
                        className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer inline-block text-lg"
                        whileHover={{ x: 5 }}
                      >
                        Grades 3-5
                      </motion.div>
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Link href="/courses/grades-6-8">
                      <motion.div
                        className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer inline-block text-lg"
                        whileHover={{ x: 5 }}
                      >
                        Grades 6-8
                      </motion.div>
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Link href="/courses/grades-9-12">
                      <motion.div
                        className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer inline-block text-lg"
                        whileHover={{ x: 5 }}
                      >
                        Grades 9-12
                      </motion.div>
                    </Link>
                  </motion.li>
                </ul>
              </div>

              {/* General Column */}
              <div>
                <h5 className="text-white font-semibold text-xl mb-3">General</h5>
                <ul className="space-y-2 ml-4">
                  {[
                    { name: "Home", href: "/" },
                    { name: "Our Services", href: "/services" },
                    { name: "About Us", href: "/about" },
                    { name: "Contact Us", href: "/contact" }
                  ].map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                    >
                      {link.href.startsWith('/') ? (
                        <Link href={link.href}>
                          <motion.div
                            className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer inline-block text-lg"
                            whileHover={{ x: 5 }}
                          >
                            {link.name}
                          </motion.div>
                        </Link>
                      ) : (
                        <motion.a
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-300 inline-block text-lg"
                          whileHover={{ x: 5 }}
                        >
                          {link.name}
                        </motion.a>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Info & Map */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h4 className="text-white font-bold text-2xl mb-6">Contact Info</h4>
            
            {/* Contact Info with Icons and Values */}
            <div className="space-y-4 mb-8">
              
              {/* Email */}
              <motion.div
                className="flex items-center justify-center md:justify-start space-x-3"
                whileHover={{ x: 5 }}
              >
                <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a 
                  href={`mailto:${contactConfig.email}`}
                  className="text-white hover:text-blue-400 transition-colors break-all text-lg"
                >
                  {contactConfig.email}
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-center justify-center md:justify-start space-x-3"
                whileHover={{ x: 5 }}
              >
                <div className="bg-green-600 p-2 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a 
                  href={`tel:${contactConfig.phoneLink}`}
                  className="text-white hover:text-green-400 transition-colors text-lg"
                >
                  {contactConfig.phone}
                </a>
              </motion.div>

              {/* Address */}
              <motion.div
                className="flex items-start justify-center md:justify-start space-x-3"
                whileHover={{ x: 5 }}
              >
                <div className="bg-purple-600 p-2 rounded-lg flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactConfig.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors leading-relaxed whitespace-pre-line text-lg"
                >
                  {contactConfig.address.full}
                </a>
              </motion.div>
            </div>

            {/* Google Maps Embed */}
            <motion.div
              className="w-full h-64 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWWg0F0q8x8&q=${encodeURIComponent(contactConfig.address.full)}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Level Up Math Academy Location"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Copyright Section */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-lg">
              © 2025 Level Up Math Academy. All rights reserved.
            </p>
            <p className="text-gray-400 text-lg">
              Making Mathematics Magical for Every Child! ✨
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
