import { createSharedPathnamesNavigation } from "next-intl/navigation";

const locales = ["ro", "en"];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales /* ... */ });
