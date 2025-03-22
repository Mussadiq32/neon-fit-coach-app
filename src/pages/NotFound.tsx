import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 text-center">
      <h1 className="text-9xl font-bold text-gray-200">404</h1>
      <h2 className="mt-8 text-3xl font-bold tracking-tight">Page not found</h2>
      <p className="mt-4 text-lg text-gray-500 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="mt-8">
        <Button size="lg">
          Return to home
        </Button>
      </Link>
    </div>
  );
}