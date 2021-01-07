import React from 'react'
import { DownloadAppBtn } from '../download-app-btn/downloadAppBtn'
import communityImage from '../../assets/resource/community.png'
import zeroCommison from '../../assets/resource/zero-commision.png'
import manageOrder from '../../assets/resource/manage-order.png'
import communityBuilding from '../../assets/resource/community-building.png'
import './body.css'

export function Body() {
	return (
		<div className='container'>
			<div className='margin130-top margin130-bottom p-lg-5'>
				<LeadingImageRow
					image={communityImage}
					primary={'Your customers are just a tap away'}
					secondary={
						'We bring customers to you. You can instantly access communities in your neighbourhood.'
					}
				/>
				<TrailingImageRow
					image={zeroCommison}
					primary='0% Commission. Absolutely free'
					secondary='Money credited directly to your registered bank account.'
				/>
				<LeadingImageRow
					image={manageOrder}
					primary='Manage orders & deliveries'
					secondary='Keep track of all orders and improve delivery efficiency with our smart delivery system.'
				/>
			</div>
			<DownloadAppCard />
		</div>
	)
}

function LeadingImageRow(props) {
	return (
		<div className='d-flex'>
			<div className='d-flex flex-column justify-content-center col-lg-5 col-med-12 col-sm-12'>
				<img alt={props.primary} className='bodyImg' src={props.image} />
			</div>
			<div className='col-lg-2 col-sm-12 col-med-12' />
			<div className='d-flex flex-column justify-content-center col-lg-5 col-med-12 col-sm-12'>
				<div
					dangerouslySetInnerHTML={{ __html: props.primary }}
					className='primaryText'
				/>
				<div
					dangerouslySetInnerHTML={{ __html: props.secondary }}
					className='secondaryText pt-4'
				/>
			</div>
		</div>
	)
}

function TrailingImageRow(props) {
	return (
		<div className='d-flex margin70-top margin70-bottom justify-content-end col-reverse'>
			<div className='d-flex flex-column justify-content-center col-lg-5 col-sm-12 col-med-12'>
				<div
					dangerouslySetInnerHTML={{ __html: props.primary }}
					className='primaryText'
				/>
				<div
					dangerouslySetInnerHTML={{ __html: props.secondary }}
					className='secondaryText pt-4'
				/>
			</div>
			<div className='col-lg-2 col-sm-12 col-med-12' />
			<div className='d-flex flex-column justify-content-center col-lg-5 col-sm-12 col-med-12'>
				<img alt={props.primary} className='bodyImg' src={props.image} />
			</div>
		</div>
	)
}

function DownloadAppCard() {
	const style = { height: '271px' }
	return (
		<div className='d-flex Infocard pl-4 pr-4'>
			<div className='d-flex flex-column justify-content-end col-lg-4 col-sm-12 col-med-12'>
				<img
					style={style}
					alt='community building'
					className='Infocard-image'
					src={communityBuilding}
				/>
			</div>
			<div className='col-lg-1 col-sm-12 col-med-12' />
			<div className='d-flex flex-column justify-content-center col-lg-7 col-sm-12 col-med-12 pt-4'>
				<div className='primaryText'>
					{' '}
					Start selling in apartments communities now
				</div>
				<DownloadAppBtn />
			</div>
		</div>
	)
}
