import React from "react";
import Typography from "@/components/ui/typography";
import LinkFormInput from "./components/link-form-input";
import RetroGrid from "@/components/ui/retro-grid";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-screen max-w-6xl p-6">
      <div className="absolute top-12 rounded-full h-12"></div>

      <div className="flex flex-col gap-6 text-center mt-10 mb-6 z-50">
        <Typography.H1 className="font-semibold">
          Simply Shorten
          <br />
          Your Long URL for Free
        </Typography.H1>

        <Typography.P className="max-w-2xl opacity-65 text-sm">
          Our free URL shortening service helps you create easy-to-share links
          in seconds. Shorten any long URL and track its usage effortlessly.
        </Typography.P>
        <LinkFormInput />
      </div>

      <RetroGrid />
      <Typography.P className="absolute bottom-12 opacity-55 text-xs">
        made by xyzuan
      </Typography.P>
    </div>
  );
}
