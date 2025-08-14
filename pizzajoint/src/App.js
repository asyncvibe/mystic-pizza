import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import LoadingSpinner from "./components/LoadingSpinner";
import SavedPizzas from "./components/SavedPizzas";
import { AnimatePresence, motion } from "framer-motion";
import {
	saveCurrentOrder,
	getCurrentOrder,
	addToOrderHistory,
} from "./utils/localStorage";
// Animate presence is being used to apply animation on routes.
function App() {
	const [pizza, setPizza] = useState(getCurrentOrder());
	const [isLoading, setIsLoading] = useState(true);
	const location = useLocation();

	// Simulate loading time
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000); // Show loading for 2 seconds

		return () => clearTimeout(timer);
	}, []);

	const addBase = (base) => {
		const newPizza = { ...pizza, base };
		setPizza(newPizza);
		saveCurrentOrder(newPizza);
	};

	const addTopping = (topping) => {
		let newToppings;
		if (!pizza.toppings.includes(topping)) {
			newToppings = [...pizza.toppings, topping];
		} else {
			newToppings = pizza.toppings.filter((item) => item !== topping);
		}
		const newPizza = { ...pizza, toppings: newToppings };
		setPizza(newPizza);
		saveCurrentOrder(newPizza);
	};

	const loadSavedPizza = (savedPizza) => {
		setPizza(savedPizza);
		saveCurrentOrder(savedPizza);
	};

	const handleOrderComplete = () => {
		addToOrderHistory(pizza);
	};

	return (
		<>
			<AnimatePresence mode="wait">
				{isLoading && <LoadingSpinner key="loading" />}
			</AnimatePresence>

			{!isLoading && (
				<div
					style={{
						minHeight: "100vh",
						position: "relative",
					}}>
					<Header />
					<AnimatePresence mode="wait" initial={false}>
						<Switch location={location} key={location.pathname}>
							<Route path="/base">
								<motion.div
									initial={{
										x: "100vw",
										opacity: 0,
									}}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: "-100vw", opacity: 0 }}
									transition={{
										type: "spring",
										stiffness: 80,
										damping: 15,
										duration: 0.8,
									}}>
									<Base
										addBase={addBase}
										pizza={pizza}
										onLoadPizza={loadSavedPizza}
									/>
								</motion.div>
							</Route>
							<Route path="/toppings">
								<motion.div
									initial={{
										x: "100vw",
										opacity: 0,
									}}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: "-100vw", opacity: 0 }}
									transition={{
										type: "spring",
										stiffness: 80,
										damping: 15,
										duration: 0.8,
									}}>
									<Toppings addTopping={addTopping} pizza={pizza} />
								</motion.div>
							</Route>
							<Route path="/order">
								<motion.div
									initial={{
										x: "100vw",
										opacity: 0,
									}}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: "-100vw", opacity: 0 }}
									transition={{
										type: "spring",
										stiffness: 80,
										damping: 15,
										duration: 0.8,
									}}>
									<Order pizza={pizza} onOrderComplete={handleOrderComplete} />
								</motion.div>
							</Route>
							<Route path="/">
								<motion.div
									initial={{
										x: "100vw",
										opacity: 0,
									}}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: "-100vw", opacity: 0 }}
									transition={{
										type: "spring",
										stiffness: 80,
										damping: 15,
										duration: 0.8,
									}}>
									<Home />
								</motion.div>
							</Route>
						</Switch>
					</AnimatePresence>
				</div>
			)}
		</>
	);
}

export default App;
