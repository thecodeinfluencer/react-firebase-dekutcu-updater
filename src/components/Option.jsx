import React from "react";
import { Link } from "react-router-dom";

export default function option({ title, imageUrl, link, disabled }) {
  return (
    <div className="col-lg-4">
      {!disabled ? (
        <Link to={link ? link : "."}>
          <div className="card option">
            <div className="card-body">
              <img src={imageUrl} alt="img" />
            </div>
            <div className="card-footer">
              <p className="lead">{title}</p>
            </div>
          </div>
        </Link>
      ) : (
        <div
          onClick={() => alert("Functionality Coming Soon")}
          className="card option"
        >
          <div className="card-body">
            <img src={imageUrl} alt="img" />
          </div>
          <div className="card-footer">
            <p className="lead">{title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
