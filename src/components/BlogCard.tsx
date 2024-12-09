const BlogCard = ({
    title,
    content,
    category,
  }: {
    title: string;
    content: string;
    category: string;
  }) => {
    return (
      <div className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{content.slice(0, 100)}...</p>
        <div className="text-sm text-blue-500 mt-4">{category}</div>
      </div>
    );
  };
  
  export default BlogCard;
  