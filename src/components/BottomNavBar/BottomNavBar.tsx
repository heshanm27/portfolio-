import {
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const sx = [
  {
    color: "white",
    "&.MuiBottomNavigationAction-root": {
      "&:hover": {
        color: "red",
      },
    },
  },
];

export default function BottomNavBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState("recents");
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
        showLabels={true}
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
          label="Recents"
          value="home"
          sx={sx}
          icon={<RestoreIcon />}
          onClick={() => handleOnClick("home")}
        />

        <BottomNavigationAction
          label="about"
          value="about"
          sx={sx}
          icon={<FavoriteIcon />}
          onClick={() => {
            handleOnClick("about");
          }}
        />

        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          sx={sx}
          icon={<LocationOnIcon />}
          onClick={() => {
            // handleOnClick(value);
          }}
        />

        <BottomNavigationAction
          label="Folder"
          value="folder"
          sx={sx}
          icon={<FolderIcon />}
          onClick={() => {
            // handleOnClick(value);
          }}
        />
      </BottomNavigation>
    </>
  );
}
