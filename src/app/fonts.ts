// app/fonts.ts
import { Nunito, DM_Serif_Display } from "next/font/google";

export const bodyFont = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const titleFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
