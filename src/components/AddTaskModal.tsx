import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/styles.css';

Modal.setAppElement('#root');

interface AddTaskModalProps {
  isOpen: boolean;
  onAddTask: (description: string) => void;
  onClose: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({
  isOpen,
  onAddTask,
  onClose,
}) => {
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (description.trim()) {
      onAddTask(description);
      setDescription('');
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Add Task">
      <div className="modal-header">
        <h2>Add New Task</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
        />
        <div className="button-container">
          <button type="submit">Add Task</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
