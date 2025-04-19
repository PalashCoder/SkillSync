import { motion } from "framer-motion";

export default function ATSScoreMeter({ score }) {
  const getScoreColor = (score) => {
    if (score >= 80) return "bg-secondary";
    if (score >= 60) return "bg-accent";
    return "bg-red-500";
  };

  const getScoreText = (score) => {
    if (score >= 80) return "Excellent! Your resume is well optimized.";
    if (score >= 60) return "Good, but could be improved.";
    return "Needs significant improvement for ATS.";
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">ATS Optimization Score</h3>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Score</span>
        <span className="text-sm font-bold">{score}/100</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <motion.div
          className={`h-3 rounded-full ${getScoreColor(score)}`}
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1 }}
        />
      </div>
      <p className="text-sm text-gray-600">{getScoreText(score)}</p>
    </div>
  );
}