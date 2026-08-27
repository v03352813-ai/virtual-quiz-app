/**
 * 七宗罪灵魂暗面测试 - 7大魔神专属法相矢量立绘、30+专属地狱称号与算法库
 */

const SINS_META = {
    pride: { id: 'pride', code: 'PR', name: '傲慢', enName: 'Pride', virtue: '谦逊 Humility', color: '#d4af37' },
    greed: { id: 'greed', code: 'GR', name: '贪婪', enName: 'Greed', virtue: '慷慨 Generosity', color: '#f59e0b' },
    lust: { id: 'lust', code: 'LU', name: '色欲', enName: 'Lust', virtue: '纯洁 Chastity', color: '#ec4899' },
    envy: { id: 'envy', code: 'EN', name: '嫉妒', enName: 'Envy', virtue: '善意 Kindness', color: '#10b981' },
    wrath: { id: 'wrath', code: 'WR', name: '暴怒', enName: 'Wrath', virtue: '耐心 Patience', color: '#ef4444' },
    gluttony: { id: 'gluttony', code: 'GL', name: '暴食', enName: 'Gluttony', virtue: '节制 Temperance', color: '#eab308' },
    sloth: { id: 'sloth', code: 'SL', name: '懒惰', enName: 'Sloth', virtue: '勤勉 Diligence', color: '#8b5cf6' }
};

const JUDGE_AVATARS = {
    pride: {
        id: 'pride',
        code: 'PR',
        name: '傲慢',
        enName: 'Pride',
        judgeName: '深渊傲皇 · 路西法 (Lucifer)',
        avatarSvg: `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="#140e1a" stroke="#d4af37" stroke-width="2"/>
                <path d="M25,40 L35,20 L50,35 L65,20 L75,40 L70,55 L30,55 Z" fill="#d4af37" stroke="#fbbf24" stroke-width="1.5"/>
                <polygon points="50,45 68,65 50,90 32,65" fill="#2d1218" stroke="#dc2626" stroke-width="1.5"/>
                <circle cx="42" cy="62" r="3" fill="#ef4444"/>
                <circle cx="58" cy="62" r="3" fill="#ef4444"/>
                <path d="M45,75 Q50,78 55,75" stroke="#fbbf24" stroke-width="2" fill="none"/>
            </svg>
        `
    },
    greed: {
        id: 'greed',
        code: 'GR',
        name: '贪婪',
        enName: 'Greed',
        judgeName: '金权主宰 · 玛门 (Mammon)',
        avatarSvg: `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="#141008" stroke="#f59e0b" stroke-width="2"/>
                <circle cx="50" cy="50" r="38" fill="#261a06" stroke="#fbbf24" stroke-width="1.5"/>
                <circle cx="50" cy="50" r="28" fill="#1a1205" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3 3"/>
                <text x="50" y="58" font-family="Cinzel, serif" font-size="26" font-weight="900" fill="#fbbf24" text-anchor="middle">🪙</text>
                <path d="M30,30 L50,15 L70,30" stroke="#f59e0b" stroke-width="2" fill="none"/>
                <path d="M30,70 L50,85 L70,70" stroke="#f59e0b" stroke-width="2" fill="none"/>
            </svg>
        `
    },
    lust: {
        id: 'lust',
        code: 'LU',
        name: '色欲',
        enName: 'Lust',
        judgeName: '魅惑魔尊 · 阿斯蒙蒂斯 (Asmodeus)',
        avatarSvg: `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="#180a14" stroke="#ec4899" stroke-width="2"/>
                <path d="M50,25 C30,10 15,35 50,75 C85,35 70,10 50,25 Z" fill="#4a0e2e" stroke="#ec4899" stroke-width="2"/>
                <circle cx="50" cy="42" r="12" fill="#831843" stroke="#f472b6" stroke-width="1.5"/>
                <circle cx="46" cy="40" r="2.5" fill="#ffffff"/>
                <circle cx="54" cy="40" r="2.5" fill="#ffffff"/>
                <path d="M35,65 Q50,85 65,65" stroke="#ec4899" stroke-width="1.5" fill="none"/>
            </svg>
        `
    },
    envy: {
        id: 'envy',
        code: 'EN',
        name: '嫉妒',
        enName: 'Envy',
        judgeName: '深海暗影 · 利维坦 (Leviathan)',
        avatarSvg: `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="#061512" stroke="#10b981" stroke-width="2"/>
                <path d="M50,18 C28,18 20,40 35,60 C45,75 50,85 50,85 C50,85 55,75 65,60 C80,40 72,18 50,18 Z" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
                <ellipse cx="50" cy="45" rx="18" ry="10" fill="#022c22" stroke="#34d399" stroke-width="1.5"/>
                <circle cx="50" cy="45" r="4.5" fill="#6ee7b7"/>
                <line x1="50" y1="35" x2="50" y2="55" stroke="#10b981" stroke-width="2"/>
            </svg>
        `
    },
    wrath: {
        id: 'wrath',
        code: 'WR',
        name: '暴怒',
        enName: 'Wrath',
        judgeName: '断罪战神 · 萨麦尔 (Satan)',
        avatarSvg: `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="#1c0a0a" stroke="#ef4444" stroke-width="2"/>
                <path d="M50,15 L62,38 L88,38 L68,54 L75,80 L50,65 L25,80 L32,54 L12,38 L38,38 Z" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
                <circle cx="50" cy="48" r="10" fill="#991b1b" stroke="#f87171" stroke-width="1.5"/>
                <line x1="42" y1="48" x2="58" y2="48" stroke="#ffffff" stroke-width="3"/>
                <circle cx="50" cy="48" r="2.5" fill="#fef08a"/>
            </svg>
        `
    },
    gluttony: {
        id: 'gluttony',
        code: 'GL',
        name: '暴食',
        enName: 'Gluttony',
        judgeName: '万噬之餮 · 别西卜 (Beelzebub)',
        avatarSvg: `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="#181308" stroke="#eab308" stroke-width="2"/>
                <path d="M28,35 C28,20 72,20 72,35 C72,60 62,80 50,82 C38,80 28,60 28,35 Z" fill="#422006" stroke="#eab308" stroke-width="2"/>
                <ellipse cx="50" cy="55" rx="16" ry="12" fill="#1c1917" stroke="#ca8a04" stroke-width="1.5"/>
                <polygon points="42,50 46,56 40,56" fill="#ffffff"/>
                <polygon points="50,49 54,55 48,55" fill="#ffffff"/>
                <polygon points="58,50 62,56 56,56" fill="#ffffff"/>
                <circle cx="40" cy="35" r="3" fill="#eab308"/>
                <circle cx="60" cy="35" r="3" fill="#eab308"/>
            </svg>
        `
    },
    sloth: {
        id: 'sloth',
        code: 'SL',
        name: '懒惰',
        enName: 'Sloth',
        judgeName: '永眠幽尊 · 贝芬格 (Belphegor)',
        avatarSvg: `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="#110d1c" stroke="#8b5cf6" stroke-width="2"/>
                <path d="M68,32 C55,20 35,28 35,50 C35,72 55,80 68,68 C52,70 42,58 45,45 C48,35 58,30 68,32 Z" fill="#3b0764" stroke="#8b5cf6" stroke-width="2"/>
                <circle cx="48" cy="46" r="2.5" fill="#c4b5fd"/>
                <path d="M42,56 Q50,60 56,54" stroke="#a78bfa" stroke-width="1.5" fill="none"/>
                <circle cx="70" cy="25" r="2" fill="#c4b5fd"/>
                <circle cx="78" cy="38" r="1.5" fill="#c4b5fd"/>
            </svg>
        `
    }
};

