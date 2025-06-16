import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Truck size={32} strokeWidth={2.5} />,
    title: 'LIVRAISON',
    description: 'Livraison garantie en 24 heures pour toutes les commandes.',
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={2.5} />,
    title: 'Qualité',
    description: 'Des produits de qualité.',
  },
  {
    icon: <Headphones size={32} strokeWidth={2.5} />,
    title: 'Support',
    description: "Obtenez une assistance 24 heures sur 24, 7 jours sur 7, pour tous vos problèmes d'achat.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const iconVariant = {
  hidden: { rotate: -90, scale: 0 },
  show: {
    rotate: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

export default function InfoFeatures() {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md p-8 max-w-6xl mx-auto my-10 grid md:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {features.map((feat, index) => (
        <motion.div
          key={index}
          className="flex items-start gap-4 bg-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          variants={item}
        >
          <motion.div
            className="bg-blue-800 text-white rounded-xl p-4 relative"
            variants={iconVariant}
          >
            <div className="absolute top-2 left-0 h-4 w-1 rounded bg-pink-500" />
            <div className="absolute bottom-2 right-0 h-4 w-1 rounded bg-pink-500" />
            {feat.icon}
          </motion.div>
          <div>
            <h4 className="text-lg font-bold text-gray-900">{feat.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{feat.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
