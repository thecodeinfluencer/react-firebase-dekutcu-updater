import React from "react";
import { useFormikContext } from "formik";

export default function Button({
  children,
  submit,
  onClick,
  classExtra,
  ...defaultProps
}) {
  const { handleSubmit } = useFormikContext();
  return (
    <button
      type="submit"
      {...defaultProps}
      className={"btn btn-success " + classExtra}
      onClick={submit ? handleSubmit : onClick}
    >
      {children}
    </button>
  );
}
