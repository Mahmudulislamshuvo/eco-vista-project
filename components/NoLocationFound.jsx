import Link from "next/link";

const NoLocationFound = ({ location }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] col-span-12">
      <div className="max-w-md w-full bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center shadow-lg">
        {/* Icon Area */}
        <div className="bg-white/5 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-red-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div>

        {/* Text Content */}
        <h2 className="text-2xl font-bold text-white mb-2">
          Location Not Found
        </h2>
        <p className="text-[#CADEE8] mb-8">
          Sorry, we couldn't resolve the coordinates for{" "}
          <span className="font-semibold text-white">"{location}"</span>. It
          might be an invalid name or our data is unavailable.
        </p>

        {/* Action Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NoLocationFound;
