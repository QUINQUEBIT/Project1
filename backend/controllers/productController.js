const db = require('../config/db');

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM products');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Add a new product
exports.addProduct = async (req, res) => {
    const { name, description, price } = req.body;

    try {
        await db.query('INSERT INTO products (name, description, price) VALUES (?, ?, ?)', [
            name,
            description,
            price,
        ]);
        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
