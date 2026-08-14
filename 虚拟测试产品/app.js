var CUSTOMER_SERVICE_WECHAT = "你的客服微信"; // 可替换为您的微信号，方便没有小红书买家直接添加购买
var STORE_SHOP_LINK = "https://m.xianyu.com"; // 可替换为您的小红书/闲鱼店铺或商品链接
/**
 * Assessment Platform Core Engine - Standalone Single Test Architecture
 * High-Density Comprehensive Result Engine & Instant Bulletproof Runner
 */

var MINI_PROGRAM_LINK = "#小程序://一子一木/0JPDrt84ecI5Gwd";

// ==========================================================================
// 1. Comprehensive Result Profiles Database
// ==========================================================================

var MBTI_DESCRIPTIONS = {
  INTJ: {
    title: "INTJ - 建筑师 / 独立战略家",
    summary: "具有极深洞察力和远大抱负的思想家。你擅长逻辑分析、长远战略规划，对现有系统与规则拥有独特的重构能力。",
    traits: "INTJ 是 16 型人格中最独立、逻辑最严密的类型之一。你习惯用宏观、理性的视角审视世界，不盲从权威与经验，总是试图寻找事物背后的第一性原理。在面对复杂难题时，你能迅速剥离表面干扰，建立高效的系统或解决模型。",
    strengths: ["卓越的战略思维与长远布局能力", "极强的独立思考力，不受偏见左右", "追求极致的效率与知识深度", "意志坚定，能够排除干扰实现既定目标"],
    pitfalls: ["容易显得过于严苛，忽视他人情绪感受", "对低效或缺乏逻辑的人缺乏耐心", "过于依赖理性，偶尔会陷入分析瘫痪", "不擅长表露情感，社交边界感极强"],
    careers: ["系统架构师", "战略咨询顾问", "数据科学家", "风险投资分析师", "高级研发专家", "量化交易员"],
    relationship: "在亲密关系中，你非常看重智力上的对等与相互尊重。你不喜欢虚浮的讨好与表面社交，更倾向于与伴侣建立深层次的精神共鸣与长远的人生规划。",
    famous: ["埃隆·马斯克 (Elon Musk)", "艾萨克·牛顿 (Isaac Newton)", "马克·扎克伯格 (Mark Zuckerberg)"]
  },
  INTP: {
    title: "INTP - 逻辑学家 / 理论探求者",
    summary: "积极进取的发明家，对知识有着止不住的好奇心。你热衷于剖析复杂理论，寻找世界背后的终极逻辑规律。",
    traits: "INTP 是理智与好奇心的化身。你生活在思想的天地里，总是试图理解宇宙的运作机制。比起直接动手执行，你更享受在脑海中重构逻辑模型、推演各种可能性。你拥有极高的包容度与思维灵活性，乐于接受非传统的全新观点。",
    strengths: ["极其敏捷且严谨的逻辑分析能力", "思维开放灵动，富于独创性构想", "客观公正，不受情绪偏见干扰", "能够发现他人忽略的深层矛盾与漏洞"],
    pitfalls: ["容易陷入纯理论思考，缺乏实际执行力", "对常规日常事务（如报销、填表）感到厌烦", "表达过于抽象，他人难以跟上你的节奏", "情绪觉察较弱，可能在不知不觉中伤害他人"],
    careers: ["软件研发工程师", "理论物理学者", "AI算法专家", "哲学/心理学研究员", "系统分析师"],
    relationship: "你追求自由而平等的恋爱关系。你不需要窒息的黏人陪伴，而是希望伴侣能理解你的独立思考空间，并能与你探讨有趣的思想话题。",
    famous: ["阿尔伯特·爱因斯坦 (Albert Einstein)", "比尔·盖茨 (Bill Gates)", "勒内·笛卡尔 (René Descartes)"]
  },
  ENTJ: {
    title: "ENTJ - 指挥官 / 战略统帅",
    summary: "大胆、富有远见且意志强大的领导者。你天生善于发现组织与流程中的低效，并重新制定战略与高效执行体系。",
    traits: "ENTJ 是天生的领袖与变革推动者。你拥有宏大的视野与极强的目标感，善于将长远愿景拆解为具体的行动步骤。在团队中，你自带气场，能够迅速整合资源、调动团队潜能，迎难而上完成挑战。",
    strengths: ["卓越的领导号召力与组织调度能力", "果断高效，敢于在关键时刻做出艰难决策", "战略眼光长远，不被眼前得失束缚", "意志极其坚定，抗压能力极强"],
    pitfalls: ["容易表现出强烈的控制欲与专断倾向", "对效率低下或跟不上节奏的人缺乏包容", "偶尔过于看重成果，忽视了团队的人情关怀", "难于展示脆弱，习惯扛下所有压力"],
    careers: ["企业CEO/高级管理层", "管理咨询总监", "创业者/创始人", "风险投资合伙人", "项目总负责人"],
    relationship: "在爱情中，你寻找的是能够与你并肩作战的理想伙伴。你欣赏有抱负、独立的伴侣，愿意为共同的生活目标全力以赴，但需要注意给对方留出情绪空间。",
    famous: ["史蒂夫·乔布斯 (Steve Jobs)", "玛格丽特·撒切尔 (Margaret Thatcher)", "富兰克林·罗斯福"]
  },
  ENTP: {
    title: "ENTP - 辩论家 / 颠覆创新者",
    summary: "聪明好奇的思想者，绝不放过任何智力挑战。你善于打破常规框框，提出充满颠覆性的创新想法与商业构想。",
    traits: "ENTP 是思想界的破局者。你拥有极快的反应速度和跳跃的创造力，喜欢通过辩论与思想碰撞检验概念的真伪。你抗拒僵化、陈旧的制度，总是热衷于寻找全新的替代方案。",
    strengths: ["极具爆发力的创意与创新脑洞", "思维极其敏捷，头脑风暴能力无出其右", "知识面广博，善于跨领域连接概念", "适应力极强，能迅速掌握新领域"],
    pitfalls: ["容易“始乱终弃”，兴趣转移快而忽视落地实施", "为了辩论而辩论，可能让人觉得挑衅", "讨厌守规则和重复性细节工作", "情绪耐受度较低，缺乏长期沉淀"],
    careers: ["产品创新总监", "品牌战略顾问", "连续创业者", "公关/营销策划专家", "商业分析师"],
    relationship: "你喜欢充满新鲜感与智力刺激的恋爱关系。你希望伴侣能跟上你的思维跳跃，陪你一起探索未知世界，而不是试图用传统规则约束你。",
    famous: ["托马斯·爱迪生 (Thomas Edison)", "本杰明·富兰克林", "华特·迪士尼 (Walt Disney)"]
  },
  INFJ: {
    title: "INFJ - 提倡者 / 灵魂预言家",
    summary: "安静而神秘，同时鼓舞人心且不知疲倦的理想主义者。你拥有极强的直觉与对人类福祉、深层心灵的深刻关怀。",
    traits: "INFJ 是最有灵性与深刻洞察力的类型。你习惯看透语言背后的本质情绪与动机，对世界抱有强烈的使命感。你既拥有深邃的思想，又具备温和坚定的共情力。",
    strengths: ["深刻的洞察力与超强的同理心", "坚持原则与信念，富有深厚文采与感染力", "善于看透他人潜能并引导其成长", "远见卓识，追求心灵深处的价值"],
    pitfalls: ["极其容易陷入情绪内耗与完美主义陷阱", "习惯过度消耗自己去照顾他人", "难以向外打开心扉，经常感到被孤立", "面对冲突时容易选择退缩冷处理"],
    careers: ["心理咨询师", "作家/独立编剧", "社会学学者", "用户体验(UX)研究员", "公益组织负责人"],
    relationship: "你渴望灵魂契合的深度爱恋。对你而言，肤浅的交往毫无意义。你愿意为爱付出极高的忠诚与关怀，但也需要对方给予极大的情绪安全感。",
    famous: ["圣雄甘地 (Mahatma Gandhi)", "柏拉图 (Plato)", "卡尔·荣格 (Carl Jung)"]
  },
  INFP: {
    title: "INFP - 调停者 / 心灵梦想家",
    summary: "诗意、善良而富有同情心的利他主义者。你珍视个人核心价值观与内心真实性，追求灵魂深处的和谐与美感。",
    traits: "INFP 是理想主义的守护者。你的内心情感极其丰富敏感，对真善美有着近乎执着的追求。你不随波逐流，重视内心的独立与真实体验。",
    strengths: ["极高的同理心与艺术创造力", "思想开放包容，对世界抱有善意", "对自己的理想与价值观坚定不移", "善于用文字、艺术传递深刻情感"],
    pitfalls: ["容易陷入理想化，对残酷现实感到挫败", "极度害怕冲突与批评，倾向于自我怀疑", "做事容易拖延，缺乏条理性与计划执行", "过于敏感，容易沉溺于消极情绪"],
    careers: ["独立插画家/艺术家", "心理辅导员", "自由撰稿人", "品牌故事专家", "教育咨询师"],
    relationship: "在爱情中，你是极其浪漫且忠诚的伴侣。你渴望无条件的接纳与真挚的理解，会全心全意为伴侣营造温暖、有诗意的亲密关系。",
    famous: ["威廉·莎士比亚 (William Shakespeare)", "J.K.罗琳 (J.K. Rowling)", "文森特·梵高"]
  },
  ENFJ: {
    title: "ENFJ - 主人公 / 灵魂教育家",
    summary: "富有魅力且鼓舞人心的领导者。你善于发现他人的闪光点与潜在天赋，并倾尽全力引导团队共同成长。",
    traits: "ENFJ 是极具同理心与感染力的社交领袖。你能迅速察觉团队中的情绪气氛，善于沟通并鼓励每个人达成共同的目标。你富有天然的利他精神与公信力。",
    strengths: ["极具号召力与情绪感染力", "极高的情商与同理心，善于凝聚团队", "无私奉献，天然具备利他主义精神", "沟通表达能力极佳"],
    pitfalls: ["容易过度卷入他人的问题，忽略自身需求", "过于在意他人评价与认可", "偶尔会因为过于积极而给他人带来压迫感", "难以做出可能伤害他人的决策"],
    careers: ["组织发展(OD)专家", "企业高级培训师", "公关/品牌总监", "教育家", "社区运营专家"],
    relationship: "你是充满热情与关怀的爱人。你乐于为伴侣付出，渴望帮助伴侣实现理想，但也希望对方能给予等价的情感回应与肯定。",
    famous: ["贝拉克·奥巴马 (Barack Obama)", "马丁·路德·金", "奥普拉·温弗瑞"]
  },
  ENFP: {
    title: "ENFP - 竞选者 / 灵感追梦人",
    summary: "热情、富有创造性且自由洒脱的社交家。你总能从生活和人际关系中发现无限乐趣与可能性，感染身边的每一个人。",
    traits: "ENFP 是充满生命能量的追梦人。你拥有无穷无尽的奇思妙想，善于在初次见面时打动人心。你抗拒平庸与束缚，总是积极地追求自由与灵感。",
    strengths: ["充满源源不断的热情与生命活力", "极佳的交际沟通与破冰能力", "灵感迸发，善于给团队带来新视角", "包容乐观，善于激励鼓舞他人"],
    pitfalls: ["容易三分钟热度，缺乏长期坚持的毅力", "过于感性，容易被情绪冲昏头脑", "讨厌繁琐、重复的标准流程(SOP)", "难以拒绝他人，容易让自己不堪重负"],
    careers: ["创意总监", "活动营销策划师", "节目主持人", "独立自媒体博主", "体验设计师"],
    relationship: "你追求充满激情、新鲜感与探索乐趣的恋爱。你希望伴侣是你的灵感伙伴，能陪你体验世界的多姿多彩，共同成长。",
    famous: ["罗宾·威廉姆斯 (Robin Williams)", "马克·吐温 (Mark Twain)", "华特·迪士尼"]
  },
  ISTJ: {
    title: "ISTJ - 检查员 / 严谨实干家",
    summary: "注重事实、传统与纪律的稳健实干家。你脚踏实地、恪尽职守，是团队与家庭中最值得信赖的坚固基石。",
    traits: "ISTJ 是秩序与规则的守护者。你做事极其严谨有条理，讲求证据与事实依据。只要是你接下的承诺，无论多艰难，你都会一丝不苟地按时高质量交付。",
    strengths: ["极其严谨可靠，恪守承诺与标准", "注重细节与事实数据，办事有条不紊", "客观公正，具有高度的职业道德", "执行力强，善于建立稳定规范"],
    pitfalls: ["过于固执保守，抗拒未经验证的变革", "显得缺乏灵活性与人情味", "习惯埋头干，不善于表达情绪", "容易对不合规的事情产生过度焦虑"],
    careers: ["高级会计师/审计师", "合规风控官", "数据运营总监", "项目质量监理", "司法/行政专家"],
    relationship: "在亲密关系中，你用实际行动而非甜言蜜语表达爱意。你忠诚、专一、靠谱，能给伴侣提供极其充沛的物质与生活安全感。",
    famous: ["华伦·巴菲特 (Warren Buffett)", "乔治·华盛顿", "亨利·福特 (Henry Ford)"]
  },
  ISFJ: {
    title: "ISFJ - 守卫者 / 温暖护卫",
    summary: "非常专注、温和且富有责任感的保护者。你总是默默守护你关爱的人，用细致入微的关怀维持家庭与团队的和谐。",
    traits: "ISFJ 是温暖的幕后守护者。你心思极其细腻，善于记住身边的每一个人的小偏好与情绪起伏。你默默奉献，脚踏实地，在不张扬中维系着团体的运转。",
    strengths: ["细致入微的照顾与深层同理心", "忠诚可靠，责任感与奉献精神极强", "实际动手与后勤保障能力卓越", "做事脚踏实地，极富耐心"],
    pitfalls: ["习惯过度压抑自己的需求，委曲求全", "极度害怕冲突，习惯默默承受伤害", "抗拒剧烈的环境改变与不确定性", "容易被不感恩的人利用"],
    careers: ["高级护理/医疗专家", "行政运营总监", "客户成功经理", "基础教育教师", "人力资源专员"],
    relationship: "你是最贴心、最可靠的伴侣。你会用心记住伴侣的每一个喜好与习惯，默默为家庭付出，追求长久、稳定的温馨幸福。",
    famous: ["特蕾莎修女 (Mother Teresa)", "英女皇伊丽莎白二世", "凯特·米德尔顿"]
  },
  ESTJ: {
    title: "ESTJ - 总管 / 高效执行官",
    summary: "出色的管理者，在管理事物与组织秩序方面无与伦比。你讲求效率、清晰的规则、事实标准与高效的执行。",
    traits: "ESTJ 是高效组织的指挥官。你善于梳理纷繁复杂的业务流程，制定标准化的规范(SOP)。你崇尚务实、结果导向，拥有出色的领导调度能力。",
    strengths: ["卓越的组织、规划与流程梳理能力", "意志坚定，直截了当，守信重诺", "执行力极强，能确保项目按时达标", "讲求事实与客观逻辑"],
    pitfalls: ["容易显得过于强硬、专断与固执", "难以理解或包容敏感脆弱的情绪", "习惯用单一标准衡量所有人", "过于看重规则，偶尔缺乏灵活性"],
    careers: ["企业运营总监(COO)", "资深项目管理专家(PMP)", "工厂/生产管理者", "合规监管官"],
    relationship: "你对待感情极其认真且讲求责任。你希望建立有秩序、稳定的家庭，愿意担当家庭的保护者与支柱，但需要学习多倾听伴侣的情感需求。",
    famous: ["亨利·福特 (Henry Ford)", "约翰·D·洛克菲勒", "胡佛"]
  },
  ESFJ: {
    title: "ESFJ - 执政官 / 热情社交家",
    summary: "极具同情心、受欢迎且乐于助人的社交枢纽。你关注社区与和谐，总是积极参与并细心照顾周围的每一个人。",
    traits: "ESFJ 是人群中的暖流。你极善于社交互动与人际维系，能迅速调动聚会与团队的气氛。你重视道德与传统，乐于为朋友和家庭排忧解难。",
    strengths: ["出色的社交人际交往与破冰能力", "责任感强，极善于营造温馨和谐氛围", "务实且善于处理日常琐事与组织活动", "忠诚度高，重视家庭与朋友关系"],
    pitfalls: ["过于在意他人的社会评价与认可", "容易为了维持和谐而回避核心矛盾", "难以接受批评，容易感到受伤害", "偶尔操心过多，让人觉得有些爱包办"],
    careers: ["HRBP (人力资源合作伙伴)", "大客户关系总监", "社区运营总监", "高级公关/活动主持人"],
    relationship: "你是充满热情与关怀的陪伴者。你乐于照顾伴侣的生活起居，喜欢一起参加社交聚会，希望得到伴侣明确的认可与爱意回应。",
    famous: ["泰勒·斯威夫特 (Taylor Swift)", "比尔·克林顿", "詹妮弗·加纳"]
  },
  ISTP: {
    title: "ISTP - 鉴赏家 / 冷静工匠",
    summary: "大胆而实际的物理实验家，擅长使用各种工具与技术。你冷静沉着、喜欢用实践行动去拆解和解决复杂的眼前难题。",
    traits: "ISTP 是实践领域的解题大师。你拥有冷静的头脑与出色的动手天赋，善于理清机械、代码或系统的底层运作模式。你在危机时刻极度镇定，能瞬间找出突破口。",
    strengths: ["理性高效的解题者，实践能力极其突出", "危机应变能力强，在紧急关头冷静沉着", "思维灵活，不被无用规则束缚", "动手操作与技术拆解天赋异禀"],
    pitfalls: ["难以长时间专注于纯理论或抽象概念", "情感表达冷淡，容易显得难以接近", "讨厌长期约束与繁琐的承诺", "容易追求刺激而忽略潜在风险"],
    careers: ["高级系统工程师", "赛车手/机械专家", "安全测试工程师", "法医/技术专家", "硬件研发员"],
    relationship: "你追求自由、随性、低内耗的恋爱。你喜欢用行动代替说教，希望伴侣尊重你的个人兴趣与空间，共同体验当下的乐趣。",
    famous: ["克林特·伊斯特物 (Clint Eastwood)", "迈克尔·乔丹 (Michael Jordan)", "布鲁斯·威利斯"]
  },
  ISFP: {
    title: "ISFP - 探险家 / 灵动艺术家",
    summary: "灵活迷人的艺术家，随时准备探索和体验新事物。你对美感有敏锐直觉，温和包容，享受当下的真实生活。",
    traits: "ISFP 是生活美的发现者。你性情温和，对人包容无偏见。你喜欢用视觉、音乐或手工艺品表达内心情感，讨厌僵化的规则，崇尚随性自然的体验。",
    strengths: ["极高的审美敏锐度与生活品味", "热情而温和，极富同理心与包容度", "思想开放灵动，不喜欢评判他人", "善于在细节中创造美与惊奇"],
    pitfalls: ["极度抗拒长远规划与沉重压迫感", "容易自我怀疑，害怕正面冲突", "做事缺乏长期计划与纪律性", "过度压抑内心情感"],
    careers: ["服装/UI/视觉设计师", "摄影师/独立音乐人", "室内设计师", "造型师/体验师"],
    relationship: "你是温和、浪漫且体贴的爱人。你喜欢通过小惊喜与美感表达爱意，希望与伴侣建立没有压力的舒适关系，一起享受美好的当下。",
    famous: ["迈克尔·杰克逊 (Michael Jackson)", "弗里达·卡罗 (Frida Kahlo)", "蕾哈娜 (Rihanna)"]
  },
  ESTP: {
    title: "ESTP - 企业家 / 敏捷挑战者",
    summary: "聪明、活力充沛且极具洞察力的冒险家。你喜欢生活在边缘与现场，敢于承担风险并快速见效。",
    traits: "ESTP 是实战前线的破局者。你拥有极其敏锐的现场观察力，能快速抓住商机与他人弱点。你充满活力，敢于在不确定性中迅速下注，享受赢的感觉。",
    strengths: ["极其敏锐的现场观察力与说服力", "危机应变敏捷，敢于承担风险突破瓶颈", "行动敏捷直截了当，不拖泥带水", "善于调动眼前的一切资源"],
    pitfalls: ["容易缺乏耐心，厌恶理论推演", "偶尔表现得过于冲动或冒失", "容易忽视行为对长远未来的影响", "对情感深层需求缺乏耐心"],
    careers: ["大客户销售总监", "风险投资交易员", "危机公关专家", "现场项目经理", "特技/极限运动者"],
    relationship: "你追求充满激情、刺激与新鲜感的恋爱。你喜欢带伴侣体验各种新鲜事物，用幽默与行动征服对方，讨厌沉闷与猜忌。",
    famous: ["唐纳德·特朗普 (Donald Trump)", "欧内斯特·海明威 (Ernest Hemingway)"]
  },
  ESFP: {
    title: "ESFP - 表演者 / 现场明星",
    summary: "自发的、精力充沛和热情洋溢的人。生活在你周围永不枯燥，你乐于成为焦点并给他人带来欢笑与能量。",
    traits: "ESFP 是现场氛围的灵魂。你开朗幽默，拥有极强的表演与沟通天赋。你活在当下，善于将沉闷的环境变得妙趣横生，给周围人注入无限正能量。",
    strengths: ["极具舞台与社交感染力，幽默风趣", "出色的社交沟通与氛围带动技巧", "观察敏锐，能迅速察觉他人情绪变化", "乐观开朗，生活体验感极强"],
    pitfalls: ["难以专注于长远的计划与复杂逻辑", "容易受当下情绪驱动冲动消费或决策", "害怕寂寞与被忽视", "回避严肃或沉重的深刻话题"],
    careers: ["演艺公关经理", "体验/活动设计师", "旅游时尚博主/主播", "时尚采购总监"],
    relationship: "你是关系中的开心果与热烈伴侣。你愿意把最好的快乐分享给对方，希望恋爱充满惊喜与笑声，一起享受热烈的生活。",
    famous: ["埃尔维斯·普雷斯利 (猫王)", "阿黛尔 (Adele)", "玛丽莲·梦露"]
  }
};

