import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

type prop = {
  subTitle: string;
  mainTitle: string;
};

export default function Titles(props: prop) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
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
