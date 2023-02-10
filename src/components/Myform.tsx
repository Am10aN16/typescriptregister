import { Button, TextField } from "@mui/material";
import { Formik, Form } from "formik";
// import { Form } from 'formik/dist/Form';
import * as React from "react";

interface Values {
  Name: string;
  PhoneNo: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const Myform: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ Name: "", PhoneNo: "", email: "" }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form className="formClass">
            <div>
                <h1>Registration</h1>
            </div>
          <div>
            <TextField
             label="Name"
              name="Name"
              value={values.Name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <TextField
            sx={{
                margin: "10px"
            }}
            label="Your Phone No" 
              name="PhoneNo"
              value={values.PhoneNo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <TextField
            label="Your Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <Button color="success" variant="contained" sx={{marginTop:2}} type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};
