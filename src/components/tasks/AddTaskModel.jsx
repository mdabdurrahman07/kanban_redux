import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModel = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const onCancel = () => {
    reset();
    setIsOpen(false)
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 max-w-md mx-auto bg-white rounded shadow">
      <div>
        <label htmlFor="title" className="block font-medium">Title</label>
        <input
          className="w-full p-2 rounded-md border"
          type="text"
          id="title"
          {...register("title")}
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block font-medium">Description</label>
        <textarea
          className="w-full p-2 rounded-md border"
          id="description"
          {...register("description")}
          rows={4}
          required
        />
      </div>

      <div>
        <label htmlFor="deadline" className="block font-medium">Deadline</label>
        <input
          className="w-full p-2 rounded-md border"
          type="date"
          id="deadline"
          {...register("deadline")}
          required
        />
      </div>

      <div>
        <label htmlFor="assignTo" className="block font-medium">Assign To</label>
        <select
          className="w-full p-2 rounded-md border"
          id="assignTo"
          {...register("assignTo")}
          required
        >
          <option value="">Select</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>

      <div>
        <label htmlFor="priority" className="block font-medium">Priority</label>
        <select
          className="w-full p-2 rounded-md border"
          id="priority"
          {...register("priority")}
          required
        >
          <option value="">Select</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
    </Modal>
  );
};

export default AddTaskModel;
