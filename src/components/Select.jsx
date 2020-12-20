import React from "react";
import { useFormikContext } from "formik";

export default function Select({
  data,
  error,
  placeholder,
  onSelectItem,
  selectedItem,
  name,
  label,
  large,
  ...defaultProps
}) {
  const [formikSelectedItem, setFormikSelectedItem] = React.useState(null);

  const {
    errors,
    setFieldTouched,
    setFieldValue,
    touched,
  } = useFormikContext();

  return (
    <>
      <div className="form-group" {...defaultProps}>
        {label && <label>{label}</label>}
        <div className="dropdown">
          <button
            className={`btn btn-outline-success dropdown-toggle ${
              large && "btn-block"
            }`}
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onBlur={() => name && setFieldTouched(name)}
          >
            {selectedItem
              ? selectedItem
              : formikSelectedItem
              ? formikSelectedItem
              : placeholder}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {data.map(item => (
              <p
                onClick={() => {
                  name && setFieldValue(name, item);
                  onSelectItem && onSelectItem(item);
                  setFormikSelectedItem(item);
                }}
                key={item}
                className="dropdown-item"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {name
        ? name &&
          touched[name] &&
          errors[name] && (
            <div className="alert alert-danger" role="alert">
              {errors[name]}
            </div>
          )
        : error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
    </>
  );
}
