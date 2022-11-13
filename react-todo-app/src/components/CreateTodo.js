import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

// Pass onCreate as Prop
const CreateTodo = ({ onCreate }) => {
  // React(Hooks) useState
  const [text, setText] = useState('');
  const [important, setImportant] = useState(false);

  // #Function • onSubmit Form
  // ...           (e)vent
  const onSubmit = (e) => {
    // Prevent "Empty" Input Field Submit
    e.preventDefault()
    // IF NOT(NO) Text >>> Alert('message')
    if (!text) {
      alert('ERROR: Field cannot be empty!!!')
      return
    }
    // IF *PASSED* >>> Call onCreate()
    // Passes text, important as Objects
    onCreate({ text, important })
    // RESET/CLEAR Form
    setText('')
    setImportant(false)
  }

  return (
    <>
      <Form onSubmit={onSubmit} >

        <Form.Group className='mt-4 mb-3'>
          <Form.Label>
            TODO:
          </Form.Label>
          <Form.Control
            value={text}
            onChange={(e) => setText(e.target.value)}
            type='text'
            placeholder='Start Typing ...'
          >
          </Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Check
            checked={important}
            value={important}
            onChange={(e) => setImportant(e.currentTarget.checked)}
            type='checkbox'
            label='Important'
          >
          </Form.Check>
        </Form.Group>

        <Button
          className='mb-5 w-100'
          variant='primary'
          type='submit'
          value='Create Todo'
        > Submit
        </Button>

      </Form>
    </>
  );
}

export default CreateTodo;
