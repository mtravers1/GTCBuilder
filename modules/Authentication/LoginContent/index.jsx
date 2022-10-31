import { Button, Input } from "../../Forms";
import { AuthWrapper } from "../AuthWrapper";
import { useState } from "react";
import { AuthLinks } from "../AuthLinks";
import { CaptionWrapper } from "../CaptionWrapper";
import { useHttpServices } from "../hooks/useHttpServices";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { routes } from "../../../constants/Routes";
import { useStore } from "../../../zustand/store";
import { Loader } from "../../../components/Helpers";

export const LoginContent = ({ mainCaption = "", content = "" }) => {
  const [email, setEmail] = useState("");
  const user = useStore((state) => state.user);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const body = { email, password };
  const { postData, isLoading } = useHttpServices();
  const login = async (e) => {
    e.preventDefault();
    const data = await postData("/auth/user/login", body);
    if (data.status === 200) {
      Cookie.set("token", data?.data?.token);
      Cookie.set("isAuth", true);
      router.push(routes.profile);
    }
  };
  return (
    <AuthWrapper>
      <CaptionWrapper mainCaption={mainCaption} content={content} />
      <div>
        <AuthLinks active="login" />
      </div>

      <form onSubmit={login}>
        <Input
          placeholder="Email Adress"
          title="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          title="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className={isLoading ? "opacity-80" : "opacity-100"}
        >
          {isLoading ? <Loader size={18} /> : <p>Login</p>}
        </Button>
      </form>
    </AuthWrapper>
  );
};
