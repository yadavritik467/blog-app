import { useState } from "react";
import BlogCard from "../components/BlogCard";
import FilterBar from "../components/FilterBar";
import { blogData } from "../data/BlogData";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [blogPerPage, setBlogPerPage] = useState<number>(9);

  // Filtering blogs
  const filteredBlogs = blogData.filter((blog) => {
    const matchesCategory = selectedCategory
      ? blog.category === selectedCategory
      : true;
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredBlogs?.length / blogPerPage);

  const startIndex = (currentPage - 1) * blogPerPage;
  const paginatedBlogs = filteredBlogs?.slice(
    startIndex,
    startIndex + blogPerPage
  );

  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setBlogPerPage(itemsPerPage);
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className="container mx-auto p-4 ">
      <FilterBar
        categories={["React", "CSS", "JavaScript"]}
        selectedCategory={selectedCategory}
        onSearch={setSearchTerm}
        onFilter={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            content={blog.content}
            category={blog.category}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 max-sm:px-2 mt-6 gap-4">
        {/* Previous and Next Buttons */}
        <div className="flex flex-wrap   sm:justify-start">
          <button
            className="px-4 py-2 max-sm:px-2 border rounded-l-md bg-gray-200 hover:bg-gray-300"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-4 max-sm:px-2 py-2 border ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-4 max-sm:px-2 py-2 border rounded-r-md bg-gray-200 hover:bg-gray-300"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>

        {/* Page Dropdown */}
        <div className="flex items-center">
          <label htmlFor="page-select" className="mr-2">
            Blogs per page:
          </label>
          <select
            id="page-select"
            className="p-2 border rounded-md"
            value={blogPerPage}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleItemsPerPageChange(Number(e.target.value))
            }
          >
            {[6, 9, 15, 18]?.map((num, index) => (
              <option key={index} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
