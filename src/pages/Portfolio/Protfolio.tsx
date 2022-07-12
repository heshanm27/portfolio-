import { Box, Container, Grid, useTheme } from "@mui/material";
import CustomeCard from "../../components/CustomeCard/CustomeCard";
import Titles from "../../components/Titles/Titles";

export default function Protfolio() {
  const theme = useTheme();
  const DataList = [
    {
      url: "https://github.com/heshanm27/portfolio-",
      title: "Protfolio",
      img: "https://firebasestorage.googleapis.com/v0/b/protfolio-6778e.appspot.com/o/Screenshot%20(35).png?alt=media&token=80e5956d-63d5-4039-9ea6-0145ca77828e",
      chips: ["TypeScript", "HTML", "CSS", "React", "MatrialUI"],
    },
    {
      url: "https://github.com/IT2080-ITP-2022-Feb/itp_project_group_b4-wd_b04_itp_g01",
      title: "GmAuto Admin portal",
      img: "https://firebasestorage.googleapis.com/v0/b/protfolio-6778e.appspot.com/o/WhatsApp%20Image%202022-07-12%20at%201.49.25%20PM.jpeg?alt=media&token=b2471416-85a0-415a-9715-f47de9991b9a",
      chips: ["TypeScript", "HTML", "CSS", "JavaScript", "Flutter"],
    },
    {
      url: "https://github.com/heshanm27/GM-Auto",
      title: "GmAuto Android App",
      img: "https://firebasestorage.googleapis.com/v0/b/protfolio-6778e.appspot.com/o/Screenshot%20(36).png?alt=media&token=e7287fde-abf7-4986-a443-50fd7079e0fb",
      chips: ["Java", "Firebase"],
    },
    {
      url: "https://github.com/heshanm27/tripsapp_flutter",
      title: "TripSo",
      img: "https://firebasestorage.googleapis.com/v0/b/protfolio-6778e.appspot.com/o/tripso.png?alt=media&token=21eca87b-bef6-431b-a038-7506764d0779",
      chips: ["Flutter", "Dart", "Firebase"],
    },

    {
      url: "https://github.com/heshanm27/WordlTimeApp",
      title: "WordlTimeApp",
      img: "https://firebasestorage.googleapis.com/v0/b/protfolio-6778e.appspot.com/o/worldTime.png?alt=media&token=3c342ae9-dff3-43ee-b78d-15d4548bf7c1",
      chips: ["Flutter", "Dart", "Firebase"],
    },
  ];

  return (
    <div
      id="protfolio"
      style={{
        backgroundColor: "#070B2E",
      }}
    >
      <Container maxWidth="lg">
        <Titles mainTitle="Portfolio" subTitle="My Recent Work" />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "end",
            justifyContent: "center",
            alignItems: "end",
            padding: theme.spacing(2),
          }}
        >
          <Box>
            <Grid container>
              {DataList.map((value, index) => {
                return (
                  <Grid xs={12} md={4} sx={{ padding: "20px" }} key={index}>
                    <CustomeCard
                      title={value.title}
                      url={value.url}
                      chips={value.chips}
                      img={value.img}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
