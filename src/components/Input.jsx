import React from "react";
import { useFormikContext } from "formik";

export default function Input({ name, label, textarea, ...defaultProps }) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();

  return (
    <>
      <div className="form-group">
        {label && <label>{label}</label>}
        {!textarea ? (
          <input
            className="form-control"
            {...defaultProps}
            onChange={name && handleChange(name)}
            onBlur={() => name && setFieldTouched(name)}
          />
        ) : (
          <textarea
            className="form-control"
            {...defaultProps}
            onChange={name && handleChange(name)}
            onBlur={() => name && setFieldTouched(name)}
          />
        )}
      </div>
      {name && touched[name] && errors[name] && (
        <div className="alert alert-danger" role="alert">
          {errors[name]}
        </div>
      )}
    </>
  );
}
