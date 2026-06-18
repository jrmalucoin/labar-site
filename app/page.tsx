import NovoSite from "./novo-site/page";
import Manutencao from "./manutencao/page";

/*
// se igual a true site em manutenção, se igual a false site em produção

const SITE_EM_MANUTENCAO = false;

export default function Home() {
  return SITE_EM_MANUTENCAO
    ? <Manutencao />
    : <NovoSite />;
}


*/





export default function Home() {
  return (
    <h1 style={{fontSize:"60px"}}>
      TESTE JR 999
    </h1>
  );
}