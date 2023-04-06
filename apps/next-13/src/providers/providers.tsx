"use client";

import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "@/theme/theme";

export interface ProvidersProps extends PropsWithChildren {}

export const Providers: FC<ProvidersProps> = (props) => {
  return <ThemeProvider theme={appTheme}>{props.children}</ThemeProvider>;
};
