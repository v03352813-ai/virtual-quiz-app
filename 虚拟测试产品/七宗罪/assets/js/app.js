/**
 * 七宗罪灵魂暗面测试 - 主应用交互与状态机控制器 (沉浸式动线与开盲盒分步揭晓)
 */

const state = {
    currentStep: 'welcome',
    currentQuestionIndex: 0,
    answers: [],
    userName: '探索者',
    calculationResult: null,
    radarChartInstance: null
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
    
    // 实图爆款元素
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
    imgPosterPreview: document.getElementById('img-poster-preview'),
    btnClosePosterModal: document.getElementById('btn-close-poster-modal')
};

document.addEventListener('DOMContentLoaded', () => {
    initEvents();
    checkUrlParams();
});

function initEvents() {
    dom.btnStart.addEventListener('click', () => {
        triggerScreenShake();
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

    dom.btnRestartQuiz.addEventListener('click', () => {
        if (confirm('确定要重新过堂审判吗？已答卷宗将被重置。')) {
            state.currentQuestionIndex = 0;
            state.answers = [];
            switchView('welcome');
        }
    });

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
}

function triggerScreenShake() {
    dom.mainContainer.classList.remove('shake-effect');
    void dom.mainContainer.offsetWidth; // 触发 reflow
    dom.mainContainer.classList.add('shake-effect');
    setTimeout(() => {
        dom.mainContainer.classList.remove('shake-effect');
    }, 280);
}

function switchView(viewName) {
    state.currentStep = viewName;
    const views = [dom.viewWelcome, dom.viewQuiz, dom.viewAnalyzing, dom.viewResult];
    views.forEach(v => v.classList.remove('active'));

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (viewName === 'welcome') dom.viewWelcome.classList.add('active');
    if (viewName === 'quiz') dom.viewQuiz.classList.add('active');
    if (viewName === 'analyzing') dom.viewAnalyzing.classList.add('active');
    if (viewName === 'result') dom.viewResult.classList.add('active');
}

function renderQuestion(index) {
    state.currentQuestionIndex = index;
    const q = QUESTIONS[index];
    const total = QUESTIONS.length;

    dom.quizScenarioBadge.textContent = q.scenario || '💥 发疯情境时刻';
    dom.quizProgressText.textContent = `${index + 1} / ${total}`;
    dom.quizProgressBar.style.width = `${((index + 1) / total) * 100}%`;

    dom.quizQuestionTitle.textContent = `${index + 1}. ${q.title}`;
    dom.btnPrevQuestion.style.visibility = index > 0 ? 'visible' : 'hidden';

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
            triggerScreenShake();
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
    }, 200);
}

function startAnalyzing() {
    switchView('analyzing');

    const tips = [
        '⚠️ 警告：检测到极高浓度贪婪与精神内耗...',
        '💀 阎王正在翻看你的罪孽卷宗，功德清零中...',
        '⚖️ 罪印烙印完成，准备宣判！'
    ];
    const tipEl = document.getElementById('analyzing-tip');
    
    let tipIdx = 0;
    const interval = setInterval(() => {
        tipIdx++;
        if (tips[tipIdx] && tipEl) {
            tipEl.textContent = tips[tipIdx];
        }
    }, 750);

    setTimeout(() => {
        clearInterval(interval);
        state.calculationResult = calculateSinResults(state.answers);
        renderResultView();
        switchView('result');
    }, 2300);
}

function renderResultView() {
    const res = state.calculationResult;
    const hell = res.hellVisitor;
    const ranking = res.ranking;

    // 1. 核心爆款称号贴纸 (印章重重砸下)
    dom.resHellTitle.textContent = hell.title;
    dom.resHellTagline.textContent = `“${hell.tagline}”`;
    dom.resVirtueScore.textContent = `${res.virtues.pride}%`;

    // 2. 渲染维度排行榜血条 (从0暴涨飙升到100)
    dom.resRankList.innerHTML = '';
    ranking.forEach((item, idx) => {
        const meta = item.meta;
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

        // 动效延时从 0 暴涨飙升
        setTimeout(() => {
            const barFill = row.querySelector('.rank-bar-fill');
            if (barFill) barFill.style.width = `${item.score}%`;
            
            // 数字滚动递增动画
            const counterEl = document.getElementById(`score-counter-${idx}`);
            animateScoreNumber(counterEl, item.score);
        }, 200 + idx * 90);
    });

    // 3. 渲染暗黑血红蛛网雷达图
    renderChartJsRadar(res.percentages);

    // 4. 渲染深度千字报告
    renderDetailedReport(res.dominant.id, res.secondary.id);

    // 5. 检查解锁状态
    checkReportLockStatus();
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
    }, 30);
}

