// import { useState } from "react";
import { Toaster } from "react-hot-toast";

const ManageSkillRow = ({ skill, index }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const closeModal = () => {
  //     setIsOpen(false);
  //   };

  //   const handleDelete = async (id) => {
  //     console.log(id);
  //     try {
  //         const res = await deleteAskill(id);
  //         console.log(res);
  //         if (res.data.success) {
  //           toast.success("skill deleted successfully!");
  //         }
  //     } catch (error) {
  //         toast.error(error.message);
  //         console.error(error.message);
  //     }
  //   };

  return (
    <>
      <Toaster />
      <tr>
        <td>{index + 1}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={skill?.image} alt="Class Image" />
              </div>
            </div>
          </div>
        </td>
        <td>{skill?.name}</td>
        <td>{skill?.image}</td>
        <td>
          <button className="btn btn-xs">Add</button>
        </td>
        <td>
          <div className="flex items-center">
            <button
              //   onClick={() => setIsOpen(true)}
              className="btn btn-xs btn-color"
            >
              Update
            </button>
            <button
              //   onClick={() => handleDelete(skill._id)}
              className="btn btn-xs btn-color"
            >
              Delete
            </button>
          </div>
        </td>

        {/* <UpdateskillModal
            skill={skill}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            closeModal={closeModal}
          /> */}
      </tr>
    </>
  );
};

export default ManageSkillRow;
