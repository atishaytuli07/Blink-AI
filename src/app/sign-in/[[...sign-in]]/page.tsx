import { SignIn } from "@clerk/nextjs"
import Link from "next/link"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F5EB] py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <SignIn
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-white shadow-lg rounded-xl p-6",
              headerTitle: "text-2xl font-bold text-center",
              headerSubtitle: "text-gray-500 text-center",
              formButtonPrimary: "bg-black hover:bg-gray-800 text-white",
              footerActionLink: "text-black hover:text-gray-600",
              footerAction: "text-gray-600",
            },
          }}
          redirectUrl="/dashboard"
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
        />
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-black font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
