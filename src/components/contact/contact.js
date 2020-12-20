import React, { useEffect, useState } from 'react';
import {
    useParams
} from "react-router-dom";
import './contact.css';
import { config } from "../../config";


export function Contact() {
    const nameInp = React.createRef();
    const contactInp = React.createRef();
    const msgInp = React.createRef();
    const openContactUs = React.createRef();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errMsg, seterrMsg] = useState('');
    const { pageName = '' } = useParams();

    useEffect(() => {
        if (openContactUs && openContactUs.current) {
            if (pageName === 'contact') {
                openContactUs.current.click();
            }
        }
    }, []);

    function sendEmail() {
        seterrMsg('');
        setIsLoading(true);
        setIsError(false);
        if (nameInp.current.value.trim() === '' || msgInp.current.value.trim() === '' || contactInp.current.value.trim() === '') {
            setIsError(true);
            seterrMsg('Please enter details to contact !');
            setIsLoading(false);
            return null;
        }
        var data = {
            service_id: config.email.serviceId,
            template_id: config.email.templateId,
            user_id: config.email.userId,
            template_params: {
                'from_name': nameInp.current.value,
                'to_name': config.email.toName,
                'message': `${msgInp.current.value}, ${contactInp.current.value}`
            }
        };
        fetch(config.email.url, {
            method: 'post',
            headers: {
                'Accept': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((_) => {
            setIsLoading(false);
            setIsError(false);
            document.getElementById('closeBtn').click();

        }, (_) => {
            seterrMsg('some error occured !');
            setIsLoading(false);
            setIsError(true);
        });
    }

    return (
        <React.Fragment>
            <a role="button" ref={openContactUs} data-toggle="modal" data-target="#myContactModal">CONTACT US</a>
            <div className="modal" id="myContactModal" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            {isError && <label className="error-label">{errMsg}</label>}
                            <button type="button" id="closeBtn" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">

                            <div className="row contactus-head">Contact Us</div>
                            <div className="row">
                                <div className="form-group col-sm-6">
                                    <label htmlFor="name" className="input-label">Full Name</label>
                                    <input disabled={isLoading} ref={nameInp} type="text" name='name' className="form-control" placeholder='Name' />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label htmlFor="number" className="input-label">Contact number</label>
                                    <input disabled={isLoading} ref={contactInp} type="text" name='number' className="form-control" placeholder='Enter Contact Number' />
                                </div>
                                <div className="form-group col-sm-12">
                                    <label htmlFor="message" className="input-label">Message</label>
                                    <textarea disabled={isLoading} ref={msgInp} type="message" name='message' className="form-control" placeholder='Tell us in Short...' />
                                </div>
                                <button disabled={isLoading} onClick={sendEmail} className="btn btns send-msg-btn">
                                    {isLoading && <div className="spinner-border spinner-border-sm"></div>}
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

