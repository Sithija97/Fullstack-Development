import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TutorialService from "../services/tutorial.service";

const Tutorial = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };

  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const getTutorial = (id) => {
    TutorialService.get(id)
      .then((response) => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id) getTutorial(id);
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = (status) => {
    var data = {
      id: currentTutorial.id,
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: status,
    };
    TutorialService.update(currentTutorial.id, data)
      .then((response) => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    TutorialService.update(currentTutorial.id, currentTutorial)
      .then((response) => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    TutorialService.remove(currentTutorial.id)
      .then((response) => {
        console.log(response.data);
        navigate("/tutorials");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      {currentTutorial ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTutorial.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentTutorial.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
          </form>
          {currentTutorial.published ? (
            <button
              className="badge badge-primary mr-2 bg bg-success"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2 bg bg-success"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}
          <button
            className="badge badge-danger mr-2 bg bg-danger"
            onClick={deleteTutorial}
          >
            Delete
          </button>
          <button
            type="submit"
            className="badge badge-success bg bg-warning"
            onClick={updateTutorial}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
