import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  removeTask,
  updateStatus,
} from "../../../redux/features/tasks/tasksSlice";

const TaskCard = ({ tasksItem }) => {
  const dispatch = useDispatch();
  let updatedStatus;
  if (tasksItem.status === "pending") {
    updatedStatus = "running";
  } else if (tasksItem.status === "running") {
    updatedStatus = "done";
  } else {
    updatedStatus = "archive";
  }
  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          tasksItem.priority === "high" ? "text-red-500" : ""
        } ${tasksItem.priority === "medium" ? "text-yellow-500" : ""} ${
          tasksItem.priority === "low" ? "text-green-500" : ""
        }`}
      >
        {tasksItem?.title}
      </h1>
      <p className="mb-3">{tasksItem?.description}</p>
      <p className="text-sm">Assigned to - {tasksItem?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{tasksItem?.date}</p>
        <div className="flex gap-3">
          <button
            onClick={() => dispatch(removeTask(tasksItem.id))}
            title="Delete"
          >
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(
                updateStatus({ id: tasksItem.id, status: updatedStatus })
              )
            }
            title="Updated Status"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
