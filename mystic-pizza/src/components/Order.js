import React from "react";
import { motion } from "framer-motion";

const Order = ({ pizza, onOrderComplete }) => {
	const handleOrderComplete = () => {
		if (onOrderComplete) {
			onOrderComplete();
		}
	};

	// Check if pizza data exists
	if (!pizza || !pizza.base) {
		return (
			<motion.div
				className="container order"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}>
				<motion.h2
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.8 }}>
					No Order Found
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.6, duration: 0.6 }}>
					Please go back and create your pizza first!
				</motion.p>
			</motion.div>
		);
	}

	return (
		<div className="container order">
			<h2>Thank you for your order :)</h2>

			<p>
				You ordered a{" "}
				<span style={{ color: "var(--secondary-orange)", fontWeight: "bold" }}>
					{pizza.base}
				</span>{" "}
				pizza with:
			</p>

			<div className="toppings-list">
				{pizza.toppings && pizza.toppings.length > 0 ? (
					pizza.toppings.map((topping, index) => (
						<div
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
						</div>
					))
				) : (
					<p style={{ color: "var(--text-muted)" }}>No toppings selected</p>
				)}
			</div>

			<motion.div
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
