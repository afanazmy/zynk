import { useEffect } from "react";
import { PageHookParams } from "@/types/hooks";

export const usePage = ({ title }: PageHookParams) => {
  useEffect(() => {
    document.title = `${process.env.NEXT_PUBLIC_APP_NAME}${title ? ` - ${title}` : ""}`;
  }, [title]);
};
