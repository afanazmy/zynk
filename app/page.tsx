"use client";

import paths from "@/paths";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace(paths.signIn);
  }, []);
}
