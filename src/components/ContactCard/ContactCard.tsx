import {
  Button,
  Card,
  CardContent,
  SvgIconProps,
  Typography,
} from "@mui/material";

type prop = {
  Icon: React.ReactElement<SvgIconProps>;
  ContactMethod: string;
  Connactinfo: string;
};
export default function ContactCard(props: prop) {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "rgba(85, 76, 164, .2)" }}>
      <CardContent
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {props.Icon}
        <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
          {props.ContactMethod}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="white">
          {props.Connactinfo}
        </Typography>
        <Button variant="text">send a message</Button>
      </CardContent>
    </Card>
  );
}
