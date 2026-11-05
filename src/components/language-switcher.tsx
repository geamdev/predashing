import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from "@/i18n/languages";

/** Swaps the `:lang` segment of the current URL and syncs i18next. */
export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const { "*": restOfPath } = useParams();

  function handleChange(lang: SupportedLanguage) {
    void i18n.changeLanguage(lang);
    navigate(`/${lang}${restOfPath ? `/${restOfPath}` : ""}`);
  }

  return (
    <div
      className="flex items-center gap-1"
      role="group"
      aria-label={t("languageSwitcher.label")}
    >
      {SUPPORTED_LANGUAGES.map((lang) => (
        <Button
          key={lang}
          type="button"
          size="sm"
          variant={i18n.language === lang ? "default" : "ghost"}
          onClick={() => handleChange(lang)}
        >
          {lang.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
