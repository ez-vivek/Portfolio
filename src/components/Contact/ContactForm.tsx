import { useState } from 'react';
import { User2, Mail, DollarSign, MessageSquare, ArrowRight } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const budgetOptions = [
  "Less than $5K",
  "$5K - $10K",
  "$10K - $20K",
  "$20K - $50K",
  "More than $50K"
];

const serviceOptions = [
  { label: "Website", value: "Website Design" },
  { label: "Logo", value: "Logo design" },
  { label: "Brand", value: "Brand Design" },
  { label: "UI", value: "UI Design" },
  { label: "Presentation", value: "Presentation Design" },
  { label: "Report", value: "Report Design" },
];

const WEB3FORMS_ACCESS_KEY = "1b677c39-e3cb-4674-91b5-5e24d274e052"; // Replace with your Web3Forms access key

type FormData = {
  name: string;
  email: string;
  budget: string;
  message: string;
  services: string[];
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    budget: '',
    message: '',
    services: [] // New state for services
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fix for handleServiceToggle
  const handleServiceToggle = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      services: prevState.services.includes(value)
        ? prevState.services.filter((service) => service !== value)
        : [...prevState.services, value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      toast.error('Web3Forms access key is missing!');
      return;
    }

    setIsSubmitting(true);

    try {
      const data = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New message from ${formData.name}`, // Set a meaningful subject
        from_name: formData.name,
        from_email: formData.email,
        budget: formData.budget,
        message: formData.message,
        services: formData.services.join(", ") // Include selected services
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', budget: '', message: '', services: [] });
      } else {
        throw new Error(result.message || "Failed to send message.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
      <Toaster position="top-right" />
      <h3 className="text-xl font-semibold mb-6 text-white">FILL THE FORM BELOW*</h3>

      <div className="space-y-6">
        {/* Name Input */}
        <div className="relative">
          <User2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-zinc-800/50 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            placeholder="Enter your mail"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-zinc-800/50 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Budget Select */}
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full bg-zinc-800/50 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500/50"
            required
            disabled={isSubmitting}
          >
            <option value="">Choose budget range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option} className="bg-zinc-800">
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Services Selection */}
        <div>
          <h4 className="text-white mb-2">Choose Design Type</h4>
          <div className="flex flex-wrap gap-4">
            {serviceOptions.map((service) => (
              <button
                type="button"
                key={service.value}
                onClick={() => handleServiceToggle(service.value)}
                className={`px-4 py-2 rounded-lg border border-white/10 ${formData.services.includes(service.value)
                  ? "bg-pink-500 text-white"
                  : "bg-zinc-800 text-gray-400"
                  }`}
              >
                {service.label}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <textarea
            placeholder="Type your message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-zinc-800/50 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 min-h-[120px] resize-none"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10">
            {isSubmitting ? 'Sending...' : 'Submit Now'}
          </span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </form>
  );
}
