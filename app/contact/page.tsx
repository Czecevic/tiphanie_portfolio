"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { FooterBar } from "../components/FooterBar";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-4xl mx-auto w-full p-5 space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest font-heading">
          Me contacter
        </h1>
        <p className="text-base md:text-lg leading-relaxed max-w-2xl">
          Vous avez un projet UX/UI ou Product Design ? Envoyez-moi un message
          via le formulaire ci-dessous.
        </p>
      </header>

      <section className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
        {submitted ? (
          <div className="space-y-4 text-center py-6">
            <h2 className="text-2xl font-heading font-bold text-[#7e1114]">
              Message enregistré
            </h2>
            <p className="text-sm md:text-base text-gray-700 max-w-md mx-auto">
              Merci pour votre message ! Je vous répondrai dans les plus brefs
              délais.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="border-2 border-[#7e1114] text-[#7e1114] px-5 py-2 rounded-lg font-medium hover:bg-[#7e1114] hover:text-white transition-colors text-sm"
              >
                Envoyer un autre message
              </button>
              <Link
                href="/"
                className="bg-[#7e1114] text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
              >
                Retour à l’accueil
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-semibold mb-1.5"
              >
                Nom
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
                className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#7e1114]"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-semibold mb-1.5"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#7e1114]"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-semibold mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Parlez-moi de votre projet..."
                className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#7e1114]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#7e1114] text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm cursor-pointer"
            >
              Envoyer
            </button>
          </form>
        )}
      </section>

      <FooterBar />
    </div>
  );
}
