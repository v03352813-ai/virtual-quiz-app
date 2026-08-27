/**
 * 七宗罪灵魂暗面测试 - 主应用交互控制器 (已完全回滚至纯净经典版)
 */

const state = {
    currentStep: 'welcome',
    currentQuestionIndex: 0,
    answers: [],
    userName: '探索者',
    calculationResult: null,
    currentShowcaseTheme: 'avatar', // 'avatar' | 'radar' | 'ranking'
    currentPosterTheme: 'avatar'
};

const dom = {
    mainContainer: document.getElementById('main-container'),
    viewWelcome: document.getElementById('view-welcome'),
    viewQuiz: document.getElementById('view-quiz'),
    viewAnalyzing: document.getElementById('view-analyzing'),
    viewResult: document.getElementById('view-result'),
    
    inputUserName: document.getElementById('input-username'),
    btnStart: document.getElementById('btn-start-quiz'),
    
    quizScenarioBadge: document.getElementById('quiz-scenario-badge'),
    quizProgressText: document.getElementById('quiz-progress-text'),
    quizProgressBar: document.getElementById('quiz-progress-bar'),
    quizQuestionTitle: document.getElementById('quiz-question-title'),
    quizOptionsList: document.getElementById('quiz-options-list'),
    btnPrevQuestion: document.getElementById('btn-prev-question'),
    
    // C 位画框轮换插槽与组件
    showcaseTabsBar: document.getElementById('showcase-tabs-bar'),
    showcaseHeroSlot: document.getElementById('showcase-hero-slot'),
    showcaseSubLeft: document.getElementById('showcase-sub-left'),
    showcaseSubRight: document.getElementById('showcase-sub-right'),
    modAvatar: document.getElementById('mod-avatar'),
    modRadar: document.getElementById('mod-radar'),
    modRanking: document.getElementById('mod-ranking'),

    resJudgeNameTag: document.getElementById('res-judge-name-tag'),
    resHellTitle: document.getElementById('res-hell-title'),
    resHellTagline: document.getElementById('res-hell-tagline'),
    resRankList: document.getElementById('res-rank-list'),
    resVirtueScore: document.getElementById('res-virtue-score'),
    
    reportContentBox: document.getElementById('report-content-box'),
    lockPayContainer: document.getElementById('lock-pay-container'),
    btnOpenLicenseModal: document.getElementById('btn-open-license-modal'),
    btnOpenPosterModal: document.getElementById('btn-open-poster-modal'),
    btnRestartQuiz: document.getElementById('btn-restart-quiz'),
    
    modalLicense: document.getElementById('modal-license'),
    inputLicenseKey: document.getElementById('input-license-key'),
    btnVerifyLicense: document.getElementById('btn-verify-license'),
    btnCloseLicenseModal: document.getElementById('btn-close-license-modal'),
    licenseErrorTip: document.getElementById('license-error-tip'),
    
    modalPoster: document.getElementById('modal-poster'),
    posterTabsBar: document.getElementById('poster-tabs-bar'),
    posterLoadingMask: document.getElementById('poster-loading-mask'),
    imgPosterPreview: document.getElementById('img-poster-preview'),
    btnClosePosterModal: document.getElementById('btn-close-poster-modal')
};

document.addEventListener('DOMContentLoaded', () => {
    initEvents();
    checkUrlParams();
});

