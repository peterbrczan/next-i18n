import type { GetStaticProps } from "next";
import { Box, Button, Stack, Typography } from "@mui/material";
import { PageWrapper } from "../components/page-wrapper/page-wrapper";
import { useRouter } from "next/router";
import { i18n, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <PageWrapper rightRailImageSrc="https://images.unsplash.com/photo-1537429149818-2d0e3e20857b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80">
      <Stack sx={{ height: "100%" }} justifyContent="center">
        <Typography
          sx={{
            color: "var(--white)",
            fontSize: "3rem",
            fontFamily: "Comfortaa-Bold",
            wordWrap: "break-word",
          }}
        >
          {t("Internationalization in Next 12", { ns: "home" })}
        </Typography>
        <Typography sx={{ mb: 6, color: "var(--white)" }}>
          {t("Migrate from 12 to 13", { ns: "home" })}
        </Typography>
        <Box>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            startIcon={<FormatItalicIcon />}
            onClick={() => router.push("/form")}
          >
            {t("Form", { ns: "navigation-item" })}
          </Button>
        </Box>
      </Stack>
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const languageCode = locale || "en";

  if (process.env.NODE_ENV === "development") {
    await i18n?.reloadResources();
  }

  return {
    props: {
      ...(await serverSideTranslations(languageCode, [
        "language",
        "navigation-item",
        "home",
      ])),
    },
  };
};
