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

    fetch(FILE_UPLOAD_PATH, config);
  };

  const onFileLoad = e => {
    fileURL = e.target.files[0];
  };

  return (
    <form onSubmit={onFormSubmit} className="file-uploader">
      <Input
        type="file"
        onChange={onFileLoad}
        className="file-uploader__input"
      />
      <Button type="submit">file upload</Button>
    </form>
  );
};

export default Uploader;
