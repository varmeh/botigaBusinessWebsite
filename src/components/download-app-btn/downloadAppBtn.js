import React from "react";
import playStore from "../../assets/resource/play-store.png";
import appStore from "../../assets/resource/app-store.png"
import { config } from '../../config';

export function DownloadAppBtn() {
    const style = { height: '60px', width: '203px' }
    return (
        <div className="d-flex pt-3 pb-3">
            <div className="pt-4">
                <a href={config.store.appStore} target="_blank" rel="noreferrer">
                    <img role="button" alt="app store" style={style} src={appStore} />
                </a>
            </div>
            <div className="pl-2 pr-2" />
            <div className="pt-4">
                <a href={config.store.playStore} target="_blank" rel="noreferrer">
                    <img role="button" alt="play store" style={style} src={playStore} />
                </a>
            </div>
        </div>
    );
}

