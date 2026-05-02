"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, BadgeCheck } from "lucide-react";

export default function ClientProfile() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About the Proprietor
          </h2>
          <p className="text-muted-foreground mt-3">
            Leadership you can trust at Sevanadhara Home Care Services
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-3xl shadow-xl p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-primary/10">
              <img
                src="/images/profile.webp"
                alt="Proprietor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              SHIJO MATHEW ABRAHAM
            </h3>

            <p className="mt-3 text-muted-foreground leading-relaxed">
              Proprietor of{" "}
              <span className="font-medium text-foreground">
                Sevanadhara Home Care Services
              </span>
              . Serving as{" "}
              <span className="font-medium text-foreground">Treasurer</span> of
              PHSOA (Placement Home Nursing & Security Services Owners Welfare
              Association), Alappuzha District.
            </p>

            {/* Association Highlight */}
            <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm font-semibold text-primary flex items-center gap-2">
                <BadgeCheck className="w-4 h-4" />
                PHSOA – Placement Home Nursing & Security Services Owners
                Welfare Association
              </p>
            </div>

            {/* Info */}
            <div className="mt-6 space-y-4 text-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Alappuzha District, Kerala</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 95678 59200</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="tel:9567859200"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold shadow-lg hover:bg-primary/90 transition"
              >
                <Phone className="w-5 h-5" />
                Contact Proprietor
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
