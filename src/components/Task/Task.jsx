"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import Image from "next/image";
import TaskForm from "@/components/TaskForm";
import EditIcon from "@/assets/img/edit-svgrepo-com.svg";
import DeleteIcon from "@/assets/img/delete-svgrepo-com.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "white",
  },
};

const Task = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <li key={props.key} className="card-task">
      <Modal
        isOpen={isOpen}
        onRequestClose={handleOpenModal}
        style={customStyles}
      >
        <h1>Are you sure wanna delete this task?</h1>
        <div className="button-group">
          <button className="button-submit">Yes</button>
          <button onClick={handleCloseModal} className="button-cancel">
            No
          </button>
        </div>
      </Modal>
      <div className="group-task-header">
        <h5>{props.title}</h5>
        <button className="button-edit">
          <span>
            <Image src={EditIcon} width={15} height={15} alt="" />
          </span>
        </button>
      </div>

      <p>{props.description}</p>
      <p>📅: {props.dueDate}</p>
      <div className="group-task-footer">
        <p>
          🏷️: {Array.isArray(props.tags) ? props.tags.join(", ") : "No Tags"}
        </p>
        <button onClick={handleOpenModal} className="button-delete">
          <span>
            <Image src={DeleteIcon} width={15} height={15} alt="" />
          </span>
        </button>
      </div>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  dueDate: PropTypes.string,
  tags: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
