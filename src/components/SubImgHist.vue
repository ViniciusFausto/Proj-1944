<template>
  <div id="app" >
  <v-container id="inspire">
    <v-container
        class="pa-2 mb-5"
        fluid
      >
        <v-row>
          <v-col  
            v-for="card in cards"
            :key="card.title"
            cols="12"
            :sm="card.flex"
          >
            <v-card>
              <v-img
                :alt="card.alt"
                :title="card.titulo"
                :src="card.src"
                class="white--text"
                height="200px"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title
                  class="fill-height align-end semSerif"
                  v-text="card.title"
                ></v-card-title>
              </v-img>
  
              
    <v-card-text
      class="black--text box serif fonte"
       v-text="card.texto" >
    </v-card-text>
                    </v-card>
          </v-col>
        </v-row>
      </v-container>
  </v-container>
</div>
</template>

<script>
export default {
    data: () => ({
    cards: [
      {titulo:'Bomba Atômica',title: 'Criação da Bomba Atômica', src: require('../assets/img/bomba.gif'), flex: 6,alt:"bomba atômica",
        texto:"Em 1920, Einstein trabalhou, com o assistente de pós-graduação húngaro Leo Szilárd, no desenvolvimento de um refrigerador de alta eficiência energética. Apesar da invenção da dupla nunca ter sido lançada a público, os dois encontraram-se alguns anos mais tarde durante a criação das bombas atômicas.Em 1933, ano em que Adolf Hitler tornou-se o chanceler da Alemanha, Szilárd descobriu a existência da reação nuclear em cadeia, um processo que, teoricamente, deveria ser capaz de liberar grandes quantidades de energias e que trazia consigo um enorme potencial de destruição. No ano de 1939, Szilárd convenceu-se de que os alemães estavam intencionados a utilizar a energia nuclear, proveniente das reações em cadeia, para fins bélicos. Leo Szilárd contatou seu ex-colega, Einstein, dizendo-lhe que alertasse o presidente Roosevelt da ameaça iminente.Szilárd visitou Albert Einstein em sua casa, em Nova Iorque, juntamente com os físicos húngaros Edward Teller e Eugene Wigner. Nessa época, Einstein havia fugido (já havia alguns anos) do regime nazista, que havia colocado um prêmio de 5.000 dólares por sua captura, uma vez que Einstein era judeu.Durante a sua reunião com Szilard, Teller e Wigner, Einstein assustou-se com a possibilidade de que sua famosa equação matemática (E = mc²) pudesse ser usada para produzir armamentos de destruição em massa. Por essa razão, Einstein, Wigner e Teller escreveram uma carta a Roosevelt, na qual pediam agilidade na criação de um programa nuclear, antes que a Alemanha fosse capaz de produzir suas próprias ogivas nucleares.Em 1939, cerca de dois meses após ter recebido a carta, Roosevelt criou o Advised Comitte on Uranium (Comitê Consultivo de Urânio), o precursor do Projeto Manhattan, responsável pela criação da bomba atômica."  },
      { titulo:'Saudação Hitler',title: 'Batalha da Grã-Bretanha', src: require('../assets/CARDS MAIORES/governo3.jpg'), flex: 6,alt:"Hitler em meio aos Alemães",
        texto:"Os alemães deram início, em um dia como este, no ano de 1940, ao primeiro de uma longa série de bombardeios contra a Grã-Bretanha, durante a Segunda Guerra Mundial, no que ficou conhecido como a Batalha da Grã-Bretanha ou a Batalha da Inglaterra, que durou três meses e meio. Após a ocupação da França pela Alemanha, a Grã-Bretanha sabia que era apenas uma questão de tempo antes até que as forças do Eixo apontassem suas armas para além do Canal da Mancha. E, em 10 de julho, 120 bombardeiros e caças alemães atingiram um comboio britânico que passava pelo canal, enquanto outros 70 bombardeiros atacaram estaleiros no sul do País de Gales. Apesar de a Grã-Bretanha ter um número bastante inferior de caças em relação aos alemães - 600 x 1.300 - os primeiros possuíam uma importante vantagem sobre os últimos: um sistema eficiente de radar, o que tornava muito improvável um ataque surpresa dos alemães. Além disso, as aeronaves da Grã-Bretanha possuíam uma qualidade superior, no caso os Spitfires e os Hurricanes. Assim que começaram os ataques, a Grã-Bretanha começou uma campanha para que a população entregasse todo o alumínio possível para a produção de aviões. Vamos transformar as suas panelas e frigideiras em Spitfires e Hurricanes, dizia o governo. E, de falto, eles fizeram isso. Considera-se que a Batalha da Inglaterra teve fim no dia 31 de outubro. Estima-se que 40 mil civis morreram por conta dos ataques. Apesar dos bombardeios, a Grã-Bretanha resistiu, e a Alemanha adiou de maneira “indefinitiva” seus planos de dominar mais este território na Europa Ocidental."  },
      {titulo:'Reunião de líderes', title: 'Tratado de Versales', src: require('../assets/img/tratado.jpg'), flex: 6,alt:"Cerimônia de assinatura tratado de versales",
      texto:"O Tratado de Versalhes (1919) foi um tratado de paz assinado pelas potências europeias que encerrou oficialmente a Primeira Guerra Mundial. Após seis meses de negociações, em Paris, o tratado foi assinado como uma continuação do armistício de novembro de 1918, em Compiègne, que tinha posto um fim aos confrontos. O principal ponto do tratado determinava que a Alemanha aceitasse todas as responsabilidades por causar a guerra e que, sob os termos dos artigos 231-247, fizesse reparações a um certo número de nações da Tríplice Entente. Os termos impostos à Alemanha incluíam a perda de uma parte de seu território para um número de nações fronteiriças, de todas as colônias sobre os oceanos e sobre o continente africano, uma restrição ao tamanho do exército e uma indenização pelos prejuízos causados durante a guerra. A República de Weimar também aceitou reconhecer a independência da Áustria. O ministro alemão do exterior, Hermann Muller, assinou o tratado em 28 de junho de 1919. O tratado foi ratificado pela Liga das Nações em 10 de janeiro de 1920. Na Alemanha o tratado causou choque e humilhação na população, o que contribuiu para a queda da República de Weimar em 1933 e a ascensão do Nazismo.No tratado foi criada uma comissão para determinar a dimensão precisa das reparações que a Alemanha tinha de pagar. Em 1921, este valor foi oficialmente fixado em 33 milhões de dólares. Os encargos a comportar com este pagamento são frequentemente citados como a principal causa do fim da República de Weimar e a subida ao poder de Adolf Hitler, o que inevitavelmente levou à eclosão da Segunda Guerra Mundial apenas 20 anos depois da assinatura do Tratado de Versalhes."},
      {titulo:'Dia D', title: 'Dia D', src: require('../assets/CARDS MENORES/DIAd.png'), flex: 6,alt:"Soldados em um barco",
      texto:"O Dia D, 6 de junho de 1944, foi a data em que ocorreu o desembarque das tropas aliadas na Normandia (noroeste da França). Este dia é considerado por muitos historiadores como o mais importante da Segunda Guerra Mundial. Foi decisivo na vitória dos aliados contra o Eixo (Alemanha, Itália e Japão). O nome oficial deste plano militar era Operação Overlord. A região era dominada pelos alemães na chamada Muralha do Atlântico. Os aliados, desembarcaram com mais de 300 mil homens e milhares de armamentos. Os aliados usaram senhas e informações falsas sobre o desembarque, estratégia importante para confundir as tropas alemãs. Após duras batalhas, a operação Overlord funcionou e os aliados venceram. Esta vitória foi crucial para o avanço dos aliados rumo à vitória sobre a Alemanha em 1945."},
    ],
  }),
}
</script>

<style>
.serif{
  font-family: serif;
}
.semSerif{
  font-family: sans-serif;
}
.fonte{
  font-size: 17px;
}
.box{
  text-align: justify;
}
</style>