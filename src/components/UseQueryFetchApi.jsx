import React from "react";
import { useQuery } from "react-query";

const UseQueryFetchApi = () => {
  const fetchApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery("data", fetchApi, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error fetching data</>;
  }

  return (
    <>
      <h1>Fetch API using use query</h1>
      {data}
    </>
  );
};

export default UseQueryFetchApi;
