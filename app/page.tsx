import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <h1 className="text-4xl font-bold mb-8 dark:bg-red-500 ">
        Next.js Theme Switcher
      </h1>

      <div className="p-8 rounded-lg border border-border bg-card">
        <p className="text-lg">
          Try changing the theme using the button in the top right corner!
        </p>
      </div>
    </main>
  );
}
