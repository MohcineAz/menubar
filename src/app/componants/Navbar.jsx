import React from "react";
import Image from "next/image";
const MenuBarList = [
  {
    id: 1,
    title: "Inbox",
    link: "#inbox",
  },
  {
    id: 2,
    title: "Sent",
    link: "#sent",
  },
  {
    id: 3,
    title: "Drafts",
    link: "#drafts",
  },
  {
    id: 4,
    title: "Important",
    link: "#important",
  },
  {
    id: 5,
    title: "Spam",
    link: "#spam",
  },
  {
    id: 6,
    title: "Trash",
    link: "#trash",
  },
];
function Navbar() {
  return (
    <div className="max-w-[350px] bg-white p-6 rounded-2xl">
      <ul>
        {
        MenuBarList.map((menu) => (
          <li key={menu.id}>
            <a href={menu.link}>
              {menu.title}
            </a>
          </li>
        ))
        }
      </ul>
    </div>
  );
}

export default Navbar;
