import React, { useCallback, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, " Name must be at least 3 characters"),
  company: Yup.string().required("Company is required"),
  country: Yup.string(),
  contact: Yup.string()
    .required("Contact is required")
    .matches(/^\d{10}$/, "Contact must be exactly 10 digits"),
  email: Yup.string().email("Invalid email"),
  message: Yup.string(),
});

// Toast functions

const showSuccessToast = () =>
  toast.success("Form submitted successfully!", {
    duration: 8000,
  });
const showErrorToast = (message) =>
  toast.error(message, {
    duration: 8000,
  });

const MyForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const apiUrl =
        "https://www.premierenergies.com/api/contact_us_submit.php";
      const apiData = {
        ...values,
        accessAPI: 1,
      };

      // console.log("API Data:", apiData);

      // Make the POST request to the API
      const response = await axios.post(apiUrl, apiData);

      // Handle the response from the API
      if (response.data.success) {
        console.log("Contact Enquiry submitted successfully!", response.data);
        showSuccessToast("Contact Enquiry submitted successfully!");
        // navigate("/Contact Enquiry-submitted");
        resetForm();
      } else {
        console.error("API request failed. Error message: ", response.data);
        showErrorToast("Error in Submitting form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting Contact Enquiry:", error.message);
      showErrorToast("Error in Submitting form");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="bottom-right" />

      <Formik
        initialValues={{
          accessAPI: 1,
          name: "",
          company: "",
          country: "",
          contact: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <h3 className="m-0">How can we help you?</h3>
            <ul className="form d-flex flex-wrap justify-content-between">
              <li>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className={errors.name && touched.name ? "input-error" : ""}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="gravienece_error"
                />
              </li>
              <li>
                <Field
                  type="text"
                  name="company"
                  placeholder="Company*"
                  className={
                    errors.company && touched.company ? "input-error" : ""
                  }
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="gravienece_error"
                />
              </li>
              <li>
                <Field
                  type="text"
                  name="country"
                  placeholder="Country"
                  className={
                    errors.country && touched.country ? "input-error" : ""
                  }
                />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="gravienece_error"
                />
              </li>
              <li>
                <Field
                  type="tel"
                  name="contact"
                  placeholder="Contact*"
                  className={
                    errors.contact && touched.contact ? "input-error" : ""
                  }
                />
                <ErrorMessage
                  name="contact"
                  component="div"
                  className="gravienece_error"
                />
              </li>
              <li>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={errors.email && touched.email ? "input-error" : ""}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="gravienece_error"
                />
              </li>
              <li>
                <Field as="textarea" name="message" placeholder="Message" />
              </li>
              <li>
                <button type="submit" className="btn-4">
                  <span>submit</span>
                </button>
              </li>
            </ul>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MyForm;
