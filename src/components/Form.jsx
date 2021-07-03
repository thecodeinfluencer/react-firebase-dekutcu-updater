import React from "react";
import { Formik } from "formik";

export default function Form({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  onReset,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      onReset={onReset}
    >
      {() => <>{children}</>}
    </Formik>
  );
}
