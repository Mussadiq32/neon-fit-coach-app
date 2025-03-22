import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex justify-between items-center h-16">
          <div className="font-bold text-xl">Neon Fit Coach</div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-medium hover:text-primary">Home</Link>
            <Link to="/workouts" className="font-medium hover:text-primary">Workouts</Link>
            <Link to="/nutrition" className="font-medium hover:text-primary">Nutrition</Link>
            <Link to="/progress" className="font-medium hover:text-primary">Progress</Link>
            <Link to="/community" className="font-medium hover:text-primary">Community</Link>
            <Link to="/about" className="font-medium hover:text-primary">About</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Fitness Journey</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Personalized workouts, nutrition plans, and progress tracking to help you achieve your fitness goals.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Free
            </Button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Custom Workouts</h3>
                <p>Get personalized workout plans tailored to your fitness level and goals.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Nutrition Guidance</h3>
                <p>Learn how to fuel your body with meal plans and nutrition tips.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Progress Tracking</h3>
                <p>Track your progress with detailed metrics and visualizations.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Neon Fit Coach</h3>
              <p className="text-gray-300">Your personal fitness companion for a healthier lifestyle.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/workouts" className="hover:text-white">Workouts</Link></li>
                <li><Link to="/nutrition" className="hover:text-white">Nutrition</Link></li>
                <li><Link to="/progress" className="hover:text-white">Progress Tracking</Link></li>
                <li><Link to="/community" className="hover:text-white">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Neon Fit Coach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}