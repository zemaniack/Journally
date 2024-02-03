"use client";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsJournalText } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { MdHome } from "react-icons/md";
import { Button, Drawer } from "antd";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-blue-500 flex justify-between items-center h-12">
      <div className="mx-4 text-2xl">Journally</div>
      <div className="mx-4 flex items-center flex-row w-20 justify-between">
        <Link href="/profile">
          <CgProfile className="text-white text-2xl cursor-pointer" />
        </Link>
        {/* <Button> */}
        <HiMenuAlt3
          className="text-white text-2xl cursor-pointer"
          onClick={() => showDrawer()}
        />
        {/* </Button> */}
      </div>
      <Drawer title="Menu" onClose={onClose} open={open} width={200}>
        <div className="flex flex-col items-center justify-center text-black">
          <Link
            href="/"
            className="text-black flex flex-row items-center gap-2 mb-4"
          >
            <MdHome className="text-2xl" />
            Home
          </Link>
          <Link
            href="/journals"
            className="text-black flex flex-row items-center gap-2 mb-4"
          >
            <BsJournalText className="text-2xl" />
            Journals
          </Link>
          {/* <Link
            href="/create"
            className="text-black flex flex-row items-center gap-2 mb-4"
          >
            <BsJournalText className="text-2xl" />
            Create Entry
          </Link> */}
          {/* <Link
            href="/archive"
            className="text-black flex flex-row items-center gap-2 mb-4"
          >
            <BsJournalText className="text-2xl" />
            Archive
          </Link> */}
          <Link
            href="/settings"
            className="text-black flex flex-row items-center gap-2"
          >
            <CiSettings className="text-2xl" />
            Settings
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
