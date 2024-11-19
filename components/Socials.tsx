"use client"

import { 
    RiYoutubeFill,
    RiLinkedinFill,
    RiGithubFill,
    RiFacebookFill,
    RiInstagramFill
 } from "react-icons/ri";

 import Link from "next/link";

 import React from 'react'


 // Define props type
type SocialsProps = {
    containerStyles?: string; // Optional container styles
    iconsStyles?: string;     // Optional icon styles
  };

 const icons = [
    {
        path: '/',
        name: <RiYoutubeFill/>
    },
    {
        path: '/',
        name: <RiLinkedinFill/>
    }, 
    {
        path: '/',
        name: <RiGithubFill/>
    }, 
    {
        path: '/',
        name: <RiFacebookFill/>
    }, 
    {
        path: '/',
        name: <RiInstagramFill/>
    },
 ]


export default function Socials({containerStyles='', iconsStyles=''}:SocialsProps) {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon, index) => {
            return (
                <Link href={icon.path} key={index}>
                <div className={`${iconsStyles}`}>{icon.name}</div>
                </Link>
            )
        })}
    </div>
  )
}
