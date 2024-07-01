import { useState } from "react";
// import PaymentModal from "../../pages/Dashboard/Payment/PaymentModal";

const ManageProjectRow = ({ project, index }) => {
  console.log(project);
  const [isOpen, setIsOpen] = useState(false);

  //   const closeModal = () => {
  //     setIsOpen(false);
  //   };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={project?.image} alt="Class Image" />
            </div>
          </div>
        </div>
      </td>
      <td>{project?.name}</td>
      <td>{project?.duration}</td>
      <td>
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-xs btn-color"
          >
            Update
          </button>
          <button
            // onClick={() => handleDelete(project._id)}
            className="btn btn-xs btn-color"
          >
            Delete
          </button>
        </div>
      </td>
      <td>
        <button className="btn btn-xs btn-color">Details</button>

        {/* <PaymentModal
            project={project}
            isOpen={isOpen}
            closeModal={closeModal}
            
          /> */}
      </td>
    </tr>
  );
};

export default ManageProjectRow;
