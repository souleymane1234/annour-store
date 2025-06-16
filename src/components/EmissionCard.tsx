import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CalendarDays } from "lucide-react";

const EmissionCards = [
  {
    id: 1,
    title: 'URBAN TALENT',
    badge: 'Emission',
    urlVideo: '/video/video.mp4',
    urlPoster: '/img/zik.jpg',
    dateDebut: '2025-02-02',
    dateFin: '2025-07-10',
    description: '« URBAN TALENT» est un concept qui permet de détecter, révéler et faire la promotion des talents dan...',
  },
  {
    id: 2,
    title: 'KIDS TALENT',
    badge: 'Emission',
    urlVideo: '/video/video.mp4',
    urlPoster: '/img/zik.jpg',
    dateDebut: '2025-02-02',
    dateFin: '2025-07-10',
    description: '« KIDS TALENT» est un concept qui permet de détecter, révéler et faire la promotion des talents dan...',
  },
  {
    id: 3,
    title: 'GOSPEL TALENT',
    badge: 'Emission',
    urlVideo: '/video/video.mp4',
    urlPoster: '/img/zik.jpg',
    dateDebut: '2025-02-02',
    dateFin: '2025-07-10',
    description: '« GOSPEL TALENT» est un concept qui permet de détecter, révéler et faire la promotion des talents dan...',
  },
];

function EmissionCard({ titleComponent, titleButton }) {

  return (
<>
  <Typography variant="h4" align="center" gutterBottom fontWeight={"bold"} sx={{ mt: 4, mb: 2 }}>
  { titleComponent }
  </Typography>

  <Box
    sx={{
      width: '100%',
      maxWidth: '1200px', // limite la largeur pour éviter que ce soit trop large
      mx: 'auto',          // centre horizontalement
      my: 4,               // marge verticale
      p: 2,                // padding interne
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: 3,              // espace entre les cartes
    }}
  >
    {EmissionCards.map((card, index) => (
      <Card key={card.id}>
        <CardActionArea
        //   onClick={() => setSelectedCard(index)}
          sx={{
            height: '100%',
          }}
        >
          <div className="max-w-sm rounded-xl shadow-lg overflow-hidden bg-white">
            <div className="relative">
              <video
                className="w-full h-48 object-cover"
                src={card.urlVideo}
                poster={card.urlPoster}
                controls
              ></video>
              <div className="absolute top-0 right-0">
                <span className="bg-gradient-to-b from-yellow-400 to-orange-500 text-black font-bold px-2 py-1 text-sm rounded-t-lg rounded-bl-lg shadow">
                {card.badge}
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white text-center py-2 font-bold text-xl">
              {card.title}
            </div>

            <div className="px-2 py-2 text-center">
              <p>{card.description}</p>
              <button className="mt-4 w-full bg-gradient-to-r from-fuchsia-700 to-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
              <Link to={`/emissions/detail`} style={{ color: 'white', textDecoration: 'none' }}>
              { titleButton }
              </Link>
              </button>
            </div>
          </div>
        </CardActionArea>
      </Card>
    ))}
  </Box>
</>

  );
}

export default EmissionCard;
