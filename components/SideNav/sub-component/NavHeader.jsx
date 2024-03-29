import React from "react";
import Link from "next/link";

export default function NavHeader() {
  return (
    <div
      id="nav-header"
      className="sticky top-0 left-0 border-b-2 border-border-1 flex justify-center w-full"
    >
      <div className="flex flex-col py-7 gap-1">
        <div
          id="sortopia-version"
          className="sortopia-version text-text-2 font-space text-xs transition-all ease-in-out text-center md:text-left"
        >
        </div>
        <div className="font-unica text-text-1 text-[3.5rem] leading-[3.5rem]">
          <Link href="/">
            <span>Sortopia</span>
          </Link>
        </div>
        <div className="text-text-2 font-space text-xs text-center md:text-left">
        A Visual Sorting Adventure
        </div>
      </div>
    </div>
  );
}
