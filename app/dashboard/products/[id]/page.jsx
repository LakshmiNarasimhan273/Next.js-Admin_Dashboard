import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProduct = async ({ params }) => {
  const { id } = params;

  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noavatar.png"} alt="User Image" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Product Title</label>
          <input type="text" placeholder={product.title} name="title" />
          <label>Product Price</label>
          <input type="number" placeholder={product.price} name="price" />
          <label>Stock</label>
          <input type="number" placeholder={product.stock} name="stock" />
          <label>Product Colour</label>
          <input type="text" placeholder={product.colour} name="colour" />
          <label>Product Size</label>
          <input type="text" placeholder={product.size} name="size" />

          <label>Choose an Category</label>
          <select name="category" id="category">
            <option value="general">Choose an Category</option>
            <option value="homeAppliances">Home Appliances</option>
            <option value="phone">Phone</option>
            <option value="computers">Computers</option>
          </select>
          <label>Product Description</label>
          <textarea
            type="text"
            placeholder={product.description}
            name="description"
          />
          <button>Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
