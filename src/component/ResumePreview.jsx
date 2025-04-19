import { FiEdit2, FiDownload } from "react-icons/fi";

export default function ResumePreview({ htmlContent, onEdit }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-medium text-gray-900">Resume Preview</h3>
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="p-2 text-gray-500 hover:text-primary rounded-md hover:bg-gray-50"
            title="Edit Resume"
          >
            <FiEdit2 className="h-5 w-5" />
          </button>
          <button
            className="p-2 text-gray-500 hover:text-primary rounded-md hover:bg-gray-50"
            title="Download Resume"
          >
            <FiDownload className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="p-4 h-[600px] overflow-auto">
        {htmlContent ? (
          <iframe
            srcDoc={htmlContent}
            className="w-full h-full border-none"
            title="Resume Preview"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Upload a resume to see preview
          </div>
        )}
      </div>
    </div>
  );
}