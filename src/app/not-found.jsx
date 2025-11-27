import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 text-center px-6">
      {/* Big 404 Text */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-purple-600 drop-shadow-lg">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-xl md:text-2xl text-gray-700 font-semibold">
        Oops! The page you are looking for doesn’t exist.
      </p>

      {/* Description */}
      <p className="mt-2 text-gray-500 max-w-md text-base md:text-lg">
        It might be removed, renamed, or temporarily unavailable.
      </p>

      {/* Go Home Button */}
      <Link
        href="/"
        className="mt-8 btn btn-primary px-8 py-3 rounded-xl text-lg font-bold shadow-xl hover:scale-105 transition-all duration-300"
      >
        Go Back Home
      </Link>

      {/* Decoration Shape */}
      <div className="mt-12 opacity-60">
        <svg
          width="150"
          height="150"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#C084FC"
            d="M41.6,-70.8C53.8,-60.6,63.8,-50.2,72.3,-37.7C80.8,-25.2,87.8,-10.6,87.8,4.1C87.8,18.8,80.8,37.7,70.2,52.8C59.7,67.9,45.7,79.1,29.7,85.4C13.7,91.7,-4.3,93.1,-21.1,88.3C-37.8,83.4,-53.4,72.2,-65.7,58C-78,43.9,-87,26.8,-89.7,8.2C-92.5,-10.4,-89,-30.4,-78.5,-45.5C-68,-60.5,-50.6,-70.6,-33.4,-78.3C-16.3,-86.1,0.7,-91.5,17.7,-90.5C34.8,-89.4,69.6,-81,41.6,-70.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
}
