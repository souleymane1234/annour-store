import { Box, Grid } from '@mui/material';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <Box
      component="footer"
      className="bg-[#080424] text-white px-6 py-16"
    >
      <Grid container spacing={4}>
        {/* Logo + description + social */}
        <Grid size={{ xs: 12, md: 6 }} item xs={12} md={4} textAlign={{ xs: 'center', md: 'left' }}>
          <div className="flex items-center gap-2 mb-4">
            {/* <div className="bg-gradient-to-r from-pink-500 to-purple-700 w-10 h-10 rounded-full" /> */}
            <h1 className="text-2xl font-bold">LOGO</h1>
          </div>
          <p className="text-sm text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaTiktok, FaTwitter].map((Icon, idx) => (
              <div key={idx} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#080424] hover:bg-pink-500 hover:text-white transition cursor-pointer">
                <Icon size={18} />
              </div>
            ))}
          </div>
        </Grid>


        {/* Liens utiles */}
        <Grid size={{ xs: 12, sm: 6, md: 6 }} textAlign={{ xs: 'center', md: 'left' }}>
        <h4 className="text-lg font-bold mb-4 underline underline-offset-4">ABONNE-VOUS À LA NEWSLETTER :</h4>
          <input
            type="email"
            placeholder="Entrez votre email :"
            className="w-full p-3 rounded-md text-black mb-4 focus:outline-none bg-white"
          />
          <button className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-blue-700 to-pink-500 hover:opacity-90 transition">
            Abonnez-vous maintenant
          </button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
