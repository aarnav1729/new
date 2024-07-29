import React, { useCallback, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { setGrievanceData } from "./Utils";
import { useNavigate } from "react-router-dom";

const GravienceForm = () => {
  const currentDate = new Date();
  const minDate = new Date(currentDate);
  minDate.setFullYear(minDate.getFullYear() - 150);
  const maxDate = new Date(currentDate);
  maxDate.setFullYear(maxDate.getFullYear() - 10);

  const phoneRegExp = /^[0-9]+$/;
  const validationSchema = Yup.object().shape({
    dateOfGrievance: Yup.date()
      .min(
        new Date("2000-01-01"),
        "Date of Grievance must be after January 1st, 2000"
      )
      .max(new Date(), "Date of Grievance cannot be in the future")
      .required("Date of Grievance is required"),
    grievantName: Yup.string()
      .required("Grievant Name is required")
      .min(3, "Grievant Name must be at least 3 characters")
      .max(20, "Grievant Name must not exceed 20 characters")
      .matches(/^[A-Z a-z]+$/, "Grievant Name must contain only alphabets"),
    gender: Yup.string().oneOf(
      ["Male", "Female", "Rather Not Say", "NA", "Other"],
      "Invalid Gender"
    ),
    dateOfBirth: Yup.date()
      .min(minDate, "Date of Birth must be at most 150 years ago")
      .max(maxDate, "Date of Birth must be at least 10 years ago"),
    subjectOfIssue: Yup.string()
      .required("Subject of the Issue is required")
      .min(5, "Grievant Name must be at least 5 characters")
      .max(250, "Grievant Name must not exceed 250 characters"),
    newComplaint: Yup.string().required(
      "Please indicate if this is a new complaint or not"
    ),
    previousCaseNo: Yup.string().when("newComplaint", {
      is: (newComplaint) => newComplaint === "false",
      then: (schema) =>
        schema
          .matches(/^[0-9]+$/, "Previous Case No. must be a number")
          .required("Previous Case No. is required for old complaints"),
      otherwise: (schema) => schema,
    }),
    modeOfOldComplaintRegistered: Yup.string().when("newComplaint", {
      is: (newComplaint) => newComplaint === "false",
      then: (schema) =>
        schema
          .required(
            "Mode of Old Complaint Registered is required for old complaints"
          )
          .oneOf(
            [
              "Call",
              "E-Mail",
              "Website-Form",
              "Letter",
              "Walk-in",
              "Hotline number",
            ],
            "Mode of Old Complaint Registered must be one of the provided options"
          ),
      otherwise: (schema) => schema,
    }),

    relationWithPremierEnergies: Yup.string()
      .required("Relation with Premier Energies is required")
      .oneOf(
        [
          "Employee",
          "Contractual worker",
          "Supplier",
          "Customer",
          "Regulatory Agency",
          "Communities/Social Group",
        ],
        "Invalid relation with Premier Energies"
      ),
    contactDetailsAnonymous: Yup.string().when("relationWithPremierEnergies", {
      is: (val) => ["Employee", "Contractual worker"].includes(val),
      then: (schema) =>
        schema.oneOf(
          ["", "Yes", "No"],
          "Invalid option for Contact Details Anonymous"
        ),
      otherwise: (schema) => schema.notRequired(),
    }),
    employerName: Yup.string().when("relationWithPremierEnergies", {
      is: (val) => val === "Employee",
      then: (schema) => {
        console.log("Employer Name is required for employees");
        return schema.required("Employer Name is required for employees");
      },
      otherwise: (schema) => schema,
    }),
    location: Yup.string().when("relationWithPremierEnergies", {
      is: (val) => ["Employee", "Contractual worker"].includes(val),
      then: (schema) =>
        schema.required(
          "Location is required for employees and contractual workers"
        ),
      otherwise: (schema) => schema,
    }),
    department: Yup.string().when("relationWithPremierEnergies", {
      is: (val) => val === "Employee",
      then: (schema) => {
        console.log("Department is required for employees");
        return schema.required("Department is required for employees");
      },
      otherwise: (schema) => schema,
    }),
    employeeID: Yup.string().when("relationWithPremierEnergies", {
      is: (val) => val === "Employee",
      then: (schema) =>
        schema.required("Employee ID is required for employees"),
      otherwise: (schema) => schema,
    }),

    groupOrganizationName: Yup.string().when("relationWithPremierEnergies", {
      is: (val) => {
        const requiredValues = [
          "Contractual worker",
          "Supplier",
          "Customer",
          "Regulatory Agency",
          "Communities/Social Group",
        ];
        const isRequired = requiredValues.includes(val);
        if (isRequired) {
          console.log("Group/Organization Name is required");
        }
        return isRequired;
      },
      then: (schema) => schema.required("Group/Organization Name is required"),
      otherwise: (schema) => schema,
    }),

    phone: Yup.string().when("relationWithPremierEnergies", {
      is: (val) => val === "Contractual worker",
      then: (schema) => {
        console.log("Phone is optional for contractual workers");
        return schema.notRequired();
      },
      otherwise: (schema) =>
        schema
          .required("Phone number is required")
          .matches(phoneRegExp, "Phone number must contain only numbers")
          .max(15, "Phone number must be at most 15 characters long"),
    }),
    email: Yup.string().when("relationWithPremierEnergies", {
      is: (val) => val === "Contractual worker",
      then: (schema) => {
        console.log("Email is optional for contractual workers");
        return schema.notRequired();
      },
      otherwise: (schema) =>
        schema
          .email("Invalid email address")
          .required("Email is required")
          .max(255, "Email must be at most 255 characters long"),
    }),
    address: Yup.string()
      .required("Address is required")
      .max(255, "Address must be at most 255 characters long"),
    detailsOfEventLeadingToGrievance: Yup.string()
      .required("Details of Event Leading to Grievance is required")
      .max(
        1000,
        "Details of Event Leading to Grievance must be at most 1000 characters long"
      ),

    whenDidItOccur: Yup.date()
      .required("When did it occur is required")
      .min(
        new Date("2000-01-01"),
        "Date of occurrence must be after January 1st, 2000"
      )
      .max(new Date(), "Date of occurrence cannot be in the future"),

    whereDidItOccur: Yup.string()
      .required("Where did it occur is required")
      .max(1000, "Where did it occur must be at most 1000 characters long"),

    locationDetails: Yup.string()
      .required("Location Details is required")
      .max(1000, "Location Details must be at most 1000 characters long"),

    whatHappened: Yup.string()
      .required("What happened is required")
      .max(1000, "What happened must be at most 1000 characters long"),

    whyIsThisAGrievance: Yup.string()
      .required("Why is this a grievance is required")
      .max(
        1000,
        "Why is this a grievance must be at most 1000 characters long"
      ),

    whatAdjustmentIsRequired: Yup.string()
      .required("What adjustment is required is required")
      .max(
        1000,
        "What adjustment is required must be at most 1000 characters long"
      ),

    additionalComments: Yup.string().max(
      2000,
      "Additional Comments must be at most 2000 characters long"
    ),
    affirmation: Yup.boolean()
      .oneOf(
        [true],
        "You must affirm the truthfulness of the information provided"
      )
      .required("Affirmation is required"),
  });

  const [grievanceform, setActive] = useState("true");
  const [caseID, setCaseID] = useState();
  const showSuccessToast = () => toast.success("Form submitted successfully!");
  const showErrorToast = (message) => toast.error(message);

  const navigate = useNavigate();

  const handleToggle = () => {
    setActive(!grievanceform);
  };
  const initialValues = {
    dateOfGrievance: "",
    grievantName: "",
    gender: "",
    dateOfBirth: "",
    subjectOfIssue: "",
    newComplaint: false,
    previousCaseNo: "",
    modeOfOldComplaintRegistered: "",
    relationWithPremierEnergies: "",
    contactDetailsAnonymous: "",
    employerName: "",
    location: "",
    department: "",
    employeeID: "",
    groupOrganizationName: "",
    phone: "",
    email: "",
    address: "",
    detailsOfEventLeadingToGrievance: "",
    whenDidItOccur: "",
    whereDidItOccur: "",
    locationDetails: "",
    whatHappened: "",
    whyIsThisAGrievance: "",
    whatAdjustmentIsRequired: "",
    isComplaintFiledUnderAnyJurisdiction: false,
    additionalComments: "",
    fileUpload: "",
    file: "",
    affirmation: "",
  };
  const handleSubmit = async (values, { resetForm }) => {
    console.log("Submitting form...", values);
    try {
      const apiUrl =
        "https://www.premierenergies.com/api/insert_grievance_hook.php";

      const apiData = {
        accessAPI: "1",
        dateOfGrievance: values.dateOfGrievance,
        grievantName: values.grievantName,
        gender: values.gender,
        dateOfBirth: values.dateOfBirth,
        subjectOfIssue: values.subjectOfIssue,
        newComplaint: values.newComplaint,
        previousCaseNo: values.previousCaseNo,
        modeOfOldComplaintRegistered: values.modeOfOldComplaintRegistered,
        relationWithPremierEnergies: values.relationWithPremierEnergies,
        contactDetailsAnonymous: values.contactDetailsAnonymous,
        employerName: values.employerName,
        location: values.location,
        department: values.department,
        employeeID: values.employeeID,
        groupOrganizationName: values.groupOrganizationName,
        phone: values.phone,
        email: values.email,
        address: values.address,
        detailsOfEventLeadingToGrievance:
          values.detailsOfEventLeadingToGrievance,
        whenDidItOccur: values.whenDidItOccur,
        whereDidItOccur: values.whereDidItOccur,
        locationDetails: values.locationDetails,
        whatHappened: values.whatHappened,
        whyIsThisAGrievance: values.whyIsThisAGrievance,
        whatAdjustmentIsRequired: values.whatAdjustmentIsRequired,
        isComplaintFiledUnderAnyJurisdiction:
          values.isComplaintFiledUnderAnyJurisdiction,
        additionalComments: values.additionalComments,
        fileUpload: values.fileUpload,
        affirmation: values.affirmation,
      };

      // Log the data being sent to the API
      console.log("API Data:", apiData);

      // Make the POST request to the API
      const response = await axios.post(apiUrl, apiData);
      // Handle the response from the API
      if (response.data.success) {
        console.log("Grievance submitted successfully!");
        setCaseID(response.data.caseID);
        setGrievanceData(values.grievantName, response.data.caseID, 1);
        showSuccessToast();
        navigate("/grievance-submitted");
        // Optionally reset the form after successful submission
        resetForm();
      } else {
        console.error("API request failed. Error message: ", response.data);
        showErrorToast("Error in Submitting form. Please try again later.");
        // Handle error response from the API
      }
    } catch (error) {
      console.error("Error submitting grievance:", error.message);
      showErrorToast("Error in Submitting form");
      // Handle other errors, such as network errors
      throw error; // Rethrow the error to propagate it
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the dropped files
    console.log(acceptedFiles);
  }, []);

  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleDrop = (acceptedFiles) => {
    // Handle multiple files
    setFiles(acceptedFiles);
    acceptedFiles.forEach((file) => handleUpload(file));
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    multiple: true, // Allow multiple file selection
  });

  const handleUpload = (file) => {
    setIsUploading(true);
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
        }
        return newProgress;
      });
    }, 200);
  };

  const handleCancel = () => {
    setIsUploading(false);
    setUploadProgress(0);
    setFiles([]);
  };

  return (
    <>
      <Toaster position="bottom-right" />
      <div className="grievance">
        <div
          className={
            grievanceform ? "grievanceform active" : "grievanceform active"
          }
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <Form>
                <div className="formstn">
                  <fieldset className="firstrow">
                    <h3>Grievant Information</h3>
                    <ul>
                      <li>
                        <span>
                          Date of Grievance
                          <span className="required_asterisk"> *</span>
                        </span>
                        <Field type="date" name="dateOfGrievance" />
                        <ErrorMessage
                          name="dateOfGrievance"
                          component="div"
                          className="gravienece_error"
                          placeholder="Enter the Date"
                        />
                      </li>
                      <li>
                        <span>
                          Grievant Name
                          <span className="required_asterisk"> *</span>
                        </span>
                        <Field
                          type="text"
                          placeholder="Enter your name"
                          name="grievantName"
                        />
                        <ErrorMessage
                          name="grievantName"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>
                      <li>
                        <span>Gender</span>
                        <Field as="select" name="gender">
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Rather Not Say">
                            Prefer not to answer
                          </option>
                          <option value="NA">
                            NA (for Org. or representative of community)
                          </option>
                          <option value="Female">Other</option>
                        </Field>
                        <ErrorMessage
                          name="gender"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>
                      <li>
                        <span>
                          Date of Birth
                          {/* <span className="required_asterisk"> *</span> */}
                        </span>
                        <Field type="date" name="dateOfBirth" />
                        <ErrorMessage
                          name="dateOfBirth"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>
                      <li className="w_60">
                        <span>
                          Subject of the Issue
                          <span className="required_asterisk"> *</span>
                        </span>
                        <Field
                          type="text"
                          name="subjectOfIssue"
                          placeholder="Enter the occuring issue"
                        />
                        <ErrorMessage
                          name="subjectOfIssue"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>
                      <li className="d-flex flex-column w_60">
                        <span>
                          Tick the Relevant Box
                          <span className="required_asterisk"> *</span>
                        </span>
                        <div className="d-flex gap-2">
                          <div className="d-flex flex-row col-6 mt-3">
                            <Field
                              type="radio"
                              id="newComplaintTrue"
                              name="newComplaint"
                              value="true"
                              className="radio_btn"
                            />
                            <label
                              htmlFor="newComplaintTrue"
                              className="col-md-8 col-auto mx-2"
                            >
                              New Complaint
                            </label>
                          </div>
                          <div className="d-flex flex-row col-6 mt-3">
                            <Field
                              type="radio"
                              id="newComplaintFalse"
                              name="newComplaint"
                              value="false"
                              className="radio_btn"
                            />
                            <label
                              htmlFor="newComplaintFalse"
                              className="col-md-8 col-auto mx-2"
                            >
                              Old Complaint
                            </label>
                          </div>
                        </div>
                        <ErrorMessage
                          name="newComplaint"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>

                      {values.newComplaint === "false" && (
                        <>
                          <li className="w_50">
                            <span>
                              Previous Case No.
                              <span className="required_asterisk"> *</span>
                            </span>
                            <Field
                              type="text"
                              name="previousCaseNo"
                              placeholder="Enter your Previous Case No."
                            />
                            <ErrorMessage
                              name="previousCaseNo"
                              component="div"
                              className="gravienece_error"
                            />
                          </li>
                          <li className="w_50">
                            <span>
                              Mode of Old Complaint Registered
                              <span className="required_asterisk"> *</span>
                            </span>
                            <Field
                              as="select"
                              name="modeOfOldComplaintRegistered"
                            >
                              <option value="">Select an option</option>
                              <option value="Call">Call</option>
                              <option value="E-Mail">E-Mail</option>
                              <option value="Website-Form">Website-form</option>
                              <option value="Letter">Letter</option>
                              <option value="Walk-in">Walk-in</option>
                              <option value="Hotline number">
                                Hotline number
                              </option>
                            </Field>
                            <ErrorMessage
                              name="modeOfOldComplaintRegistered"
                              component="div"
                              className="gravienece_error"
                            />
                          </li>
                        </>
                      )}
                    </ul>
                  </fieldset>
                  <fieldset className="firstrow">
                    <h3>Grievant Contact details</h3>
                    <ul>
                      <li>
                        <span htmlFor="relationWithPremierEnergies">
                          Relation with Premier Energies
                          <span className="required_asterisk"> *</span>
                        </span>
                        <Field
                          as="select"
                          id="relationWithPremierEnergies"
                          name="relationWithPremierEnergies"
                        >
                          <option value="">Select an option</option>
                          <option value="Employee">Employee</option>
                          <option value="Contractual worker">
                            Contractual worker
                          </option>
                          <option value="Supplier">Supplier</option>
                          <option value="Customer">Customer</option>
                          <option value="Regulatory Agency">
                            Regulatory Agency
                          </option>
                          <option value="Communities/Social Group">
                            Communities/Social Group
                          </option>
                        </Field>
                        <ErrorMessage
                          name="relationWithPremierEnergies"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>
                      {["Employee", "Contractual worker"].includes(
                        values.relationWithPremierEnergies
                      ) && (
                        <li>
                          <span htmlFor="contactDetailsAnonymous">
                            Contact Details Anonymous?
                          </span>
                          <Field
                            as="select"
                            id="contactDetailsAnonymous"
                            name="contactDetailsAnonymous"
                            disabled={
                              !["Employee", "Contractual worker"].includes(
                                values.relationWithPremierEnergies
                              )
                            }
                          >
                            <option value="">Are you anonymous</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Field>
                          <ErrorMessage
                            name="contactDetailsAnonymous"
                            component="div"
                          />
                        </li>
                      )}
                      {values.relationWithPremierEnergies === "Employee" && (
                        <li>
                          <span htmlFor="employerName">
                            Employer Name
                            <span className="required_asterisk"> *</span>
                          </span>
                          <Field
                            as="select"
                            id="employerName"
                            name="employerName"
                            disabled={
                              values.relationWithPremierEnergies !== "Employee"
                            }
                          >
                            <option value="">Select an option</option>
                            <option value="PEL- Premier Energies Limited">
                              PEL- Premier Energies Limited
                            </option>
                            <option value="PEPPL - Premier Energies Photovoltaic Private Limited">
                              PEPPL - Premier Energies Photovoltaic Private
                              Limited
                            </option>
                            <option
                              value="PEIPL - Premier Energies International Private Limited"
                            >
                              PEIPL - Premier Energies International Private
                              Limited
                            </option>
                            <option
                              value="PEGEPL - Premier Energies
                                  Global Environment Private Limited"
                            >
                              PEGEPL - Premier Energies Global Environment
                              Private Limited
                            </option>
                          </Field>
                          <ErrorMessage
                            name="employerName"
                            component="div"
                            className="gravienece_error"
                          />
                        </li>
                      )}
                      {["Employee", "Contractual worker"].includes(
                        values.relationWithPremierEnergies
                      ) && (
                        <li>
                          <span htmlFor="location">
                            Location
                            <span className="required_asterisk"> *</span>
                          </span>
                          <Field
                            as="select"
                            id="location"
                            name="location"
                            disabled={
                              !["Employee", "Contractual worker"].includes(
                                values.relationWithPremierEnergies
                              )
                            }
                          >
                            <option value="">Select an location</option>
                            <option value="HO-Corporate Office">
                              HO-Corporate Office
                            </option>
                            <option value="Factory">Factory</option>
                          </Field>
                          <ErrorMessage
                            name="location"
                            component="div"
                            className="gravienece_error"
                          />
                        </li>
                      )}
                      {values.relationWithPremierEnergies === "Employee" && (
                        <li>
                          <span htmlFor="department">
                            Department
                            <span className="required_asterisk"> *</span>
                          </span>
                          <Field
                            type="text"
                            id="department"
                            name="department"
                            disabled={
                              values.relationWithPremierEnergies !== "Employee"
                            }
                            placeholder="enter your department name"
                          />
                          <ErrorMessage
                            name="department"
                            component="div"
                            className="gravienece_error"
                          />
                        </li>
                      )}
                      {values.relationWithPremierEnergies === "Employee" && (
                        <li>
                          <span htmlFor="employeeID">
                            Employee ID
                            <span className="required_asterisk"> *</span>
                          </span>
                          <Field
                            type="text"
                            id="employeeID"
                            name="employeeID"
                            disabled={
                              values.relationWithPremierEnergies !== "Employee"
                            }
                            placeholder="enter your employee ID "
                          />
                          <ErrorMessage
                            name="employeeID"
                            component="div"
                            className="gravienece_error"
                          />
                        </li>
                      )}
                      {[
                        "Contractual worker",
                        "Supplier",
                        "Customer",
                        "Regulatory Agency",
                        "Communities/Social Group",
                      ].includes(values.relationWithPremierEnergies) && (
                        <li>
                          <span htmlFor="groupOrganizationName">
                            Group/Organization Name
                            <span className="required_asterisk"> *</span>
                          </span>
                          <Field
                            type="text"
                            id="groupOrganizationName"
                            name="groupOrganizationName"
                            disabled={
                              ![
                                "Contractual worker",
                                "Supplier",
                                "Customer",
                                "Regulatory Agency",
                                "Communities/Social Group",
                              ].includes(values.relationWithPremierEnergies)
                            }
                          />
                          <ErrorMessage
                            name="groupOrganizationName"
                            component="div"
                            className="gravienece_error"
                          />
                        </li>
                      )}
                      <li>
                        <span htmlFor="phone">
                          Phone
                          {values.relationWithPremierEnergies !==
                            "Contractual worker" && (
                            <span className="required_asterisk"> *</span>
                          )}
                        </span>
                        <Field
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>

                      <li>
                        <span htmlFor="email">
                          Email
                          {values.relationWithPremierEnergies !==
                            "Contractual worker" && (
                            <span className="required_asterisk"> *</span>
                          )}
                        </span>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email address"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>

                      <li className="w-100">
                        <span htmlFor="address">
                          Your address
                          <span className="required_asterisk"> *</span>
                        </span>
                        <Field
                          as="textarea"
                          id="address"
                          name="address"
                          placeholder="Enter your address (Address, City, State / Province, ZIP / Postal code, Country)"
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>
                    </ul>
                  </fieldset>
                  <fieldset className="firstrow">
                    <h3>deatils of the event leading to grievance</h3>
                    <ul>
                      <li className="w-100">
                        <span htmlFor="detailsOfEventLeadingToGrievance">
                          Details of Event Leading to grievance
                          <span className="required_asterisk"> *</span>
                        </span>
                        <Field
                          type="text"
                          id="detailsOfEventLeadingToGrievance"
                          name="detailsOfEventLeadingToGrievance"
                          placeholder="Provide names, titles, and witnesses involved in the event"
                        />
                        <ErrorMessage
                          name="detailsOfEventLeadingToGrievance"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>

                      <li className="w-100">
                        <span htmlFor="whenDidItOccur">
                          When did it occur?{" "}
                          <span className="required_asterisk"> *</span>
                        </span>
                        <Field
                          type="datetime-local"
                          id="whenDidItOccur"
                          name="whenDidItOccur"
                          placeholder="Enter the occuring date"
                        />
                        <ErrorMessage
                          name="whenDidItOccur"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>

                      <li
                        className="w-100
                      "
                      >
                        <span htmlFor="whereDidItOccur">
                          Where did it occur?{" "}
                          <span className="required_asterisk">*</span>
                        </span>
                        <Field
                          as="textarea"
                          row="1"
                          id="whereDidItOccur"
                          name="whereDidItOccur"
                          placeholder="Provide specific location details including landmark like Railway station code etc."
                        />
                        <ErrorMessage
                          name="whereDidItOccur"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>

                      <li className="w-100">
                        <span htmlFor="locationDetails">
                          Provide specific location details State, Country, and
                          Pincode<span className="required_asterisk">*</span>
                        </span>
                        <Field
                          as="textarea"
                          row="1"
                          id="locationDetails"
                          name="locationDetails"
                          placeholder="Enter location (Address, City, State / Province, ZIP / Postal code, Country)"
                        />
                        <ErrorMessage
                          name="locationDetails"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>

                      <li className="w-100">
                        <span htmlFor="whatHappened">
                          What happened?{" "}
                          <span className="required_asterisk">*</span>
                        </span>
                        <Field
                          as="textarea"
                          id="whatHappened"
                          name="whatHappened"
                          placeholder="Describe the event and any incidents leading to the grievance"
                        />
                        <ErrorMessage
                          name="whatHappened"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>

                      <li className="w_50">
                        <span htmlFor="whyIsThisAGrievance">
                          Why is this a grievance?{" "}
                          <span className="required_asterisk">*</span>
                        </span>
                        <Field
                          as="textarea"
                          id="whyIsThisAGrievance"
                          name="whyIsThisAGrievance"
                          placeholder="List all policies, procedures, and guidelines violated"
                        />
                        <ErrorMessage
                          name="whyIsThisAGrievance"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>

                      <li className="w_50">
                        <span htmlFor="whatAdjustmentIsRequired">
                          What adjustment is required?{" "}
                          <span className="required_asterisk">*</span>
                        </span>
                        <Field
                          as="textarea"
                          id="whatAdjustmentIsRequired"
                          name="whatAdjustmentIsRequired"
                          placeholder="Describe what actions need to be taken to correct the situation"
                        />
                        <ErrorMessage
                          name="whatAdjustmentIsRequired"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>

                      <li className="d-flex flex-column w_60">
                        <span>
                          Is the complaint filed under any jurisdiction?{" "}
                          <span className="required_asterisk">*</span>
                        </span>
                        <div className="d-flex">
                          <div className="d-flex flex-row col-6">
                            <Field
                              type="radio"
                              id="jurisdictionTrue"
                              name="isComplaintFiledUnderAnyJurisdiction"
                              value="true"
                              className="radio_btn"
                            />
                            <label
                              htmlFor="jurisdictionTrue"
                              className="col-8 mx-3"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="d-flex flex-row col-6">
                            <Field
                              type="radio"
                              id="jurisdictionFalse"
                              name="isComplaintFiledUnderAnyJurisdiction"
                              value="false"
                              className="radio_btn"
                            />
                            <label
                              htmlFor="jurisdictionFalse"
                              className="col-8 mx-3"
                            >
                              No
                            </label>
                          </div>
                        </div>
                        <ErrorMessage
                          name="isComplaintFiledUnderAnyJurisdiction"
                          component="div"
                          className="gravienece_error"
                        />
                      </li>

                      <li className="w-100 ">
                        <span htmlFor="additionalComments">
                          Additional Comments
                        </span>
                        <Field
                          as="textarea"
                          id="additionalComments"
                          name="additionalComments"
                        />
                      </li>
                      <li className="w-100 d-flex flex-column ">
                        <span>
                          Please provide the necessary document by uploading it
                          here
                        </span>
                        <div
                          {...getRootProps()}
                          className={` drag_area ${
                            isDragActive ? "active" : ""
                          }`}
                        >
                          <input
                            {...getInputProps()}
                            type="file"
                            id="fileUpload"
                            name="fileUpload"
                            accept=".pdf,.jpg,.jpeg,.png,.doc"
                          />
                          {isDragActive ? (
                            <p>Drop the files here</p>
                          ) : files.length > 0 ? (
                            <div>
                              {files.map((file, index) => (
                                <div
                                  key={index}
                                  className="d-flex flex-column align-items-center"
                                >
                                  <img
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                  />
                                  <p>{file.name}</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <span className="drag_area_title">
                              Drag &amp; drop files here
                            </span>
                          )}
                        </div>
                      </li>
                    </ul>
                    <div>
                      <label
                        htmlFor="affirmation"
                        className="mx-2 w-md-80 w-100"
                      >
                        <Field
                          type="checkbox"
                          id="affirmation"
                          name="affirmation"
                        />
                        <span className="mx-2">
                          I affirm the truthfulness of the information provided
                          in this form. I understand protections apply to good
                          faith complaints only.{" "}
                          <span className="required_asterisk">*</span>
                        </span>
                      </label>
                      <ErrorMessage
                        name="affirmation"
                        component="div"
                        className="gravienece_error"
                      />
                    </div>
                  </fieldset>
                </div>
                <div
                  className="_gravience_from_btn mx-auto mt-5
                      "
                >
                  <button type="submit" className="btn-4">
                    <span>submit</span>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default GravienceForm;