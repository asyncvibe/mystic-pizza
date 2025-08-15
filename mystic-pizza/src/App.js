import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import LoadingSpinner from "./components/LoadingSpinner";
import { AnimatePresence, motion } from "framer-motion";
import {
	saveCurrentOrder,
	getCurrentOrder,
	addToOrderHistory,
} from "./utils/localStorage";
// Animate presence is being used to apply animation on routes.
function App() {
	const [pizza, setPizza] = useState({ base: "", toppings: [] });
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

	const handleOrderComplete = () => {
		addToOrderHistory(pizza);
	};

	return (
		<>
			<AnimatePresence mode="wait" initial={false}>
				{isLoading && <LoadingSpinner key="loading" />}
			</AnimatePresence>

			{!isLoading && (
				<div
					style={{
						minHeight: "100vh",
						position: "relative",
					}}>
					<Header />
					<div
						style={{
							paddingTop: "10px",
							position: "relative",
							minHeight: "calc(100vh - 200px)",
						}}>
						<AnimatePresence mode="wait" initial={false}>
							<Switch location={location} key={location.pathname}>
								<Route path="/base">
									<motion.div
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											right: 0,
											width: "100%",
										}}
										initial={{
											x: "100%",
											opacity: 0,
										}}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: "-100%", opacity: 0 }}
										transition={{
											type: "spring",
											stiffness: 30,
											damping: 4,
										}}>
										<Base addBase={addBase} pizza={pizza} />
									</motion.div>
								</Route>
								<Route path="/toppings">
									<motion.div
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											right: 0,
											width: "100%",
										}}
										initial={{
											x: "100%",
											opacity: 0,
										}}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: "-100%", opacity: 0 }}
										transition={{
											type: "spring",
											stiffness: 30,
											damping: 4,
										}}>
										<Toppings addTopping={addTopping} pizza={pizza} />
									</motion.div>
								</Route>
								<Route path="/order">
									<motion.div
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											right: 0,
											width: "100%",
										}}
										initial={{
											x: "100%",
											opacity: 0,
										}}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: "-100%", opacity: 0 }}
										transition={{
											type: "spring",
											stiffness: 30,
											damping: 4,
										}}>
										<Order
											pizza={pizza}
											onOrderComplete={handleOrderComplete}
										/>
									</motion.div>
								</Route>
								<Route path="/">
									<motion.div
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											right: 0,
											width: "100%",
										}}
										initial={{
											x: "100%",
											opacity: 0,
										}}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: "-100%", opacity: 0 }}
										transition={{
											type: "spring",
											stiffness: 30,
											damping: 4,
										}}>
										<Home />
									</motion.div>
								</Route>
							</Switch>
						</AnimatePresence>
					</div>
				</div>
			)}
		</>
	);
}

export default App;
