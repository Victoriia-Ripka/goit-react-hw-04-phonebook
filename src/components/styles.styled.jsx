import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 900;
  margin: 10px 0;
  padding: 0;
`;

export const SectionStyle = styled.section`
  width: 350px;
  margin: 0;
  padding: 25px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 135px;
  height: 20px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 0 15px;
  padding: 5px;
`;

export const ContactsList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
`;

export const ContactsItem = styled.li`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactsInfo = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0;
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  padding: 5px;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  &:hover,
  &:focus {
    -webkit-box-shadow: 0px 8px 32px -1px rgba(190, 190, 190, 1);
    -moz-box-shadow: 0px 8px 32px -1px rgba(190, 190, 190, 1);
    box-shadow: 0px 8px 32px -1px rgba(190, 190, 190, 1);
  }
`;
