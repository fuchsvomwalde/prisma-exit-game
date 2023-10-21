import { ReactNode } from "react";

export default function NavTile({
  href,
  title,
  subline,
  back,
  customIcon,
}: {
  href: string;
  title: string;
  subline: string;
  back?: boolean;
  customIcon?: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-mono font-semibold`}>
        {back && (
          <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
            {!customIcon && (
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <title>arrow-left</title>
                <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
              </svg>
            )}
            {customIcon}
          </span>
        )}
        {back && " "}
        {title}
        {!back && " "}
        {!back && (
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            {!customIcon && (
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <title>arrow-right</title>
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
              </svg>
            )}
            {customIcon}
          </span>
        )}
      </h2>
      <p className={`m-0 mx-auto max-w-[30ch] text-sm opacity-50`}>{subline}</p>
    </a>
  );
}
