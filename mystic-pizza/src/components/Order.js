import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: {
		opacity: 0,
		x: "100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			mass: 0.4,
			damping: 8,
			when: "beforeChildren",
			staggerChildren: 0.3,
		},
	},
};

const childVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 24,
		},
	},
};

const toppingVariants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
		x: -20,
	},
	visible: {
		opacity: 1,
		scale: 1,
		x: 0,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 20,
		},
	},
};

const buttonVariants = {
	hidden: {
		opacity: 0,
		scale: 0.9,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 20,
			delay: 3.5, // Appear after toppings are done
		},
	},
};
const Order = ({ pizza, onOrderComplete }) => {
	const handleOrderComplete = () => {
		if (onOrderComplete) {
			onOrderComplete();
		}
	};

	return (
		<div
			className="container order"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit">
			<motion.h2 variants={childVariants}>
				Thank you for your order :)
			</motion.h2>

			<motion.p variants={childVariants}>
				You ordered a{" "}
				<span style={{ color: "var(--secondary-orange)", fontWeight: "bold" }}>
					{pizza.base}
				</span>{" "}
				pizza with:
			</motion.p>

			<motion.div
				className="toppings-list"
				variants={{
					visible: {
						transition: {
							staggerChildren: 0.4,
							delayChildren: 2.0,
						},
					},
				}}>
				{pizza.toppings && pizza.toppings.length > 0 ? (
					pizza.toppings.map((topping, index) => (
						<motion.div
							variants={toppingVariants}
							key={topping}
							style={{
								padding: "8px 16px",
								margin: "4px 0",
								background: "rgba(255, 152, 0, 0.1)",
								borderRadius: "20px",
								border: "1px solid var(--secondary-orange)",
								display: "inline-block",
								marginRight: "8px",
							}}>
							{topping}
						</motion.div>
					))
				) : (
					<motion.p
						variants={childVariants}
						style={{ color: "var(--text-muted)" }}>
						No toppings selected
					</motion.p>
				)}
			</motion.div>

			<motion.div
				variants={buttonVariants}
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "var(--spacing-xl)",
				}}>
				<motion.button
					onClick={handleOrderComplete}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					style={{
						background: "var(--secondary-orange)",
						border: "none",
						color: "white",
						padding: "var(--spacing-md) var(--spacing-lg)",
						borderRadius: "var(--radius-md)",
						cursor: "pointer",
					}}>
					🚀 Place Order
				</motion.button>
			</motion.div>
		</div>
	);
};

export default Order;
