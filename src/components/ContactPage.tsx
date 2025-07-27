import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send, User, MessageSquare, Calendar, CheckCircle } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    deadline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f1419] to-[#1a1a2e] relative overflow-hidden">
      {/* Editing Symbols Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Timeline symbols */}
        <div className="absolute top-[15%] left-[30%] text-blue-400/20 text-6xl font-mono transform rotate-12">
          ⏱️
        </div>
        <div className="absolute top-[25%] right-[15%] text-purple-400/20 text-5xl transform -rotate-6">
          🎬
        </div>
        <div className="absolute top-[20%] left-[70%] text-purple-300/20 text-5xl transform -rotate-12">
          🎞️
        </div>
        <div className="absolute top-[70%] right-[25%] text-blue-400/20 text-6xl transform rotate-6">
          📹
        </div>
        <div className="absolute top-[80%] left-[70%] text-blue-300/20 text-5xl transform -rotate-15">
          🎨
        </div>
        <div className="absolute top-[10%] right-[80%] text-purple-300/20 text-4xl transform rotate-20">
          📽️
        </div>
        
        {/* Text-based editing symbols */}
        <div className="absolute top-[20%] left-[75%] text-blue-400/15 text-2xl font-mono transform rotate-12">
          [CUT]
        </div>
        <div className="absolute top-[50%] right-[80%] text-purple-400/15 text-xl font-mono transform -rotate-8">
          FADE IN
        </div>
        <div className="absolute top-[65%] left-[15%] text-blue-300/15 text-2xl font-mono transform rotate-15">
          EDIT
        </div>
        <div className="absolute top-[30%] right-[30%] text-purple-300/15 text-xl font-mono transform -rotate-10">
          RENDER
        </div>
        <div className="absolute top-[85%] right-[70%] text-blue-400/15 text-2xl font-mono transform rotate-8">
          SYNC
        </div>
        
        {/* Abstract editing shapes */}
        <div className="absolute top-[45%] left-[5%] w-16 h-2 bg-blue-400/10 transform rotate-45 rounded-full"></div>
        <div className="absolute top-[25%] right-[5%] w-12 h-12 border-2 border-purple-400/10 transform rotate-12 rounded-lg"></div>
        <div className="absolute top-[75%] left-[40%] w-8 h-20 bg-gradient-to-b from-blue-400/10 to-purple-400/10 transform -rotate-20 rounded-full"></div>
        <div className="absolute top-[55%] right-[10%] w-20 h-3 bg-blue-300/10 transform rotate-30 rounded-full"></div>
        
        {/* Floating animation for some elements */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(var(--rotation)); }
            50% { transform: translateY(-10px) rotate(var(--rotation)); }
          }
          .float-animation {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
        
        <div className="absolute top-[15%] left-[60%] text-blue-400/20 text-5xl float-animation" style={{'--rotation': '15deg'} as React.CSSProperties}>
          🎪
        </div>
        <div className="absolute top-[55%] left-[80%] text-purple-400/20 text-4xl float-animation" style={{'--rotation': '-10deg'} as React.CSSProperties}>
          🎯
        </div>
      </div>
      
      {/* Sophisticated Grid Background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contactGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="0.5"/>
            </pattern>
            <filter id="contactGlow">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactGrid)" filter="url(#contactGlow)" opacity="0.5" />
        </svg>
      </div>

      {/* Deep Blue Blur Orbs */}
      <div className="absolute top-1/4 left-[85%] w-80 h-80 bg-[#1e40af]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-[85%] w-96 h-96 bg-[#1e3a8a]/25 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#3730a3]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#7c3aed]/25 rounded-full blur-3xl"></div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium text-glow-white">Back to Portfolio</span>
        </button>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight text-glow-white">
                Let's Create
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-glow-purple">
                  Something Amazing
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg text-glow-gray">
                Ready to bring your vision to life? I'd love to hear about your project and discuss how we can create compelling visual stories together.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl bg-gradient-to-br from-[#1e3a8a]/20 via-[#1e40af]/15 to-[#3730a3]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-glow-white">Email</h3>
                    <p className="text-gray-300 text-glow-gray">aamirnaqvi03@example.com</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl bg-gradient-to-br from-[#1e3a8a]/20 via-[#7c3aed]/15 to-[#3730a3]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-glow-white">Phone</h3>
                    <p className="text-gray-300 text-glow-gray">+91 9760902522</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl bg-gradient-to-br from-[#1e3a8a]/20 via-[#1e40af]/15 to-[#7c3aed]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-glow-white">Location</h3>
                    <p className="text-gray-300 text-glow-gray">Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl bg-gradient-to-br from-[#1e3a8a]/20 via-[#1e40af]/15 to-[#3730a3]/20">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white text-glow-white">50+</div>
                  <div className="text-sm text-gray-300 mt-1 text-glow-gray">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white text-glow-white">5+</div>
                  <div className="text-sm text-gray-300 mt-1 text-glow-gray">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white text-glow-white">24h</div>
                  <div className="text-sm text-gray-300 mt-1 text-glow-gray">Response Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-[#1e3a8a]/20 via-[#1e40af]/15 to-[#3730a3]/20">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2 text-glow-white">Start Your Project</h2>
                  <p className="text-gray-300 text-glow-gray">Fill out the form below and I'll get back to you in less than 24 hours</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center space-x-2 text-glow-gray">
                      <User className="w-4 h-4" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-600/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center space-x-2 text-glow-gray">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-600/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center space-x-2 text-glow-gray">
                    <Phone className="w-4 h-4" />
                    <span>Phone (Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-600/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 text-glow-gray">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-600/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm text-white"
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="commercial">Commercial</option>
                      <option value="music-video">Music Video</option>
                      <option value="documentary">Documentary</option>
                      <option value="social-media">Social Media Content</option>
                      <option value="corporate">Corporate Video</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center space-x-2 text-glow-gray">
                      <Calendar className="w-4 h-4" />
                      <span>Deadline</span>
                    </label>
                    <select
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-600/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm text-white"
                      required
                    >
                      <option value="">Select deadline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-week">Within 1 week</option>
                      <option value="2-weeks">Within 2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 text-glow-gray">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-600/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm text-white"
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1k">Under $100</option>
                    <option value="1k-5k">$200 - $300</option>
                    <option value="5k-10k">$400 - $500</option>
                    <option value="10k-plus">$500+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center space-x-2 text-glow-gray">
                    <MessageSquare className="w-4 h-4" />
                    <span>Project Details</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-600/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project, vision, and any specific requirements..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-glow-white"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-glow-white">Message Sent!</h3>
                <p className="text-gray-300 mb-6 text-glow-gray">
                  Thank you for reaching out. I'll review your project details and get back to you in less than 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 text-glow-blue"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;