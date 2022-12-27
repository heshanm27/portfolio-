import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import CustomeCard from "../../components/CustomeCard/CustomeCard";
import Titles from "../../components/Titles/Titles";
import { motion } from "framer-motion";
import { container, item } from "../../components/Animations/Animations";
export default function Protfolio() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
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
    {
      url: "https://github.com/heshanm27/WordlTimeApp",
      title: "WordlTimeApp",
      img: "https://firebasestorage.googleapis.com/v0/b/protfolio-6778e.appspot.com/o/worldTime.png?alt=media&token=3c342ae9-dff3-43ee-b78d-15d4548bf7c1",
      chips: ["Flutter", "Dart", "Firebase"],
    },
    {
      url: "https://github.com/heshanm27/EduShare",
      title: "EduShare",
      img: "https://firebasestorage.googleapis.com/v0/b/protfolio-6778e.appspot.com/o/EduShare.PNG?alt=media&token=891254b6-64c8-4054-8944-e4410c89d580",
      chips: ["React", "Firebase"],
    },
    {
      url: "https://github.com/heshanm27/edu_share_app",
      title: "EduShare App",
      img: "https://firebasestorage.googleapis.com/v0/b/protfolio-6778e.appspot.com/o/SRi%20lankan%20News%20Api-1.jpg?alt=media&token=688ea60a-8fdc-4182-b050-00e5f94b6100",
      chips: ["Flutter", "Firebase"],
    },
    {
      url: "https://github.com/heshanm27/srilankanewsapi",
      title: "SriLanka News API(Rapid API)",
      img: "https://firebasestorage.googleapis.com/v0/b/protfolio-6778e.appspot.com/o/NewsApi.PNG?alt=media&token=343b7b3c-b0f5-4b72-a95a-2f1e31d6483c",
      chips: ["NodeJS", "ExpressJS", "MongoDB", "Puppeteer", "cheerio"],
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
        <motion.div variants={container} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: matches ? 0.2 : 0.5 }} exit="exit">
          <motion.div variants={item}>
            <Titles mainTitle="Portfolio" subTitle="My Recent Work" />
          </motion.div>
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
                      <motion.div variants={item} whileHover={{ scale: 1.2 }}>
                        <CustomeCard title={value.title} url={value.url} chips={value.chips} img={value.img} />
                      </motion.div>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </div>
  );
}
