// seeders/categorySeeder.js
const mongoose = require("mongoose");
const { dbConnection } = require("../config/config");
const Category = require("../models/category");

const categories = [
  { name: "Shonen" },
  { name: "Shojo" },
  { name: "Seinen" },
  { name: "Josei" },
  { name: "Isekai" },
  { name: "Mecha" },
  { name: "Romance" },
  { name: "Comedia" },
  { name: "Acción" },
  { name: "Fantasía" },
  { name: "Terror" },
  { name: "Aventura" },
  { name: "Slice of Life" },
  { name: "Deportes" },
  { name: "Histórico" },
  { name: "Misterio" },
  { name: "Psicológico" },
  { name: "Autor" }

];

const seedCategories = async () => {
  try {
    await dbConnection();
    await Category.deleteMany();
    const inserted = await Category.insertMany(categories);
    console.log(" Categorías insertadas:");
    inserted.forEach((cat) => {
      console.log(`✅ ${cat.name} → ID: ${cat._id}`);
    });
    process.exit();
  } catch (error) {
    console.error("❌ Error al insertar categorías:", error);
    process.exit(1);
  }
};

seedCategories();
