// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import logo from "./components/futureself.png"; // Corrected logo import path

export default function Home() {
  return (
      <div
          className="min-h-screen flex flex-col items-center justify-center p-8 pb-20
      font-[family-name:var(--font-geist-sans)] w-full"
          style={{ backgroundColor: "#76A646" }} // Background color from your palette
      >
        <main className="flex flex-col gap-8 items-center w-full mx-auto">
          {/* Logo */}
          <div className="mb-6">
            <Image
                src={logo} // Updated logo path usage
                alt="Future Mirror Logo"
                width={400} // Adjust width as needed
                height={200} // Adjust height as needed
                priority
            />
          </div>

          {/* Call to Action */}
          <div className="text-center max-w-lg">
            <p className="text-xl mb-8" style={{ color: "#EAF2CE" }}>
              Help us shape the future by participating in our research survey.
              Your insights matter!
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-6 items-center flex-col sm:flex-row">
            <Link
                href="/survey"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center gap-2 text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-10"
                style={{
                  backgroundColor: "rgb(223,242,182)", // Light green button color
                  color: "#000", // Black text color
                }}
            >
              Start Survey
            </Link>
            <a
                className="rounded-full border border-solid transition-colors flex items-center justify-center text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-10"
                style={{
                  backgroundColor: "rgba(223,242,182,0.44)", // Green hover background
                  color: "#000000",
                  borderColor: "#000000", // Black border
                  borderWidth: "3px"
                }}
                href="#learn-more"
            >
              Learn More
            </a>
          </div>

          {/* Info Section */}
          <div
              className="mt-10 p-8 rounded-lg w-1/2"
              style={{
                backgroundColor: "rgba(223,242,182,0.44)", // Section background color
                borderColor: "#000000", // Border color
                borderWidth: "2px",
                color: "#000", // Text color

              }}
          >
            <h2 className="text-2xl font-semibold mb-6">What to expect:</h2>
            <ol className="list-inside list-decimal text-lg space-y-4">
              <li>
                <strong>Take a Quick 5-Minute Questionnaire:</strong>
                <br />
                Share insights about your current lifestyle habits—quick, easy,
                and hassle-free!
              </li>
              <li>
                <strong>Upload Your Photo:</strong>
                <br />
                Let the app create a personalized, realistic visualization of your
                future self.
              </li>
              <li>
                <strong>See Your Future Self:</strong>
                <br />
                Discover how your current lifestyle might shape your appearance
                over time.
              </li>
              <li>
                <strong>Explore the Possibilities:</strong>
                <br />
                Compare how positive lifestyle changes could transform your future
                self—it’s like looking at the best version of you!
              </li>
            </ol>
          </div>
        </main>
      </div>
  );
}
