"use client"
import { useState } from 'react';
import { SaveCategory } from '../service/caregory.service';

const CategoryForm = () => {
  const [category, setCategory] = useState({
    id: '',
    name: '',
    alias: '',
    desc: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCategory(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    await SaveCategory(category);
    setCategory({
      id: '',
      name: '',
      alias: '',
      desc: '',
    });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={category.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="alias" className="block text-gray-700 font-bold mb-2">Alias</label>
        <input
          type="text"
          id="alias"
          name="alias"
          value={category.alias}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="desc" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          id="desc"
          name="desc"
          value={category.desc}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button type="submit" className='w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'> 
        { loading? 'Summitting...': 'Submit' }
      </button>
    </form>
  );
};

export default CategoryForm;
