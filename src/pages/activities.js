import React, { Component } from 'react';
import '../css/activities.scss';

export class activities extends Component {
	render() {
		return (
			<div className="activitiesDiv">
				<h1>Activities</h1>
				<div className="activitiesListDiv">
					<div className="listFlex">
						<div className="leftListFlex">
							<i class="fas fa-laptop-code" />
							<h3>Comake: Software Engineering Intern New York</h3>
						</div>
						<div className="rightListFlex">
							<h5>
								Responsible for building a website for a start up, Comake(<a
									href="https://comake.io/"
									target="_blank"
								>
									comake.io
								</a>), based on provided designs. Languages that I used to build the website were HTML,
								CSS, JavaScript, and D3. I have learned how to better optimize a website in terms of
								responsiveness and display data in more appealing ways.
							</h5>
						</div>
					</div>

					<div className="listFlex">
						<div className="leftListFlex">
							<i class="fas fa-chalkboard-teacher" />
							<h3>CSE 101 Computer Science Principles: Teacher’s Assistant</h3>
						</div>
						<div className="rightListFlex">
							<h5>
								Teacher’s assistance for a Python course, which I held labs and office hours to guide
								students in their coursework and provide a better understanding of the language.
							</h5>
						</div>
					</div>

					<div className="listFlex">
						<div className="leftListFlex">
							<i class="fas fa-robot" />
							<h3>Robot Design Team: Member</h3>
						</div>
						<div className="rightListFlex">
							<h5>
								An official club that hosts weekly meetings discussing about external and internal
								competitions. Students are taught how to build, program, and design their own robots for
								competitions.
							</h5>
						</div>
					</div>

					<div className="listFlex">
						<div className="leftListFlex">
							<i class="fas fa-code" />
							<h3>Stony Brook Computing Society: Member</h3>
						</div>
						<div className="rightListFlex1">
							<h5>
								An official Stony Brook club that hosts weekly meetings and events for students
								interested in computer programming. They also host seminars directed by students and
								professors.
							</h5>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default activities;
