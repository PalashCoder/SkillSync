export default function KeywordHighlights({ keywords, missingKeywords }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Keyword Analysis</h3>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Found Keywords</h4>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <span key={index} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {keyword}
              </span>
            ))}
          </div>
        </div>
  
        {missingKeywords.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Missing Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {missingKeywords.map((keyword, index) => (
                <span key={index} className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }