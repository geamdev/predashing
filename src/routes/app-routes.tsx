import { Navigate, Route, Routes } from "react-router-dom";
import { DEFAULT_LANGUAGE } from "@/i18n/languages";
import { LanguageLayout } from "@/routes/language-layout";
import { HomePage } from "@/pages/home-page";
import { NotFoundPage } from "@/pages/not-found-page";

/** Top-level route map: every page lives under a `/:lang` prefix. */
export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />}
      />

      <Route path="/:lang" element={<LanguageLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
