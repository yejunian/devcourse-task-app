import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { container, description, title } from './Task.css';

type TTaskProps = {
  index: number;
  id: string;
  taskName: string;
  taskDescription: string;
};

const Task: FC<TTaskProps> = ({ index, id, taskName, taskDescription }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className={container}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={title}>{taskName}</div>
          <div className={description}>{taskDescription}</div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
