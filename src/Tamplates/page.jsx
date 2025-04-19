import Navbar from '../components/Navbar'
import { FiArrowRight } from 'react-icons/fi'

const templates = [
  {
    id: 1,
    name: 'Modern Professional',
    category: 'All Industries',
    image: '/images/template-1.jpg'
  },
  {
    id: 2,
    name: 'Tech Minimalist',
    category: 'Technology',
    image: '/images/template-2.jpg'
  },
  {
    id: 3,
    name: 'Creative Designer',
    category: 'Design',
    image: '/images/template-3.jpg'
  },
  {
    id: 4,
    name: 'Executive',
    category: 'Business',
    image: '/images/template-4.jpg'
  }
]

export default function Templates() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Resume Templates</h1>
          <p className="mt-2 text-gray-600">Choose a professionally designed template</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{template.name}</h3>
                <p className="text-sm text-gray-500">{template.category}</p>
                <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700">
                  Use Template
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}