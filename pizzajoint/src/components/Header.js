import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<motion.div
				className="logo"
				drag
				dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
				dragElastic={0.9}>
				<Link to="/">
					<svg
						className="pizza-svg"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 100 100"
						style={{ cursor: "pointer" }}>
						<motion.path
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 2, ease: "easeInOut" }}
						/>
						<motion.path
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
						/>
					</svg>
				</Link>
			</motion.div>
			<motion.div
				className="title"
				animate={{ y: -10 }}
				initial={{ y: -250 }}
				transition={{ delay: 1, type: "spring", stiffness: 300 }}>
				<h1>Mystic Pizza</h1>
				<motion.p
					className="tagline"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 3, duration: 0.8 }}>
					Where Magic Meets Flavor
				</motion.p>
			</motion.div>
		</header>
	);
};

export default Header;