var HOLLAND_DESCRIPTIONS = {
  R: { code: "R 实用型 (Realistic)", trait: "动手能力强、注重实践与机械操作，喜欢具体明确的技术性工作。", careers: ["机械工程师", "硬件研发", "赛车与设备专家", "户外勘探"] },
  I: { code: "I 研究型 (Investigative)", trait: "理性严谨、好奇心强、善于抽象思考与科学推导解题。", careers: ["数据科学家", "理论物理学者", "算法研发", "医学研究员"] },
  A: { code: "A 艺术型 (Artistic)", trait: "富于想象力与审美敏锐度，喜欢自由创作与突破常规。", careers: ["视觉/UI设计师", "独立撰稿人", "创意总监", "音乐人"] },
  S: { code: "S 社会型 (Social)", trait: "热情友善、有同理心，乐于教育培训、关怀与辅导他人。", careers: ["心理咨询师", "高级HR/培训师", "社区运营官", "教育家"] },
  E: { code: "E 企业型 (Enterprise)", trait: "富有野心、领导力与说服力，善于商务谈判与组织资源。", careers: ["项目创始人", "商务总监", "风投分析师", "市场营销总监"] },
  C: { code: "C 常规型 (Conventional)", trait: "细致严谨、守时守信，擅长流程梳理、数据核算与合规管理。", careers: ["高级审计师", "风控官", "数据运营专家", "行政管理总监"] }
};

// ==========================================================================
// 2. Comprehensive 8 Tests Full Database Definition
// ==========================================================================

