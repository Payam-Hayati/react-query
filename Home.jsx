/*
npm i @tanstack/react-query
or
npm i react-query

npm i axios
*/
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isError) {
    return <h1> Sorry, There was an error! </h1>;
  }

  if (isLoading) {
    return <h1> Loading... </h1>;
  }
  return (
    <div>
      Home Page <p>{data?.fact}</p> <button onClick={refetch} className="but-blue">Update</button>
    </div>
  );
};

export default Home;
