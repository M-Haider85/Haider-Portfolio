"use client";
import CountUp from "react-countup";
import { ReactNode } from "react";

// Define props for the Badge component
type BadgeProps = {
  containerStyles?: string; // Tailwind classes or other string-based styles
  icon?: ReactNode;         // Accepts any valid React element (icon)
  endCountNum: number;      // The number to count up to
  endCountText?: string;    // Optional text to display next to the count
  badgeText?: string;       // Optional additional badge text
};

export default function Badge({
  containerStyles ='',
  icon,
  endCountNum,
  endCountText='',
  badgeText=''}: BadgeProps ) {
  return (
    <div className={`badge ${containerStyles}`}>
    <div className="text-3xl text-primary">{icon}</div>
    <div className="flex items-center gap-x-2">
      <div className="text-4xl leading-none font-bold text-primary">
        <CountUp end={endCountNum} delay={1} duration={4} />
        {endCountText}
      </div>
      <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">{badgeText}</div>
    </div>
    </div>
  )
}
