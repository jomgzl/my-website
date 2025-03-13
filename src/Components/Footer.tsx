import "../CSS/Footer.css";

function Footer() {
	return (
		<footer>
			<div className="task-app">
				<h1>Task App</h1>
			</div>
			<div className="categories">
				<div className="categories-1">
					<p>Careers</p>
					<p>Consumer Care</p>
					<p>Task App News</p>
					<p>Task App Austria</p>
				</div>
				<div className="categories-2">
					<p>About Us</p>
					<p>Alumni</p>
					<p>Customer Support</p>
					<p>Task App Iceland</p>
				</div>
			</div>
			<div className="logos-container">
				<img
					className="facebook-logo"
					src="/images/facebook-logo.png"
					alt="Facebook Logo"
				/>
				<img
					className="logo"
					src="/images/instagram-logo.png"
					alt="Instagram Logo"
				/>
				<img className="logo" src="/images/x-logo.png" alt="X Logo" />
				<img
					className="logo"
					src="/images/pinterest-logo.png"
					alt="Pinterest Logo"
				/>
				<img
					className="youtube-logo"
					src="/images/youtube-logo.png"
					alt="Youtube Logo"
				/>
			</div>
			<div className="subscription">
				<div>
					<form
						className="signup-form"
						action="/user/db/sign-up"
						method="POST"
					>
						<div>
							<p>Get the freshest Task App news</p>
						</div>
						<div>
							<input
								className="subscription-email"
								type="text"
								name="email"
								placeholder="Your email here"
								required
							/>
							<input
								className="subscription-button"
								type="submit"
								value="Subscribe"
							/>
						</div>
						<div className="subscription-checkbox">
							<input id="terms" type="checkbox" name="terms" />
							<span className="subscription-checkmark"></span>
							<label htmlFor="terms">
								By checking the box, you agree that you are at
								least
								<span className="break"> 16 years of age.</span>
							</label>
						</div>
					</form>
				</div>
			</div>
			<div className="bottom-footer">
				<div className="long-line"></div>
				<nav className="policies-nav">
					<div className="policies-sections">
						<p>Website Terms</p>
						<p>Privacy Policy</p>
						<p>Accessibility Statement</p>
						<p>CA Transparency in Supply Chains Act</p>
						<p>Suppliers Code of Conduct</p>
						<p>Marketing to Seniors</p>
						<p>Do not sell my information</p>
					</div>
				</nav>
			</div>
		</footer>
	);
}

export default Footer;
