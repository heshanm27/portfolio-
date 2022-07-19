import {
  Box,
  CircularProgress,
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
import CustomeDialog from "../../components/CustomeDialog/CustomeDialog";

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

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, SetIsloading] = useState(false);
  const [openDialog, SetOpenDialog] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const handleClose = () => {
    SetOpenDialog(false);
  };
  //error handle
  const validate = () => {
    let temp = {
      email: "",
      name: "",
      message: "",
    };
    temp.email =
      (/$^|.+@.+..+/.test(values.email) ? "" : "Email is Not Valid") ||
      (values.email ? "" : "Email is Required");
    temp.name = values.name ? "" : "Name Required";
    temp.message = values.message ? "" : "Message Required";

    setErrors({
      ...temp,
    });
    console.log(errors);
    return Object.values(temp).every((x) => x == "");
  };
  const handleonSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validate()) {
      SetIsloading(true);
      console.log(form.current);
      emailjs
        .sendForm(
          "service_suyhqmn",
          "template_0dm5myj",
          form.current!,
          "ZWu0LhV2SC4nADpjb"
        )
        .then(
          (result: any) => {
            console.log(result);
            form.current?.reset();
            SetIsloading(false);
            SetOpenDialog(true);
            setValues(initialValues);
          },
          (error: any) => {
            console.log(error.text);
            SetIsloading(false);
          }
        );
    }
  };

  const handleChanges = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
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
                  onChange={handleChanges}
                  fullWidth
                  focused
                  helperText={errors.name}
                  error={errors.name ? true : false}
                />
                <TextField
                  id="outlined-uncontrolled"
                  label="Your Email"
                  name="email"
                  onChange={handleChanges}
                  error={errors.email ? true : false}
                  helperText={errors.email}
                  focused
                />
                <TextField
                  id="outlined-name"
                  label="Your Message"
                  name="message"
                  onChange={handleChanges}
                  multiline
                  rows={10}
                  error={errors.message ? true : false}
                  focused
                  helperText={errors.message}
                />
                <LoadingButton
                  size="large"
                  fullWidth={false}
                  loading={isLoading}
                  variant="contained"
                  type="submit"
                  color="primary"
                  loadingIndicator={
                    <CircularProgress color="primary" size={16} />
                  }
                >
                  Send Message
                </LoadingButton>
              </Stack>
            </form>
          </Box>
          <CustomeDialog
            Open={openDialog}
            handleClose={handleClose}
            ButtonText="OK"
            DialogText="I will reply you as soon as possible"
            DialogTitle="Thank you reaching me out!"
          />
        </Stack>
      </Container>
    </div>
  );
}
