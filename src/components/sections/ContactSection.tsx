"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (socialRef.current) {
      gsap.fromTo(socialRef.current.children,
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const onSubmit = async () => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Thank you for your message! I'll get back to you soon.");
    reset();
  };

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/adnan-tabbakhah", icon: "💼" },
    { name: "GitHub", url: "https://github.com/adnan-Tabbakhah", icon: "💻" },
    { name: "Email", url: "mailto:adnan.tabakha@gmail.com", icon: "📧" },
    { name: "Phone", url: "tel:+963992240779", icon: "📱" },
  ];

  return (
    <section ref={sectionRef} className="section-container" id="contact">
      <h2 className="text-3xl md:text-4xl font-black mb-4">
        <span className="gradient-text">Get In Touch</span>
      </h2>
      <p className="text-lg  text-(--text-muted) mb-12 max-w-2xl">
        Have a project in mind or want to collaborate? I&apos;d love to hear from you!
      </p>

      <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                aria-invalid={errors.name ? "true" : "false"}
                className="w-full px-5 py-4 bg-(--card-bg) border-2 border-(--border) rounded-xl focus:border-[#e5383b] focus:outline-none transition-colors"
                placeholder="Your Name"
              />
              {errors.name ? (
                <p className="mt-2 text-sm text-[#e5383b]">{errors.name.message}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                aria-invalid={errors.email ? "true" : "false"}
                className="w-full px-5 py-4 bg-(--card-bg) border-2 border-(--border) rounded-xl focus:border-[#e5383b] focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
              {errors.email ? (
                <p className="mt-2 text-sm text-[#e5383b]">{errors.email.message}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                aria-invalid={errors.message ? "true" : "false"}
                rows={6}
                className="w-full px-4 py-3 bg-(--card-bg) border-2 border-(--border) rounded-xl focus:border-[#e5383b] focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
              {errors.message ? (
                <p className="mt-2 text-sm text-[#e5383b]">{errors.message.message}</p>
              ) : null}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed border-2"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Social Links & Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#e5383b]">Connect With Me</h3>
          <div ref={socialRef} className="space-y-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : "_self"}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : ""}
                className="flex items-center gap-4 p-5 sm:p-6 bg-(--card-bg) rounded-xl border-2 border-(--border) hover:border-[#e5383b] hover:bg-[#e5383b]/5 transition-all duration-300 group shadow-sm"
              >
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                  {social.icon}
                </span>
                  <span className="font-bold text-foreground group-hover:text-[#e5383b] transition-colors">
                  {social.name}
                </span>
                <span className="ml-auto text-[#e5383b] opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </a>
            ))}
          </div>

          <div className="p-6 sm:p-8 bg-linear-to-br from-[#e5383b]/10 to-[#ba181b]/10 rounded-2xl border-2 border-[#e5383b]/30">
            <h4 className="font-bold text-lg mb-3 text-[#e5383b]">Quick Response</h4>
              <p className=" text-(--text-muted)">
              I typically respond within 24 hours. For urgent matters, feel free to call or send a direct message on LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
