import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight, Tag, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends to Watch in 2024",
      excerpt: "Explore the latest AI trends that are reshaping industries and discover how businesses can leverage these technologies for competitive advantage.",
      author: "Sudhagar Chinnasamy",
      date: "March 15, 2024",
      category: "AI Trends",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Ethical AI: Our Approach to Responsible Development",
      excerpt: "Learn about our commitment to developing AI solutions that prioritize ethics, transparency, and positive social impact.",
      author: "Amit Singh",
      date: "March 10, 2024",
      category: "Ethics",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "How AI is Transforming Customer Experience",
      excerpt: "Discover real-world examples of how artificial intelligence is revolutionizing customer interactions and driving business growth.",
      author: "Sudhagar Chinnasamy",
      date: "March 5, 2024",
      category: "Customer Experience",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Role of Machine Learning in Modern Healthcare",
      excerpt: "Exploring how ML algorithms are improving patient outcomes and streamlining healthcare operations worldwide.",
      author: "Amit Singh",
      date: "February 28, 2024",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Automation vs. Human Touch: Finding the Right Balance",
      excerpt: "Understanding when to automate processes and when human intervention remains crucial for business success.",
      author: "Sudhagar Chinnasamy",
      date: "February 20, 2024",
      category: "Automation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Data Privacy in the Age of AI: Best Practices",
      excerpt: "Essential guidelines for maintaining data privacy and security while leveraging AI technologies in your organization.",
      author: "Amit Singh",
      date: "February 15, 2024",
      category: "Privacy",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "AI Trends", "Ethics", "Customer Experience", "Healthcare", "Automation", "Privacy"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Our</span> Blog
            </h1> */}
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Insights, trends, and thought leadership from the world of AI and technology. 
              Stay updated with the latest developments in artificial intelligence.
            </p>
            
            {/* Create Blog Button */}
            <Link 
              to="/create-blog"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create New Post
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  index === 0 
                    ? 'bg-yellow-500 text-white' 
                    : 'bg-white/50 text-gray-600 hover:bg-yellow-100 hover:text-yellow-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white/50 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {blogPosts[0].category}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white/50 backdrop-blur-md border border-white/30 shadow-lg rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <button className="text-yellow-500 hover:text-yellow-600 font-medium text-sm transition-colors duration-200 flex items-center">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;