import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { DEFAULT_LANGUAGE } from "@/i18n/languages";

export function SiteFooter() {
  const { t } = useTranslation();
  const { lang = DEFAULT_LANGUAGE } = useParams<{ lang: string }>();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <img
              src="/logotipo.png"
              alt="PreDashin Preuniversitario"
              className="h-9 w-auto"
            />
            <p className="mt-3 text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-foreground">
                {t("footer.links")}
              </span>
              <a
                href={`/${lang}#programa`}
                className="text-muted-foreground hover:text-foreground"
              >
                {t("nav.program")}
              </a>
              <a
                href={`/${lang}#materias`}
                className="text-muted-foreground hover:text-foreground"
              >
                {t("nav.subjects")}
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © {year} PreDashing. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
