import { Box, Stack, SvgIconProps, Typography } from "@mui/material";

type prop = {
  Icon: React.ReactElement<SvgIconProps>;
  Title: string;
  SubTitle: string;
};

export default function ExperienceCom(props: prop) {
  return (
    <>
      <Stack direction="row" justifyContent="left">
        <Box sx={{ color: "#40C4FF" }}>{props.Icon}</Box>

        <Typography sx={{ paddingLeft: "10px" }} variant="h6">
          {props.Title}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="left ">
        <Typography sx={{ paddingLeft: "30px" }} variant="body1">
          {props.SubTitle}
        </Typography>
      </Stack>
    </>
  );
}
