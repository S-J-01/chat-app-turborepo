import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import {InputBox} from "@repo/ui/input-box"


export default function Home() {
  return (
    <div>
      <InputBox placeholder="Enter Room Name"></InputBox>
    </div>
  );
}
