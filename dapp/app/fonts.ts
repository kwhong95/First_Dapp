import { Dongle, Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

const dongle = Dongle({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-dongle",
});

export const fonts = {
  dongle,
  pacifico,
};
