import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './contact.css'
import { config } from '../../config'

export function Contact() {
	const [name, setName] = useState('')
	const [contact, setContact] = useState('')
	const [msg, setMsg] = useState('')

	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [showSuccess, setShowSuccess] = useState(false)
	const [errMsg, seterrMsg] = useState('')

	const { pageName = '' } = useParams()
	const openContactUs = React.createRef()

	useEffect(() => {
		if (openContactUs && openContactUs.current) {
			if (pageName === 'contact') {
				openContactUs.current.click()
			}
		}
	}, [])

	function sendEmail() {
		setIsLoading(true)
		setIsError(false)
		seterrMsg('')
		if (name.trim() === '' || msg.trim() === '' || contact.trim() === '') {
			setIsError(true)
			seterrMsg('Please enter details to contact !')
			setIsLoading(false)
			return null
		}
		var data = {
			service_id: config.email.serviceId,
			template_id: config.email.templateId,
			user_id: config.email.userId,
			template_params: {
				from_name: name,
				to_name: config.email.toName,
				message: `${msg}, ${contact}`
			}
		}
		fetch(config.email.url, {
			method: 'post',
			headers: {
				Accept: '*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(
			_ => {
				setIsLoading(false)
				setIsError(false)
				setShowSuccess(true)
			},
			_ => {
				seterrMsg('some error occured !')
				setIsLoading(false)
				setIsError(true)
			}
		)
	}

	function onClose() {
		setName('')
		setContact('')
		setMsg('')
		setIsLoading(false)
		setIsError(false)
		setShowSuccess(false)
		seterrMsg('')
	}

	function getSuccessContent() {
		return (
			<div className='modal-content'>
				<div className='modal-header'>
					<button
						onClick={onClose}
						type='button'
						id='closeBtn'
						className='close'
						data-dismiss='modal'>
						&times;
					</button>
				</div>
				<div className='modal-body'>
					<div className='row contactus-success'>
						Thank you for your interest
					</div>
					<div className='row'>
						<div className='col-sm-12 contactus-body-success'>
							<p>Our customer care team will reach out to you soon.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}

	function getContactForm() {
		return (
			<div className='modal-content'>
				<div className='modal-header'>
					{isError && <label className='error-label'>{errMsg}</label>}
					<button
						onClick={onClose}
						type='button'
						id='closeBtn'
						className='close'
						data-dismiss='modal'>
						&times;
					</button>
				</div>
				<div className='modal-body'>
					<div className='row contactus-head'>Contact Us</div>
					<div className='row'>
						<div className='form-group col-sm-6'>
							<label htmlFor='name' className='input-label'>
								Full Name
							</label>
							<input
								value={name}
								onChange={e => setName(e.target.value)}
								disabled={isLoading}
								type='text'
								name='name'
								className='form-control'
								placeholder=''
							/>
						</div>
						<div className='form-group col-sm-6'>
							<label htmlFor='number' className='input-label'>
								Contact number
							</label>
							<input
								value={contact}
								onChange={e => setContact(e.target.value)}
								disabled={isLoading}
								type='text'
								name='number'
								className='form-control'
								placeholder=''
							/>
						</div>
						<div className='form-group col-sm-12'>
							<label htmlFor='message' className='input-label'>
								Message
							</label>
							<textarea
								value={msg}
								onChange={e => setMsg(e.target.value)}
								disabled={isLoading}
								type='message'
								name='message'
								className='form-control'
								placeholder=''
							/>
						</div>
						<button
							disabled={isLoading}
							onClick={sendEmail}
							className='btn btns send-msg-btn'>
							{isLoading && (
								<div className='spinner-border spinner-border-sm'></div>
							)}
							Send Message
						</button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<React.Fragment>
			<a
				role='button'
				ref={openContactUs}
				data-toggle='modal'
				data-target='#myContactModal'>
				CONTACT US
			</a>
			<div
				className='modal'
				id='myContactModal'
				data-backdrop='static'
				data-keyboard='false'>
				<div className='modal-dialog modal-lg'>
					{showSuccess ? getSuccessContent() : getContactForm()}
				</div>
			</div>
		</React.Fragment>
	)
}
