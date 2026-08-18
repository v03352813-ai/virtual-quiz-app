/**
 * 七宗罪灵魂暗面测试 - 小红书 3:4 爆款海报生成引擎 (100% 对标小红书数万赞实图版式)
 * 特色：
 * 1. 顶部 【— 七宗罪分布图 —】
 * 2. 中上部：暗黑血红蛛网雷达图
 * 3. 核心爆点：中间巨大横贯倾斜贴纸大白字【地狱来了一位XXXX】
 * 4. 下部：【— 七宗罪维度排行 —】+ PR/GR/EN 徽章 + 渐变发光血条 + 0~100 能量值
 */

function generateSinPoster(result, userName = '探索者') {
    return new Promise((resolve, reject) => {
        try {
            const width = 1080;
            const height = 1440;
            
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');

            const dominant = result.dominant;
            const ranking = result.ranking;
            const hellVisitor = result.hellVisitor;

            // 1. 绘制极深邃黑金地狱背景
            const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
            bgGrad.addColorStop(0, '#0a080d');
            bgGrad.addColorStop(0.3, '#120d14');
            bgGrad.addColorStop(0.7, '#0d0a10');
            bgGrad.addColorStop(1, '#070509');
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, width, height);

            // 2. 绘制外层暗金双边框与暗角
            ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
            ctx.lineWidth = 2;
            ctx.strokeRect(30, 30, width - 60, height - 60);

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
            ctx.lineWidth = 1;
            ctx.strokeRect(40, 40, width - 80, height - 80);

            // 3. 顶部区域：大标题【— 七宗罪分布图 —】
            ctx.textAlign = 'center';
            ctx.fillStyle = 'rgba(212, 175, 55, 0.85)';
            ctx.font = '700 20px -apple-system, sans-serif';
            ctx.letterSpacing = '8px';
            ctx.fillText('—  七 宗 罪 分 布 图  —', width / 2, 90);

            // 4. 绘制蛛网血红雷达图 (对标实图 1 & 4)
            const radarCenterX = width / 2;
            const radarCenterY = 320;
            const radarRadius = 160;
            drawViralRadarChart(ctx, radarCenterX, radarCenterY, radarRadius, result.percentages);

            // 5. 核心爆点：中间巨大倾斜抽象爆款贴纸大字【地狱来了一位XXX】
            const stickerY = 560;
            ctx.save();
            ctx.translate(width / 2, stickerY);
            ctx.rotate(-3 * Math.PI / 180); // 轻微倾斜 -3 度，营造极具冲击力的小红书爆款贴纸感

            // 绘制贴纸文字黑底投影与光晕
            ctx.textAlign = 'center';
            ctx.font = '900 62px "Noto Serif SC", "PingFang SC", sans-serif';
            
            // 黑色厚重投影
            ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
            for (let ox = -4; ox <= 4; ox++) {
                for (let oy = -4; oy <= 4; oy++) {
                    ctx.fillText(hellVisitor.title, ox, oy);
                }
            }

            // 纯白高光主文字
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = 'rgba(239, 68, 68, 0.8)';
            ctx.shadowBlur = 18;
            ctx.fillText(hellVisitor.title, 0, 0);

            // 贴纸下方副标题金句
            ctx.font = '600 20px sans-serif';
            ctx.fillStyle = '#f59e0b';
            ctx.shadowBlur = 0;
            ctx.fillText(`“${hellVisitor.tagline}”`, 0, 48);

            ctx.restore();

            // 6. 中下部区域：大标题【— 七宗罪维度排行 —】
            ctx.textAlign = 'center';
            ctx.fillStyle = 'rgba(212, 175, 55, 0.85)';
            ctx.font = '700 20px -apple-system, sans-serif';
            ctx.letterSpacing = '8px';
            ctx.fillText('—  七 宗 罪 维 度 排 行  —', width / 2, 690);

            // 7. 渲染维度排行榜血条（对标实图 1、4）
            const startY = 740;
            const rowHeight = 76;
            const barMaxWidth = 440;

            // 显示排名前 6-7 个维度
            ranking.forEach((item, idx) => {
                if (idx >= 6) return;
                const currentY = startY + idx * rowHeight;
                const meta = item.meta;

                // 左侧圆形暗金代码胶囊徽章 (如 PR, GR, EN, WR)
                ctx.beginPath();
                ctx.arc(120, currentY + 12, 22, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
                ctx.fill();
                ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
                ctx.lineWidth = 1.5;
                ctx.stroke();

                ctx.textAlign = 'center';
                ctx.font = '700 16px monospace';
                ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
                ctx.fillText(meta.code, 120, currentY + 18);

                // 维度中文名称 (如 傲慢、贪婪)
                ctx.textAlign = 'left';
                ctx.font = '700 24px "Noto Serif SC", sans-serif';
                ctx.fillStyle = '#f3f4f6';
                ctx.fillText(meta.name, 160, currentY + 20);

                // 能量血条背景底槽
                const barX = 260;
                const barY = currentY + 4;
                const barH = 20;
                drawRoundedRect(ctx, barX, barY, barMaxWidth, barH, 10);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
                ctx.fill();

                // 能量血条发光渐变填充
                const fillWidth = Math.max((item.score / 100) * barMaxWidth, 12);
                drawRoundedRect(ctx, barX, barY, fillWidth, barH, 10);
                
                const barGrad = ctx.createLinearGradient(barX, 0, barX + fillWidth, 0);
                if (idx === 0) {
                    barGrad.addColorStop(0, '#7f1d1d');
                    barGrad.addColorStop(0.6, '#dc2626');
                    barGrad.addColorStop(1, '#fbbf24'); // 榜首带金光
                } else if (idx === 1 || idx === 2) {
                    barGrad.addColorStop(0, '#881337');
                    barGrad.addColorStop(1, '#ea580c');
                } else {
                    barGrad.addColorStop(0, '#450a0a');
                    barGrad.addColorStop(1, '#b91c1c');
                }
                ctx.fillStyle = barGrad;
                ctx.fill();

                // 右侧数值 (如 100 / 80)
                ctx.textAlign = 'right';
                ctx.font = '900 28px "Arial Black", monospace';
                ctx.fillStyle = idx === 0 ? '#fbbf24' : '#ffffff';
                ctx.fillText(`${item.score}`, width - 110, currentY + 22);
            });

            // 8. 底部光暗双生圣洁 vs 堕落注解与防伪
            const footerY = 1260;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
            drawRoundedRect(ctx, 80, footerY, width - 160, 110, 14);
            ctx.fill();
            ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)';
            ctx.stroke();

            ctx.textAlign = 'left';
            ctx.font = '600 18px "Noto Serif SC", sans-serif';
            ctx.fillStyle = 'rgba(212, 175, 55, 0.9)';
            ctx.fillText(`【光暗双生】七美德伪装指数：${result.virtues.pride}%  ·  地府档案编号：${result.serialCode}`, 110, footerY + 42);

            ctx.font = '400 16px sans-serif';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.fillText('你在人前展现的伪装圣洁，在深渊真实的罪印面前无所遁形。', 110, footerY + 76);

            // 导出高清 Base64
            resolve(canvas.toDataURL('image/png', 0.95));
        } catch (error) {
            reject(error);
        }
    });
}

