import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const TopHeadline = () => {

    const [articles, setArticles] = useState([]);
    useEffect( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a88f826d203d4558831f453c4c3fd824'
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
        </div>
    );
};

export default TopHeadline;