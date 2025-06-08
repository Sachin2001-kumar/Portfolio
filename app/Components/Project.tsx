import { ProjectData } from "@/app/lib/Data";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

type ProjectProps = (typeof ProjectData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  github,
  liveUrl,
}: ProjectProps) {
  return (
    <div className="flex flex-col sm:items-center items-start sm:p-8 p-2 w-11/12 md:w-auto snap-center sm:snap-none hover:bg-blue-100 max-w-[42rem] border border-black/5 mb-4 mx-auto">
      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        priority
        className="hidden sm:block rounded-t-lg shadow-2xl transition hover:scale-[1.04] hover:-translate-x-3 hover:translate-y-3 hover:-rotate-2"
      />
      <div className="text-left items-start pt-1 sm:pt-3 w-full">
        <div className="flex justify-between">
          <p className="mb-2 font-bold underline underline-offset-4">{title}</p>
          <div className="flex justify-between space-x-4 items-center">
            <Link
              className="text-gray-900 flex items-center text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
              href={github}
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
              className="text-gray-900 flex items-center text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
              href={liveUrl}
              target="_blank"
            >
              <ExternalLink />
            </Link>
          </div>
        </div>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="pt-2 md:w-96 lg:w-[450px] font-semibold">{description}</p>
      </div>
    </div>
  );
}
