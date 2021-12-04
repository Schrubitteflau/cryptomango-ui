import React from "react";

import { Container, createTheme, CssBaseline, Box, Avatar, Typography, Grid } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";

import * as Yup from "yup";
import { Form, Formik, FormikHelpers } from "formik";

import Copyright from "./Copyright";

// https://mui.com/getting-started/templates/sign-up/
// https://mui.com/getting-started/templates/sign-in/

const theme = createTheme();

interface IAuthLayoutProps<T>
{
    form: React.ReactNode;
    footer: React.ReactNode;
    title: string;
    initialValues: T;
    validationSchema: Yup.ObjectSchema<any>;
    onSubmit: (values: T, actions: FormikHelpers<T>) => void;
}

export default function AuthLayout<T>(props: IAuthLayoutProps<T>)
{
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ margin: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {props.title}
                    </Typography>

                    <Formik
                        initialValues={props.initialValues}
                        validationSchema={props.validationSchema}
                        onSubmit={props.onSubmit}
                    >
                        <Box sx={{ marginTop: 1 }}>
                            <Form noValidate>
                                {props.form}
                            </Form>

                            <Grid container>
                                {props.footer}
                            </Grid>
                        </Box>
                    </Formik>
                </Box>

                <Copyright sx={{ marginTop: 8, marginBottom: 4 }} />
            </Container>
        </ThemeProvider>
    );
}