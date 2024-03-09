"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import TaskForm from "../TaskForm";
import Task from "../Task";
import { Draggable, Droppable } from "react-beautiful-dnd";

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

const Board = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (data) => {
        console.log(data);
    };

    return (
        <Droppable key={props.idx} droppableId={`${props.idx}`}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="card-board"
                >
                    <Modal
                        isOpen={isOpen}
                        onRequestClose={handleOpenModal}
                        style={customStyles}
                    >
                        <TaskForm onSubmit={handleSubmit} />
                    </Modal>
                    <div className="card-header">
                        <h3>
                            {props.title} <span>({props.tasks.length})</span>
                        </h3>
                        <button
                            onClick={handleOpenModal}
                            className="button-add-task"
                        >
                            <span>+</span>
                        </button>
                    </div>
                    <div className="all-task">
                        <ul>
                            {props.tasks.map((task, index) => (
                                <Draggable
                                    key={task.id}
                                    draggableId={task.id}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Task
                                                id={task.id}
                                                title={task.title}
                                                description={task.description}
                                                dueDate={task.dueDate}
                                                tags={task.tags}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    </div>
                </div>
            )}
        </Droppable>
    );
};

Board.propTypes = {
    title: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape(Task.propTypes)),
};

Board.defaultProptypes = {
    tasks: [],
};

export default Board;
