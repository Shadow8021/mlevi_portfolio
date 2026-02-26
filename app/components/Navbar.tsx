import Contenaire from './Contenaire'
import Image from 'next/image'

export default function Navbar() {
    return (
        <Contenaire className='sticky left-0 top-0 w-full h-20 flex items-center justify-evenly bg-[#0a0b322e] '>
            <div><Image src={'/logo.png'} alt={'logo'} width={100} height={100} /></div>
        </Contenaire>
    )
}
