import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DEFAULT_LANGUAGE } from "@/i18n/languages";

export function NotFoundPage() {
  const { t } = useTranslation();
  const { lang = DEFAULT_LANGUAGE } = useParams<{ lang: string }>();

  return (
    <div className="mx-auto flex min-h-[60svh] max-w-xl flex-col items-center justify-center gap-4 px-4 text-center">
      <span className="text-6xl font-extrabold text-primary">404</span>
      <h1 className="text-2xl font-bold text-foreground">
        {t("notFound.title")}
      </h1>
      <p className="text-muted-foreground">{t("notFound.description")}</p>
      <Button asChild>
        <Link to={`/${lang}`}>{t("notFound.backHome")}</Link>
      </Button>
    </div>
  );
}
