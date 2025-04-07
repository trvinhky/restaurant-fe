import cn from "@/utils/cn";
import { Caveat } from "next/font/google";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});

interface TitleProps {
    sub: string
    left: string
    right: string
}

const Title = ({ sub, left, right }: TitleProps) => {
    return (
        <div className='uppercase'>
            <p className='text-center text-gray-500'>{sub}</p>
            <h2 className={cn(
                'text-center mt-3 font-medium text-5xl',
                caveat.className
            )}>
                <span>{left}</span>
                <span className='text-red-700'> {right}</span>
            </h2>
        </div>
    )
}

export default Title