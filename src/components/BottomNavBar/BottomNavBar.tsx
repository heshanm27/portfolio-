import {
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import InventoryIcon from "@mui/icons-material/Inventory";

export default function BottomNavBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState("recents");

  const sx = [
    {
      color: "white",
      "&.MuiBottomNavigationAction-root": {
        "&:hover": {
          color: theme.palette.primary.light,
        },
      },
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleOnClick = (value: string) => {
    const violation = document.getElementById(value);
    window.scrollTo({
      top: violation!.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <BottomNavigation
        sx={[
          {
            width: "40%",
            backgroundColor: " rgba(0, 0, 0,0.3)",
            color: "white",
            position: "fixed",
            bottom: 0,
            marginBottom: "40px",
            borderRadius: "50px",
          },
          matches && {
            width: "100%",
            marginBottom: "0px",
          },
        ]}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          sx={sx}
          icon={<HomeIcon />}
          onClick={() => handleOnClick("home")}
        />

        <BottomNavigationAction
          label="About"
          value="about"
          sx={sx}
          icon={<PersonIcon />}
          onClick={() => {
            handleOnClick("about");
          }}
        />

        <BottomNavigationAction
          label="Journy"
          value="journy"
          sx={sx}
          icon={<DirectionsWalkIcon />}
          onClick={() => {
            // handleOnClick(value);
          }}
        />

        <BottomNavigationAction
          label="Experience"
          value="experience"
          sx={sx}
          icon={<InventoryIcon />}
          onClick={() => {
            // handleOnClick(value);
          }}
        />
        <BottomNavigationAction
          label="Experience"
          value="experience"
          sx={sx}
          icon={<InventoryIcon />}
          onClick={() => {
            // handleOnClick(value);
          }}
        />

        <BottomNavigationAction
          label="Experience"
          value="experience"
          sx={sx}
          icon={<InventoryIcon />}
          onClick={() => {
            // handleOnClick(value);
          }}
        />
      </BottomNavigation>
    </>
  );
}
