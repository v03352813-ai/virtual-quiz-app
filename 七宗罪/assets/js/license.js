/**
 * 七宗罪灵魂暗面测试 - 商业化卡密验证与管理引擎 (多渠道+设备指纹防转发升级版)
 * 支持：
 * 1. 渠道分类隔离：小红书 (XHS-)、闲鱼 (XY-)、通用 (SIN-)
 * 2. 设备指纹防刷：单卡密限制绑定 2~3 台设备（默认 3 台），杜绝群发转发与二次转卖
 * 3. 免费云端核销 (LeanCloud REST API) + 离线防伪哈希算法双模运行
 */

const LICENSE_CONFIG_KEY = 'sin_license_config_v1';
const ACTIVATED_STATUS_KEY = 'sin_is_unlocked_vip_v1';
const USED_KEYS_STORAGE_KEY = 'sin_used_license_keys_v1';
const DEVICE_ID_KEY = 'sin_device_id_v1';

// 默认系统配置
const DEFAULT_CONFIG = {
    mode: 'license', // 'license' (卡密解锁) | 'free' (全免费引流)
    maxDevices: 3, // 单卡密允许绑定的最大设备数 (1~3台)
    buyTip: '测试完整版包含 1000+ 字深层潜意识剖析、暗面爆发诱因、灵魂相吸相克与救赎指南',
    buyUrl: 'https://xhslink.com',
    serviceWx: 'soul_test_vip',
    universalKey: '8F2K9M7Q3X5W', // 12位小红书专属无规律高强度密码
    masterKeys: ['8F2K9M7Q3X5W', '7B9N2X4R8K6C', '9K3M7P2X8W5Q', '4M8Q2X9B7K3P', 'YZYM20268888'],
    // 免费云端核销配置 (LeanCloud)
    cloud: {
        enabled: false,
        appId: '',
        appKey: '',
        serverUrl: ''
    }
};

/**
 * 获取或生成当前终端的唯一设备指纹 ID (Device Fingerprint)
 */
function getDeviceId() {
    try {
        let devId = localStorage.getItem(DEVICE_ID_KEY);
        if (!devId) {
            const randPart = Math.random().toString(36).substring(2, 10);
            const timePart = Date.now().toString(36);
            devId = `DEV_${timePart}_${randPart}`.toUpperCase();
            localStorage.setItem(DEVICE_ID_KEY, devId);
        }
        return devId;
    } catch (e) {
        return 'DEV_UNKNOWN';
    }
}

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
        return true;
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
 * 校验卡密核心函数（支持异步云端核销与离线设备指纹绑定）
 * @param {string} inputKey 用户输入的卡密
 * @returns {Promise<Object>} { success: boolean, message: string }
 */
async function verifyLicenseKey(inputKey) {
    if (!inputKey || typeof inputKey !== 'string') {
        return { success: false, message: '请输入有效的卡密兑换码' };
    }

    const key = inputKey.trim().toUpperCase();
    const config = getLicenseConfig();
    const deviceId = getDeviceId();
    const maxDevices = parseInt(config.maxDevices, 10) || 3;

    // 1. 检查是否为通用专属密码或特权码 (小红书/私域交付)
    const isMaster = (config.universalKey && config.universalKey.trim().toUpperCase() === key) ||
                     (config.masterKeys && config.masterKeys.map(k => k.toUpperCase()).includes(key));
    if (isMaster) {
        setReportUnlocked();
        return { success: true, message: '专属兑换密码激活成功！已解锁完整深度卷宗' };
    }

    // 2. 如果开启了云端核销（LeanCloud），进行全网实时设备指纹校验
    if (config.cloud && config.cloud.enabled && config.cloud.appId && config.cloud.appKey) {
        try {
            const cloudRes = await verifyKeyWithCloud(key, deviceId, maxDevices, config.cloud);
            if (cloudRes.success) {
                setReportUnlocked();
            }
            return cloudRes;
        } catch (cloudErr) {
            console.warn('云端核销连接失败，降级使用本地离线校验', cloudErr);
        }
    }

    // 3. 检查本地卡密池（多渠道 + 设备指纹核销）
    const validPool = getGeneratedKeysPool();
    if (validPool[key]) {
        const item = validPool[key];
        const boundDevices = Array.isArray(item.boundDevices) ? item.boundDevices : (item.used ? ['DEV_LEGACY'] : []);
        
        // 已在该设备绑定过
        if (boundDevices.includes(deviceId)) {
            setReportUnlocked();
            return { success: true, message: '已在该设备激活过，直接为您解锁完整档案！' };
        }

        // 设备未绑定，检查是否达到上限
        if (boundDevices.length >= maxDevices) {
            return {
                success: false,
                message: `该卡密已达到最大绑定设备上限 (${maxDevices}台设备)，禁止在更多设备上使用！`
            };
        }

        // 绑定新设备
        boundDevices.push(deviceId);
        item.boundDevices = boundDevices;
        item.used = true;
        item.usedAt = new Date().toISOString();
        localStorage.setItem(USED_KEYS_STORAGE_KEY, JSON.stringify(validPool));
        setReportUnlocked();

        return {
            success: true,
            message: `卡密激活成功！当前已绑定第 ${boundDevices.length}/${maxDevices} 台设备`
        };
    }

    // 4. 检查动态算法卡密格式 (XHS/XY/SIN/ONCE/VIP/ONE/TEST-XXXX-XXXX-XXXX)
    if (/^(XHS|XY|SIN|ONCE|VIP|ONE|TEST)-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(key)) {
        if (validateAlgorithmKey(key)) {
            const channelPrefix = key.split('-')[0];
            const isOneTime = (channelPrefix === 'ONCE' || channelPrefix === 'ONE' || channelPrefix === 'TEST');
            const allowedDevices = isOneTime ? 1 : maxDevices;

            // 记录到本地已使用卡密池并绑定设备
            const pool = getGeneratedKeysPool();
            const boundDevices = [deviceId];
            pool[key] = {
                key: key,
                channel: channelPrefix,
                createdAt: new Date().toISOString(),
                used: true,
                usedAt: new Date().toISOString(),
                boundDevices: boundDevices,
                isOneTime: isOneTime
            };
            localStorage.setItem(USED_KEYS_STORAGE_KEY, JSON.stringify(pool));
            setReportUnlocked();
            return {
                success: true,
                message: isOneTime ? '✨ 专属一次性体验码激活成功！已为您解锁本次完整卷宗' : `卡密激活成功！已绑定本设备 (允许最多 ${maxDevices} 台设备)`
            };
        }
    }

    return { success: false, message: '卡密无效或已过期，请检查输入或联系客服获取' };
}

