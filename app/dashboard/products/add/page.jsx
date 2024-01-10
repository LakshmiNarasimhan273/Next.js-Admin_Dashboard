import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="Product Title" name="title" required />
        <select name="category" id="category">
          <option value="general">Choose an Category</option>
          <option value="homeAppliances">Home Appliances</option>
          <option value="phone">Phone</option>
          <option value="computers">Computers</option>
        </select>
        <input type="number" placeholder="Product Price" name="price" />
        <input type="number" placeholder="Stock Availability" name="stock" />
        <input type="text" placeholder="Product Colour" name="colour" />
        <input type="text" name="size" placeholder="Product Size" />
        <textarea
          name="description"
          id="desctiption"
          placeholder="Product Description"
          rows="6"
        ></textarea>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
