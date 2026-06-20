import NovoSite from "./novo-site/page";
import Manutencao from "./manutencao/page";

export const dynamic = "force-dynamic";

export default async function Home() {
  const SITE_EM_MANUTENCAO =
    process.env.SITE_EM_MANUTENCAO === "true";

  return SITE_EM_MANUTENCAO
    ? <Manutencao />
    : <NovoSite />;
}