var TEST_DATABASE = {
  gad7: {
    id: "gad7",
    title: "GAD-7 焦虑指数与精神内耗测评",
    subtitle: "评估近两周的情绪负荷与精神疲劳等级",
    questions: [
      {
        id: 1,
        text: "在过去两周内，你感到紧张、焦虑或急躁的频率是？",
        options: [
          { label: "A. 完全没有", value: 0 },
          { label: "B. 有几天", value: 1 },
          { label: "C. 超过一半的日子", value: 2 },
          { label: "D. 几乎每天", value: 3 }
        ]
      },
      {
        id: 2,
        text: "在过去两周内，你无法停止或控制担忧的频率是？",
        options: [
          { label: "A. 完全没有", value: 0 },
          { label: "B. 有几天", value: 1 },
          { label: "C. 超过一半的日子", value: 2 },
          { label: "D. 几乎每天", value: 3 }
        ]
      },
      {
        id: 3,
        text: "在过去两周内，你对各种各样的事情担忧过多的频率是？",
        options: [
          { label: "A. 完全没有", value: 0 },
          { label: "B. 有几天", value: 1 },
          { label: "C. 超过一半的日子", value: 2 },
          { label: "D. 几乎每天", value: 3 }
        ]
      },
      {
        id: 4,
        text: "在过去两周内，你感觉很难放松下来的频率是？",
        options: [
          { label: "A. 完全没有", value: 0 },
          { label: "B. 有几天", value: 1 },
          { label: "C. 超过一半的日子", value: 2 },
          { label: "D. 几乎每天", value: 3 }
        ]
      },
      {
        id: 5,
        text: "在过去两周内，由于不安而坐立不安、难以静坐的频率是？",
        options: [
          { label: "A. 完全没有", value: 0 },
          { label: "B. 有几天", value: 1 },
          { label: "C. 超过一半的日子", value: 2 },
          { label: "D. 几乎每天", value: 3 }
        ]
      },
      {
        id: 6,
        text: "在过去两周内，你变得容易烦躁或急躁的频率是？",
        options: [
          { label: "A. 完全没有", value: 0 },
          { label: "B. 有几天", value: 1 },
          { label: "C. 超过一半的日子", value: 2 },
          { label: "D. 几乎每天", value: 3 }
        ]
      },
      {
        id: 7,
        text: "在过去两周内，你感觉似乎将有可怕的事情发生而害怕的频率是？",
        options: [
          { label: "A. 完全没有", value: 0 },
          { label: "B. 有几天", value: 1 },
          { label: "C. 超过一半的日子", value: 2 },
          { label: "D. 几乎每天", value: 3 }
        ]
      }
    ]
  },

  bigfive: {
    id: "bigfive",
    title: "大五人格专业测评 (OCEAN)",
    subtitle: "剖析决定行为、社交与决策的五大性格杠杆",
    questions: [
      {
        id: 1,
        text: "面对全新的概念、未知的领域或艺术作品时，你通常？",
        options: [
          { label: "A. 充满强烈的探索欲望，喜欢脑洞大开地琢磨背后逻辑", value: { O: 2 } },
          { label: "B. 保持理性好奇，但更看重该领域是否有实际应用价值", value: { O: 1 } },
          { label: "C. 更习惯传统熟悉的事物，对过于抽象的概念不太感兴趣", value: { O: 0 } }
        ]
      },
      {
        id: 2,
        text: "在制定工作或学习计划时，你的日常习惯更接近？",
        options: [
          { label: "A. 极其自律严谨，会列出明确的清单(SOP)并按时交付", value: { C: 2 } },
          { label: "B. 有大致方向，但喜欢保留随性调整的弹性空间", value: { C: 1 } },
          { label: "C. 随性而为，容易拖延或凭当下的兴致做事", value: { C: 0 } }
        ]
      },
      {
        id: 3,
        text: "在参加多人聚会或社交场合时，你的精力充能方式是？",
        options: [
          { label: "A. 极其兴奋开朗，在互动中能迅速拉满精神能量", value: { E: 2 } },
          { label: "B. 视氛围而定，能正常破冰社交但也需要独处充电", value: { E: 1 } },
          { label: "C. 感到精力消耗很快，更喜欢安静地独处或1对1交流", value: { E: 0 } }
        ]
      },
      {
        id: 4,
        text: "当与他人发生意见分歧或利益冲突时，你倾向于？",
        options: [
          { label: "A. 极具同理心与体谅，优先妥协或寻找双赢局面", value: { A: 2 } },
          { label: "B. 客观对事不对人，合理维护个人边界", value: { A: 1 } },
          { label: "C. 坚持原则与自我立场，直截了当进行据理力争", value: { A: 0 } }
        ]
      },
      {
        id: 5,
        text: "遇到突发意外事件、被批评或压力陡增时，你的情绪反应通常是？",
        options: [
          { label: "A. 非常敏感焦虑，脑海里容易反复琢磨并内耗", value: { N: 2 } },
          { label: "B. 偶尔会有轻微波澜，但能很快通过自我暗示恢复平静", value: { N: 1 } },
          { label: "C. 极度沉着冷静，皮质醇稳定，不会被情绪牵着走", value: { N: 0 } }
        ]
      },
      {
        id: 6,
        text: "你是否经常沉溺于白日梦、奇思妙想或探索事物背后的原理？",
        options: [
          { label: "A. 经常如此，头脑里充满了跨界的想象与灵感", value: { O: 2 } },
          { label: "B. 偶尔在闲暇时会产生一些新奇念头", value: { O: 1 } },
          { label: "C. 很少，更关注当下的现实生活与眼前的务实工作", value: { O: 0 } }
        ]
      },
      {
        id: 7,
        text: "你的房间、桌面或个人工作空间的整理习惯是？",
        options: [
          { label: "A. 井井有条，所有物品都有固定摆放的位置与分类", value: { C: 2 } },
          { label: "B. 大体整洁，但在高强度忙碌时会显得有些凌乱", value: { C: 1 } },
          { label: "C. 相当随性，认为“混乱中自由独特的秩序”更舒适", value: { C: 0 } }
        ]
      },
      {
        id: 8,
        text: "在团队决策中，你更看重？",
        options: [
          { label: "A. 团队的和谐氛围与每个人的情绪体验", value: { A: 2 } },
          { label: "B. 兼顾客观事实与人情关怀", value: { A: 1 } },
          { label: "C. 效率与事实结果，即使可能刺伤少数人的情绪", value: { A: 0 } }
        ]
      },
      {
        id: 9,
        text: "你是否容易感到孤独、内耗或对微小的冷淡过分敏感？",
        options: [
          { label: "A. 是的，心思极其细腻敏感，容易受外界情绪牵动", value: { N: 2 } },
          { label: "B. 偶尔会有，但不会持续太久", value: { N: 1 } },
          { label: "C. 几乎不会，心态极其阳光稳定，不搞精神内耗", value: { N: 0 } }
        ]
      },
      {
        id: 10,
        text: "面对未经验证的创新方案或新生活体验，你的态度通常是？",
        options: [
          { label: "A. 跃跃欲试，非常享受尝试未知事物带来的刺激与新鲜感", value: { O: 2 } },
          { label: "B. 观望评估风险，确认无大碍后再做尝试", value: { O: 1 } },
          { label: "C. 谨慎抗拒，更倾向于使用久经考验的传统方案", value: { O: 0 } }
        ]
      }
    ]
  },

  dating_signal: {
    id: "dating_signal",
    title: "他到底喜不喜欢你？关系信号深度拆解",
    subtitle: "8道题拆解他没说出口的关系信号",
    questions: [
      {
        id: 1,
        text: "你们平时聊天时，他主动发起话题与回复的节奏通常是？",
        options: [
          { label: "A. 经常主动发起话题，分享他的生活细节或问你在做什么，回复速度极快", value: { initiation: 3, responsiveness: 3 } },
          { label: "B. 你发消息他基本都会认真回，但很少主动发起新话题", value: { responsiveness: 2 } },
          { label: "C. 回复时快时慢，有时秒回，有时消失几个小时没有任何解释", value: { consistency: 0 } },
          { label: "D. 敷衍居多，多为单字答复或隔天回复", value: { intent: 0 } }
        ]
      },
      {
        id: 2,
        text: "当你提到自己某个小偏好（如不吃香菜、生病、喜爱的电影）时，他会？",
        options: [
          { label: "A. 默默记住并在下次约会或聊天中主动照顾到，给你带来惊喜", value: { memory: 3, care: 3 } },
          { label: "B. 当时表示关心，但过后可能就忘了", value: { care: 1 } },
          { label: "C. 只在顺路或方便时顺便提及", value: { effort: 1 } },
          { label: "D. 基本没印象或避开不谈", value: { care: 0 } }
        ]
      },
      {
        id: 3,
        text: "你们约会安排的频率与主动程度？",
        options: [
          { label: "A. 他会提前1-3天主动规划具体地点与行程，重视你们的见面时间", value: { effort: 3, intent: 3 } },
          { label: "B. 绝大部分是你提出约会，他基本配合参加", value: { reciprocity: 1 } },
          { label: "C. 经常临时（如深夜或当天半小时前）约你见面", value: { proximity: 1 } },
          { label: "D. 经常以忙碌为由推迟或取消见面，且很少改期补偿", value: { commitment: 0 } }
        ]
      },
      {
        id: 4,
        text: "在面对朋友、同事或公众场合时，他对你们关系的呈现态度是？",
        options: [
          { label: "A. 主动将你介绍给他的核心朋友圈，并在社交媒体或公开场合大方互动", value: { integration: 3, exclusivity: 3 } },
          { label: "B. 私下互动甜蜜，但在人前或社交平台刻意保持安全距离", value: { exclusivity: 1 } },
          { label: "C. 避谈你们的关系定义，对外宣称“只是好朋友”", value: { commitment: 0 } },
          { label: "D. 极力掩饰关系，甚至要求你不能告诉别人", value: { exclusivity: 0 } }
        ]
      },
      {
        id: 5,
        text: "面对未来（如假期安排、换工作、长远生活），他的态度是？",
        options: [
          { label: "A. 规划中明确包含你，会用“我们”来讨论长远计划", value: { commitment: 3, trajectory: 3 } },
          { label: "B. 偶尔提及短期计划（如过几天去哪玩），但避谈长远未来", value: { commitment: 1 } },
          { label: "C. 认为“走一步看一步，谈未来太累”，回避任何承诺", value: { trajectory: 0 } },
          { label: "D. 他的规划里完全只有他自己，甚至不考虑对你的影响", value: { commitment: 0 } }
        ]
      },
      {
        id: 6,
        type: "multi",
        text: "【多选题】在过去一个月中，他是否有过以下【主动投入行为】？（可多选）",
        options: [
          { label: "A. 在你情绪低落或遇到困难时，第一时间赶来陪伴或帮你想办法解决", value: { care: 2 } },
          { label: "B. 送过你精心准备或符合你喜好的礼物/小惊喜", value: { effort: 2 } },
          { label: "C. 为你做出了某些习惯或行程上的妥协调整", value: { effort: 2 } },
          { label: "D. 允许你接触他的手机、家庭或核心私人空间", value: { exclusivity: 2 } },
          { label: "E. 以上均没有发生过", value: { none: true } }
        ]
      },
      {
        id: 7,
        text: "当你主动退缩或回复变慢时，他的第一反应通常是？",
        options: [
          { label: "A. 察觉到你的异常，主动问你是不是心情不好或自己做错了什么", value: { attention: 3, responsiveness: 3 } },
          { label: "B. 也跟着放慢回复，开始玩拉扯游戏", value: { consistency: 1 } },
          { label: "C. 完全没察觉到你的退缩，依然按他的节奏回复", value: { attention: 0 } },
          { label: "D. 顺水推舟，直接冷处理消失", value: { intent: 0 } }
        ]
      },
      {
        id: 8,
        text: "你内心对这段关系的真实直觉感受更接近？",
        options: [
          { label: "A. 踏实且被珍视，不用猜忌，有明确的安全感", value: { attraction: 3, commitment: 3 } },
          { label: "B. 甜蜜但偶尔焦虑，总觉得他还没完全对我敞开心扉", value: { attraction: 2, commitment: 1 } },
          { label: "C. 像坐过山车，忽冷忽热，绝大部分时间在内耗猜测", value: { consistency: 0 } },
          { label: "D. 卑微疲惫，感觉自己随时会被替代", value: { attraction: 0 } }
        ]
      }
    ]
  },

  attachment: {
    id: "attachment",
    title: "恋爱依恋类型测评：你是安全型还是回避型？",
    subtitle: "剖析你的亲密关系底色与心理避风港",
    questions: [
      {
        id: 1,
        text: "当伴侣没有秒回消息或显得有些冷淡时，你的第一反应是？",
        options: [
          { label: "A. 理解对方可能有事要忙，安心做自己的事情", value: "Secure" },
          { label: "B. 开始焦虑胡思乱想，怀疑他是不是不爱我了", value: "Anxious" },
          { label: "C. 觉得烦躁，我也立刻冷淡下来，甚至想直接关掉手机", value: "Avoidant" },
          { label: "D. 内心恐慌想要抓紧对方，但又强迫自己冷漠疏远", value: "Fearful" }
        ]
      },
      {
        id: 2,
        text: "在关系逐渐深入、需要展示真实脆弱与依赖对方时，你感觉？",
        options: [
          { label: "A. 非常自然舒适，相信伴侣会接纳我的脆弱", value: "Secure" },
          { label: "B. 极度渴望依赖对方，甚至希望24小时黏在一起", value: "Anxious" },
          { label: "C. 感到别扭与恐慌，认为‘只有靠自己才是最安全的’", value: "Avoidant" },
          { label: "D. 渴望被接纳，但又极其害怕展示脆弱后会被伤害抛弃", value: "Fearful" }
        ]
      },
      {
        id: 3,
        text: "面对关系中的争吵与正面冲突，你习惯的解决方式是？",
        options: [
          { label: "A. 坦诚沟通，说出真实想法与需求，共同解决矛盾", value: "Secure" },
          { label: "B. 情绪容易激动发脾气，试图通过争吵吸引对方关注", value: "Anxious" },
          { label: "C. 开启防风林防线，关门、冷处理或直接逃跑回避", value: "Avoidant" },
          { label: "D. 忽冷忽热，一边放狠话推开对方，一边内心期盼对方挽留", value: "Fearful" }
        ]
      },
      {
        id: 4,
        text: "你内心深处对“被抛弃 / 被伤害”的恐惧程度是？",
        options: [
          { label: "A. 心态平稳自洽，明白即使分手自己也有独立生活能力", value: "Secure" },
          { label: "B. 非常高，经常担心伴侣随时会离开我", value: "Anxious" },
          { label: "C. 不担心，因为我从不给任何人伤害我的深度机会", value: "Avoidant" },
          { label: "D. 极度恐惧，因此总是先手推开对方来保护自己", value: "Fearful" }
        ]
      },
      {
        id: 5,
        text: "你对伴侣独立个人空间的态度是？",
        options: [
          { label: "A. 互相尊重，既有亲密陪伴也有各自独立的生活圈", value: "Secure" },
          { label: "B. 很难接受他有太多没有我的社交，容易患得患失", value: "Anxious" },
          { label: "C. 极度看重绝对的个人自由，厌恶被管束与查岗", value: "Avoidant" },
          { label: "D. 在‘渴望无限黏人’与‘渴望彻底独处’之间剧烈摇摆", value: "Fearful" }
        ]
      }
    ]
  },

  battery: {
    id: "battery",
    title: "社畜精神续航与发疯指数测评",
    subtitle: "测测你现在的心理‘剩余电量’与抗压极限",
    questions: [
      {
        id: 1,
        text: "早上闹钟响起的那一刻，你的心理状态更接近？",
        options: [
          { label: "A. 精力充沛，对今天的工作/生活抱有期待", value: 95 },
          { label: "B. 叹一口气，按掉闹钟挣扎着起床", value: 65 },
          { label: "C. 感到深深的厌倦，想直接请假假装消失", value: 35 },
          { label: "D. 灵魂出窍，甚至想大叫一声“毁灭吧”", value: 10 }
        ]
      },
      {
        id: 2,
        text: "下班/放学后，如果朋友叫你参加多人社交聚会，你的第一反应是？",
        options: [
          { label: "A. 欣然前往，非常享受热闹破冰充能", value: 90 },
          { label: "B. 视关系而定，如果是熟人聚会可以去去", value: 70 },
          { label: "C. 社交能量已抽干，委婉找借口推掉直奔回家", value: 40 },
          { label: "D. 连看消息都觉得累，开启静音模式不理任何人", value: 15 }
        ]
      },
      {
        id: 3,
        text: "遇到工作/生活中的突发变故（如临时加塞繁重任务），你的情绪是？",
        options: [
          { label: "A. 沉着冷静，理清优先级并高效推进", value: 90 },
          { label: "B. 内心有点烦躁，但能按部就班默默做完", value: 60 },
          { label: "C. 情绪瞬间低落，极度沮丧并开始自我怀疑", value: 30 },
          { label: "D. 瞬间被点燃爆棚，处于临界点发疯边缘", value: 10 }
        ]
      },
      {
        id: 4,
        text: "过去一周里，你的睡眠与报复性熬夜情况是？",
        options: [
          { label: "A. 作息极其规律，睡得香甜，一觉到天亮", value: 95 },
          { label: "B. 入睡稍慢，但整体睡眠质量还算尚可", value: 70 },
          { label: "C. 报复性刷手机熬夜到凌晨1-2点才舍得睡", value: 40 },
          { label: "D. 长期失眠多梦，半夜惊醒，白天昏昏沉沉", value: 20 }
        ]
      },
      {
        id: 5,
        text: "你现在的心理“发疯”指数更接近？",
        options: [
          { label: "A. 发疯指数 0%：温和自洽，情绪极为稳定", value: 95 },
          { label: "B. 发疯指数 30%：偶尔碎碎念发牢骚，整体可控", value: 75 },
          { label: "C. 发疯指数 70%：表情麻木，内心万马奔腾发疯抗议", value: 35 },
          { label: "D. 发疯指数 99%：只差一颗火星就能当场炸裂", value: 10 }
        ]
      }
    ]
  },

  eq: {
    id: "eq",
    title: "高情商测评：测测你的情绪洞察与防PUA能力",
    subtitle: "评估同理心深度与社交边界感",
    questions: [
      {
        id: 1,
        text: "当同事/朋友对你进行暗含讽刺或道德绑架的评价时，你会？",
        options: [
          { label: "A. 温和坚决地反客为主破局，不被对方带偏节奏", value: 95 },
          { label: "B. 表面礼貌回应，内心清醒看透对方的把戏", value: 80 },
          { label: "C. 感到尴尬不适，选择默默忍受不正面反驳", value: 50 },
          { label: "D. 陷入自我怀疑，真的以为是自己不够好", value: 20 }
        ]
      },
      {
        id: 2,
        text: "在社交场合察觉到气氛冷场或有人尴尬时，你通常？",
        options: [
          { label: "A. 巧妙顺畅地接话解围，照顾到每个人的感受", value: 90 },
          { label: "B. 会试着帮忙转移话题，缓解尴尬", value: 75 },
          { label: "C. 虽然察觉到了，但不知道怎么说，选择保持沉默", value: 55 },
          { label: "D. 完全没察觉到场面氛围的变化", value: 35 }
        ]
      },
      {
        id: 3,
        text: "面对伴侣或朋友的情绪宣泄（抱怨倾诉），你的第一反应是？",
        options: [
          { label: "A. 先充分倾听同理对方的情绪，再适时提供可行建议", value: 95 },
          { label: "B. 陪伴倾听，充当合格的情绪容器", value: 80 },
          { label: "C. 立刻指责对方的错误，强行开启讲大道理模式", value: 45 },
          { label: "D. 觉得烦躁，不愿承担他人的负能量", value: 25 }
        ]
      },
      {
        id: 4,
        text: "遇到别人提出你不情愿的不合理请求时，你会？",
        options: [
          { label: "A. 明确、体面地果断拒绝，不给暧昧拉扯空间", value: 90 },
          { label: "B. 找一个合理的客观理由婉言拒绝", value: 75 },
          { label: "C. 犹豫不决，最后硬着头皮答应下来并心里委屈", value: 40 },
          { label: "D. 不敢拒绝，习惯性讨好顺从他人", value: 20 }
        ]
      },
      {
        id: 5,
        text: "你能否精准识别自己当下的情绪状态（如“我这不是生气，而是失望”）？",
        options: [
          { label: "A. 完全可以，能迅速厘清内心情感并理性调控", value: 95 },
          { label: "B. 绝大部分时候能做到精准自我察觉", value: 80 },
          { label: "C. 偶尔糊涂，容易被无名火或焦虑牵着走", value: 50 },
          { label: "D. 很难，经常感到莫名压抑或突然失控爆怒", value: 25 }
        ]
      },
      {
        id: 6,
        text: "面对他人的精神操控(PUA)倾向（如“我这都是为了你好”），你通常？",
        options: [
          { label: "A. 警觉性极高，瞬间建立心理界限不受道德绑架", value: 95 },
          { label: "B. 能分辨出对方的用心，保持距离", value: 75 },
          { label: "C. 偶尔会感到困惑与内疚", value: 45 },
          { label: "D. 极易被说服，甚至按照对方的控制意图改变自己", value: 20 }
        ]
      }
    ]
  },

  mbti: {
    id: "mbti",
    title: "MBTI 16型人格专业测评",
    subtitle: "探索你的核心认知模式与职业优势",
    questions: [
      {
        id: 1,
        text: "经历了高压累人的一周后，你更倾向于如何恢复能量？",
        options: [
          { label: "A. 参加热闹的社交聚会，与朋友聊天狂欢中充电 (E)", value: "E" },
          { label: "B. 独自静处，看书、打游戏或泡澡享受私人空间 (I)", value: "I" }
        ]
      },
      {
        id: 2,
        text: "在接收新信息或理解问题时，你更关注？",
        options: [
          { label: "A. 眼前的具体事实、细节与实践经验 (S)", value: "S" },
          { label: "B. 事物背后的深层规律、可能性与宏观愿景 (N)", value: "N" }
        ]
      },
      {
        id: 3,
        text: "做出关键决策时，你最依赖的判断标准是？",
        options: [
          { label: "A. 客观的逻辑推理、事实依据与效率 (T)", value: "T" },
          { label: "B. 个人核心价值观、他人的感受与团队和谐 (F)", value: "F" }
        ]
      },
      {
        id: 4,
        text: "处理日常工作与生活时，你更喜欢的节奏是？",
        options: [
          { label: "A. 制定明确的计划清单，有条不紊按时完成 (J)", value: "J" },
          { label: "B. 保持开放随性，根据当下的灵感与最新变化调整 (P)", value: "P" }
        ]
      },
      {
        id: 5,
        text: "在社交聚会中，你通常是？",
        options: [
          { label: "A. 主动破冰破话题、认识新朋友的氛围带动者 (E)", value: "E" },
          { label: "B. 倾向于与熟悉的少数朋友深聊，等待他人主动 (I)", value: "I" }
        ]
      },
      {
        id: 6,
        text: "你更欣赏哪种类型的对话或文章？",
        options: [
          { label: "A. 务实清晰、有明确步骤与落地指引的内容 (S)", value: "S" },
          { label: "B. 富于想象力、哲学思辨与创新隐喻的内容 (N)", value: "N" }
        ]
      },
      {
        id: 7,
        text: "当朋友向你倾诉困境时，你的第一反应是？",
        options: [
          { label: "A. 理性分析原因，帮他制定解题方案 (T)", value: "T" },
          { label: "B. 先同理他的情绪，给予温暖的拥抱与情感支持 (F)", value: "F" }
        ]
      },
      {
        id: 8,
        text: "面对周末或假期的行程，你的习惯是？",
        options: [
          { label: "A. 提前预订好酒店机票，做详细的攻略路线 (J)", value: "J" },
          { label: "B. 说走就走，到了目的地再随心探索 (P)", value: "P" }
        ]
      },
      {
        id: 9,
        text: "在团队头脑风暴中，你更倾向于？",
        options: [
          { label: "A. 脱口而出各种灵感脑洞，边说边理清思路 (E)", value: "E" },
          { label: "B. 在脑海里彻底深思熟虑后，再发表成熟见解 (I)", value: "I" }
        ]
      },
      {
        id: 10,
        text: "学习一项新技术或新知识时，你喜欢？",
        options: [
          { label: "A. 从具体的案例、样本和实际操作入手 (S)", value: "S" },
          { label: "B. 先厘清底层框架概念与整体发展全貌 (N)", value: "N" }
        ]
      },
      {
        id: 11,
        text: "被他人评价时，你更希望听到哪种称赞？",
        options: [
          { label: "A. “你非常理性、睿智且办事讲求效率” (T)", value: "T" },
          { label: "B. “你非常善良、体贴且有深厚同理心” (F)", value: "F" }
        ]
      },
      {
        id: 12,
        text: "面对生活中的突发变化与不确定性，你的心态是？",
        options: [
          { label: "A. 稍显焦虑，希望能尽快重回明确有掌控感的轨道 (J)", value: "J" },
          { label: "B. 感到兴奋，非常享受变化带来的新体验 (P)", value: "P" }
        ]
      }
    ]
  },

  holland: {
    id: "holland",
    title: "霍兰德职业兴趣测评 (RIASEC)",
    subtitle: "定位你的职业基因与理想工作赛道",
    questions: [
      {
        id: 1,
        text: "在以下日常动手与实践任务中，你最感兴趣的是？",
        options: [
          { label: "A. 组装机械、维修设备或户外体力拆解", value: "R" },
          { label: "B. 编写代码、推演算法或研究数据现象", value: "I" },
          { label: "C. 绘画设计、撰写诗歌或音乐创作", value: "A" },
          { label: "D. 组织公益活动、辅导他人或心理咨询", value: "S" }
        ]
      },
      {
        id: 2,
        text: "在面对未解难题或复杂现象时，你最享受？",
        options: [
          { label: "A. 用工具直接动手试验出物理解决办法 (R)", value: "R" },
          { label: "B. 深入查阅文献与底层原理进行逻辑解构 (I)", value: "I" },
          { label: "C. 跳出常规框框，提出极具艺术感的脑洞方案 (A)", value: "A" },
          { label: "D. 发挥号召力，带领团队攻坚克难 (E)", value: "E" }
        ]
      },
      {
        id: 3,
        text: "在艺术、设计或表达方面，你更倾向于？",
        options: [
          { label: "A. 追求极致的视觉美感、个性与原创灵魂 (A)", value: "A" },
          { label: "B. 将表达作为感染鼓舞他人的教育工具 (S)", value: "S" },
          { label: "C. 将设计作为包装品牌与商业变现的杠杆 (E)", value: "E" },
          { label: "D. 建立规范、标准化的产品审美与交付流程 (C)", value: "C" }
        ]
      },
      {
        id: 4,
        text: "在人际互动与帮助他人方面，你最希望？",
        options: [
          { label: "A. 倾听陪伴，辅导他人走出心灵困境 (S)", value: "S" },
          { label: "B. 担任领袖，分配任务并带领团队赢得胜利 (E)", value: "E" },
          { label: "C. 提供严谨精确的数据核算与后勤保障 (C)", value: "C" },
          { label: "D. 研发具体的实用技术帮他人提升效率 (R)", value: "R" }
        ]
      },
      {
        id: 5,
        text: "在商业、管理或竞争场合，你更看重？",
        options: [
          { label: "A. 商业说服力、谈判回款与市场占有率 (E)", value: "E" },
          { label: "B. 合规风控、精准核算与制度流程秩序 (C)", value: "C" },
          { label: "C. 产品的技术底层硬核壁垒 (I)", value: "I" },
          { label: "D. 品牌的文化传播与社会价值 (S)", value: "S" }
        ]
      },
      {
        id: 6,
        text: "在处理数据、文档与流程管理时，你更追求？",
        options: [
          { label: "A. 极其严谨、零差错、按标准SOP归档交付 (C)", value: "C" },
          { label: "B. 挖掘数据背后的深层科研逻辑与因果性 (I)", value: "I" },
          { label: "C. 将繁琐流程自动化、机械化落地 (R)", value: "R" },
          { label: "D. 自由无拘束，不喜欢被固定的表单束缚 (A)", value: "A" }
        ]
      }
    ]
  }
};

