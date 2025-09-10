import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // nomor WA kamu (pakai format internasional, tanpa 0 di depan, contoh: 6281234567890)
  const phoneNumber = "6282183074992";

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Buat pesan
    const text = `Halo, saya ${name} %0Aemail: ${email} %0A%0APesan : ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    // Redirect ke WhatsApp
    window.open(url, "_blank");
  };

  return (
    <section className="bg-gray-900 text-white py-20 px-6" id="contact">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400">
          Chat langsung ke WhatsApp saya, isi form di bawah 👇
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-left mb-2 font-medium">Name</label>
            <div className="relative">
              <i className="fas fa-user absolute left-3 top-3 text-gray-400"></i>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-left mb-2 font-medium">Email</label>
            <div className="relative">
              <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-left mb-2 font-medium">Message</label>
            <div className="relative">
              <i className="fas fa-comment-dots absolute left-3 top-3 text-gray-400"></i>
              <textarea
                placeholder="Write your message..."
                rows="5"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-400 focus:outline-none"
              ></textarea>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-600 transition transform hover:scale-105"
          >
            <i className="fab fa-whatsapp mr-2"></i> Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
