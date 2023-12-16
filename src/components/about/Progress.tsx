import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
interface Props {
    title:string;
    percent:number
}
const Progress = ({title,percent}:Props) => {
    const [level,setLevel] = useState(0);
    const {ref,inView} = useInView();
    useEffect(()=>{
        if(inView){
            setLevel(percent)
        }else{
            setLevel(0)
        }
    },[inView,percent])
    return <div ref={ref} className="w-full my-2">
        <div className="flex my-2 items-center justify-between">
            <label className="font-medium text-secondary/75">{title}</label>{" "}
            <div className="text-third/50 mr-4">{level}%</div>
        </div>
        <div className="w-full h-3 shadow rounded-full overflow-hidden">
            <div style={{width:level+"%"}} className="h-full transition-all duration-1000 bg-primary rounded-full"></div>
        </div>
    </div>
}

export default Progress