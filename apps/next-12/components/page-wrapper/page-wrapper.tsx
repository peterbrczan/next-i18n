import { FC, PropsWithChildren } from "react";
import { Avatar, Box, Grid } from "@mui/material";

export interface PageWrapperProps extends PropsWithChildren {
  rightRailImageSrc: string;
}

export const PageWrapper: FC<PageWrapperProps> = (props) => {
  return (
    <Box
      sx={{
        height: "100%",
        background:
          "linear-gradient(93deg, rgba(38,25,110,1) 0%, rgba(19,15,40,1) 100%)",
      }}
    >
      <Grid sx={{ height: "100%" }} container>
        <Grid sx={{ pt: "var(--header-height)", px: 4, pb: 4 }} item xs={6}>
          {props.children}
        </Grid>
        <Grid sx={{ height: "100%" }} item xs={6}>
          <Avatar
            sx={{ width: "100%", maxHeight: "100%", height: "100%" }}
            variant="square"
            src={props.rightRailImageSrc}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
