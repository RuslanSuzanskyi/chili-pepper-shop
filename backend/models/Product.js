import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { 
    name: { type: String, required: true },
    slug: { type: String, required: true }
  },
  image: { type: String, required: true },
  availability: { type: Boolean, required: true },
  spiciness: { type: String, required: true },
  slug: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);
export default Product;