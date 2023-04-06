"use client";

import { FC } from "react";
import { StyledHeader } from "../styled-components/styled-components";
import { Button, Grid, Typography } from "@mui/material";
import { LanguageSelector } from "../language-selector/language-selector";
import HomeIcon from "@mui/icons-material/Home";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <StyledHeader>
      <Grid
        sx={{ height: "inherit", px: 2 }}
        container
        alignItems="center"
        justifyContent="space-between"
        columnSpacing={2}
      >
        <Grid sx={{ width: "auto" }} container item columnSpacing={1} xs={3}>
          <Grid item>
            <Typography
              sx={{ fontFamily: "Comfortaa-Bold", color: "var(--white)" }}
              variant="h5"
            >
              Next 13
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontFamily: "Comfortaa-Bold",
                backgroundColor: "secondary.main",
                p: 0.5,
                borderRadius: "4px",
                color: "var(--white)",
              }}
              variant="h5"
              component="span"
            >
              i18n
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{ width: "auto" }} container columnSpacing={2}>
          <Grid item>
            <Button
              sx={{ fontFamily: "Comfortaa-Bold", color: "var(--white)" }}
              variant="text"
              startIcon={<HomeIcon sx={{ color: "var(--white)" }} />}
              onClick={() => router.push("/")}
            >
              {t("Home", { ns: "navigation-item" })}
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{ fontFamily: "Comfortaa-Bold", color: "var(--white)" }}
              variant="text"
              startIcon={<FormatItalicIcon sx={{ color: "var(--white)" }} />}
              onClick={() => router.push("/form")}
            >
              {t("Form", { ns: "navigation-item" })}
            </Button>
          </Grid>
        </Grid>
        <Grid sx={{ textAlign: "right" }} item xs={3}>
          <LanguageSelector />
        </Grid>
      </Grid>
    </StyledHeader>
  );
};
