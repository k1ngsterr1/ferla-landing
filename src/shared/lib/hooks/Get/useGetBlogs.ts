"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface IBlogs {
  title: string;
  image: string;
  href: string;
}

// Function to fetch blocks
export function useGetBlogs() {
  const [blogs, setBlogs] = useState<IBlogs[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(
          `https://ferla-backend-production.up.railway.app/api/blog/get-blogs`
        );
        setBlogs(response.data.cards);
        console.log(response.data.cards);
      } catch (error) {
        console.error("Failed to fetch blocks:", error);
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);
  return { blogs, loading };
}
