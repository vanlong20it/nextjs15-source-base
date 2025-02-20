import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl max-md:max-w-md w-full">
        <div>
          <h2 className="lg:text-5xl text-3xl font-extrabold lg:leading-[55px] text-gray-800">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className="text-sm mt-6 text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            veniam eligendi necessitatibus molestiae. Et beatae quae temporibus
            quisquam eaque, corporis reprehenderit perspiciatis exercitationem,
            veritatis possimus obcaecati rem enim repellendus omnis!
          </p>
          <p className="text-sm mt-12 text-gray-800">
            Don&apos;t have an account{" "}
            <Link
              href="/register"
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Register here
            </Link>
          </p>
        </div>
        <form
          className="max-w-md md:ml-auto w-full"
          autoComplete="off"
          method="POST"
        >
          <h3 className="text-gray-800 text-3xl font-extrabold mb-8">
            Sign in
          </h3>
          <div className="space-y-4">
            <div>
              <Input
                name="email"
                type="email"
                required
                placeholder="Email address"
              />
            </div>
            <div>
              <Input
                name="password"
                type="password"
                required
                placeholder="Password"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <Checkbox id="remember-me" name="remember-me" />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  href="jajvascript:void(0);"
                  className="text-blue-600 hover:text-blue-500 font-semibold"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
          </div>
          <div className="!mt-8">
            <Button type="button" className="w-full">
              Log in
            </Button>
          </div>
          <div className="my-4 flex items-center gap-4">
            <hr className="w-full border-gray-300" />
            <p className="text-sm text-gray-800 text-center">or</p>
            <hr className="w-full border-gray-300" />
          </div>
          <div className="space-x-6 flex justify-center">
            <button
              type="button"
              className="size-10 bg-gray-100 inline-flex items-center justify-center rounded-full hover:bg-gray-500 hover:text-white transition-all"
            >
              <FaGoogle />
            </button>
            <button
              type="button"
              className="size-10 bg-gray-100 inline-flex items-center justify-center rounded-full hover:bg-gray-500 hover:text-white transition-all"
            >
              <FaFacebookF />
            </button>
            <button
              type="button"
              className="size-10 bg-gray-100 inline-flex items-center justify-center rounded-full hover:bg-gray-500 hover:text-white transition-all"
            >
              <FaApple />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
