import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./sign-up-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign up",
};

type SignUpPageProps = {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
};

const SignUpPage = async ({ searchParams }: SignUpPageProps) => {
  const { callbackUrl } = await searchParams;
  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image
              src="/images/logo.svg"
              width={100}
              height={100}
              alt={`${APP_NAME} logo`}
              priority
            />
          </Link>
          <CardTitle className="text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Enter your information bellow to sign up
          </CardDescription>
          <CardContent className="space-y-4">
            <SignUpForm />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default SignUpPage;
