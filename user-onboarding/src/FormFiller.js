import React from "react";
import { withFormik, Form, Field } from "formik";
// validator for our form
import * as Yup from "yup";
import axios from "axios";

function FormFiller() {
  return (
    <div className="form-filler">
      <Form>
        <Field type="username" name="username" placeholder="Username" />
        <Field type="email" name="email" placeholder="Email" />
        <button type="button">Submit!</button>
      </Form>
    </div>
  );
}

// needed for the page to render and to work
const FormikSignUp = withFormik({
  // allows us to create a connection between the data being handled in the forman the handlers for the data
  mapPropsToValues({ username, email }) {
    return {
      username: username || "",
      email: email || ""
    };
  },

  //   validationSchema: Yup.object().shape({
  //     // username: Yup.string()
  //     //   .min(6)
  //     //   .required(),
  //     email: Yup.string()
  //       .email()
  //       .required()
  //   }),

  handleSubmit(values) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
})(FormFiller);

export default FormikSignUp;
