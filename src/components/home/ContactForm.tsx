import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Send, AlertCircle } from 'lucide-react';
import Button from '../common/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [alerts, setAlerts] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  const [showAlerts, setShowAlerts] = useState({
    name: false,
    email: false,
    phone: false,
  });
  
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Validation functions
  const validateName = (name: string): boolean => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name) && name.trim().length > 0;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s+\-]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const validateForm = (): boolean => {
    const newAlerts = {
      name: '',
      email: '',
      phone: '',
    };

    let isValid = true;

    // Validate name
    if (!validateName(formData.name)) {
      newAlerts.name = 'Name should contain only letters and spaces';
      isValid = false;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      newAlerts.email = 'Please enter a valid email address (e.g., example@domain.com)';
      isValid = false;
    }

    // Validate phone
    if (!validatePhone(formData.phone)) {
      newAlerts.phone = 'Phone number should contain only numbers and be at least 10 digits';
      isValid = false;
    }

    setAlerts(newAlerts);
    setShowAlerts({
      name: newAlerts.name !== '',
      email: newAlerts.email !== '',
      phone: newAlerts.phone !== '',
    });
    
    return isValid;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    
    // Clear alert for this field when user starts typing
    if (alerts[field as keyof typeof alerts]) {
      setAlerts({ ...alerts, [field]: '' });
      setShowAlerts({ ...showAlerts, [field]: false });
    }
  };

  const handleBlur = (field: string) => {
    // Mark field as touched
    setTouched({ ...touched, [field]: true });
    
    // Validate on blur
    let isValid = true;
    let message = '';
    
    switch (field) {
      case 'name':
        isValid = validateName(formData.name);
        message = isValid ? '' : 'Name should contain only letters and spaces';
        break;
      case 'email':
        isValid = validateEmail(formData.email);
        message = isValid ? '' : 'Please enter a valid email address (e.g., example@domain.com)';
        break;
      case 'phone':
        isValid = validatePhone(formData.phone);
        message = isValid ? '' : 'Phone number should contain only numbers and be at least 10 digits';
        break;
    }
    
    // Only set alert if the field has been touched and has an error
    if (touched[field as keyof typeof touched] && !isValid) {
      setAlerts({ ...alerts, [field]: message });
      setShowAlerts({ ...showAlerts, [field]: !isValid });
    } else if (isValid) {
      // Clear alert if field is valid
      setAlerts({ ...alerts, [field]: '' });
      setShowAlerts({ ...showAlerts, [field]: false });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched on submit
    setTouched({ name: true, email: true, phone: true });
    
    // Validate form before submitting
    if (!validateForm()) {
      return;
    }
    
    setStatus('loading');

    try {
      emailjs.init('IblyrGZrui7lX-4DY');
      
      const result = await emailjs.send(
        'service_s62yzrs',
        'template_msd8aco',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Smark Solutions',
        }
      );

      console.log('Email sent successfully:', result);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setAlerts({ name: '', email: '', phone: '' });
      setShowAlerts({ name: false, email: false, phone: false });
      setTouched({ name: false, email: false, phone: false });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Your Name"
          />
          {showAlerts.name && alerts.name && (
            <div className="mt-2 flex items-start gap-2 text-amber-600 dark:text-amber-400 text-sm">
              <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>{alerts.name}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="your.email@example.com"
          />
          {showAlerts.email && alerts.email && (
            <div className="mt-2 flex items-start gap-2 text-amber-600 dark:text-amber-400 text-sm">
              <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>{alerts.email}</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="+91 12345 67890"
          />
          {showAlerts.phone && alerts.phone && (
            <div className="mt-2 flex items-start gap-2 text-amber-600 dark:text-amber-400 text-sm">
              <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>{alerts.phone}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Subject"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
          placeholder="Your message here..."
        />
      </div>

      {status === 'success' && (
        <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 px-4 py-3 rounded-lg">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 px-4 py-3 rounded-lg">
          Failed to send message. Please try again or contact us directly.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white"
      >
        <Send className="h-5 w-5 mr-2" />
        {status === 'loading' ? 'Sending...' : 'Connect With Us'}
      </Button>
    </form>
  );
}