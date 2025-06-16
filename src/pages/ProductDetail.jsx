import React from 'react';
import AboutHeader from '../components/AboutHeader';
import DetailProductContent from '../components/DetailProductContent';
import ProductTabs from '../components/ProductTabs';
import ProductCard from '../components/ProductCard';


const ProductsDetails = () => {
  return (
    <>
    <AboutHeader title={'Détails du produit'}/>
    <DetailProductContent />
    <ProductTabs />
    <ProductCard title={'Produits similaires'}/>
    </>
  );
};

export default ProductsDetails;