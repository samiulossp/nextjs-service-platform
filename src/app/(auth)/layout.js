import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link href="/" className="flex justify-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ServicePlatform
          </h2>
        </Link>
      </div>
      {children}
    </div>
  );
}
