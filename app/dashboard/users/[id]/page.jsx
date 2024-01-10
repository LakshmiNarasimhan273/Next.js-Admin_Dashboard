import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUser = async ({ params }) => {
  const { id } = params;

  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="User Image" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input type="text" placeholder={user.username} name="username" />
          <label>E-Mail</label>
          <input type="email" placeholder={user.email} name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Mobile Number</label>
          <input type="phone" placeholder={user.phone} name="phone" />
          <label>Address</label>
          <textarea type="text" placeholder={user.address} name="address" />
          <label> is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button>Update User</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
