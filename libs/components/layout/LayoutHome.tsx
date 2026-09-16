import { Stack } from "@mui/material";
import Head from "next/head";
import Top from "../Top";
import Footer from "../Footer";
import HeaderFilter from "../homepage/HeaderFilter";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const withLayoutMain = (Component: any) => {
    const LayoutMain = (props: any) => {
        const device = useDeviceDetect();

        if (device === "mobile") {
            return (
                <>
                    <Head>
                        <title>Nestar</title>
                    </Head>
                    <Stack id="mobile-wrap">
                        <Stack id={"top"}>
                            <Top />
                        </Stack>

                        <Stack id={"main"}>
                            <Component {...props} />
                        </Stack>

                        <Stack id={"footer"}>
                            <Footer />
                        </Stack>
                    </Stack>
                </>
            );
        }

        return (
            <>
                <Head>
                    <title>Nestar</title>
                </Head>
                <Stack id="pc-wrap">
                    <Stack id={"top"}>
                        <Top />
                    </Stack>

                    <Stack className={"header-main"}>
                        <Stack className={"container"}>
                            <HeaderFilter />
                        </Stack>
                    </Stack>

                    <Stack id={"main"}>
                        <Component {...props} />
                    </Stack>

                    <Stack id={"footer"}>
                        <Footer />
                    </Stack>
                </Stack>
            </>
        );
    };

    return LayoutMain;
};

export default withLayoutMain;