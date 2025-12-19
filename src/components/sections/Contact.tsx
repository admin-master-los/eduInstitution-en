import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactInfo } from '../../data/siteContent';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function Contact() {
  return (
    <Section id="contact" title="Get in Touch" subtitle="Contact Us" background="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Pre-Registration Form</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Program of Interest
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all">
                  <option value="">Select a program</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                  <option value="doctorate">Doctorate</option>
                  <option value="professional">Professional</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about yourself and your educational goals..."
                />
              </div>

              <Button variant="primary" size="lg" className="w-full">
                Submit Pre-Registration
              </Button>
            </form>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-burgundy-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-burgundy-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-burgundy-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-burgundy-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-burgundy-600 hover:text-burgundy-700"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-burgundy-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-burgundy-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-burgundy-600 hover:text-burgundy-700"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-burgundy-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-burgundy-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                  <p className="text-gray-600">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-burgundy-700 to-purple-800 text-white">
            <h3 className="text-2xl font-bold mb-4">Schedule a Campus Visit</h3>
            <p className="mb-6 text-burgundy-50">
              Experience our campus firsthand. Schedule a personalized tour and meet with our
              admissions team.
            </p>
            <Button variant="outline" size="md" className="w-full">
              Book a Tour
            </Button>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
