import { FaWhatsapp, FaPhone } from "react-icons/fa"

const FloatingContactButtons = ({ whatsappNumber = "+919876543210", phoneNumber = "+919876543210" }) => {
  // Format the WhatsApp link with the provided number
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`

  // Format the phone link with the provided number
  const phoneLink = `tel:${phoneNumber.replace(/[^0-9]/g, "")}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Phone Button */}
      <a
        href={phoneLink}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#ff007F] text-white shadow-lg hover:bg-pink-700 transition-all duration-300 hover:scale-110"
        aria-label="Call us"
      >
        <FaPhone className="text-2xl" />
      </a>
    </div>
  )
}

export default FloatingContactButtons

