import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import axios from "axios";

const FileUpload = (props) => {
  const [Images, setImages] = useState([]);

  const dropHandler = (files) => {
    let formData = new FormData();

    const config = {
      header: {
        "content-type": "multipart/form-data",
      },
    };
    formData.append("file", files[0]);

    axios.post("/api/product/image", formData, config).then((res) => {
      if (res.data.success) {
        console.log(res.data);
        setImages([...Images, res.data.filePath]);
        props.refreshFunction([...Images, res.data.filePath]);
      } else {
        alert("파일을 저장하는데 실패했습니다.");
      }
    });
  };

  const deleteImage = (imgIdx) => {
    let newImages = [...Images];
    newImages.splice(imgIdx,1);
    setImages(newImages);
    props.refreshFunction(newImages);
  }


  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              style={{
                width: 300,
                height: 240,
                border: "1px solid lightgrey",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <Icon type="plus" style={{ fontSize: "3rem" }} />
            </div>
          </section>
        )}
      </Dropzone>
      <div
        style={{
          display: "flex",
          width: "350px",
          height: 240,
          overflowX: "scroll",
        }}
      >
        {Images.map((img, idx) => {
          return(
          <div key={img} onClick={()=>deleteImage(idx)}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`http://localhost:5000/${img}`}
            />
          </div>);
        })}
      </div>
    </div>
  );
};

export default FileUpload;
