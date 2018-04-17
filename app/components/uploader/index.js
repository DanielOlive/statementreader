"use strict";

import React from "react";

const Uploader = () => {
  return (
    <div className="file-uploader">
      <form
        action="/upload"
        method="post"
        className="file-uploader-form"
        encType="multipart/form-data"
      >
        <input
          className="import-file_link js-import-file_link"
          type="file"
          name="avatar"
        />
        <input type="submit" value="file upload" />
      </form>
    </div>
  );
};

export default Uploader;
