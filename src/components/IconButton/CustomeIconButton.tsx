import { IconButton, SvgIconProps, Tooltip } from "@mui/material";
import React from "react";

type btnProps = {
  Icon: React.ReactElement<SvgIconProps>;
  url: string;
  label: string;
};

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

export default function CustomeIconButton(props: btnProps) {
  return (
    <Tooltip title={props.label} placement="right">
      <IconButton
        aria-label="delete"
        onClick={() => {
          window.open(props.url, "_blank");
        }}
        color="primary"
        size="large"
        sx={style}
      >
        {props.Icon}
      </IconButton>
    </Tooltip>
  );
}
