import Link from "next/link";
import { FiHome, FiFileText, FiSettings, FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-primary">SkillSync AI</h1>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/" className="border-primary text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              <FiHome className="mr-2" /> Home
            </Link>
            <Link href="/analyze" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              <FiFileText className="mr-2" /> Analyze
            </Link>
            <Link href="/templates" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              <FiSettings className="mr-2" /> Templates
            </Link>
            <Link href="/dashboard" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              <FiUser className="mr-2" /> Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}