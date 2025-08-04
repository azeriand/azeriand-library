
type AvatarProps = {
    src: string;
    className?: string;
    style?: React.CSSProperties;
}

export function Avatar({ src, className = '', style }: AvatarProps){
    return(
        <img className={`size-[3rem] rounded-2xl ${className}`} 
        src={src} 
        style={style}/>
    )
}