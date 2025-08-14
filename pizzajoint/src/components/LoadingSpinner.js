import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
	return (
		<motion.div
			className="loading-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				background: "var(--background-dark)",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				zIndex: 1000,
			}}>
			<motion.div
				className="pizza-loader"
				animate={{
					rotate: 360,
					scale: [1, 1.1, 1],
				}}
				transition={{
					rotate: {
						duration: 2,
						repeat: Infinity,
						ease: "linear",
					},
					scale: {
						duration: 1,
						repeat: Infinity,
						ease: "easeInOut",
					},
				}}
				style={{
					width: "80px",
					height: "80px",
					border: "4px solid var(--secondary-orange)",
					borderTop: "4px solid transparent",
					borderRadius: "50%",
					marginBottom: "20px",
				}}
			/>
			<motion.h3
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5, duration: 0.8 }}
				style={{
					color: "var(--text-white)",
					fontFamily: "var(--font-heading)",
					fontSize: "1.5em",
					marginBottom: "10px",
				}}>
				Brewing Mystic Flavors...
			</motion.h3>
			<motion.div
				className="loading-dots"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.5 }}
				style={{
					display: "flex",
					gap: "8px",
				}}>
				{[0, 1, 2].map((index) => (
					<motion.div
						key={index}
						animate={{
							y: [0, -10, 0],
						}}
						transition={{
							duration: 0.6,
							repeat: Infinity,
							delay: index * 0.2,
						}}
						style={{
							width: "8px",
							height: "8px",
							background: "var(--secondary-orange)",
							borderRadius: "50%",
						}}
					/>
				))}
			</motion.div>
		</motion.div>
	);
};

export default LoadingSpinner;
