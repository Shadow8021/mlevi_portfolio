import Contenaire from "./Contenaire"
import Link from "next/link"
export default function Navbar() {
    const items = [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Services", href: "#" },
        { name: "Contact", href: "#" }
    ]
  return (
    <nav className="border-b border-gray-50  w-full h-20">
      <Contenaire className="flex items-center justify-between py-5">
        <Link href={"/"} className="text-2xl font-bold">LGC</Link>
        <ul className="flex items-center justify-evenly gap-5">
            <Contenaire className="flex justify-evenly w-150 gap-2">
                {items.map((item) => (
                <li key={item.name}>
                    <Link href={item.href} className="text-gray-600 font-bold text-md transition ease-in-out hover:text-white">
                        {item.name}
                    </Link>
                </li>
            ))}
            </Contenaire>
        </ul>
      </Contenaire>
    </nav>
  )
}
