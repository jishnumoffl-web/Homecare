"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

const locations = [
  { name: "Chengannur", description: "Full service availability" },
  { name: "Thiruvalla", description: "Complete home care services" },
  { name: "Haripad", description: "All services available" },
  { name: "Mavelikkara", description: "Full range of care services" },
];

const servicesList = [
  "Home Nurse",
  "Patient Care",
  "Elderly Care",
  "Delivery Care",
  "Hospital Bystander",
  "House Maid",
  "Non Emergency Transportation",
];

export default function Locations() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    service: "",
    aadhar: "",
    patientGender: "",
    familyMembers: "",
    nursePreference: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
New Service Request

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}
Service: ${form.service}
Aadhar: ${form.aadhar}

${
  form.service === "Home Nurse"
    ? `
Patient Gender: ${form.patientGender}
Family Members: ${form.familyMembers}
Preferred Nurse: ${form.nursePreference}
`
    : ""
}
`;

    const url = `https://wa.me/919567859200?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="locations"
      className="w-full overflow-x-hidden py-16 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FORM CARD */}
        <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Request Our Service
          </h3>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full box-border p-4 rounded-xl border border-border bg-background"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full box-border p-4 rounded-xl border border-border bg-background"
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              value={form.address}
              onChange={handleChange}
              className="w-full box-border p-4 rounded-xl border border-border bg-background md:col-span-2"
            />

            <select
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className="w-full box-border p-4 rounded-xl border border-border bg-background md:col-span-2"
            >
              <option value="">Select Service</option>
              {servicesList.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="aadhar"
              placeholder="Aadhar Number"
              required
              value={form.aadhar}
              onChange={handleChange}
              className="w-full box-border p-4 rounded-xl border border-border bg-background md:col-span-2"
            />

            {/* CONDITIONAL FIELDS */}
            {form.service === "Home Nurse" && (
              <>
                <select
                  name="patientGender"
                  required
                  value={form.patientGender}
                  onChange={handleChange}
                  className="w-full box-border p-4 rounded-xl border border-border bg-background"
                >
                  <option value="">Patient Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <input
                  type="number"
                  name="familyMembers"
                  placeholder="Number of Family Members"
                  required
                  value={form.familyMembers}
                  onChange={handleChange}
                  className="w-full box-border p-4 rounded-xl border border-border bg-background"
                />

                <select
                  name="nursePreference"
                  required
                  value={form.nursePreference}
                  onChange={handleChange}
                  className="w-full box-border p-4 rounded-xl border border-border bg-background md:col-span-2"
                >
                  <option value="">Preferred Nurse</option>
                  <option value="Male Nurse">Male Nurse</option>
                  <option value="Female Nurse">Female Nurse</option>
                </select>
              </>
            )}

            <button
              type="submit"
              className="w-full md:col-span-2 bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:opacity-90 transition mt-2"
            >
              Submit & Contact on WhatsApp
            </button>
          </form>
        </div>

        {/* CONTACT BANNER */}
        <div className="mt-16 bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-6 sm:p-8 md:p-12 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-white/90 mb-6">
            Our team is available 24/7 to support your loved ones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9567859200"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-semibold"
            >
              <Phone className="w-5 h-5" />
              95678 59200
            </a>

            <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 text-white rounded-full">
              <Clock className="w-5 h-5" />
              Available 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
