import { useContext } from "react";
import { useNavigate } from "react-router";
import { LoginContext } from "../context/loginContext";
import {Card,CardHeader,CardTitle,CardContent,CardFooter,} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Field,FieldGroup,FieldLabel} from "@/components/ui/field";

const LoginView = () => {
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-20">
      <Card className="w-[350px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Admin Login</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup className="space-y-4">
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input id="username" defaultValue="admin" required />
              </Field>


              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  defaultValue="password"
                  required
                />
              </Field>

              <Button type="submit" className="w-full mt-2">
                Login
              </Button>
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter>
          <Button variant="outline" className="w-full">
            Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export { LoginView };
