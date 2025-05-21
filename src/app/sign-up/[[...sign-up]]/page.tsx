import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F5EB] py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <SignUp
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-white shadow-lg rounded-xl p-6",
              headerTitle: "text-2xl font-bold font-bm text-center",
              headerSubtitle: "text-gray-500 text-center",
              formButtonPrimary: "bg-black hover:bg-gray-800 text-white",
              footerActionLink: "text-black hover:text-gray-600",
              footerAction: "text-gray-600",
            },
          }}
          redirectUrl="/dashboard"
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
        />
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-black font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
