# -*- coding: utf-8 -*-
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

output_dir = r"d:\虚拟测试产品\covers\pantone_style"
os.makedirs(output_dir, exist_ok=True)

font_bold_path = r"C:\Windows\Fonts\msyhbd.ttc"
font_regular_path = r"C:\Windows\Fonts\msyh.ttc"

def get_font(size, bold=True):
    path = font_bold_path if bold else font_regular_path
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()

swatches = [
    {
        "filename": "1_mbti_pantone.png",
        "pantone_code": "PANTONE® 19-3950 TCX · AURORA PURPLE",
        "badge": "MBTI 16型人格 · 灵魂主导色",
        "color_name": "极光幻紫 · 独立战略家",
        "color_sub": "高阶认知 · 极度通透 · 潜意识深度探索",
        "card_gradient": [(139, 92, 246), (30, 27, 75)],
        "palette": [
            ("直觉深蓝", (30, 58, 138)),
            ("理性极光", (139, 92, 246)),
            ("灵感青翠", (6, 182, 212))
        ],
        "traits": ["精神高洁", "逻辑至上", "深度慢热", "洞察全局", "外冷内热"],
        "quote": "“你的灵魂散发着极光般的纯粹，虽不易靠近，但一旦靠近便无比耀眼。”"
    },
    {
        "filename": "2_gad7_pantone.png",
        "badge": "GAD-7 情绪自测 · 治愈治燥色",
        "pantone_code": "PANTONE® 14-4122 TCX · TRANQUIL TEAL",
        "color_name": "冰川薄荷 · 情绪深潜者",
        "color_sub": "平息焦躁 · 精神止耗 · 找回内心秩序",
        "card_gradient": [(14, 165, 233), (15, 45, 60)],
        "palette": [
            ("深海释压", (15, 23, 42)),
            ("冰川止耗", (14, 165, 233)),
            ("春芽苏生", (52, 211, 153))
        ],
        "traits": ["高敏感体质", "过度共情", "向内生长", "渴望松弛", "治愈力强"],
        "quote": "“深呼吸，允许一切发生，你的内心比你想象中要强大得多。”"
    },
    {
        "filename": "3_attachment_pantone.png",
        "badge": "恋爱依恋类型 · 情感底色谱",
        "pantone_code": "PANTONE® 17-1755 TCX · ROSE QUARTZ",
        "color_name": "晚樱珊瑚 · 玫瑰依恋者",
        "color_sub": "亲密渴望 · 安全感重构 · 情感治愈",
        "card_gradient": [(244, 63, 94), (70, 20, 50)],
        "palette": [
            ("依恋深红", (159, 18, 57)),
            ("晚樱柔粉", (244, 63, 94)),
            ("暖阳琥珀", (251, 191, 36))
        ],
        "traits": ["深情执着", "极度重感情", "需要托底", "共情入微", "值得被爱"],
        "quote": "“你不需要变得无坚不摧，你只是需要一个能读懂你脆弱的人。”"
    },
    {
        "filename": "4_dating_pantone.png",
        "badge": "两性心动信号 · 好感度色卡",
        "pantone_code": "PANTONE® 16-1546 TCX · LIVING CORAL",
        "color_name": "炽热绯红 · 心动捕手",
        "color_sub": "眼神微表情 · 浪漫共振 · 信号精准捕捉",
        "card_gradient": [(236, 72, 153), (80, 20, 45)],
        "palette": [
            ("暮色暗恋", (76, 29, 149)),
            ("心动绯红", (236, 72, 153)),
            ("暖橘破局", (249, 115, 22))
        ],
        "traits": ["直觉敏锐", "自带引力", "拒绝内耗", "双向奔赴", "清醒心动"],
        "quote": "“真诚与浪漫永远是顶级必杀技，对的人正在向你走来。”"
    },
    {
        "filename": "5_bigfive_pantone.png",
        "badge": "大五人格 OCEAN · 学术全景色",
        "pantone_code": "PANTONE® 19-4052 TCX · CLASSIC BLUE",
        "color_name": "皇家群青 · 秩序领航者",
        "color_sub": "五维全景 · 卓越尽责 · 稳定进取",
        "card_gradient": [(37, 99, 235), (15, 23, 60)],
        "palette": [
            ("深邃理性", (15, 23, 42)),
            ("群青秩序", (37, 99, 235)),
            ("天穹灵感", (56, 189, 248))
        ],
        "traits": ["顶尖自律", "目标坚定", "格局宏大", "抗压坚韧", "可靠稳重"],
        "quote": "“在充满不确定的世界里，你本身就是最稳定的秩序与力量。”"
    },
    {
        "filename": "6_battery_pantone.png",
        "badge": "打工人精神电量 · 活力自救色",
        "pantone_code": "PANTONE® 13-0858 TCX · VIBRANT YELLOW",
        "color_name": "荧光焦糖 · 仙气打工人",
        "color_sub": "摸鱼自愈 · 职场自嘲 · 随时准备暴富",
        "card_gradient": [(234, 179, 8), (55, 40, 10)],
        "palette": [
            ("工位黑夜", (28, 25, 23)),
            ("仙气电量", (234, 179, 8)),
            ("暴富耀光", (249, 115, 22))
        ],
        "traits": ["带薪摸鱼", "反内卷先锋", "幽默自嘲", "精神独立", "暴富体质"],
        "quote": "“搞钱第一，开心至上，下班之后的你才是宇宙真正的主角。”"
    },
    {
        "filename": "7_eq_pantone.png",
        "badge": "高情商与反PUA · 结界防御色",
        "pantone_code": "PANTONE® 18-5642 TCX · EMERALD SHIELD",
        "color_name": "翡翠青玉 · 绝缘防御者",
        "color_sub": "边界清晰 · 情绪脱敏 · 拒绝老好人",
        "card_gradient": [(16, 185, 129), (10, 45, 35)],
        "palette": [
            ("反操控墨黑", (15, 23, 42)),
            ("翡翠结界", (16, 185, 129)),
            ("极光清醒", (6, 182, 212))
        ],
        "traits": ["去讨好化", "清醒毒舌", "边界如铁", "高维共情", "掌控全局"],
        "quote": "“学会拒绝的那一刻，你才真正开始拥有掌控人生的自由。”"
    },
    {
        "filename": "8_holland_pantone.png",
        "badge": "霍兰德职业兴趣 · 天赋赛道色",
        "pantone_code": "PANTONE® 18-4252 TCX · AURORA CYAN",
        "color_name": "极光蔚蓝 · 领航操盘手",
        "color_sub": "RIASEC 代码 · 商业影响力 · 天赋赛道",
        "card_gradient": [(6, 182, 212), (15, 35, 65)],
        "palette": [
            ("深海沉淀", (15, 23, 42)),
            ("极光航向", (6, 182, 212)),
            ("金辉成就", (251, 191, 36))
        ],
        "traits": ["商业洞察", "战略组织", "天赋开挂", "高效整合", "前程无限"],
        "quote": "“顺应你的天性去前行，你所热爱的事情终将成为你的光芒。”"
    }
]