/**
 * 动态防伪哈希算法校验（支持多渠道前缀 XHS / XY / SIN / ONCE / VIP / ONE / TEST）
 */
function validateAlgorithmKey(key) {
    const parts = key.split('-');
    if (parts.length !== 4) return false;
    const channel = parts[0];
    const body = channel + parts[1] + parts[2];
    const checksum = parts[3];
    
    let sum = 0;
    for (let i = 0; i < body.length; i++) {
        sum = (sum * 31 + body.charCodeAt(i)) % 65535;
    }
    const expected = sum.toString(16).toUpperCase().padStart(4, '0');
    return checksum === expected;
}

/**
 * 生成单条带渠道前缀与防伪算法的卡密
 * @param {string} channel 渠道前缀：'XHS' | 'XY' | 'SIN' | 'ONCE' | 'VIP' | 'ONE' | 'TEST'
 */
function generateSingleKey(channel = 'XHS') {
    const validChannels = ['XHS', 'XY', 'SIN', 'ONCE', 'VIP', 'ONE', 'TEST'];
    const prefix = validChannels.includes(channel.toUpperCase()) ? channel.toUpperCase() : 'XHS';
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const randStr = (len) => Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    
    const part1 = randStr(4);
    const part2 = randStr(4);
    const body = prefix + part1 + part2;
    
    let sum = 0;
    for (let i = 0; i < body.length; i++) {
        sum = (sum * 31 + body.charCodeAt(i)) % 65535;
    }
    const checksum = sum.toString(16).toUpperCase().padStart(4, '0');
    return `${prefix}-${part1}-${part2}-${checksum}`;
}

/**
 * 批量生成指定渠道的卡密
 * @param {number} count 数量
 * @param {string} channel 渠道: 'XHS' | 'XY' | 'SIN' | 'ONCE' | 'VIP' | 'ONE' | 'TEST'
 */
function generateBatchKeys(count = 50, channel = 'XHS') {
    const pool = getGeneratedKeysPool();
    const result = [];
    const validChannels = ['XHS', 'XY', 'SIN', 'ONCE', 'VIP', 'ONE', 'TEST'];
    const prefix = validChannels.includes(channel.toUpperCase()) ? channel.toUpperCase() : 'XHS';
    
    for (let i = 0; i < count; i++) {
        const key = generateSingleKey(prefix);
        if (!pool[key]) {
            pool[key] = {
                key: key,
                channel: prefix,
                createdAt: new Date().toISOString(),
                used: false,
                boundDevices: []
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
 * 云端核销 (LeanCloud REST API)
 */
async function verifyKeyWithCloud(key, deviceId, maxDevices, cloudConfig) {
    const baseUrl = cloudConfig.serverUrl.replace(/\/$/, '');
    const url = `${baseUrl}/1.1/classes/SinLicenseKey?where=${encodeURIComponent(JSON.stringify({ key: key }))}`;

    const res = await fetch(url, {
        headers: {
            'X-LC-Id': cloudConfig.appId,
            'X-LC-Key': cloudConfig.appKey,
            'Content-Type': 'application/json'
        }
    });

    if (!res.ok) {
        throw new Error('Cloud HTTP Error ' + res.status);
    }

    const data = await res.json();
    if (!data.results || data.results.length === 0) {
        return { success: false, message: '卡密不存在或已被作废，请检查输入' };
    }

    const record = data.results[0];
    const objectId = record.objectId;
    const boundDevices = Array.isArray(record.boundDevices) ? record.boundDevices : [];

    if (boundDevices.includes(deviceId)) {
        return { success: true, message: '已在当前设备激活，直接为您解锁完整档案！' };
    }

    if (boundDevices.length >= maxDevices) {
        return {
            success: false,
            message: `该卡密已达最大绑定设备上限 (${maxDevices}台设备)，禁止在更多设备上使用！`
        };
    }

    // 更新绑定设备
    boundDevices.push(deviceId);
    const updateUrl = `${baseUrl}/1.1/classes/SinLicenseKey/${objectId}`;
    await fetch(updateUrl, {
        method: 'PUT',
        headers: {
            'X-LC-Id': cloudConfig.appId,
            'X-LC-Key': cloudConfig.appKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            boundDevices: boundDevices,
            used: true,
            lastUsedAt: new Date().toISOString()
        })
    });

    return {
        success: true,
        message: `卡密激活成功！当前已绑定第 ${boundDevices.length}/${maxDevices} 台设备`
    };
}
