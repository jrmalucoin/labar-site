import NovoSite from "./novo-site/page";
import Manutencao from "./manutencao/page";


// se igual a true site em manutenção, se igual a false site em produção

const SITE_EM_MANUTENCAO = true;

export default function Home() {
  return SITE_EM_MANUTENCAO
    ? <Manutencao />
    : <NovoSite />;
}
