import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

const Members = ({ src, name, profession }) => {
  return (
    <MemberContainer>
      <Member>
        <MemberAvatar src={src} alt='' />
        <MemberInfo>
          <span className='name'>{name}</span>
          <span className='profession'>{profession}</span>
        </MemberInfo>
        <Button>
          <VisibilityOutlinedIcon style={{ marginRight: '5px' }} />
          Display
        </Button>
      </Member>
    </MemberContainer>
  );
};

export default Members;

const MemberContainer = styled.div``;

const Member = styled.div`
  margin: 15px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MemberAvatar = styled(Avatar)`
  cursor: pointer;
  margin-right: 20px;
  object-fit: cover;
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .name {
    font-weight: bold;
    font-size: 18px;
  }
  .profession {
    color: gray;
    font-size: 16px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 7px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: rgb(228, 228, 250);
`;
