const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_PATH = path.join(__dirname, 'data', 'data.json');

app.use(cors());
app.use(express.json());

function readData() {
  const raw = fs.readFileSync(DATA_PATH, 'utf8');
  return JSON.parse(raw);
}

function writeData(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
}

function getNextProductId(products) {
  if (!products.length) return 1;
  return Math.max(...products.map((product) => Number(product.id) || 0)) + 1;
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/products', (req, res) => {
  const data = readData();
  res.json(data.products);
});

app.get('/api/products/:id', (req, res) => {
  const data = readData();
  const productId = Number(req.params.id);

  const product = data.products.find((item) => Number(item.id) === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.json(product);
});

app.post('/api/products', (req, res) => {
  const data = readData();
  const payload = req.body || {};

  if (!payload.name || !String(payload.name).trim()) {
    return res.status(400).json({ message: 'Product name is required' });
  }

  const newProduct = {
    id: getNextProductId(data.products),
    ...payload
  };

  data.products.push(newProduct);
  writeData(data);

  return res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
  const data = readData();
  const productId = Number(req.params.id);
  const index = data.products.findIndex((item) => Number(item.id) === productId);

  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const updatedProduct = {
    ...data.products[index],
    ...req.body,
    id: productId
  };

  data.products[index] = updatedProduct;
  writeData(data);

  return res.json(updatedProduct);
});

app.delete('/api/products/:id', (req, res) => {
  const data = readData();
  const productId = Number(req.params.id);

  const initialLength = data.products.length;
  data.products = data.products.filter((item) => Number(item.id) !== productId);

  if (data.products.length === initialLength) {
    return res.status(404).json({ message: 'Product not found' });
  }

  writeData(data);

  return res.status(204).send();
});

app.get('/api/stores', (req, res) => {
  const data = readData();
  res.json(data.stores);
});

app.get('/api/stocks', (req, res) => {
  const data = readData();
  res.json(data.stocks);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});