function initEvents() {
    dom.btnStart.addEventListener('click', () => {
        // 严格前置门票制：未付款/无密钥时，点击开始直接拦截并弹出购买/输入密钥弹窗！
        if (!isReportUnlocked()) {
            if (dom.modalLicense) {
                dom.modalLicense.classList.add('active');
                if (dom.licenseErrorTip) {
                    dom.licenseErrorTip.textContent = '🔒 本测验为专属付费档案，请先输入密钥或前往小红书购买！';
                }
            }
            return;
        }

        const nameVal = dom.inputUserName.value.trim();
        state.userName = nameVal || '探索者';
        switchView('quiz');
        renderQuestion(0);
    });

    dom.btnPrevQuestion.addEventListener('click', () => {
        if (state.currentQuestionIndex > 0) {
            state.currentQuestionIndex--;
            renderQuestion(state.currentQuestionIndex);
        }
    });

    if (dom.btnRestartQuiz) {
        dom.btnRestartQuiz.addEventListener('click', () => {
            if (confirm('确定要重新过堂审判吗？已答卷宗将被重置并开启全新测试。')) {
                localStorage.removeItem('sin_saved_result_v1');
                state.currentQuestionIndex = 0;
                state.answers = [];
                state.currentShowcaseTheme = 'avatar';
                state.currentPosterTheme = 'avatar';
                const restoreBox = document.getElementById('box-restore-result');
                if (restoreBox) restoreBox.style.display = 'none';
                switchView('welcome');
            }
        });
    }

    // 检查是否有已保存的历史卷宗
    checkSavedHistoryResult();

    // 顶部 Tab 切换 C 位
    if (dom.showcaseTabsBar) {
        dom.showcaseTabsBar.addEventListener('click', (e) => {
            const tab = e.target.closest('.capsule-tab');
            if (tab && tab.dataset.theme) {
                switchShowcaseTheme(tab.dataset.theme);
            }
        });
    }

    // 点击底部副舞台小画框直接置顶互换
    if (dom.showcaseSubLeft) {
        dom.showcaseSubLeft.addEventListener('click', (e) => {
            const card = dom.showcaseSubLeft.querySelector('.showcase-card');
            if (card && card.dataset.module) {
                switchShowcaseTheme(card.dataset.module);
            }
        });
    }
    if (dom.showcaseSubRight) {
        dom.showcaseSubRight.addEventListener('click', (e) => {
            const card = dom.showcaseSubRight.querySelector('.showcase-card');
            if (card && card.dataset.module) {
                switchShowcaseTheme(card.dataset.module);
            }
        });
    }

    // 海报弹窗内的版型 Tab 切换
    if (dom.posterTabsBar) {
        dom.posterTabsBar.addEventListener('click', (e) => {
            const btn = e.target.closest('.poster-tab-btn');
            if (btn && btn.dataset.theme) {
                updatePosterTheme(btn.dataset.theme);
            }
        });
    }

    dom.btnOpenLicenseModal.addEventListener('click', () => {
        dom.licenseErrorTip.textContent = '';
        dom.inputLicenseKey.value = '';
        dom.modalLicense.classList.add('active');
    });

    dom.btnCloseLicenseModal.addEventListener('click', () => {
        dom.modalLicense.classList.remove('active');
    });

    dom.btnVerifyLicense.addEventListener('click', handleVerifyLicense);
    dom.btnOpenPosterModal.addEventListener('click', handleGeneratePoster);
    dom.btnClosePosterModal.addEventListener('click', () => {
        dom.modalPoster.classList.remove('active');
    });

    // 7 大魔神真身快速切换预览
    document.querySelectorAll('.btn-sin-preview').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const sinId = e.currentTarget.getAttribute('data-sin');
            if (sinId) {
                previewSpecificSin(sinId);
            }
        });
    });

    // 窗口尺寸变化时自动自适应重绘雷达图
    window.addEventListener('resize', () => {
        if (state.currentStep === 'result' && state.calculationResult) {
            const dominantId = (state.calculationResult.dominant && state.calculationResult.dominant.id) ? state.calculationResult.dominant.id : 'pride';
            drawClassicNativeRadar('classicRadarCanvas', state.calculationResult.percentages, dominantId);
        }
    });
}

