import React, { Component } from 'react';
import '../css/contact.scss';

export class contact extends Component {
	render() {
		return (
			<div className="contactDiv">
				<div className="contactListDiv">
					<div>
						<h5>
							<i class="fas fa-at" /> Email:
							<a href="mailto: steven.kuang@stonybrook.edu"> steven.kuang@stonybrook.edu</a>
						</h5>
					</div>

					<div>
						<h5>
							<i class="fab fa-linkedin-in" /> Linkedin:
							<a href="https://www.linkedin.com/in/steven-kuang/"> Steven Kuang</a>
						</h5>
					</div>

					<div>
						<h5>
							<i class="fab fa-github-alt" /> GitHub:
							<a href="https://github.com/stevenkuang1"> stevenkuang1</a>
						</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default contact;
