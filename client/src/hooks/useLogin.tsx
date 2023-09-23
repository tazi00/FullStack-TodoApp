import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginCredentials, login } from "../services/authApi";
import { useLoginModal } from "../store";
import { setDataToLocalStore } from "../BrowserData/localStore";

export function useLogin() {
  const closeLoginModal = useLoginModal((state) => state.closeModal);
  const queryClient = useQueryClient();
  const {
    mutate: todoLogin,
    isLoading,
    error,
    isSuccess,
    data,
  } = useMutation({
    mutationFn: (credentials: LoginCredentials) => login(credentials),
    onSuccess: (data) => {
      console.log("Login successful!", data);

      const user = {
        userName: data.userInfo.name,
        email: data.userInfo.email,
        img: data.userInfo.img,
        id: data.userInfo.id,
        token: data.userInfo.token,
        role: data.userInfo.role,
      };
      closeLoginModal();
      queryClient.setQueriesData(["user"], user);
      setDataToLocalStore("user", { value: user });
      setDataToLocalStore("token", { value: data.userInfo.token });
    },
  });

  return { data, todoLogin, isSuccess, isLoading, error };
}
