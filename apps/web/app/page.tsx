'use client'
import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import {InputBox} from "@repo/ui/input-box"
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  return (
    <div>
      <InputBox placeholder="Enter Room Name" size="big"></InputBox>
      <button onClick={()=>{
        router.push('/chat/123')
      }}>Join Room</button>
    </div>
  );
}
