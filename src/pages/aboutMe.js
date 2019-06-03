import React, { Component } from 'react';
import Me from '../images/me.jpg';
import Resume from '../other/Resume.pdf';
import '../css/aboutMe.scss';

export class aboutMe extends Component {
	render() {
		return (
			<div className="aboutMeDiv">
				<div className="profileImg">
					<img src={Me} style={{ width: '100px' }} />
				</div>
				<div className="myInfo">
					<h2>Welcome!</h2>
					<h5>
						Hi! I am Steven Kuang, a Computer Science major at Stony Brook University. On my free time, I
						like to challenge myself by learning new programming languages either through videos or tutorial
						websites. I find this the best way for me to learn and expose myself to new languages. Languages
						that I have experience in are Java, C, HTML, CSS, React JS, MIPS Assembly, Python, SML, and
						Prolog In the summer of 2018, I was a software engineer intern for Comake.io. There I had the
						chance to work and develop the landing pages for their new project. When I’m not coding, you
						will find me binge watching my Korean dramas, playing games, or sleeping the day away. Oh, I
						also love drinking boba (Strawberry Lemon Green Tea). ♥
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
