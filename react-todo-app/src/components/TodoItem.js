import Card from 'react-bootstrap/Card';
import { FaTimes } from 'react-icons/fa';

const TodoItem = ({ todoitem, onDelete }) => {
  return (
    <>
      <div>
        <Card>
          <Card.Body>

            <Card.Text
              className='d-flex justify-content-between'
            > {todoitem.text}
              <FaTimes className='text-danger' onClick={() => onDelete(todoitem.id)} />
            </Card.Text>

          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default TodoItem;
