import React from "react";
import Image from "next/image";
import inbox from '../assets/inbox.png'
import drafts from '../assets/drafts.png'
import important from '../assets/important.png'
import logo from '../assets/logo.png'
import moon from '../assets/moon.png'
import plus from '../assets/plus.png'
import sent from '../assets/sent.png'
import spam from '../assets/spam.png'
import trash from '../assets/trash.png'
const MenuBarList = [
  {
    id: 1,
    title: "Inbox",
    link: "#inbox",
    img: inbox
  },
  {
    id: 2,
    title: "Sent",
    link: "#sent",
    img: sent
  },
  {
    id: 3,
    title: "Drafts",
    link: "#drafts",
    img: drafts
  },
  {
    id: 4,
    title: "Important",
    link: "#important",
    img: important
  },
  {
    id: 5,
    title: "Spam",
    link: "#spam",
    img: spam
  },
  {
    id: 6,
    title: "Trash",
    link: "#trash",
    img: trash
  },
];
function Navbar() {
  return (
    <div className=" bg-white p-6 rounded-2xl w-[100px] sm:w-[350px]">
      <div className="logo mb-7 flex items-center">
        <Image src={logo} alt="logo"/>
        <div className="ml-3 font-bold text-3xl text-black hidden sm:inline">
          Daily
        </div>
      </div>
      <button className="flex items-center justify-center text-white bg-black p-4 w-full rounded-2xl mb-3 cursor-pointer">
        <Image className="mr-2" src={plus} alt="Add" height={20} width={20} />
        <div className="hidden sm:inline">
          Create new
        </div>
      </button>
      <ul>
        {
        MenuBarList.map((menu) => (
          <li key={menu.id} className="flex w-full p-4 hover:bg-[#FEEBF6] rounded-2xl items-center cursor-pointer">
            <Image src={menu.img} className="mr-1.5" alt="icon"  />
            <a className="text-black text-xl font-bold hidden sm:inline" href={menu.link}>
              {menu.title}
            </a>
          </li>
        ))
        }
      </ul>

      <div className="ligne h-0.5  bg-black mt-10 hidden sm:inline"></div>
    </div>
  );
}

export default Navbar;
