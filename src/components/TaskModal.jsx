import React, { useState } from 'react';

const TaskModal = ({ taskTitle, taskContent, onSave, onClose, handleDelete }) => {
  const [editedTitle, setEditedTitle] = useState(taskTitle);
  const [editedContent, setEditedContent] = useState(taskContent);
  const [isEditing, setIsEditing] = useState(false);
  const [showCloseAlert, setShowCloseAlert] = useState(false); // Track if the close alert is shown

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setEditedContent(event.target.value);
  };

  const handleEdit = () => {
    onSave(editedTitle, editedContent);
    setIsEditing(false);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  
  const handleOverlayClick = () => {
    if (isEditing) {
      setShowCloseAlert(true); // Show the close alert if editing
    } else {
      onClose(); // Close the modal if not editing
    }
  };

  const handleCloseAlert = () => {
    setShowCloseAlert(false); // Hide the close alert
  };

  return (
    <div className='overlay' onClick={handleOverlayClick}>
      <div className='modal-container' onClick={(e) => e.stopPropagation()}>
        {isEditing ? (
          <>
            <input
              type='text'
              value={editedTitle}
              onChange={handleTitleChange}
              className='modal-task-title'
            />
            <textarea
              value={editedContent}
              onChange={handleContentChange}
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
          <button className='modal-btn' onClick={handleDelete}>
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
