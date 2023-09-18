import { isBrowser } from "@/utils/env";
import { get } from "radash";
import { useMemo } from "react";

export interface I18nLocaleTextBundle {
  [key: string]: string | I18nLocaleTextBundle;
}

const warnedOnce: Record<string, boolean> = {};

const _applyVariables = (
  translation: string,
  variables: Record<string, string>
) => {
  if (!variables) return translation;
  return Object.entries(variables ?? {}).reduce(
    (translation, [variable, value]) =>
      translation.replaceAll(`{{${variable}}}`, value),
    translation
  );
};

const _translate =
  (messages: I18nLocaleTextBundle) =>
  (key: string | string[], variables: Record<string, string> = {}) => {
    const keySequence = Array.isArray(key) ? key : [key];

    for (const key of keySequence) {
      const translation = get(messages, key, undefined);

      if (!translation) {
        // if key is not the last key in the sequence, continue with next key
        const isLastKeyInSequence = key === keySequence[keySequence.length - 1];
        if (!isLastKeyInSequence) continue;

        // print missing translation
        if (!warnedOnce[key] && isBrowser()) {
          console.warn(`😱 Missing translation for ${key}`);
          warnedOnce[key] = true;
        }
        return key;
      }

      return _applyVariables(translation, variables);
    }

    // print missing translation
    if (isBrowser()) {
      console.error(`😱 No translation keys passed to translate function.`);
    }
    return "";
  };

export const useTranslation = (messages: I18nLocaleTextBundle) => {
  const t = useMemo(() => _translate(messages), [messages]);

  return { t };
};

export const serverTranslation = async (
  messageLoader: (locale: string) => Promise<I18nLocaleTextBundle>,
  locale: string
) => {
  const messages = await messageLoader(locale);
  const t = _translate(messages);

  return { t };
};
