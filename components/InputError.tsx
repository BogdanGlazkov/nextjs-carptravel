import React from "react";
import Image from "next/image";
import errorIcon from "@/public/images/error.svg";

export default function InputError({ text }: { text: string | undefined }) {
  return (
    <p className="flex items-center gap-[4px] justify-end">
      <Image
        src={errorIcon}
        alt="Error"
        width={18}
        height={18}
        aria-label="Error"
      />
      <span className="inputWarn">{text}</span>
    </p>
  );
}
