import { User, Product } from "./models";
import { dbConnection } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const DATA_PER_PAGE = 2;

  try {
    dbConnection();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(DATA_PER_PAGE)
      .skip(DATA_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users");
  }
};

export const fetchUser = async (id) => {
  try {
    dbConnection();
    const user = User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const DATA_PER_PAGE = 2;

  try {
    dbConnection();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(DATA_PER_PAGE)
      .skip(DATA_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products");
  }
};

export const fetchProduct = async (id) => {
  try {
    dbConnection();
    const product = Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product");
  }
};
