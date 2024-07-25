import { Toaster } from "react-hot-toast";

const ManageProjectRow = ({ blog, index }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const closeModal = () => {
  //     setIsOpen(false);
  //   };

  //   const handleDelete = async (id) => {
  //     try {
  //       const res = await deleteAProject(id);
  //       console.log(res);
  //       if (res.data.success) {
  //         toast.success("Project deleted successfully!");
  //       }
  //     } catch (error) {
  //       toast.error(error.message);
  //       console.error(error.message);
  //     }
  //   };

  return (
    <>
      <Toaster />
      <tr>
        <td>{index + 1}</td>
        <td>{blog?.name}</td>
        <td>{blog?.banner}</td>
        <td>{blog?.author?.name}</td>
        <td>
          <button className="btn btn-sm">Publish</button>
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
              //   onClick={() => handleDelete(project._id)}
              className="btn btn-xs btn-color"
            >
              Delete
            </button>
          </div>
        </td>

        {/* <UpdateProjectModal
          project={project}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          closeModal={closeModal}
        /> */}
      </tr>
    </>
  );
};

export default ManageProjectRow;
