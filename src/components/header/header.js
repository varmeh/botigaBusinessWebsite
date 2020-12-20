import React from 'react';
import {
    Link,
  } from "react-router-dom";
import botigaBackground from '../../assets/resource/background.svg';
import logo from '../../assets/resource/logo.svg';
import orderHome from '../../assets/resource/order-home.svg';
import { DownloadAppBtn } from "../download-app-btn/downloadAppBtn";

import './header.css';

export function Header() {
    return (
        <div className="d-flex flex-column head" style={{ backgroundImage: `url(${botigaBackground})` }}>
            <div className="d-flex justify-content-center pt-5 pb-5"><Link to="/"><img alt="Botiga logo" src={logo} /></Link></div>
            <div className="d-flex justify-content-center">
                <div className="d-flex website-width align-items-center">
                    <div className="d-flex flex-column headingContent">
                        <p className="head-overview-content">Start selling in community apartments near you</p>
                        <DownloadAppBtn />
                    </div>
                    <img alt="Botiga overview" className="screenImg" src={orderHome} />
                </div>
            </div>
        </div>
    );
}
