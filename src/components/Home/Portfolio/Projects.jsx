import { useGetAllProjectsQuery } from "../../../redux/features/projectApi";

const Projects = () => {
    const { data } = useGetAllProjectsQuery();
    console.log(data);
    
    return (
        <div>
            
        </div>
    );
};

export default Projects;