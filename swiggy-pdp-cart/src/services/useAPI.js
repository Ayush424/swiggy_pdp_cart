import { useEffect, useState } from "react"

const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchApi = () => {
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(json => {
        setData(json);
        setLoading(false);
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return { loading, data }
};

export default useApi;