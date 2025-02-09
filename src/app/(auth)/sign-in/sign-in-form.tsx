"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultFormValues } from "@/lib/constants/defaultFormValues";
import Link from "next/link";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";

const SignInForm = () => {
  const { pending } = useFormStatus();
  const [data, action] = useActionState(signInWithCredentials, {
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
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={signInDefaultFormValues.email}
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
            defaultValue={signInDefaultFormValues.password}
          />
        </div>
        <div>
          <Button disabled={pending} className="w-full" variant="default">
            {pending ? "Signing in..." : "Sign in"}
          </Button>
        </div>
        {data && !data.success && (
          <p className="text-center text-destructive text-xs">{data.message}</p>
        )}
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account? {""}
          <Link
            href="/sign-up"
            target="_self"
            className="link cursor-pointer text-blue-600"
          >
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
