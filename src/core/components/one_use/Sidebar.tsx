'use client';
import SidebarStore from "@/core/store/SidebarStore";
import styled from "styled-components";
import {MdClose} from "react-icons/md";
import {ReactNode} from "react";

const SidebarContent = styled.div`
    animation: moveLeft 0.5s ease-in-out forwards;
    box-shadow: -10px 0 15px #212121;
`

const SidebarClose = styled.button`
    animation: appear 1s ease-in-out forwards;
`

export default function Sidebar({children}: {children: ReactNode}) {

    const {active, setActive} = SidebarStore();

    return(
        <div id="sidebar"
             className="hidden bg-opacity-5 fixed top-0 w-dvw h-dvh bg-[#212121] z-50 backdrop-blur-md">
            {active && (
                <>
                    <SidebarClose onClick={()=> {
                        document.getElementById("sidebar")?.classList.toggle("hidden");
                        setActive(false);
                    }}
                        className="absolute right-[22%] outline-none top-1/2 text-white bg-[#1A1A1A] p-4 rounded-full">
                        <MdClose size={32}/>
                    </SidebarClose>
                    <SidebarContent
                        className="w-[20%] absolute top-0 right-0 h-full bg-[#1A1A1A] z-10 transition-all">
                        {children}
                    </SidebarContent>
                </>
            )}
        </div>
    )
}