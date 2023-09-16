import { getLinkBySlug } from "@/app/api/_lib/actions";
import {
  FORM_DATA_LINK_ACCESS_DENIED,
  FORM_DATA_LINK_PASSWORD,
} from "@/app/api/_lib/constants";
import Terminal from "@/components/Terminal";

export default async function PasswordProtectedLink({
  params,
  searchParams,
}: {
  params: { gameSlug: string; linkSlug: string };
  searchParams: { [key: string]: string };
}) {
  const passwordError = searchParams?.[FORM_DATA_LINK_ACCESS_DENIED] ?? "";

  return (
    <Terminal>
      <main className="flex min-h-screen flex-col items-center justify-start p-8 lg:p-24">
        <div className="lg:max-w-5xl z-10 w-full items-center justify-center font-mono lg:flex flex-grow">
          <form
            action={`/${params.gameSlug}/go/${params.linkSlug}`}
            method="get"
            autoComplete="off"
          >
            <label
              htmlFor="password"
              className={
                passwordError
                  ? "block mb-2 text-sm font-medium text-red-700 dark:text-red-500 text-shadow-lg shadow-red-800"
                  : "block mb-2 font-large text-gray-900 dark:text-white"
              }
            >
              Link is password protected
            </label>
            <input
              type="text"
              autoComplete="off"
              id="password"
              className={
                passwordError
                  ? "bg-red-50 w-full block p-2.5 rounded-lg border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400 text-shadow-lg shadow-red-800"
                  : "bg-gray-50 w-full block p-2.5  rounded-lg border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              }
              placeholder="Password"
              name={FORM_DATA_LINK_PASSWORD}
              required
            />
            {passwordError && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-shadow-lg shadow-red-800">
                <span className="font-medium">Access Denied!</span> Entered
                password is not correct.
              </p>
            )}
            <button
              type="submit"
              className="mt-4 relative  w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Submit{" "}
              </span>
            </button>
          </form>
        </div>
      </main>
    </Terminal>
  );
}
