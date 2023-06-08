import React from 'react';
import './Hello.css';
import { greeting } from '../../portfolio';
import Social from '../Social/Social';

function Hello() {
	const Fade: any = require("react-reveal/Fade");
	return (
		<Fade bottom duration={800}>
		<section className="section--hello">
			<div className="inner">

				<div className="wrapper">
					<div className="text-title">
						{greeting.title}&nbsp;
						<span className="hello-emoji">👋</span>
					</div>
					{/* <div className="role">
						<span>{greeting.role}</span>
					</div>
					<div className="text-subtitle">
						<span>{greeting.subTitle}</span>
					</div> */}
					<div className="role">
                    	<img src={require("../../assets/your photo.png")} alt="profile" />
                	</div>
					<div className="social-links">
						<Social />
					</div>
					<div className="wrapper-links">
						<a href="#experience" id="experience">Monitor &gt;</a>
						<a href="#contact" id="about">Contact &gt;</a>
						{/* <a href={greeting.resumeLink} id="resume" target="_blank" rel="noopener noreferrer">View Resume &gt;</a> */}
					</div>
				</div>

			</div>
		</section>
		</Fade>
	);
}
export default Hello;