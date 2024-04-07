import React, { useState } from 'react';
import axios from 'axios';

export default function PostChapter() {
    const [chapterData, setChapterData] = useState({
        title: '',
        content: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setChapterData({
            ...chapterData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7128/api/Chapter/Create', chapterData);
            console.log('Chapter created:', response.data);
            window.location.reload();
            // Do something after successful creation, like showing a success message or redirecting
        } catch (error) {
            console.error('Error creating chapter:', error);
            // Handle error, show error message to user, etc.
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Chapter Name:</label>
                <input type="text" id="title" name="title" value={chapterData.title} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Create Chapter</button>
        </form>
    );
}
