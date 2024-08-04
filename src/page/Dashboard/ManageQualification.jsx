import ManageQualificationRow from "../../components/Dashboard/ManageQualificationRow";
import { useTheme } from "../../lib/ThemeProvider";
import { useGetAllQualificationsQuery } from "../../redux/features/qualificationApi";

const ManageQualification = () => {
  const { data } = useGetAllQualificationsQuery();
  const { theme } = useTheme(); //* for using light and dark themes
  // console.log(data);

  //* if there have no skill data
  if (data?.data?.length === 0) {
    return (
      <div className="mt-[45%] h-[100vh]">
        <p className="text-center font-semibold">
          There is no longer qualification here!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto my-4">
        <button className="btn btn-sm">Add</button>
      </div>

      {data?.data?.length > 0 && (
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
                <th>Qualification name</th>
                <th>Designation</th>
                <th>Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((qualification, index) => (
                <ManageQualificationRow
                  key={qualification._id}
                  qualification={qualification}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ManageQualification;
