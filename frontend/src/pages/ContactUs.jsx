import React, { useState } from "react";

function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
  };

  return (
    <section className="min-h-[92vh] flex flex-col justify-center bg-gradient-to-b px-3 sm:px-10 overflow-hidden from-blue-50 via-[#fffbee] to-indigo-100 pt-6">
      <main className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center text-base text-[#181c5d] bg-white/80 backdrop-blur-xl border border-indigo-200 rounded-3xl p-10 shadow-2xl w-full"
        >
          <p className="text-xs bg-[#181c5d]/10 text-[#181c5d] font-semibold px-4 py-1 rounded-full tracking-wide mb-2">
            Contact SmartSplit Team
          </p>
          <h1 className="text-4xl font-extrabold py-3 text-center text-[#181c5d] drop-shadow-sm">
            Reach Out to SmartSplit
          </h1>
          <p className="text-base text-indigo-700 pb-8 text-center max-w-md">
            Have a question, feedback, or need help with splitting your next bill? Fill out the form below or email us at
            <a
              href="mailto:support@smartsplit.com"
              className="text-[#181c5d] font-semibold hover:underline ml-1"
            >
              support@smartsplit.com
            </a>
            .
          </p>

          <div className="max-w-96 w-full px-2">
            <label htmlFor="name" className="font-semibold">
              Your Name
            </label>
            <div className="flex items-center mt-2 mb-5 h-12 pl-3 border border-indigo-200 rounded-full focus-within:ring-2 focus-within:ring-[#181c5d] transition-all overflow-hidden bg-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0"
                  fill="#181c5d"
                />
              </svg>
              <input
                type="text"
                name="name"
                className="h-full px-2 w-full outline-none bg-transparent text-[#181c5d]"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <label htmlFor="email" className="font-semibold mt-4">
              Email Address
            </label>
            <div className="flex items-center mt-2 mb-5 h-12 pl-3 border border-indigo-200 rounded-full focus-within:ring-2 focus-within:ring-[#181c5d] transition-all overflow-hidden bg-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z"
                  fill="#181c5d"
                />
              </svg>
              <input
                type="email"
                name="email"
                className="h-full px-2 w-full outline-none bg-transparent text-[#181c5d]"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <label htmlFor="message" className="font-semibold mt-4">
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              className="w-full mt-2 p-3 bg-white border border-indigo-200 rounded-xl resize-none outline-none focus:ring-2 focus-within:ring-[#181c5d] transition-all text-[#181c5d]"
              placeholder="How can we help you with SmartSplit?"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 mt-6 bg-[#181c5d] hover:bg-indigo-700 text-white py-3 w-full rounded-full font-bold text-lg shadow transition"
            >
              Send Message
              <svg
                className="mt-0.5"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
                  fill="#fff"
                />
              </svg>
            </button>
            {submitted && (
              <p className="text-green-600 text-center mt-4 font-semibold">
                Thank you for contacting SmartSplit! We'll get back to you soon.
              </p>
            )}
          </div>
        </form>
      </main>
    </section>
  );
}

export default ContactUs;
