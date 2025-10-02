import './section-name.css'

type SectionNameProps = {
    section: string;
    className?: string;
}

export function SectionName({section, className} : SectionNameProps){

    return(
        <div className={`uppercase font-bold tracking-[0.15rem] w-fit section-name ${className}`}>
            {section}
        </div>
    )
}