function previewSpecificSin(sinId) {
    let dominantId = sinId;
    let secondaryId = 'sloth';

    if (sinId === 'tiger') {
        dominantId = 'greed';
        secondaryId = 'sloth';
    } else {
        const secondaryMap = {
            pride: 'greed',
            greed: 'sloth',   // 贪婪 + 懒惰 ➔ 触发爆款【笑面虎】
            lust: 'gluttony',
            envy: 'pride',
            wrath: 'pride',
            gluttony: 'lust',
            sloth: 'greed'    // 懒惰 + 贪婪 ➔ 触发爆款【笑面虎】
        };
        secondaryId = secondaryMap[sinId] || 'greed';
    }

    const defaultScores = {
        pride: 42,
        greed: 38,
        lust: 35,
        envy: 48,
        gluttony: 30,
        wrath: 45,
        sloth: 36
    };
    defaultScores[dominantId] = 98; // 主罪 98%
    defaultScores[secondaryId] = 85; // 次罪 85%

    const sorted = Object.keys(defaultScores).map(k => ({
        id: k,
        score: defaultScores[k],
        meta: SINS_META[k]
    })).sort((a, b) => b.score - a.score);

    const hellVisitor = (typeof getHellVisitorTitle === 'function') 
        ? getHellVisitorTitle(defaultScores, sorted)
        : { title: '地狱来了一位【笑面虎】', tagline: '“表面人畜无害佛系摆烂，暗地里精算利益寸步不让”' };

    state.calculationResult = {
        percentages: defaultScores,
        dominant: {
            id: dominantId,
            score: 98,
            meta: SINS_META[dominantId]
        },
        secondary: {
            id: secondaryId,
            score: 85,
            meta: SINS_META[secondaryId]
        },
        judgeAvatar: JUDGE_AVATARS[dominantId],
        hellVisitor: hellVisitor,
        ranking: sorted,
        serialCode: `SIN-2026-${dominantId.toUpperCase()}-888`
    };

    switchView('result');
    renderResultView();

    // 滚动到顶部方便录屏
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchView(viewName) {
    state.currentStep = viewName;
    const views = [dom.viewWelcome, dom.viewQuiz, dom.viewAnalyzing, dom.viewResult];
    views.forEach(v => {
        if (v) v.classList.remove('active');
    });

    // 仅在结果页展示顶栏的 C 位切换胶囊
    if (dom.showcaseTabsBar) {
        dom.showcaseTabsBar.style.display = viewName === 'result' ? 'flex' : 'none';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (viewName === 'welcome' && dom.viewWelcome) dom.viewWelcome.classList.add('active');
    if (viewName === 'quiz' && dom.viewQuiz) dom.viewQuiz.classList.add('active');
    if (viewName === 'analyzing' && dom.viewAnalyzing) dom.viewAnalyzing.classList.add('active');
    if (viewName === 'result' && dom.viewResult) dom.viewResult.classList.add('active');
}

function renderQuestion(index) {
    state.currentQuestionIndex = index;
    const q = QUESTIONS[index];
    const total = QUESTIONS.length;

    if (dom.quizScenarioBadge) dom.quizScenarioBadge.textContent = q.scenario || '💥 发疯情境时刻';
    if (dom.quizProgressText) dom.quizProgressText.textContent = `${index + 1} / ${total}`;
    if (dom.quizProgressBar) dom.quizProgressBar.style.width = `${((index + 1) / total) * 100}%`;

    if (dom.quizQuestionTitle) dom.quizQuestionTitle.textContent = `${index + 1}. ${q.title}`;
    if (dom.btnPrevQuestion) dom.btnPrevQuestion.style.visibility = index > 0 ? 'visible' : 'hidden';

    if (!dom.quizOptionsList) return;
    dom.quizOptionsList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((opt, optIdx) => {
        const item = document.createElement('div');
        item.className = 'option-item';
        if (state.answers[index] === optIdx) {
            item.classList.add('selected');
        }

        item.innerHTML = `
            <div class="option-badge">${letters[optIdx]}</div>
            <div style="font-size: 0.95rem; font-weight: 600; color: #f3f4f6; line-height: 1.45;">${opt.text}</div>
        `;

        item.addEventListener('click', () => {
            selectOption(optIdx);
        });

        dom.quizOptionsList.appendChild(item);
    });
}

function selectOption(optIndex) {
    state.answers[state.currentQuestionIndex] = optIndex;
    
    setTimeout(() => {
        if (state.currentQuestionIndex < QUESTIONS.length - 1) {
            state.currentQuestionIndex++;
            renderQuestion(state.currentQuestionIndex);
        } else {
            startAnalyzing();
        }
    }, 180);
}

function startAnalyzing() {
    switchView('analyzing');

    const tips = [
        '⚠️ 警告：检测到极高浓度欲望与精神暗面...',
        '💀 阎王正在翻看你的罪孽卷宗，功德清零中...',
        '⚖️ 正在召唤你专属的魔神审判官真身法相！'
    ];
    const tipEl = document.getElementById('analyzing-tip');
    
    let tipIdx = 0;
    const interval = setInterval(() => {
        tipIdx++;
        if (tips[tipIdx] && tipEl) {
            tipEl.textContent = tips[tipIdx];
        }
    }, 650);

    setTimeout(() => {
        clearInterval(interval);
        try {
            state.calculationResult = calculateSinResults(state.answers);
            switchView('result');
            renderResultView();
        } catch (err) {
            console.error('计算渲染异常', err);
            switchView('result');
        }
    }, 1900);
}

function renderResultView() {
    try {
        const res = state.calculationResult;
        if (!res) return;

        const dominantId = (res.dominant && res.dominant.id) ? res.dominant.id : 'pride';
        const judge = res.judgeAvatar || JUDGE_AVATARS[dominantId] || { judgeName: '深渊主宰' };
        const report = REPORTS_DATA[dominantId] || {};
        const hell = res.hellVisitor;
        const ranking = res.ranking;

        // 1. 渲染魔神法相头像与觉醒神位
        if (dom.resJudgeNameTag) {
            dom.resJudgeNameTag.textContent = judge.judgeName || '深渊主宰';
        }
        const printUserName = document.getElementById('print-user-name');
        if (printUserName) printUserName.textContent = state.username || '神秘受审者';
        const printJudgeName = document.getElementById('print-judge-name');
        if (printJudgeName) printJudgeName.textContent = judge.judgeName || '深渊主宰';

        const svgBox = document.getElementById('res-judge-svg-container');
        if (svgBox && judge.avatarSvg) {
            svgBox.innerHTML = judge.avatarSvg;
        }

        // 2. 绑定专属魔神王座插画与金句
        const demonImg = document.getElementById('res-demon-lord-img');
        if (demonImg) {
            demonImg.src = `assets/images/characters/${dominantId}.jpg`;
            demonImg.alt = judge.judgeName;
        }
        const mottoEl = document.getElementById('res-demon-lord-motto');
        if (mottoEl && report.coreMotto) {
            mottoEl.textContent = report.coreMotto;
        }

        // 3. 核心爆款称号贴纸 (印章重重砸下)
        if (dom.resHellTitle && hell) dom.resHellTitle.textContent = hell.title;
        if (dom.resHellTagline && hell) dom.resHellTagline.textContent = `“${hell.tagline}”`;
        
        // 3.5 渲染【光暗双生：七美德伪装镜像】动态画像
        const vInfo = res.virtueMask || { score: res.virtueScore || 68, subLabel: '人前伪装 vs 深渊本色', detail: '你在世俗社交中极擅长用理智和温和掩盖内心的暗黑火焰。' };
        if (dom.resVirtueScore) dom.resVirtueScore.textContent = `${vInfo.score}%`;
        const vSubLabel = document.getElementById('res-virtue-sublabel');
        if (vSubLabel && vInfo.subLabel) vSubLabel.textContent = vInfo.subLabel;
        const vDetail = document.getElementById('res-virtue-detail');
        if (vDetail && vInfo.detail) vDetail.textContent = vInfo.detail;

        // 4. 渲染维度排行榜血条 (PR / GR / EN / WR / SL / GL / LU)
        if (dom.resRankList && ranking) {
            dom.resRankList.innerHTML = '';
            ranking.forEach((item, idx) => {
                const meta = item.meta || { code: item.id.toUpperCase().slice(0, 2), name: item.id };
                const row = document.createElement('div');
                row.className = 'rank-item';
                
                row.innerHTML = `
                    <div class="rank-badge">${meta.code}</div>
                    <div class="rank-name">${meta.name}</div>
                    <div class="rank-bar-bg">
                        <div class="rank-bar-fill" style="width: 0%; ${idx > 2 ? 'background: linear-gradient(90deg, #450a0a, #b91c1c);' : ''}"></div>
                    </div>
                    <div class="rank-score" id="score-counter-${idx}" style="${idx === 0 ? 'color: #fbbf24;' : ''}">0</div>
                `;
                dom.resRankList.appendChild(row);

                setTimeout(() => {
                    const barFill = row.querySelector('.rank-bar-fill');
                    if (barFill) barFill.style.width = `${item.score}%`;
                    
                    const counterEl = document.getElementById(`score-counter-${idx}`);
                    animateScoreNumber(counterEl, item.score);
                }, 100 + idx * 70);
            });
        }

        // 5. 调度并挂载三大画框模块 (默认保持经典 avatar 状态)
        switchShowcaseTheme(state.currentShowcaseTheme || 'avatar');

        // 6. 渲染深度千字完整版报告
        renderDetailedReport(dominantId, res.secondary ? res.secondary.id : 'greed', res.serialCode);

        // 7. 检查卡密解锁状态
        checkReportLockStatus();

        // 8. 自动缓存测试卷宗记录至本地，防止误刷新或切出导致数据丢失
        try {
            localStorage.setItem('sin_saved_result_v1', JSON.stringify({
                answers: state.answers,
                userName: state.userName,
                dominantId: dominantId,
                timestamp: Date.now()
            }));
        } catch (storageErr) {
            console.warn('缓存测试记录失败', storageErr);
        }
    } catch (e) {
        console.error('renderResultView 异常', e);
    }
}

/**
 * 调度三大核心画框在插槽中的位置并平滑刷新
 */
function switchShowcaseTheme(themeName) {
    if (!state.calculationResult) return;
    state.currentShowcaseTheme = themeName;

    // 1. 更新顶部 Tab 高亮
    if (dom.showcaseTabsBar) {
        const tabs = dom.showcaseTabsBar.querySelectorAll('.capsule-tab');
        tabs.forEach(t => {
            t.classList.toggle('active', t.dataset.theme === themeName);
        });
    }

    // 2. 调度三大画框挂载到对应插槽
    if (!dom.showcaseHeroSlot || !dom.showcaseSubLeft || !dom.showcaseSubRight) return;
    if (!dom.modAvatar || !dom.modRadar || !dom.modRanking) return;

    if (themeName === 'radar') {
        dom.showcaseHeroSlot.appendChild(dom.modRadar);
        dom.showcaseSubLeft.appendChild(dom.modAvatar);
        dom.showcaseSubRight.appendChild(dom.modRanking);
    } else if (themeName === 'ranking') {
        dom.showcaseHeroSlot.appendChild(dom.modRanking);
        dom.showcaseSubLeft.appendChild(dom.modAvatar);
        dom.showcaseSubRight.appendChild(dom.modRadar);
    } else {
        // 默认/经典 avatar 款
        dom.showcaseHeroSlot.appendChild(dom.modAvatar);
        dom.showcaseSubLeft.appendChild(dom.modRadar);
        dom.showcaseSubRight.appendChild(dom.modRanking);
    }

    // 3. 动态重绘雷达图 (自适应当前处于 Hero 大框还是 Sub 小框)
    const dominantId = (state.calculationResult.dominant && state.calculationResult.dominant.id) ? state.calculationResult.dominant.id : 'pride';
    setTimeout(() => {
        drawClassicNativeRadar('classicRadarCanvas', state.calculationResult.percentages, dominantId);
    }, 40);
}

/**
 * 纯原生 Canvas 2D 绘制高精度七宗罪 7 维发光雷达图 (自适应大框/小框尺寸与高清屏)
 */
function drawClassicNativeRadar(canvasId, percentages, dominantId = 'pride') {
    const canvas = typeof canvasId === 'string' ? document.getElementById(canvasId) : canvasId;
    if (!canvas) return;

    // 检测当前雷达图所在卡片是在 Hero 大框还是 Sub 小框
    const isSubSlot = canvas.closest('.showcase-sub-slot') !== null;
    const parentBox = canvas.parentElement;
    let parentW = parentBox ? parentBox.clientWidth : (isSubSlot ? 200 : 340);
    if (parentW < 120) parentW = isSubSlot ? 180 : 320;

    const boxW = parentW;
    const boxH = isSubSlot ? 190 : 260;
    const dpr = window.devicePixelRatio || 2;
    canvas.width = boxW * dpr;
    canvas.height = boxH * dpr;
    canvas.style.width = `${boxW}px`;
    canvas.style.height = `${boxH}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const cx = boxW / 2;
    const cy = isSubSlot ? 98 : 136;

    // 核心安全半径：两侧预留 46px~58px 文字排版区，确保最左/最右文字 100% 完整显示
    const sideMargin = isSubSlot ? 46 : 58;
    const maxRByW = Math.max((boxW / 2) - sideMargin, 26);
    const maxRByH = Math.max(cy - (isSubSlot ? 24 : 32), 26);
    const r = Math.min(maxRByW, maxRByH, isSubSlot ? 48 : 82);

    const sinsOrder = [
        { id: 'pride', name: '傲慢', color: '#d4af37' },
        { id: 'greed', name: '贪婪', color: '#f59e0b' },
        { id: 'lust', name: '色欲', color: '#ec4899' },
        { id: 'envy', name: '嫉妒', color: '#10b981' },
        { id: 'gluttony', name: '暴食', color: '#eab308' },
        { id: 'wrath', name: '暴怒', color: '#ef4444' },
        { id: 'sloth', name: '懒惰', color: '#8b5cf6' }
    ];

    const angleStep = (Math.PI * 2) / 7;

    ctx.clearRect(0, 0, boxW, boxH);

    // 1. 同心正七边形网格
    const levels = 4;
    for (let l = 1; l <= levels; l++) {
        const levelRadius = (r / levels) * l;
        ctx.beginPath();
        ctx.strokeStyle = l === levels ? 'rgba(212, 175, 55, 0.45)' : 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = l === levels ? (isSubSlot ? 1.2 : 1.5) : 1;
        if (l < levels) {
            ctx.setLineDash([3, 3]);
        } else {
            ctx.setLineDash([]);
        }

        for (let i = 0; i < 7; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const x = cx + Math.cos(angle) * levelRadius;
            const y = cy + Math.sin(angle) * levelRadius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    }
    ctx.setLineDash([]);

    // 2. 放射轴线
    for (let i = 0; i < 7; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)';
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    // 3. 用户得分数据多边形
    const userPoints = [];
    for (let i = 0; i < 7; i++) {
        const sin = sinsOrder[i];
        const pct = percentages[sin.id] || 35;
        const pointRadius = Math.max(r * (pct / 100), r * 0.18);
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + Math.cos(angle) * pointRadius;
        const y = cy + Math.sin(angle) * pointRadius;
        userPoints.push({ x, y, name: sin.name, pct, angle, isDominant: sin.id === dominantId });
    }

    // 绘制多边形渐变填充与外发光
    ctx.save();
    ctx.beginPath();
    userPoints.forEach((p, idx) => {
        if (idx === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();

    const polyGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, r);
    polyGrad.addColorStop(0, 'rgba(220, 38, 38, 0.65)');
    polyGrad.addColorStop(0.7, 'rgba(185, 28, 28, 0.45)');
    polyGrad.addColorStop(1, 'rgba(212, 175, 55, 0.3)');
    ctx.fillStyle = polyGrad;
    ctx.fill();

    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = isSubSlot ? 1.8 : 2.5;
    ctx.shadowColor = 'rgba(239, 68, 68, 0.9)';
    ctx.shadowBlur = isSubSlot ? 8 : 12;
    ctx.stroke();
    ctx.restore();

    // 4. 绘制高光节点与百分比文字
    const labelDist = isSubSlot ? (r + 11) : (r + 16);
    userPoints.forEach((p) => {
        // 节点
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.isDominant ? (isSubSlot ? 4 : 5.5) : (isSubSlot ? 3 : 4), 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.strokeStyle = p.isDominant ? '#fbbf24' : '#ef4444';
        ctx.lineWidth = isSubSlot ? 1.5 : 2;
        ctx.stroke();

        // 标签坐标
        const cosVal = Math.cos(p.angle);
        const sinVal = Math.sin(p.angle);
        let lx = cx + cosVal * labelDist;
        let ly = cy + sinVal * labelDist;

        if (cosVal < -0.15) {
            ctx.textAlign = 'right';
        } else if (cosVal > 0.15) {
            ctx.textAlign = 'left';
        } else {
            ctx.textAlign = 'center';
        }

        ctx.textBaseline = 'middle';
        const fontSize = isSubSlot ? Math.max(Math.min(boxW * 0.05, 10.5), 8.5) : 12;
        ctx.font = `700 ${fontSize}px "Noto Serif SC", sans-serif`;

        // 黑色文字阴影
        ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
        for (let ox = -1.2; ox <= 1.2; ox += 1.2) {
            for (let oy = -1.2; oy <= 1.2; oy += 1.2) {
                ctx.fillText(`${p.name} ${p.pct}%`, lx + ox, ly + oy);
            }
        }

        ctx.fillStyle = p.isDominant || p.pct >= 80 ? '#fbbf24' : '#f3f4f6';
        ctx.fillText(`${p.name} ${p.pct}%`, lx, ly);
    });
}

function exportReportPdf() {
    if (!isReportUnlocked()) {
        openLicenseModal();
        return;
    }
    window.print();
}

function animateScoreNumber(el, target) {
    if (!el) return;
    let current = 0;
    const step = Math.max(Math.floor(target / 15), 1);
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = current;
    }, 25);
}

function renderDetailedReport(dominantId, secondaryId, serialCode = 'SIN-PR-8823') {
    try {
        const report = REPORTS_DATA[dominantId];
        if (!report || !dom.reportContentBox) return;

        const combo = getCombinedAnalysis(dominantId, secondaryId);

        let html = `
            <!-- 卷宗顶部档案信笺横幅 -->
            <div class="report-header-banner">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <span style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--gold); letter-spacing: 1px;">档案卷宗: ${serialCode}</span>
                    <span style="font-size: 0.74rem; background: rgba(220,38,38,0.2); color: #fca5a5; padding: 2px 6px; border-radius: 4px;">极度机密</span>
                </div>
                <div style="font-size: 1.15rem; font-weight: 800; color: #ffffff; margin-bottom: 4px; font-family: var(--font-serif);">
                    【${report.archetype}】
                </div>
                <div style="color: var(--gold-bright); font-size: 0.85rem; font-style: italic; margin-bottom: 10px;">
                    ${report.coreMotto}
                </div>
                <div style="display: flex; flex-wrap: wrap;">
                    ${report.overview.keywords.map(kw => `<span class="report-tag-pill">#${kw}</span>`).join('')}
                </div>
            </div>

            <!-- 主罪 × 伴生罪 复合交叉人格剖析 -->
            <div class="report-combo-box">
                <div style="color: #f87171; font-weight: 800; font-size: 0.95rem; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
                    <span>⚡ 复合罪印共振：</span>
                    <span style="color: #ffffff;">${combo.title}</span>
                </div>
                <p style="color: #e5e7eb; font-size: 0.86rem; line-height: 1.65; margin: 0;">
                    ${combo.desc}
                </p>
            </div>

            <!-- 模块 1：深层潜意识溯源 -->
            <div class="report-section">
                <h4>📖 1. 深层潜意识与发疯诱因</h4>
                ${report.coreAnalysis}
            </div>

            <!-- 模块 2：现实场景投射镜像 -->
            <div class="report-section">
                <h4>🎭 2. 现实场景投射镜像</h4>
                ${report.behaviorTraits.map(item => `
                    <div style="margin-bottom: 10px; background: rgba(255,255,255,0.03); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
                        <strong style="color: var(--gold-bright); display: block; margin-bottom: 3px; font-size: 0.9rem;">📍 ${item.scene}</strong>
                        <span style="color: #d1d5db; font-size: 0.86rem; line-height: 1.6;">${item.desc}</span>
                    </div>
                `).join('')}
            </div>

            <!-- 模块 3：暗面爆发诱发点 -->
            <div class="report-section">
                <h4>⚡ 3. 暗面爆发诱发点 (Trigger Points)</h4>
                ${report.triggerPoints}
            </div>

            <!-- 模块 4：隐藏天赋与超能力转化 -->
            <div class="report-section">
                <h4>🌟 4. 隐藏天赋与超能力转化</h4>
                ${report.lightGift}
            </div>

            <!-- 模块 5：灵魂契合与相克 -->
            <div class="report-section">
                <h4>🔗 5. 灵魂契合与相克 (Soul Chemistry)</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                    <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); padding: 12px; border-radius: 10px;">
                        <div style="color: #10b981; font-weight: 800; font-size: 0.88rem;">💚 天生契合</div>
                        <div style="font-weight: 700; font-size: 0.92rem; margin: 4px 0 2px; color: #ffffff;">${report.soulChemistry.bestMatch.name}</div>
                        <div style="color: #a7f3d0; font-size: 0.78rem; line-height: 1.4;">${report.soulChemistry.bestMatch.reason}</div>
                    </div>
                    <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.25); padding: 12px; border-radius: 10px;">
                        <div style="color: #ef4444; font-weight: 800; font-size: 0.88rem;">💥 极易核爆</div>
                        <div style="font-weight: 700; font-size: 0.92rem; margin: 4px 0 2px; color: #ffffff;">${report.soulChemistry.conflictMatch.name}</div>
                        <div style="color: #fca5a5; font-size: 0.78rem; line-height: 1.4;">${report.soulChemistry.conflictMatch.reason}</div>
                    </div>
                </div>
            </div>

            <!-- 模块 6：心理学救赎指南 -->
            <div class="report-section">
                <h4>🕊️ 6. 心理学深渊救赎指南</h4>
                ${report.healingAdvice}
            </div>
        `;

        dom.reportContentBox.innerHTML = html;
    } catch (e) {
        console.error('报告渲染异常', e);
    }
}

function checkReportLockStatus() {
    const isUnlocked = isReportUnlocked();
    const config = getLicenseConfig();

    if (isUnlocked) {
        if (dom.reportContentBox) dom.reportContentBox.classList.remove('locked-blur-content');
        if (dom.lockPayContainer) dom.lockPayContainer.style.display = 'none';
    } else {
        if (dom.reportContentBox) dom.reportContentBox.classList.add('locked-blur-content');
        if (dom.lockPayContainer) dom.lockPayContainer.style.display = 'flex';
    }
}

async function handleVerifyLicense() {
    const key = dom.inputLicenseKey.value.trim();
    if (!key) {
        dom.licenseErrorTip.textContent = '请输入有效的卡密兑换码';
        return;
    }

    const origBtnText = dom.btnVerifyLicense.textContent;
    dom.btnVerifyLicense.textContent = '⏳ 正在核销验证...';
    dom.btnVerifyLicense.disabled = true;
    dom.licenseErrorTip.textContent = '';

    try {
        const res = await verifyLicenseKey(key);
        if (res.success) {
            showToast('✨ 密钥验证成功！已解锁测试权限');
            dom.modalLicense.classList.remove('active');
            checkReportLockStatus();
            if (state.currentStep === 'welcome') {
                const nameVal = dom.inputUserName.value.trim();
                state.userName = nameVal || '探索者';
                switchView('quiz');
                renderQuestion(0);
            }
        } else {
            dom.licenseErrorTip.textContent = res.message;
        }
    } catch (e) {
        dom.licenseErrorTip.textContent = '核销连接异常，请重试或联系客服';
    } finally {
        dom.btnVerifyLicense.textContent = origBtnText;
        dom.btnVerifyLicense.disabled = false;
    }
}

async function handleGeneratePoster() {
    if (!state.calculationResult) return;
    
    // 打开海报时，默认选用当前结果页正激活的 C 位版型
    state.currentPosterTheme = state.currentShowcaseTheme || 'avatar';
    
    // 同步更新海报弹窗 Tab 的 active 状态
    if (dom.posterTabsBar) {
        const tabs = dom.posterTabsBar.querySelectorAll('.poster-tab-btn');
        tabs.forEach(t => {
            t.classList.toggle('active', t.dataset.theme === state.currentPosterTheme);
        });
    }

    dom.btnOpenPosterModal.textContent = '⏳ 正在绘制超清海报...';
    dom.btnOpenPosterModal.disabled = true;

    try {
        await renderPosterWithTheme(state.currentPosterTheme);
        dom.modalPoster.classList.add('active');
    } catch (err) {
        console.error('海报生成失败', err);
        alert('海报生成异常，请稍后重试');
    } finally {
        dom.btnOpenPosterModal.textContent = '📸 生成你的专属海报';
        dom.btnOpenPosterModal.disabled = false;
    }
}

async function renderPosterWithTheme(themeName) {
    if (!state.calculationResult) return;
    state.currentPosterTheme = themeName;

    if (dom.posterLoadingMask) dom.posterLoadingMask.style.display = 'flex';

    try {
        const posterDataUrl = await generateSinPoster(state.calculationResult, state.userName, themeName);
        dom.imgPosterPreview.src = posterDataUrl;
    } catch (e) {
        console.error('重绘海报异常', e);
    } finally {
        if (dom.posterLoadingMask) dom.posterLoadingMask.style.display = 'none';
    }
}

async function updatePosterTheme(themeName) {
    if (state.currentPosterTheme === themeName) return;

    if (dom.posterTabsBar) {
        const tabs = dom.posterTabsBar.querySelectorAll('.poster-tab-btn');
        tabs.forEach(t => {
            t.classList.toggle('active', t.dataset.theme === themeName);
        });
    }

    await renderPosterWithTheme(themeName);
}

async function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const promoKey = params.get('key') || params.get('card') || params.get('code') || params.get('pwd') || params.get('license');
    
    if (promoKey) {
        try {
            const res = await verifyLicenseKey(promoKey);
            if (res && res.success) {
                // 静默写入买家本地 VIP 缓存并解锁深度卷宗
                checkReportLockStatus();
                setTimeout(() => {
                    showToast('✨ 尊享特权口令已激活，已为您解锁完整深度卷宗！');
                }, 600);
            }
        } catch (e) {
            console.warn('URL口令验证异常', e);
        }

        // 【方案一核心机制】：在第 1 毫秒瞬间抹除浏览器地址栏中的 ?key=... 参数
        // 买家在微信/浏览器点击“复制链接”或“转发给朋友”时只会分享无密钥的裸链接，好友打开依然是未付费页面！
        try {
            if (window.history && window.history.replaceState) {
                const cleanUrl = window.location.pathname + window.location.hash;
                window.history.replaceState(null, document.title, cleanUrl);
            }
        } catch (historyErr) {
            console.warn('地址栏抹除异常', historyErr);
        }
    }

    const previewSin = params.get('preview') || params.get('sin') || params.get('demo');
    if (previewSin && typeof previewSpecificSin === 'function') {
        setReportUnlocked(); // 演示/录屏模式下自动解锁完整权限
        let sinTarget = previewSin.toLowerCase();
        if (sinTarget === 'tiger' || sinTarget === '笑面虎') {
            sinTarget = 'tiger';
        }
        previewSpecificSin(sinTarget);
    }
}

// ==========================================================================
// 一子一木 4K 壁纸抽奖与小程序跳转模块
// ==========================================================================

const MINI_PROGRAM_CODE = "#小程序://一子一木/0JPDrt84ecI5Gwd";

function showToast(text) {
    const toast = document.getElementById('toastMsg');
    const toastText = document.getElementById('toastText');
    if (toast && toastText) {
        toastText.textContent = text;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2600);
    }
}

function openMiniProgramAd() {
    copyMiniProgramCode(false);
    const modal = document.getElementById('modal-wallpaper');
    if (modal) {
        modal.classList.add('active');
    }
    showToast('已复制小程序口令，正在打开【一子一木】...');
}

function closeWallpaperModal() {
    const modal = document.getElementById('modal-wallpaper');
    if (modal) {
        modal.classList.remove('active');
    }
}

function copyMiniProgramCode(withAlert = true) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(MINI_PROGRAM_CODE).then(() => {
            if (withAlert) showToast('已成功复制小程序口令！');
        }).catch(() => {
            fallbackCopyText(MINI_PROGRAM_CODE, withAlert);
        });
    } else {
        fallbackCopyText(MINI_PROGRAM_CODE, withAlert);
    }
}

function fallbackCopyText(text, withAlert) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
        document.execCommand('copy');
        if (withAlert) showToast('已成功复制小程序口令！');
    } catch (e) {
        if (withAlert) alert('复制口令失败，请手动长按复制：' + text);
    }
    document.body.removeChild(input);
}

// ==========================================================================
// 历史测试卷宗自动恢复与智能导出模块
// ==========================================================================

function checkSavedHistoryResult() {
    try {
        const saved = localStorage.getItem('sin_saved_result_v1');
        const restoreBox = document.getElementById('box-restore-result');
        const btnRestore = document.getElementById('btn-restore-result');
        if (saved && restoreBox && btnRestore) {
            const data = JSON.parse(saved);
            if (data && data.answers && data.answers.length === QUESTIONS.length) {
                restoreBox.style.display = 'flex';
                btnRestore.onclick = () => {
                    state.answers = data.answers;
                    state.userName = data.userName || '探索者';
                    state.calculationResult = calculateSinResults(state.answers);
                    switchView('result');
                    renderResultView();
                };
            }
        }
    } catch (e) {
        console.warn('解析历史卷宗异常', e);
    }
}

function exportReportPdf() {
    const isMobileOrWeChat = /MicroMessenger|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobileOrWeChat) {
        // 手机/微信端最佳体验：直接生成 3:4 超清海报长图，长按直接保存到相册，绝不跳转、绝不丢数据！
        handleGeneratePoster();
    } else {
        // 电脑端：直接调起系统打印/保存为 PDF
        try {
            window.print();
        } catch (e) {
            console.warn('调用系统打印异常', e);
            alert('提示：请使用浏览器菜单中的「打印/保存为PDF」导出卷宗');
        }
    }
}

