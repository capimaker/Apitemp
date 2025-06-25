const { dbConnection } = require("../config/config");
const Product = require("../models/product");
const Category = require("../models/category");

const seedProducts = async () => {
  try {
    await dbConnection();

    // Buscar las categorías por nombre
    const shonen = await Category.findOne({ name: "Shonen"});
    const shojo = await Category.findOne({ name: "Shojo" });
    const seinen = await Category.findOne({ name: "Seinen"});
    const josei = await Category.findOne({ name: "Josei" });
    const isekai = await Category.findOne({ name: "Isekai" });
    const romance = await Category.findOne({ name: "Romance" });
    const comedia = await Category.findOne({ name: "Comedia" });
    const accion = await Category.findOne({ name: "Acción" });
    const fantasia = await Category.findOne({ name: "Fantasía" });
    const terror = await Category.findOne({ name: "Terror" });
    const aventura = await Category.findOne({ name: "Aventura"});
    const sliceoflife = await Category.findOne({ name: "Slice of Life" });
    const deportes = await Category.findOne({ name: "Deportes" });
    const historico = await Category.findOne({ name: "Histórico" });
    const misterio = await Category.findOne({ name: "Misterio" });
    const psicologico = await Category.findOne({ name: "Psicológico" });
    const autor = await Category.findOne({ name: "Autor" });
    

   

   const products = [

    {
    name: "Dragon Ball Vol. 1",
    price: 20.99,
    description:
    "Conoce a Goku, un niño con cola y fuerza sobrehumana, en el inicio de la legendaria búsqueda de las Esferas del Dragón.",
    image: "https://rimg.bookwalker.jp/19371a6890a61f8f1f4dae9f5c4d7b1/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Akira Toriyama",
    categories: [shonen._id, aventura._id, fantasia._id, comedia._id]
  },

  {
    name: "Naruto Vol. 1",
    price: 18.99,
    description:
      "Primer tomo de Naruto, el joven ninja que sueña con convertirse en Hokage. ¡Comienza la aventura ninja!",
    image: "https://rimg.bookwalker.jp/f38c368fd90da7a3f14b31b2caeb818/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Masashi Kishimoto",
    categories: [shonen._id, accion._id, aventura._id]
  },
  {
    name: "One Piece Vol. 1",
    price: 18.99,
    description:
      "Sigue a Luffy y su tripulación en busca del legendario tesoro One Piece. ¡Zarpa hacia la aventura!",
    image: "https://rimg.bookwalker.jp/c6b6d671ccaf90acdd470a045e720ed/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Eiichiro Oda",
    categories: [shonen._id, fantasia._id, aventura._id]
  },
  {
    name: "Death Note Vol. 1",
    price: 9.50,
    description:
      "Un cuaderno con el poder de matar. Light Yagami toma la justicia en sus manos. Intriga psicológica asegurada.",
    image: "https://rimg.bookwalker.jp/b23e635cfaf74c9a5c4f35568fdfcec/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Tsugumi Ohba",
    categories: [seinen._id, misterio._id, psicologico._id]
  },
  {
    name: "Sailor Moon",
    price: 7.99,
    description:
      "Usagi descubre su destino como Sailor Moon y lucha contra las fuerzas del mal con la ayuda de sus amigas mágicas.",
    image: "https://cdn.myanimelist.net/images/anime/1/740.jpg",
    author: "Naoko Takeuchi",
    categories: [shojo._id, fantasia._id, romance._id]
  },
  {
  name: "That Time I Got Reincarnated as a Slime Vol. 1",
  price: 9.90,
  description:
    "Satoru Mikami muere y renace como un slime en un mundo de fantasía. Con habilidades únicas, cambiará el destino de monstruos y humanos por igual.",
  image: "https://rimg.bookwalker.jp/6644683/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
  author: "Fuse (guion), Taiki Kawakami (dibujo)",
  categories: [isekai._id, fantasia._id, aventura._id]
 },
  {
    name: "Your Name",
    price: 12.00,
    description:
      "Una historia de amor y destino entre dos jóvenes que intercambian cuerpos sin conocerse. Emotiva y mágica.",
    image: "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/428ae2bb-16fd-4cfd-91c0-928c722d94ed/d_295_510/portada_your-name-visual-guide_makoto-shinkai_201909061400.webp",
    author: "Makoto Shinkai",
    categories: [josei._id, romance._id, sliceoflife._id]
  },
  {
    name: "Attack on Titan Vol. 1",
    price: 20.99,
    description:
      "La humanidad lucha por sobrevivir contra los temibles titanes. Eren Jaeger lidera la batalla.",
    image: "https://example.com/aot1.https://rimg.bookwalker.jp/2694222/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Hajime Isayama",
    categories: [shonen._id, accion._id, terror._id]
  },
  {
    name: "Tokyo Ghoul Vol. 1",
    price: 9.75,
    description:
      "Ken Kaneki despierta en un mundo donde los ghouls acechan a los humanos. Suspenso y horror psicológico.",
    image: "https://rimg.bookwalker.jp/44d79124096c4590754fc8758c34625/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Sui Ishida",
    categories: [seinen._id, terror._id, psicologico._id]
  },
  {
    name: "Haikyuu!! Vol. 1",
    price: 7.50,
    description:
      "Hinata Shoyo sueña con ser una estrella del voleibol a pesar de su estatura. ¡Una historia deportiva emocionante!",
    image: "https://rimg.bookwalker.jp/d8c4bb1cdd124688da4549651810e60/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Haruichi Furudate",
    categories: [shonen._id, deportes._id, sliceoflife._id]
  },
  {
    name: "Fullmetal Alchemist Vol. 1",
    price: 9.25,
    description:
      "Dos hermanos alquimistas buscan la piedra filosofal para restaurar sus cuerpos. Épica, profunda y filosófica.",
    image: "https://rimg.bookwalker.jp/2866902/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Hiromu Arakawa",
    categories: [shonen._id, aventura._id, fantasia._id]
  },

  {
    name: "Bleach Vol. 1",
    price: 8.50,
    description:
      "Ichigo Kurosaki, un adolescente con el poder de ver espíritus, se convierte en shinigami para proteger el mundo de los Hollow.",
    image: "https://rimg.bookwalker.jp/a5e875b9697f328cbc4e2323228046a/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Tite Kubo",
    categories: [shonen._id, accion._id, fantasia._id]
  },
  {
    name: "Blue Period Vol. 1",
    price: 10.00,
    description:
      "Yatora, un estudiante modelo, descubre la pasión por el arte y decide seguir una carrera artística. Reflexivo y realista.",
    image: "https://www.milkywayediciones.com/cdn/shop/products/blue_period_1r.png?v=1570542796&width=832",
    author: "Tsubasa Yamaguchi",
    categories: [seinen._id, sliceoflife._id, psicologico._id]
  },
  {
    name: "Fruits Basket Vol. 1",
    price: 7.99,
    description:
      "Tohru Honda termina viviendo con una extraña familia maldita por los signos del zodiaco chino. Romance, drama y ternura.",
    image: "https://rimg.bookwalker.jp/2584333/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Natsuki Takaya",
    categories: [shojo._id, romance._id, sliceoflife._id]
  },
  {
    name: "Vagabond Vol. 1",
    price: 12.00,
    description:
      "Una épica adaptación de la vida del legendario espadachín Miyamoto Musashi. Filosofía y violencia samurái.",
    image: "https://www.generacionx.es/Imagenes/Articulos/9788415922940.jpg",
    author: "Takehiko Inoue",
    categories: [seinen._id, historico._id, accion._id]
  },
  {
    name: "Chainsaw Man Vol. 1",
    price: 9.50,
    description:
      "Denji, un joven cazador de demonios, revive como el hombre motosierra. Violento, bizarro y muy adictivo.",
    image: "https://rimg.bookwalker.jp/db4a0ccb7cae518f7945cf3418d0c57/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Tatsuki Fujimoto",
    categories: [shonen._id, terror._id, accion._id]
  },
  {
    name: "Nana Vol. 1",
    price: 8.95,
    description:
      "Dos chicas llamadas Nana con vidas muy distintas se conocen y comienzan una amistad inolvidable. Drama y música punk.",
    image: "https://rimg.bookwalker.jp/141b482317342384e848f90ba8b9794/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Ai Yazawa",
    categories: [josei._id, sliceoflife._id, romance._id]
  },
  {
    name: "Spy x Family Vol. 1",
    price: 9.20,
    description:
      "Un espía, una asesina y una niña telépata forman una familia falsa... aunque muy entrañable.",
    image: "https://rimg.bookwalker.jp/a5b81e2a324d45a0e747306482cd085/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Tatsuya Endo",
    categories: [shonen._id, comedia._id, accion._id]
  },
  {
    name: "My Hero Academia Vol. 1",
    price: 9.15,
    description:
      "Izuku Midoriya vive en un mundo lleno de superpoderes, pero no tiene ninguno... hasta que su héroe le da el suyo.",
    image: "https://rimg.bookwalker.jp/dd7b81218d839587654181b963880f7/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Kohei Horikoshi",
    categories: [shonen._id, accion._id]
  },
  {
    name: "Jujutsu Kaisen Vol. 1",
    price: 9.25,
    description:
      "Yuji Itadori se convierte en el recipiente de una maldición legendaria y entra en el mundo del jujutsu para salvar vidas.",
    image: "https://rimg.bookwalker.jp/ac808f3c7ed96e90b74c92b013cd544/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Gege Akutami",
    categories: [shonen._id, accion._id, terror._id]
  },
  {
    name: "Demon Slayer Vol. 1",
    price: 30.90,
    description:
      "Tanjiro busca una cura para su hermana convertida en demonio mientras se convierte en cazador de demonios.",
    image: "https://rimg.bookwalker.jp/9ea86a5bbe59178188451d94cf1b475/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
    author: "Koyoharu Gotouge",
    categories: [shonen._id, accion._id, fantasia._id]
  },
  {
  name: "KonoSuba Vol. 1",
  price: 9.75,
  description:
    "Kazuma muere de la forma más ridícula posible y renace en un mundo de fantasía… con una diosa inútil como compañera. Una parodia isekai desternillante.",
  image: "https://rimg.bookwalker.jp/9986042/OWWPXNVne2Og5o9nA6tp3Q__.jpg",
  author: "Natsume Akatsuki",
  categories: [isekai._id, comedia._id, fantasia._id]
  },
  {
  name: "Ranma ½ Vol. 1",
  price: 8.99,
  description:
    "Ranma Saotome se transforma en chica cada vez que se moja con agua fría. Artes marciales, líos amorosos y muchas risas en esta obra clásica.",
  image: "https://mangadex.org/covers/d41bebac-1fd3-45dd-80f4-c371db540a2a/36acb190-1454-445e-a7ac-7bb80b62a00c.png.512.jpg",
  author: "Rumiko Takahashi",
  categories: [shonen._id, comedia._id, romance._id]
},
{
  name: "Inuyasha Vol. 1",
  price: 9.50,
  description:
    "Kagome, una adolescente del siglo XXI, viaja al Japón feudal donde conoce a Inuyasha, un medio demonio. Juntos deberán encontrar los fragmentos de la Perla de Shikon.",
  image: "https://mangadex.org/covers/279c2494-8f85-4e5b-8bfb-a3223441fd13/f5adb427-2312-4f9c-9d0d-6a0e21172b87.jpg.512.jpg",
  author: "Rumiko Takahashi",
  categories: [shonen._id, fantasia._id, romance._id]
},
{
  name: "GANTZ Vol. 1",
  price: 11.99,
  description:
    "Tras morir atropellados, Kei Kurono y Masaru Kato despiertan en una habitación con una esfera negra llamada Gantz. Desde ese momento, serán forzados a luchar contra alienígenas en un juego mortal.",
  image: "https://www.todoconsolas.com/5196-medium_default/manga_gantz_glenat_01_po30844.jpg",
  author: "Hiroya Oku",
  categories: [seinen._id, accion._id, psicologico._id]
},
{
  name: "Akame ga Kill! Vol. 1",
  price: 29.80,
  description:
    "Tatsumi llega a la capital para forjarse un futuro, pero descubre un mundo corrupto. Se une a Night Raid, un grupo de asesinos revolucionarios liderado por la letal Akame.",
  image: "https://www.normaeditorial.com/upload/media/albumes/0001/05/thumb_4872_albumes_big.jpeg",
  author: "Takahiro (guion), Tetsuya Tashiro (dibujo)",
  categories: [shonen._id, accion._id, fantasia._id, psicologico._id]
}
];


    await Product.deleteMany();
    const insertedProducts = await Product.insertMany(products);

    // Asociar productos a sus categorías
    for (const product of insertedProducts) {
      for (const categoryId of product.categories) {
        await Category.findByIdAndUpdate(categoryId, {
          $addToSet: { products: product._id },
        });
      }
    }

    console.log("✅ Productos insertados y asociados a categorías correctamente");
    process.exit();
  } catch (error) {
    console.error("❌ Error al insertar productos:", error);
    process.exit(1);
  }
};

seedProducts();
