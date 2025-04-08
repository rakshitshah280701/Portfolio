const projects = [
  {
    title: "StockSage",
    description:
      "A web app powered by LSTM that predicts the closing value of Nifty50. Modularized Flask backend with dynamic training, technical indicators, and multi-model support (TopG, TopP, etc).",
    image: "/StockSage.png",
    github: "https://github.com/rakshitshah280701/All_about_StockMarket",
    demo: "",
    tags: ["Flask", "LSTM", "Machine Learning", "Finance"]
  },
  {
    title: "Smart Sign Navigation (Android App)",
    description:
      "An Android application that uses YOLOv8 and TensorFlow Lite to detect road signs and shop boards, aiding real-time navigation for low-vision individuals by providing real time Narrative generation through LLM GPT3.5.",
    image: "/SmartSign.png", // Place your image in /public folder
    github: "https://github.com/rakshitshah280701/SmartSignNavigation-Android",
    demo: "", // Add a demo link if hosted (APK or Play Store)
    tags: ["Android", "YOLOv8", "TensorFlow Lite", "CameraX", "Java"]
  },
  {
    title: "Heart Health Predictor",
    description:
      "Predicts heart and organ health from medical reports, heartbeat audio, and diagnostic images using CNN, Logistic Regression, and Random Forest. Built with Python, Librosa, and Flask.",
    image: "/hearthealth.png", // Add screenshot here later
    github: "https://github.com/rakshitshah280701/Vital-Organ-HealthPredictor",
    demo: "",
    tags: ["Python", "Flask", "CNN", "Librosa", "Logistic Regression"]
  }
];

export default projects;
