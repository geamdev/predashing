import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DEFAULT_LANGUAGE } from "@/i18n/languages";

const FEATURE_KEYS = ["teachers", "practice", "flexible", "tracking"] as const;
const SUBJECT_KEYS = [
  "math",
  "language",
  "science",
  "social",
  "logic",
  "english",
] as const;

export function HomePage() {
  const { t } = useTranslation();
  const { lang = DEFAULT_LANGUAGE } = useParams<{ lang: string }>();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center">
        <img
          src="/logo.png"
          alt="PreDashin Preuniversitario"
          className="h-32 w-auto md:h-40"
        />

        <Badge className="bg-accent text-accent-foreground">
          {t("hero.badge")}
        </Badge>

        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-balance text-foreground md:text-6xl">
          {t("hero.title")}
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">{t("hero.ctaPrimary")}</Button>
          <Button size="lg" variant="outline" asChild>
            <a href={`/${lang}#programa`}>{t("hero.ctaSecondary")}</a>
          </Button>
        </div>

        <div className="mt-8 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-border/60 pt-8">
          <Stat value="500+" label={t("hero.statsStudents")} />
          <Stat value="6" label={t("hero.statsSubjects")} />
          <Stat value="92%" label={t("hero.statsSuccess")} />
        </div>
      </section>

      {/* Features */}
      <section id="programa" className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title={t("features.title")}
            subtitle={t("features.subtitle")}
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURE_KEYS.map((key) => (
              <Card key={key}>
                <CardHeader>
                  <CardTitle className="text-base">
                    {t(`features.items.${key}.title`)}
                  </CardTitle>
                  <CardDescription>
                    {t(`features.items.${key}.description`)}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section id="materias" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title={t("subjects.title")}
            subtitle={t("subjects.subtitle")}
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {SUBJECT_KEYS.map((key) => (
              <Badge key={key} variant="outline" className="px-4 py-2 text-sm">
                {t(`subjects.items.${key}`)}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardContent className="pt-6">
                  <div className="mb-4 h-12 w-12 rounded-full bg-primary/20" />
                  <p className="text-sm text-muted-foreground">
                    &ldquo;...&rdquo;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="text-muted-foreground">{t("cta.subtitle")}</p>
          <Button size="lg">{t("cta.button")}</Button>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold text-foreground">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-3 text-muted-foreground">{subtitle}</p>
    </div>
  );
}
