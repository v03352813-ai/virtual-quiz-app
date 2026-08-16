# -*- coding: utf-8 -*-
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

output_dir = r"d:\虚拟测试产品\covers"
os.makedirs(output_dir, exist_ok=True)

font_bold_path = r"C:\Windows\Fonts\msyhbd.ttc"
font_regular_path = r"C:\Windows\Fonts\msyh.ttc"

def get_font(size, bold=True):
    path = font_bold_path if bold else font_regular_path
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()

products = [
    {
        "filename": "1_mbti_cover.png",
        "category": "心理学经典量表",
        "badge": "官方全维度专业版 · 深度解析",
        "title": "MBTI 16型人格",
        "subtitle": "深度性格原型与认知功能全景拆解",
        "theme_gradient": [(32, 18, 75), (14, 10, 36)],
        "accent_color": (168, 85, 247),   # Purple
        "tag_color": (234, 179, 8),      # Gold
        "features": [
            ("01", "4大核心维度精准定位 (E/I · S/N · T/F · J/P)"),
            ("02", "专属 16 种性格画像与认知功能深度剖析"),
            ("03", "天赋优势、恋爱匹配度与盲区潜能挖掘"),
            ("04", "官方推荐适配职业方向与职场避坑指南")
        ]
    },
    {
        "filename": "2_gad7_cover.png",
        "category": "国际通用精神健康",
        "badge": "科学自评量表 · 深度分析",
        "title": "GAD-7 焦虑与内耗",
        "subtitle": "科学量化心理压力 · 情绪复原自救指南",
        "theme_gradient": [(16, 48, 70), (8, 22, 38)],
        "accent_color": (14, 165, 233),   # Cyan/Sky
        "tag_color": (52, 211, 153),     # Emerald
        "features": [
            ("01", "国际精神健康权威 GAD-7 专业自评量表"),
            ("02", "7道情境测试，精准量化焦虑与内耗等级"),
            ("03", "深度分析情绪超载诱因与压力临界点"),
            ("04", "附赠心理学实操级“快速止耗减压练习”")
        ]
    },
    {
        "filename": "3_attachment_cover.png",
        "category": "亲密关系与情感心理",
        "badge": "经典依恋理论 · 深度自测",
        "title": "恋爱依恋类型测评",
        "subtitle": "焦虑型 / 回避型 / 安全型 深度拆解",
        "theme_gradient": [(75, 22, 60), (30, 10, 30)],
        "accent_color": (244, 63, 94),    # Rose Pink
        "tag_color": (251, 191, 36),     # Amber
        "features": [
            ("01", "测出你的依恋类型：安全/焦虑/回避/恐惧型"),
            ("02", "揭秘恋爱中敏感、患得患失或冷暴力根源"),
            ("03", "深度剖析原生家庭印记与情感安全感缺口"),
            ("04", "专属恋爱破局指南与伴侣相处模式指导")
        ]
    },
    {
        "filename": "4_dating_cover.png",
        "category": "两性人际与好感度",
        "badge": "恋爱心理学模型 · 深度量化",
        "title": "TA到底喜不喜欢你？",
        "subtitle": "关系信号拆解 · 真实心动好感概率量化",
        "theme_gradient": [(80, 22, 45), (35, 10, 26)],
        "accent_color": (236, 72, 153),   # Pink
        "tag_color": (245, 158, 11),     # Orange gold
        "features": [
            ("01", "聊天频率、肢体语言、微表情综合评估"),
            ("02", "精准量化 TA 对你的【真实心动好感概率 %】"),
            ("03", "判断 TA 当前处于：真诚试探/上头/养鱼备胎"),
            ("04", "绝地反击进退策略与破局升温实操秘籍")
        ]
    },
    {
        "filename": "5_bigfive_cover.png",
        "category": "学术级经典人格模型",
        "badge": "OCEAN 五大维度 · 全景画像",
        "title": "大五人格专业测评",
        "subtitle": "5大核心人格维度 · 深度自我认知全景图",
        "theme_gradient": [(22, 38, 80), (10, 18, 45)],
        "accent_color": (59, 130, 246),   # Royal Blue
        "tag_color": (250, 204, 21),     # Yellow
        "features": [
            ("01", "开放性 · 尽责性 · 外向性 · 宜人性 · 神经质"),
            ("02", "心理学界公认最严谨、最稳定的人格测验体系"),
            ("03", "生成专属五维人格雷达画像与综合评分"),
            ("04", "全面解析职场竞争力、协作特质与心理韧性")
        ]
    },
    {
        "filename": "6_battery_cover.png",
        "category": "职场解压与心理自嘲",
        "badge": "打工人真实压力 · 深度自测",
        "title": "社畜精神续航与发疯",
        "subtitle": "测测剩余精神电量 · 职场发疯耐造指数",
        "theme_gradient": [(60, 48, 16), (28, 22, 10)],
        "accent_color": (234, 179, 8),    # Yellow Gold
        "tag_color": (249, 115, 22),     # Orange
        "features": [
            ("01", "精准测出你的“精神剩余电量 %”与疲劳等级"),
            ("02", "评估职场发疯危险指数与打工耐造抗性"),
            ("03", "趣味毒舌解构工位日常、摸鱼回血神功"),
            ("04", "附赠打工人自救锦囊与职场心态调整指南")
        ]
    },
    {
        "filename": "7_eq_cover.png",
        "category": "职场社交与反操控防御",
        "badge": "情商沟通与社交边界 · 专业版",
        "title": "高情商与防PUA测评",
        "subtitle": "拒绝老好人内耗 · 建立强大社交防御边界",
        "theme_gradient": [(24, 58, 52), (12, 30, 26)],
        "accent_color": (16, 185, 129),   # Emerald
        "tag_color": (6, 182, 212),      # Cyan
        "features": [
            ("01", "评估反操控免疫力、高情商应变值与边界感得分"),
            ("02", "深度拆解职场/恋爱中的隐形贬低与套路打压"),
            ("03", "掌握高情商硬核回怼公式，果断拒绝情绪绑架"),
            ("04", "打造刀枪不入的个人心理防御结界与掌控力")
        ]
    },
    {
        "filename": "8_holland_cover.png",
        "category": "升学选专业与求职转行",
        "badge": "RIASEC 六大维度 · 职业导航",
        "title": "霍兰德职业兴趣测评",
        "subtitle": "RIASEC 六大维度 · 锁定天赋职业赛道",
        "theme_gradient": [(22, 45, 75), (10, 24, 42)],
        "accent_color": (6, 182, 212),    # Cyan
        "tag_color": (251, 191, 36),     # Gold
        "features": [
            ("01", "现实(R) · 研究(I) · 艺术(A) · 社会(S) · 企业(E) · 常规(C)"),
            ("02", "计算专属 3 位霍兰德代码组合 (如 SEC / RIA)"),
            ("03", "深度人岗匹配分析，挖掘你最擅长的工作模式"),
            ("04", "官方推荐适配职业清单与升职转型发展路径")
        ]
    }
]

