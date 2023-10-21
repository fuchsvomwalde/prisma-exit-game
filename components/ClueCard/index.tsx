"use client";

import { Clue } from "@/app/api/_lib/model";
import { useState } from "react";
import AnimatedType from "../AnimatedType";
import Image from "next/image";

export interface ClueCardProps {
  clue: Clue;
}

export default function ClueCard({ clue }: ClueCardProps) {
  return (
    <div className="w-full text-left p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white font-mono">
        {clue.title}
      </h5>
      {clue.description && (
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {clue.description}
        </p>
      )}
      <ClueCardContent clue={clue} />
    </div>
  );
}

function ClueCardContent({ clue }: ClueCardProps) {
  const [revealed, setRevealed] = useState(false);

  if (clue?.link)
    return (
      <a
        href={clue?.link}
        target="_blank"
        className="inline-flex items-center text-blue-600 hover:underline"
        rel="noreferrer noopener"
      >
        Reveal
        <svg
          className="w-3 h-3 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    );
  if (clue?.text)
    return (
      <>
        {!revealed && (
          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            onClick={() => setRevealed(true)}
          >
            Reveal
          </button>
        )}
        {revealed && <AnimatedType message={clue?.text ?? ""} />}
      </>
    );
  if (clue?.video)
    return (
      <>
        {!revealed && (
          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            onClick={() => setRevealed(true)}
          >
            Reveal
          </button>
        )}
        {revealed && (
          <div className="flex flex-col gap-4 items-start">
            <video className="w-full" controls playsInline>
              <source src={clue?.video?.src} type={clue?.video?.type} />
              {clue?.video?.fallback &&
                clue?.video?.fallback?.map(({ src, type }) => (
                  <source key={src} src={src} type={type} />
                ))}
              Your browser does not support the video tag.
            </video>
            <p className="text-mono text-xs text-gray-800 dark:text-gray-200">
              Video streaming is currently not supported for all browsers. If
              the video does not play, download the file.
            </p>
            {clue?.video?.download && (
              <a href={clue?.video?.src} download={clue?.video?.download}>
                <button
                  type="button"
                  className="border border-gray-800 hover:bg-gray-900 dark:border-gray-600 dark:hover:bg-gray-600 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-3.5 h-3.5 mr-2 rotate-90"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                  Download
                </button>
              </a>
            )}
          </div>
        )}
      </>
    );
  if (clue?.audio)
    return (
      <>
        {!revealed && (
          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            onClick={() => setRevealed(true)}
          >
            Reveal
          </button>
        )}
        {revealed && (
          <div className="flex flex-col gap-4 items-start">
            <audio className="w-full" controls>
              <source src={clue?.audio?.src} type={clue?.audio?.type} />
              Your browser does not support the audio tag.
            </audio>
            {clue?.audio?.download && (
              <a href={clue?.audio?.src} download={clue?.audio?.download}>
                <button
                  type="button"
                  className="border border-gray-800 hover:bg-gray-900 dark:border-gray-600 dark:hover:bg-gray-600 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-3.5 h-3.5 mr-2 rotate-90"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                  Download
                </button>
              </a>
            )}
          </div>
        )}
      </>
    );
  if (clue?.image)
    return (
      <>
        {!revealed && (
          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            onClick={() => setRevealed(true)}
          >
            Reveal
          </button>
        )}
        {revealed && (
          <div className="flex flex-col gap-4 items-start">
            <Image
              className="h-auto max-w-full rounded-lg"
              alt="clue in image"
              {...clue?.image}
            />
            {clue?.image?.download && (
              <a href={clue?.image?.src} download={clue?.image?.download}>
                <button
                  type="button"
                  className="border border-gray-800 hover:bg-gray-900 dark:border-gray-600 dark:hover:bg-gray-600 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-3.5 h-3.5 mr-2 rotate-90"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                  Download
                </button>
              </a>
            )}
          </div>
        )}
      </>
    );
  return "...";
}