const QUESTIONS = [
    {
        id: 1,
        scenario: "💥 职场发疯时刻",
        title: "项目快上线了，猪队友把核心代码搞崩还当众甩锅给你，你的第一反应：",
        options: [
            { text: "立刻拍桌子起立狂暴开麦，谁也别想活着走出会议室！", weights: { wrath: 4, pride: 1 } },
            { text: "冷笑一声看他装，默默收集证据准备在老板面前一枪爆头", weights: { pride: 4, envy: 1 } },
            { text: "深吸一口气直接戴上降噪耳机：爱咋咋地，到点老子先下班", weights: { sloth: 4 } },
            { text: "疯狂点两杯奶茶+炸鸡，靠高糖多巴胺压制想杀人的冲动", weights: { gluttony: 4, sloth: 1 } }
        ]
    },
    {
        id: 2,
        scenario: "📱 朋友圈暴击",
        title: "深夜刷到初中就看不起的同学晒提保时捷和全款买房，你的真实心理状态：",
        options: [
            { text: "后槽牙都要咬碎了：他凭什么？！这世界到底谁在发财啊！", weights: { envy: 4, wrath: 1 } },
            { text: "嗤之以鼻：暴发户罢了，一身土味，内在空虚得要命", weights: { pride: 4, envy: 1 } },
            { text: "连夜爬起来研究搞钱副业和投资理财，焦虑感瞬间拉满", weights: { greed: 4, pride: 1 } },
            { text: "毫无波澜划过去，只要不找我借钱，他当首富关我屁事", weights: { sloth: 4 } }
        ]
    },
    {
        id: 3,
        scenario: "💋 致命诱惑",
        title: "一个颜值身材极度顶级的危险异性半夜给你发'睡了吗，好无聊'，你会：",
        options: [
            { text: "瞬间清醒！明知是陷阱也忍不住想跟对方极限推拉试探边缘", weights: { lust: 4, gluttony: 1 } },
            { text: "享受被顶流美色主动撩拨的上位快感，自诩能掌控全场", weights: { pride: 4, lust: 1 } },
            { text: "冷静评估：长这么帅/美主动找我，是不是要找我借钱或卖保险？", weights: { greed: 4 } },
            { text: "已读不回：跟人聊天好累好麻烦，不如自己单排打游戏", weights: { sloth: 4 } }
        ]
    },
    {
        id: 4,
        scenario: "🧘 功德清零时刻",
        title: "早高峰地铁上，一个插队的人不仅踩了你一脚还大声辱骂你没长眼，你会：",
        options: [
            { text: "直接血气上涌！今天就算班不上了也要把这疯子按在地上摩擦！", weights: { wrath: 4 } },
            { text: "用极其尖酸刻薄的阴阳怪气让全车厢人对他指指点点", weights: { pride: 3, wrath: 2 } },
            { text: "暗暗在心里诅咒他一万遍，默默记住他的脸在小本本上记仇", weights: { envy: 3, wrath: 2 } },
            { text: "默默退后两步：惹不起疯狗，别耽误我听歌和补觉", weights: { sloth: 4 } }
        ]
    },
    {
        id: 5,
        scenario: "🎁 欲望深渊",
        title: "如果今天地府阎王允许你带走一样绝世特权，你毫不犹豫选择：",
        options: [
            { text: "取之不尽的万亿资产，让所有资本和规则向我低头", weights: { greed: 4, pride: 1 } },
            { text: "无人能挡的绝世魅惑，让所有心仪之人为我神魂颠倒", weights: { lust: 4, pride: 1 } },
            { text: "凌驾凡人的至高智慧与审判权，成为冷酷的天神", weights: { pride: 4 } },
            { text: "拥有随心所欲手撕一切傻X和不公的神罚力量", weights: { wrath: 4 } }
        ]
    },
    {
        id: 6,
        scenario: "🍔 压力大爆棚",
        title: "连轴转加班一个月后终于放假第一天，你最典型的回血方式：",
        options: [
            { text: "报复性暴饮暴食，夜宵烧烤蛋糕奶茶全点一遍，撑到走不动", weights: { gluttony: 4 } },
            { text: "报复性疯狂网购清空购物车，只要花钱那一瞬间就极度爽快", weights: { greed: 3, gluttony: 2 } },
            { text: "寻求极度浓烈的情感拥抱或放纵沉沦，渴望被深爱和占有", weights: { lust: 4 } },
            { text: "手机静音窗帘一拉，断联三天三夜与世隔绝当具尸体", weights: { sloth: 4 } }
        ]
    },
    {
        id: 7,
        scenario: "😈 真实阴暗面",
        title: "关于'好朋友的生活'，你潜意识里划过最不为人知的一念是：",
        options: [
            { text: "我真心希望你过得好，但你绝对不能比我好太多", weights: { envy: 4 } },
            { text: "其实我潜意识里一直觉得自己各个维度的品味和智商都高他一等", weights: { pride: 4 } },
            { text: "交朋友也是价值交换，没有用的人脉我懒得花时间维系", weights: { greed: 4 } },
            { text: "只要别找我出门、别找我倾倒情绪垃圾，他怎样我都无所谓", weights: { sloth: 4 } }
        ]
    },
    {
        id: 8,
        scenario: "🛒 购物心机",
        title: "在面对'全场大降价买一送一'或大牌骨折捡漏时，你的内心独白：",
        options: [
            { text: "不管用不用得上，买到就是老子赚到，决不能吃半点亏！", weights: { greed: 4 } },
            { text: "纯粹被精致包装和新鲜感蛊惑，只要那一秒的快乐就行", weights: { gluttony: 3, lust: 2 } },
            { text: "只买最贵最稀缺的限量款，必须能体现我的品位和阶层", weights: { pride: 4 } },
            { text: "算满减规则算到头大，嫌麻烦直接退出不买了", weights: { sloth: 4 } }
        ]
    },
    {
        id: 9,
        scenario: "🥀 感情执念",
        title: "在一段亲密关系中，什么情况会让你产生想要摧毁一切的毁灭欲？",
        options: [
            { text: "对方对我逐渐冷淡、敷衍，不再为我痴狂着迷", weights: { lust: 4, envy: 1 } },
            { text: "对方公开贬低我的能力和智商，践踏我的尊严与骄傲", weights: { pride: 4, wrath: 1 } },
            { text: "发现对方在钱和核心利益上防备我、算计我", weights: { greed: 4 } },
            { text: "对方一天到晚无理取闹找茬内耗，疯狂打扰我的清静", weights: { sloth: 3, wrath: 2 } }
        ]
    },
    {
        id: 10,
        scenario: "💰 搞钱执念",
        title: "如果今天突然天降一笔 5000 万巨款，你的第一步神级操作：",
        options: [
            { text: "把所有讨厌的上司同事全拉黑，买个远离人类的院子彻底躺平", weights: { sloth: 4 } },
            { text: "拿去吃遍全球米其林、住最顶奢酒店，把以前没爽过的全爽一遍", weights: { gluttony: 4, lust: 2 } },
            { text: "盛装重返曾经看不起我的圈子，用绝对实力当面打肿他们的脸", weights: { pride: 4, wrath: 1 } },
            { text: "做资产配置和信托理财，让钱滚钱，构建属于我的金融防线", weights: { greed: 4 } }
        ]
    },
    {
        id: 11,
        scenario: "🔥 逆袭执念",
        title: "当你发现别人靠投机取巧轻而易举就得到了你拼命争取的机会时：",
        options: [
            { text: "这破世界就是个巨大的草台班子！真想把所有规则砸个稀烂！", weights: { wrath: 4 } },
            { text: "在深夜反复破防内耗：'为什么偏偏不是我？到底差在哪？！'", weights: { envy: 4 } },
            { text: "冷眼嗤笑：德不配位必有灾殃，早晚看他从高处摔死", weights: { pride: 4 } },
            { text: "彻底看透了，这破班谁爱上谁上，明天开始极致摸鱼", weights: { sloth: 4 } }
        ]
    },
    {
        id: 12,
        scenario: "🍷 深夜多巴胺",
        title: "凌晨两点依然睡不着的时候，你最容易沉迷哪种'罪恶'？",
        options: [
            { text: "外卖软件疯狂翻夜宵炸鸡奶茶，明知长胖也忍不住下单", weights: { gluttony: 4 } },
            { text: "刷高颜值帅哥美女视频、与暧昧对象疯狂深夜聊天推拉", weights: { lust: 4 } },
            { text: "漫无目的地刷短视频或小说，明知明天要早起也舍不得睡", weights: { sloth: 3, gluttony: 2 } },
            { text: "不停翻看股票收益、搞钱博主视频，焦虑到失眠", weights: { greed: 4 } }
        ]
    },
    {
        id: 13,
        scenario: "👑 社交审判",
        title: "在大家高谈阔论时，遇到一个人说了句非常愚蠢可笑的常识错误：",
        options: [
            { text: "当场一针见血用犀利逻辑戳穿，让他下不来台", weights: { pride: 4, wrath: 1 } },
            { text: "生理性厌蠢，忍不住当场白眼翻上天", weights: { wrath: 3, pride: 2 } },
            { text: "笑而不语静静看他装，在心里把这个人彻底拉入平庸黑名单", weights: { pride: 4, sloth: 1 } },
            { text: "关我屁事，左耳进右耳出，根本没在听", weights: { sloth: 4 } }
        ]
    },
    {
        id: 14,
        scenario: "🎭 支配与占有",
        title: "在情感中，你是否曾体验过一种'既想占有对方，又想看对方为自己痛苦'的暗黑心理？",
        options: [
            { text: "是的，我迷恋被对方视作唯一救赎、为我疯狂纠缠的感觉", weights: { lust: 4, pride: 1 } },
            { text: "只要他多看别人一眼，我心里的嫉妒烈火就会瞬间烧起来", weights: { envy: 4, wrath: 1 } },
            { text: "没有，恋爱太耗费电量了，不要折磨我更不要烦我", weights: { sloth: 4 } },
            { text: "我认为感情就是权力游戏，我必须牢牢占据上位掌控权", weights: { pride: 3, greed: 2 } }
        ]
    },
    {
        id: 15,
        scenario: "💔 背叛清算",
        title: "当你被一个掏心掏肺信任的人在背后狠狠捅刀子背叛时：",
        options: [
            { text: "滔天怒火！哪怕自损一千也要让他百倍偿还这个代价！", weights: { wrath: 4 } },
            { text: "奇耻大辱！冷漠拉黑并暗中蓄力，在更高维度彻底碾压他", weights: { pride: 3, greed: 2 } },
            { text: "陷入深度怨恨：'为什么我这么真心对他，他却这样负我？'", weights: { envy: 4 } },
            { text: "心如死灰，更加确信人类不可信，彻底封闭社交", weights: { sloth: 4 } }
        ]
    },
    {
        id: 16,
        scenario: "✨ 人群焦点",
        title: "如果参加一个高级晚宴，你最渴望自己是以什么姿态登场？",
        options: [
            { text: "全场目光收割机，所有人都为我的绝美魅力神魂颠倒", weights: { lust: 4, pride: 1 } },
            { text: "全场公认的核心大脑与权威，所有人对我恭敬有加", weights: { pride: 4 } },
            { text: "商业资源掌控者，大家争先恐后向我输送利益和情报", weights: { greed: 4 } },
            { text: "坐在角落安静吃最贵的那盘鹅肝和三文鱼，吃完直接溜", weights: { sloth: 3, gluttony: 2 } }
        ]
    },
    {
        id: 17,
        scenario: "⚡ 情绪失控",
        title: "在什么特定时刻，你感觉自己体内的'怪物'最容易被释放出来？",
        options: [
            { text: "被当众挑衅、被不讲理的人逼到墙角的那一瞬间", weights: { wrath: 4 } },
            { text: "看到身边不如自己的人踩了狗屎运狂赚大钱的时候", weights: { envy: 4 } },
            { text: "自己的所有物、领地或辛苦攒下的钱财被掠夺的时候", weights: { greed: 4 } },
            { text: "长时间被剥夺睡眠和独处时间，整个人处于过载崩溃时", weights: { sloth: 4 } }
        ]
    },
    {
        id: 18,
        scenario: "🍕 享乐主义",
        title: "面对'人生苦短，到底活着为了什么'这个终极哲学问题，你的答案：",
        options: [
            { text: "及时行乐！若不能吃尽人间至味、享尽肉体欢愉，活着就是坐牢", weights: { gluttony: 3, lust: 3 } },
            { text: "积累实力！唯有金钱、地位和筹码才能对抗世俗的残酷", weights: { greed: 3, pride: 2 } },
            { text: "追求卓越！在这个庸俗的世界里活成不被定义的清醒强者", weights: { pride: 4 } },
            { text: "少管闲事！怎么舒服怎么活，谁也别想绑架我内卷", weights: { sloth: 4 } }
        ]
    },
    {
        id: 19,
        scenario: "🪞 灵魂之镜",
        title: "如果地府的照妖镜照出你的灵魂原型，你最无法接受自己变成：",
        options: [
            { text: "平庸无能、泯然众人，一生都在仰望别人的背影", weights: { pride: 3, envy: 3 } },
            { text: "两手空空、一无所有，在大风大浪前毫无还手之力", weights: { greed: 4 } },
            { text: "年老色衰、魅力尽失，再也无人为我心动驻足", weights: { lust: 4 } },
            { text: "一辈子当牛做马为了别人活着，至死没享受过宁静", weights: { sloth: 4 } }
        ]
    },
    {
        id: 20,
        scenario: "🎯 竞争法则",
        title: "在面对一个非常强大的竞争对手时，你的第一本能心理：",
        options: [
            { text: "激发极强的胜负欲，哪怕拼了命也要把他从第一名拉下来", weights: { envy: 3, wrath: 2 } },
            { text: "研究他的破绽与弱点，用降维打击一击必杀", weights: { pride: 3, greed: 2 } },
            { text: "如果代价太大我就直接换赛道，绝不做吃力不讨好的内耗事", weights: { sloth: 3, greed: 2 } },
            { text: "想办法把对手拉拢成我的盟友，共同做大蛋糕分钱", weights: { greed: 4 } }
        ]
    },
    {
        id: 21,
        scenario: "⚖️ 终极审判",
        title: "站在地狱的大门口，如果让你给自己上一世的生活下一个判词：",
        options: [
            { text: "我桀骜不驯、精神洁癖，从未向庸俗妥协半分", weights: { pride: 4 } },
            { text: "我算无遗策、步步为营，该争的利益我寸步未让", weights: { greed: 4 } },
            { text: "我爱憎分明、烈火真性情，谁踩我底线我跟谁玩命", weights: { wrath: 4 } },
            { text: "我冷眼旁观、佛系至极，能躺着过完一辈子就是大赢家", weights: { sloth: 4 } }
        ]
    }
];

