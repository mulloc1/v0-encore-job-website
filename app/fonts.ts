import { Noto_Sans_KR, IBM_Plex_Sans_KR, Noto_Serif_KR, Gowun_Batang } from "next/font/google"

// Noto Sans Korean - 현대적이고 깔끔한 디자인의 폰트
export const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-kr",
})

// IBM Plex Sans KR - 세련되고 현대적인 느낌의 폰트
export const ibmPlexSansKr = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-ibm-plex-sans-kr",
})

// Noto Serif Korean - 세리프 스타일의 감성적인 폰트
export const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-serif-kr",
})

// Gowun Batang - 부드럽고 감성적인 명조체 폰트
export const gowunBatang = Gowun_Batang({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-gowun-batang",
})

// 기본 폰트로 Noto Serif KR 사용
export const primaryFont = notoSerifKr
export const secondaryFont = gowunBatang
export const cardFont = notoSansKr
export const cardHeadingFont = ibmPlexSansKr
