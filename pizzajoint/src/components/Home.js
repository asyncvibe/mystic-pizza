import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const buttonVarient = {
	hover: {
		scale: 1.05,
		rotate: 2,
		transition: {
			duration: 0.4,
			type: "spring",
			stiffness: 300,
			damping: 12,
		},
		textShadow: "0px 0px 15px rgba(255,255,255,0.8)",
	},
	tap: {
		scale: 0.95,
		transition: {
			duration: 0.1,
		},
	},
};
const Home = () => {
	return (
		<div className="home container">
			<h2>Welcome to Mystic Pizza</h2>
			<Link to="/base">
				<motion.button
					whileHover="hover"
					whileTap="tap"
					variants={buttonVarient}>
					Create Your Pizza
				</motion.button>
			</Link>
		</div>
	);
};

export default Home;
