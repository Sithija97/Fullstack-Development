import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import ProjectService from "../services/ProjectService";

const Project = ({ project }) => {
  // const { id } = useParams();
  // const [project, setProject] = useState({});

  // const loadProject = () => {
  //   ProjectService.getProjectById(id)
  //     .then((data) => setProject(data))
  //     .catch((e) => console.log("Error: ", e));
  // };

  // useEffect(() => {
  //   loadProject();
  // });

  return (
    <tr>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className="text-sm text-gray-500">{project.name}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className="text-sm text-gray-500">{project.description}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className="text-sm text-gray-500">{project.techStack}</div>
      </td>
      <td className="text-left px-2 py-4 whitespace-nowrap font-medium text-sm">
        <button className="text-indigo-600 hover:text-indigo-800 px-4">Edit</button>
        <button className="text-red-600 hover:text-red-800 px-4">Delete</button>
      </td>
    </tr>
  );
};

export default Project;
