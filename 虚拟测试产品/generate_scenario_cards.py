# -*- coding: utf-8 -*-
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

output_dir = r"d:\虚拟测试产品\covers\scenario_style"
os.makedirs(output_dir, exist_ok=True)

font_bold_path = r"C:\Windows\Fonts\msyhbd.ttc"
font_regular_path = r"C:\Windows\Fonts\msyh.ttc"

def get_font(size, bold=True):
    path = font_bold_path if bold else font_regular_path
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()

scenarios = [
    {
        "filename": "1_mbti_scenario.png",
        "badge": "MBTI 16型人格 · 灵魂拷问",
        "title": "放假被朋友突然喊出门聚会",
        "question": "周末好不容易放假躺平，朋友突然发微信喊你立刻出来聚会，你的第一真实本能反应是？",
        "theme_gradient": [(28, 18, 65), (12, 10, 32)],
        "accent_color": (168, 85, 247),
        "opt_a": ("A. 瞬间心累头大，只想一个人在房间充电", 82, "内向 I 型"),
        "opt_b": ("B. 毫不犹豫换衣服出门，越热闹越有精神", 18, "外向 E 型"),
        "footer_tip": "你是哪一种？测测你的 16 型人格核心认知与职业优势"
    },
    {
        "filename": "2_gad7_scenario.png",
        "badge": "GAD-7 焦虑与内耗 · 真实写照",
        "title": "微信发出去 2 小时没得到回复",
        "question": "发了一条信息给比较在意的人，过了两个小时对方还没回，你此时大脑最容易出现的状态是？",
        "theme_gradient": [(16, 45, 68), (8, 20, 35)],
        "accent_color": (14, 165, 233),
        "opt_a": ("A. 疯狂反复翻看记录，反思自己哪句话说错了", 84, "过度内耗"),
        "opt_b": ("B. 没回就没回呗，随手该干嘛干嘛", 16, "情绪脱敏"),
        "footer_tip": "测测你的 GAD-7 心理压力指数与情绪止耗练习"
    },
    {
        "filename": "3_attachment_scenario.png",
        "badge": "恋爱依恋类型 · 亲密关系测验",
        "title": "伴侣突然语气冷淡或态度含糊",
        "question": "恋爱中当伴侣某天突然语气冷淡、态度含糊时，你内心下意识的第一反应通常是？",
        "theme_gradient": [(70, 20, 55), (28, 10, 26)],
        "accent_color": (244, 63, 94),
        "opt_a": ("A. 瞬间心慌紧绷，越想越焦虑甚至想先推开对方", 81, "焦虑/回避型"),
        "opt_b": ("B. 坦然沟通了解情况，相信感情不会轻易瓦解", 19, "安全依恋型"),
        "footer_tip": "测测你在亲密关系中的真实依恋类型与安全感底色"
    },
    {
        "filename": "4_dating_scenario.png",
        "badge": "两性心动信号 · 暧昧期大考",
        "title": "TA每天找你聊天，但从不表白",
        "question": "TA每天都主动找你分享日常、聊天秒回，但从不挑明关系，你觉得 TA 当前的真实心态是？",
        "theme_gradient": [(75, 20, 42), (30, 10, 22)],
        "accent_color": (236, 72, 153),
        "opt_a": ("A. 喜欢但害怕被拒绝，在小心翼翼试探你", 78, "暗恋试探"),
        "opt_b": ("B. 享受暧昧红利，把你当备胎打发无聊", 22, "养鱼备胎"),
        "footer_tip": "测测 TA 对你的真实心动概率与好感信号深度拆解"
    },
    {
        "filename": "5_bigfive_scenario.png",
        "badge": "大五人格 OCEAN · 经典情境",
        "title": "面对完全未知且复杂的全新挑战",
        "question": "面对一项从未接触过且没有现成标准答案的复杂任务，你的第一行动逻辑是？",
        "theme_gradient": [(20, 32, 70), (10, 16, 40)],
        "accent_color": (59, 130, 246),
        "opt_a": ("A. 必须先制定严密的步骤与逻辑框架再动手", 74, "高尽责 C型"),
        "opt_b": ("B. 凭直觉和灵感边做边摸索，享受试错过程", 26, "高开放 O型"),
        "footer_tip": "心理学学术金标准 · 测测你的大五人格五维全景画像"
    },
    {
        "filename": "6_battery_scenario.png",
        "badge": "打工人精神状态 · 真实自测",
        "title": "周日晚上躺在床上想到明天周一",
        "question": "周日晚上 11 点躺在床上，一想到明天早上又要闹钟响起去上班打卡，你的第一感觉是？",
        "theme_gradient": [(52, 42, 15), (24, 18, 8)],
        "accent_color": (234, 179, 8),
        "opt_a": ("A. 呼吸不顺、头皮发麻，恨不得地球立即暂停", 92, "电量已耗尽"),
        "opt_b": ("B. 心情毫无波澜，甚至有点期待搞钱", 8, "天选打工人"),
        "footer_tip": "测测你的精神剩余电量与职场发疯危险临界点"
    },
    {
        "filename": "7_eq_scenario.png",
        "badge": "高情商与反PUA · 社交防御",
        "title": "被别人道德绑架或隐形打压时",
        "question": "别人用“这事只有你能帮我/我是为你好”要求你做不想做的事，你第一反应是？",
        "theme_gradient": [(20, 50, 42), (10, 25, 22)],
        "accent_color": (16, 185, 129),
        "opt_a": ("A. 清醒识破套路，果断拒绝且内心毫无愧疚", 86, "防PUA王者"),
        "opt_b": ("B. 不好意思拒绝，勉强答应后自己生闷气", 14, "内耗老好人"),
        "footer_tip": "测测你的反操控免疫力与高情商硬核回怼实力"
    },
    {
        "filename": "8_holland_scenario.png",
        "badge": "霍兰德职业兴趣 · 天赋赛道",
        "title": "两份同等薪水的工作你倾向哪种？",
        "question": "如果有两份待遇完全相同的工作，你本能会更喜欢哪种工作体验？",
        "theme_gradient": [(18, 40, 68), (10, 20, 38)],
        "accent_color": (6, 182, 212),
        "opt_a": ("A. 自由度高、常与人沟通、能发挥商业影响力", 68, "企业/社会型"),
        "opt_b": ("B. 流程清晰规范、深耕专业技术与系统研究", 32, "常规/研究型"),
        "footer_tip": "选专业/求职/转行必测 · 锁定你的霍兰德 RIASEC 核心代码"
    }
]

