# -*- coding: utf-8 -*-
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

promo_dir = r"d:\虚拟测试产品\covers\promo_style"
os.makedirs(promo_dir, exist_ok=True)

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
        "filename": "1_mbti_promo.png",
        "category": "心理学经典测评",
        "title": "MBTI 16型人格",
        "subtitle": "深度性格原型与认知功能全景拆解",
        "theme_gradient": [(32, 18, 75), (14, 10, 36)],
        "accent_color": (168, 85, 247),
        "tag_color": (234, 179, 8),
        "price_tag": "限时特惠 ¥1.99",
        "features": [
            ("01", "4大核心维度精准定位 (E/I · S/N · T/F · J/P)"),
            ("02", "专属 16 种性格画像与认知功能深度剖析"),
            ("03", "天赋优势、恋爱匹配度与盲区潜能挖掘"),
            ("04", "官方推荐适配职业方向与职场避坑指南")
        ]
    },
    {
        "filename": "2_gad7_promo.png",
        "category": "情绪与精神健康",
        "title": "GAD-7 焦虑与内耗",
        "subtitle": "科学量化心理压力 · 情绪复原自救指南",
        "theme_gradient": [(16, 48, 70), (8, 22, 38)],
        "accent_color": (14, 165, 233),
        "tag_color": (52, 211, 153),
        "price_tag": "限时特惠 ¥1.99",
        "features": [
            ("01", "国际精神健康权威 GAD-7 专业自评量表"),
            ("02", "7道情境测试，精准量化焦虑与内耗等级"),
            ("03", "深度分析情绪超载诱因与压力临界点"),
            ("04", "附赠心理学实操级“快速止耗减压练习”")
        ]
    },
    {
        "filename": "3_attachment_promo.png",
        "category": "亲密关系与情感心理",
        "title": "恋爱依恋类型测评",
        "subtitle": "焦虑型 / 回避型 / 安全型 深度拆解",
        "theme_gradient": [(75, 22, 60), (30, 10, 30)],
        "accent_color": (244, 63, 94),
        "tag_color": (251, 191, 36),
        "price_tag": "限时特惠 ¥2.99",
        "features": [
            ("01", "测出你的依恋类型：安全/焦虑/回避/恐惧型"),
            ("02", "揭秘恋爱中敏感、患得患失或冷暴力根源"),
            ("03", "深度剖析原生家庭印记与情感安全感缺口"),
            ("04", "专属恋爱破局指南与伴侣相处模式指导")
        ]
    },
    {
        "filename": "4_dating_promo.png",
        "category": "两性人际与好感度",
        "title": "TA到底喜不喜欢你？",
        "subtitle": "关系信号拆解 · 真实心动好感概率量化",
        "theme_gradient": [(80, 22, 45), (35, 10, 26)],
        "accent_color": (236, 72, 153),
        "tag_color": (245, 158, 11),
        "price_tag": "限时特惠 ¥2.99",
        "features": [
            ("01", "聊天频率、肢体语言、微表情综合评估"),
            ("02", "精准量化 TA 对你的【真实心动好感概率 %】"),
            ("03", "判断 TA 当前处于：真诚试探/上头/养鱼备胎"),
            ("04", "绝地反击进退策略与破局升温实操秘籍")
        ]
    },
    {
        "filename": "5_bigfive_promo.png",
        "category": "学术级经典人格模型",
        "title": "大五人格专业测评",
        "subtitle": "5大核心人格维度 · 深度自我认知全景图",
        "theme_gradient": [(22, 38, 80), (10, 18, 45)],
        "accent_color": (59, 130, 246),
        "tag_color": (250, 204, 21),
        "price_tag": "限时特惠 ¥2.99",
        "features": [
            ("01", "开放性 · 尽责性 · 外向性 · 宜人性 · 神经质"),
            ("02", "心理学界公认最严谨、最稳定的人格测验体系"),
            ("03", "生成专属五维人格雷达画像与综合评分"),
            ("04", "全面解析职场竞争力、协作特质与心理韧性")
        ]
    },
    {
        "filename": "6_battery_promo.png",
        "category": "职场解压与心理自嘲",
        "title": "社畜精神续航与发疯",
        "subtitle": "测测剩余精神电量 · 职场发疯耐造指数",
        "theme_gradient": [(60, 48, 16), (28, 22, 10)],
        "accent_color": (234, 179, 8),
        "tag_color": (249, 115, 22),
        "price_tag": "限时特惠 ¥1.99",
        "features": [
            ("01", "精准测出你的“精神剩余电量 %”与疲劳等级"),
            ("02", "评估职场发疯危险指数与打工耐造抗性"),
            ("03", "趣味毒舌解构工位日常、摸鱼回血神功"),
            ("04", "附赠打工人自救锦囊与职场心态调整指南")
        ]
    },
    {
        "filename": "7_eq_promo.png",
        "category": "职场社交与反操控防御",
        "title": "高情商与防PUA测评",
        "subtitle": "拒绝老好人内耗 · 建立强大社交防御边界",
        "theme_gradient": [(24, 58, 52), (12, 30, 26)],
        "accent_color": (16, 185, 129),
        "tag_color": (6, 182, 212),
        "price_tag": "限时特惠 ¥2.99",
        "features": [
            ("01", "评估反操控免疫力、高情商应变值与边界感得分"),
            ("02", "深度拆解职场/恋爱中的隐形贬低与套路打压"),
            ("03", "掌握高情商硬核回怼公式，果断拒绝情绪绑架"),
            ("04", "打造刀枪不入的个人心理防御结界与掌控力")
        ]
    },
    {
        "filename": "8_holland_promo.png",
        "category": "升学选专业与求职转行",
        "title": "霍兰德职业兴趣测评",
        "subtitle": "RIASEC 六大维度 · 锁定天赋职业赛道",
        "theme_gradient": [(22, 45, 75), (10, 24, 42)],
        "accent_color": (6, 182, 212),
        "tag_color": (251, 191, 36),
        "price_tag": "限时特惠 ¥2.99",
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
    img = Image.new("RGBA", (W, H), (0, 0, 0, 255))
    draw = ImageDraw.Draw(img)
    
    c_top, c_bot = p["theme_gradient"]
    for y in range(H):
        ratio = y / float(H)
        r = int(c_top[0] * (1 - ratio) + c_bot[0] * ratio)
        g = int(c_top[1] * (1 - ratio) + c_bot[1] * ratio)
        b = int(c_top[2] * (1 - ratio) + c_bot[2] * ratio)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))

    glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_layer)
    glow_draw.ellipse([80, 100, 750, 680], fill=(*p["accent_color"], 130))
    glow_draw.ellipse([420, 550, 1020, 1100], fill=(*p["tag_color"], 80))
    glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(150))
    img = Image.alpha_composite(img, glow_layer)

    ui_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ui_draw = ImageDraw.Draw(ui_layer)

    font_tag = get_font(32, bold=True)
    ui_draw.rounded_rectangle([70, 75, 330, 135], radius=30, fill=(225, 29, 72, 230), outline=(255, 215, 0, 200), width=2)
    ui_draw.text((95, 87), p["price_tag"], font=font_tag, fill=(255, 255, 255, 255))
    
    ui_draw.rounded_rectangle([W - 310, 75, W - 70, 135], radius=30, fill=(16, 185, 129, 230), outline=(255, 255, 255, 180), width=2)
    ui_draw.text((W - 285, 87), "私信自动发货", font=font_tag, fill=(255, 255, 255, 255))

    font_cat = get_font(34, bold=True)
    cat_text = f"[ {p['category']} · 官方全景版 ]"
    cat_bbox = font_cat.getbbox(cat_text)
    cat_w = cat_bbox[2] - cat_bbox[0]
    ui_draw.text(((W - cat_w) // 2, 175), cat_text, font=font_cat, fill=p["tag_color"])

    font_title = get_font(78, bold=True)
    title_text = p["title"]
    t_bbox = font_title.getbbox(title_text)
    tw = t_bbox[2] - t_bbox[0]
    title_x = (W - tw) // 2
    title_y = 245
    ui_draw.text((title_x + 3, title_y + 4), title_text, font=font_title, fill=(0, 0, 0, 180))
    ui_draw.text((title_x, title_y), title_text, font=font_title, fill=(255, 255, 255, 255))

    font_sub = get_font(38, bold=False)
    sub_text = p["subtitle"]
    s_bbox = font_sub.getbbox(sub_text)
    sw = s_bbox[2] - s_bbox[0]
    ui_draw.text(((W - sw) // 2, 355), sub_text, font=font_sub, fill=(225, 235, 255, 230))

    card_x1, card_y1, card_x2, card_y2 = 70, 440, W - 70, 1160
    ui_draw.rounded_rectangle([card_x1, card_y1, card_x2, card_y2], radius=36, fill=(10, 15, 30, 220), outline=(*p["accent_color"], 180), width=3)

    font_chead = get_font(38, bold=True)
    chead_text = "▼ 深度测评报告包含以下核心板块 ▼"
    ch_bbox = font_chead.getbbox(chead_text)
    ch_w = ch_bbox[2] - ch_bbox[0]
    ui_draw.text(((W - ch_w) // 2, card_y1 + 45), chead_text, font=font_chead, fill=(255, 215, 0, 255))
    ui_draw.line([(card_x1 + 60, card_y1 + 110), (card_x2 - 60, card_y1 + 110)], fill=(255, 255, 255, 45), width=2)

    font_num = get_font(36, bold=True)
    font_item = get_font(33, bold=False)
    item_y = card_y1 + 145
    spacing = 135

    for num, text in p["features"]:
        box_y1 = item_y
        box_y2 = item_y + 95
        ui_draw.rounded_rectangle([card_x1 + 35, box_y1, card_x2 - 35, box_y2], radius=18, fill=(28, 38, 68, 240), outline=(*p["accent_color"], 120), width=2)
        ui_draw.rounded_rectangle([card_x1 + 55, box_y1 + 18, card_x1 + 130, box_y2 - 18], radius=12, fill=(*p["accent_color"], 255))
        ui_draw.text((card_x1 + 68, box_y1 + 24), num, font=font_num, fill=(255, 255, 255, 255))
        ui_draw.text((card_x1 + 155, box_y1 + 26), text, font=font_item, fill=(250, 252, 255, 255))
        item_y += spacing

    btn_x1, btn_y1, btn_x2, btn_y2 = 70, 1220, W - 70, 1360
    ui_draw.rounded_rectangle([btn_x1, btn_y1, btn_x2, btn_y2], radius=35, fill=(239, 68, 68, 250), outline=(255, 220, 100, 220), width=3)
    
    font_btn = get_font(44, bold=True)
    btn_text = "点击购买 · 私信自动秒发 · 即买即测 →"
    btn_bbox = font_btn.getbbox(btn_text)
    btn_w = btn_bbox[2] - btn_bbox[0]
    btn_h = btn_bbox[3] - btn_bbox[1]
    ui_draw.text(((W - btn_w) // 2, btn_y1 + (btn_y2 - btn_y1 - btn_h) // 2 - 4), btn_text, font=font_btn, fill=(255, 255, 255, 255))

    img = Image.alpha_composite(img, ui_layer)
    out_path = os.path.join(promo_dir, p["filename"])
    img = img.convert("RGB")
    img.save(out_path, "PNG", quality=95)
    print(f"Promo style generated: {out_path}")

print("Promo style covers generated successfully!")
