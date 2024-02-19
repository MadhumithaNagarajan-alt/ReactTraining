import React from "react";
import { Box,
    FooterContainer,
  	Row,
  	Column,
  	FooterLink,
  	Heading, } from "./FooterStyles";
const Footer = () => {
	return (
		<Box>
		
			<FooterContainer>
				<Row>
					<Column>
						<Heading>Company</Heading>
						<FooterLink href="#">
							Careers
						</FooterLink>
						<FooterLink href="#">
							Team
						</FooterLink>
						<FooterLink href="#">
							Swiggy Genie
						</FooterLink>
					</Column>
					<Column>
						<Heading>Legal</Heading>
						<FooterLink href="#">
							Terms&Conditions
						</FooterLink>
						<FooterLink href="#">
							Private Policy
						</FooterLink>
						<FooterLink href="#">
							Security Information
						</FooterLink>
						<FooterLink href="#">
							Whistle Blowing
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							Uttar Pradesh
						</FooterLink>
						<FooterLink href="#">
							Ahemdabad
						</FooterLink>
						<FooterLink href="#">
							Indore
						</FooterLink>
						<FooterLink href="#">
							Mumbai
						</FooterLink>
					</Column>
					<Column>
						<Heading>We Deliver To</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Chennai
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Mumbai
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Gurgaon
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Bhopal
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;