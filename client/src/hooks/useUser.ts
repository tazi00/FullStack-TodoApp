import { useQuery } from "@tanstack/react-query";
import { fetchUserData } from "../services/authApi";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserData,
  });

  return {
    user,
    isLoading,
    isAuthenticated: user?.value?.role === "authenticated",
  };
}
