import Image from "next/image"
import style from "./Topo.module.css"
import Logo from '/public/vercel.svg'

export default function Topo(){
    return(
        <div className={style.top}>
            <Image src={Logo} alt="Vercel Logo" height={50}/>
            <h1>Topo</h1>
        </div>
    )
}