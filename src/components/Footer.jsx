const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<footer className="text-center text-capitalize py-3 pt-5 mt-5">
				copyright &copy; {year}
			</footer>
		</>
	);
};

export default Footer;
