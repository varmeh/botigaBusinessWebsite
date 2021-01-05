import React from 'react';
import {
    Link,
} from "react-router-dom";
import botigaBackground from '../../assets/resource/background.svg';
import logo from '../../assets/resource/logo.svg';
import orderHome from '../../assets/resource/order-home.png';
import { DownloadAppBtn } from "../download-app-btn/downloadAppBtn";

import './header.css';

export function Header() {
    return (
        <div className="w-100 head" style={{ backgroundImage: `url(${botigaBackground})` }}>
            <div className="container">
                <div className="d-flex justify-content-center pt-5 pb-5"><Link to="/"><img alt="Botiga logo" src={logo} /></Link></div>
                <div className="d-flex">
                    <div className="d-flex flex-column headingContent justify-content-center col-lg-7 col-sm-12 col-med-12">
                        <p className="head-overview-content">Start selling in community apartments near you</p>
                        <DownloadAppBtn />
                    </div>
                    <div className="d-flex flex-column justify-content-center col-lg-5 col-sm-12 col-med-12">
                        <img alt="Botiga overview" className="headerOverviewImg" src={orderHome} />
                    </div>
                </div>
            </div>
        </div>
    );
}