W, H = 1080, 1440

for s in swatches:
    # 纯净极简浅色画布 (高级纸张白)
    img = Image.new("RGBA", (W, H), (248, 250, 252, 255))
    draw = ImageDraw.Draw(img)

    # 1. 顶部极简品牌标
    font_badge = get_font(30, bold=True)
    b_text = f"· {s['badge']} ·"
    b_bbox = font_badge.getbbox(b_text)
    bw = b_bbox[2] - b_bbox[0]
    draw.text(((W - bw) // 2, 65), b_text, font=font_badge, fill=(100, 116, 139, 255))

    # 2. 巨大主色彩色块 (Pantone Color Block) - 占据视觉重心
    block_x1, block_y1, block_x2, block_y2 = 70, 125, W - 70, 720
    
    # 绘制色块渐变
    block_img = Image.new("RGBA", (block_x2 - block_x1, block_y2 - block_y1))
    b_draw = ImageDraw.Draw(block_img)
    c1, c2 = s["card_gradient"]
    bh = block_y2 - block_y1
    bw_block = block_x2 - block_x1
    for y in range(bh):
        ratio = y / float(bh)
        r = int(c1[0] * (1 - ratio) + c2[0] * ratio)
        g = int(c1[1] * (1 - ratio) + c2[1] * ratio)
        b = int(c1[2] * (1 - ratio) + c2[2] * ratio)
        b_draw.line([(0, y), (bw_block, y)], fill=(r, g, b, 255))
    
    # 色块圆角蒙版
    mask = Image.new("L", (bw_block, bh), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([0, 0, bw_block, bh], radius=32, fill=255)
    img.paste(block_img, (block_x1, block_y1), mask)

    # 色块内部文字：色彩名称与副标
    font_pcode = get_font(26, bold=True)
    draw.text((block_x1 + 45, block_y1 + 40), s["pantone_code"], font=font_pcode, fill=(255, 255, 255, 200))

    font_cname = get_font(68, bold=True)
    cn_text = s["color_name"]
    draw.text((block_x1 + 45, block_y1 + 410), cn_text, font=font_cname, fill=(255, 255, 255, 255))

    font_csub = get_font(34, bold=False)
    draw.text((block_x1 + 45, block_y1 + 510), s["color_sub"], font=font_csub, fill=(225, 235, 255, 230))

    # 3. 辅助色谱条 (3 Color Chips)
    chip_y = 760
    chip_w = (W - 140 - 40) // 3
    font_chip = get_font(24, bold=True)

    for i, (chip_name, chip_rgb) in enumerate(s["palette"]):
        cx1 = 70 + i * (chip_w + 20)
        cx2 = cx1 + chip_w
        # 颜色块
        draw.rounded_rectangle([cx1, chip_y, cx2, chip_y + 80], radius=16, fill=(*chip_rgb, 255))
        # 标签说明
        c_box = font_chip.getbbox(chip_name)
        cw = c_box[2] - c_box[0]
        draw.text((cx1 + (chip_w - cw) // 2, chip_y + 92), chip_name, font=font_chip, fill=(71, 85, 105, 255))

    # 4. 灵魂特质标签云 (Soul Trait Tags)
    font_tag = get_font(30, bold=True)
    tags = s["traits"]
    tag_paddings = 24
    tag_widths = [font_tag.getbbox(t)[2] - font_tag.getbbox(t)[0] + tag_paddings * 2 for t in tags]
    total_tags_w = sum(tag_widths) + (len(tags) - 1) * 16
    start_tag_x = (W - total_tags_w) // 2
    tag_y = 930
    
    cur_x = start_tag_x
    for i, t in enumerate(tags):
        tw_i = tag_widths[i]
        draw.rounded_rectangle(
            [cur_x, tag_y, cur_x + tw_i, tag_y + 55],
            radius=16,
            fill=(255, 255, 255, 255),
            outline=(203, 213, 225, 255),
            width=2
        )
        t_box = font_tag.getbbox(t)
        real_tw = t_box[2] - t_box[0]
        draw.text((cur_x + (tw_i - real_tw) // 2, tag_y + 10), t, font=font_tag, fill=(15, 23, 42, 255))
        cur_x += tw_i + 16

    # 5. 灵魂箴言金句卡 (Quote Card)
    q_x1, q_y1, q_x2, q_y2 = 70, 1040, W - 70, 1260
    draw.rounded_rectangle([q_x1, q_y1, q_x2, q_y2], radius=24, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=2)
    
    font_qhead = get_font(30, bold=True)
    qhead_text = "▼ 心理学灵魂共鸣寄语 ▼"
    qh_box = font_qhead.getbbox(qhead_text)
    qh_w = qh_box[2] - qh_box[0]
    draw.text(((W - qh_w) // 2, q_y1 + 30), qhead_text, font=font_qhead, fill=(225, 29, 72, 255))

    # 自动折行寄语
    font_quote = get_font(34, bold=True)
    quote_text = s["quote"]
    # 拆分
    half_q = len(quote_text) // 2 + 2
    ql1 = quote_text[:half_q]
    ql2 = quote_text[half_q:]
    
    ql1_w = font_quote.getbbox(ql1)[2] - font_quote.getbbox(ql1)[0]
    ql2_w = font_quote.getbbox(ql2)[2] - font_quote.getbbox(ql2)[0]
    
    draw.text(((W - ql1_w) // 2, q_y1 + 95), ql1, font=font_quote, fill=(15, 23, 42, 255))
    draw.text(((W - ql2_w) // 2, q_y1 + 155), ql2, font=font_quote, fill=(15, 23, 42, 255))

    # 6. 底部说明
    font_foot = get_font(30, bold=False)
    foot_text = "· 测测你的性格主导色 · 获取专属高维认知全景图 ·"
    f_bbox = font_foot.getbbox(foot_text)
    fw = f_bbox[2] - f_bbox[0]
    draw.text(((W - fw) // 2, 1345), foot_text, font=font_foot, fill=(148, 163, 184, 255))

    # 保存
    out_path = os.path.join(output_dir, s["filename"])
    img = img.convert("RGB")
    img.save(out_path, "PNG", quality=95)
    print(f"Generated pantone card: {out_path}")

print("All 8 pantone-style cards generated successfully!")
