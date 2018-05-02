import React from "react";
import { Input, Button } from "semantic-ui-react";
import { FILE_UPLOAD_PATH } from "../../config";

const Uploader = () => {
  let fileURL = null;

  const onFormSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", fileURL);

    const config = {
      method: "POST",
      body: formData
    };
    fetch(FILE_UPLOAD_PATH, config)
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };

  const onFileLoad = e => {
    fileURL = e.target.files[0];
    console.log(fileURL);
  };

  return (
    <div className="file-uploader">
      <form onSubmit={onFormSubmit}>
        <Input
          type="file"
          onChange={onFileLoad}
          className="file-uploader__input"
        />
        <Button type="submit">file upload</Button>
      </form>
    </div>
  );
};

export default Uploader;
