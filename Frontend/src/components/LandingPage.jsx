import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  PieChart, 
  Award, 
  ChevronRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Login from './Login';

const LandingPage = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: Users,
      title: "Student Enrollment",
      description: "Teachers can easily enroll and manage their students, creating organized classroom environments for effective learning.", 
      image: "/photos/Student_Endroll.jpg"  
    },
    {
      icon: BookOpen,
      title: "Smart Quiz Creation",
      description: "Create customized quizzes with chapter-wise questions and difficulty levels to match your curriculum requirements.",
      image: "/photos/Default_Test.png"
    },
    {
      icon: Award,
      title: "Student Quiz Attempts",
      description: "Students can attempt quizzes in a user-friendly interface with real-time progress tracking and immediate feedback.",
      image: "/photos/test.png"
    },
    {
      icon: PieChart,
      title: "Performance Analytics",
      description: "Comprehensive dashboards provide detailed insights into student performance, identifying strengths and areas for improvement.",
      image: "/photos/Dashboard.png"
    }
  ];

  const teamMembers = [
    {
      name: "Smit Bhatiya",
      role: "Full Stack Developer",
      description: "Led the project, integrated frontend and backend systems",
      image: "/photos/smit3.jpg"
    }
  ];
  
  if (showLogin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 animate-fade-in">
        <div className="w-full max-w-md">
          <button
            onClick={() => setShowLogin(false)}
            className="mb-4 text-white hover:text-blue-300 transition-all duration-300 flex items-center gap-2 hover:translate-x-1"
          >
            ← Back to Home
          </button>
          <Login onLogin={onLogin} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm transition-all duration-300 animate-slide-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">QuizMaster</span>
            </div>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Login</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Transform Learning with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x"> Smart Quizzes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-300">
              Empower educators and students with an intelligent quiz management system that adapts to learning needs, tracks progress, and provides actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <button
                onClick={() => setShowLogin(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center group hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Get Started <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Everything you need to create, manage, and analyze educational assessments
            </p>
          </div>
          
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 animate-fade-in-up group ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-1 space-y-6 transform transition-all duration-500 group-hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    {feature.description}
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 flex items-center gap-2 group/btn hover:translate-x-1">
                    Learn More <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
                <div className="flex-1 transform transition-all duration-500 group-hover:-translate-x-2">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developed By Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Developed By</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">
              The passionate developer behind QuizMaster
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 flex items-center gap-6 border border-gray-100 group hover:-translate-y-2 animate-fade-in-up w-full md:w-2/3"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                />

                {/* Info */}
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-blue-600">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2 transition-colors duration-300 group-hover:text-purple-600">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8 relative z-10">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4 group">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold transition-colors duration-300 group-hover:text-blue-400">QuizMaster</span>
              </div>
              <p className="text-gray-400">
                Transforming education through intelligent quiz management and analytics.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Support</a></li>
              </ul>
            </div>

            <div className="animate-fade-in-up animation-delay-400">
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Cookie Policy</a></li>
              </ul>
            </div>

            <div className="animate-fade-in-up animation-delay-600">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group">
                  <Mail className="w-4 h-4" />
                  <span>bhatiyasmit2004@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group">
                  <Phone className="w-4 h-4" />
                  <span>+91 9054428844</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group">
                  <MapPin className="w-4 h-4" />
                  <span>Parul University ,Vadodara ,Gujrat</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center relative z-10 animate-fade-in-up animation-delay-800">
            <p className="text-gray-400 text-sm">
              © 2025 QuizMaster. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://www.instagram.com/_imsmitbhatiya_?igsh=bnBwenp2cmNqNjFk" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/_imsmitbhatiya_?igsh=bnBwenp2cmNqNjFk" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/bhatiya-smit-bb1212282/" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
