import MainWrapper from "./component/main/main";
import "./global.css";
import { Toaster } from "react-hot-toast";

export default function Page() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <MainWrapper />
    </>
  );
}
