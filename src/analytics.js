// Google Analytics 4 Measurement ID (e.g. G-XXXXXXXXXX).
// Get one at https://analytics.google.com > Admin > Data Streams > your web stream.
const measurementId = "G-FBRTSN5MTZ";

if (measurementId && import.meta.env.PROD) {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", measurementId);
}
