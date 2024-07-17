import React from "react";
import "./newProduct.scss";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import { useNavigate } from "react-router-dom";
const NewProduct = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  const navigate = useNavigate();
  const GoBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newProductContainer">
        <Navbar />
        <div className="protop">
          <h1>{title}</h1>
          <button onClick={GoBackHandler} className="GoBackButton">
            Go Back
          </button>
        </div>
        <div className="probottom">
          <div className="proleft">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019"
              }
              alt=""
            />
          </div>
          <div className="proright">
            <form>
              <div className="productformInput">
                <label htmlFor="file">
                  Image: <CloudUploadRoundedIcon className="proicon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="productformInput" key={input.id}>
                  <label> {input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
