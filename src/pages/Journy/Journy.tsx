import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "../../index.css";
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
import { motion, useInView } from "framer-motion";
import { container, item } from "../../components/Animations/Animations";
import { useRef } from "react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  return (
    <div id="journy" style={{ backgroundColor: "#070B2E" }}>
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          exit="exit"
        >
          <Box
            sx={{
              paddingTop: matches === true ? "0px" : "40px",
            }}
          >
            <motion.div variants={item}>
              <Titles mainTitle="My Journy" subTitle="So Far" />
            </motion.div>
            <Box sx={{ marginBottom: "-20px" }} ref={ref}>
              <Timeline position="alternate">
                {journy.map((value, index) => {
                  return (
                    <TimelineItem color="white" key={index}>
                      <TimelineSeparator>
                        <TimelineConnector
                          className={isInView ? "Menu__link" : "animOut"}
                        />
                        <motion.div variants={item}>
                          <TimelineDot color="primary">
                            {value.icon}
                          </TimelineDot>
                        </motion.div>
                        <TimelineConnector
                          className={isInView ? "Menu__link" : "animOut"}
                        />
                      </TimelineSeparator>

                      <TimelineContent
                        sx={{ py: matches === true ? "70px" : "30px", px: 2 }}
                      >
                        <motion.div variants={item}>
                          <Card
                            sx={{
                              display: "flex",
                              backgroundColor: "rgba(85, 76, 164, .2)",
                            }}
                          >
                            <Box
                              sx={{ display: "flex", flexDirection: "column" }}
                            >
                              <CardContent>
                                <Typography component="div" variant="h5">
                                  {value.text}
                                </Typography>
                                <Typography variant="subtitle1" component="div">
                                  {value!.year}
                                </Typography>
                              </CardContent>
                            </Box>
                          </Card>
                          {/* <Typography
                            variant={matches === true ? "caption" : "h6"}
                            component="span"
                            color={"white"}
                          >
                            {value.text}
                          </Typography>
                          <Typography color={"white"}>{value!.year}</Typography> */}
                        </motion.div>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </Timeline>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </div>
  );
}
