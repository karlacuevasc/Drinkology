import React, { Component } from "react";
import "../../styles/footer.scss";

export const Footer = () => {
	return (
		<footer className="footerBackground">
			<div className=" text-black small">
				<div className="pt-6 pb-4 pt-lg-7 pb-lg-6">
					<div className="container">
						<div className="row justify-content-md-between">
							<div clasName="col-md-5 col-lg-4 d-flex flex-column justify-content-between">
								<div className="col-md-7 col-lg-6 mt-5 mt-md-0">
									<div className="row">
										<div className="col-6 col-md-4 mb-4 mb-md-0">
											<h3 className="h6 text-uppercase mb-3">Test</h3>
											<ul className="list-unstyled">
												<li className="mb-1">
													<a href="#" className="text-reset">
														Test1
													</a>
												</li>
												<li className="mb-1">
													<a href="#" className="text-reset">
														Test2
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
