import ManageProjectRow from "../../components/Dashboard/ManageProjectRow";
import { useTheme } from "../../lib/ThemeProvider";
import { useGetAllProjectsQuery } from "../../redux/features/projectApi";

const ManageProject = () => {
  const { data } = useGetAllProjectsQuery();
  const { theme } = useTheme(); //* for using light and dark themes
  // console.log(data);

  return (
    <div>
      <div className="overflow-x-auto">
        <table
          className={`table ${
            theme.mode === "dark" ? "text-gray-100" : "text-gray-800"
          }`}
        >
          {/* head */}
          <thead
            className={`${
              theme.mode === "dark" ? "text-gray-100" : "text-gray-800"
            }`}
          >
            <tr>
              <th>SL</th>
              <th>Project Image</th>
              <th>Project Name </th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.length > 0 &&
              data?.data?.map((project, index) => (
                <ManageProjectRow
                  key={project._id}
                  project={project}
                  index={index}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProject;