W, H = 1080, 1440

for s in scenarios:
    # 1. 深色质感背景
    img = Image.new("RGBA", (W, H), (0, 0, 0, 255))
    draw = ImageDraw.Draw(img)
    
    c_top, c_bot = s["theme_gradient"]
    for y in range(H):
        ratio = y / float(H)
        r = int(c_top[0] * (1 - ratio) + c_bot[0] * ratio)
        g = int(c_top[1] * (1 - ratio) + c_bot[1] * ratio)
        b = int(c_top[2] * (1 - ratio) + c_bot[2] * ratio)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))

    # 2. 炫彩环境光晕
    glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_layer)
    glow_draw.ellipse([100, 150, 750, 750], fill=(*s["accent_color"], 120))
    glow_draw.ellipse([450, 650, 1000, 1150], fill=(255, 215, 0, 60))
    glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(150))
    img = Image.alpha_composite(img, glow_layer)

    # 3. UI 层
    ui_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ui_draw = ImageDraw.Draw(ui_layer)

    # 顶部徽标
    font_badge = get_font(34, bold=True)
    badge_text = f"◆ {s['badge']} ◆"
    b_bbox = font_badge.getbbox(badge_text)
    bw = b_bbox[2] - b_bbox[0]
    ui_draw.text(((W - bw) // 2, 85), badge_text, font=font_badge, fill=(255, 215, 0, 255))

    # 主情境大标题
    font_title = get_font(74, bold=True)
    t_text = s["title"]
    t_bbox = font_title.getbbox(t_text)
    tw = t_bbox[2] - t_bbox[0]
    ui_draw.text(((W - tw) // 2, 155), t_text, font=font_title, fill=(255, 255, 255, 255))

    # 4. 问题描述大卡片 (Question Box)
    q_x1, q_y1, q_x2, q_y2 = 70, 270, W - 70, 560
    ui_draw.rounded_rectangle([q_x1, q_y1, q_x2, q_y2], radius=28, fill=(15, 22, 42, 230), outline=(*s["accent_color"], 180), width=3)

    font_q_tag = get_font(30, bold=True)
    ui_draw.rounded_rectangle([q_x1 + 35, q_y1 + 30, q_x1 + 180, q_y1 + 75], radius=14, fill=(*s["accent_color"], 255))
    ui_draw.text((q_x1 + 52, q_y1 + 36), "真实情境题", font=font_q_tag, fill=(255, 255, 255, 255))

    # 自动折行渲染问题正文
    font_q_text = get_font(38, bold=True)
    q_words = s["question"]
    # 拆分两行
    half = len(q_words) // 2 + 3
    line1 = q_words[:half]
    line2 = q_words[half:]
    ui_draw.text((q_x1 + 40, q_y1 + 115), line1, font=font_q_text, fill=(255, 255, 255, 255))
    ui_draw.text((q_x1 + 40, q_y1 + 195), line2, font=font_q_text, fill=(255, 255, 255, 255))

    # 5. 选项 A 与 选项 B 对决卡片 (Option A & Option B)
    opt_y = 600
    font_opt_title = get_font(34, bold=True)
    font_opt_pct = get_font(52, bold=True)
    font_opt_tag = get_font(28, bold=True)

    for opt_data, is_a in [(s["opt_a"], True), (s["opt_b"], False)]:
        text, pct, tag = opt_data
        box_y1 = opt_y
        box_y2 = opt_y + 260
        
        # 选项主底框
        box_fill = (22, 32, 58, 230) if is_a else (16, 24, 45, 220)
        box_border = (*s["accent_color"], 220) if is_a else (100, 116, 139, 150)
        ui_draw.rounded_rectangle([q_x1, box_y1, q_x2, box_y2], radius=28, fill=box_fill, outline=box_border, width=2)

        # 选项文字
        ui_draw.text((q_x1 + 45, box_y1 + 35), text, font=font_opt_title, fill=(255, 255, 255, 255))

        # 进度条
        bar_x = q_x1 + 45
        bar_y = box_y1 + 110
        bar_w = q_x2 - q_x1 - 90
        bar_h = 32
        
        # 进度条底槽
        ui_draw.rounded_rectangle([bar_x, bar_y, bar_x + bar_w, bar_y + bar_h], radius=16, fill=(255, 255, 255, 25))
        
        # 进度条高亮
        fill_w = int(bar_w * (pct / 100.0))
        fill_color = (*s["accent_color"], 255) if is_a else (148, 163, 184, 255)
        ui_draw.rounded_rectangle([bar_x, bar_y, bar_x + fill_w, bar_y + bar_h], radius=16, fill=fill_color)

        # 百分比数值 + 标签
        pct_color = (255, 215, 0, 255) if is_a else (203, 213, 225, 255)
        ui_draw.text((bar_x, box_y1 + 170), f"{pct}% 的人选择此项", font=font_opt_pct, fill=pct_color)
        
        tag_str = f"[ {tag} ]"
        t_box = font_opt_tag.getbbox(tag_str)
        t_w = t_box[2] - t_box[0]
        ui_draw.text((bar_x + bar_w - t_w, box_y1 + 185), tag_str, font=font_opt_tag, fill=(200, 220, 255, 240))

        opt_y += 300

    # 6. 底部行动引导
    font_footer = get_font(34, bold=False)
    foot_text = f"· {s['footer_tip']} ·"
    f_bbox = font_footer.getbbox(foot_text)
    fw = f_bbox[2] - f_bbox[0]
    ui_draw.text(((W - fw) // 2, 1340), foot_text, font=font_footer, fill=(210, 225, 250, 220))

    # 合成保存
    img = Image.alpha_composite(img, ui_layer)
    out_path = os.path.join(output_dir, s["filename"])
    img = img.convert("RGB")
    img.save(out_path, "PNG", quality=95)
    print(f"Generated scenario card: {out_path}")

print("All 8 scenario cards generated successfully!")
