"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Locale = "en" | "es";

type LanguageContextValue = {
  locale: Locale;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = () => {
    setLocale((currentLocale) => (currentLocale === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
