import Contenaire from "./Contenaire"
import Image from "next/image"
export default function Hero() {
  return (
    <div className="bg-[#000420] h-screen text-white py-20">
      <Contenaire>
        <h1 className="text-4xl font-bold">Contactc LGC</h1>
        <p className="text-lg mt-4">We are a team of passionate developers creating amazing web experiences.</p>

      </Contenaire>
    </div>
  )
}
