import {
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomeIconButton from "../../components/IconButton/CustomeIconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const navArray = [
  {
    url: "#",
    label: "Home",
  },
  {
    url: "#about",
    label: "About",
  },
  {
    url: "#journy",
    label: "Journy",
  },
  {
    url: "#experience",
    label: "Experience",
  },
  {
    url: "#protfolio",
    label: "Protfolio",
  },
  {
    url: "#contact",
    label: "Contact",
  },
];

const socialBtnArr = [
  {
    Icon: <FacebookIcon />,
    label: "Facebook",
    url: "https://www.facebook.com/hashan.madaranga.7/",
  },
  {
    Icon: <InstagramIcon />,
    label: "Instagram",
    url: "https://www.facebook.com/hashan.madaranga.7/",
  },
  {
    Icon: <TwitterIcon />,
    label: "Twitter",
    url: "https://www.facebook.com/hashan.madaranga.7/",
  },
];

export default function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      id="footer"
      style={{
        backgroundColor: "#40C4FF",
        paddingTop: "50px",
        paddingBottom: "150px",
      }}
    >
      <Container>
        <Typography align="center" variant="h2">
          Devprotfolio
        </Typography>
        <Stack
          direction={matches === true ? "column" : "row"}
          justifyContent="center"
          alignItems={"center"}
        >
          {navArray.map((nav) => {
            return (
              <Link
                variant="h6"
                color="black"
                underline="hover"
                href={nav.url}
                sx={{ padding: "10px" }}
              >
                {nav.label}
              </Link>
            );
          })}
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems={"center"}
          spacing={2}
        >
          {socialBtnArr.map((social) => {
            return (
              <CustomeIconButton
                Icon={social.Icon}
                label={social.label}
                url={social.url}
                isScoial={true}
              />
            );
          })}
        </Stack>
        <Typography
          sx={{ paddingTop: "10px" }}
          variant="body2"
          color="textSecondary"
          align="center"
        >
          {"Copyright © "}
          <Link color="inherit">devprotfolio</Link> {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </div>
  );
}
