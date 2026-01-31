import { ReactNode } from "react"
type ContenaireProps = {
    children: ReactNode;
    className?: string;
}
export default function Contenaire({ children, className }: ContenaireProps) {
    return (
        <div className={`mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20 ${className ?? ""}`}>{children}</div>
    )
}
