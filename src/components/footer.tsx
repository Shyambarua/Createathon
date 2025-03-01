export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold">Your Brand</h2>
            <p className="text-gray-400 mt-2">The best platform for seamless collaboration and development.</p>
          </div>
  
          {/* Middle Navigation */}
          <div className="flex justify-center">
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>

            
          </div>
  
          {/* Right Social Icons */}
          <div className="flex justify-end space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  }
  