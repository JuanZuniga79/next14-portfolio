export default function TimelineNode({children}:{children: React.ReactNode}) {
    return (
        <figure className="flex items-center justify-center rounded-full bg-indigo-800 p-1.5 w-[40px]">
            {children}
        </figure>)
}