function getHellVisitorTitle(percentages, ranking) {
    const dom1 = ranking[0].id;
    const dom2 = ranking[1].id;

    // 精准双罪印复合称号矩阵 (42 种主次组合，千人千面绝不重样)
    const comboTitles = {
        // --- 1. 傲慢为主 (Pride Dominant: 路西法) ---
        'pride_greed': { title: '地狱来了一位【帝国执政官】', tagline: '“既要无上的尊严名望，又要实打实的资本江山”' },
        'pride_wrath': { title: '地狱来了一位【神罚裁决官】', tagline: '“蔑视一切愚昧凡人，底线被踩瞬间焚天灭地”' },
        'pride_envy': { title: '地狱来了一位【暗夜孤傲皇】', tagline: '“骨子里骄傲绝顶，暗地里咬牙跟全世界较劲”' },
        'pride_lust': { title: '地狱来了一位【倾世高岭花】', tagline: '“高不可攀的极度魅惑，视人间狂蜂浪蝶为掌中玩物”' },
        'pride_gluttony': { title: '地狱来了一位【享乐贵族】', tagline: '“极挑剔的审美品味，肉体与精神绝不容忍半分将就”' },
        'pride_sloth': { title: '地狱来了一位【清醒倦怠者】', tagline: '“认知凌驾于众人之上，看透世俗虚妄而选择冷眼旁观”' },

        // --- 2. 贪婪为主 (Greed Dominant: 玛门) ---
        'greed_pride': { title: '地狱来了一位【深渊幕后财阀】', tagline: '“万物皆有标价，掌控了资本就掌控了人性的生杀大权”' },
        'greed_envy': { title: '地狱来了一位【资本掠食者】', tagline: '“别人的富足是你心中的警钟，搞钱的野心永不满足”' },
        'greed_wrath': { title: '地狱来了一位【铁血收割机】', tagline: '“动我利益者虽远必诛，在名利场上杀伐决断”' },
        'greed_sloth': { title: '地狱来了一位【笑面虎】', tagline: '“表面人畜无害佛系摆烂，暗地里精算利益寸步不让”' },
        'greed_gluttony': { title: '地狱来了一位【吞金巨兽】', tagline: '“既要富可敌国又要极致享受，物质与感官的双重饕餮”' },
        'greed_lust': { title: '地狱来了一位【名利场猎心人】', tagline: '“用金钱构筑欲望壁垒，把浪漫明码标价作为博弈筹码”' },

        // --- 3. 暴怒为主 (Wrath Dominant: 萨麦尔) ---
        'wrath_pride': { title: '地狱来了一位【阎罗修罗王】', tagline: '“惹我者必挫骨扬灰，连地府恶鬼见了都要排队敬烟”' },
        'wrath_envy': { title: '地狱来了一位【复仇撕裂者】', tagline: '“心中写满了必须清算的名单，对所有不公怀抱滔天战意”' },
        'wrath_greed': { title: '地狱来了一位【狂暴掠夺者】', tagline: '“用最直接的铁拳捍卫地盘，寸土不让寸金必争”' },
        'wrath_lust': { title: '地狱来了一位【病娇狂徒】', tagline: '“爱与恨皆是烈火燎原，宁可玉石俱焚也绝不放手”' },
        'wrath_gluttony': { title: '地狱来了一位【暴走狂食客】', tagline: '“情绪一旦失控便以狂欢泄愤，用吞噬宣泄满腔怒火”' },
        'wrath_sloth': { title: '地狱来了一位【暴躁蛰伏者】', tagline: '“平时懒得理你，一旦触犯逆鳞瞬间炸穿地府”' },

        // --- 4. 嫉妒为主 (Envy Dominant: 利维坦) ---
        'envy_pride': { title: '地狱来了一位【逆光潜行者】', tagline: '“骨子里绝不甘居人下，在阴影中磨砺超越所有人的锋刃”' },
        'envy_greed': { title: '地狱来了一位【逆袭卷王猎手】', tagline: '“只要看到别人过得好就浑身难受，化嫉妒为搞钱终极燃料”' },
        'envy_wrath': { title: '地狱来了一位【暗夜复仇者】', tagline: '“世人轻我辱我，终有一日必以绝对实力反噬全场”' },
        'envy_lust': { title: '地狱来了一位【情执心机客】', tagline: '“极度渴求独一无二的偏爱，容不下心仪之人眼里有任何他人”' },
        'envy_gluttony': { title: '地狱来了一位【饥渴窥视者】', tagline: '“总觉得别人碗里的更香，用无休止的索取填补内心的不平衡”' },
        'envy_sloth': { title: '地狱来了一位【内耗夜行僧】', tagline: '“一边羡慕别人的光鲜，一边困在行动力枯竭的被窝里”' },

        // --- 5. 懒惰为主 (Sloth Dominant: 贝尔芬格) ---
        'sloth_pride': { title: '地狱来了一位【厌世魔尊】', tagline: '“看透世俗愚昧直接摆烂，躺在地府门口睡觉的避世之神”' },
        'sloth_greed': { title: '地狱来了一位【笑面虎】', tagline: '“表面人畜无害佛系摆烂，暗地里精算利益寸步不让”' },
        'sloth_wrath': { title: '地狱来了一位【冷暴力刺客】', tagline: '“极度厌恶麻烦，逼急了直接用毁灭性断联让你人间蒸发”' },
        'sloth_envy': { title: '地狱来了一位【酸涩空想家】', tagline: '“内心戏比谁都多，行动力却永远卡在明天再说的循环里”' },
        'sloth_gluttony': { title: '地狱来了一位【极乐摆烂肥宅】', tagline: '“只要美食与被窝管够，三界兴亡与我毫无瓜葛”' },
        'sloth_lust': { title: '地狱来了一位【随缘心动客】', tagline: '“懒得主动追逐，只等灵魂契合之人跨越千山万水来找我”' },

        // --- 6. 色欲为主 (Lust Dominant: 阿斯蒙蒂斯) ---
        'lust_pride': { title: '地狱来了一位【纯血致命魅魔】', tagline: '“高高在上的极致荷尔蒙，只享受他人为自己神魂颠倒的快感”' },
        'lust_greed': { title: '地狱来了一位【情场操盘手】', tagline: '“将吸引力转化为现实资源，在情感博弈中永远立于不败之地”' },
        'lust_wrath': { title: '地狱来了一位【致命黑玫瑰】', tagline: '“温柔是陷阱，刺是武器，背叛者必将承受撕心裂肺之痛”' },
        'lust_envy': { title: '地狱来了一位【求爱独占狂】', tagline: '“渴望被偏爱到极致，对心上人的过往与周边人怀有绝对占有欲”' },
        'lust_gluttony': { title: '地狱来了一位【多巴胺狂徒】', tagline: '“肉体与感官的双重狂欢，绝不在清规戒律里虚度此生”' },
        'lust_sloth': { title: '地狱来了一位【慵懒捕梦者】', tagline: '“漫不经心的性感与神秘，等待那个为自己飞蛾扑火的灵魂”' },

        // --- 7. 暴食为主 (Gluttony Dominant: 别西卜) ---
        'gluttony_pride': { title: '地狱来了一位【挑剔美食贵族】', tagline: '“非人间珍馐不入吾口，享受被最高规格礼遇的奢靡快感”' },
        'gluttony_greed': { title: '地狱来了一位【极乐吞金饕餮】', tagline: '“金钱、美食、资源全都要，永无止境地扩充欲望版图”' },
        'gluttony_wrath': { title: '地狱来了一位【狂暴饕餮客】', tagline: '“欲望得不到满足便掀桌暴走，用毁灭性进食平息精神狂躁”' },
        'gluttony_envy': { title: '地狱来了一位【夺食窥伺者】', tagline: '“别人的享受永远比自己的诱人，永远在抢夺与比拼中填补空虚”' },
        'gluttony_sloth': { title: '地狱来了一位【安乐窝饕餮】', tagline: '“能不动就不动，被窝与美食是抵御人间风雨的坚固堡垒”' },
        'gluttony_lust': { title: '地狱来了一位【感官沉溺者】', tagline: '“食色性也皆为本能，沉浸于多巴胺与肉体温存的极致欢愉”' }
    };

    const directKey = `${dom1}_${dom2}`;
    if (comboTitles[directKey]) return comboTitles[directKey];

    const singleTitles = {
        'pride': { title: '地狱来了一位【深渊孤傲皇】', tagline: '“宁愿在审判中孤独封王，也不在庸俗中随波逐流”' },
        'greed': { title: '地狱来了一位【深渊幕后财阀】', tagline: '“万物皆有标价，掌控了资本就掌控了人性的生杀大权”' },
        'lust': { title: '地狱来了一位【纯血致命魅魔】', tagline: '“高高在上的极致荷尔蒙，只享受他人为自己神魂颠倒的快感”' },
        'envy': { title: '地狱来了一位【逆袭卷王猎手】', tagline: '“只要看到别人过得好就浑身难受，化嫉妒为搞钱终极燃料”' },
        'wrath': { title: '地狱来了一位【阎罗修罗王】', tagline: '“惹我者必挫骨扬灰，连地府恶鬼见了都要排队敬烟”' },
        'gluttony': { title: '地狱来了一位【极乐吞金饕餮】', tagline: '“金钱、美食、资源全都要，永无止境地扩充欲望版图”' },
        'sloth': { title: '地狱来了一位【厌世魔尊】', tagline: '“看透世俗愚昧直接摆烂，躺在地府门口睡觉的避世之神”' }
    };

    return singleTitles[dom1] || { title: '地狱来了一位【深渊主宰】', tagline: '“直面灵魂真实罪印”' };
}

