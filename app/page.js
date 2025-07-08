'use client';
import {
  FaPhone, FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaBuilding,
} from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1E1B2E] text-[#FFD700] p-4 flex flex-col items-center">
      
      {/* Header Image */}
      <div
        className="w-full h-115 bg-cover bg-center relative rounded-xl overflow-hidden"
        style={{ backgroundImage: `url('/samsi.jpeg')` }}
      >
        <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-[#1E1B2E] to-transparent"></div>
      </div>

      {/* Director Info */}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold tracking-wide">Basheer T</h1>
        <p className="text-gray-300 text-base">Managing Director</p>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {[
          { href: 'tel:+919895761916', icon: <FaPhone /> },
          { href: 'https://www.instagram.com/star_gold_and_diamonds?igsh=MXU3NDk5YjB3cGIxOA==', icon: <FaInstagram /> },
          { href: 'https://wa.me/919895761916', icon: <FaWhatsapp /> },
          { href: 'https://www.facebook.com/share/1BxTGRjEu8/?mibextid=wwXIfr', icon: <FaFacebook /> },
          { href: 'mailto:shashamsi44@gmail.com', icon: <FaEnvelope /> },
        ].map(({ href, icon }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Company Info */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold">STAR GOLD</h2>
        <p className="text-gray-300 text-base mt-1">Bullion Jewellery</p>
      </div>

      {/* About Section */}
      <div className="w-full max-w-md bg-[#2C2540] p-6 rounded-xl shadow-lg mt-6 text-center">
        <h3 className="text-xl font-bold mb-3">About Us</h3>
        <p className="text-gray-200 text-sm leading-relaxed">
          At Star Gold Jewellery, we specialize in premium-grade bullion gold products. Trusted by investors and collectors alike, our legacy is built on purity, transparency, and timeless value.
        </p>
      </div>

      {/* Product Grid */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4 mt-6">
        {[
          { heading: '995 BARS', image: 'https://kadirigold.com/images/product-img1.png' },
          { heading: '995 BARS', image: 'https://kadirigold.com/images/product-img2.png' },
          { heading: '9999 BARS', image: 'https://kadirigold.com/images/product-img3.png' },
          { heading: 'Gold Ornaments', image: 'https://kadirigold.com/images/product-img4.png' },
          { heading: 'GOLD COINS', image: 'https://kadirigold.com/images/product-img5.png' },
          { heading: 'Customized Gold', image: '/ringhd.png' }, // Replace with real image
          { heading: 'Old Gold Exchange', image: '/oldgold.png' } // Replace with real image
        ].map((item, index, array) => (
          <div
            key={index}
            className={`bg-[#2C2540] p-4 rounded-xl shadow-md text-center ${
              index === array.length - 1 && array.length % 2 !== 0 ? 'col-span-2 mx-auto w-full' : ''
            }`}
          >
            <img
              src={item.image}
              alt={item.heading}
              className="w-full h-28 object-cover rounded-lg mb-3"
            />
            <h4 className="text-lg font-semibold">{item.heading}</h4>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-md mt-6 space-y-4">
        <a
          href="tel:+919895761916"
          className="flex justify-between items-center bg-[#2C2540] text-white p-4 rounded-lg shadow-md hover:bg-[#3D3163] transition"
        >
          <div className="flex items-center space-x-4">
            <FaBuilding className="text-lg" />
            <span>Office No.</span>
          </div>
          <HiArrowNarrowRight />
        </a>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        <p>Powered by</p>
        <a
          href="https://www.ranzomtech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFD700] hover:underline"
        >
          www.ranzomtech.com
        </a>
      </div>

      {/* Styles */}
      <style jsx>{`
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          background-color: white;
          color: #1E1B2E;
          font-size: 20px;
          border: 2px solid #1E1B2E;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background-color: #FFD700;
          color: #1E1B2E;
        }
      `}</style>
    </div>
  );
}
