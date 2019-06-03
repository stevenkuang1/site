import React, { Component } from 'react';

export class contact extends Component {
	render() {
		return (
			<div>
				<h2>Find me on:</h2>
				<ul>
					<li>
						<h5>
							<i class="fab fa-linkedin-in" /> Linkedin:
							<a href="https://www.linkedin.com/in/steven-kuang/"> Steven Kuang</a>
						</h5>
					</li>
					<li>
						<h5>
							<i class="fab fa-github-alt" /> GitHub:
							<a href="https://github.com/stevenkuang1"> stevenkuang1</a>
						</h5>
					</li>
					<li>
						<h5>
							<i class="fas fa-at" /> Email:
							<a href="mailto: steven.kuang@stonybrook.edu"> steven.kuang@stonybrook.edu</a>
						</h5>
					</li>
				</ul>
			</div>
		);
	}
}

export default contact;
