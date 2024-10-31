export const login = async (email, password) => {
  return new Promise((resolve, reject) => {
    // Simula senhas e emails válidos para fins de demonstração
    const usuarios = [
      { email: "vitor@gmail.com", password: "pass" },
      { email: "outroemail@example.com", password: "password" },
      { email: "email3@example.com", password: "senha" },
      { email: "email4@example.com", password: "mesmasenha" }
    ]
    //Encontra o usuário com o email fornecido
    setTimeout(() => {
      const usuarioEncontrado = usuarios.find(u => u.email.toLocaleLowerCase() === email.toLocaleLowerCase() && u.password === password);
      if (usuarioEncontrado) {
        resolve({ success: true, token: "fake-jwt-token" });
      } else {
        reject("Credenciais inválidas");
      }
    }, 1500); // Simula uma chamada assíncrona com um atraso de 1500ms
  });
};
