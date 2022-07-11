import { Box, Stack, Typography, useTheme } from "@mui/material";

type prop = {
  subTitle: string;
  mainTitle: string;
};

export default function Titles(props: prop) {
  const theme = useTheme();

  return (
    <Box sx={{ padding: "30px" }}>
      <Stack direction="row" justifyContent="center">
        <Typography variant="h5" alignItems="center" color="white">
          {props.subTitle}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="center">
        <Typography
          variant="h3"
          alignItems="center"
          color={theme.palette.primary.main}
        >
          {props.mainTitle}
        </Typography>
      </Stack>
    </Box>
  );
}
