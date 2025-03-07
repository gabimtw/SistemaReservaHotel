CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    endereco TEXT,
    data_nascimento DATE
);

CREATE TABLE hoteis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    endereco TEXT NOT NULL,
    cidade VARCHAR(100),
    estado VARCHAR(50),
    telefone VARCHAR(20),
    email VARCHAR(100)
);

CREATE TABLE quartos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_hotel INT,
    numero_quarto VARCHAR(10) NOT NULL UNIQUE,
    tipo VARCHAR(50) NOT NULL,
    capacidade INT,
    preco DECIMAL(10, 2) NOT NULL,
    status ENUM('disponível', 'reservado', 'manutenção') DEFAULT 'disponível',
    FOREIGN KEY (id_hotel) REFERENCES hoteis(id)
);

CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    id_quarto INT,
    data_check_in DATE NOT NULL,
    data_check_out DATE NOT NULL,
    status ENUM('pendente', 'confirmada', 'cancelada') DEFAULT 'pendente',
    data_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id),
    FOREIGN KEY (id_quarto) REFERENCES quartos(id)
);

CREATE TABLE pagamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_reserva INT,
    valor DECIMAL(10, 2) NOT NULL,
    data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    metodo_pagamento ENUM('cartão de crédito', 'boleto', 'transferência', 'dinheiro') NOT NULL,
    status_pagamento ENUM('pendente', 'confirmado', 'falhou') DEFAULT 'pendente',
    FOREIGN KEY (id_reserva) REFERENCES reservas(id)
);