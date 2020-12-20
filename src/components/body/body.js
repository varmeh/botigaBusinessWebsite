import React from "react";
import { DownloadAppBtn } from "../download-app-btn/downloadAppBtn";
import communityImage from "../../assets/resource/community.png";
import zeroCommison from "../../assets/resource/zero-commision.png";
import manageOrder from "../../assets/resource/manage-order.png";
import communityBuilding from "../../assets/resource/community-building.png";
import './body.css';

export function Body() {
    return (
        <React.Fragment>
            <LeadingImageRow image={communityImage} primary={"Your customers are just a tap away"} secondary={"We bring customers to you. You can instantly access communities in your neighbourhood."} />
            <TrailingImageRow image={zeroCommison} primary="0% Commission. Absolutely free" secondary="Receive money directly to your bank account in 1 day." />
            <LeadingImageRow image={manageOrder} primary="Manage orders & deliveries" secondary="Keep track of all orders and improve delivery efficiency with our smart delivery system." />
            <DownloadAppCard />
        </React.Fragment>
    )
}

function LeadingImageRow(props) {
    return (
        <div className="d-flex flex-column margin100-top">
            <div className="d-flex justify-content-center">
                <div className="d-flex website-width align-items-center">
                    <img alt={props.primary} className="bodyImg" src={props.image} />
                    <div className="d-flex flex-column contentText-padding">
                        <div dangerouslySetInnerHTML={{ __html: props.primary }} className="primaryText" />
                        <div dangerouslySetInnerHTML={{ __html: props.secondary }} className="secondaryText pt-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}


function TrailingImageRow(props) {
    return (
        <div className="d-flex flex-column margin100-top">
            <div className="d-flex justify-content-center">
                <div className="d-flex website-width align-items-center col-reverse">
                    <div className="d-flex flex-column contentText-padding">
                        <div dangerouslySetInnerHTML={{ __html: props.primary }} className="primaryText" />
                        <div dangerouslySetInnerHTML={{ __html: props.secondary }} className="secondaryText pt-4" />
                    </div>
                    <img alt={props.primary} className="bodyImg" src={props.image} />
                </div>
            </div>
        </div>
    );
}

function DownloadAppCard() {
    const style = { height: '271px'};
    return (
        <div className="d-flex flex-column margin100-top">
            <div className="d-flex justify-content-center">
                <div className="d-flex website-width align-items-center Infocard">
                    <img style={style} alt="community building" className="Infocard-image" src={communityBuilding} />
                    <div className="d-flex flex-column Infocard-content">
                        <div className="primaryText"> Start selling in community apartments now</div>
                        <DownloadAppBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}