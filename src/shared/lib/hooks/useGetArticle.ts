"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export function useGetArticles(id: number | string | string[]) {
  const [articleData, setArticleData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ferla-backend-production.up.railway.app/api/articles/get-article/${id}`
        );
        setIsLoading(true);
        setArticleData(response.data.article.content);
      } catch (error: unknown | any) {
        console.error(`There was an error with article fetching: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { articleData, isLoading };
}
