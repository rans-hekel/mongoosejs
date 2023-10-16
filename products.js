const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://127.0.0.1:27017/your_server")
  .then(() => {
    console.log("Berhasil Connect Ke Monggo DB");
  })
  .catch((err) => {
    console.log(err);
  });

const productschema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Nilai Tidak Boleh Minus"],
  },
  color: {
    type: String,
    required: true,
  },
  size: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
    maxLength: 150,
  },
  condition: {
    type: String,
    enum: ["baru", "bekas"],
    default: "baru",
  },
  stock: {
    type: Number,
    required: true,
    min: [0, "Nilai TIdak Boleh Minus"],
  },
  availability: {
    online: {
      type: Boolean,
      required: true,
    },
    offline: {
      type: Boolean,
      required: true,
    },
  },
});

// productschema.methods.outStock = function () {
//   this.stock = 0;
//   this.availability.online = false;
//   this.availability.offline = false;
//   return this.save();
// };

// productschema.statics.closeStore = function () {
//   return this.updateMany(
//     {},
//     {
//       stock: 0,
//       "availability.online": false,
//       "availability.offline": false,
//     }
//   );
// };

const Product = mongoose.model("Product", productschema);

// const changeStock = async (id) => {
//   const foundProduct = await Product.findById(id);
//   await foundProduct.outStock();
//   console.log("Berhasil Diubah");
// };

// Product.closeStore()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// changeStock(id);

// Product.findOneAndUpdate(
//   { name: "Kemeja Flanel" },
//   { brand: "Hollister" },
//   { runValidators: true, new: true }
// )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const newProduct = new Product({
//   name: "Kemeja Flanel",
//   brand: "Hollister",
//   price: 750000,
//   color: "biru muda",
//   size: ["S", "M", "L"],
//   description:
//     "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
//   condition: "baru",
//   stock: 25,
//   availability: {
//     online: true,
//     offline: true,
//   },
// });

// stargazer magician

// newProduct
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