// 确保在 window 全局挂载
if (typeof window !== 'undefined') {
  window.TEST_DATABASE = TEST_DATABASE;
  window.MBTI_DESCRIPTIONS = MBTI_DESCRIPTIONS;
  window.HOLLAND_DESCRIPTIONS = HOLLAND_DESCRIPTIONS;
}

// ==========================================================================
// 3. Comprehensive Test Engine Execution Logic
// ==========================================================================

var currentTest = null;
var currentQuestionIndex = 0;
var userAnswers = {};

function initStandaloneTest(testId) {
  if (testId && TEST_DATABASE[testId]) {
    currentTest = TEST_DATABASE[testId];
  }
  currentQuestionIndex = 0;
  userAnswers = {};

  var heroIntro = document.getElementById("heroIntro");
  var testFlow = document.getElementById("testFlow");

  if (heroIntro) heroIntro.style.display = "block";
  if (testFlow) testFlow.style.display = "none";
}

function startCurrentTest(targetTestId) {
  if (targetTestId && TEST_DATABASE[targetTestId]) {
    currentTest = TEST_DATABASE[targetTestId];
  } else if (!currentTest) {
    currentTest = TEST_DATABASE["dating_signal"];
  }

  var heroIntro = document.getElementById("heroIntro");
  var testFlow = document.getElementById("testFlow");
  var catalogGrid = document.querySelector(".catalog-grid");
  var resultView = document.getElementById("resultView");

  if (heroIntro) heroIntro.style.display = "none";
  if (catalogGrid) catalogGrid.style.display = "none";
  if (resultView) resultView.style.display = "none";
  if (testFlow) testFlow.style.display = "block";

  currentQuestionIndex = 0;
  userAnswers = {};
  renderQuestion();
}

