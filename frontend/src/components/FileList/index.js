import React from "react";
import { connect } from "react-redux";
import { MdCheckCircle, MdError } from "react-icons/md";

import api from "../../services/api";

import { Container, UserInfo } from "./styles";

function FileList({ dispatch, usersCsv }) {
  function handleAddUsers() {
    usersCsv.forEach(processSaveUserDB);
  }

  async function processSaveUserDB(user) {
    try {
      const response = await api.post("/users/add", user);

      if (response.status === 200) {
        dispatch({
          type: "UPDATE_USER",
          user: { ...user, ...{ save: true, error: false } },
        });
      }
    } catch (error) {
      dispatch({
        type: "UPDATE_USER",
        user: { ...user, ...{ save: false, error: true } },
      });
    }
  }

  return (
    <Container>
      <button type="button" className="btn-block" onClick={handleAddUsers}>
        Cadastrar
      </button>
      <UserInfo>
        {usersCsv.map((user, index) => (
          <li key={index}>
            <h3>{user.name}</h3>
            {user.save && (
              <MdCheckCircle size={18} color="green"></MdCheckCircle>
            )}
            {user.error && <MdError size={18} color="red"></MdError>}
          </li>
        ))}
      </UserInfo>
    </Container>
  );
}

export default connect((state) => ({
  usersCsv: state.usersCsv,
}))(FileList);
