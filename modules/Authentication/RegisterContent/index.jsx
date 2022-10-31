import { Button, Input } from "../../Forms";
import { AuthWrapper } from "../AuthWrapper";
import { useState } from "react";
import { AuthLinks } from "../AuthLinks";
import { CaptionWrapper } from "../CaptionWrapper";
import { useHttpServices } from "../hooks/useHttpServices";
import { Loader } from "../../../components/Helpers";

export const RegisterContent = ({ mainCaption = "", content = "" }) => {
  const [body, setBody] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const { postData, isLoading } = useHttpServices();
  const register = async (e) => {
    e.preventDefault();
    try {
      const data = await postData("/auth/user/register", body);
    } catch (error) {
      console.log(data);
    }
  };
  return (
    <AuthWrapper>
      <CaptionWrapper mainCaption={mainCaption} content={content} />
      <div>
        <AuthLinks active="register" />
      </div>
      <form onSubmit={register}>
        <Input
          placeholder="First Name"
          title="First Name"
          value={body.firstName}
          onChange={(e) => setBody({ ...body, firstName: e.target.value })}
        />
        <Input
          placeholder="Last Name"
          title="Last Name"
          value={body.lastName}
          onChange={(e) => setBody({ ...body, lastName: e.target.value })}
        />
        <Input
          placeholder="Email Adress"
          title="Email Adress"
          type="email"
          value={body.email}
          onChange={(e) => setBody({ ...body, email: e.target.value })}
        />
        <Input
          placeholder="Phone Number"
          title="Phone Number"
          type="tel"
          value={body.phone}
          onChange={(e) => setBody({ ...body, phone: e.target.value })}
        />
        <Input
          placeholder="Password"
          title="Password"
          type="password"
          value={body.password}
          onChange={(e) => setBody({ ...body, password: e.target.value })}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className={isLoading ? "opacity-80" : "opacity-100"}
        >
          {isLoading ? <Loader size={18} /> : <p>Register</p>}
        </Button>
      </form>
    </AuthWrapper>
  );
};
