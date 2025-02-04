import React, { createContext, useState } from "react";

// Создаем контекст
export const CartContext = createContext();

// Провайдер для управления корзиной
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Храним товары в корзине

  // Функция для добавления товара в корзину
  const addToCart = (game) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === game.id);

      if (existingItem) {
        // Если товар уже в корзине, увеличиваем количество
        return prevCart.map((item) =>
          item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Если товара нет в корзине, добавляем его с quantity = 1
        return [...prevCart, { ...game, quantity: 1 }];
      }
    });
  };

  // Функция для удаления товара из корзины
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0); // Убираем товар, если его количество = 0
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
