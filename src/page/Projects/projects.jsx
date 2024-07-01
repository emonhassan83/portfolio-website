import { useGetAllProjectsQuery } from "../../redux/features/projectApi";

const ProjectsPage = () => {
  const { data } = useGetAllProjectsQuery();
  console.log(data);
  
  return <div className="mt-20">Projects Page</div>;
};

export default ProjectsPage;