W, H = 1080, 1440

for p in products:
    # 1. 垂直双色深邃背景
    img = Image.new("RGBA", (W, H), (0, 0, 0, 255))
    draw = ImageDraw.Draw(img)
    
    c_top, c_bot = p["theme_gradient"]
    for y in range(H):
        ratio = y / float(H)
        r = int(c_top[0] * (1 - ratio) + c_bot[0] * ratio)
        g = int(c_top[1] * (1 - ratio) + c_bot[1] * ratio)
        b = int(c_top[2] * (1 - ratio) + c_bot[2] * ratio)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))

    # 2. 柔和环境光晕
    glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_layer)
    glow_draw.ellipse([80, 120, 750, 700], fill=(*p["accent_color"], 120))
    glow_draw.ellipse([420, 600, 1020, 1150], fill=(*p["tag_color"], 70))
    glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(150))
    img = Image.alpha_composite(img, glow_layer)

    # 3. 玻璃拟态卡片层 (所有卡片和标签都在透明层统一渲染以保证正确的 Alpha 混合)
    ui_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ui_draw = ImageDraw.Draw(ui_layer)

    # 顶部专业标签 Badge (深色半透明胶囊，边框发光)
    font_badge = get_font(34, bold=True)
    badge_text = f"[ {p['category']} · {p['badge']} ]"
    b_bbox = font_badge.getbbox(badge_text)
    bw = b_bbox[2] - b_bbox[0]
    bh = b_bbox[3] - b_bbox[1]
    
    badge_x = (W - bw) // 2
    badge_y = 110
    padding_x, padding_y = 40, 18
    
    ui_draw.rounded_rectangle(
        [badge_x - padding_x, badge_y - padding_y, badge_x + bw + padding_x, badge_y + bh + padding_y],
        radius=35,
        fill=(15, 20, 40, 220),
        outline=(*p["accent_color"], 220),
        width=2
    )
    ui_draw.text((badge_x, badge_y - 2), badge_text, font=font_badge, fill=(255, 255, 255, 255))

    # 4. 主标题与副标题
    font_title = get_font(84, bold=True)
    title_text = p["title"]
    t_bbox = font_title.getbbox(title_text)
    tw = t_bbox[2] - t_bbox[0]
    title_x = (W - tw) // 2
    title_y = 210
    
    # 标题阴影与本体
    ui_draw.text((title_x + 3, title_y + 4), title_text, font=font_title, fill=(0, 0, 0, 200))
    ui_draw.text((title_x, title_y), title_text, font=font_title, fill=(255, 255, 255, 255))

    # 副标题
    font_sub = get_font(38, bold=False)
    sub_text = p["subtitle"]
    s_bbox = font_sub.getbbox(sub_text)
    sw = s_bbox[2] - s_bbox[0]
    ui_draw.text(((W - sw) // 2, 330), sub_text, font=font_sub, fill=(225, 235, 255, 230))

    # 5. 核心内容卡片 (Glassmorphism Card)
    card_x1, card_y1, card_x2, card_y2 = 70, 420, W - 70, 1220
    
    # 主卡片底板
    ui_draw.rounded_rectangle([card_x1, card_y1, card_x2, card_y2], radius=36, fill=(10, 16, 32, 225), outline=(*p["accent_color"], 190), width=3)

    # 卡片顶部标题
    font_chead = get_font(40, bold=True)
    chead_text = "▼ 深度测评报告包含以下核心板块 ▼"
    ch_bbox = font_chead.getbbox(chead_text)
    ch_w = ch_bbox[2] - ch_bbox[0]
    ui_draw.text(((W - ch_w) // 2, card_y1 + 50), chead_text, font=font_chead, fill=(255, 215, 0, 255))
    
    # 装饰分割线
    ui_draw.line([(card_x1 + 60, card_y1 + 120), (card_x2 - 60, card_y1 + 120)], fill=(255, 255, 255, 45), width=2)

    # 4个特性条目
    font_num = get_font(38, bold=True)
    font_item = get_font(34, bold=False)
    item_y = card_y1 + 160
    spacing = 150

    for num, text in p["features"]:
        box_y1 = item_y
        box_y2 = item_y + 110
        ui_draw.rounded_rectangle([card_x1 + 35, box_y1, card_x2 - 35, box_y2], radius=20, fill=(26, 36, 65, 240), outline=(*p["accent_color"], 130), width=2)
        
        # 数字序号胶囊
        ui_draw.rounded_rectangle([card_x1 + 55, box_y1 + 22, card_x1 + 135, box_y2 - 22], radius=14, fill=(*p["accent_color"], 255))
        ui_draw.text((card_x1 + 70, box_y1 + 30), num, font=font_num, fill=(255, 255, 255, 255))
        
        # 文字说明
        ui_draw.text((card_x1 + 160, box_y1 + 34), text, font=font_item, fill=(255, 255, 255, 255))
        
        item_y += spacing

    # 6. 底部纯正极简标语（无“点击购买/自动发货”等广告按钮）
    font_foot = get_font(34, bold=False)
    foot_text = "· 全维度量化模型 · 生成专属高清分析报告 · 支持长期回看 ·"
    f_bbox = font_foot.getbbox(foot_text)
    fw = f_bbox[2] - f_bbox[0]
    ui_draw.text(((W - fw) // 2, 1315), foot_text, font=font_foot, fill=(210, 225, 250, 220))

    # 合成保存
    img = Image.alpha_composite(img, ui_layer)
    out_path = os.path.join(output_dir, p["filename"])
    img = img.convert("RGB")
    img.save(out_path, "PNG", quality=95)
    print(f"Clean cover generated: {out_path}")

print("All 8 clean product covers regenerated successfully!")
