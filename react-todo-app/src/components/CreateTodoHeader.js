import PropTypes from 'prop-types';
import CustomBtn from './CustomBtn';

const CreateTodoHeader = ({ onCreate, showCreate }) => {
  return (
    <>
      <CustomBtn
        color={showCreate ? 'danger' : 'primary'}
        text={showCreate ? 'Close' : 'Create A Todo'}
        onClick={onCreate}
      />
    </>
  );
}

export default CreateTodoHeader;
