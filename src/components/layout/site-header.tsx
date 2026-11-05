import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { DEFAULT_LANGUAGE } from "@/i18n/languages";

export function SiteHeader() {
  const { t } = useTranslation();
  const { lang = DEFAULT_LANGUAGE } = useParams<{ lang: string }>();

  const navLinks = [
    { href: `/${lang}#programa`, label: t("nav.program") },
    { href: `/${lang}#materias`, label: t("nav.subjects") },
    { href: `/${lang}#testimonios`, label: t("nav.testimonials") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to={`/${lang}`} className="flex items-center">
          <img
            src="/logotipo.png"
            alt="PreDashin Preuniversitario"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button asChild size="sm">
            <a href={`/${lang}#cta`}>{t("nav.cta")}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
