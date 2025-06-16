import React, { useState } from 'react';
import { ShoppingCart, Star, X } from 'lucide-react';

const DetailProductContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    quantity: 1
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value, 10) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!formData.name || !formData.phone || !formData.address || !formData.quantity) {
      alert("Merci de remplir tous les champs !");
      return;
    }
  
    console.log("Commande envoyée :", formData);
    setIsSuccess(true);
    // Envoi vers le backend ici si besoin
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* CONTENU DU PRODUIT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-4">
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <img src="/img/kindikay.jpg" alt="Produit" className="w-full h-96 object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Woussoulan</h1>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-2xl font-bold text-gray-900">7500 Fcfa</span>
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">Vente</span>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">(4.8)</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Aspernatur earum...
            </p>

            <div className="flex space-x-4">
              <button
                onClick={openModal}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>COMMANDER MAINTENANT</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL FORMULAIRE */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md transform transition-all duration-300 scale-95 animate-fade-in-up shadow-2xl relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition"
            >
              <X className="w-6 h-6" />
            </button>
            {isSuccess ? (
                <div className="text-center space-y-4 py-8">
                    <h3 className="text-green-600 text-lg font-semibold">Commande enregistrée avec succès 🎉</h3>
                    <p className="text-gray-700">
                    Notre service commercial vous contactera dans les plus brefs délais.<br />
                    <strong>Annour Store</strong> vous remercie pour votre confiance !
                    </p>
                    <button
                    onClick={() => {
                        setIsSuccess(false);
                        setIsModalOpen(false);
                        setFormData({ name: '', phone: '', address: '', quantity: 1 });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                    >
                    Fermer
                    </button>
                </div>
            ) : (
                <>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Formulaire de commande</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Nom</label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Entrez votre nom"
                        required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Téléphone</label>
                        <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Ex: 0700000000"
                        required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Adresse</label>
                        <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Adresse de livraison"
                        required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Quantité</label>
                        <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        min={1}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                        />
                    </div>

                    <div className="flex justify-end space-x-3 pt-2">
                        <button type="button" onClick={closeModal} className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">Annuler</button>
                        <button type="submit" className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">Commander</button>
                    </div>
                    </form>
                </>
            )}  
          </div>
        </div>
      )}

      {/* Animation CSS */}
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default DetailProductContent;
