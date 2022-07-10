import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import CustomeCard from "../../components/CustomeCard/CustomeCard";
import Titles from "../../components/Titles/Titles";

export default function Protfolio() {
  const theme = useTheme();
  const DataList = [
    {
      url: "https://github.com/heshanm27/portfolio-",
      title: "Protfolio",
      img: "https://images.unsplash.com/photo-1657430658457-595c8a5bdb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      chips: ["TypeScript", "HTML", "CSS"],
    },
    {
      url: "https://github.com/heshanm27/portfolio-",
      title: "Protfolio",
      img: "https://images.unsplash.com/photo-1657430658457-595c8a5bdb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      chips: ["TypeScript", "HTML", "CSS"],
    },
    {
      url: "https://github.com/heshanm27/portfolio-",
      title: "Protfolio",
      img: "https://images.unsplash.com/photo-1657430658457-595c8a5bdb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      chips: ["TypeScript", "HTML", "CSS"],
    },
    {
      url: "https://github.com/heshanm27/portfolio-",
      title: "Protfolio",
      img: "https://images.unsplash.com/photo-1657430658457-595c8a5bdb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      chips: ["TypeScript", "HTML", "CSS", "JavaScript", "Flutter"],
    },
    {
      url: "https://github.com/heshanm27/portfolio-",
      title: "Protfolio",
      img: "https://images.unsplash.com/photo-1657430658457-595c8a5bdb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      chips: ["TypeScript", "HTML", "CSS"],
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
