"use client";

import { FC, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export interface LanguageSelectorProps {}

export const LanguageSelector: FC<LanguageSelectorProps> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();

  const languageItems = useMemo(
    () => [
      {
        languageText: t("hu", { ns: "language" }),
        icon: (
          <Image
            src="/icons/hungary.svg"
            alt="hungarian"
            width={16}
            height={16}
          />
        ),
        languageCode: "hu",
      },
      {
        languageText: t("en", { ns: "language" }),
        icon: (
          <Image
            src="/icons/united-kingdom.svg"
            alt="english"
            width={16}
            height={16}
          />
        ),
        languageCode: "en",
      },
    ],
    [t]
  );

  function handleOpen(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClick(languageCode: string) {
    // router.push(router.asPath, router.asPath, { locale: locale });
    handleClose();
  }

  const currentLanguageItem = languageItems.find(
    (languageItem) => languageItem.languageCode === locale
  );

  return (
    <>
      <Menu
        sx={{ zIndex: 11 }}
        id="language-selector-menu"
        anchorEl={anchorEl}
        open={isOpen}
        keepMounted
        disableScrollLock
        onClose={handleClose}
      >
        {languageItems.map((languageItem) => (
          <MenuItem
            key={languageItem.languageText}
            selected={languageItem.languageCode === locale}
            dense
            onClick={() => handleClick(languageItem.languageCode)}
          >
            <ListItemIcon>{languageItem.icon}</ListItemIcon>
            <ListItemText>
              <Typography color="primary" variant="body2">
                {languageItem.languageText}
              </Typography>
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
      <IconButton onClick={handleOpen}>{currentLanguageItem?.icon}</IconButton>
    </>
  );
};