function renderQuestion() {
  if (!currentTest || !currentTest.questions) return;
  var q = currentTest.questions[currentQuestionIndex];
  var total = currentTest.questions.length;

  var progressPercent = Math.round(((currentQuestionIndex + 1) / total) * 100);
  var progressBar = document.getElementById("progressBarFill");
  var progressText = document.getElementById("progressText");
  var qNumber = document.getElementById("questionNumber");
  var qText = document.getElementById("questionText");

  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (progressText) progressText.innerText = `${currentQuestionIndex + 1} / ${total}`;
  if (qNumber) qNumber.innerText = `QUESTION ${currentQuestionIndex + 1} ${q.type === 'multi' ? '【多选题】' : ''}`;
  if (qText) qText.innerText = q.text;

  var optionsList = document.getElementById("optionsList");
  if (!optionsList) return;
  
  if (q.type === 'multi') {
    var currentSelected = userAnswers[q.id] || [];
    optionsList.innerHTML = q.options.map(function(opt, idx) {
      var isSelected = currentSelected.indexOf(idx) !== -1;
      return `
        <button class="option-btn ${isSelected ? 'selected' : ''}" onclick="toggleMultiOption(${q.id}, ${idx})">
          <span>${opt.label}</span>
          <span class="option-indicator" style="border-radius:4px;">${isSelected ? '✓' : ''}</span>
        </button>
      `;
    }).join('') + `
      <div style="margin-top:1.2rem; text-align:right;">
        <button class="btn btn-primary" onclick="nextQuestionAfterMulti()">确认选项并继续 →</button>
      </div>
    `;
  } else {
    optionsList.innerHTML = q.options.map(function(opt, idx) {
      var isSelected = userAnswers[q.id] === idx;
      return `
        <button class="option-btn ${isSelected ? 'selected' : ''}" onclick="selectSingleOption(${q.id}, ${idx})">
          <span>${opt.label}</span>
          <span class="option-indicator"></span>
        </button>
      `;
    }).join('');
  }

  var prevBtn = document.getElementById("prevBtn");
  if (prevBtn) {
    prevBtn.disabled = currentQuestionIndex === 0;
    prevBtn.style.opacity = currentQuestionIndex === 0 ? "0.4" : "1";
  }
}

function selectSingleOption(questionId, optionIndex) {
  userAnswers[questionId] = optionIndex;
  renderQuestion();

  setTimeout(function() {
    if (currentQuestionIndex < currentTest.questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      calculateAndShowResult();
    }
  }, 220);
}

function toggleMultiOption(questionId, optionIndex) {
  if (!userAnswers[questionId]) {
    userAnswers[questionId] = [];
  }
  var q = currentTest.questions[currentQuestionIndex];
  
  if (q.options[optionIndex].value.none) {
    userAnswers[questionId] = [optionIndex];
  } else {
    userAnswers[questionId] = userAnswers[questionId].filter(function(i) { return !q.options[i].value.none; });
    if (userAnswers[questionId].indexOf(optionIndex) !== -1) {
      userAnswers[questionId] = userAnswers[questionId].filter(function(i) { return i !== optionIndex; });
    } else {
      userAnswers[questionId].push(optionIndex);
    }
  }
  renderQuestion();
}

