import "./globals.css";
import PreLayout from "./PreLayout";

export const metadata = {
  title: "LetsOverlap",
  description:
    "Overlap aims to host ambitious syndicate projects with up to the minute digital marketing solutions ",
  generator: "letsOverlap",
  applicationName: "letsOverlaps",
  referrer: "origin-when-cross-origin",
  keywords: [
    "digital marketing solutions",
    "digital marketing agency",
    "digital marketing agency in pune",
    "best SEO services and solutions",
    "SEO agency",
    "leading SEO agency",
    "best SEO agency",
    "search engine optimisation",
    "branding agency",
    "marketing agency 2024",
    "advertisement marketing",
    "best advertising agency",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PreLayout>
          <main>{children}</main>
        </PreLayout>
      </body>
    </html>
  );
}
