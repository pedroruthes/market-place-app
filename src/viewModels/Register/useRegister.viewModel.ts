import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RegisterFormData, registerScheme } from "./register.schema";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      phone: "11111111111",
      confirmPassword: "123123",
      email: "teste@gmail.com",
      name: "Teste",
      password: "123123",
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;
    await userRegisterMutation.mutateAsync(registerData);
  });

  return { control, errors, onSubmit };
};
