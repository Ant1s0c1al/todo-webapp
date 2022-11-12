import Card from 'react-bootstrap/Card';
import { FaTimes } from 'react-icons/fa';

const TodoItem = ({ todoitem }) => {
  return (
    <>
      <div>
        <Card>
          <Card.Body>
            <Card.Text className='d-flex justify-content-between'>{todoitem.text}<FaTimes className='text-danger' /></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default TodoItem;
