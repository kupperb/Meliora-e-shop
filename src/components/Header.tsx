import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	headerContainer: {
		height: 220,
		width: "cover",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	headerBackground: {
		objectFit: "cover",
		width: "100%",
		position: "absolute",
		zIndex: "-1",
	},
	logo: {
		height: 150,
		display: "flex",
		position: "relative",
		zIndex: "1",
		alignSelf: "center",
		margin: "auto",
		padding: 20,
	},
	brandText: {
		height: 30,
		display: "flex",
		position: "relative",
		zIndex: "1",
		alignSelf: "center",
		margin: "auto",
		paddingTop: 5,
	},
});

const Header: React.FC = () => {
	const classes = useStyles();

	return (
		<div className="headerContainer">
			<div>
				<img
					src="images/Headerbackground.png"
					className={classes.headerBackground}
				/>
				<img src="images/HeaderLogoWhite.png" className={classes.logo} />

				<div className={classes.brandText}>
					<img src="images/Brandtext.png" className={classes.brandText} />
				</div>
			</div>
		</div>
	);
};

export default Header;
