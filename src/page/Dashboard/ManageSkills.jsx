import ManageSkillRow from "../../components/Dashboard/ManageSkillRow";
import { useTheme } from "../../lib/ThemeProvider";
import { useGetAllSkillsQuery } from "../../redux/features/skillsApi";

const ManageSkills = () => {
  const { data } = useGetAllSkillsQuery();
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
              <th>Skill Name</th>
              <th>Skill Image</th>
              <th>Add</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.length > 0 &&
              data?.data?.map((skill, index) => (
                <ManageSkillRow key={skill._id} skill={skill} index={index} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSkills;
