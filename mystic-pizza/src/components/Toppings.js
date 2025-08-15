import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Toppings = ({ addTopping, pizza }) => {
	let toppings = [
		"mushrooms",
		"peppers",
		"onions",
		"olives",
		"extra cheese",
		"tomatoes",
	];
	const ctaVariant = {
		initial: {
			x: "100%",
		},
		animate: {
			x: 0,
			transition: { type: "spring", stiffness: 160, damping: 16 },
		},
	};
	const buttonVarient = {
		initial: {
			x: "100%",
		},
		animate: {
			x: 0,
			transition: {
				type: "spring",
				stiffness: 30,
				damping: 5,
			},
		},
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
	return (
		<div className="toppings container">
			<motion.h3
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.5 }}>
				Step 2: Choose Toppings
			</motion.h3>
			<motion.ul
				variants={{
					animate: {
						transition: {
							staggerChildren: 0.1,
						},
					},
				}}>
				{toppings.map((topping) => {
					let spanClass = pizza.toppings.includes(topping) ? "active" : "";
					return (
						<motion.li
							key={topping}
							onClick={() => addTopping(topping)}
							whileHover={{
								scale: 1.05,
								x: 10,
								backgroundColor: "rgba(255, 152, 0, 0.1)",
								borderColor: "var(--secondary-orange)",
							}}
							whileTap={{
								scale: 0.95,
								rotate: 2,
							}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 12,
							}}>
							<motion.span
								className={spanClass}
								animate={
									pizza.toppings.includes(topping)
										? {
												color: "var(--secondary-orange)",
												textShadow: "0 0 10px rgba(255, 152, 0, 0.5)",
										  }
										: {}
								}
								transition={{ duration: 0.3 }}>
								{topping}
							</motion.span>
						</motion.li>
					);
				})}
			</motion.ul>

			{pizza.toppings && pizza.toppings.length > 0 && (
				<motion.div
					className="next"
					variants={ctaVariant}
					initial="initial"
					animate="animate">
					<Link to="/order">
						<motion.button
							variants={buttonVarient}
							initial="initial"
							animate="animate"
							whileHover="hover"
							whileTap="tap">
							Order
						</motion.button>
					</Link>
				</motion.div>
			)}
		</div>
	);
};

export default Toppings;
