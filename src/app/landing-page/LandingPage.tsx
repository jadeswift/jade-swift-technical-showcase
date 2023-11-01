import React, {FC} from "react";
import {Box} from "@mui/material";
import {ReactComponent as TechnicalShowcase} from "../../assets/technical-showcase-animated.svg";
import {Link} from "react-router-dom";

export const LandingPage: FC = () => (
    <Box>
        <Link to={"albums"}>
            <TechnicalShowcase aria-label={'landing-animation'}/>
        </Link>
    </Box>
);
