import React from 'react';
import ProductCard from '../components/ProductCard';
import HeroSlider from '../components/HeroSlider';
import InfoFeatures from '../components/InfoFeatures';

const Products: React.FC = () => {
  return (
    <>
    <HeroSlider />
    <ProductCard title={'Tout nos produits'}/>
    <InfoFeatures />
    </>
  );
};

export default Products;