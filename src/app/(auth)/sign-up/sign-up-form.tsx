"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpDefaultFormValues } from "@/lib/constants/defaultFormValues";
import Link from "next/link";
import { signUpUser } from "@/lib/actions/user.actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";

const SignUpForm = () => {
  const { pending } = useFormStatus();
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            defaultValue={signUpDefaultFormValues.name}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            defaultValue={signUpDefaultFormValues.email}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={signUpDefaultFormValues.password}
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            autoComplete="confirmPassword"
            defaultValue={signUpDefaultFormValues.confirmPassword}
          />
        </div>
        <div>
          <Button disabled={pending} className="w-full" variant="default">
            {pending ? "Submitting..." : "Sign up"}
          </Button>
        </div>
        {data && !data.success && (
          <p className="text-center text-destructive text-xs">{data.message}</p>
        )}
        <div className="text-sm text-center text-muted-foreground">
          Already have an account? {""}
          <Link
            href="/sign-in"
            target="_self"
            className="link cursor-pointer text-blue-600"
          >
            Sign in
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
