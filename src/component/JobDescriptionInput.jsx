import { FiCopy } from "react-icons/fi";

export default function JobDescriptionInput({ jobDesc, setJobDesc, onAnalyze }) {
  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setJobDesc(text);
    } catch (err) {
      console.error("Failed to read clipboard contents:", err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Job Description</h3>
      <div className="mb-4">
        <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-1">
          Paste the job description you're applying for
        </label>
        <textarea
          id="jobDescription"
          rows="8"
          className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border border-gray-300 rounded-md p-2"
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          placeholder="Paste the job description here..."
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePasteFromClipboard}
          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <FiCopy className="mr-2 h-4 w-4" />
          Paste from Clipboard
        </button>
        <button
          onClick={onAnalyze}
          disabled={!jobDesc}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Analyze Match
        </button>
      </div>
    </div>
  );
}