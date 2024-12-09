import React from "react";

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onSearch: (value: string) => void;
  onFilter: (value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategory,
  onSearch,
  onFilter,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 my-6">
      <input
        type="text"
        placeholder="Search blogs..."
        className="p-2 border rounded-md w-full sm:w-1/2"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onSearch(e.target.value)
        }
      />
      <select
        className="p-2 border rounded-md"
        value={selectedCategory}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onFilter(e.target.value)
        }
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
