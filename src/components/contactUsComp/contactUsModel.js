import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./contactUsModel.css"

import { RiSendPlaneFill } from 'react-icons/ri';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,

    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(4, "Password is too short - should be 4 chars min"),
    concern:Yup.string().required("Concern is required")
});

const initialValues = {
    email: "",
    password: "",
    concern:""
};


export default function ContactUsModel({ handleOpen, handleClose, open }) {


    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="modelBox" style={{
                    background: " linear-gradient(to right, #3a6186, #89253e)",
                    borderRadius: "23px",
                    color:"white"
                }} >
                    <Formik
                        initialValues={initialValues}
                        validationSchema={signInSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {(formik) => {
                            const { errors, touched, isValid, dirty } = formik;
                            return (
                                <div className="container">
                                    <h1>Sign in to continue</h1>
                                    <Form>
                                        <div className="form-row">
                                            <div>
                                                <label htmlFor="email">Email</label>
                                            </div>
                                            
                                            <Field
                                                style={{
                                                    height: " 5vh",
                                                    width:"23vw",
                                                    borderRadius: "11px",
                                                    marginBottom:"20px",
                                                    
                                                    backgroundColor: "transparent"
                                                }}
                                                type="email"
                                                name="email"
                                                id="email"
                                                className={
                                                    errors.email && touched.email ? "input-error" : "field"
                                                }
                                            />
                                           
                                            {/* <ErrorMessage name="email" component="span" className="error" /> */}
                                        </div>

                                        <div className="form-row">
                                            <div>
                                                <label htmlFor="password">Password</label>
                                            </div>
                                            <Field
                                                style={{
                                                    height: " 5vh",
                                                    width:"23vw",
                                                    borderRadius: "11px",
                                                    marginBottom:"20px",
                                                    backgroundColor: "transparent"
                                                }}
                                                type="password"
                                                name="password"
                                                id="password"
                                                className={
                                                    errors.password && touched.password ? "input-error" :  "field"
                                                }
                                            />

                                            {/* <ErrorMessage
                                                name="password"
                                                component="span"
                                                className="error"
                                            /> */}
                                        </div>
                                        <div className="form-row">
                                            <div>
                                                <label htmlFor="concern">   Concern</label>
                                            </div>
                                            <Field
                                                style={{
                                                    height: " 5vh",
                                                    width: "23vw",
                                                    borderRadius: "11px",

                                                    backgroundColor: "transparent"
                                                }}
                                                type="text"
                                                name="concern"
                                                id="concern"
                                                className={
                                                    errors.email && touched.email ? "input-error" : "field"
                                                }
                                            />
                                            {/* <ErrorMessage name="email" component="span" className="error" /> */}
                                        </div>
                                       
                                        <div className='buttonDiv' style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginTop: "7vw"
                                        }}>
                                            <Button variant="contained" endIcon={<RiSendPlaneFill />} type="submit"
                                                className={!(dirty && isValid) ? "disabled-btn" : ""}
                                                disabled={!(dirty && isValid)}>
                                                Send
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            );
                        }}
                    </Formik>
                </Box>
            </Modal>
        </div>
    );
}