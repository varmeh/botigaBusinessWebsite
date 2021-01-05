import React from 'react';
import './footer.css';
import {
    Link,
} from "react-router-dom";
import { Contact } from "../contact/contact";
import { config } from "../../config";

export function Footer() {
    return (
        <div className="container">
            <div className="d-flex footer margin70-top margin70-bottom">
                <div className="mr-lg-auto company-name p-3">&copy;&nbsp;<Link to="/">BOTIGA PVT LTD 2020.</Link></div>
                <div className="p-3"><a href={config.documents.privacy} target="_blank" rel="noreferrer">PRIVACY POLICY</a></div>
                <div className="p-3"><a href={config.documents.terms} target="_blank" rel="noreferrer">TERMS</a></div>
                <div className="p-3"><Contact /></div>
            </div>
        </div>
    );
}
