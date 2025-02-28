--configurar base de dados
CREATE DATABASE hotel_reservas;
USE hotel_reservas;

--Criar tabela de Clientes:
CREATE TABLE Clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    endereco TEXT,
    data_nascimento DATE
);

--Criar tabela de Hotéis:
CREATE TABLE Hotel (
    id_hotel INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    endereco TEXT NOT NULL,
    cidade VARCHAR(100),
    estado VARCHAR(50),
    telefone VARCHAR(20),
    email VARCHAR(100)
);


--Criar tabela de Quartos:
CREATE TABLE Quartos (
    id_quarto INT AUTO_INCREMENT PRIMARY KEY,
    id_hotel INT,
    numero_quarto VARCHAR(10) NOT NULL,
    tipo VARCHAR(50) NOT NULL,  -- Ex: "Standard", "Luxo", etc.
    capacidade INT,  -- Número de pessoas que o quarto suporta
    preco DECIMAL(10, 2) NOT NULL,  -- Preço por noite
    status ENUM('disponível', 'reservado', 'manutenção') DEFAULT 'disponível',
    FOREIGN KEY (id_hotel) REFERENCES hoteis(id_hotel)
);

--Criar tabela de Reservas:
CREATE TABLE Reservas (
    id_reserva INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    id_quarto INT,
    data_check_in DATE NOT NULL,
    data_check_out DATE NOT NULL,
    status ENUM('pendente', 'confirmada', 'cancelada') DEFAULT 'pendente',
    data_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    FOREIGN KEY (id_quarto) REFERENCES quartos(id_quarto)
);

--Criar tabela de Pagamentos:
CREATE TABLE pagamentos (
    id_pagamento INT AUTO_INCREMENT PRIMARY KEY,
    id_reserva INT,
    valor DECIMAL(10, 2) NOT NULL,
    data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    metodo_pagamento ENUM('cartão de crédito', 'boleto', 'transferência', 'dinheiro') NOT NULL,
    status_pagamento ENUM('pendente', 'confirmado', 'falhou') DEFAULT 'pendente',
    FOREIGN KEY (id_reserva) REFERENCES reservas(id_reserva)
);
