import { useDropzone } from "react-dropzone";
import { FiUpload, FiFile, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ResumeUpload({ file, setFile, isLoading }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-2">
          <FiUpload className="h-10 w-10 text-gray-400" />
          <p className="text-sm text-gray-600">
            Drag & drop your resume here, or click to select
          </p>
          <p className="text-xs text-gray-500">Supports PDF, DOC, DOCX</p>
        </div>
      </div>

      {file && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
        >
          <div className="flex items-center space-x-2">
            <FiFile className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700 truncate max-w-xs">
              {file.name}
            </span>
          </div>
          <button
            onClick={() => setFile(null)}
            className="text-gray-500 hover:text-gray-700"
          >
            <FiX className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </div>
  );
}