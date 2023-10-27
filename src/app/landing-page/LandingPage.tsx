import React, {FC} from "react";
import {Box} from "@mui/material";
import technicalShowcase from "../../assets/technical-showcase-animated.svg";

export const LandingPage: FC = () => (
    <Box>
        <img src={technicalShowcase} alt="technical showcase" aria-label={'landing-animation'}/>
    </Box>
);
