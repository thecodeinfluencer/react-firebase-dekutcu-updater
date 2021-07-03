import React, { useEffect, useState } from "react";
import { useFormikContext } from "formik";

export default function PdfUpload({ name, label, ...defaultProps }) {
  const [pdfArray, setImgArray] = useState(null);
  const [pdfUrlArray, setImgUrlArray] = useState(null);

  const {
    errors,
    setFieldTouched,
    touched,
    setFieldValue,
    setFieldError,
  } = useFormikContext();

  useEffect(() => {
    name && setFieldValue(name, pdfArray);
  }, [pdfArray, name, setFieldValue, pdfUrlArray]);

  return (
    <>
      {pdfArray && (
        <iframe
          title="Pdf Upload"
          src={window.URL.createObjectURL(pdfArray)}
          style={{
            borderRadius: "10px",
            backgroundColor: "#ddd",
            overflow: "hidden",
          }}
          className="w-50 h-100 p-0 mb-2"
          frameborder="0"
        ></iframe>
      )}
      {/* {pdfArray && console.log("array: ", pdfArray.name)} */}
      <div>
        <input
          onChange={() => {
            let path = document.querySelector("#upload-photo").value;
            let filetype = path
              .substring(path.lastIndexOf(".") + 1)
              .toLowerCase();
            if (filetype === "pdf") {
              setImgArray(document.querySelector("#upload-photo").files[0]);
              setImgUrlArray(document.querySelector("#upload-photo").value);
            } else {
              setFieldError(name, "Invalid file type");
            }
          }}
          onBlur={() => name && setFieldTouched(name)}
          style={{
            opacity: 0,
            backgroundColor: "#fed132",
            position: "absolute",
            width: "100%",
            zIndex: 2,
            cursor: "pointer",
          }}
          type="file"
          name="photo"
          id="upload-photo"
        />
        <label className="w-100" htmlFor="upload-photo">
          <button type="button" className="btn btn-success btn-block text-left">
            Upload Pdf
          </button>
        </label>
      </div>
      {name && touched[name] && errors[name] && (
        <div className="text-red mb-2 ml-2 invalid" role="alert">
          {errors[name]}
        </div>
      )}
    </>
  );
}
