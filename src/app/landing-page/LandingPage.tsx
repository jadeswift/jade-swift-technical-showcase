import React, {FC} from "react";
import {Box} from "@mui/material";
import technicalShowcase from "../../assets/technical-showcase-animated.svg";
import {Link} from "react-router-dom";

export const LandingPage: FC = () => (
    <Box>
        <Link to={"albums"}>
            <img src={technicalShowcase} alt="technical showcase" aria-label={'landing-animation'}/>
        </Link>
    </Box>
);