function renderChartJsRadar(percentages) {
    const canvas = document.getElementById('radarChart');
    if (!canvas) return;

    if (state.radarChartInstance) {
        state.radarChartInstance.destroy();
    }

    const labels = ['傲慢', '贪婪', '色欲', '嫉妒', '暴怒', '暴食', '懒惰'];
    const dataValues = [
        percentages.pride,
        percentages.greed,
        percentages.lust,
        percentages.envy,
        percentages.wrath,
        percentages.gluttony,
        percentages.sloth
    ];

    const ctx = canvas.getContext('2d');
    state.radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                data: dataValues,
                backgroundColor: 'rgba(185, 28, 28, 0.55)',
                borderColor: '#f59e0b',
                borderWidth: 2,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#f59e0b',
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.15)' },
                    grid: { color: 'rgba(212, 175, 55, 0.25)' },
                    pointLabels: {
                        color: '#f3f4f6',
                        font: { size: 13, family: "'Noto Serif SC', sans-serif", weight: 'bold' }
                    },
                    ticks: { display: false, min: 0, max: 100 }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function renderDetailedReport(dominantId, secondaryId) {
    const report = REPORTS_DATA[dominantId];
    if (!report) return;

    let html = `
        <div class="report-section">
            <h4>📖 1. 深层潜意识与发疯诱因</h4>
            ${report.coreAnalysis}
        </div>

        <div class="report-section">
            <h4>🎭 2. 现实场景投射镜像</h4>
            ${report.behaviorTraits.map(item => `
                <div style="margin-bottom: 10px; background: rgba(255,255,255,0.03); padding: 10px 12px; border-radius: 8px;">
                    <strong style="color: #f3f4f6; display: block; margin-bottom: 3px; font-size: 0.9rem;">📍 ${item.scene}</strong>
                    <span style="color: #9ca3af; font-size: 0.85rem;">${item.desc}</span>
                </div>
            `).join('')}
        </div>

        <div class="report-section">
            <h4>⚡ 3. 暗面爆发诱发点 (Trigger Points)</h4>
            ${report.triggerPoints}
        </div>

        <div class="report-section">
            <h4>✨ 4. 隐藏天赋与超能力转化</h4>
            ${report.lightGift}
        </div>

        <div class="report-section">
            <h4>🔗 5. 灵魂契合与相克</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px;">
                <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 8px;">
                    <div style="color: #10b981; font-weight: 700; font-size: 0.85rem;">💚 天生契合</div>
                    <div style="font-weight: 600; font-size: 0.9rem; margin-top: 2px;">${report.soulChemistry.bestMatch.name}</div>
                </div>
                <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 8px;">
                    <div style="color: #ef4444; font-weight: 700; font-size: 0.85rem;">💥 极易核爆</div>
                    <div style="font-weight: 600; font-size: 0.9rem; margin-top: 2px;">${report.soulChemistry.conflictMatch.name}</div>
                </div>
            </div>
        </div>

        <div class="report-section">
            <h4>🕊️ 6. 心理学深渊救赎指南</h4>
            ${report.healingAdvice}
        </div>
    `;

    dom.reportContentBox.innerHTML = html;
}

function checkReportLockStatus() {
    const isUnlocked = isReportUnlocked();
    const config = getLicenseConfig();

    if (isUnlocked) {
        dom.reportContentBox.classList.remove('locked-blur-content');
        dom.lockPayContainer.style.display = 'none';
    } else {
        dom.reportContentBox.classList.add('locked-blur-content');
        dom.lockPayContainer.style.display = 'flex';
        
        const priceEl = document.getElementById('lock-price-text');
        if (priceEl) priceEl.textContent = config.priceText || '限时特惠 ￥9.9';
    }
}

function handleVerifyLicense() {
    const key = dom.inputLicenseKey.value.trim();
    const res = verifyLicenseKey(key);

    if (res.success) {
        triggerScreenShake();
        alert(res.message);
        dom.modalLicense.classList.remove('active');
        checkReportLockStatus();
    } else {
        dom.licenseErrorTip.textContent = res.message;
    }
}

async function handleGeneratePoster() {
    if (!state.calculationResult) return;
    
    dom.btnOpenPosterModal.textContent = '⏳ 正在绘制超清海报...';
    dom.btnOpenPosterModal.disabled = true;

    try {
        const posterDataUrl = await generateSinPoster(state.calculationResult, state.userName);
        dom.imgPosterPreview.src = posterDataUrl;
        dom.modalPoster.classList.add('active');
    } catch (err) {
        console.error('海报生成失败', err);
        alert('海报生成异常，请稍后重试');
    } finally {
        dom.btnOpenPosterModal.textContent = '📸 生成小红书同款爆款海报 (3:4高清)';
        dom.btnOpenPosterModal.disabled = false;
    }
}

function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const promoKey = params.get('key') || params.get('card');
    if (promoKey) {
        verifyLicenseKey(promoKey);
    }
}
