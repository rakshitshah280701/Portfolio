import React, { useState } from 'react';
import { FaExternalLinkAlt, FaQuoteLeft, FaCopy, FaMapMarkerAlt, FaStar, FaCertificate, FaTimes, FaFilePdf } from 'react-icons/fa';

const ResearchPaper = ({ 
  title, 
  authors, 
  publication, 
  date, 
  abstract, 
  doiLink,
  image,
  certificateImage,
  citationIEEE,
  citationBibTeX,
  tags,
  venue,
  highlights
}) => {
  const [showFullAbstract, setShowFullAbstract] = useState(false);
  const [activeCitation, setActiveCitation] = useState('ieee');
  const [copySuccess, setCopySuccess] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  // Check if certificate is PDF
  const isPdfCertificate = certificateImage && certificateImage.toLowerCase().endsWith('.pdf');

  // Shortening abstract for preview
  const shortAbstract = abstract && abstract.length > 200 
    ? abstract.substring(0, 200) + '...' 
    : abstract;

  // Copy citation to clipboard
  const copyToClipboard = () => {
    let textToCopy = '';
    
    switch(activeCitation) {
      case 'ieee':
        textToCopy = citationIEEE;
        break;
      case 'bibtex':
        textToCopy = citationBibTeX;
        break;
      default:
        textToCopy = citationIEEE;
    }
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };
  
  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Paper image/thumbnail */}
          {image && (
            <div className="md:w-1/3">
              <img 
                src={image} 
                alt={`${title} research paper visualization`}
                className="w-full h-auto rounded-lg shadow-sm"
              />
              {certificateImage && (
                isPdfCertificate ? (
                  <a
                    href={certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center justify-center gap-2 w-full border border-gray-300 hover:border-purple-600 bg-white px-4 py-2 rounded-md text-sm transition"
                  >
                    <FaFilePdf className="text-red-500" /> View Certificate (PDF)
                  </a>
                ) : (
                  <button
                    onClick={() => setShowCertificate(true)}
                    className="mt-3 flex items-center justify-center gap-2 w-full border border-gray-300 hover:border-purple-600 bg-white px-4 py-2 rounded-md text-sm transition"
                  >
                    <FaCertificate className="text-yellow-500" /> View Certificate
                  </button>
                )
              )}
            </div>
          )}
          
          {/* Paper details */}
          <div className={image ? "md:w-2/3" : "w-full"}>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            
            <p className="text-purple-700 mb-4">
              {authors}
            </p>
            
            <div className="text-gray-600 text-sm mb-2">
              <span className="font-semibold">{publication}</span>
              {date && <span> • {date}</span>}
            </div>
            
            {venue && (
              <div className="text-gray-600 text-sm mb-4 flex items-center">
                <FaMapMarkerAlt className="text-gray-400 mr-1" />
                <span>{venue}</span>
              </div>
            )}
            
            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* Abstract */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Abstract</h3>
              <p className="text-gray-700 text-sm">
                {showFullAbstract ? abstract : shortAbstract}
              </p>
              {abstract && abstract.length > 200 && (
                <button 
                  onClick={() => setShowFullAbstract(!showFullAbstract)}
                  className="text-purple-600 hover:text-purple-800 text-sm mt-2"
                >
                  {showFullAbstract ? 'Show Less' : 'Read More'}
                </button>
              )}
            </div>
            
            {/* Highlights */}
            {highlights && highlights.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <FaStar className="text-yellow-500 mr-1" /> Key Points
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 pl-1">
                  {highlights.map((point, index) => (
                    <li key={index} className="mb-1">{point}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 mb-3">
              {doiLink && (
                <a 
                  href={doiLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-300 hover:border-purple-600 px-4 py-2 rounded-md text-sm transition"
                >
                  <FaExternalLinkAlt className="text-blue-600" /> View on IEEE Xplore
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* Citation section */}
        {(citationIEEE || citationBibTeX) && (
          <div className="mt-4 border-t border-gray-200 pt-4">
            <div className="flex items-center mb-3">
              <FaQuoteLeft className="text-gray-400 mr-2" />
              <h3 className="text-lg font-semibold">Cite this paper</h3>
            </div>
            
            {/* Citation format selector */}
            <div className="flex flex-wrap border-b border-gray-200 mb-3">
              {citationIEEE && (
                <button 
                  className={`px-4 py-2 text-sm ${activeCitation === 'ieee' 
                    ? 'border-b-2 border-purple-600 text-purple-700 font-medium' 
                    : 'text-gray-600 hover:text-purple-600'}`}
                  onClick={() => setActiveCitation('ieee')}
                >
                  IEEE
                </button>
              )}
              {citationBibTeX && (
                <button 
                  className={`px-4 py-2 text-sm ${activeCitation === 'bibtex' 
                    ? 'border-b-2 border-purple-600 text-purple-700 font-medium' 
                    : 'text-gray-600 hover:text-purple-600'}`}
                  onClick={() => setActiveCitation('bibtex')}
                >
                  BibTeX
                </button>
              )}
            </div>
            
            {/* Citation display */}
            <div className="bg-gray-50 p-4 rounded-md relative">
              <pre className={`text-sm whitespace-pre-wrap ${activeCitation === 'bibtex' ? 'font-mono' : ''} pr-10`}>
                {activeCitation === 'ieee' && citationIEEE}
                {activeCitation === 'bibtex' && citationBibTeX}
              </pre>
              
              <button 
                onClick={copyToClipboard}
                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-purple-600 transition bg-gray-50"
                title="Copy to clipboard"
              >
                <FaCopy />
              </button>
              
              {copySuccess && (
                <div className="absolute top-2 right-10 text-sm text-green-600 bg-white px-2 py-1 rounded shadow-sm">
                  Copied!
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Certificate Modal/Lightbox (only for image certificates) */}
      {showCertificate && !isPdfCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 overflow-auto">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 hover:bg-purple-600 hover:text-white shadow-lg transition-colors z-10 flex items-center gap-1"
            >
              <FaTimes /> <span className="text-sm font-medium">Close</span>
            </button>
            <div className="bg-white p-3 rounded-lg overflow-auto">
              <img 
                src={certificateImage} 
                alt={`Certificate for ${title}`}
                className="w-full h-auto object-contain rounded"
                style={{ maxHeight: 'calc(90vh - 2rem)' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResearchPaper; 