import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare, Users, Briefcase, Eye } from 'lucide-react';
import { useState } from 'react';
import InteractiveCard from '../components/InteractiveCard';

const Contact = () => {
  const [contactType, setContactType] = useState<string>('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const contactOptions = [
    { id: 'automate', label: 'I want to automate something', icon: MessageSquare },
    { id: 'partnership', label: "Let's talk partnerships", icon: Users },
    { id: 'work', label: 'I want to work with you', icon: Briefcase },
    { id: 'browse', label: 'Just browsing — hi!', icon: Eye }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = contactType === 'automate' ? 'Automation Inquiry' :
                   contactType === 'partnership' ? 'Partnership Discussion' :
                   contactType === 'work' ? 'Career Opportunity' :
                   contactType === 'browse' ? 'General Inquiry' :
                   'Contact Form Submission';
    
    const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:careers@AboveCloud9.AI?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white to-yellow-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <InteractiveCard intensity={0.6}>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 border-2 border-blue-300 text-blue-800 text-lg font-bold rounded-full shadow-medium mb-8 transition-colors duration-300">
                <Mail className="w-6 h-6 mr-3 text-blue-600" />
                GET IN TOUCH
              </div>
            </InteractiveCard>
            
            <InteractiveCard intensity={0.4}>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight transition-colors duration-300">
                Let's Start a <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Conversation</span>
              </h1>
            </InteractiveCard>
            
            <InteractiveCard intensity={0.3}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
                Ready to transform your business with AI? Have a question about our work? 
                We'd love to hear from you and explore how we can help.
              </p>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="animate-fade-in-fast animation-delay-200">
              <InteractiveCard intensity={0.4}>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
              </InteractiveCard>
              
              <div className="space-y-8 mb-12">
                {[
                  { 
                    icon: Mail, 
                    label: 'Email', 
                    value: 'careers@AboveCloud9.AI',
                    href: 'mailto:careers@AboveCloud9.AI'
                  },
                  { 
                    icon: Phone, 
                    label: 'Phone', 
                    value: '+91 9003578010',
                    href: 'tel:+919003578010'
                  },
                  { 
                    icon: MapPin, 
                    label: 'Location', 
                    value: `1166/2A1, Kurumbapalayam Road, Kalapatti, Coimbatore South, Coimbatore- 641048, Tamil Nadu`,
                    href: null
                  }
                ].map((item, index) => (
                  <InteractiveCard key={index} intensity={0.6}>
                    <div className="flex items-start space-x-4 group">
                      <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-all duration-200 flex-shrink-0">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-gray-900 mb-2">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 leading-relaxed"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 leading-relaxed">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </InteractiveCard>
                ))}
              </div>

              {/* Office Hours */}
              <InteractiveCard intensity={0.5}>
                <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Office Hours</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM IST</p>
                    <p><span className="font-medium">Saturday:</span> 10:00 AM - 2:00 PM IST</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </div>
              </InteractiveCard>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-fast animation-delay-300">
              <InteractiveCard intensity={0.7}>
                <div className="bg-white/80 backdrop-blur-md p-8 border-2 border-gray-200/50 shadow-lg rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                  
                  {/* Contact Type Selection */}
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-gray-700 mb-4">What do you want to talk about?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {contactOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setContactType(option.id)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 text-left ${
                            contactType === option.id
                              ? 'bg-yellow-100 border-yellow-400 shadow-yellow-lg'
                              : 'bg-white border-gray-200 hover:border-yellow-300 hover:shadow-medium'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              contactType === option.id
                                ? 'border-yellow-500 bg-yellow-500'
                                : 'border-gray-300'
                            }`}>
                              {contactType === option.id && (
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              )}
                            </div>
                            <option.icon className={`w-4 h-4 ${
                              contactType === option.id ? 'text-yellow-600' : 'text-gray-500'
                            }`} />
                            <span className={`text-sm font-medium ${
                              contactType === option.id ? 'text-yellow-800' : 'text-gray-700'
                            }`}>
                              {option.label}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 transition-all duration-200"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 transition-all duration-200"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 transition-all duration-200"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 transition-all duration-200 resize-none"
                        placeholder="Tell us about your project or question..."
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center group hover:scale-105 hover:shadow-lg"
                    >
                      Send Message
                      <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </form>
                </div>
              </InteractiveCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;