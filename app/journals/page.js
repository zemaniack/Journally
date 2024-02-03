"use client";
import React, { useState } from "react";
import { Button, Menu, Input } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { BsJournalText } from "react-icons/bs";
import { TbBrandPagekit } from "react-icons/tb";

const { TextArea } = Input;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("January", "sub1", <BsJournalText />, [
    getItem("1/5/2024", "1", <TbBrandPagekit />),
    getItem("1/6/2024", "2", <TbBrandPagekit />),
    getItem("1/12/2024", "3", <TbBrandPagekit />),
    getItem("1/19/2024", "4", <TbBrandPagekit />),
    getItem("1/26/2024", "5", <TbBrandPagekit />),
  ]),
  getItem("February", "sub2", <BsJournalText />),
];

const JournalPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [page1, setPage1] = useState("");
  const [page2, setPage2] = useState("");
  const [page3, setPage3] = useState("");
  const [page4, setPage4] = useState("");
  const [page5, setPage5] = useState("");
  const [openPage, setOpenPage] = useState(1);

  const updatePage = (page) => {
    switch (openPage) {
      case "1":
        setPage1(page);
        break;
      case "2":
        setPage2(page);
        break;
      case "3":
        setPage3(page);
        break;
      case "4":
        setPage4(page);
        break;
      case "5":
        setPage5(page);
        break;
      default:
        break;
    }
  };

  const pageContent = () => {
    switch (openPage) {
      case "1":
        return page1;
      case "2":
        return page2;
      case "3":
        return page3;
      case "4":
        return page4;
      case "5":
        return page5;
      default:
        break;
    }
  };

  return (
    <div
      className="flex flex-row w-full h-fill flex-start pr-5 pl-5 h-90"
      style={{ height: "90vh" }}
    >
      <div>
        <Menu
          onClick={(e) => setOpenPage(e.key)}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={false}
          items={items}
          style={{
            border: "solid 1px grey",
            borderRadius: "10px",
            backgroundColor: "white",
            width: "200px",
            marginRight: "5px",
          }}
        />
      </div>

      <div className="flex-1 flex flex-col pb-5">
        <TextArea
          placeholder="Write your journal entry here"
          style={{ width: "100%", flex: 1 }}
          onChange={(e) => updatePage(e.target.value)}
          value={pageContent()}
        />
      </div>
    </div>
  );
};

export default JournalPage;