const VIRTUE_PROFILES = {
    pride: {
        maskName: '谦逊与优雅',
        subLabel: '人前谦和从容 vs 骨子里深渊称王',
        detail: '你在世俗社交中极擅长用谦和、从容和高情商掩盖骨子里的骄傲与居高临下的降维审视。'
    },
    greed: {
        maskName: '慷慨与佛系',
        subLabel: '人前大方好客 vs 暗中筹码精算',
        detail: '你在世俗社交中常以大方、好说话的面具示人，实则暗中精算筹码与得失，绝不做亏本买卖。'
    },
    wrath: {
        maskName: '温和与克制',
        subLabel: '人前波澜不惊 vs 内心暗黑烈焰',
        detail: '你习惯用理智与礼貌压抑情绪，外表看似温和无害，内心早已构筑足以焚烧一切的火药桶。'
    },
    envy: {
        maskName: '赞赏与体面',
        subLabel: '人前得体赞许 vs 暗地胜负执念',
        detail: '你总能真诚得体地夸赞他人，但内心深处暗自较劲的胜负欲与超越野心从未停止沸腾。'
    },
    sloth: {
        maskName: '勤勉与靠谱',
        subLabel: '人前积极配合 vs 灵魂极致厌世',
        detail: '你在职场与社交中努力维持靠谱执行者的形象，内心每一秒都在倒计时渴望彻底关机摆烂。'
    },
    lust: {
        maskName: '清冷与禁欲',
        subLabel: '人前高岭之花 vs 深渊多巴胺猎手',
        detail: '你善于用清冷、无欲无求的姿态掩饰内在极具侵略性的荷尔蒙掌控欲与灵魂占有欲。'
    },
    gluttony: {
        maskName: '自律与清心',
        subLabel: '人前规律克制 vs 独处物欲狂欢',
        detail: '你在人前严格恪守自律与清规戒律，唯有在独处时才会放纵感官与物欲的报复性狂欢。'
    }
};

