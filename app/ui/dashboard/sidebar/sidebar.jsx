import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdWork,
  MdAnalytics,
  MdOutlineSettings,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLinks/menuLinks";
import Image from "next/image";
import { auth, signOut } from "@/app/auth";

async function sidebar() {
  const { user } = await auth();
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Transactions",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.img || "/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>role</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((data) => (
          <li key={data.title}>
            <span className={styles.data}>{data.title}</span>
            {data.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        style={{ marginTop: "130px" }}
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
}

export default sidebar;
