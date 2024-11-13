'use client';
import {NavButton} from "@/core/components/styled/NavButton";
import {Link} from "@/i18n/routing";

export default function NavItem({content, url}:{content: string, url: string}) {
    return(
        <NavButton className="NavButton after:bg-indigo-400 font-medium dark:text-white uppercase text-base px-2">
            <Link href={url}>
                {content}
            </Link>
        </NavButton>
    )
}