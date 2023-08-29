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
            {!customIcon && <>&lt;-</>}
            {customIcon}
          </span>
        )}
        {back && " "}
        {title}
        {!back && " "}
        {!back && (
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            {!customIcon && <>-&gt;</>}
            {customIcon}
          </span>
        )}
      </h2>
      <p className={`m-0 mx-auto max-w-[30ch] text-sm opacity-50`}>{subline}</p>
    </a>
  );
}
