import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostTopic() {
    const [topicData, setTopicData] = useState({
        title: '',
        chapterId: '',
    });
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        async function fetchChapters() {
            try {
                const response = await axios.get('https://localhost:7128/api/Chapter/getAllChapter');
                setChapters(response.data);
            } catch (error) {
                console.error('Error fetching chapters:', error);
                // Handle error, show error message to user, etc.
            }
        }

        fetchChapters();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTopicData({
            ...topicData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7128/api/Topic/Create', topicData);
            console.log('Topic created:', response.data);
            window.location.reload();
            // Do something after successful creation, like showing a success message or redirecting
        } catch (error) {
            console.error('Error creating topic:', error);
            // Handle error, show error message to user, etc.
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Create Topic</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Topic Title:</label>
                    <input type="text" id="title" name="title" value={topicData.title} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="chapter" className="block text-sm font-medium text-gray-700">Select Chapter:</label>
                    <select id="chapter" name="chapterId" value={topicData.chapterId} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
                        <option value="">Select a Chapter</option>
                        {chapters.map((chapter) => (
                            <option key={chapter.id} value={chapter.id}>
                                {chapter.title}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Create Topic</button>
            </form>
        </div>
    );
}
