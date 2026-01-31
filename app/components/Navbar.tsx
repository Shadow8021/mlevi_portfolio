import Contenaire from './Contenaire'
import Image from 'next/image'

export default function Navbar() {
    return (
        <Contenaire className='stiky top-0 left-0 bg-red-400'>
            <div><Image src={'/logo.png'} alt={'logo'} width={70} height={70} /></div>
        </Contenaire>
    )
}
