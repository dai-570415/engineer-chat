import React, { useState, useEffect } from 'react';
import axios from 'axios';

// NEWS API(https://newsapi.org/) 
const keyId = 'Your_Key';
const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${keyId}`;

const News = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const res = await axios.get(URL);
            setArticles(res.data.articles); // NEWS API
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
        <>
            <h3>日本のニュース</h3>
            {articles.slice(0, 10).map((item) => (
                <div key={item.url}>
                    <p className="title">
                        <a href={item.url} rel="noopener noreferrer" target="_blank">{item.title.substr(0,30)}...</a>
                    </p>
                </div>
            ))}
            <style jsx>{`
                h3 {
                    font-size: 12px;
                    font-weight: 100;
                    color: #BCBCBC;
                    padding: 15px;
                }
                .title {
                    font-size: 12px;
                    line-height: 1.25em;
                    padding: 15px;
                    border-top: 1px solid #fff;
                }
                .title a {
                    display: block;
                    font-size: 12px;
                    text-decoration: none;
                }
            `}</style>
        </>
    );
}

export default News;