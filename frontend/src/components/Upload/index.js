import React from "react";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import csv from "csv";

import FileList from "../FileList";

import { DropContainer, UploadMessage } from "./styles";

function Upload({ dispatch, usersCsv }) {
  function convertCsvToArrayOfObject(dataCsv) {
    const arrayObj = dataCsv
      .filter((elem, index) => index > 0)
      .map((curr) => {
        const obj = {};

        dataCsv[0].forEach((element, index) => {
          obj[element] = curr[index];
        });

        return obj;
      });

    return arrayObj;
  }

  async function handleUpload([file]) {
    const reader = new FileReader();

    reader.onload = () => {
      csv.parse(reader.result, (err, data) => {
        const users = convertCsvToArrayOfObject(data);

        dispatch({
          type: "ADD_TO_USERS",
          users,
        });
      });
    };

    reader.readAsText(file);
  }

  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  }

  return (
    <div>
      <Dropzone
        accept="text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        onDropAccepted={handleUpload}
        multiple={false}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
      {!!usersCsv.length && <FileList />}
    </div>
  );
}

export default connect((state) => ({
  usersCsv: state.usersCsv,
}))(Upload);