/**
 * 绘制对标小红书实图的 7 边形蛛网雷达图
 */
function drawViralRadarChart(ctx, cx, cy, r, percentages) {
    // 按照实图顺序排列：傲慢、贪婪、色欲、嫉妒、暴怒、暴食、懒惰
    const viralOrder = [
        { id: 'pride', name: '傲慢' },
        { id: 'greed', name: '贪婪' },
        { id: 'lust', name: '色欲' },
        { id: 'envy', name: '嫉妒' },
        { id: 'wrath', name: '暴怒' },
        { id: 'gluttony', name: '暴食' },
        { id: 'sloth', name: '懒惰' }
    ];

    const total = viralOrder.length;
    const angleStep = (Math.PI * 2) / total;

    // 1. 绘制暗黑多层蛛网同心多边形
    const levels = 4;
    for (let l = 1; l <= levels; l++) {
        const levelRadius = (r / levels) * l;
        ctx.beginPath();
        ctx.strokeStyle = l === levels ? 'rgba(212, 175, 55, 0.4)' : 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1.2;

        for (let i = 0; i < total; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const x = cx + Math.cos(angle) * levelRadius;
            const y = cy + Math.sin(angle) * levelRadius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    }

    // 2. 辐射轴线
    for (let i = 0; i < total; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    // 3. 绘制血红渐变填充区域 (实图 1、4 同款血红多边形)
    const userPoints = [];
    for (let i = 0; i < total; i++) {
        const key = viralOrder[i].id;
        const pct = (percentages[key] || 30) / 100;
        const pointRadius = Math.max(r * pct, 15);
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + Math.cos(angle) * pointRadius;
        const y = cy + Math.sin(angle) * pointRadius;
        userPoints.push({ x, y, name: viralOrder[i].name });
    }

    ctx.beginPath();
    userPoints.forEach((p, idx) => {
        if (idx === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();

    // 实图同款暗红半透填充
    ctx.fillStyle = 'rgba(185, 28, 28, 0.55)';
    ctx.fill();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // 4. 数据顶点白圆点与文字
    userPoints.forEach((p, idx) => {
        // 节点白圈
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // 顶点外部文字
        const angle = idx * angleStep - Math.PI / 2;
        const labelDistance = r + 26;
        const lx = cx + Math.cos(angle) * labelDistance;
        const ly = cy + Math.sin(angle) * labelDistance;

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '600 20px "Noto Serif SC", sans-serif';
        ctx.fillStyle = '#e5e7eb';
        ctx.fillText(p.name, lx, ly);
    });
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}
