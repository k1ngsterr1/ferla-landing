"use client";
import { useState, useEffect } from "react";

const useScript = (src: string) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let script = document.querySelector(`script[src="${src}"]`);

    if (!script) {
      script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);

      const handleLoad = () => {
        setLoaded(true);
      };

      const handleError = () => {
        setError(true);
      };

      script.addEventListener("load", handleLoad);
      script.addEventListener("error", handleError);

      return () => {
        script.removeEventListener("load", handleLoad);
        script.removeEventListener("error", handleError);
      };
    } else {
      // If script already exists in the document, assume it's loaded
      setLoaded(true);
    }
  }, [src]);

  return { loaded, error };
};

export default useScript;
