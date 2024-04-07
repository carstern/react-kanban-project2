import React, { useState, useEffect } from 'react';

const TaskModal = ({ task, onClose, updateTask }) => {
  const [editedTitle, setEditedTitle] = useState(task.text);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setEditedTitle(task.text);
    setEditedDescription(task.description);
  }, [task]);

  const handleTitleEdit = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDescriptionEdit = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTask(task.id, { text: editedTitle, description: editedDescription });
    setIsEditing(false);
  };

  const handleDiscard = () => {
    setEditedTitle(task.text);
    setEditedDescription(task.description);
    setIsEditing(false);
  };

  return (
    <div className='overlay' onClick={onClose}>
      <div className='modalContainer' onClick={(e) => e.stopPropagation()}>
        {isEditing ? (
          <>
            <input
              type='text'
              value={editedTitle}
              onChange={handleTitleEdit}
              className='modal-task-text'
            />
            <input
              type='text'
              value={editedDescription}
              onChange={handleDescriptionEdit}
              className='modal-task-description'
            />
          </>
        ) : (
          <>
            <div className='modal-task-text'><p>{editedTitle}</p></div>
            <div className='modal-task-description'><p>{editedDescription}</p></div>
          </>
        )}
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleDiscard}>Discard</button>
          </>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TaskModal;
