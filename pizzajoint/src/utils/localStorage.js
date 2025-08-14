// Local Storage utilities for Pizza Joint

const STORAGE_KEYS = {
	SAVED_PIZZAS: "mystic_pizza_saved_pizzas",
	CURRENT_ORDER: "mystic_pizza_current_order",
	ORDER_HISTORY: "mystic_pizza_order_history",
};

export const savePizza = (pizza) => {
	try {
		const savedPizzas = getSavedPizzas();
		const pizzaWithId = {
			...pizza,
			id: Date.now(),
			savedAt: new Date().toISOString(),
		};

		savedPizzas.push(pizzaWithId);
		localStorage.setItem(
			STORAGE_KEYS.SAVED_PIZZAS,
			JSON.stringify(savedPizzas)
		);
		return true;
	} catch (error) {
		console.error("Error saving pizza:", error);
		return false;
	}
};

export const getSavedPizzas = () => {
	try {
		const saved = localStorage.getItem(STORAGE_KEYS.SAVED_PIZZAS);
		return saved ? JSON.parse(saved) : [];
	} catch (error) {
		console.error("Error getting saved pizzas:", error);
		return [];
	}
};

export const deleteSavedPizza = (pizzaId) => {
	try {
		const savedPizzas = getSavedPizzas();
		const filteredPizzas = savedPizzas.filter((pizza) => pizza.id !== pizzaId);
		localStorage.setItem(
			STORAGE_KEYS.SAVED_PIZZAS,
			JSON.stringify(filteredPizzas)
		);
		return true;
	} catch (error) {
		console.error("Error deleting saved pizza:", error);
		return false;
	}
};

export const saveCurrentOrder = (pizza) => {
	try {
		localStorage.setItem(STORAGE_KEYS.CURRENT_ORDER, JSON.stringify(pizza));
		return true;
	} catch (error) {
		console.error("Error saving current order:", error);
		return false;
	}
};

export const getCurrentOrder = () => {
	try {
		const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_ORDER);
		return saved ? JSON.parse(saved) : { base: "", toppings: [] };
	} catch (error) {
		console.error("Error getting current order:", error);
		return { base: "", toppings: [] };
	}
};

export const addToOrderHistory = (order) => {
	try {
		const history = getOrderHistory();
		const orderWithId = {
			...order,
			id: Date.now(),
			orderedAt: new Date().toISOString(),
		};

		history.unshift(orderWithId); // Add to beginning

		// Keep only last 10 orders
		if (history.length > 10) {
			history.splice(10);
		}

		localStorage.setItem(STORAGE_KEYS.ORDER_HISTORY, JSON.stringify(history));
		return true;
	} catch (error) {
		console.error("Error adding to order history:", error);
		return false;
	}
};

export const getOrderHistory = () => {
	try {
		const saved = localStorage.getItem(STORAGE_KEYS.ORDER_HISTORY);
		return saved ? JSON.parse(saved) : [];
	} catch (error) {
		console.error("Error getting order history:", error);
		return [];
	}
};

export const clearAllData = () => {
	try {
		Object.values(STORAGE_KEYS).forEach((key) => {
			localStorage.removeItem(key);
		});
		return true;
	} catch (error) {
		console.error("Error clearing data:", error);
		return false;
	}
};
