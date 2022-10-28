import { Button, Input } from "../../Forms";
import { AuthWrapper } from "../AuthWrapper";
import { useState } from "react";
import { AuthLinks } from "../AuthLinks";
import { CaptionWrapper } from "../CaptionWrapper";
import { useHttpServices } from "../hooks/useHttpServices";

export const LoginContent = ({ mainCaption = "", content = "" }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const body = { email, password };
  const { postData, isLoading } = useHttpServices();
  const login = async (e) => {
    e.preventDefault();
    const data = await postData("/admin/login", body);
  };
  return (
    <AuthWrapper containerStyle={{ minHeight: "70vh" }}>
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
        <Button title="Login" type="submit" />
      </form>
    </AuthWrapper>
  );
};
