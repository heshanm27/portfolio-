import { Box, Container, Stack, Typography } from "@mui/material";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";

export default function index() {
  return (
    <div style={{ backgroundColor: "#070B2E", height: "100vh" }}>
      <Container maxWidth="xl" sx={{ pt: 10 }}>
        <Box sx={{ p: 2 }}>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <Stack direction="column" alignItems="center">
              <Typography variant="h5" alignItems="center" color="white">
                Hello I'm
              </Typography>
              <Typography variant="h2" alignItems="center" color="white">
                Heshan Madhuranga
              </Typography>
              <Typography variant="h5" alignItems="center" color="white">
                Fullstack Developer
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Stack direction="row" alignItems="center" justifyContent={"center"}>
          <BottomNavBar />
        </Stack>
      </Container>
    </div>
  );
}
