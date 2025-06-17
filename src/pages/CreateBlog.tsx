import Header from '../components/Header';
import Footer from '../components/Footer';
import { PenTool, Save, Eye, Upload, Tag, Calendar, User } from 'lucide-react';
import { useState } from 'react';
import InteractiveCard from '../components/InteractiveCard';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    tags: '',
    image: ''
  });

  const [isPreview, setIsPreview] = useState(false);

  const categories = [
    'AI Trends',
    'Ethics',
    'Customer Experience',
    'Healthcare',
    'Automation',
    'Privacy',
    'Technology',
    'Innovation',
    'Future of Work'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Blog post data:', formData);
    alert('Blog post saved successfully!');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you'd upload to a service like Cloudinary or AWS S3
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          image: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-yellow-200 border-2 border-yellow-300 text-yellow-800 text-lg font-bold rounded-full shadow-medium mb-8">
              <PenTool className="w-6 h-6 mr-3 text-yellow-600" />
              CREATE BLOG POST
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Share Your Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create engaging content that inspires and educates our community about AI and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Toggle Preview/Edit */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/50 backdrop-blur-md border border-white/30 shadow-lg rounded-xl p-2 flex">
              <button
                onClick={() => setIsPreview(false)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  !isPreview 
                    ? 'bg-yellow-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-yellow-600'
                }`}
              >
                <PenTool className="w-4 h-4 inline mr-2" />
                Edit
              </button>
              <button
                onClick={() => setIsPreview(true)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isPreview 
                    ? 'bg-yellow-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-yellow-600'
                }`}
              >
                <Eye className="w-4 h-4 inline mr-2" />
                Preview
              </button>
            </div>
          </div>

          {!isPreview ? (
            /* Edit Mode */
            <InteractiveCard className="bg-white/50 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl p-8" intensity={0.5}>
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Basic Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      <User className="w-4 h-4 inline mr-2" />
                      Author
                    </label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 transition-all duration-200"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      <Tag className="w-4 h-4 inline mr-2" />
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 transition-all duration-200"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 transition-all duration-200 text-lg"
                    placeholder="Enter an engaging title..."
                    required
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Excerpt
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 transition-all duration-200 resize-none"
                    placeholder="Brief description of your blog post..."
                    required
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    <Upload className="w-4 h-4 inline mr-2" />
                    Featured Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-yellow-500 transition-all duration-200">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      {formData.image ? (
                        <img src={formData.image} alt="Preview" className="max-h-48 mx-auto rounded-lg shadow-lg" />
                      ) : (
                        <div>
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600">Click to upload an image</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 transition-all duration-200"
                    placeholder="AI, machine learning, technology..."
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Content
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows={15}
                    className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 transition-all duration-200 resize-none font-mono text-sm"
                    placeholder="Write your blog content here... You can use Markdown formatting."
                    required
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    Save Draft
                  </button>
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg flex items-center"
                  >
                    <Save className="w-5 h-5 mr-2" />
                    Publish Post
                  </button>
                </div>
              </form>
            </InteractiveCard>
          ) : (
            /* Preview Mode */
            <InteractiveCard className="bg-white/50 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl overflow-hidden" intensity={0.5}>
              {formData.image && (
                <div className="h-64 overflow-hidden">
                  <img src={formData.image} alt={formData.title} className="w-full h-full object-cover" />
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {formData.author || 'Author Name'}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date().toLocaleDateString()}
                  </div>
                  {formData.category && (
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {formData.category}
                    </div>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {formData.title || 'Your Blog Title'}
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {formData.excerpt || 'Your blog excerpt will appear here...'}
                </p>
                
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                    {formData.content || 'Your blog content will appear here...'}
                  </div>
                </div>
                
                {formData.tags && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.split(',').map((tag, index) => (
                        <span
                          key={index}
                          className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </InteractiveCard>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreateBlog;