import { Box, Card, styled } from "@mui/material";

export const StyledHeader = styled(Card)(({ theme }) => ({
  position: "fixed",
  top: 0,
  zIndex: 9,
  width: "100%",
  height: "var(--header-height)",
  background: theme.palette.primary.main,
  borderRadius: 0,
  borderBottom: "1px solid var(--white)",
}));
