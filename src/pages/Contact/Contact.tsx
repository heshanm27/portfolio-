import {
  Box,
  Container,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Titles from "../../components/Titles/Titles";
import EmailIcon from "@mui/icons-material/Email";
import ContactCard from "../../components/ContactCard/ContactCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from "@mui/lab";

const details = [
  {
    Icon: <EmailIcon />,
    ContactMethod: "Email",
    Connactinfo: "mheshan27@gmail.com",
    url: "mailto:mheshan27@gmail.com",
  },
  {
    Icon: <SendIcon />,
    ContactMethod: "Messenger",
    Connactinfo: "Heshan Madhuranga",
    url: "https://m.me/hashan.madaranga.7",
  },
  {
    Icon: <WhatsAppIcon />,
    ContactMethod: "WhatsApp",
    Connactinfo: "+9471708....",
    url: "https://wa.me/+94712324082",
  },
];

export default function Contact() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, SetIsloading] = useState(false);
  const handleonSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    SetIsloading(true);
    emailjs
      .sendForm(
        "service_suyhqmn",
        "template_0dm5myj",
        form.current!,
        "ZWu0LhV2SC4nADpjb"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          SetIsloading(false);
          event.currentTarget.reset();
        },
        (error: any) => {
          console.log(error.text);
          SetIsloading(false);
        }
      );
  };
  return (
    <div id="contact" style={{ backgroundColor: "#070B2E", padding: "50px" }}>
      <Container maxWidth="lg">
        <Titles mainTitle="Contact Me" subTitle="Get in touch" />

        <Stack
          direction={matches === true ? "column-reverse" : "row"}
          justifyContent="space-around"
        >
          <Stack direction="column" spacing={2}>
            {details.map((value, index) => {
              return (
                <ContactCard
                  Icon={value.Icon}
                  Connactinfo={value.Connactinfo}
                  ContactMethod={value.ContactMethod}
                  url={value.url}
                  key={index}
                />
              );
            })}
          </Stack>

          <Box
            width={matches === true ? "100%" : "50%"}
            sx={{ paddingBottom: "20px" }}
          >
            <form ref={form} onSubmit={handleonSubmit}>
              <Stack direction="column" spacing={5} sx={{ color: "white" }}>
                <TextField
                  id="outlined-name"
                  label="Your Full Name"
                  color="primary"
                  name="name"
                  fullWidth
                  focused
                />
                <TextField
                  id="outlined-uncontrolled"
                  label="Your Email"
                  name="email"
                  focused
                />
                <TextField
                  id="outlined-name"
                  label="Your Message"
                  name="message"
                  multiline
                  rows={10}
                  focused
                />
                <LoadingButton
                  size="large"
                  fullWidth={false}
                  loading={isLoading}
                  variant="contained"
                  type="submit"
                >
                  Send Message
                </LoadingButton>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
