import { Form } from 'react-router-dom';
import styled from 'styled-components';

const SearchForm = ({ SearchTerm }) => {
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          className="form-input"
          name="search"
          defaultValue={SearchTerm}
        />
        <button type="submit" className="btn">
          search
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;

const Wrapper = styled.section`
  margin-bottom: 6rem;
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .form .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-top: 0;
  }
`;
