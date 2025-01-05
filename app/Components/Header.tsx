import  {NAV_LINKS} from "@/app/lib/Data";
import Link from "next/link";
export default function Header(){
    return(
        <div>
            {NAV_LINKS.map((link)=>(
                <Link key={link.hash} href={`/${link.hash}`}>
                    <div> {link.name}</div> 
                </Link>
))}
        </div>
    )
}