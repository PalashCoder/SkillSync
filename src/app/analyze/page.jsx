"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "@/component/Navbar";
import ResumeUpload from "@/component/ResumeUpload";
import ResumePreview from "@/component/ResumePreview";
import ATSScoreMeter from "@/component/ATSScoreMeter";
import KeywordHighlights from "@/component/KeywordHighlights";
import JobDescriptionInput from "@/component/JobDescriptionInput";
import { analyzeResume } from "../../utils/api";

export default function AnalyzePage() {
  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleAnalyze = async () => {
    if (!file) {
      toast.error("Please upload a resume first");
      return;
    }

    setIsLoading(true);
    try {
      const analysisResults = await analyzeResume(file, jobDesc);
      setResults(analysisResults);
      toast.success("Analysis complete!");
    } catch (error) {
      toast.error("Analysis failed. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Resume Analysis</h1>
          <p className="mt-2 text-gray-600">
            Upload your resume and job description to get ATS optimization tips
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <ResumeUpload file={file} setFile={setFile} isLoading={isLoading} />
            <JobDescriptionInput
              jobDesc={jobDesc}
              setJobDesc={setJobDesc}
              onAnalyze={handleAnalyze}
            />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {results ? (
              <>
                <ATSScoreMeter score={results.atsScore} />
                <KeywordHighlights
                  keywords={results.keywords}
                  missingKeywords={results.missingKeywords}
                />
                <ResumePreview
                  htmlContent={results.optimizedResume}
                  onEdit={() => console.log("Edit clicked")}
                />
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-500">
                  Upload your resume and job description to see analysis results
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
