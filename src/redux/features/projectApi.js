import baseApi from "../../api/baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProject: builder.mutation({
      query: (projectData) => ({
        url: "/project/add-project",
        method: "POST",
        body: projectData,
      }),
    }),
    updateProject: builder.mutation({
      query: ({ id, updateData }) => ({
        url: `/project/update-project/${id}`,
        method: "PUT",
        body: updateData,
      }),
    }),
    getAllProjects: builder.query({
      query: () => ({
        url: "/project/all-projects",
        method: "GET",
      }),
    }),
    getAProject: builder.query({
      query: (id) => ({
        url: `/project/${id}`,
        method: "GET",
      }),
    }),
    deleteAProject: builder.mutation({
      query: (id) => ({
        url: `/project/delete-project/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddProjectMutation,
  useUpdateProjectMutation,
  useGetAllProjectsQuery,
  useGetAProjectQuery,
  useDeleteAProjectMutation,
} = projectApi;

export default projectApi;
