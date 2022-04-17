import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const API_KEY = '52b9bba7db644f99a7f030b0098452c9';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const query = category === 'all' ? '' : `&category=${category}`;

      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`
        );

        setArticles(response.data.articles);
      } catch (error) {
        throw new Error(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [category]);

  if (isLoading) {
    return <NewsListBlock>로딩 중...</NewsListBlock>;
  }

  if (!articles) return null;

  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
