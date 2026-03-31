import { useState } from "react";
import emailjs from "@emailjs/browser";
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
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!emailJSServiceId || !emailJSTemplateId || !emailJSPublicKey) {
        throw new Error("EmailJS configuration is missing. Please check environment variables.");
      }

      console.log("Form submitted:", formData);
      
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
      showAlertMessage("success", "Your message has been sent!");
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
          LET'S <span className="text-accent">WORK</span>
        </h2>
      </div>

      {/* Grid Card Form */}
      <div className="grid-card w-full max-w-2xl mx-auto shadow-2xl">
        <div className="flex flex-col items-start w-full gap-2 mb-10 text-center sm:text-left">
          <p className="font-normal text-neutral md:text-lg">
            Whether you're looking to build a new architecture, level up your backend, or bring a unique product to life, I'm here to help.
          </p>
        </div>
        
        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
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
        </form>
      </div>
    </section>
  );
};

export default Contact;
