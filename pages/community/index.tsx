import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const Community: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>COMMUNITY MOBILE</Stack>;
  }

  return (
    <Stack className={"community-page"} sx={{ margin: "20px 0" }}>
      <Stack className={"container"}>COMMUNITY</Stack>
    </Stack>
  );
};

export default withLayoutBasic(Community);