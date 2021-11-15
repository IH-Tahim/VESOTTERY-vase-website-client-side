import React from 'react';
import './Banner.css';
import { Container } from 'react-bootstrap';
import bannerBgImg from "../../../images/vesotteryBanner.jpg";

const Banner = () => {
    const bannerBg = {
        backgroundImage: `url(${bannerBgImg})`,
        height: "85vh",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        margin: "auto 0 auto 0"
    }
    return (
        <div className="banner-container " style={bannerBg}>
            <Container>
                <span className="text-white banner-text fs-2">Bring <br /><span className="text-info">Elegent Looks</span><br />In Your House</span>


            </Container>
        </div>
    );
};

export default Banner;