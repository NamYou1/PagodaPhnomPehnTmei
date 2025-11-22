import React from 'react';
import { Target, Users, Zap, Heart, ArrowRight } from 'lucide-react';

const Purpose = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Building blockchain infrastructure that empowers developers to create the decentralized future."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Fostering a collaborative ecosystem where innovation thrives and everyone can contribute."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology that makes Web3 accessible to everyone."
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Creating tools and solutions that make a real difference in how people build and interact on the blockchain."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
            Our Purpose
          </h1>
          <p className="text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of blockchain builders with tools, infrastructure, and community support
          </p>
        </div>

        {/* Main Purpose Statement */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
            <p className="text-xl text-white leading-relaxed mb-6">
              At Pagoda, we believe in a decentralized future where developers have the freedom to build without limitations. Our purpose is to provide the essential infrastructure, tools, and support that transform blockchain development from complex to accessible.
            </p>
            <p className="text-lg text-purple-200 leading-relaxed">
              We're not just building technology—we're building bridges between ideas and reality, between developers and opportunities, and between innovation and impact.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="bg-purple-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-lg rounded-2xl p-10 border border-purple-400/40">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Our Vision for the Future
            </h2>
            <p className="text-lg text-white leading-relaxed text-center mb-6">
              We envision a world where blockchain technology is as easy to use as the internet itself. Where developers can focus on building amazing experiences without worrying about infrastructure complexity. Where decentralization isn't just a buzzword—it's the foundation of how we build, share, and grow together.
            </p>
            <div className="flex justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2 group">
                Join Our Mission
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">10,000+</div>
            <div className="text-purple-200">Developers Empowered</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-purple-200">Countries Reached</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-purple-200">Possibilities Created</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;