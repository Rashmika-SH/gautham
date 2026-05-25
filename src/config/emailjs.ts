// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const emailjsConfig = {
  // Your EmailJS Service ID (from EmailJS dashboard)
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_lq4bhgl',
  
  // Your EmailJS Template ID (from EmailJS dashboard)
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_9fb7dhg',
  
  // Your EmailJS Public Key (from EmailJS dashboard)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'P43JHS26VziQhLuO5',
  
  // The email address where you want to receive messages
  toEmail: 'mastergautham2006@gmail.com'
};