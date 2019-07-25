// import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default (initialValue) => {
    return useLocalStorage("dark", initialValue);
};