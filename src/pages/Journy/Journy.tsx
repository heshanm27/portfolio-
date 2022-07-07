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
import TimelineDot from "@mui/lab/TimelineDot";
import FlagIcon from "@mui/icons-material/Flag";
import SchoolIcon from "@mui/icons-material/School";
import PendingIcon from "@mui/icons-material/Pending";
import Titles from "../../components/Titles/Titles";

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
          <Titles mainTitle="My Journy" subTitle="So Far" />

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
                      sx={{ py: matches === true ? "30px" : "40px", px: 2 }}
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
