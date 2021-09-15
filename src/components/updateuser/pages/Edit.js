import React from 'react';
import styled from 'styled-components';
import PublishIcon from '@material-ui/icons/Publish';

const Edit = () => {
  return (
    <EditContainer>
      <h2>Edit Profile</h2>

      <div>
        <FormContainer>
          <div>
            <label>Username</label>
            <input type='text' />
          </div>
          <div>
            <label>Full Name</label>
            <input type='text' />
          </div>
          <div>
            <label>Email</label>
            <input type='text' />
          </div>
          <div>
            <label>Phone</label>
            <input type='phone' />
          </div>
          <div>
            <label>Address</label>
            <input type='text' />
          </div>
        </FormContainer>

        <ProfilePic>
          <span>
            <img
              src='https://p.favim.com/orig/2018/09/15/matching-icons-matching-icon-icon-Favim.com-6329494.jpg'
              alt=''
            />

            <span>
              <label htmlFor='file'>
                <PublishIcon style={{ cursor: 'pointer' }} />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </span>
          </span>

          <button>Update</button>
        </ProfilePic>
      </div>
    </EditContainer>
  );
};

export default Edit;

const EditContainer = styled.div`
  flex: 2;
  padding-top: 20px;
  padding-bottom: 100px;
  padding-left: 30px;
  padding-right: 30px;
  margin-right: 20px;

  box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);

  > div {
    display: flex;
    height: 100%;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  margin-top: 20px;

  > div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border-bottom: 1px solid black;
    width: 60%;

    > label {
      font-weight: bold;
      margin-bottom: 15px;
      color: gray;
    }
    > input {
      border: none;
      outline: none;
      margin-bottom: 5px;
      cursor: pointer;
    }
  }
`;

const ProfilePic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;

  > span {
    display: flex;
    align-items: center;
  }

  > span > img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 25px;
    margin-right: 10px;
  }
  > button {
    background-color: teal;
    color: white;
    padding: 10px 5px;
    cursor: pointer;
    border: none;
    margin-bottom: 20px;
  }
`;
