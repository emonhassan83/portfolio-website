import { useState } from "react";
// import PaymentModal from "../../pages/Dashboard/Payment/PaymentModal";

const ManageProjectRow = ({ project, index}) => {
  const [isOpen, setIsOpen] = useState(false);

//   const closeModal = () => {
//     setIsOpen(false);
//   };

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={project?.classInfo?.classImage}
                  alt="Class Image"
                />
              </div>
            </div>
          </div>
        </td>
        <td>{project?.classInfo?.className}</td>
        <td>{project?.classInfo?.instructor?.name}</td>
        <td>{project?.classInfo?.seats}</td>
        <td>
          <button
            // onClick={() => handleDelete(project._id)}
            className="btn btn-xs btn-color"
          >
            Delete
          </button>
        </td>
        <td>
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-xs btn-color"
          >
            ${project?.classInfo?.courseFree} tk.
          </button>

          {/* <PaymentModal
            project={project}
            isOpen={isOpen}
            closeModal={closeModal}
            
          /> */}
        </td>
      </tr>
    </>
  );
};

export default ManageProjectRow;