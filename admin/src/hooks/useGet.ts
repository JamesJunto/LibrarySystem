import { useState, useEffect } from "react";
import type { IBooks } from "../Interface/IBooks";

export const useGet = (url: string = "/defaultValue") => {
  const [data, setData] = useState<IBooks[]>([
    {
      id: 0,
      title: "",
      author: "",
      year: "",
      genre: "",
    },
  ]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err: unknown) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchData();
  },[url])

  return { data, loading, error, setData, fetchData };
};
