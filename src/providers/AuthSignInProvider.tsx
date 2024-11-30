import GradientCircularProgress from "@/components/shared/Loader";
import { useAuthenticatedUser } from "@/hooks/auth/useAuthenticatedUser";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthSignInProvider = ({ children }: { children: React.ReactNode }) => {
  const { firstLoading, user } = useAuthenticatedUser();
  const router = useRouter();

  useEffect(() => {
    if (!firstLoading && user) {
      router.push("/");
    }
  }, []);

  if (firstLoading) {
    return (
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <GradientCircularProgress />
      </Box>
    );
  }

  return <div>{children}</div>;
};

export default AuthSignInProvider;