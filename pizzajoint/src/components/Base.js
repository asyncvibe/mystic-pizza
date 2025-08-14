import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SavedPizzas from "./SavedPizzas";

const Base = ({ addBase, pizza, onLoadPizza }) => {
	const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
	const nextVarient = {
		initial: {
			x: "-100vw",
		},
		animate: {
			x: 0,
			transition: { type: "spring", stiffness: 100 },
		},
	};
	const buttonVarient = {
		initial: {
			x: "-100vw",
		},
		animate: {
			x: 0,
			transition: {
				type: "spring",
				stiffness: 300,
				duration: 2,
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
		<div className="base container">
			<SavedPizzas onLoadPizza={onLoadPizza} />

			<motion.h3
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.5 }}>
				Step 1: Choose Your Base
			</motion.h3>
			<motion.ul
				variants={{
					animate: {
						transition: {
							staggerChildren: 0.1,
						},
					},
				}}>
				{bases.map((base) => {
					let spanClass = pizza.base === base ? "active" : "";
					return (
						<motion.li
							key={base}
							onClick={() => addBase(base)}
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
									pizza.base === base
										? {
												color: "var(--secondary-orange)",
												textShadow: "0 0 10px rgba(255, 152, 0, 0.5)",
										  }
										: {}
								}
								transition={{ duration: 0.3 }}>
								{base}
							</motion.span>
						</motion.li>
					);
				})}
			</motion.ul>
			{pizza.base && (
				<motion.div className="next" variants={nextVarient}>
					<Link to="/toppings">
						<motion.button
							initial="initial"
							animate="animate"
							whileHover="hover"
							whileTap="tap"
							variants={buttonVarient}>
							Next
						</motion.button>
					</Link>
				</motion.div>
			)}
		</div>
	);
};

export default Base;
