import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { DateTime } from "luxon";

import Form from "../components/Form";
import Button from "../components/Button";
import Input from "../components/Input";
import Screen from "../layout/Screen";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDevotionals,
  deleteDevotional,
  createDevotional,
} from "../redux/actions/devotionalsActions";
import { signIn } from "../redux/actions/authActions";

export default function LogIn() {
  const dispatch = useDispatch();

  let validator = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
  });

  return (
    <Screen>
      <div className="row">
        <div className="col-lg-6">
          <Form
            initialValues={{}}
            validationSchema={validator}
            onSubmit={(values) => dispatch(signIn(values))}
          >
            <div className="d-flex flex-row align-items-center  my-2">
              <h5 className="h4 m-0 mt-2">Enter Credentials</h5>
            </div>
            <div className="card p-3 mb-2">
              <Input name="email" placeholder="Email" />
              <Input name="password" type="password" placeholder="Password" />
              <Button
                style={{ alignSelf: "baseline" }}
                classExtra="mt-2"
                submit
              >
                LogIn
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-lg-6"></div>
      </div>
    </Screen>
  );
}
