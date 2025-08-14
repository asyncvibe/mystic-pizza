import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSavedPizzas, deleteSavedPizza } from "../utils/localStorage";

const SavedPizzas = ({ onLoadPizza }) => {
	const [savedPizzas, setSavedPizzas] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		loadSavedPizzas();
	}, []);

	const loadSavedPizzas = () => {
		const pizzas = getSavedPizzas();
		setSavedPizzas(pizzas);
	};

	const handleDelete = (pizzaId) => {
		if (deleteSavedPizza(pizzaId)) {
			loadSavedPizzas(); // Reload the list
		}
	};

	const handleLoad = (pizza) => {
		onLoadPizza(pizza);
		setIsOpen(false);
	};

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString();
	};

	return (
		<div className="saved-pizzas">
			<motion.button
				onClick={() => setIsOpen(!isOpen)}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				style={{
					background: "rgba(255, 152, 0, 0.2)",
					border: "1px solid var(--secondary-orange)",
					color: "var(--text-white)",
					padding: "var(--spacing-sm) var(--spacing-md)",
					borderRadius: "var(--radius-md)",
					cursor: "pointer",
					marginBottom: "var(--spacing-md)",
				}}>
				💾 Saved Pizzas ({savedPizzas.length})
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						style={{
							background: "rgba(255, 255, 255, 0.1)",
							backdropFilter: "blur(10px)",
							border: "1px solid rgba(255, 255, 255, 0.2)",
							borderRadius: "var(--radius-lg)",
							padding: "var(--spacing-md)",
							marginBottom: "var(--spacing-lg)",
							overflow: "hidden",
						}}>
						{savedPizzas.length === 0 ? (
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								style={{ color: "var(--text-muted)", textAlign: "center" }}>
								No saved pizzas yet. Create and save your first custom pizza!
							</motion.p>
						) : (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.1 }}>
								{savedPizzas.map((pizza, index) => (
									<motion.div
										key={pizza.id}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
										style={{
											background: "rgba(255, 255, 255, 0.05)",
											border: "1px solid rgba(255, 255, 255, 0.1)",
											borderRadius: "var(--radius-md)",
											padding: "var(--spacing-md)",
											marginBottom: "var(--spacing-sm)",
										}}>
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
											}}>
											<div>
												<h4
													style={{
														color: "var(--text-white)",
														margin: "0 0 var(--spacing-xs) 0",
													}}>
													{pizza.base} Pizza
												</h4>
												<p
													style={{
														color: "var(--text-muted)",
														fontSize: "0.9em",
														margin: "0 0 var(--spacing-xs) 0",
													}}>
													{pizza.toppings.join(", ")}
												</p>
												<p
													style={{
														color: "var(--text-muted)",
														fontSize: "0.8em",
														margin: 0,
													}}>
													Saved: {formatDate(pizza.savedAt)}
												</p>
											</div>
											<div
												style={{ display: "flex", gap: "var(--spacing-xs)" }}>
												<motion.button
													onClick={() => handleLoad(pizza)}
													whileHover={{ scale: 1.05 }}
													whileTap={{ scale: 0.95 }}
													style={{
														background: "var(--secondary-orange)",
														border: "none",
														color: "white",
														padding: "var(--spacing-xs) var(--spacing-sm)",
														borderRadius: "var(--radius-sm)",
														cursor: "pointer",
														fontSize: "0.8em",
													}}>
													Load
												</motion.button>
												<motion.button
													onClick={() => handleDelete(pizza.id)}
													whileHover={{ scale: 1.05 }}
													whileTap={{ scale: 0.95 }}
													style={{
														background: "rgba(255, 0, 0, 0.2)",
														border: "1px solid rgba(255, 0, 0, 0.5)",
														color: "#ff6b6b",
														padding: "var(--spacing-xs) var(--spacing-sm)",
														borderRadius: "var(--radius-sm)",
														cursor: "pointer",
														fontSize: "0.8em",
													}}>
													Delete
												</motion.button>
											</div>
										</div>
									</motion.div>
								))}
							</motion.div>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default SavedPizzas;
