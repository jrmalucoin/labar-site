import NovoSite from "./novo-site/page";
import Manutencao from "./manutencao/page";

const SITE_EM_MANUTENCAO =
  process.env.SITE_EM_MANUTENCAO === "true";

export default function Home() {
  return SITE_EM_MANUTENCAO
    ? <Manutencao />
    : <NovoSite />;
}