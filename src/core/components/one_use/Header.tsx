import {getTranslations} from 'next-intl/server';
import OpenDrawerButton from "@/core/components/one_use/header/OpenDrawerButton";
import NavItem from "@/core/components/one_use/header/NavItem";

export default async function Header() {
    const t = await getTranslations({ namespace: "Navigation" });
    return(
        <header
            className="fixed w-full py-6 px-5 text-lg bg-[#212121] bg-opacity-10 flex justify-center z-10 backdrop-blur-md">
            <div className='w-[80%] flex justify-between items-center'>
                <NavItem content={"Rusted.Cor"} url={"/"}/>
                <nav className="uppercase">
                    <ul>
                        <li><NavItem content={t("about")} url={"/about"}/></li>
                    </ul>
                </nav>
                <OpenDrawerButton/>
            </div>
        </header>
    )
}