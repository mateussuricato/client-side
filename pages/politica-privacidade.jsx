import FooterSideBar from "../components/FooterSideBar";
import HeadLine from "../components/HeadLine";
import Contact from "../components/Contact";
import Logo from "../components/Logo";
import * as S from "../components/IndexStyled";
import * as S2 from "../components/PostStyled";
import { useState } from "react";

export default function Home() {
  const [select, setSelect] = useState(6);

  return (
    <>
      <Logo />
      <S.Container>
        <S2.Main>
          <h2>Política Privacidade</h2>
          <S.Paragraph>
            A sua privacidade é importante para nós. É política do Life Nômade
            respeitar a sua privacidade em relação a qualquer informação sua que
            possamos coletar no site Life Nômade, e outros sites que possuímos e
            operamos.
          </S.Paragraph>
          <S.Paragraph>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.
          </S.Paragraph>
          <S.Paragraph>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveis ​​para evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </S.Paragraph>
          <S.Paragraph>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </S.Paragraph>
          <S.Paragraph>
            O nosso site pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            práticas desses sites e não podemos aceitar responsabilidade por
            suas respectivas políticas de privacidade.
          </S.Paragraph>
          <S.Paragraph>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </S.Paragraph>
          <S.Paragraph>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver alguma dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contacto connosco.
          </S.Paragraph>
          <ul>
            <li>
              O serviço Google AdSense que usamos para veicular publicidade usa
              um cookie DoubleClick para veicular anúncios mais relevantes em
              toda a Web e limitar o número de vezes que um determinado anúncio
              é exibido para você.
            </li>
            <li>
              Para mais informações sobre o Google AdSense, consulte as FAQs
              oficiais sobre privacidade do Google AdSense.
            </li>
            <li>
              Utilizamos anúncios para compensar os custos de funcionamento
              deste site e fornecer financiamento para futuros desenvolvimentos.
              Os cookies de publicidade comportamental usados ​​por este site
              foram projetados para garantir que você forneça os anúncios mais
              relevantes sempre que possível, rastreando anonimamente seus
              interesses e apresentando coisas semelhantes que possam ser do seu
              interesse.
            </li>
            <li>
              Vários parceiros anunciam em nosso nome e os cookies de
              rastreamento de afiliados simplesmente nos permitem ver se nossos
              clientes acessaram o site através de um dos sites de nossos
              parceiros, para que possamos creditá-los adequadamente e, quando
              aplicável, permitir que nossos parceiros afiliados ofereçam
              qualquer promoção que pode fornecê-lo para fazer uma compra.
            </li>
          </ul>
          <S.Paragraph>Compromisso do Usuário</S.Paragraph>
          <S.Paragraph>
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que o Life Nômade oferece no site e com caráter
            enunciativo, mas não limitativo:
          </S.Paragraph>
          <ul>
            <li>
              A) Não se envolver em atividades que sejam ilegais ou contrárias à
              boa fé a à ordem pública;
            </li>
            <li>
              B) Não difundir propaganda ou conteúdo de natureza racista,
              xenofóbica, bet365 brasil ou azar, qualquer tipo de pornografia
              ilegal, de apologia ao terrorismo ou contra os direitos humanos;
            </li>
            <li>
              C) Não causar danos aos sistemas físicos (hardwares) e lógicos
              (softwares) do Life Nômade, de seus fornecedores ou terceiros,
              para introduzir ou disseminar vírus informáticos ou quaisquer
              outros sistemas de hardware ou software que sejam capazes de
              causar danos anteriormente mencionados.
            </li>
          </ul>
          <S.Paragraph>Mais informações</S.Paragraph>
          <S.Paragraph>
            Esperemos que esteja esclarecido e, como mencionado anteriormente,
            se houver algo que você não tem certeza se precisa ou não,
            geralmente é mais seguro deixar os cookies ativados, caso interaja
            com um dos recursos que você usa em nosso site.
          </S.Paragraph>
          <S.Paragraph>
            Esta política é efetiva a partir de 11 de Janeiro 2023
          </S.Paragraph>
        </S2.Main>
        <FooterSideBar select={select} setSelect={setSelect} />
      </S.Container>
    </>
  );
}
