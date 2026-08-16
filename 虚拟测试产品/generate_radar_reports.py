# -*- coding: utf-8 -*-
import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

output_dir = r"d:\虚拟测试产品\covers\report_style"
os.makedirs(output_dir, exist_ok=True)

font_bold_path = r"C:\Windows\Fonts\msyhbd.ttc"
font_regular_path = r"C:\Windows\Fonts\msyh.ttc"

def get_font(size, bold=True):
    path = font_bold_path if bold else font_regular_path
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()

reports = [
    {
        "filename": "1_mbti_report.png",
        "top_label": "MBTI 16型人格 · 深度测评结果",
        "badge_left": ("核心人格类型", "INTJ 战略家"),
        "badge_right": ("认知功能主导", "内向直觉 Ni"),
        "sticker_text": "我以为我很温和，测出来全是杀伐果断。。",
        "sticker_color": (239, 68, 68),
        "theme_color": (139, 92, 246),
        "axes": [
            ("内向 (I)", 85),
            ("直觉 (N)", 78),
            ("思考 (T)", 92),
            ("判断 (J)", 88),
            ("独立性", 95),
            ("抗压度", 80)
        ]
    },
    {
        "filename": "2_gad7_report.png",
        "top_label": "GAD-7 情绪负荷与内耗自评报告",
        "badge_left": ("情绪负荷指数", "78% 高度承载"),
        "badge_right": ("核心内耗诱因", "过度反刍预演"),
        "sticker_text": "白天看着情绪稳定，晚上大脑疯狂放PPT。。",
        "sticker_color": (239, 68, 68),
        "theme_color": (14, 165, 233),
        "axes": [
            ("过虑倾向", 88),
            ("躯体紧绷", 72),
            ("情绪易激", 65),
            ("睡眠困扰", 90),
            ("完美内耗", 85),
            ("疲劳感", 82)
        ]
    },
    {
        "filename": "3_attachment_report.png",
        "top_label": "成人恋爱依恋类型 · 深度画像",
        "badge_left": ("核心依恋类型", "矛盾焦虑型"),
        "badge_right": ("亲密关系特质", "高敏感·缺安全感"),
        "sticker_text": "测完沉默了，越在乎越想推开对方。。",
        "sticker_color": (236, 72, 153),
        "theme_color": (244, 63, 94),
        "axes": [
            ("亲密渴望", 95),
            ("弃绝恐惧", 88),
            ("敏感度", 92),
            ("情绪波动", 84),
            ("信任建立", 40),
            ("安全防御", 75)
        ]
    },
    {
        "filename": "4_dating_report.png",
        "top_label": "TA对你的真实好感与心动信号拆解",
        "badge_left": ("综合心动概率", "86% 极度心动"),
        "badge_right": ("对方当前状态", "暗中试探·疯狂暗示"),
        "sticker_text": "不用怀疑了！TA这些表现就是在疯狂暗恋你！",
        "sticker_color": (249, 115, 22),
        "theme_color": (236, 72, 153),
        "axes": [
            ("聊天积极度", 92),
            ("眼神微表情", 85),
            ("肢体距离", 80),
            ("隐性吃醋", 88),
            ("分享欲", 95),
            ("主动寻找", 86)
        ]
    },
    {
        "filename": "5_bigfive_report.png",
        "top_label": "大五人格 OCEAN · 学术级五维画像",
        "badge_left": ("主导优势特质", "高开放·高尽责"),
        "badge_right": ("职场竞争力", "顶尖战略攻坚型"),
        "sticker_text": "五维模型准到发毛，连我的隐藏性格都拆解了！",
        "sticker_color": (59, 130, 246),
        "theme_color": (37, 99, 235),
        "axes": [
            ("开放性(O)", 88),
            ("尽责性(C)", 92),
            ("外向性(E)", 55),
            ("宜人性(A)", 78),
            ("神经质(N)", 35)
        ]
    },
    {
        "filename": "6_battery_report.png",
        "top_label": "打工人精神续航与发疯指数诊断单",
        "badge_left": ("精神剩余电量", "12% 极度亏电"),
        "badge_right": ("职场发疯危险", "随时准备辞职发飙"),
        "sticker_text": "工资两千八，受气两万八，全凭一口仙气吊着。。",
        "sticker_color": (239, 68, 68),
        "theme_color": (234, 179, 8),
        "axes": [
            ("工位耐造度", 15),
            ("辞职冲动", 95),
            ("摸鱼自愈力", 88),
            ("暴富渴望", 100),
            ("情绪耐受", 25),
            ("早起崩溃度", 92)
        ]
    },
    {
        "filename": "7_eq_report.png",
        "top_label": "高情商与反PUA社交防御指数评估",
        "badge_left": ("防PUA免疫段位", "王者级·心理结界"),
        "badge_right": ("社交边界感", "刀枪不入·拒绝内耗"),
        "sticker_text": "想PUA我？不好意思，我的精神防御固若金汤！",
        "sticker_color": (16, 185, 129),
        "theme_color": (5, 150, 105),
        "axes": [
            ("套路识别", 92),
            ("边界把控", 90),
            ("情绪脱敏", 85),
            ("硬核回怼", 88),
            ("拒绝能力", 94),
            ("共情掌控", 82)
        ]
    },
    {
        "filename": "8_holland_report.png",
        "top_label": "霍兰德职业兴趣 RIASEC · 全景测评",
        "badge_left": ("专属霍兰德代码", "SEC 黄金组合"),
        "badge_right": ("天赋发展赛道", "管理咨询·商业运营"),
        "sticker_text": "转行/选专业必看！直接把适合我的职业都列出来了",
        "sticker_color": (14, 165, 233),
        "theme_color": (8, 145, 178),
        "axes": [
            ("现实型(R)", 35),
            ("研究型(I)", 65),
            ("艺术型(A)", 72),
            ("社会型(S)", 94),
            ("企业型(E)", 88),
            ("常规型(C)", 76)
        ]
    }
]

