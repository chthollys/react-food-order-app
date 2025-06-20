import { useCallback, useEffect, useState } from "react";

export async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.message || "Send Request Failed.");
  }
  return resData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsPending(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        setError({ message: error.message || "Send Request Failed." });
      }
      setIsPending(false);
    },
    [url, config],
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config)
      sendRequest();
  }, [sendRequest, config]);

  return {
    data,
    isPending,
    error,
    sendRequest,
    clearData,
  };
}
