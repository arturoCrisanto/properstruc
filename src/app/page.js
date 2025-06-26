import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="min-h-screen items-center font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-center gap-4 mt-20">
        <div className="text-4xl font-bold">
          Welcome to the Kinde Auth Next.js Example
        </div>
        <LoginLink className="text-2xl font-bold">sign in</LoginLink>
        <RegisterLink className="text-2xl font-bold">register</RegisterLink>
      </div>
    </div>
  );
}
