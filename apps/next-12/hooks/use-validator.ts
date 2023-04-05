import { useTranslation } from "next-i18next";
import { SafeParseReturnType, z } from "zod";
import { useMemo } from "react";

function handleZodResult<T, D>(result: SafeParseReturnType<T, D>) {
  if (result.success) {
    return true;
  }

  return result.error.format()._errors[0];
}

export function useValidator() {
  const { t, i18n } = useTranslation();

  return useMemo(
    () => ({
      required: (value: string) => {
        const result = z
          .string()
          .nonempty(
            t("The input field cannot be empty!", { ns: "alert" }) ?? ""
          )
          .safeParse(value);
        return handleZodResult(result);
      },
      minCharacters: (value: string, minCharacters: number) =>
        (value.length > minCharacters ||
          t("The value must be longer then minimum characters!", {
            ns: "alert",
            minCharacters,
          })) ??
        "",
      email: (value: string) => {
        const result = z
          .string()
          .email("The email's format is invalid!")
          .safeParse(value);
        return handleZodResult(result);
      },
    }),
    [t]
  );
}
