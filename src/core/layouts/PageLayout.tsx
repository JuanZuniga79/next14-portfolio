import {ReactNode} from "react";
import Header from "@/core/components/one_use/Header";

export default function PageLayout({ children }: { children: ReactNode }) {
    return(
        <>
            <Header />
            <main className="flex flex-col justify-center w-[80%] z-0 gap-10 pb-10">
                {children}
            </main>
        </>
    )
}