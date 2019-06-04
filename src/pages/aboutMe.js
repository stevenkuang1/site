import React, { Component } from 'react';
import Me from '../images/me.jpg';
import Resume from '../other/Resume.pdf';
import '../css/aboutMe.scss';

export class aboutMe extends Component {
	render() {
		return (
			<div className="aboutMeDiv">
				<div className="profileImg">
					<img src={Me} />
				</div>
				<div className="myInfo">
					<h1>Welcome!</h1>
					<h5>
						Hi! I am Steven Kuang, a Computer Science major at{' '}
						<a href="https://www.stonybrook.edu/" target="_blank">
							Stony Brook University
						</a>. On my free time, I like to challenge myself by learning new programming languages either
						through videos or tutorial websites. Languages that I have experience in are{' '}
						<h5 className="programmingLanguages">
							Java, C, HTML, CSS, React JS, MIPS Assembly, Python, SML, and Prolog
						</h5>. When I’m not coding, you will find me binge watching my Korean dramas, playing games, or
						sleeping the day away. Oh, I also love drinking boba (Strawberry Lemon Green Tea). ♥
					</h5>
					<h5>
						<a href={Resume}>Resume</a>
					</h5>
				</div>
			</div>
		);
	}
}

export default aboutMe;
