import { getTranslations } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/navigation";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
const Terms = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("Terms");
  return (
    <div style={{ marginTop: "8%" }}>
      <div
        style={{
          width: "100%",
          height: "250px",
          backgroundColor: "#3d3d3b",
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "200%",
            fontWeight: "bolder",
            marginLeft: "15%",
            paddingTop: "4.5%",
          }}
        >
          {t("title")}
        </h1>
        <p style={{ marginLeft: "15%" }}>________________________</p>
      </div>
      <div className="visibility_area" style={{ textAlign: "justify" }}>
        <h2>{t("contract")}</h2>
        <p>{t("contract_text")}</p>
        <h2 style={{ marginTop: "5%" }}>{t("note")}</h2>
        <p>{t("note_text")}</p>
      </div>
    </div>
  );
};

export default Terms;
