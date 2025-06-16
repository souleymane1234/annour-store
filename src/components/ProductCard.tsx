import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';

const productCards = [
  {
    id: 1,
    title: 'WOUSSOULAN KINDIKAY',
    badge: 'TOP',
    catégorie: "Maison",
    urlVideo: '/video/video.mp4',
    urlPoster: '/img/kindikay.jpg',
    dateDebut: '2025-02-02',
    dateFin: '2025-07-10',
    description: '« GOSPEL TALENT » est un concept qui permet de détecter, révéler et faire la promotion des talents da...',
  },
  {
    id: 2,
    title: 'WOUSSOULAN DOUFOUR',
    badge: 'TOP',
    catégorie: "Maison",
    urlVideo: '/video/video.mp4',
    urlPoster: '/img/doufour.jpg',
    dateDebut: '2025-02-02',
    dateFin: '2025-07-10',
    description: '« GOSPEL TALENT » est un concept qui permet de détecter, révéler et faire la promotion des talents da...',
  },
  {
    id: 3,
    title: 'WOUSSOULAN SANTAL',
    badge: 'TOP',
    catégorie: "Maison",
    urlVideo: '/video/video.mp4',
    urlPoster: '/img/santal.jpg',
    dateDebut: '2025-02-02',
    dateFin: '2025-07-10',
    description: '« GOSPEL TALENT » est un concept qui permet de détecter, révéler et faire la promotion des talents da...',
  },
  {
    id: 4,
    title: "BRULEUR D'ENSCENS",
    badge: 'TOP',
    catégorie: "Maison",
    urlVideo: '/video/video.mp4',
    urlPoster: '/img/enscens-removebg-preview.png',
    dateDebut: '2025-02-02',
    dateFin: '2025-07-10',
    description: '« GOSPEL TALENT » est un concept qui permet de détecter, révéler et faire la promotion des talents da...',
  },
];

function ProductCard({title}) {
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
        {title}
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          my: 4,
          p: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 3,
        }}
      >
        {productCards.map((card) => (
          <Card key={card.id} className="relative rounded-xl shadow-md overflow-hidden bg-white group">
            <Link to={`/products/detail`}>
            <CardActionArea>
              <div className="w-full">
                {/* Image */}
                <div className="relative">
                  <img src={card.urlPoster} alt="" className="w-full h-80 object-cover" />
                  <div className="absolute top-0 right-0">
                    <span className="bg-pink-600 text-white font-bold text-sm px-2 py-1 rounded-bl-md shadow">
                      {card.badge}
                    </span>
                  </div>
                </div>

                {/* Bouton Commander (visible au hover) */}
                <div className="absolute bottom-32 left-0 w-full flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition duration-300 z-10">
                  <button className="bg-red-500 text-pink-700 font-bold px-3 py-2 text-sm rounded-md shadow-md hover:scale-105 transition-transform">
                    Commander
                  </button>
                </div>

                {/* Nom et prix */}
                <div className="px-2 py-2 border-b border-gray-300">
                  <h3 className="text-base font-bold text-gray-800">{card.title}</h3>
                  <span className="text-pink-600 font-bold block mt-1">7500 Fcfa</span>
                </div>

                {/* Catégorie */}
                <div className="px-2 py-2">
                  <span className="text-sm text-start text-gray-700">{card.catégorie}</span>
                </div>
              </div>
            </CardActionArea>
            </Link>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default ProductCard;
