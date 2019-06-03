import React, { Component } from 'react';
import Project1 from '../images/project1.png';

export class projects extends Component {
	render() {
		return (
			<div>
				<h2>Projects</h2>
				<div>
					<div>
						<div>
							<img src={Project1} />
						</div>
						<div>
							<h3>E-Commerce Web Application</h3>
							<h5>
								An e-commerce site where authorized users have the functionality of selling, buying, and
								reviewing items. This project was created to learn the ins and outs of databases and how
								data was sent between the front and back ends. The back-end was built using Python
								Django and PostgreSQL, while the front-end was built using React JS.
							</h5>
						</div>
					</div>
					<div>
						<div>SBML</div>
						<div>
							<h3>Stony Brook Meta Language Project</h3>
							<h5>
								Stony Brook Meta Language, SBML, is a custom language built from scratch using Python’s
								Lex and Yacc. The grammar expressions, statements, and functions of SBML were heavily
								inspired from Python and SML.
							</h5>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default projects;
