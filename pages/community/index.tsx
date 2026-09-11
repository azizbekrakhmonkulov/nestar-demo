import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { useState } from "react";

const Community = () => {
    console.log("community component pages router");

    const [title, setTitle] = useState<string>("hello");
    return (
        <div>
            Community{""}
            <button onClick={() => alert("hello Mit")} style={{ margin: "15px" }}>
                press me
            </button>
        </div>
    );
};

export default withLayoutBasic(Community);