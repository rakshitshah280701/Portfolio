import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ArchitectureSection = ({ title, steps, icon, color }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-6">
      <motion.div
        className={`bg-white rounded-xl shadow-md overflow-hidden ${color}`}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div 
          className={`px-6 py-4 flex justify-between items-center cursor-pointer ${isOpen ? `border-b border-${color.split('bg-')[1]}-200` : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center">
            <span className="mr-3 text-xl">{icon}</span>
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-4 bg-opacity-5"
            >
              <ul className="ml-3 space-y-2">
                {steps.map((step, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="mr-2 text-sm mt-1">→</span>
                    <span>{step}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const ArchitectureDiagram = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">System Architecture</h2>
      
      <p className="text-gray-700 mb-6">
        StockSage's architecture is built around five interconnected components that work together to 
        provide accurate stock predictions, real-time market data, and comprehensive financial news. 
        Each component handles a specific aspect of the system, from data processing and model training 
        to news aggregation and user interface elements. Click on each section below to explore the detailed workflow.
      </p>
      
      <ArchitectureSection
        title="Prediction System"
        icon="🔮"
        color="bg-blue-50 border-l-4 border-blue-500"
        steps={[
          "Check if model and scaler exist for requested stock symbol",
          "If not, fetch 5 years of historical data using yFinance",
          "Process data with technical indicators (RSI, MACD, Bollinger Bands, Stochastic, ADX)",
          "Scale data using MinMaxScaler",
          "Create windowed sequences for time series prediction",
          "Train GRU model with early stopping and checkpointing",
          "Save trained model and scaler for future use",
          "Generate next market day's closing price prediction",
          "Return prediction results via REST API"
        ]}
      />

      <ArchitectureSection
        title="News Aggregation"
        icon="📰"
        color="bg-green-50 border-l-4 border-green-500"
        steps={[
          "Fetch stock market news from NewsData.io API",
          "Scrape EquityBulls website for latest financial headlines",
          "Scrape LiveMint business news for market insights",
          "Scrape IndiaInfoline (IIFL) for additional market coverage",
          "Format and normalize news data from all sources",
          "Serve consolidated news feed via REST API",
          "Display aggregated news in the frontend interface"
        ]}
      />

      <ArchitectureSection
        title="Symbol Search System"
        icon="🔍"
        color="bg-amber-50 border-l-4 border-amber-500"
        steps={[
          "Process NSE equity CSV file to extract symbol information",
          "Create structured JSON with symbol, company name, and Yahoo Finance suffix",
          "Store processed data in nse_symbols.json",
          "Serve symbols via /api/symbols endpoint with search functionality",
          "Power frontend autocomplete for stock symbol lookup",
          "Filter results based on user input with real-time suggestions"
        ]}
      />

      <ArchitectureSection
        title="Scheduled Model Updater"
        icon="⏱️"
        color="bg-purple-50 border-l-4 border-purple-500"
        steps={[
          "Run daily at scheduled time using Python's schedule library",
          "Load list of all NSE stock symbols from JSON file",
          "Fetch latest market data for each symbol",
          "Add technical indicators to enhance prediction features",
          "Create training sequences for time series prediction",
          "Train or update GRU model for each stock symbol",
          "Save updated models and scalers to storage",
          "Log update process in model_updates.log for monitoring"
        ]}
      />

      <ArchitectureSection
        title="Flask Web Application"
        icon="🌐"
        color="bg-red-50 border-l-4 border-red-500"
        steps={[
          "Core Flask application with modular blueprint architecture",
          "Real-time market data ticker via /api/ticker endpoint",
          "NSE market movers (gainers/losers) tracking",
          "Interactive candlestick charts using chart.js",
          "Symbol search with typeahead suggestions",
          "Responsive frontend with prediction visualization",
          "REST API endpoints for all main functionality",
          "Production-ready deployment with gunicorn"
        ]}
      />
    </div>
  );
};

export default ArchitectureDiagram; 