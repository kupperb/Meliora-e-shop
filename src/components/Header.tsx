import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	header: {
		height: 220,
		width: "100%",
		display: "flex",
		flexDirection: "row",
		margine: 0,
	},
});

const Header: React.FC = () => {
	const classes = useStyles();

	return (
		<div className="headerImage">
			<div>
				<img src="images/Header.png" className={classes.header} />
			</div>
		</div>
	);
};

export default Header;
