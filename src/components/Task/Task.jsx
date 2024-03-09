import PropTypes from "prop-types";
import Image from "next/image";
import EditIcon from "@/assets/img/edit-svgrepo-com.svg";
import DeleteIcon from "@/assets/img/delete-svgrepo-com.svg";

const Task = (props) => {
    const handleDelete = () => {
        props.onDelete(props.id);
    };
    return (
        <li className="card-task">
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
                    🏷️:{" "}
                    {Array.isArray(props.tags)
                        ? props.tags.join(", ")
                        : "No Tags"}
                </p>
                <button onClick={handleDelete} className="button-delete">
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
