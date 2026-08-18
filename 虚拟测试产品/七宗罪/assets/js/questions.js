/**
 * 七宗罪灵魂暗面测试 - 抽象发疯情境题库与地狱判官算法模型
 * 专为小红书/抖音年轻群体打造：极具网感、情绪暴击、抽象发疯、真实扎心
 */

const SINS_META = {
    pride: {
        id: 'pride',
        code: 'PR',
        name: '傲慢',
        enName: 'Pride',
        demon: '路西法 (Lucifer)',
        color: '#d4af37',
        symbol: '👑',
        keyword: '清醒孤傲者',
        tagline: '宁愿在审判中孤独封王，也不在庸俗中随波逐流'
    },
    greed: {
        id: 'greed',
        code: 'GR',
        name: '贪婪',
        enName: 'Greed',
        demon: '玛门 (Mammon)',
        color: '#f59e0b',
        symbol: '🪙',
        keyword: '绝对掌控者',
        tagline: '只有握在手里的资源与确定性，才是对抗虚无的唯一盾牌'
    },
    envy: {
        id: 'envy',
        code: 'EN',
        name: '嫉妒',
        enName: 'Envy',
        demon: '利维坦 (Leviathan)',
        color: '#10b981',
        symbol: '🐍',
        keyword: '潜伏执念体',
        tagline: '注视着别人的王座，在暗处磨砺自己永不熄灭的野心'
    },
    wrath: {
        id: 'wrath',
        code: 'WR',
        name: '暴怒',
        enName: 'Wrath',
        demon: '萨麦尔 (Satan)',
        color: '#ef4444',
        symbol: '🔥',
        keyword: '决绝裁决者',
        tagline: '底线被触碰的刹那，宁可玉石俱焚也绝不妥协'
    },
    sloth: {
        id: 'sloth',
        code: 'SL',
        name: '懒惰',
        enName: 'Sloth',
        demon: '贝芬格 (Belphegor)',
        color: '#8b5cf6',
        symbol: '🌙',
        keyword: '游离旁观者',
        tagline: '以冷眼旁观世界的纷扰，用极致的退缩守护内心的平静'
    },
    gluttony: {
        id: 'gluttony',
        code: 'GL',
        name: '暴食',
        enName: 'Gluttony',
        demon: '别西卜 (Beelzebub)',
        color: '#ec4899',
        symbol: '🍷',
        keyword: '感官饕餮客',
        tagline: '用无尽的多巴胺与感官体验，填补灵魂深处巨大的空洞'
    },
    lust: {
        id: 'lust',
        code: 'LU',
        name: '色欲',
        enName: 'Lust',
        demon: '阿斯蒙蒂斯 (Asmodeus)',
        color: '#06b6d4',
        symbol: '🥀',
        keyword: '沉沦引力场',
        tagline: '渴望被极致地看见与渴望，在迷恋与试探中确认自我的存在'
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

/**
 * 匹配小红书爆款【地狱来客神级抽象称号】
 */
function getHellVisitorTitle(percentages, ranking) {
    const p = percentages;
    const dom1 = ranking[0].id;
    const dom2 = ranking[1].id;
    const minSin = ranking[ranking.length - 1].id;

    // 1. 特殊极端反差匹配（小红书最炸笑点）
    if (minSin === 'lust' && p.lust <= 30 && p.wrath >= 70) {
        return {
            title: '地狱来了一位【和尚】',
            tagline: '色欲清零杀心拉满，阎王看了都直呼功德无量但命犯修罗'
        };
    }
    if (p.greed >= 70 && p.sloth >= 60 && p.envy >= 55) {
        return {
            title: '地狱来了一位【笑面虎】',
            tagline: '表面人畜无害佛系摆烂，暗地里精算利益寸步不让'
        };
    }
    if (p.lust >= 75 && p.pride >= 70) {
        return {
            title: '地狱来了一位【纯血魅魔】',
            tagline: '高不可攀的极度魅惑，视人间情感为掌中玩物'
        };
    }
    if (p.wrath >= 75 && p.pride >= 70) {
        return {
            title: '地狱来了一位【暴君阎罗】',
            tagline: '谁动谁死绝不妥协，连地府小鬼见了都要排队递烟'
        };
    }
    if (p.greed >= 75 && p.gluttony >= 70) {
        return {
            title: '地狱来了一位【吞金巨兽】',
            tagline: '既要富可敌国又要吃尽人间美味，物质与感官的双重饕餮'
        };
    }
    if (p.sloth >= 75 && p.pride >= 70) {
        return {
            title: '地狱来了一位【避世魔尊】',
            tagline: '看透世俗愚昧直接摆烂，躺在地府门口睡觉的厌世神明'
        };
    }
    if (p.envy >= 75 && p.greed >= 65) {
        return {
            title: '地狱来了一位【卷王猎手】',
            tagline: '只要看到别人过得好就浑身难受，化嫉妒为搞钱终极燃料'
        };
    }
    if (p.sloth >= 75 && p.gluttony >= 70) {
        return {
            title: '地狱来了一位【极乐肥宅】',
            tagline: '只要美食与被窝管够，三界兴亡与我毫无瓜葛'
        };
    }
    if (p.lust >= 75 && p.wrath >= 65) {
        return {
            title: '地狱来了一位【病娇狂徒】',
            tagline: '爱到极致便是毁灭，宁可同归于尽也绝不放手'
        };
    }

    const fallbackTitles = {
        'pride': '地狱来了一位【孤傲之王】',
        'greed': '地狱来了一位【资本大鳄】',
        'envy': '地狱来了一位【暗夜修罗】',
        'wrath': '地狱来了一位【烈火裁决者】',
        'sloth': '地狱来了一位【隐世仙人】',
        'gluttony': '地狱来了一位【人间饕餮】',
        'lust': '地狱来了一位【灵魂捕手】'
    };

    return {
        title: fallbackTitles[dom1] || '地狱来了一位【神秘判官】',
        tagline: SINS_META[dom1].tagline
    };
}

/**
 * 计算用户的七宗罪得分分布与七美德镜像
 */
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
    const virtues = {};
    const sortedSins = [];

    const orderKeys = ['pride', 'greed', 'lust', 'envy', 'wrath', 'gluttony', 'sloth'];

    orderKeys.forEach(key => {
        const val = rawScores[key];
        let pct = Math.round((val / maxVal) * 75 + 20 + (val % 3) * 3);
        pct = Math.min(Math.max(pct, 10), 100);
        percentages[key] = pct;
        
        virtues[key] = Math.max(100 - pct + Math.floor(Math.random() * 8), 12);

        sortedSins.push({
            id: key,
            score: pct,
            raw: val,
            meta: SINS_META[key]
        });
    });

    const rankingList = [...sortedSins].sort((a, b) => b.score - a.score);
    const dominant = rankingList[0];
    const secondary = rankingList[1];

    const hellVisitor = getHellVisitorTitle(percentages, rankingList);
    const randomHex = Math.floor(1000 + Math.random() * 9000);
    const serialCode = `SIN-${dominant.meta.code}-${randomHex}`;

    return {
        scores: rawScores,
        percentages: percentages,
        virtues: virtues,
        dominant: dominant,
        secondary: secondary,
        ranking: rankingList,
        hellVisitor: hellVisitor,
        serialCode: serialCode,
        generatedAt: new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' })
    };
}
