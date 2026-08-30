import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "motion/react";
import Alert from "../components/Alert";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailJSServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJSTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailJSPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 10000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!emailJSServiceId || !emailJSTemplateId || !emailJSPublicKey) {
        throw new Error("EmailJS configuration is missing. Please check environment variables.");
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
        title: "Contact Form Submission",
      };

      await emailjs.send(
        emailJSServiceId,
        emailJSTemplateId,
        templateParams,
        emailJSPublicKey
      );

      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);
    } catch (error) {
      setIsLoading(false);
      let errorMessage = "Something went wrong! Please try again.";
      if (error.message.includes("configuration is missing")) {
        errorMessage = "Contact form is not configured. Please contact the site administrator.";
      }
      
      showAlertMessage("danger", errorMessage);
    }
  };

  return (
    <section id="contact" className="relative flex flex-col items-center justify-center c-space section-spacing min-h-screen">
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      
      {/* Massive Typography CTA above form */}
      <div className="text-center mb-16">
        <h2 className="text-[12vw] sm:text-[8rem] lg:text-[10rem] font-bold leading-none tracking-tighter text-page-text uppercase">
          LET&apos;S <span className="text-accent">WORK</span>
        </h2>
      </div>

      {/* Grid Card Form */}
      <div className="grid-card w-full max-w-2xl mx-auto shadow-2xl">
        <div className="flex flex-col items-start w-full gap-2 mb-10 text-center sm:text-left">
          <p className="font-normal text-neutral md:text-lg">
            Whether you&apos;re looking to build a new architecture, level up your backend, or bring a unique product to life, I&apos;m here to help.
          </p>
        </div>
        
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center gap-4 py-10 text-center"
            >
              <motion.svg
                viewBox="0 0 52 52"
                className="w-16 h-16"
                initial="hidden"
                animate="visible"
              >
                <motion.circle
                  cx="26"
                  cy="26"
                  r="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-emerald-500"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { pathLength: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <motion.path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-500"
                  d="M14 27l7 7 17-17"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { pathLength: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
                />
              </motion.svg>
              <div>
                <p className="text-lg font-semibold text-page-text">Message sent!</p>
                <p className="text-sm text-neutral">Thanks for reaching out — I&apos;ll get back to you soon.</p>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="field-label">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="field-input"
                  placeholder="John Doe"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="field-label">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="field-input"
                  placeholder="hello@example.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="field-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="field-input resize-none"
                  placeholder="Share your thoughts..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-accent w-full mt-4"
              >
                {!isLoading ? "Send Message" : "Sending..."}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
