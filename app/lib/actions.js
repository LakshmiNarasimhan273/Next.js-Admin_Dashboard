"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { redirect } from "next/navigation";
import { dbConnection } from "./utils";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    dbConnection();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create new user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    dbConnection();

    const updatedFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };
    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === "" || undefined) && delete updatedFields[key]
    );
    await User.findByIdAndUpdate(id, updatedFields);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateProduct = async (formData) => {
  const { id, title, description, price, stock, colour, size } =
    Object.fromEntries(formData);

  try {
    dbConnection();

    const updatedFields = {
      title,
      description,
      price,
      stock,
      colour,
      size,
    };
    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === "" || undefined) && delete updatedFields[key]
    );
    await Product.findByIdAndUpdate(id, updatedFields);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const addProduct = async (formData) => {
  const { title, description, price, stock, colour, size } =
    Object.fromEntries(formData);

  try {
    dbConnection();

    const newProduct = new Product({
      title,
      description,
      price,
      stock,
      colour,
      size,
    });

    await newProduct.save();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create new product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    dbConnection();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete a product");
  }
  revalidatePath("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    dbConnection();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete a User");
  }
  revalidatePath("/dashboard/users");
};

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
