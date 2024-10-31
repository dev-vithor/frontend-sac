// src/services/authService.js

export const login = async (email, password) => {
  return new Promise((resolve, reject) => {
    // Simula uma chamada ao backend
    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        resolve({ success: true, token: "fake-jwt-token" });
      } else {
        reject("Credenciais inválidas");
      }
    }, 1500);
  });
};
