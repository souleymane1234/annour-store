import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    text: `« Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. »`,
    author: "Mattie Warner",
    role: "Fondateur et PDG",
  },
  {
    text: `« Nous sommes extrêmement satisfaits du service fourni. La réactivité et le professionnalisme sont exemplaires. »`,
    author: "Julie Moreau",
    role: "Directrice Marketing",
  },
  {
    text: `« Une entreprise sur laquelle on peut compter. Je recommande vivement pour vos projets. »`,
    author: "Karim Diallo",
    role: "Chef de Projet IT",
  },
];

export default function TestimonialSwiper() {
  return (
    <div className="bg-white py-16 px-4 md:px-10">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          TÉMOIGNAGES INSPIRANTS DE <br /> CLIENTS SATISFAITS
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative w-fit mx-auto -mt-20">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="client"
            className="rounded-xl w-92 object-cover"
          />
          <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-pink-500 rounded-br-full border-t-transparent border-l-transparent" />
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3000 }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            loop
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-pink-50 p-6 md:p-10 rounded-xl min-h-[240px] relative">
                  <p className="italic text-gray-700 text-lg leading-relaxed">{t.text}</p>
                  <div className="mt-6">
                    <h4 className="font-bold text-gray-900 text-lg">{t.author}</h4>
                    <p className="text-pink-600 font-medium">{t.role}</p>
                  </div>
                  <Quote
                    size={64}
                    className="absolute bottom-4 right-4 text-pink-300 opacity-30"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flèches personnalisées */}
          <div className="flex gap-4 mt-6">
            <button className="swiper-button-prev-custom w-24 h-24 flex items-center justify-center border-2 border-pink-200 rounded-full hover:bg-pink-100 transition">
              <ArrowLeft className="text-pink-600" />
            </button>
            <button className="swiper-button-next-custom w-24 h-24 flex items-center justify-center border-2 border-pink-200 rounded-full hover:bg-pink-100 transition">
              <ArrowRight className="text-pink-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
