export type DirectorLocalizedTermCopy = {
  readonly label: string;
  readonly definition: string;
  readonly example: string;
};

const PT_TERM_SEEDS_2 = `
frame_rate|Cadência de fotogramas|O número de imagens registadas ou apresentadas por segundo.|48 fps reproduzidos a 24 fps dão metade da velocidade.
slow_motion|Câmara lenta|Captação com uma cadência superior à reprodução para alongar o tempo.|Uma chávena a cair é filmada a 96 fps.
motion_blur|Desfoque de movimento|O desfoque produzido quando o motivo ou a câmara se move durante a exposição.|Um tempo de obturação mais longo torna a corrida mais fluida e inquieta.
exposure|Exposição|A quantidade de luz registada e a forma como os tons são colocados no suporte de imagem.|O rosto é priorizado mesmo que a janela perca algum detalhe.
dynamic_range|Gama dinâmica|A diferença entre o detalhe mais escuro e o mais claro que a câmara consegue reproduzir em simultâneo.|O interior e o exterior iluminado pelo sol mantêm-se legíveis no mesmo plano.
highlight_rolloff|Transição dos realces|A forma como as zonas muito claras passam gradual ou abruptamente para o valor máximo de branco.|Uma transição suave permite que a lâmpada mantenha a forma antes de ficar branca.
nd_filter|Filtro ND|Um filtro neutro que reduz a luz sem alteração de cor intencional.|Usa-se um filtro ND no exterior para filmar com a abertura mais aberta.
key_light|Luz principal|A luz dominante que define a direção e a forma principais do motivo.|A janela funciona como luz principal da cena.
fill_light|Luz de preenchimento|Uma luz que eleva o lado em sombra e controla o contraste sem se tornar uma nova luz principal.|Um ligeiro reflexo mantém detalhe no lado em sombra do rosto.
backlight|Contraluz|Uma luz que atinge o motivo por trás ou por trás e de lado.|O sol através do fumo desenha o contorno do corpo.
practical_light|Luz prática|Uma fonte de luz visível na cena, como um candeeiro ou um ecrã.|O candeeiro de mesa justifica a luz quente no rosto.
motivated_lighting|Iluminação motivada|Iluminação que parece vir de fontes credíveis no mundo da cena.|Uma luz mais potente fora da janela imita o luar.
hard_light|Luz dura|Luz proveniente de uma fonte pequena ou distante que produz sombras definidas.|O sol direto cria sombras marcadas das persianas.
soft_light|Luz suave|Luz proveniente de uma fonte grande ou difusa que cria transições graduais nas sombras.|Uma grande armação difusora cria uma luz de janela suave.
negative_fill|Preenchimento negativo|A utilização de superfícies escuras para reduzir a luz refletida no lado em sombra.|Um tecido preto junto ao rosto absorve a luz dispersa do espaço.
bounce_light|Luz refletida|Luz enviada para uma superfície e refletida de forma mais suave para o motivo.|Uma luz é refletida numa parede branca.
color_temperature|Temperatura de cor|Uma descrição, em kelvin, do caráter quente ou frio da luz.|Luz de tungsténio por volta de 3200 K contrasta com a luz do dia.
white_balance|Balanço de brancos|A referência da câmara para definir o que deve ser reproduzido como neutro.|A câmara é equilibrada a 4300 K em luz mista.
palette|Paleta de cores|O sistema selecionado de cores dominantes e de destaque.|O vermelho é reservado para os momentos em que o controlo se quebra.
lut|LUT|Uma tabela que transforma valores de imagem para visualização ou tratamento de cor.|Uma show LUT é usada nos dailies e na sala de montagem.
production_design|Design de produção|A conceção visual global do mundo físico do filme.|O apartamento torna-se progressivamente mais apertado através do mobiliário e das alterações do espaço.
art_direction|Direção de arte|A concretização prática e a organização do conceito definido pelo design de produção.|A direção de arte coordena a construção do corredor.
set_decoration|Decoração de cenário|A escolha e colocação de mobiliário, têxteis e detalhes do ambiente.|A mesa está cheia, obrigando as personagens a estenderem-se umas sobre as outras.
prop|Adereço|Um objeto usado ou envolvido ativamente na cena.|O telefone tem de funcionar da mesma maneira em todos os takes.
hero_prop|Adereço principal|Um adereço particularmente importante que tem de suportar grandes planos e que muitas vezes existe em várias cópias.|A carta é construída em várias versões idênticas.
costume_design|Design de figurinos|A conceção de roupa e acessórios que exprimem a personagem e a paleta do filme.|O casaco torna-se mais apertado à medida que a personagem perde o controlo.
makeup_hair|Maquilhagem e cabelo|A conceção de pele, cabelo, idade, ferimentos e estilo das personagens.|O ferimento evolui através de fases documentadas.
texture|Textura|A qualidade visual e tátil de superfícies, tecidos e ambientes.|Um figurino liso contrasta com paredes rugosas.
silhouette|Silhueta|A forma exterior do motivo, legível independentemente do detalhe interior.|O casaco volumoso da personagem continua reconhecível no escuro.
spatial_geography|Geografia espacial|A compreensão, pelo público, de onde se encontram os lugares e as pessoas.|Sabemos onde fica a saída antes de o incêndio começar.
screen_geography|Geografia no ecrã|A forma como as relações espaciais são representadas através dos planos e da montagem.|A porta permanece do mesmo lado da personagem entre enquadramentos.
continuity|Continuidade|A coerência de tempo, espaço, ação, figurino, luz e interpretação.|A chávena está igualmente cheia antes e depois do corte.
assembly|Montagem inicial|Uma primeira montagem dos takes pela ordem do argumento ou das cenas.|Todas as cenas são colocadas de forma aproximada umas a seguir às outras.
rough_cut|Montagem preliminar|Uma versão de trabalho em que a estrutura e a duração das cenas ainda estão a ser desenvolvidas.|Uma cena é deslocada e três minutos são retirados.
fine_cut|Montagem fina|Uma versão mais precisa em que escolhas de plano, ritmo e transições são afinadas.|A pausa antes da resposta é reduzida em oito fotogramas.
picture_lock|Bloqueio de imagem|O momento em que a ordem e a duração das imagens deixam de poder mudar de forma substancial.|O filme é bloqueado antes da mistura final e do conform.
continuity_editing|Montagem de continuidade|Um sistema de montagem que torna tempo, espaço e ação fáceis de seguir.|Olhares e movimentos mantêm a continuidade durante a conversa.
montage|Montagem|A combinação de imagens que comprime o tempo ou constrói uma ideia.|O treino é condensado em cinco ações e num único percurso musical.
match_cut|Match cut|Um corte que liga imagens através de forma, movimento, som ou ideia semelhantes.|Uma lâmpada redonda corta para o sol.
jump_cut|Jump cut|Um salto visível de tempo ou posição entre imagens semelhantes.|São retiradas pausas do mesmo ângulo de câmara.
cross_cutting|Montagem alternada|A alternância entre ações em lugares ou tempos diferentes.|O salvamento é alternado com o perigo que se aproxima.
cut_on_action|Corte na ação|Um corte feito durante uma ação para que o movimento conduza a transição.|A personagem começa a levantar-se num plano geral e termina num plano médio.
ellipsis|Elipse|Um corte que omite tempo ou ação que o público consegue inferir.|A porta fecha-se e cortamos para a manhã seguinte.
j_cut|Corte J|Uma transição em que o som do plano seguinte começa antes da mudança de imagem.|Ouve-se o comboio antes de vermos a estação.
l_cut|Corte L|Uma transição em que o som do plano anterior continua depois da mudança de imagem.|A confissão continua sobre a reação na divisão seguinte.
rhythm|Ritmo|O padrão de durações, pausas, movimentos e sons ao longo do tempo.|Três interrupções rápidas são seguidas por um plano longo e imóvel.
production_sound|Som direto|Diálogo e outros sons registados durante a própria rodagem.|A cena dá prioridade a diálogo limpo em vez do ruído da ventoinha do local.
room_tone|Som ambiente da sala|Um registo do som de fundo próprio de um espaço sem ação principal nem diálogo.|Gravam-se trinta segundos de som ambiente da sala depois da cena.
wild_track|Som separado|Um som registado sem imagem sincronizada, muitas vezes uma ambiência ou uma ação específica.|Os passos são gravados separadamente depois do take.
ambience|Ambiência|Sons de fundo que definem lugar, tempo e ambiente.|Comboios distantes tornam a noite urbana e inquieta.
adr|ADR|Diálogo gravado novamente em estúdio em sincronização com a imagem final.|Uma fala afetada pelo vento é regravada com a respiração e o timing corretos.
foley|Foley|Sons sincronizados criados por artistas para passos, roupa e contacto físico.|O tecido do casaco torna-se mais presente à medida que a personagem se aproxima.
diegetic_sound|Som diegético|Som entendido como existente no mundo do filme.|A música vem do rádio presente na cena.
non_diegetic_sound|Som não diegético|Som que não é apresentado como parte física do mundo do filme.|A música orquestral é ouvida apenas pelo público.
score|Música original|Música composta para as necessidades dramáticas e estruturais do filme.|O tema só surge completo depois da escolha decisiva da personagem.
spotting_session|Sessão de spotting|Uma sessão em que se decide a colocação e a função da música ou do som.|A música começa depois do olhar, não quando a porta se abre.
sound_bridge|Ponte sonora|Um som que continua ou começa sobre uma mudança de cena e liga as imagens.|Os aplausos continuam sobre uma sala vazia no dia seguinte.
sound_perspective|Perspetiva sonora|A forma como distância, espaço, direção e subjetividade são expressos pelo som.|O diálogo fica abafado quando a personagem entra em pânico.
final_mix|Mistura final|O equilíbrio final de diálogo, efeitos, ambiências e música.|A música é baixada para que a respiração se torne o foco da cena.
head_of_department|Chefe de departamento|A pessoa que lidera um departamento como imagem, design, guarda-roupa ou som.|A direção de fotografia e o design de produção coordenam cor e materiais.
first_ad|1.º assistente de realização|A pessoa que lidera a execução prática da rodagem, o horário e a coordenação no set.|O 1.º assistente de realização calcula o tempo para três configurações de câmara.
dp|Diretor de fotografia|O responsável pelo departamento de câmara e luz que desenvolve a expressão fotográfica do filme.|O realizador e o diretor de fotografia testam dois conjuntos de objetivas antes da escolha.
script_supervisor|Anotador/a de cinema|A pessoa que controla a cobertura do argumento, os takes, a continuidade e a direção no ecrã.|O anotador avisa que a linha de olhar não corresponde entre os planos.
production_constraint|Limitação de produção|Um limite imposto à solução por tempo, orçamento, local, segurança ou meteorologia.|O pôr do sol deixa apenas vinte minutos para o plano principal.
location_scout|Visita de localização|A avaliação criativa e prática de possíveis locais de rodagem.|Escolhe-se um corredor largo para permitir encenação em profundidade.
tech_scout|Visita técnica|Uma visita conjunta com os departamentos-chave para planear a execução da rodagem.|A equipa assinala onde podem ficar a grua, a alimentação elétrica e a posição de som.
floor_plan|Planta|Um desenho visto de cima do espaço, das pessoas e das configurações de câmara.|As câmaras A e B são marcadas de cada lado da mesa.
shooting_schedule|Plano de rodagem|O plano que define quando as cenas e os elementos serão filmados.|Todas as cenas noturnas são agrupadas na mesma semana.
setup|Setup de câmara|Uma combinação de posição de câmara, ótica, luz e maquinaria preparada como uma unidade.|Três planos são filmados a partir do mesmo setup com pequenos reenquadramentos.
company_move|Deslocação da equipa|A deslocação de elenco, equipa e equipamento para outro local durante o dia.|Um exterior adicional exige a deslocação de toda a equipa e é retirado do plano.
slate|Claquete|A placa e a batida que identificam cena, plano e take e fornecem um ponto de sincronização.|Cena 24, plano 3B, take 2 são identificados na claquete.
take|Take|Uma gravação contínua desde o arranque da câmara e do som até pararem.|O take 4 tem a melhor interpretação, mas precisa de um pickup no final.
print_take|Take preferido|Um take que o realizador assinala como particularmente utilizável na montagem.|O realizador assinala o take 6 como take preferido para a montagem.
circle_take|Take assinalado|Um take preferido, assinalado no relatório ou nos metadados.|O anotador assinala o take 3 no relatório como take preferido.
pickup|Pickup|Uma pequena parte de uma cena filmada novamente sem repetir todo o take.|Faz-se um pickup desde a fala até a porta fechar.
safety_take|Take de segurança|Um take adicional feito depois de uma versão utilizável para garantir uma alternativa.|O take de segurança experimenta uma intensidade mais baixa.
video_assist|Video Assist|O sistema que permite ao realizador e às equipas ver a imagem da câmara durante a rodagem.|O realizador verifica a linha de olhar e a composição no monitor.
rushes|Brutos / rushes|Um termo usado para o material de imagem recentemente filmado ou processado.|O realizador vê os brutos antes dos grandes planos do dia seguinte.
color_grade|Correção de cor|O tratamento criativo e técnico da exposição, do contraste e da cor depois da montagem.|Os tons de pele mantêm-se consistentes enquanto o fundo arrefece gradualmente.
dcp|DCP|Um pacote de ficheiros normalizado para projeção digital em cinema, com imagem, som e metadados.|A versão final é verificada a partir do DCP na sala de cinema.
wardrobe_test|Teste de guarda-roupa|Um teste dos figurinos com o ator, a câmara e a luz antes da rodagem.|Uma camisa às riscas é substituída depois de o teste de câmara revelar moiré.
`.trim();

function parseTermCopy(rows: string): Readonly<Record<string, DirectorLocalizedTermCopy>> {
  return Object.fromEntries(rows.split("\n").map((line) => {
    const [id, label, definition, example] = line.split("|");
    if (!id || !label || !definition || !example) throw new Error(`Invalid localized Director term row: ${line}`);
    return [id, { label, definition, example }] as const;
  }));
}

export const DIRECTOR_TERM_COPY_PT_2 = parseTermCopy(PT_TERM_SEEDS_2);
