'use client';
import {FC, PropsWithChildren} from "react";
import {TopBarParams} from "../interfaces.ts";
import React from 'react'

export const TopBar: FC<PropsWithChildren<TopBarParams>> = props => {
    return (
        <>
            <div className={"w-full " + (props.color === "gray-1" ? "bg-custom-gray-1" : "bg-gradient-to-b from-black to-transparent" + " h-24")} >
                <div className="flex items-center justify-center p-5">
                    <div>
                        <img src="icon.png" alt="logo" className={"h-14"}/>
                    </div>
                    <div className={"font-bold text-4xl ml-3"}>Cuby</div>
                </div>
            </div>
        </>
    );
};