import Contenaire from './Contenaire'
import Image from 'next/image'

export default function Navbar() {
    return (
        <Contenaire className='p-3'>
            <div><Image src={'/logo.png'} alt={'logo'}/></div>
        </Contenaire>
    )
}
