import Card from 'react-bootstrap/Card';
import { FaTimes } from 'react-icons/fa';

const TodoItem = ({ todoitem, onDelete, onToggle }) => {
  return (
    <>
      <div
        className={`fw-bold ${todoitem.important ? 'text-warning' : ''}`}
        onDoubleClick={() => onToggle(todoitem.id)}
      >

        <Card>
          <Card.Body>

            <Card.Text
              className='d-flex justify-content-between'
            > {todoitem.text}
              <FaTimes
                className='text-danger'
                onClick={() => onDelete(todoitem.id)}
              />
            </Card.Text>

          </Card.Body>
        </Card>

      </div>
    </>
  );
}

export default TodoItem;
