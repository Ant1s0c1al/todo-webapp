import { Card, Alert } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

const TodoItem = ({ todoitem, onDelete, onToggle }) => {
  return (
    <>

      <Alert className={`my-2 d-flex justify-content-between ${todoitem.important ? 'bg-warning' : ''}`} key='warning' variant='warning' onDoubleClick={() => onToggle(todoitem.id)}
      >
        {todoitem.text}
        <FaTimes
          className='text-danger'
          onClick={() => onDelete(todoitem.id)}
        />
      </Alert>

    </>
  );
}

export default TodoItem;
