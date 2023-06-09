import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Api } from "./common/api";

export const api = new Api("http://127.0.0.1:3000");
export const SCHEDULE_ITEM_KIND_CYCLIC_VALUE = 0;
export const SCHEDULE_ITEM_KIND_SINGLE_ABSENCE_VALUE = 1;
export const SCHEDULE_ITEM_KIND_SINGLE_PRESENCE_VALUE = 2;
export const SCHEDULE_ITEM_KIND_CYCLIC_LABEL = "Cykliczne godziny pracy";
export const SCHEDULE_ITEM_KIND_SINGLE_ABSENCE_LABEL = "Dzień wolny od pracy";
export const SCHEDULE_ITEM_KIND_SINGLE_PRESENCE_LABEL = "Dodatkowy dzień pracy";
export const SCHEDULE_ITEM_KIND_MAP = [
    {SCHEDULE_ITEM_KIND_CYCLIC_LABEL: SCHEDULE_ITEM_KIND_CYCLIC_VALUE},
    {SCHEDULE_ITEM_KIND_SINGLE_ABSENCE_LABEL: SCHEDULE_ITEM_KIND_SINGLE_ABSENCE_VALUE},
    {SCHEDULE_ITEM_KIND_SINGLE_PRESENCE_LABEL: SCHEDULE_ITEM_KIND_SINGLE_PRESENCE_VALUE}
]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
