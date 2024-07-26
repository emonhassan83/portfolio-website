import ManageBlogRow from "../../components/Dashboard/ManageBlogRow";
import { useTheme } from "../../lib/ThemeProvider";
import { useGetAllBlogsQuery } from "../../redux/features/blogApi";

const ManageBlogs = () => {
  const { data } = useGetAllBlogsQuery();
  const { theme } = useTheme(); //* for using light and dark themes
  // console.log(data);

  return (
    <>
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
              <th>Blog Title</th>
              <th>Blog Banner </th>
              <th>Author</th>
              <th>Publish</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.length > 0 &&
              data?.data?.map((project, index) => (
                <ManageBlogRow
                  key={project._id}
                  project={project}
                  index={index}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageBlogs;
