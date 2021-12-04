import { Button, Grid, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { FormikHelpers } from "formik";

import AuthLayout from "./AuthLayout";
import TextField from "../../FormsUI/TextField";
import { authManagerService } from "../../../Services/AuthManagerService";

const INITIAL_FORM_STATE = {
    email: "test@test.fr",
    username: "test1",
    password: "test12",
    "password-confirmation": "test12"
};

type FormType = typeof INITIAL_FORM_STATE;

const FORM_VALIDATION_SCHEMA = Yup.object().shape({
    email: Yup.string()
        .required()
        .email(),
    username: Yup.string()
        .required("Required")
        .min(5),
    password: Yup.string()
        .required("Required")
        .min(6),
    "password-confirmation": Yup.string()
        .required()
        .oneOf([ Yup.ref("password"), null ], "Passwords must match")
});

function SignUpFooter(): JSX.Element
{
    return (
        <>
            <Grid item>
                <RouterLink to="/signin">
                    <Link href="#" variant="body2">
                        Already have an account? Sign in
                    </Link>
                </RouterLink>
            </Grid>
        </>
    );
}

function SignUpForm(): JSX.Element
{
    return (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email address"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password-confirmation"
                label="Password confirmation"
                type="password"
                id="password-confirmation"
                autoComplete="current-password"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
        </>
    );
}

export default function SignUp(): JSX.Element
{
    const navigate = useNavigate();

    async function handleSubmit(values: FormType, actions: FormikHelpers<FormType>): Promise<void>
    {
        try
        {
            await authManagerService.signUp(values.email, values.username, values.password);

            navigate("/signin", {
                replace: true
            });
        }
        catch (error)
        {
            alert(error);
        }
    }

    return (
        <AuthLayout
            title="Sign Up"
            footer={<SignUpFooter />}
            form={<SignUpForm />}
            initialValues={INITIAL_FORM_STATE}
            validationSchema={FORM_VALIDATION_SCHEMA}
            onSubmit={handleSubmit}
        />
    );
}