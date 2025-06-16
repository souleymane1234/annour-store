import React from 'react';
import { ArrowUpRight, Users, Target } from 'lucide-react';

function AboutContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                à propos de nous
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                CONSEIL DE QUALITÉ POUR DES AFFAIRES{' '}
                <span className="text-purple-600">SÉCURISÉES</span>.{' '}
                <span className="block mt-2">
                  NOUS AVONS 32 ANS D'EXPÉRIENCE.
                </span>
              </h1>
            </div>

            {/* Experience Counter */}
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform duration-300 animate-bounce">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-5xl font-bold">29</span>
                  <ArrowUpRight className="w-6 h-6 opacity-80" />
                </div>
                <p className="text-pink-100 font-medium text-sm">
                  Années d'expérience
                </p>
              </div>

              <div className="flex-1 space-y-4">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 underline decoration-2 underline-offset-4">
                    Mission et vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur elit adipiscing,{' '}
                    <span className="font-semibold text-gray-900">
                      sed do eiusmod tempor incididunt
                    </span>{' '}
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional business consultation"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-gray-600 text-sm">Clients satisfaits</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-pink-100 p-3 rounded-xl">
                  <Target className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">98%</p>
                  <p className="text-gray-600 text-sm">Taux de réussite</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutContent;