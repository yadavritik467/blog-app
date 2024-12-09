const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Blog App</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
