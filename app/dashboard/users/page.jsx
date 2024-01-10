import styles from "@/app/ui/dashboard/users/users.module.css";
import SearchBar from "@/app/ui/dashboard/searchBar/searchBar";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/lib/data";
import { deleteUser } from "@/app/lib/actions";
const Userspage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, users } = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchBar placeholder="Search Users... " />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>EMail</td>
            <td>Created At</td>
            <td>Roles</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((data) => (
            <tr key={data.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={data?.img || "/noavatar.png"}
                    alt="User Image"
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />{" "}
                  {data.username}
                </div>
              </td>
              <td>{data.email}</td>
              <td>{data.createdAt?.toString().slice(4, 16)}</td>
              <td>{data.isAdmin ? "Admin" : "Client"}</td>
              <td>{data.isActive ? "Active" : "Passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${data.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" value={data.id} name="id" />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Userspage;
