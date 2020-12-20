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

export default function Devotionals() {
  const dispatch = useDispatch();
  dispatch(fetchDevotionals());

  // const [devotionals, setDevotionals] = useState([]);
  const devotionals = useSelector(state => state.devotionals.list).sort(
    (a, b) => b.date - a.date
  );

  // useEffect(() => {
  //   setDevotionals(devotionalsStore);
  // }, [dispatch, devotionalsStore]);

  const submitted = () => {
    //Clear Inputs
  };

  let validator = Yup.object().shape({
    text: Yup.string().required().min(20),
  });

  return (
    <Screen>
      <div className="row">
        <div className="col-lg-6">
          <Form
            initialValues={{}}
            validationSchema={validator}
            onSubmit={val => dispatch(createDevotional(val))}
          >
            <div className="d-flex flex-row align-items-center  my-2">
              <h5 className="h4 m-0 mt-2">Add a devotional</h5>
            </div>
            <div className="card p-3 mb-2">
              <Input
                name="text"
                placeholder="Devotional Body"
                textarea
                rows={10}
              />
            </div>
            <Button classExtra="mt-2" submit>
              Add
            </Button>
          </Form>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-row align-items-center  my-2">
            <h5 className="h4 m-0 mt-2">Devotionals</h5>
          </div>
          {devotionals.map(devotional => {
            let id = "id" + Math.floor(Math.random() * 1000).toString();
            return (
              <div key={`${id}`} className="card p-3 mb-2">
                <p>
                  {DateTime.fromMillis(devotional.date).toRelative().toString()}
                </p>
                {/* <p>{devotional.text.slice(0, 90).concat("...")}</p> */}
                <div className="collapse" id={id}>
                  {devotional.text}
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
                    className="btn btn-sm btn-warning ml-auto mr-2"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn-sm btn btn-danger"
                    onClick={() => {
                      dispatch(deleteDevotional(devotional.date));
                      // setDevotionals(
                      //   devotionals.filter(dev => dev.date !== devotional.date)
                      // );
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Screen>
  );
}
