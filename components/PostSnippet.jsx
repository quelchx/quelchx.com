import Link from "next/link";
import Tag from "./Tag";

export default function PostSnippet({ title, desc, link, image, date, tag }) {
  return (
    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
      <Link href={`/posts/${link}`}>
        <a className="block">
          <img
            className="object-cover shadow-xl w-full mb-2 overflow-hidden rounded-lg hvr-buzz-out max-h-56"
            src={image}
          />
        </a>
      </Link>
      <Tag tag={tag} color="bg-green-600" />
      <h2 className="text-lg font-bold sm:text-xl md:text-2xl">{title}</h2>
      <p className="text-sm text-gray-500">{desc}</p>
      <p className="pt-2 text-xs font-medium">
        <a href="#_" className="mr-1 underline">
          By: Eric Quelch
        </a>{" "}
        · <span className="mx-1">{new Date(date).toDateString()}</span> ·{" "}
        <Link href={`/posts/${link}`}>
          <span className="hvr-buzz-out pb-0.5 mx-1 hover:cursor-pointer text-gray-800 dark:text-green-600">
            Read
          </span>
        </Link>
      </p>
    </div>
  );
}
