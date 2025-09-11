import BaseTitle from "../common/BaseTitle";
import BaseWrapped from "../common/BaseWrapped";
import TimeDisplay from "./TimeDisplay";
import { useState, useEffect } from "react";

const Bai_5 = () => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const ss = now.getSeconds().toString().padStart(2, "0");
            const mm = now.getMinutes().toString().padStart(2, "0");
            const hh = now.getHours().toString().padStart(2, "0");
            setTime(`${hh}:${mm}:${ss}`);
        };
        updateTime();

        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <BaseWrapped>
            <BaseTitle title="Bài 5" />
            <h1>Thời gian hiện tại</h1>
            <TimeDisplay time={time} />
        </BaseWrapped>
    );
};

export default Bai_5;
