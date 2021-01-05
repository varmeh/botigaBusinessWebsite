import React from "react";
import playStore from "../../assets/resource/play-store.png";
import appStore from "../../assets/resource/app-store.png"
import { config } from '../../config';

export function DownloadAppBtn() {
    const style = { height: '60px', width: '203px' }
    return (
        <div className="row mt-3 mb-5">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 pt-4">
                <a href={config.store.appStore} target="_blank" rel="noreferrer">
                    <img role="button" alt="app store" style={style} src={appStore} />
                </a>
            </div>
            <div className="col-lg-1 col-xs-12 col-sm-2 col-med-2" />
            <div className="pt-4 col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <a href={config.store.playStore} target="_blank" rel="noreferrer">
                    <img role="button" alt="play store" style={style} src={playStore} />
                </a>
            </div>
        </div>
    );
}

