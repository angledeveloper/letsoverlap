import "./globals.css";
import PreLayout from "./PreLayout";

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
