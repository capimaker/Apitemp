const Order = require('../models/order');
const Product = require('../models/product');
const User = require('../models/user');

const OrderController = {
  async create(req, res) {
    try {
      const { productIds } = req.body;
      const userId = req.user._id;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      const validProducts = await Product.find({
        _id: { $in: productIds },
      });

      if (validProducts.length === 0) {
        return res.status(400).json({ error: 'No se encontraron productos válidos' });
      }

      const order = new Order({
        user: userId,
        products: validProducts.map(p => p._id),
      });

      await order.save();
      user.orders.push(order._id);
      await user.save();

      await Promise.all(
        validProducts.map(async (product) => {
          product.orders.push(order._id);
          await product.save();
        })
      );

      res.status(201).json({
        msg: 'Orden creada con éxito',
        order,
      });
    } catch (error) {
      console.error("❌ Error al crear orden:", error.message);
      res.status(500).json({
        error: 'Error al crear la orden',
        details: error.message,
      });
    }
  },

  async getAllOrdersWithProducts(req, res) {
    try {
      const orders = await Order.find()
        .populate('user', 'name email')
        .populate('products');

      res.status(200).json({
        msg: 'Lista de órdenes',
        orders,
      });
    } catch (error) {
      console.error('❌ Error al obtener órdenes:', error.message);
      res.status(500).json({
        error: 'Error al obtener las órdenes',
        details: error.message,
      });
    }
  }
};

module.exports = OrderController;
