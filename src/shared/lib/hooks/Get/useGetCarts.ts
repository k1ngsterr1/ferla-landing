"use client";

import { useState, useEffect } from "react";
import axios from "axios";

// Function to fetch blocks
export function useGetCarts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCarts = async () => {
      try {
        const response = await axios.get(
          `https://ferla-backend-production.up.railway.app/api/carts/get-carts`
        );
        setData(response.data.cards);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch carts:", error);
      } finally {
        setLoading(false);
      }
    };
    getCarts();
  }, []);
  return { data, loading };
}
