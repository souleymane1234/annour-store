import React, { useState } from 'react';

interface TabContent {
  id: string;
  title: string;
  content: React.ReactNode;
}

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs: TabContent[] = [
    {
      id: 'description',
      title: 'Description',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Par opposition à l'utilisation de « Contenu ici, contenu ici », ce qui le fait ressembler à un anglais lisible. De nombreux packages de publication assistée par ordinateur et éditeurs de pages Web utilisent désormais Lorem Ipsum comme texte modèle par défaut, et une recherche de « lorem ipsum » découvrira de nombreux sites Web encore à leurs balbutiements. Diverses versions ont évolué au fil des ans, parfois par accident, parfois par humour délibérément injecté et autres. C'est un fait établi depuis longtemps qu'un lecteur sera distrait par le contenu lisible d'une page lorsqu'il regarde sa mise en page. Le but de l'utilisation de Lorem Ipsum est qu'il a une distribution plus ou moins normale des lettres
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis provident eius. Tenetur facilis, illo nesciunt numquam non, odit iure, quia recusandae deleniti nihil excepturi ?
          </p>
        </div>
      )
    },
    {
      id: 'video',
      title: 'VIDÉO',
      content: (
        <div className="space-y-6">
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Vidéo de présentation</h3>
            <p className="text-gray-600">Découvrez notre produit en action dans cette vidéo de démonstration complète.</p>
          </div>
        </div>
      )
    },
    {
      id: 'type',
      title: 'Type De Produit',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-semibold text-purple-900 mb-3">Catégorie</h3>
              <p className="text-purple-700">Mobilier de bureau</p>
            </div>
            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="font-semibold text-pink-900 mb-3">Matériaux</h3>
              <p className="text-pink-700">Bois naturel, métal</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-3">Dimensions</h3>
              <p className="text-blue-700">45 x 30 x 80 cm</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-3">Poids</h3>
              <p className="text-green-700">3.2 kg</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'shipping',
      title: 'Système De Livraison',
      content: (
        <div className="space-y-6">
          <div className="grid gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Livraison gratuite</h3>
                  <p className="text-gray-600">Pour toute commande supérieure à 5 produits</p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Livraison express</h3>
                  <p className="text-gray-600">Livraison en 24h ouvrées</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`transition-all duration-300 ${
                activeTab === tab.id
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute pointer-events-none'
              }`}
            >
              {activeTab === tab.id && (
                <div className="animate-fadeIn">
                  {tab.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;