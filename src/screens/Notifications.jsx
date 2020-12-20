import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Screen from "../layout/Screen";
import Form from "../components/Form";
import Button from "../components/Button";
import Input from "../components/Input";
import image from "../img/1.svg";
import ImageUpload from "../components/ImageUpload";
import {
  createNotification,
  deleteNotification,
  fetchNotifications,
} from "../redux/actions/notificationsActions";

export default function Notifications() {
  const dispatch = useDispatch();
  dispatch(fetchNotifications());
  const notifications = useSelector(state => state.notifications.list).sort(
    (a, b) => b.date - a.date
  );

  const validator = Yup.object().shape({
    text: Yup.string().required().min(10),
    title: Yup.string().required().min(5).max(40),
  });

  return (
    <Screen>
      <div className="row">
        <div className="col-lg-6">
          <Form
            initialValues={{}}
            validationSchema={null}
            onSubmit={val => dispatch(createNotification(val))}
          >
            <div className="d-flex flex-row align-items-center  my-2">
              <h5 className="h4 m-0 mt-2">Add a notification</h5>
            </div>
            <div className="card p-3 mb-2">
              <ImageUpload name="image" placeholder="Notification Image" />
              <Input name="title" placeholder="Notification Title" />
              <Input
                name="text"
                placeholder="Notification Body"
                textarea
                rows={5}
              />
            </div>
            <Button classExtra="mt-2" submit>
              Add
            </Button>
          </Form>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-row align-items-center  my-2">
            <h5 className="h4 m-0 mt-2">Notifications</h5>
          </div>
          {notifications.map(notification => {
            let id = "id" + Math.floor(Math.random() * 1000).toString();
            return (
              <div className="card p-3 mb-2">
                <div className="row">
                  <div className="col-lg-4">
                    <img
                      src={image}
                      alt=""
                      className="bg-primary img-responsive img-fluid"
                    />
                  </div>
                  <div className="col-lg-8 my-0">
                    <p className="lead my-0 py-0">{notification.title}</p>
                    <p>{notification.text.slice(0, 70).concat("...")}</p>
                    <div class="collapse" id={id}>
                      {notification.text}
                    </div>
                    <a
                      data-toggle="collapse"
                      href={`#${id}`}
                      aria-expanded="false"
                      aria-controls="contentId"
                    >
                      Read More
                    </a>
                    <div className="d-flex flex-row">
                      <button
                        type="button"
                        class="btn btn-sm btn-warning ml-auto mr-2"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="btn-sm btn btn-danger"
                        onClick={() =>
                          dispatch(deleteNotification(notification.date))
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Screen>
  );
}
