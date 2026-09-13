export type DirectorLocalizedTermCopy = {
  readonly label: string;
  readonly definition: string;
  readonly example: string;
};

const PT_TERM_SEEDS_1 = `
creative_vision|Visão criativa|A ideia agregadora que faz história, tom, imagem, som e interpretações funcionarem como um todo.|Num drama íntimo, a câmara só se aproxima quando a personagem perde o controlo.
directors_statement|Nota de intenção de realização|Uma formulação breve da interpretação do realizador, da sua intenção e da estratégia formal.|A nota de intenção descreve o filme como um estreitamento gradual da margem de ação.
tone|Tom|A tonalidade emocional e a atitude de base do filme.|A mesma cena é planeada como comédia seca em vez de melodrama.
point_of_view|Ponto de vista|A pessoa ou o elemento em torno do qual o filme organiza o conhecimento e a experiência do público.|O público ouve o telefone antes de a personagem principal perceber quem está a ligar.
visual_language|Linguagem visual|Um sistema recorrente de enquadramento, movimento, luz, cor e utilização do espaço.|Os planos gerais estáticos dominam até ao momento em que a personagem principal finalmente age.
formal_rule|Regra formal|Uma restrição deliberada que organiza a forma do filme e torna significativos os desvios.|A câmara nunca atravessa a ombreira da porta antes do ponto de viragem.
reference|Referência|Uma obra, imagem ou expressão usada para concretizar uma qualidade pretendida.|A referência serve para definir contraste e temperatura de cor, não para copiar todo um estilo.
lookbook|Lookbook|Uma seleção curada de imagens e notas que comunica a direção visual do filme.|O lookbook mostra como o verde desaparece gradualmente dos ambientes.
coverage|Cobertura|A quantidade e o tipo de planos que dão à montagem margem para construir a cena.|Um master, dois planos individuais e um insert decisivo cobrem as necessidades da cena.
shot_list|Lista de planos|Uma lista ordenada das configurações de câmara previstas e da função de cada uma.|O plano 12 é um grande plano que só é rodado depois do ponto de viragem.
storyboard|Storyboard|Uma sequência de quadros desenhados ou visualizados que mostra os planos previstos pela ordem.|Uma sequência de ação é desenhada em storyboard para esclarecer direções e colisões.
dailies|Dailies|Material filmado recentemente que é revisto antes de a produção avançar.|Os dailies mostram que falta o plano de reação decisivo da cena.
beat|Beat|A menor mudança significativa de ação, tática, informação ou relação.|Ela sorri, descobre a mentira e muda de estratégia em três beats distintos.
scene_objective|Objetivo de cena|O resultado concreto que uma personagem tenta alcançar na cena.|Ele quer levar a irmã a ficar na sala.
super_objective|Superobjetivo|A força motriz de longo prazo da personagem ao longo de uma parte significativa do filme.|Ao longo do filme, ela tenta recuperar o controlo.
obstacle|Obstáculo|Aquilo que se interpõe ativamente entre a personagem e o objetivo.|A outra personagem recusa responder diretamente e força uma nova tática.
conflict|Conflito|O confronto entre objetivos, necessidades, valores ou forças incompatíveis.|Ambos querem proteger a criança, mas de maneiras opostas.
stakes|O que está em jogo|A consequência de a ação ter sucesso ou falhar.|Se o acordo falhar, ela perde a casa.
turning_point|Ponto de viragem|O momento que altera a direção da cena ou as possibilidades de ação.|É mencionado um nome e o equilíbrio de poder muda.
reversal|Reversão|Uma viragem em que a situação assume um valor oposto ou quebra de forma clara a expectativa.|Quem parecia ser a vítima revela-se afinal no controlo do encontro.
setup_payoff|Setup e payoff|Um elemento é estabelecido cedo e ganha significado ou consequência mais tarde.|Uma fechadura partida é mostrada antes de a intrusão ser revelada.
subtext|Subtexto|Aquilo que a personagem pensa, quer ou esconde por baixo das palavras ditas.|Na cena, « estou bem » significa « não perguntes mais ».
exposition|Exposição|A informação de que o público precisa sobre o mundo, o passado, as relações ou as regras.|A história da família surge enquanto as personagens discutem os lugares à mesa.
sequence|Sequência|Várias cenas que, em conjunto, formam uma unidade dramática maior.|A investigação é composta por três cenas com risco crescente.
casting|Casting|O processo de procurar e escolher intérpretes para os papéis.|Uma calma inesperada da candidata torna a antagonista mais ameaçadora.
audition|Audição|Uma prova estruturada em que um ator trabalha material relacionado com o papel.|A candidata volta a fazer a cena depois de receber uma única ação concreta.
callback|Segunda audição|Uma audição posterior para um grupo mais reduzido de candidatos.|Dois candidatos são chamados para uma segunda audição com o mesmo parceiro de cena.
chemistry_read|Teste de química|Uma audição em que possíveis parceiros de cena são testados em conjunto para avaliar a sua dinâmica.|Os dois papéis principais fazem um teste de química numa cena de conflito e numa cena silenciosa.
table_read|Leitura de mesa|Uma leitura coletiva em voz alta do argumento com atores e elementos-chave da equipa.|A leitura de mesa revela que uma relação importante é apresentada demasiado tarde.
rehearsal|Ensaio|Trabalho preparatório sobre ação, texto, espaço ou técnica antes da rodagem.|Os atores exploram a cena sem câmara antes de se definir a marcação.
playable_action|Ação jogável|Um verbo ativo que o ator pode tentar exercer sobre outra pessoa.|« Convence-a » é mais jogável do que « fica triste ».
intention|Intenção|Aquilo que a personagem tenta fazer à outra pessoa ou à situação.|Ele tenta fazê-la rir para evitar a pergunta.
given_circumstances|Circunstâncias dadas|Factos sobre a personagem, o tempo, o lugar e a relação que já são verdadeiros antes de a cena começar.|Ela não dormiu e tem de esconder que o dinheiro desapareceu.
adjustment|Ajuste de interpretação|Uma alteração concreta pedida pelo realizador entre takes.|Na próxima vez, ela espera que ele se sente antes de atacar.
listening|Escuta ativa|A forma como o ator recebe a ação do parceiro antes de surgir a resposta.|O grande plano mantém-se durante a pausa antes da resposta.
emotional_arc|Arco emocional|A transformação do estado emocional da personagem ao longo de uma cena ou do filme.|A defesa transforma-se em esperança e depois em vergonha.
mark|Marca de posição|Um ponto físico que o ator atinge para foco, luz ou composição.|O ator para na marca de posição quando a janela se abre.
blocking|Marcação|O planeamento das posições e deslocações dos atores no espaço.|Ela desloca-se para entre ele e a porta no momento em que assume o controlo.
staging|Encenação|A organização conjunta dos corpos, do espaço, da câmara e da ação.|Três pessoas são colocadas em profundidade para que as alianças possam mudar num único plano.
business|Ação física em cena|Pequenas ações concretas com o corpo ou com objetos durante a cena.|Ela organiza os talheres para evitar o contacto visual.
cross|Cruzamento|A deslocação de um ator de uma posição ou de um lado do espaço para outro.|Ele cruza por trás dela e rompe o eixo de poder estabelecido.
entrance|Entrada|A chegada de uma personagem à cena ou ao enquadramento.|Ela entra antes de a porta parar de vibrar.
exit|Saída|A saída de uma personagem da cena ou do enquadramento.|Ele sai, mas a voz permanece ao telefone.
axis_of_action|Eixo de ação|Uma linha imaginária que atravessa a ação ou a relação principal.|O eixo passa entre as duas pessoas à mesa.
rule_180|Regra dos 180°|A câmara mantém-se normalmente do mesmo lado do eixo de ação para preservar as direções no ecrã.|O eixo só é atravessado depois de um plano neutro que restabelece o espaço.
screen_direction|Direção do movimento no ecrã|A direção em que uma pessoa ou objeto se move ou olha dentro do enquadramento.|Ela desloca-se de forma consistente para a direita a caminho da casa.
eyeline|Linha de olhar|A direção e a altura para onde uma personagem olha no enquadramento.|Ambos olham para o mesmo ponto fora de campo.
cheat|Cheat|Um pequeno ajuste do corpo ou de um objeto feito para responder às necessidades da câmara.|O ator roda cinco graus em direção à câmara sem que o espaço pareça ter mudado.
motivated_movement|Movimento motivado|Um movimento que nasce da ação da personagem ou da situação.|Ela vai até à janela porque ouve o carro.
shot_size|Escala de plano|A quantidade do motivo e do espaço envolvente que o enquadramento mostra.|Um grande plano esconde quem está atrás da porta.
extreme_wide|Plano geral extremo|Um plano muito aberto em que o ambiente domina e as pessoas são frequentemente pequenas.|Uma pessoa atravessa um enorme campo coberto de neve.
wide_shot|Plano geral|Um plano que mostra o corpo inteiro ou uma grande parte do espaço.|Toda a cozinha e a distância entre as personagens ficam visíveis.
full_shot|Plano de corpo inteiro|Um enquadramento que normalmente mostra uma pessoa da cabeça aos pés.|A hesitação da personagem lê-se no corpo inteiro.
medium_shot|Plano médio|Um enquadramento que mostra aproximadamente a personagem da cintura ou do peito para cima.|O diálogo mantém visíveis tanto o rosto como os gestos das mãos.
medium_close_up|Plano médio aproximado|Um enquadramento aproximadamente do peito ou dos ombros para cima.|A conversa mantém proximidade sem isolar completamente a personagem.
close_up|Grande plano|Um enquadramento fechado de um rosto ou de um detalhe significativo.|O grande plano surge quando a personagem percebe a verdade.
extreme_close_up|Muito grande plano|Um enquadramento extremamente fechado sobre uma pequena parte do motivo.|Apenas o olho e o reflexo nele ficam visíveis.
insert|Insert|Um plano próximo de um objeto ou de uma ação com importância narrativa.|A chave vai para o bolso errado.
cutaway|Plano de corte|Um plano que abandona momentaneamente a ação principal para mostrar algo relacionado.|Corta-se para o relógio enquanto a conversa continua.
two_shot|Plano a dois|Um plano que inclui duas personagens principais.|Ambas permanecem no enquadramento quando a aliança se desfaz.
master_shot|Plano master|Um plano contínuo que cobre toda a cena ou grande parte dela.|A cena pode ser representada por inteiro num plano master em movimento.
reaction_shot|Plano de reação|Um plano que mostra a resposta a uma ação, fala ou descoberta.|Ficamos na irmã em silêncio depois da confissão.
focal_length|Distância focal|A distância entre o centro ótico da objetiva e o plano de foco quando o foco está no infinito.|No mesmo formato de sensor, uma 25 mm oferece um ângulo de visão mais amplo do que uma 75 mm.
angle_of_view|Ângulo de visão|A quantidade da cena que a objetiva e o sensor captam no enquadramento.|Com a mesma distância focal, um formato de sensor maior capta uma parte mais ampla da imagem projetada pela objetiva.
prime_lens|Objetiva de distância focal fixa|Uma objetiva com uma única distância focal fixa.|A cena é filmada sobretudo com objetivas de 35 mm e 50 mm.
zoom_lens|Objetiva zoom|Uma objetiva com distância focal variável.|Um zoom lento fecha gradualmente o espaço à medida que a personagem compreende.
spherical_lens|Objetiva esférica|Uma objetiva sem compressão horizontal anamórfica da imagem.|As objetivas esféricas são combinadas com um enquadramento recortado para 2,39:1.
anamorphic_lens|Objetiva anamórfica|Uma objetiva que comprime horizontalmente a imagem na captação e é depois desanamorfizada na visualização.|Uma captação anamórfica 2x é desanamorfizada no monitor e na pós-produção.
depth_of_field|Profundidade de campo|A zona entre o ponto mais próximo e o mais distante que parece aceitavelmente nítida.|Primeiro plano e fundo mantêm-se nítidos num jogo de poder.
shallow_focus|Pouca profundidade de campo|Uma zona estreita de nitidez, com primeiro plano ou fundo claramente desfocado.|Só o rosto está focado enquanto o espaço se dissolve em desfoco.
deep_focus|Grande profundidade de campo|Uma grande parte da profundidade do espaço mantém-se nitidamente legível.|A criança em primeiro plano e os pais ao fundo estão focados ao mesmo tempo.
focus_pull|Mudança de foco|Uma alteração controlada da distância de foco durante o plano.|O foco passa da carta para a pessoa à porta.
rack_focus|Mudança marcada de foco|Uma mudança de foco claramente percetível entre motivos ou planos de profundidade.|O foco muda da pistola para o rosto da proprietária.
sensor_size|Formato do sensor|A área física de imagem que regista a projeção da objetiva.|Uma 50 mm mostra um enquadramento mais amplo em large format do que em Super 35.
lens_distortion|Distorção da objetiva|Uma alteração geométrica ou ótica da forma do motivo, sobretudo junto às margens da imagem.|Uma objetiva grande-angular muito perto do rosto exagera o espaço atrás dele.
aperture|Abertura|A abertura variável da objetiva que regula a quantidade de luz e a profundidade de campo.|Abre-se o diafragma para reduzir a profundidade de campo.
f_stop|Número f|A relação entre a distância focal e o diâmetro da abertura.|f/2 é mais aberto e deixa nominalmente entrar mais luz do que f/4.
t_stop|T-stop|Uma medida de exposição que tem em conta a perda real de luz através da objetiva.|Duas objetivas de cinema diferentes são ambas reguladas para T2.8.
iso_ei|ISO / índice de exposição|Um índice de sensibilidade ou de trabalho usado para calcular a exposição.|A câmara é avaliada a EI 800 durante o teste.
shutter_angle|Ângulo do obturador|Uma forma de exprimir a fração de cada período de imagem durante a qual o sensor fica exposto.|Um ângulo de 180° a 24 fps corresponde aproximadamente a 1/48 de segundo.
shutter_speed|Velocidade do obturador|O tempo durante o qual cada imagem é exposta.|1/500 de segundo é usado para ação nítida e entrecortada.
`.trim();

function parseTermCopy(rows: string): Readonly<Record<string, DirectorLocalizedTermCopy>> {
  return Object.fromEntries(rows.split("\n").map((line) => {
    const [id, label, definition, example] = line.split("|");
    if (!id || !label || !definition || !example) throw new Error(`Invalid localized Director term row: ${line}`);
    return [id, { label, definition, example }] as const;
  }));
}

export const DIRECTOR_TERM_COPY_PT_1 = parseTermCopy(PT_TERM_SEEDS_1);