function calculateSinResults(answers) {
    const rawScores = {
        pride: 0,
        greed: 0,
        lust: 0,
        envy: 0,
        wrath: 0,
        gluttony: 0,
        sloth: 0
    };

    answers.forEach((optIndex, qIndex) => {
        const question = QUESTIONS[qIndex];
        if (question && question.options[optIndex]) {
            const weights = question.options[optIndex].weights;
            for (const [sinKey, weight] of Object.entries(weights)) {
                if (rawScores[sinKey] !== undefined) {
                    rawScores[sinKey] += weight;
                }
            }
        }
    });

    const maxVal = Math.max(...Object.values(rawScores), 1);
    const percentages = {};
    const sortedSins = [];

    const orderKeys = ['pride', 'greed', 'lust', 'envy', 'wrath', 'gluttony', 'sloth'];

    orderKeys.forEach(key => {
        const val = rawScores[key];
        let pct = Math.round((val / maxVal) * 75 + 20 + (val % 3) * 3);
        pct = Math.min(Math.max(pct, 15), 100);
        percentages[key] = pct;

        sortedSins.push({
            id: key,
            score: pct,
            raw: val,
            meta: SINS_META[key] || { id: key, code: key.toUpperCase().slice(0, 2), name: key },
            avatar: JUDGE_AVATARS[key]
        });
    });

    const rankingList = [...sortedSins].sort((a, b) => b.score - a.score);
    const dominant = rankingList[0];
    const secondary = rankingList[1];

    // 动态计算【光暗双生：七美德伪装镜像】指数与多维画像
    const profile = VIRTUE_PROFILES[dominant.id] || VIRTUE_PROFILES.pride;
    let baseMaskScore = 68;
    const gap = Math.abs((rawScores[dominant.id] || 10) - (rawScores[secondary.id] || 8));
    if (gap <= 2) baseMaskScore += 16;
    else if (gap <= 4) baseMaskScore += 8;
    else baseMaskScore -= 10;

    let hash = 0;
    answers.forEach((ans, i) => { hash += (ans + 1) * (i + 4); });
    const modifier = (hash % 19) - 7;
    const finalMaskScore = Math.min(Math.max(baseMaskScore + modifier, 38), 94);

    const virtueMaskInfo = {
        score: finalMaskScore,
        maskName: profile.maskName,
        subLabel: profile.subLabel,
        detail: profile.detail
    };

    const hellVisitor = getHellVisitorTitle(percentages, rankingList);
    const code = (dominant.meta && dominant.meta.code) ? dominant.meta.code : 'SIN';
    const randomHex = Math.floor(1000 + Math.random() * 9000);
    const serialCode = `SIN-${code}-${randomHex}`;

    return {
        scores: rawScores,
        percentages: percentages,
        virtueMask: virtueMaskInfo,
        virtueScore: finalMaskScore,
        dominant: dominant,
        secondary: secondary,
        ranking: rankingList,
        judgeAvatar: JUDGE_AVATARS[dominant.id],
        hellVisitor: hellVisitor,
        serialCode: serialCode,
        generatedAt: new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' })
    };
}
