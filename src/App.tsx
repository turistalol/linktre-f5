import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Globe, 
  BarChart3, 
  Target, 
  TrendingUp,
  Users,
  Calendar
} from 'lucide-react';

function App() {
  const links = [
    { 
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Performance Marketing',
      description: 'Data-driven campaigns that deliver results',
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Paid Social Advertising',
      description: 'Strategic social media campaigns',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Search Engine Marketing',
      description: 'Dominate search results with PPC',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Audience Targeting',
      description: 'Reach your ideal customers',
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f7] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg"></div>

      {/* Main Content */}
      <div className="relative max-w-[600px] mx-auto px-4 py-12 min-h-screen flex flex-col items-center">
        {/* Logo */}
        <div className="w-24 h-24 bg-[#323B92] rounded-2xl shadow-lg flex items-center justify-center mb-8">
          <Globe className="w-12 h-12 text-white" />
        </div>

        {/* Header */}
        <h1 className="text-3xl font-bold text-[#323B92] mb-2 text-center">
          Digital Traffic Masters
        </h1>
        <p className="text-gray-600 mb-12 text-center max-w-md">
          Transforming clicks into customers with data-driven paid traffic strategies
        </p>

        {/* Links */}
        <div className="w-full space-y-4 mb-12">
          {links.map((link, index) => (
            <button 
              key={index}
              className="link-button flex items-center group"
            >
              <div className="mr-4 text-[#323B92]">
                {link.icon}
              </div>
              <div className="text-left">
                <div className="font-semibold text-[#323B92]">{link.title}</div>
                <div className="text-sm text-gray-500">{link.description}</div>
              </div>
            </button>
          ))}

          {/* CTA Button */}
          <button className="w-full px-6 py-4 rounded-xl transition-all duration-300 
                           bg-[#323B92] text-white font-semibold shadow-lg 
                           hover:shadow-xl hover:translate-y-[-2px]">
            <Calendar className="w-5 h-5 inline-block mr-2" />
            Schedule a Consultation
          </button>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-8">
          {[
            { Icon: Facebook, href: '#' },
            { Icon: Instagram, href: '#' },
            { Icon: Twitter, href: '#' },
            { Icon: Linkedin, href: '#' },
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="social-icon text-[#323B92] hover:text-[#323B92]/80"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500">
          <p>© 2024 Digital Traffic Masters. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-[#323B92]">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#323B92]">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;