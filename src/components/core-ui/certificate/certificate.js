import {
  Container
} from "@mui/material";
import React, { useContext } from "react";
//import { HiExternalLink } from "react-icons/hi";
//import Slider from "react-slick";
import { ThemeContext } from "../../../contexts/theme-context";

//import AnimationLottie from '../../helper/animation-lottie';
import CertificateCard from './certificate-card';
import "./certificate.css";
import { certificateData } from "../../../data/certificateData";

const Certificate = () => {
  const { theme } = useContext(ThemeContext);

 

  return (
    <Container sx={{ py: 5 }}>
       <div className="education-body">
                    <div className="education-image">
                        
                    </div>
                    <div className="education-description">
                        <h1 style={{ color: theme.primary }}>Certificate and License</h1>
                        {certificateData.map(edu => (
                            <CertificateCard
                                key={edu.id}
                                id={edu.id}
                                institution={edu.institution}
                                course={edu.course}
                                startYear={edu.startYear}
                                endYear={edu.endYear}
                            />
                        ))}
                    </div>
                </div>
    </Container>
  );
};

export default Certificate;
