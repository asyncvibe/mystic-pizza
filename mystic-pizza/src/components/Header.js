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
						{/* Pizza Crust - Main slice shape with better rounded edge */}
						<motion.path
							fill="#F4A460"
							stroke="#D2691E"
							strokeWidth="1"
							d="M20 20 L80 20 C85 20 85 85 20 85 C20 85 15 85 15 20 Z"
							initial={{ pathLength: 0, fillOpacity: 0 }}
							animate={{ pathLength: 1, fillOpacity: 1 }}
							transition={{ duration: 2, ease: "easeInOut" }}
						/>

						{/* Pizza Crust - Inner edge with proper curve */}
						<motion.path
							fill="none"
							stroke="#D2691E"
							strokeWidth="1.5"
							d="M25 25 L75 25 C78 25 78 80 25 80 C25 80 22 80 22 25 Z"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
						/>

						{/* Tomato Sauce - contained within crust */}
						<motion.path
							fill="#DC143C"
							d="M25 25 L75 25 C78 25 78 80 25 80 C25 80 22 80 22 25 Z"
							initial={{ fillOpacity: 0 }}
							animate={{ fillOpacity: 1 }}
							transition={{ duration: 1.5, delay: 1.2 }}
						/>

						{/* Cheese - properly contained within sauce area */}
						<motion.path
							fill="#FFD700"
							d="M28 28 L72 28 C74 28 74 77 28 77 C28 77 26 77 26 28 Z"
							initial={{ fillOpacity: 0, scale: 0.8 }}
							animate={{ fillOpacity: 0.9, scale: 1 }}
							transition={{ duration: 1.2, delay: 1.5 }}
						/>

						{/* Cheese highlights - smaller area */}
						<motion.path
							fill="#FFF8DC"
							d="M30 30 L70 30 C71 30 71 75 30 75 C30 75 29 75 29 30 Z"
							initial={{ fillOpacity: 0 }}
							animate={{ fillOpacity: 0.6 }}
							transition={{ duration: 1, delay: 1.8 }}
						/>

						{/* Pepperoni slices - well within cheese boundaries */}
						<motion.circle
							fill="#8B0000"
							cx="35"
							cy="40"
							r="2"
							initial={{ scale: 0, fillOpacity: 0 }}
							animate={{ scale: 1, fillOpacity: 1 }}
							transition={{ duration: 0.6, delay: 2.0 }}
						/>
						<motion.circle
							fill="#8B0000"
							cx="48"
							cy="45"
							r="1.8"
							initial={{ scale: 0, fillOpacity: 0 }}
							animate={{ scale: 1, fillOpacity: 1 }}
							transition={{ duration: 0.6, delay: 2.2 }}
						/>
						<motion.circle
							fill="#8B0000"
							cx="40"
							cy="55"
							r="2"
							initial={{ scale: 0, fillOpacity: 0 }}
							animate={{ scale: 1, fillOpacity: 1 }}
							transition={{ duration: 0.6, delay: 2.4 }}
						/>
						<motion.circle
							fill="#8B0000"
							cx="52"
							cy="60"
							r="1.8"
							initial={{ scale: 0, fillOpacity: 0 }}
							animate={{ scale: 1, fillOpacity: 1 }}
							transition={{ duration: 0.6, delay: 2.6 }}
						/>

						{/* Mushroom pieces - contained within cheese */}
						<motion.path
							fill="#F5DEB3"
							d="M45 35 L50 35 C51 35 51 37 50 37 L45 37 Z"
							initial={{ scale: 0, fillOpacity: 0 }}
							animate={{ scale: 1, fillOpacity: 1 }}
							transition={{ duration: 0.5, delay: 2.8 }}
						/>
						<motion.path
							fill="#F5DEB3"
							d="M30 50 L34 50 C35 50 35 52 34 52 L30 52 Z"
							initial={{ scale: 0, fillOpacity: 0 }}
							animate={{ scale: 1, fillOpacity: 1 }}
							transition={{ duration: 0.5, delay: 3.0 }}
						/>

						{/* Green peppers - contained within cheese */}
						<motion.path
							fill="#228B22"
							d="M55 35 L58 35 L56.5 37 L53.5 37 Z"
							initial={{ scale: 0, fillOpacity: 0 }}
							animate={{ scale: 1, fillOpacity: 1 }}
							transition={{ duration: 0.5, delay: 3.2 }}
						/>
						<motion.path
							fill="#228B22"
							d="M35 65 L38 65 L36.5 67 L33.5 67 Z"
							initial={{ scale: 0, fillOpacity: 0 }}
							animate={{ scale: 1, fillOpacity: 1 }}
							transition={{ duration: 0.5, delay: 3.4 }}
						/>

						{/* Steam effect */}
						<motion.path
							fill="none"
							stroke="#FFA500"
							strokeWidth="1"
							strokeOpacity="0.6"
							d="M15 15 Q20 10 25 15"
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{ pathLength: 1, opacity: 1 }}
							transition={{
								duration: 1,
								delay: 3.2,
								repeat: Infinity,
								repeatDelay: 1,
							}}
						/>
						<motion.path
							fill="none"
							stroke="#FFA500"
							strokeWidth="1"
							strokeOpacity="0.4"
							d="M18 12 Q23 7 28 12"
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{ pathLength: 1, opacity: 1 }}
							transition={{
								duration: 1.2,
								delay: 3.4,
								repeat: Infinity,
								repeatDelay: 1.2,
							}}
						/>

						{/* Magic sparkles */}
						<motion.circle
							fill="#FFD700"
							cx="85"
							cy="15"
							r="1"
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
							transition={{
								duration: 1.5,
								delay: 3.5,
								repeat: Infinity,
								repeatDelay: 0.5,
							}}
						/>
						<motion.circle
							fill="#FFD700"
							cx="88"
							cy="18"
							r="0.8"
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
							transition={{
								duration: 1.2,
								delay: 3.8,
								repeat: Infinity,
								repeatDelay: 0.8,
							}}
						/>
						<motion.circle
							fill="#FFD700"
							cx="82"
							cy="22"
							r="1.2"
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
							transition={{
								duration: 1.8,
								delay: 4.0,
								repeat: Infinity,
								repeatDelay: 0.6,
							}}
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
