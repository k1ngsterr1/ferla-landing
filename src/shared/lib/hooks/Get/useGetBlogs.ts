"use client";

import { useState, useEffect } from "react";
import axios from "axios";

// Function to fetch blocks
export function useGetBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(
          `https://ferla-backend-production.up.railway.app/api/carts/get-carts`
        );
        setBlogs(response.data.cards);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch carts:", error);
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);
  return { blogs, loading };
}