W, H = 1080, 1440

for r in reports:
    # 纯净浅色杂志感背景
    img = Image.new("RGBA", (W, H), (248, 250, 252, 255))
    draw = ImageDraw.Draw(img)

    # 1. 顶部标题栏
    font_top = get_font(42, bold=True)
    top_title = f"你的【{r['top_label']}】"
    tt_bbox = font_top.getbbox(top_title)
    tt_w = tt_bbox[2] - tt_bbox[0]
    draw.text(((W - tt_w) // 2, 70), top_title, font=font_top, fill=(15, 23, 42, 255))

    # 2. 左右双核心指标卡片 (白色圆角投影卡)
    card_w = 440
    card_h = 150
    card_y = 150
    
    # 左卡片
    left_x = 70
    draw.rounded_rectangle([left_x, card_y, left_x + card_w, card_y + card_h], radius=20, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=2)
    font_sub = get_font(28, bold=False)
    font_val = get_font(44, bold=True)
    draw.text((left_x + 35, card_y + 24), r["badge_left"][0], font=font_sub, fill=(100, 116, 139, 255))
    draw.text((left_x + 35, card_y + 70), r["badge_left"][1], font=font_val, fill=(225, 29, 72, 255))

    # 右卡片
    right_x = W - 70 - card_w
    draw.rounded_rectangle([right_x, card_y, right_x + card_w, card_y + card_h], radius=20, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=2)
    draw.text((right_x + 35, card_y + 24), r["badge_right"][0], font=font_sub, fill=(100, 116, 139, 255))
    draw.text((right_x + 35, card_y + 70), r["badge_right"][1], font=font_val, fill=(15, 23, 42, 255))

    # 3. 爆款情绪吐槽胶囊贴纸 (Viral Sticker)
    font_sticker = get_font(38, bold=True)
    st_text = r["sticker_text"]
    st_bbox = font_sticker.getbbox(st_text)
    st_w = st_bbox[2] - st_bbox[0]
    st_h = st_bbox[3] - st_bbox[1]
    
    st_x = (W - st_w) // 2
    st_y = 340
    st_pad_x, st_pad_y = 40, 18
    
    # 醒目的红色/高亮实底贴纸
    draw.rounded_rectangle(
        [st_x - st_pad_x, st_y - st_pad_y, st_x + st_w + st_pad_x, st_y + st_h + st_pad_y],
        radius=24,
        fill=(*r["sticker_color"], 255)
    )
    draw.text((st_x, st_y - 2), st_text, font=font_sticker, fill=(255, 255, 255, 255))

    # 4. 绘制多维雷达图 (Radar Chart)
    cx, cy = W // 2, 850
    max_radius = 320
    axes = r["axes"]
    num_axes = len(axes)
    angle_step = 2 * math.pi / num_axes
    start_angle = -math.pi / 2  # 从正上方开始

    # 绘制同心多边形背景网格 (4层：25%, 50%, 75%, 100%)
    for level in [0.25, 0.5, 0.75, 1.0]:
        grid_points = []
        for i in range(num_axes):
            angle = start_angle + i * angle_step
            rad = max_radius * level
            gx = cx + rad * math.cos(angle)
            gy = cy + rad * math.sin(angle)
            grid_points.append((gx, gy))
        
        # 绘制网格线
        draw.polygon(grid_points, outline=(203, 213, 225, 255), width=2 if level == 1.0 else 1)

    # 绘制轴线
    for i in range(num_axes):
        angle = start_angle + i * angle_step
        ax_x = cx + max_radius * math.cos(angle)
        ax_y = cy + max_radius * math.sin(angle)
        draw.line([(cx, cy), (ax_x, ax_y)], fill=(226, 232, 240, 255), width=1)

    # 计算数据多边形顶点
    data_points = []
    for i, (name, val) in enumerate(axes):
        angle = start_angle + i * angle_step
        val_ratio = min(max(val / 100.0, 0.15), 1.0)
        rad = max_radius * val_ratio
        dx = cx + rad * math.cos(angle)
        dy = cy + rad * math.sin(angle)
        data_points.append((dx, dy))

    # 绘制半透明数据填充层
    poly_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    poly_draw = ImageDraw.Draw(poly_layer)
    poly_draw.polygon(data_points, fill=(*r["theme_color"], 105), outline=(*r["theme_color"], 255))
    img = Image.alpha_composite(img, poly_layer)
    draw = ImageDraw.Draw(img)

    # 绘制数据多边形边框加粗与顶点圆点
    for i in range(num_axes):
        pt1 = data_points[i]
        pt2 = data_points[(i + 1) % num_axes]
        draw.line([pt1, pt2], fill=(*r["theme_color"], 255), width=5)
        # 顶点圆点
        draw.ellipse([pt1[0] - 8, pt1[1] - 8, pt1[0] + 8, pt1[1] + 8], fill=(255, 255, 255, 255), outline=(*r["theme_color"], 255), width=3)

    # 绘制雷达图各轴文字标签与分值
    font_axis_name = get_font(30, bold=True)
    font_axis_val = get_font(36, bold=True)

    for i, (name, val) in enumerate(axes):
        angle = start_angle + i * angle_step
        label_rad = max_radius + 65
        lx = cx + label_rad * math.cos(angle)
        ly = cy + label_rad * math.sin(angle)
        
        # 文本居中
        name_bbox = font_axis_name.getbbox(name)
        nw = name_bbox[2] - name_bbox[0]
        val_text = str(val)
        val_bbox = font_axis_val.getbbox(val_text)
        vw = val_bbox[2] - val_bbox[0]
        
        draw.text((lx - nw // 2, ly - 26), name, font=font_axis_name, fill=(51, 65, 85, 255))
        draw.text((lx - vw // 2, ly + 10), val_text, font=font_axis_val, fill=(225, 29, 72, 255))

    # 5. 底部真实测评说明栏 (无任何价格/购买按钮)
    font_footer = get_font(30, bold=False)
    foot_msg = "· 心理学维度科学量化 · 测完生成专属雷达画像与详细解析 ·"
    fm_bbox = font_footer.getbbox(foot_msg)
    fm_w = fm_bbox[2] - fm_bbox[0]
    draw.text(((W - fm_w) // 2, 1340), foot_msg, font=font_footer, fill=(148, 163, 184, 255))

    # 保存文件
    out_path = os.path.join(output_dir, r["filename"])
    img = img.convert("RGB")
    img.save(out_path, "PNG", quality=95)
    print(f"Generated report card: {out_path}")

print("All 8 viral report-style covers generated successfully!")
