import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("❌ Please fill in all fields");
      return;
    }

    setStatus("✅ Message sent! We'll get back to you soon.");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - INFO */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-600">
            Have questions about your order, products, or anything else? 
            Our team is here to help.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">📍 Address</h3>
              <p className="text-gray-600">123 Market Street, New York, NY</p>
            </div>

            <div>
              <h3 className="font-semibold">📧 Email</h3>
              <p className="text-gray-600">support@shop.com</p>
            </div>

            <div>
              <h3 className="font-semibold">📞 Phone</h3>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
          </div>

          {/* Fake Map (visual only) */}
          <div className="w-full h-60 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600">
            Map Placeholder
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Send us a message
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
          />

          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="w-full p-3 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-black outline-none"
          />

          {status && (
            <p className="text-sm">{status}</p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;




