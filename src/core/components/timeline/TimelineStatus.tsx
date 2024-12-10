import {getTranslations} from "next-intl/server";

export default async function TimelineStatus({endDate}:{endDate: string | null}) {
    const i = await getTranslations({namespace: "Info"});
    return (
        <div className={`absolute top-4 right-4 rounded-xl px-4 py-0.5 ${endDate !== null ? 'bg-green-700' : 'bg-indigo-700'}`}>
            {endDate !== null ?
                (<span className='text-green-300'>{i('done')}</span>)
                :
                (<span className="text-indigo-300">{i('undone')}</span>)}
        </div>
    )
}