function nextQuestionAfterMulti() {
  if (currentQuestionIndex < currentTest.questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    calculateAndShowResult();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

// Mini Program Launch Function
function openMiniProgramAd() {
  try { window.location.href = MINI_PROGRAM_LINK; } catch (e) {}

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(MINI_PROGRAM_LINK).then(function() {
      showToast("📱 正在跳转【一子一木】小程序！如未自动打开，已为你复制口令，黏贴至微信即可直接打开！");
    }).catch(function() { fallbackCopyText(MINI_PROGRAM_LINK); });
  } else {
    fallbackCopyText(MINI_PROGRAM_LINK);
  }
}

function fallbackCopyText(text) {
  var input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  showToast("📱 正在跳转【一子一木】小程序！如未自动打开，口令已复制，发送至微信对话框点击即可直接打开！");
}

function showToast(msg) {
  var toast = document.getElementById("toastMsg");
  var toastText = document.getElementById("toastText");
  if (!toast || !toastText) return;
  toastText.innerText = msg;
  toast.classList.add("show");
  setTimeout(function() { toast.classList.remove("show"); }, 4000);
}

// ⚖️ 免责声明组件 (精准修改文案)
function getDisclaimerHtml() {
  return `
    <div class="disclaimer-banner" style="text-align:center; font-size:0.78rem; color:var(--text-sub); margin:1.2rem 0 0.8rem 0; line-height:1.5; background:rgba(255,255,255,0.02); border:1px solid var(--border-color); border-radius:10px; padding:0.6rem 1rem;">
      ⚖️ <strong>免责声明</strong>：本测评结果仅供自我探索、娱乐及个人参考使用，不构成任何专业医学诊断、心理治疗或重大人生/法律决策依据。
    </div>
  `;
}

// 🎨 居中单行引流广告组件 (调用真实大尺寸 4K 壁纸预告图，激发用户领取欲望)
function getAdRewardHtml(testName) {
  var titleText = testName ? `做${testName}测试领【一子一木】壁纸积分抽大奖` : "做测试领【一子一木】壁纸积分抽大奖";
  return `
    <div class="ad-reward-banner">
      <div class="ad-content-left">
        <div class="ad-icon-badge">
          <img src="data:image/jpeg;base64,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" alt="精美4K壁纸预告">
        </div>
        <div class="ad-text-info">
          <h3>${titleText}</h3>
          <p>凭测试结果前往小程序即可免费兑换 4K 高清绝美壁纸并参与抽奖</p>
          <div class="ad-miniprogram-tag">${MINI_PROGRAM_LINK}</div>
        </div>
      </div>
      <a href="${MINI_PROGRAM_LINK}" class="btn btn-reward" onclick="openMiniProgramAd();">
        🎁 免费下载壁纸/领积分/抽大奖 →
      </a>
    </div>
    ${getDisclaimerHtml()}
  `;
}

// ==========================================================================
// 4. Universal Result Engine
// ==========================================================================

function calculateAndShowResult() {
  document.getElementById("testFlow").style.display = "none";
  document.getElementById("resultView").style.display = "block";

  if (currentTest.id === "dating_signal") {
    calculateDatingSignalResult();
  } else if (currentTest.id === "attachment") {
    calculateAttachmentResult();
  } else if (currentTest.id === "battery") {
    calculateBatteryResult();
  } else if (currentTest.id === "eq") {
    calculateEQResult();
  } else if (currentTest.id === "gad7") {
    calculateGAD7Result();
  } else if (currentTest.id === "bigfive") {
    calculateBigFiveResult();
  } else if (currentTest.id === "mbti") {
    calculateMBTIResult();
  } else if (currentTest.id === "holland") {
    calculateHollandResult();
  }
}

// 💘 1. 爆款关系信号测评
function calculateDatingSignalResult() {
  var scores = { attraction: 0, investment: 0, commitment: 0, exclusivity: 0, consistency: 0 };
  currentTest.questions.forEach(function(q) {
    var ans = userAnswers[q.id];
    if (ans === undefined) return;
    if (q.type === 'multi') {
      (ans || []).forEach(function(idx) {
        var val = q.options[idx].value;
        if (val.care) scores.investment += val.care * 10;
        if (val.memory) scores.attraction += val.memory * 8;
        if (val.effort) scores.investment += val.effort * 12;
        if (val.attraction) scores.attraction += val.attraction * 10;
        if (val.commitment) scores.commitment += val.commitment * 12;
        if (val.exclusivity) scores.exclusivity += val.exclusivity * 10;
      });
    } else {
      var val = q.options[ans].value;
      if (val.initiation) scores.attraction += val.initiation * 6;
      if (val.effort) scores.investment += val.effort * 5;
      if (val.reciprocity) scores.attraction += val.reciprocity * 4;
      if (val.proximity) scores.investment += val.proximity * 5;
      if (val.commitment) scores.commitment += val.commitment * 7;
      if (val.consistency) scores.consistency += val.consistency * 8;
      if (val.intent) scores.attraction += val.intent * 5;
      if (val.responsiveness) scores.attraction += val.responsiveness * 6;
      if (val.attention) scores.investment += val.attention * 5;
      if (val.integration) scores.commitment += val.integration * 6;
      if (val.exclusivity) scores.exclusivity += val.exclusivity * 10;
      if (val.trajectory) scores.consistency += val.trajectory * 6;
    }
  });

  var attraction = Math.min(98, Math.max(25, Math.round((scores.attraction / 60) * 100)));
  var investment = Math.min(95, Math.max(18, Math.round((scores.investment / 50) * 100)));
  var commitment = Math.min(95, Math.max(15, Math.round((scores.commitment / 45) * 100)));
  var exclusivity = Math.min(99, Math.max(20, Math.round((scores.exclusivity / 30) * 100)));

  var overallScore = Math.round((attraction * 0.35) + (investment * 0.30) + (commitment * 0.25) + (exclusivity * 0.10));
  var gap = attraction - commitment;

  var archetype = {
    emoji: "🔥",
    title: "The Chemistry Trap (激情陷阱型)",
    summary: "吸引力高 · 承诺度低 · 典型“享受暧昧，避重就轻”关系原型",
    traits: "他对你存在强烈的兴趣与好感，聊天和见面时气氛火热，但在确立专一关系、介绍身边圈子、未来规划或付出实质成本时表现出犹豫。典型的‘喜欢与你相处，但还没准备好选择你’。",
    risk: "容易让你陷入‘他到底爱不爱我’的猜忌与情绪内耗中，用忽冷忽热拉扯你的注意力。",
    moves: [
      "收回部分情绪过载的关注，不再秒回或过分顺从他的临时约会",
      "建立坚固的心理界限，明确表达你对专一关系与承诺的期望",
      "观察他是否愿意为了你改变行为、付出时间与社交成本"
    ]
  };

  if (commitment >= 70 && investment >= 65) {
    archetype = {
      emoji: "💚",
      title: "The Quietly Serious One (认真实干型)",
      summary: "好感明确 · 行动持续 · 高确定性健康关系原型",
      traits: "他对你不仅有明确的好感，而且正在用实际行动持续投入。他倾向于将你纳入他的朋友圈子与未来规划中，关系发展健康稳定。",
      risk: "关系步调较为沉稳，有时可能缺乏过度的戏剧性浪漫小情绪。",
      moves: ["给予对方明确的正向反馈与鼓励", "共同规划具体的下一次旅行或约会，巩固亲密信任"]
    };
  } else if (gap >= 35) {
    archetype = {
      emoji: "🔥",
      title: "The Chemistry Trap (激情陷阱型)",
      summary: "吸引力与承诺度落差极大 (Gap = " + gap + ")",
      traits: "他对你氛围感十足，但避重就轻。他非常享受暧昧带来的低成本情绪价值，却极力抗拒任何形式的关系绑定。",
      risk: "极其容易陷入被动内耗，甚至演变成耗费青春的无疾而终暧昧。",
      moves: ["切断无条件的‘随时有空’状态", "设定明确的时间观察期，不再主动提供免费的情绪价值"]
    };
  }

  var container = document.getElementById("resultContainer");
  container.innerHTML = `
    <div class="result-header-card">
      <span class="result-badge">💘 对方行为信号综合评分 (Interest Score)</span>
      <h1 class="result-main-title">${overallScore} <span style="font-size:1.5rem; color:var(--text-muted);">/ 100</span></h1>
      <div class="result-subtitle">${archetype.emoji} ${archetype.title}</div>
      <p class="result-summary">${archetype.summary}</p>
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title">🔍 关系原型与行为模式诊断</h3>
      <p style="font-size:0.95rem; color:var(--text-main); line-height:1.65;">${archetype.traits}</p>
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title">📊 四项核心行为指标拆解</h3>
      <div class="dimension-row"><div class="dimension-label"><span>浪漫吸引力 (Attraction)</span><span>${attraction}%</span></div><div class="dimension-track"><div class="dimension-fill" style="width:${attraction}%"></div></div></div>
      <div class="dimension-row"><div class="dimension-label"><span>实质投入度 (Investment)</span><span>${investment}%</span></div><div class="dimension-track"><div class="dimension-fill" style="width:${investment}%"></div></div></div>
      <div class="dimension-row"><div class="dimension-label"><span>关系承诺度 (Commitment)</span><span>${commitment}%</span></div><div class="dimension-track"><div class="dimension-fill" style="width:${commitment}%"></div></div></div>
      <div class="dimension-row"><div class="dimension-label"><span>排他专一度 (Exclusivity)</span><span>${exclusivity}%</span></div><div class="dimension-track"><div class="dimension-fill" style="width:${exclusivity}%"></div></div></div>
    </div>

    <div class="result-details-grid" style="margin-bottom:1.2rem;">
      <div class="detail-card">
        <h3 class="detail-card-title" style="color:var(--accent-amber);">⚠️ 潜在关系风险点</h3>
        <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6;">${archetype.risk}</p>
      </div>
      <div class="detail-card">
        <h3 class="detail-card-title" style="color:var(--accent-emerald);">💡 Your Move 破局推进行动</h3>
        <ul style="padding-left:1.2rem; font-size:0.88rem; color:var(--text-muted); line-height:1.6;">
          ${archetype.moves.map(function(m) { return `<li style="margin-bottom:5px;">${m}</li>`; }).join('')}
        </ul>
      </div>
    </div>

    <div style="text-align:center; display:flex; gap:0.8rem; justify-content:center; flex-wrap:wrap; margin-bottom:1.5rem;">
  <button class="btn btn-primary" onclick="checkAndStartTest('dating_signal')">🔄 重新测试</button>
  <button class="btn btn-reward" style="background:linear-gradient(90deg, #ec4899 0%, #a855f7 100%); color:#fff; border:none; box-shadow:0 4px 14px rgba(236,72,153,0.35);" onclick="openShareModal()">🔗 分享结果邀请好友测测 →</button>
</div>
    ${getMatrixRecommendHtml(currentTest ? currentTest.id : "")}
    ${getAdRewardHtml("关系信号")}
  `;
}

// 💕 2. 恋爱依恋类型测评
function calculateAttachmentResult() {
  var counts = { Secure: 0, Anxious: 0, Avoidant: 0, Fearful: 0 };
  currentTest.questions.forEach(function(q) {
    var ans = userAnswers[q.id];
    if (ans !== undefined && q.options[ans]) {
      var val = q.options[ans].value;
      if (counts.hasOwnProperty(val)) counts[val]++;
    }
  });

  var sorted = Object.keys(counts).sort(function(a, b) { return counts[b] - counts[a]; });
  var mainStyle = sorted[0];

  var styleMap = {
    Secure: {
      emoji: "💚",
      title: "安全型依恋 (Secure Attachment)",
      summary: "你拥有极高的情感安全感，既能坦然享受亲密关系中的陪伴与依赖，也能充实地保持独立空间。",
      traits: "你在恋爱中心态非常健康自洽。你不怕展示脆弱，也不担心随时会被伴侣抛弃。遇到矛盾时，你能主动沟通解开心结，而不是玩冷暴力或过度内耗。",
      strengths: ["情绪稳定性高，不盲目猜忌怀疑", "能坦然表达真实需求与脆弱", "尊重伴侣的个人独立空间"],
      risks: ["遇到回避型伴侣时可能难以理解对方的退缩"],
      advice: ["继续保持坦诚直接的沟通习惯", "遇到回避型或焦虑型伴侣时，你的稳定与包容将是最好的治愈力量"]
    },
    Anxious: {
      emoji: "🥺",
      title: "焦虑型依恋 (Anxious Attachment)",
      summary: "你在亲密关系中极度敏感、渴望关注，容易因为对方微小的冷淡或延迟回复而内耗焦虑。",
      traits: "你内心极其渴望深度的亲密与安全感，但底层的隐秘恐惧是‘我不够好，他随时会离开我’。这导致你容易频繁确认伴侣的爱意，甚至用发脾气、作来测试对方。",
      strengths: ["对伴侣的情绪起伏极其敏锐", "愿意在感情中投入极高的关怀与热情"],
      risks: ["容易因为对方延迟回复消息而陷入深度内耗", "习惯用发脾气或试探来获取注意力"],
      advice: ["建立自我认同，明白你的价值不需要通过伴侣的回复速度来证明", "当感到焦虑时，先呼吸暂停 10 分钟，不要在情绪上头时发连环消息", "选择情绪稳定、回应有预测性的安全型伴侣"]
    },
    Avoidant: {
      emoji: "🛡️",
      title: "回避型依恋 (Avoidant Attachment)",
      summary: "你习惯拉开心理安全距离，抗拒过度依赖对方，认为只有依靠自己才是最安全可靠的。",
      traits: "每当关系走向深度亲密或遇到正面情绪冲突时，你的防风林机制就会启动。你倾向于后退、冷处理或关门，用‘我不需要任何人’来保护自己脆弱的内面。",
      strengths: ["高度独立自律，不给他人添麻烦", "在危机中能保持理智平静"],
      risks: ["习惯用冷暴力推开想要靠近的伴侣", "极度抗拒深入的情感承诺与脆弱展示"],
      advice: ["尝试向信任的伴侣小步展示你的真实脆弱", "明白拉开距离只是你下意识的防御机制，而不是你不爱对方", "在需要独处时，明确告知伴侣‘我需要点时间’而不是直接消失"]
    },
    Fearful: {
      emoji: "🎭",
      title: "恐惧-回避型依恋 (Disorganized)",
      summary: "你内心深处极度渴望爱与关注，但同时又极度恐惧被伤害或抛弃，容易在接近与推开之间反复拉扯。",
      traits: "你的心理处于‘想要靠近却又害怕被烫伤’的拉扯中。当伴侣冷淡时你拼命靠近，当伴侣真正向你走近时你又感到恐慌想逃走。",
      strengths: ["对人性深度拥有极高的敏感与直觉力"],
      risks: ["关系容易演变成忽冷忽热的极度拉扯内耗"],
      advice: ["给自己的情绪建立觉察日志，识别你的拉扯触发点", "给予自己足够的时间与耐心，在小事中积累对人际关系的信任"]
    }
  };

  var res = styleMap[mainStyle] || styleMap.Secure;
  var container = document.getElementById("resultContainer");
  container.innerHTML = `
    <div class="result-header-card">
      <span class="result-badge">💕 恋爱依恋底色深度诊断</span>
      <h1 class="result-main-title">${res.emoji} ${mainStyle}</h1>
      <div class="result-subtitle">${res.title}</div>
      <p class="result-summary">${res.summary}</p>
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title">🔍 亲密关系表现与心理根源</h3>
      <p style="font-size:0.95rem; color:var(--text-main); line-height:1.65;">${res.traits}</p>
    </div>

    <div class="result-details-grid" style="margin-bottom:1.2rem;">
      <div class="detail-card">
        <h3 class="detail-card-title" style="color:var(--accent-emerald);">💪 恋爱特质优势</h3>
        <ul style="padding-left:1.2rem; font-size:0.88rem; color:var(--text-muted); line-height:1.6;">
          ${res.strengths.map(function(s) { return `<li style="margin-bottom:5px;">${s}</li>`; }).join('')}
        </ul>
      </div>
      <div class="detail-card">
        <h3 class="detail-card-title" style="color:var(--accent-amber);">⚠️ 关系内耗风险点</h3>
        <ul style="padding-left:1.2rem; font-size:0.88rem; color:var(--text-muted); line-height:1.6;">
          ${res.risks.map(function(r) { return `<li style="margin-bottom:5px;">${r}</li>`; }).join('')}
        </ul>
      </div>
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title">💡 关系自愈与破局成长建议</h3>
      <ul style="padding-left:1.2rem; font-size:0.88rem; color:var(--text-muted); line-height:1.65;">
        ${res.advice.map(function(a) { return `<li style="margin-bottom:5px;">${a}</li>`; }).join('')}
      </ul>
    </div>

    <div style="text-align:center; display:flex; gap:0.8rem; justify-content:center; flex-wrap:wrap; margin-bottom:1.5rem;">
  <button class="btn btn-primary" onclick="checkAndStartTest('attachment')">🔄 重新测试</button>
  <button class="btn btn-reward" style="background:linear-gradient(90deg, #ec4899 0%, #a855f7 100%); color:#fff; border:none; box-shadow:0 4px 14px rgba(236,72,153,0.35);" onclick="openShareModal()">🔗 分享结果邀请好友测测 →</button>
</div>
    ${getMatrixRecommendHtml(currentTest ? currentTest.id : "")}
    ${getAdRewardHtml("依恋类型")}
  `;
}

// 🔋 3. 社畜精神续航
function calculateBatteryResult() {
  var totalScore = 0;
  currentTest.questions.forEach(function(q) {
    var ans = userAnswers[q.id];
    if (ans !== undefined && q.options[ans]) totalScore += (q.options[ans].value || 50);
  });

  var batteryPct = Math.round(totalScore / currentTest.questions.length);
  var status = {
    emoji: "🪫",
    title: "电量严重告急 (剩 " + batteryPct + "%)",
    summary: "心理续航严重告急！你目前正处于高度内耗、精力抽干的状态。",
    traits: "你现在的心理防御处于临界点，一件微小的小事（如打翻水杯、一句冷语）都可能成为压垮你的最后一根稻草。你的大脑正疯狂呼唤休假与静音。",
    risk: "容易陷入报复性熬夜、情绪急躁失控、注意力难以集中等皮质醇过高症状。",
    advice: ["立即开启‘低功耗模式’：推掉非必要的无效社交", "晚上睡前关掉所有工作软件通知，保证 8 小时高质量睡眠", "做一些不需要动脑的解压小事（如散步、听音乐、吃一顿美食）"]
  };
  if (batteryPct >= 75) {
    status = {
      emoji: "🔋",
      title: "电量满格满血 (剩 " + batteryPct + "%)",
      summary: "精神续航超强！心态稳定阳光，抗压能力极佳。",
      traits: "你目前拥有充沛的心理能量，能游刃有余地应对日常工作与生活中的突发插曲，情绪弹性极高。",
      risk: "偶尔可能过度自信而接下过多任务。",
      advice: ["保持当前健康的生活作息与心态", "在充沛的状态下可以尝试开启一些有挑战性的新项目"]
    };
  } else if (batteryPct >= 50) {
    status = {
      emoji: "⚡",
      title: "电量中规中矩 (剩 " + batteryPct + "%)",
      summary: "能正常运转，但偶尔会感到一阵阵疲惫感。",
      traits: "你的心理电量正处于消耗与补充的临界点。工作时能维持基本效率，但下班后社交欲望明显下降。",
      risk: "如果遇到突发高压项目，容易迅速滑向亏电状态。",
      advice: ["注意周末多安排户外放松，防止蓄电池长期亏电", "学会在适当时机说‘不’，保护个人精力"]
    };
  }

  var container = document.getElementById("resultContainer");
  container.innerHTML = `
    <div class="result-header-card">
      <span class="result-badge">🔋 心理电量与发疯指数报告</span>
      <h1 class="result-main-title">${status.emoji} ${batteryPct}%</h1>
      <div class="result-subtitle">${status.title}</div>
      <p class="result-summary">${status.summary}</p>
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title">🔍 续航状态深度剖析</h3>
      <p style="font-size:0.95rem; color:var(--text-main); line-height:1.65;">${status.traits}</p>
    </div>

    <div class="result-details-grid" style="margin-bottom:1.2rem;">
      <div class="detail-card">
        <h3 class="detail-card-title" style="color:var(--accent-amber);">⚠️ 疲惫警示信号</h3>
        <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6;">${status.risk}</p>
      </div>
      <div class="detail-card">
        <h3 class="detail-card-title" style="color:var(--accent-emerald);">💡 快速回血指南</h3>
        <ul style="padding-left:1.2rem; font-size:0.88rem; color:var(--text-muted); line-height:1.6;">
          ${status.advice.map(function(a) { return `<li style="margin-bottom:5px;">${a}</li>`; }).join('')}
        </ul>
      </div>
    </div>

    <div style="text-align:center; display:flex; gap:0.8rem; justify-content:center; flex-wrap:wrap; margin-bottom:1.5rem;">
  <button class="btn btn-primary" onclick="checkAndStartTest('battery')">🔄 重新测试</button>
  <button class="btn btn-reward" style="background:linear-gradient(90deg, #ec4899 0%, #a855f7 100%); color:#fff; border:none; box-shadow:0 4px 14px rgba(236,72,153,0.35);" onclick="openShareModal()">🔗 分享结果邀请好友测测 →</button>
</div>
    ${getMatrixRecommendHtml(currentTest ? currentTest.id : "")}
    ${getAdRewardHtml("精神续航")}
  `;
}

// 🎭 4. 高情商测评
function calculateEQResult() {
  var totalScore = 0;
  currentTest.questions.forEach(function(q) {
    var ans = userAnswers[q.id];
    if (ans !== undefined && q.options[ans]) totalScore += (q.options[ans].value || 60);
  });

  var eqScore = Math.round(totalScore / currentTest.questions.length);
  var detail = {
    emoji: "👑",
    title: "通透高情商王者 (EQ: " + eqScore + ")",
    summary: "你拥有洞若观火的情绪察觉力与极其清晰的个人边界感。",
    traits: "你不仅能精准看透他人的潜在情绪与话外音，而且拥有极其稳固的心理防御界限。你不会轻易被道德绑架或精神操控(PUA)，能以温和而坚定的姿态掌控人际主导权。",
    strengths: ["边界感清晰，不受道德绑架", "善于化解社交冷场与矛盾", "情绪稳定性极高，外圆内方"],
    advice: ["继续保持清醒独立的心理边界", "在团队中你的情商是极佳的凝结剂，可以适当多发挥领导与解围作用"]
  };
  if (eqScore < 65) {
    detail = {
      emoji: "🌱",
      title: "高敏感与内耗派 (EQ: " + eqScore + ")",
      summary: "心思细腻善良，但容易被他人的负面情绪与眼光牵着走。",
      traits: "你非常在乎周围人的感受，但缺点是心理边界感较弱。面对道德绑架或讽刺时，你容易第一时间归因于自己，陷入深度的自我怀疑与内耗。",
      strengths: ["极具同理心，能体贴他人喜怒"],
      advice: ["记住‘他人的情绪是他的责任，不是你的功课’", "建立坚固的心理防御墙，学会明确拒绝不合理要求"]
    };
  }

  var container = document.getElementById("resultContainer");
  container.innerHTML = `
    <div class="result-header-card">
      <span class="result-badge">🎭 情商与社交防御指数报告</span>
      <h1 class="result-main-title">${detail.emoji} ${eqScore}分</h1>
      <div class="result-subtitle">${detail.title}</div>
      <p class="result-summary">${detail.summary}</p>
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title">🔍 社交心理模式分析</h3>
      <p style="font-size:0.95rem; color:var(--text-main); line-height:1.65;">${detail.traits}</p>
    </div>

    <div class="result-details-grid" style="margin-bottom:1.2rem;">
      <div class="detail-card">
        <h3 class="detail-card-title" style="color:var(--accent-emerald);">💪 社交优势</h3>
        <ul style="padding-left:1.2rem; font-size:0.88rem; color:var(--text-muted); line-height:1.6;">
          ${detail.strengths.map(function(s) { return `<li style="margin-bottom:5px;">${s}</li>`; }).join('')}
        </ul>
      </div>
      <div class="detail-card">
        <h3 class="detail-card-title" style="color:var(--accent-amber);">💡 社交防御升级建议</h3>
        <ul style="padding-left:1.2rem; font-size:0.88rem; color:var(--text-muted); line-height:1.6;">
          ${detail.advice.map(function(a) { return `<li style="margin-bottom:5px;">${a}</li>`; }).join('')}
        </ul>
      </div>
    </div>

    <div style="text-align:center; display:flex; gap:0.8rem; justify-content:center; flex-wrap:wrap; margin-bottom:1.5rem;">
  <button class="btn btn-primary" onclick="checkAndStartTest('eq')">🔄 重新测试</button>
  <button class="btn btn-reward" style="background:linear-gradient(90deg, #ec4899 0%, #a855f7 100%); color:#fff; border:none; box-shadow:0 4px 14px rgba(236,72,153,0.35);" onclick="openShareModal()">🔗 分享结果邀请好友测测 →</button>
</div>
    ${getMatrixRecommendHtml(currentTest ? currentTest.id : "")}
    ${getAdRewardHtml("高情商")}
  `;
}

// 😟 5. GAD-7 焦虑指数
function calculateGAD7Result() {
  var totalScore = 0;
  currentTest.questions.forEach(function(q) {
    var ans = userAnswers[q.id];
    if (ans !== undefined && q.options[ans]) totalScore += (q.options[ans].value || 0);
  });

  var res = {
    level: "情绪平静健康 (0-4分)",
    color: "var(--accent-emerald)",
    title: "情绪平稳无明显焦虑",
    summary: "你目前心理状态非常平稳健康，情绪自我调节机制运作良好。",
    analysis: "检测显示你当前的情绪弹性充沛，对日常生活与工作中的不确定性有良好的耐受力。你能够区分现实困境与主观担忧，不会陷入无休止的精神内耗。",
    advice: ["保持当前良好的生活作息与运动节奏", "当遇到小挫折时，继续保持积极理性的认知视角", "定期进行户外活动以维持血清素水平"]
  };

  if (totalScore >= 15) {
    res = {
      level: "重度焦虑警告 (15-21分)",
      color: "var(--accent-secondary)",
      title: "情绪负荷告急 · 高度内耗期",
      summary: "你目前正处于非常显著的情绪高压与精神内耗状态，心理防御机制过载。",
      analysis: "你的交感神经可能长期处于高度紧绷应激状态。这通常伴随着失眠、坐立不安、注意力难以集中或无原因的恐慌感。这并不是你的脆弱，而是大脑发出的休息警报。",
      advice: ["给自己的工作与社交按下暂停键，减少不必要的信息接收", "练习 4-7-8 深度呼吸法，强行激活副交感神经放松", "尝试与信任的亲友诉说，或考虑预约专业心理咨询师陪伴疏导"]
    };
  } else if (totalScore >= 10) {
    res = {
      level: "中度焦虑关注 (10-14分)",
      color: "var(--accent-amber)",
      title: "应激紧张期 · 内耗上升",
      summary: "你近期面临着明确的心理压力与焦虑内耗，容易陷入反复琢磨与担忧。",
      analysis: "你可能在工作、亲密关系或个人发展中遭遇了平台期或意外插曲。你的脑海里充斥着“万一失败了怎么办”等预警念头，导致肌肉紧绷、入睡困难或情绪急躁。",
      advice: ["采用“思维阻断法”：把大脑里担忧的事情写在纸上，区分‘可控’与‘不可控’", "每天安排 30 分钟完全断网、不看社交软件的纯粹私人空闲", "进行有氧运动（如快走、游泳），通过释放内啡肽冲刷皮质醇"]
    };
  } else if (totalScore >= 5) {
    res = {
      level: "轻度焦虑状态 (5-9分)",
      color: "var(--accent-cyan)",
      title: "轻微情绪起伏 · 应激反应",
      summary: "你存在轻微的焦虑关注与情绪起伏，属于面对阶段性压力时的正常心理应激。",
      analysis: "你对环境变化较为敏感，偶尔会出现失眠或胡思乱想，但整体仍具备自我调控的能力。",
      advice: ["晚上睡前 1 小时停止刷手机短视频", "用热水泡脚或听舒缓音乐，帮助肌肉放松", "提醒自己“眼前的担忧 90% 都不会真实发生”"]
    };
  }

  var container = document.getElementById("resultContainer");
  container.innerHTML = `
    <div class="result-header-card">
      <span class="result-badge">😟 GAD-7 精神内耗诊断报告</span>
      <h1 class="result-main-title" style="color:${res.color};">${totalScore} <span style="font-size:1.5rem; color:var(--text-muted);">/ 21 分</span></h1>
      <div class="result-subtitle" style="color:${res.color};">${res.title} (${res.level})</div>
      <p class="result-summary">${res.summary}</p>
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title">🧠 情绪状态深度解析</h3>
      <p style="font-size:0.95rem; color:var(--text-main); line-height:1.65;">${res.analysis}</p>
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title" style="color:${res.color};">💡 心理自救与情绪调控建议</h3>
      <ul style="padding-left:1.2rem; font-size:0.88rem; color:var(--text-muted); line-height:1.65;">
        ${res.advice.map(function(a) { return `<li style="margin-bottom:6px;">${a}</li>`; }).join('')}
      </ul>
    </div>

    <div style="text-align:center; display:flex; gap:0.8rem; justify-content:center; flex-wrap:wrap; margin-bottom:1.5rem;">
  <button class="btn btn-primary" onclick="checkAndStartTest('gad7')">🔄 重新测试</button>
  <button class="btn btn-reward" style="background:linear-gradient(90deg, #ec4899 0%, #a855f7 100%); color:#fff; border:none; box-shadow:0 4px 14px rgba(236,72,153,0.35);" onclick="openShareModal()">🔗 分享结果邀请好友测测 →</button>
</div>
    ${getMatrixRecommendHtml(currentTest ? currentTest.id : "")}
    ${getAdRewardHtml("焦虑内耗")}
  `;
}

// 🌊 6. 大五人格 OCEAN
function calculateBigFiveResult() {
  var scores = { O: 0, C: 0, E: 0, A: 0, N: 0 };
  currentTest.questions.forEach(function(q) {
    var ans = userAnswers[q.id];
    if (ans !== undefined && q.options[ans]) {
      var val = q.options[ans].value;
      if (val.O) scores.O += val.O;
      if (val.C) scores.C += val.C;
      if (val.E) scores.E += val.E;
      if (val.A) scores.A += val.A;
      if (val.N) scores.N += val.N;
    }
  });

  var oPct = Math.round((scores.O / 10) * 100);
  var cPct = Math.round((scores.C / 10) * 100);
  var ePct = Math.round((scores.E / 10) * 100);
  var aPct = Math.round((scores.A / 10) * 100);
  var nPct = Math.round((scores.N / 10) * 100);

  var container = document.getElementById("resultContainer");
  container.innerHTML = `
    <div class="result-header-card">
      <span class="result-badge">🌊 大五人格 (OCEAN) 深度画像报告</span>
      <h1 class="result-main-title">OCEAN Profile</h1>
      <div class="result-subtitle">学术级五大底层性格杠杆剖析</div>
      <p class="result-summary">大五人格模型（Big Five）是心理学界公认最严谨的特质测量体系。它从 5 个独立维度决定了你的行为习惯、决策偏好与情绪模式。</p>
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title">📊 五维倾向分布</h3>
      <div class="dimension-row"><div class="dimension-label"><span>开放性 Openness (创造力与好奇心)</span><span>${oPct}%</span></div><div class="dimension-track"><div class="dimension-fill" style="width:${oPct}%"></div></div></div>
      <div class="dimension-row"><div class="dimension-label"><span>尽责性 Conscientiousness (自律与计划性)</span><span>${cPct}%</span></div><div class="dimension-track"><div class="dimension-fill" style="width:${cPct}%"></div></div></div>
      <div class="dimension-row"><div class="dimension-label"><span>外向性 Extraversion (社交能量与热情)</span><span>${ePct}%</span></div><div class="dimension-track"><div class="dimension-fill" style="width:${ePct}%"></div></div></div>
      <div class="dimension-row"><div class="dimension-label"><span>宜人性 Agreeableness (同理心与合作度)</span><span>${aPct}%</span></div><div class="dimension-track"><div class="dimension-fill" style="width:${aPct}%"></div></div></div>
      <div class="dimension-row"><div class="dimension-label"><span>神经质 Neuroticism (情绪内耗与敏感度)</span><span>${nPct}%</span></div><div class="dimension-track"><div class="dimension-fill" style="width:${nPct}%"></div></div></div>
    </div>

    <div class="result-details-grid" style="margin-bottom:1.2rem;">
      <div class="detail-card">
        <h3 class="detail-card-title">💡 认知与工作偏好</h3>
        <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6;">
          你的开放性得分 ${oPct}%，尽责性得分 ${cPct}%。这表明你${oPct > 60 ? "具有极强的新奇事物探索欲望，喜欢跳出框架思考" : "更加务实接地气，看重经验与实际效果"}；同时${cPct > 60 ? "办事极有条理，自我纪律约束力强。" : "性格灵活随性，喜欢自发性的工作节奏。"}
        </p>
      </div>
      <div class="detail-card">
        <h3 class="detail-card-title">🤝 社交与情绪弹性</h3>
        <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6;">
          你的外向性得分 ${ePct}%，神经质得分 ${nPct}%。说明你${ePct > 60 ? "在社交与互动中能快速充电" : "倾向于通过独自静处恢复精力"}；情绪敏感度处于${nPct > 60 ? "较高水平，需要多给心理做减法，防范过度内耗。" : "非常稳健的区间，抗压与情绪调节能力出色。"}
        </p>
      </div>
    </div>

    <div style="text-align:center; display:flex; gap:0.8rem; justify-content:center; flex-wrap:wrap; margin-bottom:1.5rem;">
  <button class="btn btn-primary" onclick="checkAndStartTest('bigfive')">🔄 重新测试</button>
  <button class="btn btn-reward" style="background:linear-gradient(90deg, #ec4899 0%, #a855f7 100%); color:#fff; border:none; box-shadow:0 4px 14px rgba(236,72,153,0.35);" onclick="openShareModal()">🔗 分享结果邀请好友测测 →</button>
</div>
    ${getMatrixRecommendHtml(currentTest ? currentTest.id : "")}
    ${getAdRewardHtml("大五人格")}
  `;
}

// 🧠 7. MBTI 16 人格
function calculateMBTIResult() {
  var scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  currentTest.questions.forEach(function(q) {
    var ans = userAnswers[q.id];
    if (ans !== undefined && q.options[ans]) {
      var val = q.options[ans].value;
      if (scores.hasOwnProperty(val)) scores[val]++;
    }
  });

  var type = [
    scores.E >= scores.I ? "E" : "I",
    scores.S >= scores.N ? "S" : "N",
    scores.T >= scores.F ? "T" : "F",
    scores.J >= scores.P ? "J" : "P"
  ].join('');

  var detail = MBTI_DESCRIPTIONS[type] || MBTI_DESCRIPTIONS["INTJ"];
  var eiPct = Math.round((scores.E / Math.max(1, scores.E + scores.I)) * 100);
  var snPct = Math.round((scores.S / Math.max(1, scores.S + scores.N)) * 100);
  var tfPct = Math.round((scores.T / Math.max(1, scores.T + scores.F)) * 100);
  var jpPct = Math.round((scores.J / Math.max(1, scores.J + scores.P)) * 100);

  var container = document.getElementById("resultContainer");
  container.innerHTML = `
    <div class="result-header-card">
      <span class="result-badge">MBTI 深度人格诊断报告</span>
      <h1 class="result-main-title">${type}</h1>
      <div class="result-subtitle">${detail.title}</div>
      <p class="result-summary">${detail.summary}</p>
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title">🔍 人格核心认知与思维模式</h3>
      <p style="font-size:0.95rem; color:var(--text-main); line-height:1.65;">${detail.traits}</p>
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title">📊 四大认知维度倾斜度</h3>
      <div class="dimension-row"><div class="dimension-label"><span class="dim-left">外向 E (${eiPct}%)</span><span class="dim-right">内向 I (${100 - eiPct}%)</span></div><div class="dimension-track"><div class="dimension-fill" style="width:${eiPct}%"></div></div></div>
      <div class="dimension-row"><div class="dimension-label"><span class="dim-left">实感 S (${snPct}%)</span><span class="dim-right">直觉 N (${100 - snPct}%)</span></div><div class="dimension-track"><div class="dimension-fill" style="width:${snPct}%"></div></div></div>
      <div class="dimension-row"><div class="dimension-label"><span class="dim-left">思考 T (${tfPct}%)</span><span class="dim-right">情感 F (${100 - tfPct}%)</span></div><div class="dimension-track"><div class="dimension-fill" style="width:${tfPct}%"></div></div></div>
      <div class="dimension-row"><div class="dimension-label"><span class="dim-left">判断 J (${jpPct}%)</span><span class="dim-right">感知 P (${100 - jpPct}%)</span></div><div class="dimension-track"><div class="dimension-fill" style="width:${jpPct}%"></div></div></div>
    </div>

    <div class="result-details-grid" style="margin-bottom:1.2rem;">
      <div class="detail-card">
        <h3 class="detail-card-title" style="color:var(--accent-emerald);">💪 核心竞争优势 (Strengths)</h3>
        <ul style="padding-left:1.2rem; font-size:0.88rem; color:var(--text-muted); line-height:1.6;">
          ${detail.strengths.map(function(s) { return `<li style="margin-bottom:5px;">${s}</li>`; }).join('')}
        </ul>
      </div>
      <div class="detail-card">
        <h3 class="detail-card-title" style="color:var(--accent-amber);">⚠️ 潜在盲点与避坑 (Blind Spots)</h3>
        <ul style="padding-left:1.2rem; font-size:0.88rem; color:var(--text-muted); line-height:1.6;">
          ${detail.pitfalls.map(function(p) { return `<li style="margin-bottom:5px;">${p}</li>`; }).join('')}
        </ul>
      </div>
    </div>

    <div class="result-details-grid" style="margin-bottom:1.2rem;">
      <div class="detail-card">
        <h3 class="detail-card-title">💼 理想职业与发展路径</h3>
        <div class="tags-cloud" style="margin-bottom:0.8rem;">
          ${detail.careers.map(function(c) { return `<span class="tag-item">💼 ${c}</span>`; }).join('')}
        </div>
      </div>
      <div class="detail-card">
        <h3 class="detail-card-title">❤️ 亲密关系与人际相处</h3>
        <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6;">${detail.relationship}</p>
      </div>
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title">🌟 同类型代表人物</h3>
      <div class="tags-cloud">
        ${detail.famous.map(function(f) { return `<span class="tag-item">✨ ${f}</span>`; }).join('')}
      </div>
    </div>

    <div style="text-align:center; display:flex; gap:0.8rem; justify-content:center; flex-wrap:wrap; margin-bottom:1.5rem;">
  <button class="btn btn-primary" onclick="checkAndStartTest('mbti')">🔄 重新测试</button>
  <button class="btn btn-reward" style="background:linear-gradient(90deg, #ec4899 0%, #a855f7 100%); color:#fff; border:none; box-shadow:0 4px 14px rgba(236,72,153,0.35);" onclick="openShareModal()">🔗 分享结果邀请好友测测 →</button>
</div>
    ${getMatrixRecommendHtml(currentTest ? currentTest.id : "")}
    ${getAdRewardHtml("MBTI")}
  `;
}

// 🧭 8. 霍兰德职业兴趣
function calculateHollandResult() {
  var scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  currentTest.questions.forEach(function(q) {
    var ans = userAnswers[q.id];
    if (ans !== undefined && q.options[ans]) {
      var val = q.options[ans].value;
      if (scores.hasOwnProperty(val)) scores[val]++;
    }
  });

  var sorted = Object.keys(scores).sort(function(a, b) { return scores[b] - scores[a]; });
  var hollandCode = sorted.slice(0, 3).join('');
  var top1 = HOLLAND_DESCRIPTIONS[sorted[0]];
  var top2 = HOLLAND_DESCRIPTIONS[sorted[1]];

  var container = document.getElementById("resultContainer");
  container.innerHTML = `
    <div class="result-header-card">
      <span class="result-badge">霍兰德职业基因代码</span>
      <h1 class="result-main-title">${hollandCode}</h1>
      <div class="result-subtitle">主导属性：${top1.code}</div>
      <p class="result-summary">霍兰德职业兴趣理论（RIASEC）将职业人群划分为 6 种经典类型，前三位字母代表你最匹配的职业发展基因。</p>
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title">🎯 主导类型与特质拆解</h3>
      <p style="font-size:0.95rem; color:var(--text-main); line-height:1.65;">
        你的第一主导类型为 <strong>${top1.code}</strong>（${top1.trait}），第二主导类型为 <strong>${top2.code}</strong>（${top2.trait}）。两者的结合决定了你在工作环境中的最佳定位。
      </p>
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title">📊 RIASEC 六维基因分布</h3>
      ${sorted.map(function(key) {
        return `
          <div class="dimension-row">
            <div class="dimension-label"><span>${HOLLAND_DESCRIPTIONS[key].code}</span><span>${scores[key]} 分</span></div>
            <div class="dimension-track"><div class="dimension-fill" style="width:${(scores[key] / currentTest.questions.length) * 100}%"></div></div>
          </div>
        `;
      }).join('')}
    </div>

    <div class="detail-card" style="margin-bottom:1.2rem;">
      <h3 class="detail-card-title">💼 推荐职业赛道 (Career Matching)</h3>
      <div class="tags-cloud">
        ${top1.careers.concat(top2.careers).map(function(c) { return `<span class="tag-item">🎯 ${c}</span>`; }).join('')}
      </div>
    </div>

    <div style="text-align:center; display:flex; gap:0.8rem; justify-content:center; flex-wrap:wrap; margin-bottom:1.5rem;">
  <button class="btn btn-primary" onclick="checkAndStartTest('holland')">🔄 重新测试</button>
  <button class="btn btn-reward" style="background:linear-gradient(90deg, #ec4899 0%, #a855f7 100%); color:#fff; border:none; box-shadow:0 4px 14px rgba(236,72,153,0.35);" onclick="openShareModal()">🔗 分享结果邀请好友测测 →</button>
</div>
    ${getMatrixRecommendHtml(currentTest ? currentTest.id : "")}
    ${getAdRewardHtml("霍兰德")}
  `;
}




// 🌌 测评矩阵交叉推荐组件（推荐其他 8 款测试，单次特惠 1.99 元）
function getMatrixRecommendHtml(currentTestId) {
  var matrixList = [
    { id: "mbti", icon: "🧠", title: "MBTI 16型人格专业测评", desc: "四大维度定位你的核心认知模式与职业优势" },
    { id: "gad7", icon: "😟", title: "GAD-7 焦虑与内耗测评", desc: "评估近两周情绪负荷、压力与内耗等级" },
    { id: "dating_signal", icon: "💘", title: "关系信号深度拆解", desc: "拆解他没说出口的好感、投入度与关系承诺" },
    { id: "attachment", icon: "💕", title: "恋爱依恋类型测评", desc: "剖析你的亲密关系底色：安全型还是回避型" },
    { id: "bigfive", icon: "🌊", title: "大五人格专业测评", desc: "学术级 OCEAN 五大核心性格杠杆剖析" },
    { id: "battery", icon: "🔋", title: "社畜精神续航与发疯指数", desc: "测测心理剩余电量与抗压发疯极限" },
    { id: "eq", icon: "🎭", title: "高情商与防PUA测评", desc: "评估同理心深度、社交边界感与防操控能力" },
    { id: "holland", icon: "🧭", title: "霍兰德职业兴趣测评", desc: "RIASEC 六维代码定位你的理想职业赛道" }
  ];

  var filtered = matrixList.filter(function(item) { return item.id !== currentTestId; });

  var cardsHtml = filtered.map(function(item) {
    var unlocked = isTestUnlocked(item.id);
    var btnText = unlocked ? "✓ 已解锁 · 开始测试 →" : "🚀 加购测评 (特惠 ¥1.99) →";
    var btnStyle = unlocked ? "background:linear-gradient(90deg, #10b981 0%, #059669 100%);" : "";
    return `
      <div class="matrix-mini-card">
        <div>
          <div class="matrix-card-top">
            <span class="matrix-card-icon">${item.icon}</span>
            <span class="matrix-card-name">${item.title}</span>
          </div>
          <p class="matrix-card-desc">${item.desc}</p>
        </div>
        <button class="matrix-card-btn" style="${btnStyle}" onclick="checkAndStartTest('${item.id}')">
          ${btnText}
        </button>
      </div>
    `;
  }).join('');

  return `
    <div class="matrix-recommend-section">
      <div class="matrix-header">
        <div class="matrix-title-group">
          <h3 class="matrix-title">🌌 热门测评矩阵 · 探索多维自我</h3>
          <p class="matrix-subtitle">凭本次测试结果，加购矩阵其他核心测评均享 <strong>¥ 1.99 元</strong> 限时专享价</p>
        </div>
        <div class="matrix-swipe-hint">👇 上下滑动探索 👇</div>
      </div>
      <div class="matrix-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
}

// ==========================================================================
// 5. 咸鱼/小红书 自动发卡密钥 & 好友付费防护引擎
// ==========================================================================

// 判断当前是否具备有效付费凭证（带 ?key=... 参数、卡密或已验证）
function isTestUnlocked(testId) {
  if (!testId) return true;

  // 1. 校验 URL 发货 Key：仅自动解锁买家当前所购买的这项单品测评
  if (typeof window !== 'undefined' && window.location && window.location.search) {
    var search = window.location.search.toLowerCase();
    var path = window.location.pathname.toLowerCase();
    
    if (search.indexOf('key=') !== -1 || search.indexOf('token=') !== -1 || search.indexOf('paid=1') !== -1 || search.indexOf('code=') !== -1 || search.indexOf('pass=') !== -1) {
      // 若当前页面路径匹配该测评（如 mbti.html 解锁 mbti），则记录本地单品解锁状态
      var shortId = testId.replace('_signal', '');
      if (path.indexOf(testId) !== -1 || path.indexOf(shortId) !== -1 || path === '/' || path.indexOf('index') !== -1) {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('unlocked_' + testId, 'true');
        }
        return true;
      }
    }
  }

  // 2. 检查买家设备本地存储：买家已单独加购/解锁过的单项测评可重复测试
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('unlocked_' + testId) === 'true';
  }
  return false;
}

function unlockTest(testId) {
  if (typeof localStorage !== 'undefined' && testId) {
    // 标记买家成功解锁【当前这项测评】
    localStorage.setItem('unlocked_' + testId, 'true');
  }
}

function checkAndStartTest(targetTestId) {
  var testId = targetTestId || (currentTest ? currentTest.id : "dating_signal");
  
  if (isTestUnlocked(testId)) {
    startCurrentTest(testId);
  } else {
    showPaywallModal(testId);
  }
}

function showPaywallModal(testId) {
  var test = TEST_DATABASE[testId] || TEST_DATABASE['dating_signal'];
  var modalHtml = `
    <div id="paywallModal" class="modal-overlay show">
      <div class="paywall-card">
        <button class="modal-close-btn" onclick="closePaywallModal()">×</button>
        <span class="paywall-badge">🔒 付费解锁测评</span>
        <h2 class="paywall-title">《${test.title}》</h2>
        
        <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:1.2rem; line-height:1.5;">
          本测评为付费专享，解锁后当前设备永久免费自测。如果您已在平台下单，请点击下方口令解锁；未购买用户可直接在线支付。
        </p>

        <div style="display:flex; flex-direction:column; gap:0.8rem; margin-bottom:0.4rem;">
          <button class="btn btn-outline" style="width:100%; justify-content:center; border-radius:9999px; font-size:0.9rem; padding:0.75rem;" onclick="toggleCodeInput()">
            🔑 已有发货卡密 / 兑换口令解锁 →
          </button>

          <button class="pay-btn-wechat" style="margin-bottom:0;" onclick="simulateWeChatPay('${testId}')">
            🟢 在线支付解锁 (特惠 ¥ 1.99) →
          </button>
        </div>

        <div id="codeInputBox" class="code-input-group" style="display:none; margin-top:0.8rem;">
          <input type="text" id="unlockCodeInput" placeholder="输入订单发货口令 (如 VIP888)">
          <button onclick="verifyUnlockCode('${testId}')">立即验证</button>
        </div>
      </div>
    </div>
  `;

  var existing = document.getElementById("paywallModal");
  if (existing) existing.remove();
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closePaywallModal() {
  var modal = document.getElementById("paywallModal");
  if (modal) modal.remove();
}

function simulateWeChatPay(testId) {
  showToast("💳 在线支付成功！已为您自动解锁本测评");
  unlockTest(testId);
  setTimeout(function() {
    closePaywallModal();
    startCurrentTest(testId);
  }, 1000);
}

function verifyUnlockCode(testId) {
  var input = document.getElementById("unlockCodeInput");
  var val = input ? input.value.trim().toUpperCase() : "";
  if (val.length >= 3) {
    showToast("🔑 卡密验证成功！欢迎咸鱼/小红书贵宾用户");
    unlockTest(testId);
    setTimeout(function() {
      closePaywallModal();
      startCurrentTest(testId);
    }, 800);
  } else {
    showToast("❌ 请输入闲鱼/小红书发送给您的卡密口令");
  }
}

// 🔗 好友转发防护分享工具：只分享裸链接，不带凭证 Key，确保好友打开时必须付费！
function openShareModal() {
  var testName = currentTest ? currentTest.title : "热门心理测评";
  // 去除任何 key/token 参数，确保好友拿到的链接是【未解锁状态】
  var cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
  var shareText = "我在做【" + testName + "】，测出来的结果分析超级准！你也快来测测看吧：" + cleanUrl;

  var shareModalHtml = `
    <div id="shareModal" class="modal-overlay show">
      <div class="paywall-card">
        <button class="modal-close-btn" onclick="closeShareModal()">×</button>
        <span class="paywall-badge" style="background:rgba(236,72,153,0.15); color:#f472b6; border-color:rgba(236,72,153,0.3);">🔗 裂变分享给好友</span>
        <h2 class="paywall-title">邀请好友测算</h2>
        <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:1rem;">
          自动剔除您的已付费卡密。好友打开此链接后<strong>需要付费或凭卡密才能测试</strong>。
        </p>

        <div style="background:rgba(0,0,0,0.4); border:1px solid var(--border-color); border-radius:8px; padding:0.8rem; font-size:0.8rem; color:var(--text-muted); text-align:left; margin-bottom:1.2rem; word-break:break-all;">
          ${shareText}
        </div>

        <button class="btn btn-primary" style="width:100%; justify-content:center; margin-bottom:0.8rem;" onclick="copyShareText('${shareText.replace(/'/g, "\'")}')">
          📋 复制专属邀请链接
        </button>
      </div>
    </div>
  `;

  var existing = document.getElementById("shareModal");
  if (existing) existing.remove();
  document.body.insertAdjacentHTML('beforeend', shareModalHtml);
}

function closeShareModal() {
  var modal = document.getElementById("shareModal");
  if (modal) modal.remove();
}

function copyShareText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      showToast("📋 链接已复制！发送给好友后，好友需付费即可开始测评！");
      closeShareModal();
    }).catch(function() { fallbackCopyShareText(text); });
  } else {
    fallbackCopyShareText(text);
  }
}

function fallbackCopyShareText(text) {
  var input = document.createElement("textarea");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  showToast("📋 链接已复制！发送给好友后，好友需付费即可开始测评！");
  closeShareModal();
}
