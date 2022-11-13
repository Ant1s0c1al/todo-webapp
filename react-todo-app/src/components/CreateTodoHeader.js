import PropTypes from 'prop-types';
import CustomBtn from './CustomBtn';

const CreateTodoHeader = ({ onCreate, showCreate }) => {
  return (
    <>
      <h1 className='mt-4 text-center'>Create New Todo</h1>

      <CustomBtn
        color={showCreate ? 'danger' : 'primary'}
        text={showCreate ? 'Close' : 'Create A Todo'}
        onClick={onCreate}
      />
    </>
  );
}

export default CreateTodoHeader;
