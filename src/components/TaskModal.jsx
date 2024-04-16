import React, { useState } from 'react';

const TaskModal = ({ taskTitle, taskContent, onSave, onClose, handleDelete, taskId }) => {
  const [editedTitle, setEditedTitle] = useState(taskTitle);
  const [editedContent, setEditedContent] = useState(taskContent);
  const [isEditing, setIsEditing] = useState(false);
  const [showCloseAlert, setShowCloseAlert] = useState(false);

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value); // Update editedTitle state
  };

  const handleContentChange = (event) => {
    setEditedContent(event.target.value); // Update editedContent state
  };

  const handleEdit = () => {
    onSave(taskId, editedTitle, editedContent); // Pass taskId along with edited values to onSave
    setIsEditing(false);
  };
  

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleOverlayClick = () => {
    if (isEditing) {
      setShowCloseAlert(true);
    } else {
      onClose();
    }
  };

  const handleCloseAlert = () => {
    setShowCloseAlert(false);
  };

  return (
    <div className='overlay' onClick={handleOverlayClick}>
      <div className='modal-container' onClick={(e) => e.stopPropagation()}>
        {isEditing ? (
          <>
            <input
              type='text'
              value={editedTitle}
              onChange={handleTitleChange} // Update editedTitle state
              className='modal-task-title'
            />
            <textarea
              value={editedContent}
              onChange={handleContentChange} // Update editedContent state
              className='modal-task-content'
            ></textarea>
          </>
        ) : (
          <>
            <div className='modal-task-title'>{taskTitle}</div>
            <div className='modal-task-content'>{taskContent}</div>
          </>
        )}
        <button className='modal-btn' onClick={toggleEditing}>
          {isEditing ? 'Discard' : 'Edit'}
        </button>
        {showCloseAlert && (
          <div className='modal-close-alert-container'>
            <p className='modal-close-warning-text'>Ooops, you're about to close the editor.</p>
            <button className='modal-btn' onClick={handleCloseAlert}>Back</button>
            <button className='modal-btn' onClick={onClose}>Close</button>
          </div>
        )}
        {!isEditing && (
          <button className='modal-btn' onClick={onClose}>
            Close modal
          </button>
        )}
        {!isEditing && (
          <button className='modal-btn' onClick={() => handleDelete(taskId)}>
            Delete Task
          </button>
        )}
        {isEditing && (
          <button className='modal-btn' onClick={handleEdit}>
            Save changes
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskModal;
