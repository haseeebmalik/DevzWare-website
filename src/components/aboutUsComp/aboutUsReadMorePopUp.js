import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./aboutUsReadMorePopUp.css"
import aboutUsImg from "../../images/blog/blogImg.png"
import { RiSendPlaneFill } from 'react-icons/ri';
import crossSign from "../../images/aboutUs/AboutUsCrossSignImg.png"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "47%",
    height: "58%",
    // overflow: "scroll",
    overflow: "auto",

    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};




export default function ReadMoreAboutUs({ handleOpen, handleClose, open }) {


    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="modelBox" style={{

                    borderRadius: "23px",
                    color: "white"
                }} >
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <div style={{ display: "flex" }}>
                            <h1 style={{ color: "#BF186E" }}>   About US</h1>
                            <img 
                             onClick={handleClose}
                            style={{
                                
                                position: "relative",

                                left: "28vw",
                                height: "2vh"
                            }} src={crossSign} />
                        </div>

                        {/* <img src={aboutUsImg} /> */}
                        <p>We deliver high-quality, innovative, and cost-effective solutions for our clients worldwide. Our portfolio consists of top world startups that have grossed millions of dollars rangiin AI, Blockchain and Metaverse. Operating and booming with an excellent record of hundreds of local and international clients.client satisfaction is our prime concern and to achieve this we use the latest generation technology and smart development skills to ensure in-time delivery.We deliver high-quality, innovative, and cost-effective solutions for our clients worldwide. Our portfolio consists of top world startups that have grossed millions of dollars ranging in AI, Blockchain and Metaverse. Operating and booming with an excellent record of hundreds of local and international clients.</p>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}