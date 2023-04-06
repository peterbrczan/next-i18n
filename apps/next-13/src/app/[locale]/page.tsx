"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import { PageWrapper } from "@/app/components/page-wrapper/page-wrapper";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Home() {
  const router = useRouter();
  const homeT = useTranslations("Home");
  const navigationItemT = useTranslations("NavigationItem");

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
          {homeT("Internationalization in Next 12")}
        </Typography>
        <Typography sx={{ mb: 6, color: "var(--white)" }}>
          {homeT("Migrate from 12 to 13")}
        </Typography>
        <Box>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            startIcon={<FormatItalicIcon />}
            onClick={() => router.push("/form")}
          >
            {navigationItemT("Form")}
          </Button>
        </Box>
      </Stack>
    </PageWrapper>
  );
}
