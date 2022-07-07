import { Box, Container, Grid, Typography } from "@mui/material";

import Titles from "../../components/Titles/Titles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const webdev = [
  { icon: <CheckCircleIcon />, title: "Check", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Check", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Check", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Check", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Check", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Check", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Check", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Check", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Check", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Check", subTitle: "Check" },
];

export default function Experience() {
  return (
    <div id="experience" style={{ backgroundColor: "#070B2E" }}>
      <Container maxWidth="xl">
        <Box>
          <Titles mainTitle="My Experience" subTitle="what skills I have" />

          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  border: "1px solid #40C4FF",
                }}
              >
                <Grid container>
                  {webdev.map((value, index) => {
                    return (
                      <Grid
                        item
                        key={index}
                        xs={12}
                        md={6}
                        sx={{
                          color: "white",
                          justifyContent: "center",
                          alignContent: "center",
                          textAlign: "center",
                          padding: "10px",
                        }}
                      >
                        {value.icon}
                        <Typography>{value.title}</Typography>
                        <Typography>{value.subTitle}</Typography>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {" "}
              <Box
                sx={{
                  border: "1px solid #40C4FF",
                  height: "400px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {" "}
              <Box
                sx={{
                  border: "1px solid #40C4FF",
                  height: "400px",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
