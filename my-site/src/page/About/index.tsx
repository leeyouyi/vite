import { useQuery } from "@tanstack/react-query";
import { fetchAttractions } from "../../api";

const About = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchAttractions,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return <>About</>;
};

export default About;
