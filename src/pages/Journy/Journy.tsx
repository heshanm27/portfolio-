import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FlagIcon from "@mui/icons-material/Flag";
import SchoolIcon from "@mui/icons-material/School";
import PendingIcon from "@mui/icons-material/Pending";

export default function Journy() {
  const theme = useTheme();
  const journy = [
    {
      icon: <FlagIcon />,
      text: "O/L Complete",
      year: "2016",
    },
    {
      icon: <FlagIcon />,
      text: "A/L Complete",
      year: "2019",
    },
    {
      icon: <SchoolIcon />,
      text: "Start undergraduate degree",
      year: "2020",
    },
    {
      icon: <PendingIcon />,
      text: "Present",
      year: null,
    },
  ];

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div id="journy" style={{ backgroundColor: "#070B2E", height: "100vh" }}>
      <Container>
        <Box sx={{ paddingTop: matches === true ? "0px" : "40px" }}>
          <Box>
            <Stack
              direction="row"
              justifyContent="center"
              sx={{ paddingTop: matches === true ? "0px" : "10px" }}
            >
              <Typography
                variant="h2"
                alignItems="center"
                color={theme.palette.primary.main}
              >
                My Journy
              </Typography>
            </Stack>

            <Stack
              direction="row"
              sx={{ paddingBottom: matches === true ? "0px" : "10px" }}
              justifyContent="center"
            >
              <Typography variant="h5" alignItems="center" color="white">
                So Far
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Timeline position="alternate">
              {journy.map((value, index) => {
                return (
                  <TimelineItem color="white">
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot color="primary">{value.icon}</TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{ py: matches === true ? "50px" : "40px", px: 2 }}
                    >
                      <Typography
                        variant={matches === true ? "caption" : "h6"}
                        component="span"
                        color={"white"}
                      >
                        {value.text}
                      </Typography>
                      <Typography color={"white"}>{value!.year}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
