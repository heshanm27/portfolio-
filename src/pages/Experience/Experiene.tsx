import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import Titles from "../../components/Titles/Titles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExperienceCom from "../../components/ExperienceCom/ExperienceCom";

const webdev = [
  { icon: <CheckCircleIcon />, title: "Html", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Css", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Javascript", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Tailwind", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "React", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Matrial Ui", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Boostrap", subTitle: "Check" },
  { icon: <CheckCircleIcon />, title: "Next.js", subTitle: "Check" },
];

export default function Experience() {
  return (
    <div id="experience" style={{ backgroundColor: "#070B2E" }}>
      <Container maxWidth="xl">
        <Box>
          <Titles mainTitle="My Experience" subTitle="what skills I have" />

          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={6}>
              <Stack direction="row" justifyContent="center">
                <Typography
                  variant="h5"
                  sx={{ marginBottom: "10px" }}
                  color={"white"}
                >
                  Web Development
                </Typography>
              </Stack>
              <Box
                sx={{
                  border: "1px solid #40C4FF",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid container>
                  {webdev.map((value, index) => {
                    return (
                      <Grid item key={index} xs={6} md={6}>
                        <Box
                          sx={{
                            color: "white",
                            justifyContent: "center",
                            alignContent: "center",
                            textAlign: "center",
                            padding: "10px 10px 10px 20px",
                          }}
                        >
                          <ExperienceCom
                            Icon={value.icon}
                            Title={value.title}
                            SubTitle={value.subTitle}
                          />
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack direction="row" justifyContent="center">
                <Typography
                  variant="h5"
                  sx={{ marginBottom: "10px" }}
                  color={"white"}
                >
                  Web Development
                </Typography>
              </Stack>
              <Box
                sx={{
                  border: "1px solid #40C4FF",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid container>
                  {webdev.map((value, index) => {
                    return (
                      <Grid item key={index} xs={6} md={6}>
                        <Box
                          sx={{
                            color: "white",
                            justifyContent: "center",
                            alignContent: "center",
                            textAlign: "center",
                            padding: "10px 10px 10px 20px",
                          }}
                        >
                          <ExperienceCom
                            Icon={value.icon}
                            Title={value.title}
                            SubTitle={value.subTitle}
                          />
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack direction="row" justifyContent="center">
                <Typography
                  variant="h5"
                  sx={{ marginBottom: "10px" }}
                  color={"white"}
                >
                  Web Development
                </Typography>
              </Stack>
              <Box
                sx={{
                  border: "1px solid #40C4FF",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid container>
                  {webdev.map((value, index) => {
                    return (
                      <Grid item key={index} xs={6} md={6}>
                        <Box
                          sx={{
                            color: "white",
                            justifyContent: "center",
                            alignContent: "center",
                            textAlign: "center",
                            padding: "10px 10px 10px 20px",
                          }}
                        >
                          <ExperienceCom
                            Icon={value.icon}
                            Title={value.title}
                            SubTitle={value.subTitle}
                          />
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
