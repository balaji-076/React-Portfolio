import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 px-8 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact</h2>
      <div className="w-16 h-1 bg-blue-500 mb-6"></div>
      <p className="text-gray-600 mb-10">
        Feel free to reach out for collaborations, opportunities, or project inquiries.  
        I’m always open to discussing new ideas and innovative solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Contact Info + Map */}
        <div className="bg-white p-8 rounded-lg shadow">
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-600 text-sm">10/45, Cornation Street, Sivakasi, Tamil Nadu, India – 626189</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-blue-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Call Me</h4>
                <a href="tel:+919345086197" className="text-blue-600 hover:underline text-sm">+91 93450 86197</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Email Me</h4>
                <a href="mailto:balajics076@gmail.com" className="text-blue-600 hover:underline text-sm">balajics076@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full h-64">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31336.23003324569!2d77.78535655!3d9.44917085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06c4e97b9d9415%3A0x9fefb0c2d6d8a8e5!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border"
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow">
          <form
            action="https://formspree.io/f/xkgknlnb"
            method="POST"
            className="space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md p-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md p-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md p-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-md p-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              ></textarea>
            </div>

            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
