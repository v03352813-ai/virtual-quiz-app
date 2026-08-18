/**
 * 七宗罪灵魂暗面测试 - 商业化卡密验证与管理引擎
 * 支持离线校验和防伪算法、本地激活状态持久化、批量卡密生成与导出
 */

const LICENSE_CONFIG_KEY = 'sin_license_config_v1';
const ACTIVATED_STATUS_KEY = 'sin_is_unlocked_vip_v1';
const USED_KEYS_STORAGE_KEY = 'sin_used_license_keys_v1';

// 默认系统配置
const DEFAULT_CONFIG = {
    // 运行模式：'license' (卡密解锁模式) | 'free' (全免费引流模式)
    mode: 'license',
    // 购买/获取卡密引导配置
    buyTip: '测试完整版包含 1000+ 字深层潜意识剖析、暗面爆发诱因、灵魂相吸相克与救赎指南',
    buyUrl: 'https://xhslink.com', // 购买链接（可填微店/发卡网/小红书店铺）
    serviceWx: 'soul_test_vip', // 客服微信/公众号
    priceText: '限时特惠 ￥9.9',
    originalPrice: '原价 ￥29.9',
    // 默认内置的通用体验卡密
    masterKeys: ['VIP888', 'SIN2026', 'DARK666', 'LUCIFER99']
};

/**
 * 获取当前商业化配置
 */
function getLicenseConfig() {
    try {
        const stored = localStorage.getItem(LICENSE_CONFIG_KEY);
        if (stored) {
            return { ...DEFAULT_CONFIG, ...JSON.parse(stored) };
        }
    } catch (e) {
        console.error('读取卡密配置失败', e);
    }
    return DEFAULT_CONFIG;
}

/**
 * 保存商业化配置（管理后台使用）
 */
function saveLicenseConfig(config) {
    localStorage.setItem(LICENSE_CONFIG_KEY, JSON.stringify(config));
}

/**
 * 检查当前用户是否已解锁完整深度报告
 */
function isReportUnlocked() {
    const config = getLicenseConfig();
    if (config.mode === 'free') {
        return true; // 免费模式直接解锁
    }
    return localStorage.getItem(ACTIVATED_STATUS_KEY) === 'true';
}

/**
 * 解锁报告并持久化
 */
function setReportUnlocked() {
    localStorage.setItem(ACTIVATED_STATUS_KEY, 'true');
}

/**
 * 校验卡密算法
 * 包含通用码校验、动态校验和、以及管理后台生成的离线卡密库
 * @param {string} inputKey 用户输入的卡密
 * @returns {Object} { success: boolean, message: string }
 */
function verifyLicenseKey(inputKey) {
    if (!inputKey || typeof inputKey !== 'string') {
        return { success: false, message: '请输入有效的卡密兑换码' };
    }

    const key = inputKey.trim().toUpperCase();
    const config = getLicenseConfig();

    // 1. 检查是否为通用特权码
    if (config.masterKeys.includes(key)) {
        setReportUnlocked();
        return { success: true, message: '特权兑换码激活成功！已解锁完整深度档案' };
    }

    // 2. 检查动态算法生成的卡密：格式 SIN-XXXX-XXXX-XXXX
    // 规则：各段字符经过自定义 Hash 校验和模运算匹配
    if (/^SIN-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(key)) {
        if (validateAlgorithmKey(key)) {
            // 记录该卡密已被使用
            markKeyAsUsed(key);
            setReportUnlocked();
            return { success: true, message: '卡密激活成功！已解锁完整深度档案' };
        }
    }

    // 3. 检查后台已生成的有效离线卡密池
    const validPool = getGeneratedKeysPool();
    if (validPool[key]) {
        if (validPool[key].used) {
            return { success: false, message: '该卡密已被核销使用，请勿重复输入' };
        }
        validPool[key].used = true;
        validPool[key].usedAt = new Date().toISOString();
        localStorage.setItem(USED_KEYS_STORAGE_KEY, JSON.stringify(validPool));
        setReportUnlocked();
        return { success: true, message: '卡密兑换成功！已解锁完整深度档案' };
    }

    return { success: false, message: '卡密无效或已过期，请检查输入或联系客服获取' };
}

/**
 * 动态算法卡密校验（带防伪特征码）
 */
function validateAlgorithmKey(key) {
    const parts = key.split('-');
    if (parts.length !== 4) return false;
    const body = parts[1] + parts[2];
    const checksum = parts[3];
    
    let sum = 0;
    for (let i = 0; i < body.length; i++) {
        sum = (sum * 31 + body.charCodeAt(i)) % 65535;
    }
    const expected = sum.toString(16).toUpperCase().padStart(4, '0');
    return checksum === expected;
}

/**
 * 生成单条带防伪算法的卡密
 */
function generateSingleKey() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const randStr = (len) => Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    
    const part1 = randStr(4);
    const part2 = randStr(4);
    const body = part1 + part2;
    
    let sum = 0;
    for (let i = 0; i < body.length; i++) {
        sum = (sum * 31 + body.charCodeAt(i)) % 65535;
    }
    const checksum = sum.toString(16).toUpperCase().padStart(4, '0');
    return `SIN-${part1}-${part2}-${checksum}`;
}

/**
 * 批量生成卡密（供管理后台使用）
 * @param {number} count 生成数量
 * @returns {Array} 卡密字符串数组
 */
function generateBatchKeys(count = 50) {
    const pool = getGeneratedKeysPool();
    const result = [];
    
    for (let i = 0; i < count; i++) {
        const key = generateSingleKey();
        if (!pool[key]) {
            pool[key] = {
                key: key,
                createdAt: new Date().toISOString(),
                used: false
            };
            result.push(key);
        }
    }
    
    localStorage.setItem(USED_KEYS_STORAGE_KEY, JSON.stringify(pool));
    return result;
}

/**
 * 获取本地卡密池
 */
function getGeneratedKeysPool() {
    try {
        const stored = localStorage.getItem(USED_KEYS_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (e) {
        return {};
    }
}

/**
 * 标记卡密已使用
 */
function markKeyAsUsed(key) {
    const pool = getGeneratedKeysPool();
    pool[key] = {
        key: key,
        used: true,
        usedAt: new Date().toISOString()
    };
    localStorage.setItem(USED_KEYS_STORAGE_KEY, JSON.stringify(pool));
}
