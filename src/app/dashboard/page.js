import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="mt-4">
        This is a protected page. You must be logged in to view this content.
      </p>
      <LogoutLink className="mt-4 text-white hover:underline">
        Logout
      </LogoutLink>
    </div>
  );
}
