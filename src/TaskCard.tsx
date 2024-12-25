import React from 'react';
import './TaskCard.css';

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assignee: string;
  status: 'pending' | 'done';
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  dueDate,
  completedAtDate,
  assignee,
  status,
}) => {
  return (
    <div className="task-card">
      <h3 className="task-title">{title}</h3>
      {status === 'pending' && <p className="task-date">Due on: {dueDate}</p>}
      {status === 'done' && (
        <p className="task-date">Completed on: {completedAtDate}</p>
      )}
      <p className="task-assignee">Assignee: {assignee}</p>
    </div>
  );
};

export default TaskCard;
