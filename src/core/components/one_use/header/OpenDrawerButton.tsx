'use client';
import { RiMenuFill } from "react-icons/ri";
import SidebarStore from "@/core/store/SidebarStore";

export default function OpenDrawerButton(){

    const {setActive} = SidebarStore();

    return(
        <>
            <button
                onClick={()=> {
                    setActive(true);
                    document.getElementById("sidebar")?.classList.remove("hidden");
                }}
                className="bg-slate-800 hover:bg-slate-600 outline-none rounded-full p-1 transition-colors duration-300">
                <RiMenuFill size={28} className="p-1"/>
            </button>
        </>
    )
}