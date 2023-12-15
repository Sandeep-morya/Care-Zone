

interface Props{
    title:string
}

const FooterHeading = ({title}:Props) => {
    return <div className='w-[160px]'>
        <h2 className='font-semibold text-xl'>{title}</h2>
        <div className='w-full h-[2px] bg-primary my-4'></div>
    </div>
}

export default FooterHeading