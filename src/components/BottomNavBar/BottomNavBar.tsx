import {
  BottomNavigation,
  BottomNavigationAction,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import InventoryIcon from "@mui/icons-material/Inventory";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MessageIcon from "@mui/icons-material/Message";
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

  const arrayBottomNav = [
    { label: "About", value: "about", Icon: <PersonIcon /> },
    { label: "Journy", value: "journy", Icon: <DirectionsWalkIcon /> },
    { label: "Experience", value: "experience", Icon: <LibraryBooksIcon /> },
    { label: "Protfolio", value: "protfolio", Icon: <InventoryIcon /> },
    { label: "Contact", value: "contact", Icon: <MessageIcon /> },
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
            width: "34%",
            backgroundColor: " rgba(0, 0, 0,0.3)",
            color: "white",
            position: "fixed",
            bottom: 0,
            marginBottom: "40px",
            borderRadius: "50px",
          },
          matches && {
            width: "100%",
            backgroundColor: " rgba(0, 0, 0,0.3)",
            marginBottom: "0px",
            left: "50%",
            transform: "translate(-50%, 0)",
          },
        ]}
        value={value}
        onChange={handleChange}
      >
        {!matches && (
          <Tooltip title="Home" placement="top">
            <BottomNavigationAction
              label="Home"
              value="home"
              sx={sx}
              icon={<HomeIcon />}
              onClick={() => handleOnClick("home")}
            />
          </Tooltip>
        )}

        {arrayBottomNav.map((nav, index) => {
          return (
            <Tooltip title={nav.label} placement="top">
              <BottomNavigationAction
                key={index}
                label={nav.label}
                value={nav.value}
                sx={sx}
                icon={nav.Icon}
                onClick={() => {
                  handleOnClick(nav.value);
                }}
              />
            </Tooltip>
          );
        })}
      </BottomNavigation>
    </>
  );
}
