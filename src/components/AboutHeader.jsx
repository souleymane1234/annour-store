import React from 'react';
import Box from '@mui/material/Box';

const AboutHeader = ({title}) => {
  return (
    <Box    
    className="relative h-[400px] bg-cover bg-center"
    sx={{
      backgroundImage: 'url(/img/bg1.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
              {/* Overlay sombre */}

    {/* Contenu texte */}
    <div className="relative z-10 h-full flex flex-col justify-center pl-12 text-white">
    <h1 className="text-5xl font-bold mb-4">{title}</h1>
    <p className="text-lg">accueil // {title}</p>
    </div>
    </Box>

  );
};

export default AboutHeader;
