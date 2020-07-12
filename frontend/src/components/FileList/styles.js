import styled from "styled-components";

export const Container = styled.div`
  .btn-block {
    width: 100%;
    height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  li {
    list-style: none;
    display: flex;
    justify-content: space-between;

    & + li {
      margin-top: 10px;
    }
  }
`;

export const UserInfo = styled.div``;
