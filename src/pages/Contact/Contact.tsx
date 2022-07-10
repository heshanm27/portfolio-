import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
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
  },
  {
    Icon: <SendIcon />,
    ContactMethod: "Messenger",
    Connactinfo: "Heshan Madhuranga",
  },
  {
    Icon: <WhatsAppIcon />,
    ContactMethod: "WhatsApp",
    Connactinfo: "+94717083178",
  },
];

export default function Contact() {
  return (
    <div id="contact" style={{ backgroundColor: "#070B2E", padding: "50px" }}>
      <Container maxWidth="lg">
        <Titles mainTitle="Contact Me" subTitle="Get in touch" />

        <Stack direction="row" justifyContent="space-around">
          <Stack direction="column" spacing={2}>
            {details.map((value, index) => {
              return (
                <ContactCard
                  Icon={value.Icon}
                  Connactinfo={value.Connactinfo}
                  ContactMethod={value.ContactMethod}
                  key={index}
                />
              );
            })}
          </Stack>
          <Box width="400px">
            <Stack direction="column" spacing={5} sx={{ color: "white" }}>
              <TextField
                id="outlined-name"
                label="Your Full Name"
                color="primary"
                fullWidth
                focused
              />
              <TextField
                id="outlined-uncontrolled"
                label="Your Email"
                defaultValue="foo"
                focused
              />
              <TextField
                id="outlined-name"
                label="Your Message"
                multiline
                rows={10}
                focused
              />
              <LoadingButton
                size="medium"
                sx={{ width: "100%" }}
                loading={false}
                variant="contained"
              >
                Send Message
              </LoadingButton>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
