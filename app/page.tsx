import NovoSite from "./novo-site/page";
import Manutencao from "./manutencao/page";

export default function Home() {
  return (
    <div style={{fontSize:"50px"}}>
      TESTE 18/06/2026 19:30
    </div>
  );
}


/*

// se igual a true site em manutenção, se igual a false site em produção

const SITE_EM_MANUTENCAO = false;

export default function Home() {
  return SITE_EM_MANUTENCAO
    ? <Manutencao />
    : <NovoSite />;
}
*/