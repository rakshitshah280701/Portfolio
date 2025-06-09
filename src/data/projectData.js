const projects = [
  {
    id: 'instructaware',
    title: 'InstructAware: Generative Instructional Narration',
    description: 'Real-time situational narration using YOLOv8, OCR, and fine-tuned LLMs. Trained and evaluated multiple encoder-decoder and decoder-only models.',
    detailedDescription: `InstructAware is a research-grade project that generates instructional scene descriptions using computer vision and generative language models. Built for accessibility use cases (e.g., low vision), it combines YOLOv8, OCR, and fine-tuned LLMs (T5, GPT-3.5, DeepSeek, and a Transformer trained from scratch) to generate contextual instructions from real-world scenes.

This project involved training and evaluating both encoder-decoder and decoder-only architectures across qualitative and quantitative benchmarks, leading to a comparative performance analysis. The Android-based deployment allows real-time inference on live scenes via camera feed.`,
    image: '/instructaware.png', // ensure this image is placed in `public/projects/`
    github: 'https://github.com/rakshitshah280701/InstructAware',
    demo: '',
    tags: ['YOLOv8', 'OCR', 'LLMs', 'Android', 'T5', 'GPT-3.5', 'DeepSeek', 'Multimodal'],
    showArchitecture: false,
    skills: [
      'Fine-tuned encoder-decoder (T5) and decoder-only (GPT, DeepSeek) models',
      'Scene understanding using YOLOv8 + OCR',
      'Qualitative and quantitative benchmarking',
      'Multimodal dataset creation and evaluation',
      'Real-time Android deployment of generative AI',
    ],
    challenges: [
      {
        title: 'Training on Multimodal Data',
        description: 'Curating and aligning image-scene pairs with instruction sequences required extensive preprocessing and format control.',
      },
      {
        title: 'Comparing Architectures',
        description: 'To evaluate model performance effectively, we used a combination of automatic metrics and user-centric qualitative testing.',
      },
    ],
  },
  {
    id: "smartsign",
    title: "Scene Sense (Android App)",
    description:
      "An Android application that uses InstructAware System to detect road signs and shop boards, aiding real-time navigation for low-vision individuals by providing real time Narrative generation through LLM GPT3.5.",
    image: "/scenesense1.png", // Place your image in /public folder
    github: "https://github.com/rakshitshah280701/SmartSignNavigation-Android",
    demo: "", // Add a demo link if hosted (APK or Play Store)
    tags: ["Android", "YOLOv8", "TensorFlow Lite", "CameraX", "Java"],
    detailedDescription: 
      "Smart Sign Navigation is an Android application designed to assist individuals with low vision in navigating urban environments. The app leverages computer vision and natural language processing to detect road signs, shop boards, and other visual navigational cues, converting them into audio feedback.\n\nThe core detection system is built with YOLOv8, optimized and deployed using TensorFlow Lite to ensure efficient operation on mobile devices. The app utilizes Android's CameraX API for reliable and efficient camera access, providing real-time processing of the user's surroundings.\n\nWhat sets this app apart is its integration with GPT-3.5, which generates natural-sounding narratives based on detected objects. Rather than simply stating what signs are present, the app provides contextual information and guidance, making navigation more intuitive for users.",
    skills: [
      "Optimizing and deploying computer vision models on mobile devices",
      "Working with Android's CameraX API for real-time video processing",
      "Implementing efficient on-device inference with TensorFlow Lite",
      "Integrating OpenAI's API for natural language generation",
      "Designing accessible user interfaces for individuals with visual impairments"
    ],
    challenges: [
      {
        title: "On-Device Performance",
        description: "Balancing model accuracy with performance was crucial. We implemented model quantization and pruning techniques to reduce the model size by 70% while maintaining 92% of the original accuracy."
      },
      {
        title: "Battery Optimization",
        description: "Continuous camera usage and model inference resulted in high battery consumption. We developed an adaptive processing rate that adjusts based on movement speed and available battery, extending usage time significantly."
      }
    ]
  },
  

  {
    id: "stocksage",
    title: "StockSage",
    description:
      "A comprehensive Flask-based web application for stock price prediction and financial news aggregation. Features a GRU neural network model for NSE-listed companies, real-time market data, technical indicators, and multi-source news integration.",
    image: "/StockSage.png",
    github: "https://github.com/rakshitshah280701/All_about_StockMarket",
    demo: "",
    tags: ["Flask", "GRU Neural Networks", "Machine Learning", "Finance", "Web Scraping", "Python"],
    showArchitecture: true,
    detailedDescription: 
      "StockSage is a full-stack stock prediction platform that leverages AI and financial analytics to generate actionable insights for the Indian stock market. It is built with a modular architecture using Flask and includes real-time stock data fetching, deep learning-based forecasting, technical analysis indicators, and market news aggregation. \n\n The project begins with a user selecting or searching for a stock symbol. A custom autocomplete system matches it against NSE-listed companies, retrieved from a JSON file processed from official CSV data. Once a symbol is selected, the prediction route is triggered. It checks whether a trained GRU model and corresponding scaler exist for the given stock. If not, a pipeline is automatically triggered to fetch historical stock data from Yahoo Finance, add technical indicators like RSI, MACD, Bollinger Bands, ADX, and Stochastic Oscillator, scale the data using MinMaxScaler, and prepare it into sequences for time-series forecasting. \n\nA GRU model is trained on this data and saved to disk. The model then predicts the next day's closing price based on the last 30 days of data. The result is inverse-transformed back to a real price using the saved scaler. This prediction is returned to the frontend and displayed to the user in a responsive UI.\n\n In parallel, other features of the app include top gainers and losers in NIFTY50 based on 1-day percentage changes, and real-time financial news collected via both APIs and custom web scrapers from sources like Equity Bulls, IIFL, and LiveMint. \n\n Behind the scenes, a scheduler script updates all models daily by retraining them using the latest market data. This ensures that StockSage remains an intelligent and evolving analytics engine suitable for real-world applications. Behind the scenes, a scheduler script updates all models daily by retraining them using the latest market data. This ensures that StockSage remains an intelligent and evolving analytics engine suitable for real-world applications.",
    skills: [
      "Developing and optimizing GRU neural networks for time series prediction",
      "Building modular Flask web applications with blueprint architecture",
      "Implementing technical financial indicators (RSI, MACD, Bollinger Bands)",
      "Creating automated web scraping systems for financial news aggregation",
      "Designing scheduled model training pipelines with logging and monitoring",
      "Developing responsive frontend with interactive charts and autocomplete",
      "Working with financial APIs and real-time market data",
      "Implementing machine learning model deployment workflows"
    ],
    challenges: [
      
      {
        title: "Model Optimization",
        description: "Training GRU models efficiently required careful hyperparameter tuning and sequence length optimization. We implemented an early stopping mechanism with model checkpointing to prevent overfitting while maintaining prediction accuracy."
      },
      {
        title: "News Aggregation at Scale",
        description: "Collecting and processing financial news from multiple sources presented challenges with rate limiting and changing website structures. We implemented a robust scraping system with fallback mechanisms and a combined API/web scraping approach to ensure reliable news collection."
      },
      {
        title: "System Architecture Design",
        description: "Creating a modular, maintainable codebase required careful architecture planning. We implemented a blueprint-based Flask structure with clear separation of concerns between data fetching, model training, prediction services, and web presentation layers."
      }
    ]
  },
  
  {
    id: "hearthealth",
    title: "Heart Health Predictor",
    description:
      "Predicts heart and organ health from medical reports, heartbeat audio, and diagnostic images using CNN, Logistic Regression, and Random Forest. Built with Python, Librosa, and Flask.",
    image: "/hearthealth.png", // Add screenshot here later
    github: "https://github.com/rakshitshah280701/Vital-Organ-HealthPredictor",
    demo: "",
    tags: ["Python", "Flask", "CNN", "Librosa", "Logistic Regression"],
    detailedDescription: 
      "Heart Health Predictor is a comprehensive medical analysis tool that evaluates cardiovascular health using multiple data sources. The system processes three main types of inputs: traditional medical reports with numerical values, audio recordings of heartbeats, and diagnostic images such as ECGs and echocardiograms.\n\nThe architecture employs a multi-modal approach, using different machine learning algorithms specialized for each data type. Convolutional Neural Networks (CNNs) analyze the visual imagery, while heartbeat audio is processed using features extracted with Librosa and classified with Random Forest algorithms. Traditional medical data is evaluated using Logistic Regression models.\n\nThe Flask-based web interface makes the tool accessible to healthcare professionals, allowing them to upload patient data and receive detailed health assessments with explanations of risk factors and potential concerns.",
    skills: [
      "Building multi-modal machine learning systems that integrate different data types",
      "Applying audio processing techniques to medical sound data using Librosa",
      "Developing CNN architectures optimized for medical imagery",
      "Creating interpretable machine learning models that explain their predictions",
      "Deploying secure healthcare applications with appropriate privacy measures"
    ],
    challenges: [
      {
        title: "Data Integration",
        description: "Combining predictions from different models posed significant challenges. We developed a weighted ensemble method that factors in the confidence scores of each model and the historical reliability of each data type."
      },
      {
        title: "Medical Accuracy",
        description: "Ensuring medically sound predictions required extensive collaboration with healthcare professionals. We implemented a verification system where unusual or borderline cases are flagged for additional review."
      }
    ]
  }
];

export default projects;
