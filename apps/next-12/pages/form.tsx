import { PageWrapper } from "../components/page-wrapper/page-wrapper";
import { Button, Stack, TextField, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { GetStaticProps } from "next";
import { i18n, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useForm } from "react-hook-form";
import { useValidator } from "../hooks/use-validator";

export default function Form() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const { t } = useTranslation();
  const validator = useValidator();

  function onSubmit(formValue: {
    firstName: string;
    lastName: string;
    email: string;
  }) {
    console.log(
      "%c [form.tsx:17] formValue ",
      "background: #011c22; color: #62ffc5",
      formValue
    );
  }

  return (
    <PageWrapper rightRailImageSrc="https://images.unsplash.com/photo-1540198163009-7afda7da2945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80">
      <form style={{ height: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <Stack sx={{ height: "100%" }} justifyContent="center">
          <Typography
            sx={{ fontFamily: "Comfortaa-Bold", color: "var(--white)", mb: 6 }}
            variant="h4"
            textAlign="left"
          >
            {t("Form", { ns: "navigation-item" })}
          </Typography>
          <Stack sx={{ mb: 4 }} spacing={2}>
            <TextField
              {...register("firstName", {
                validate: {
                  required: validator.required,
                  minCharacters: (value: string) =>
                    validator.minCharacters(value, 3),
                },
              })}
              label={t("First name", { ns: "form" })}
              error={Boolean(errors.firstName)}
              helperText={errors?.firstName?.message as string}
              variant="filled"
              fullWidth
            />
            <TextField
              {...register("lastName", {
                validate: {
                  required: validator.required,
                  minCharacters: (value: string) =>
                    validator.minCharacters(value, 3),
                },
              })}
              label={t("Last name", { ns: "form" })}
              error={Boolean(errors.lastName)}
              helperText={errors?.lastName?.message as string}
              variant="filled"
              fullWidth
            />
            <TextField
              {...register("email", {
                validate: {
                  required: validator.required,
                  minCharacters: (value: string) =>
                    validator.minCharacters(value, 3),
                  email: validator.email,
                },
              })}
              label={t("Email", { ns: "form" })}
              error={Boolean(errors.email)}
              helperText={errors?.email?.message as string}
              variant="filled"
              fullWidth
            />
          </Stack>
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Button
              type="submit"
              color="success"
              variant="contained"
              size="large"
              startIcon={<CheckIcon />}
            >
              {t("Success", { ns: "common" })}
            </Button>
          </Stack>
        </Stack>
      </form>
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
        "form",
        "common",
        "navigation-item",
        "alert",
      ])),
    },
  };
};
