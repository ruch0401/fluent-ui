import React from "react";
import { Nav, initializeIcons } from "@fluentui/react";

const navigationStyles = {
  root: {
    height: "100vh",
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
    paddingTop: "10vh",
  },
};

const links = [
  {
    links: [
      {
        name: "Accounts",
        key: "key1",
        url: "/",
        iconProps: {
          iconName: "Accounts",
          styles: {
            root: {
              fontSize: 20,
              color: "#106ebe",
            },
          },
        },
      },
      {
        name: "Users",
        key: "key2",
        url: "/",
        iconProps: {
          iconName: "Users",
          styles: {
            root: {
              fontSize: 20,
              color: "#106ebe",
            },
          },
        },
      },
      {
        name: "Connectors",
        key: "key3",
        url: "/",
        iconProps: {
          iconName: "Connector",
          styles: {
            root: {
              fontSize: 20,
              color: "#106ebe",
            },
          },
        },
      },
      {
        name: " Components",
        key: "key4",
        url: "/",
        iconProps: {
          iconName: "Component",
          styles: {
            root: {
              fontSize: 20,
              color: "#106ebe",
            },
          },
        },
      },
      {
        name: " Marketplace",
        key: "key5",
        url: "/",
        iconProps: {
          iconName: "Marketplace",
          styles: {
            root: {
              fontSize: 20,
              color: "#106ebe",
            },
          },
        },
      },
    ],
  },
];

const Navigation = () => {
  initializeIcons();
  return <Nav groups={links} selectedKey="key1" styles={navigationStyles} />;
};

export default Navigation;
