CREATE TABLE contacts (
    id INT PRIMARY KEY IDENTITY(1,1),
    firstName NVARCHAR(50) NOT NULL,
    lastName NVARCHAR(50) NOT NULL,
    email NVARCHAR(100) NOT NULL,
    phone NVARCHAR(20),
    country NVARCHAR(100),
    city NVARCHAR(100),
    street NVARCHAR(100),
    zipcode NVARCHAR(20),
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE()
);
//TODO: fix
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()