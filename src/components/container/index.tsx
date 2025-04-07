import { ReactNode } from "react"

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="py-15">
            <div className="mx-auto container grid grid-cols-5 min-h-[60vh]">
                {children}
            </div>
        </div>
    )
}

export default Container