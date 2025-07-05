"use client"

import React, { useEffect, useState } from 'react';
import NewsCard from './newsCard';

const NewsList = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('/api/endpoint-news');
                console.log(response);
                
                const data = await response.json();
                console.log(data);
                
                setNewsData(data.news);
            } catch (error) {
                console.error("Ошибка при загрузке новостей:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid sm:grid md:grid lg:grid xl:hidden 2xl:hidden gap-[1vw]">
            {newsData.map(item => (
                <NewsCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default NewsList;
