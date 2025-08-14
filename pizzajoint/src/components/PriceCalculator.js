import React from "react";
import { motion } from "framer-motion";

const PriceCalculator = ({ pizza }) => {
	const basePrices = {
		Classic: 12.99,
		"Thin & Crispy": 13.99,
		"Thick Crust": 14.99,
	};

	const toppingPrice = 1.5;
	const basePrice = pizza.base ? basePrices[pizza.base] : 0;
	const toppingsCost = pizza.toppings
		? pizza.toppings.length * toppingPrice
		: 0;
	const totalPrice = basePrice + toppingsCost;

	return (
		<motion.div
			className="price-calculator"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5, duration: 0.6 }}
			style={{
				background: "rgba(255, 255, 255, 0.1)",
				backdropFilter: "blur(10px)",
				border: "1px solid rgba(255, 255, 255, 0.2)",
				borderRadius: "var(--radius-lg)",
				padding: "var(--spacing-lg)",
				margin: "var(--spacing-lg) 0",
				color: "var(--text-white)",
			}}>
			<motion.h3
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.7, duration: 0.5 }}
				style={{
					marginBottom: "var(--spacing-md)",
					fontSize: "1.2em",
					fontWeight: "600",
				}}>
				💰 Price Breakdown
			</motion.h3>

			<motion.div
				className="price-details"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.9, duration: 0.5 }}>
				{pizza.base && (
					<motion.div
						className="price-item"
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 1.1, duration: 0.4 }}
						style={{
							display: "flex",
							justifyContent: "space-between",
							marginBottom: "var(--spacing-sm)",
						}}>
						<span>{pizza.base} Base:</span>
						<span>${basePrice.toFixed(2)}</span>
					</motion.div>
				)}

				{pizza.toppings && pizza.toppings.length > 0 && (
					<motion.div
						className="price-item"
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 1.3, duration: 0.4 }}
						style={{
							display: "flex",
							justifyContent: "space-between",
							marginBottom: "var(--spacing-sm)",
						}}>
						<span>Toppings ({pizza.toppings.length}):</span>
						<span>${toppingsCost.toFixed(2)}</span>
					</motion.div>
				)}

				<motion.div
					className="total-price"
					initial={{ x: -20, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 1.5, duration: 0.4 }}
					style={{
						display: "flex",
						justifyContent: "space-between",
						borderTop: "1px solid rgba(255, 255, 255, 0.3)",
						paddingTop: "var(--spacing-sm)",
						marginTop: "var(--spacing-sm)",
						fontWeight: "600",
						fontSize: "1.1em",
						color: "var(--secondary-orange)",
					}}>
					<span>Total:</span>
					<span>${totalPrice.toFixed(2)}</span>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default PriceCalculator;
