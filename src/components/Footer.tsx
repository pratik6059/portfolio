
export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <div className="text-3xl font-bold text-yellow-400">PS</div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Twitter
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">
              © Pratik Sable 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
