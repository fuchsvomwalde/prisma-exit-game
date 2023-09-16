"use client";

import { Aid } from "@/app/api/_lib/model";
import { useReducer, useState } from "react";
import AnimatedType from "../AnimatedType";

interface AidAccordionProps {
  aids: Array<Aid>;
}

export default function AidAccordion({ aids }: AidAccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [revealedState, dispatch] = useReducer(
    (
      state: {
        [aidIndex: string]: {
          [messageIndex: string]: boolean;
        };
      },
      action: { aidIndex: string; messageIndex: string }
    ) => ({
      ...state,
      [action.aidIndex]: {
        ...state[action.aidIndex],
        [action.messageIndex]: true,
      },
    }),
    {}
  );

  return (
    <div id="accordion">
      {aids?.map((aid, aidIndex) => {
        const isFirst = aidIndex === 0;
        const isLast = aidIndex === aids.length - 1;
        const isExpanded = aidIndex === expandedIndex;
        const isCollapsed = !isExpanded;

        return (
          <>
            <h2
              key={`aid-${aidIndex}-heading`}
              id={`accordion-heading-${aidIndex}`}
            >
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border ${
                  isExpanded ? "border-b-0" : ""
                } ${!isFirst ? "border-t-0" : ""} border-gray-200 ${
                  isFirst ? "rounded-t-xl" : ""
                } ${
                  isLast && isCollapsed ? "rounded-b-xl" : ""
                } focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800`}
                data-accordion-target={`#accordion-body-${aidIndex}`}
                aria-expanded="true"
                aria-controls={`accordion-body-${aidIndex}`}
                onClick={() =>
                  setExpandedIndex(expandedIndex === aidIndex ? -1 : aidIndex)
                }
              >
                <span>{aid.title}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${
                    isExpanded ? "rotate-180" : ""
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              key={`aid-${aidIndex}-body`}
              id={`accordion-body-${aidIndex}`}
              className={isCollapsed ? "hidden" : ""}
              aria-labelledby={`accordion-heading-${aidIndex}`}
            >
              <div
                className={`p-5 border ${
                  isLast && isExpanded ? "rounded-b-xl" : ""
                } border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
              >
                {aid?.messages?.map((message, messageIndex) => {
                  const isRevealed =
                    revealedState?.[aidIndex]?.[messageIndex] === true;
                  const isNextMessageRevealed =
                    revealedState?.[aidIndex]?.[messageIndex + 1] === true;
                  const isFirstMessage = messageIndex === 0;
                  const isOnlyMessage = aid.messages.length === 1;
                  const hasNextMessage = messageIndex < aid.messages.length - 1;
                  const nextMessageIsLast =
                    messageIndex === aid.messages.length - 2;

                  function getButtonText() {
                    if (isOnlyMessage && !isRevealed) return "Show Clue";
                    if (isFirstMessage && !isRevealed) return "Show First Clue";
                    if (hasNextMessage && nextMessageIsLast)
                      return "Show Final Clue";
                    return "Show Next Clue";
                  }

                  function showRevealNextButton() {
                    if (isRevealed && hasNextMessage && !isNextMessageRevealed)
                      return true;
                    if (isFirstMessage && !isRevealed) return true;
                    return false;
                  }

                  return (
                    <div
                      key={`aid-${aidIndex}-message-${messageIndex}`}
                      className="mb-2 text-gray-500 dark:text-gray-400 flex flex-col gap-2 items-start"
                    >
                      {isRevealed && (
                        <div className="whitespace-pre-line mb-2">
                          {<AnimatedType message={message ?? ""} />}
                        </div>
                      )}
                      {showRevealNextButton() && (
                        <button
                          type="button"
                          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                          onClick={() =>
                            dispatch({
                              aidIndex: `${aidIndex}`,
                              messageIndex:
                                isFirstMessage && !isRevealed
                                  ? `${messageIndex}`
                                  : `${messageIndex + 1}`,
                            })
                          }
                        >
                          {getButtonText()}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
