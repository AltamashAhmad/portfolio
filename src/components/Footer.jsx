function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Altamash Ahmad. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer; 