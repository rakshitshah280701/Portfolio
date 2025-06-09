import React from 'react';
import ResearchPaper from './ResearchPaper';
import { motion } from 'framer-motion';


// Research publications data
const researchData = [
  {
    id: 'paper1',
    title: 'Linear Regression vs LSTM for Time Series Data',
    authors: 'Rakshit Shah, Poojan Shah, Catherine Joshi, Rutuja Jain, Rushikesh Nikam',
    publication: '2022 IEEE World Conference on Applied Intelligence and Computing (AIC)',
    date: 'June 2022',
    abstract: 'This paper presents a comparative study between Linear Regression and Long Short-Term Memory (LSTM) networks for time series prediction using the Indian Stock Market Index Nifty 50 dataset. The goal was to determine which model better captures dynamic patterns for forecasting. Results showed that while Linear Regression offers simplicity, LSTM provides superior accuracy in predicting stock price trends, particularly in capturing nonlinearities and sequential dependencies.',
    doiLink: 'https://www.doi.org/10.1109/AIC55036.2022.9848887',
    image: '/Paper1.png',
    certificateImage: '/Paper1_certi.jpg',
    citationIEEE: 'R. Shah, P. Shah, C. Joshi, R. Jain and R. Nikam, "Linear Regression vs LSTM for Time Series Data," 2022 IEEE World Conference on Applied Intelligence and Computing (AIC), Sonbhadra, India, 2022, pp. 670-675, doi: 10.1109/AIC55036.2022.9848887. keywords: {Recurrent neural networks;Computational modeling;Linear regression;Time series analysis;Predictive models;Data models;Software;LSTM model;Linear Regression;epoch;batch size;Sequential;Open;Close;x_train;x_test;y_train;y_test},',
    citationBibTeX: `@INPROCEEDINGS{9848887,
  author={Shah, Rakshit and Shah, Poojan and Joshi, Catherene and Jain, Rutuja and Nikam, Rushikesh},
  booktitle={2022 IEEE World Conference on Applied Intelligence and Computing (AIC)}, 
  title={Linear Regression vs LSTM for Time Series Data}, 
  year={2022},
  volume={},
  number={},
  pages={670-675},
  keywords={Recurrent neural networks;Computational modeling;Linear regression;Time series analysis;Predictive models;Data models;Software;LSTM model;Linear Regression;epoch;batch size;Sequential;Open;Close;x_train;x_test;y_train;y_test},
  doi={10.1109/AIC55036.2022.9848887}}`,
    tags: ['Machine Learning', 'Time Series', 'LSTM', 'Stock Market'],
    venue: 'Sonbhadra, India',
    
  },
  {
    id: 'paper2',
    title: 'Heartbeat Prediction using Mel Spectrogram and MFCC Value',
    authors: 'Rakshit Shah, Poojan Shah, Catherine Joshi, Rutuja Jain, Rushikesh Nikam',
    publication: '2023 IEEE IAS Global Conference on Emerging Technologies (GlobConET)',
    date: 'May 2023',
    abstract: 'This research proposes a heartbeat prediction model using Mel-Frequency Cepstral Coefficients (MFCC) and Mel Spectrogram values to classify heartbeat sounds as normal or abnormal. The dataset was preprocessed using Librosa, and a CNN model with 20 convolutional layers was trained to classify audio samples. Results show high accuracy in detecting abnormal heartbeats, suggesting strong potential for early cardiovascular disease detection and real-time healthcare applications.',
    doiLink: 'https://www.doi.org/10.1109/GlobConET56651.2023.10150129',
    image: '/paper2.png',
    certificateImage: '/paper2_certi.png',
    citationIEEE: 'R. Shah, P. Shah, C. Joshi, R. Jain and R. Nikam, "Heartbeat Prediction using Mel Spectrogram and MFCC Value," 2023 IEEE IAS Global Conference on Emerging Technologies (GlobConET), London, United Kingdom, 2023, pp. 1-5, doi: 10.1109/GlobConET56651.2023.10150129. keywords: {Heart;Training;Heart beat;Medical services;Predictive models;Libraries;Reliability;Mel spectrogram;Mel-frequency cepstral coefficients;CNN;Convolution 2D;Librosa},',
    citationBibTeX: `@INPROCEEDINGS{10150129,
  author={Shah, Rakshit and Shah, Poojan and Joshi, Catherene and Jain, Rutuja and Nikam, Rushikesh},
  booktitle={2023 IEEE IAS Global Conference on Emerging Technologies (GlobConET)}, 
  title={Heartbeat Prediction using Mel Spectrogram and MFCC Value}, 
  year={2023},
  volume={},
  number={},
  pages={1-5},
  keywords={Heart;Training;Heart beat;Medical services;Predictive models;Libraries;Reliability;Mel spectrogram;Mel-frequency cepstral coefficients;CNN;Convolution 2D;Librosa},
  doi={10.1109/GlobConET56651.2023.10150129}}`,
    tags: ['Healthcare AI', 'Audio Processing', 'CNN', 'Mel Spectrogram'],
    venue: 'London, United Kingdom',
    
  }
];

const Research = () => {
  return (
    <section id="research" className="pt-12 pb-24 px-6 md:px-16 bg-white">
      <motion.div
        className="bg-violet-50 rounded-xl px-8 py-10 shadow-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-10">Research Publications</h2>

          <p className="text-lg text-gray-700 mb-10 max-w-3xl">
            My academic research focuses on the intersection of artificial intelligence and practical applications in healthcare and computer vision.
          </p>

          <div className="space-y-8">
            {researchData.map((paper) => (
              <ResearchPaper key={paper.id} {...paper} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};


export default Research; 