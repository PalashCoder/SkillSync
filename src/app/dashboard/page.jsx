"use client";
import { useState } from "react";
import Navbar from "@/component/Navbar";
import { FiFileText, FiStar, FiDownload, FiTrash2 } from "react-icons/fi";

export default function Dashboard() {
  const [resumes, setResumes] = useState([
    {
      id: 1,
      name: "Software Engineer Resume",
      lastEdited: "2023-05-15",
      atsScore: 85,
      isFavorite: true,
    },
    {
      id: 2,
      name: "Product Manager Resume",
      lastEdited: "2023-05-10",
      atsScore: 72,
      isFavorite: false,
    },
  ]);

  const deleteResume = (id) => {
    setResumes(resumes.filter((resume) => resume.id !== id));
  };

  const toggleFavorite = (id) => {
    setResumes(
      resumes.map((resume) =>
        resume.id === id
          ? { ...resume, isFavorite: !resume.isFavorite }
          : resume
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Resumes</h1>
          <p className="mt-2 text-gray-600">Manage your saved resumes</p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {resumes.map((resume) => (
              <div key={resume.id} className="p-4 hover:bg-gray-50 transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleFavorite(resume.id)}
                      className="text-gray-400 hover:text-yellow-400"
                    >
                      <FiStar
                        className={`h-5 w-5 ${
                          resume.isFavorite
                            ? "text-yellow-400 fill-yellow-400"
                            : ""
                        }`}
                      />
                    </button>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {resume.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Last edited: {resume.lastEdited}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        resume.atsScore >= 80
                          ? "bg-green-100 text-green-800"
                          : resume.atsScore >= 60
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      ATS: {resume.atsScore}/100
                    </span>
                    <button className="text-gray-400 hover:text-primary">
                      <FiDownload className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => deleteResume(resume.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <FiTrash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {resumes.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              <FiFileText className="mx-auto h-12 w-12" />
              <p className="mt-2">No resumes saved yet</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
