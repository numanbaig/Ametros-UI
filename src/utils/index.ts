// forms Data

type FormFieldType = "text" | "password";

interface FormField {
  id: number;
  name: string;
  type: FormFieldType;
  label: string;
}

export const registerFormData: FormField[] = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    label: "Full Name",
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    label: "Last Name",
  },
  {
    id: 3,
    name: "registrationCode",
    type: "text",
    label: "Registration Code",
  },
  {
    id: 4,
    name: "email",
    type: "text",
    label: "Email",
  },
  {
    id: 5,
    name: "password",
    type: "password",
    label: "Create Password",
  },
  {
    id: 6,
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
  },
];

export const LoginFormData: FormField[] = [
  {
    id: 1,
    name: "email",
    type: "text",
    label: "Email",
  },
  {
    id: 2,
    name: "password",
    type: "password",
    label: "Password",
  },
];

export const ForgotPasswordFormData: FormField[] = [
  {
    id: 1,
    name: "email",
    type: "text",
    label: "Email",
  },
];
