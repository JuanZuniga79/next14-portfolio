'use server';

export default async function Service({title, description, children}: {title: string, description: string, children: React.ReactNode}){

    return(
        <li className="p-4 rounded-xl bg-slate-800 hover:bg-slate-900 flex flex-col gap-y-2">
            <figure className="p-2 rounded-full text-blue-400 bg-slate-700 w-fit">
                {children}
            </figure>
            <h4 className="text-2xl font-medium capitalize">{title}</h4>
            <p className="text-base font-light">
                {description}
            </p>
        </li>
    )
}