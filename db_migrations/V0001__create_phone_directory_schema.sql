
-- Таблица отделов
CREATE TABLE IF NOT EXISTS departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    head_name VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица пользователей (для авторизации)
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица сотрудников
CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    phone VARCHAR(50) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100),
    department_id INTEGER REFERENCES departments(id),
    position VARCHAR(255) NOT NULL,
    office_number VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индексы для быстрого поиска
CREATE INDEX IF NOT EXISTS idx_employees_last_name ON employees(last_name);
CREATE INDEX IF NOT EXISTS idx_employees_phone ON employees(phone);
CREATE INDEX IF NOT EXISTS idx_employees_department ON employees(department_id);

-- Тестовые данные
INSERT INTO departments (name, head_name, description) VALUES
('Отдел разработки', 'Иванов Иван Иванович', 'Разработка программного обеспечения и технологий'),
('Отдел продаж', 'Петрова Анна Сергеевна', 'Продажи и работа с клиентами'),
('Отдел маркетинга', 'Сидоров Петр Михайлович', 'Маркетинг и PR-коммуникации'),
('Бухгалтерия', 'Смирнова Елена Викторовна', 'Финансовый учет и отчетность');

INSERT INTO employees (phone, last_name, first_name, middle_name, department_id, position, office_number) VALUES
('+7 (495) 123-45-67', 'Иванов', 'Иван', 'Иванович', 1, 'Руководитель отдела разработки', '301'),
('+7 (495) 123-45-68', 'Соколов', 'Дмитрий', 'Александрович', 1, 'Senior разработчик', '302'),
('+7 (495) 123-45-69', 'Морозов', 'Сергей', 'Петрович', 1, 'Middle разработчик', '303'),
('+7 (495) 123-45-70', 'Петрова', 'Анна', 'Сергеевна', 2, 'Руководитель отдела продаж', '201'),
('+7 (495) 123-45-71', 'Новикова', 'Мария', 'Игоревна', 2, 'Менеджер по продажам', '202'),
('+7 (495) 123-45-72', 'Федоров', 'Алексей', 'Николаевич', 2, 'Менеджер по продажам', '203'),
('+7 (495) 123-45-73', 'Сидоров', 'Петр', 'Михайлович', 3, 'Руководитель отдела маркетинга', '401'),
('+7 (495) 123-45-74', 'Козлова', 'Ольга', 'Дмитриевна', 3, 'Маркетолог', '402'),
('+7 (495) 123-45-75', 'Смирнова', 'Елена', 'Викторовна', 4, 'Главный бухгалтер', '101'),
('+7 (495) 123-45-76', 'Васильева', 'Наталья', 'Андреевна', 4, 'Бухгалтер', '102');

INSERT INTO users (username, password_hash, role) VALUES
('admin', 'admin123', 'admin'),
('user', 'user123', 'user');
