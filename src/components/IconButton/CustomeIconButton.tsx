import { IconButton, SvgIconProps, Tooltip } from "@mui/material";
import React from "react";

type btnProps = {
  Icon: React.ReactElement<SvgIconProps>;
  url: string;
  label: string;
  isScoial: boolean;
};

export default function CustomeIconButton(props: btnProps) {
  const style = [
    {
      "&.MuiIconButton-root": {
        "&:hover": {
          color: "white",
          backgroundColor: "#40C4FF",
          opacity: 0.8,
        },
      },
    },
  ];

  const style2 = [
    {
      "&.MuiIconButton-root": {
        "&:hover": {
          color: "black",
          backgroundColor: "white",
          borderColor: "black",
          opacity: 0.8,
        },
        color: "white",
        backgroundColor: "black",
      },
    },
  ];
  return (
    <Tooltip title={props.label} placement="right">
      <IconButton
        aria-label="delete"
        onClick={() => {
          window.open(props.url, "_blank");
        }}
        color={props.isScoial === true ? "default" : "primary"}
        size="large"
        sx={props.isScoial === true ? style2 : style}
      >
        {props.Icon}
      </IconButton>
    </Tooltip>
  );
}
