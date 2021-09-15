import React from 'react';
import styled from 'styled-components';

const CreateUser = () => {
  return (
    <CreateUserContainer>
      <h2>Create User</h2>

      <Container>
        <FirstColumn>
          <div>
            <label htmlFor='un'>Username</label>
            <input type='text' id='un' />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div>
            <label htmlFor='phone'>Phone</label>
            <input type='phone' id='phone' />
          </div>
          <div>
            <label>Gender</label>
            <span>
              <input
                type='radio'
                name='gender'
                style={{ marginRight: '10px' }}
              />
              Male
              <input
                type='radio'
                name='gender'
                style={{ margin: '0px 10px' }}
              />
              Female
              <input
                type='radio'
                name='gender'
                style={{ margin: '0px 10px' }}
              />
              Other
            </span>
            <div>
              <Button>Create</Button>
            </div>
          </div>
        </FirstColumn>
        <SecondColumn>
          <div>
            <label htmlFor='fn'>Full Name</label>
            <input type='text' id='fn' />
          </div>
          <div>
            <label htmlFor='pw'>Password</label>
            <input type='password' id='pw' />
          </div>
          <div>
            <label htmlFor='address'>Address</label>
            <input type='text' id='address' />
          </div>
          <div>
            <label htmlFor='status'>Active</label>
            <select
              name='status'
              id='status'
              style={{ padding: '15px 0px', outline: 'none' }}
            >
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
        </SecondColumn>
      </Container>
    </CreateUserContainer>
  );
};

export default CreateUser;

const CreateUserContainer = styled.div`
  flex: 4;
`;

const Container = styled.form`
  display: flex;
  margin-top: 35px;
`;

const FirstColumn = styled.div`
  flex: 1;

  > div {
    display: flex;
    flex-direction: column;
    width: 80%;

    > label {
      color: gray;
      font-weight: bold;
      margin-bottom: 15px;
      margin-top: 15px;
      border-radius: 5px;
    }
    > input {
      outline: none;
      padding: 15px;
    }
  }
`;
const Button = styled.button`
  margin-top: 35px;
  padding: 10px 25px;
  background-color: darkblue;
  color: white;
  cursor: pointer;
  border: none;
`;

const SecondColumn = styled.div`
  flex: 1;
  > div {
    display: flex;
    flex-direction: column;
    width: 80%;

    > label {
      color: gray;
      font-weight: bold;
      margin-bottom: 15px;
      margin-top: 15px;
      border-radius: 5px;
    }
    > input {
      outline: none;
      padding: 15px;
    }
  }
`;
