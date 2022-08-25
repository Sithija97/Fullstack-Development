import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { DocumentAddIcon } from "@heroicons/react/outline";
import ProjectService from "../services/ProjectService";
import TicketService from "../services/TicketService";

export default function AddModal({ open, setOpen }) {
  const initialState = {
    name: "",
    description: "",
    type: "",
    project: null
  };

  const cancelButtonRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [ticket, setTicket] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const loadAllProjects = () => {
    setLoading(true);
    try {
      ProjectService.getAllProjects()
        .then((data) => setProjects(data))
        .catch((e) => console.log("Error: ", e));
    } catch (error) {
      console.log("error :", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadAllProjects();
  }, [projects]);
  

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setTicket({ ...ticket, [name]: value });
  };

  const handleAddTicket = () => {
    // e.preventDefault();
    console.log('ticket :',ticket);
    TicketService.addTicket(ticket);
    setTicket(initialState);
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <DocumentAddIcon
                        className="h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Add Ticket
                      </Dialog.Title>
                      {/* <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Create a new Project
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="px-10">
                  <input type="text" placeholder="name" name="name" value={ticket.name} onChange={handleChange} />
                  <input type="text" placeholder="description" name="description" value={ticket.description} onChange={handleChange} />
                  <select name="type" id="type-select" className="text-gray-400 w-40" onChange={handleChange}>
                    <option value="">choose a type</option>
                    <option value="epic">Epic</option>
                    <option value="story">Story</option>
                    <option value="task">Task</option>
                    <option value="sub-task">Sub task</option>
                  </select>
                  <select name="project" id="project-select" className="text-gray-400 w-40" onChange={handleChange}>
                    <option value="">choose the project</option>
                    {!loading && (projects.map(project => (
                      <option value={project.id}>{project.name}</option>
                    )))
                    }
                  </select>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      handleAddTicket();
                    }}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
