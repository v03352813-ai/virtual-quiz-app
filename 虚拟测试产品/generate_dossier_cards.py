# -*- coding: utf-8 -*-
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

output_dir = r"d:\虚拟测试产品\covers\dossier_style"
os.makedirs(output_dir, exist_ok=True)

font_bold_path = r"C:\Windows\Fonts\msyhbd.ttc"
font_regular_path = r"C:\Windows\Fonts\msyh.ttc"

def get_font(size, bold=True):
    path = font_bold_path if bold else font_regular_path
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()

cards = [
    {
        "filename": "1_mbti_dossier.png",
        "header_tag": "国家心理学会认证标准 · 人格档案",
        "title": "INTJ 战略总指挥官",
        "stamp": "深度鉴定 · 真实",
        "stamp_color": (168, 85, 247),
        "theme_gradient": [(24, 18, 55), (10, 8, 26)],
        "accent_color": (168, 85, 247),
        "tags": ["极度理性", "精神洁癖", "全局视野", "嘴硬心软", "冷面笑匠"],
        "bars": [
            ("内向 (I)", 86, "外向 (E)", 14),
            ("直觉 (N)", 79, "实感 (S)", 21),
            ("思考 (T)", 94, "情感 (F)", 6),
            ("判断 (J)", 88, "感知 (P)", 12)
        ],
        "insight_title": "▼ 心理学核心诊断意见 ▼",
        "insight_quote": "“别装高冷了，你只是把所有的深情与温柔，都留给了一个人。”"
    },
    {
        "filename": "2_gad7_dossier.png",
        "header_tag": "临床情绪负荷筛查 · 心理诊断单",
        "title": "高敏感 · 情绪过载体质",
        "stamp": "过载预警 · 止耗",
        "stamp_color": (239, 68, 68),
        "theme_gradient": [(18, 42, 60), (8, 20, 32)],
        "accent_color": (14, 165, 233),
        "tags": ["讨好型倾向", "夜间PPT播放机", "过度反刍", "完美内耗", "容易疲惫"],
        "bars": [
            ("精神内耗指数", 89, "安全基准", 11),
            ("情绪紧绷程度", 78, "松弛基准", 22),
            ("睡眠受损程度", 84, "深度睡眠", 16),
            ("自我苛责指数", 92, "自我接纳", 8)
        ],
        "insight_title": "▼ 心理学核心诊断意见 ▼",
        "insight_quote": "“你不是不够好，你只是在大脑里演练了太多根本不会发生的灾难。”"
    },
    {
        "filename": "3_attachment_dossier.png",
        "header_tag": "亲密关系潜意识 · 依恋类型图谱",
        "title": "矛盾焦虑型依恋",
        "stamp": "依恋确诊 · 破局",
        "stamp_color": (244, 63, 94),
        "theme_gradient": [(65, 20, 50), (25, 10, 24)],
        "accent_color": (244, 63, 94),
        "tags": ["极度缺安全感", "习惯性试探", "越在乎越推开", "秒回强迫症", "情感高敏感"],
        "bars": [
            ("弃绝恐惧指数", 91, "安全感指数", 9),
            ("亲密渴望程度", 96, "情感防御值", 4),
            ("自我价值怀疑", 78, "自尊自爱度", 22),
            ("伴侣信任阈值", 32, "疑心防备值", 68)
        ],
        "insight_title": "▼ 心理学核心诊断意见 ▼",
        "insight_quote": "“你的患得患失，是因为童年没有得到过无条件的接纳与托底。”"
    },
    {
        "filename": "4_dating_dossier.png",
        "header_tag": "两性交往心动信号 · 真实好感拆解",
        "title": "心动概率 88% · 疯狂暗恋",
        "stamp": "心动确诊 · 破局",
        "stamp_color": (236, 72, 153),
        "theme_gradient": [(70, 20, 42), (28, 10, 22)],
        "accent_color": (236, 72, 153),
        "tags": ["偷偷关注你", "聊天秒回", "隐性吃醋", "制造偶遇", "眼神疯狂暗示"],
        "bars": [
            ("真实心动好感", 88, "冷淡疏离值", 12),
            ("主动联系频率", 84, "被动应付值", 16),
            ("肢体微表情接近", 86, "社交安全距离", 14),
            ("养鱼备胎概率", 8, "真诚心动值", 92)
        ],
        "insight_title": "▼ 心理学核心诊断意见 ▼",
        "insight_quote": "“眼睛是不会撒谎的，看向你的时候，TA的瞳孔在无意识放大。”"
    },
    {
        "filename": "5_bigfive_dossier.png",
        "header_tag": "学术级经典心理学 · OCEAN 性格全景",
        "title": "高开放 · 高尽责 · 领袖型",
        "stamp": "学术金标准 · 认证",
        "stamp_color": (59, 130, 246),
        "theme_gradient": [(20, 32, 70), (10, 16, 40)],
        "accent_color": (59, 130, 246),
        "tags": ["极高创造力", "责任心拉满", "自律王者", "进取攻坚", "情绪抗压强"],
        "bars": [
            ("开放性 (O 创造)", 91, "保守守旧", 9),
            ("尽责性 (C 自律)", 88, "散漫随性", 12),
            ("外向性 (E 社交)", 55, "内向独处", 45),
            ("宜人性 (A 协作)", 78, "独立好胜", 22)
        ],
        "insight_title": "▼ 心理学核心诊断意见 ▼",
        "insight_quote": "“具备顶尖战略操盘手的底色，在认定的赛道里能爆发出惊人能量。”"
    },
    {
        "filename": "6_battery_dossier.png",
        "header_tag": "打工人精神健康体检 · 发疯指数",
        "title": "精神剩余 11% · 极度亏电",
        "stamp": "随时发疯 · 急救",
        "stamp_color": (234, 179, 8),
        "theme_gradient": [(50, 40, 15), (24, 18, 8)],
        "accent_color": (234, 179, 8),
        "tags": ["周一红温症", "带薪摸鱼王者", "假笑面具大师", "辞职冲动99次", "全凭仙气吊着"],
        "bars": [
            ("工位暴怒指数", 94, "情绪耐受值", 6),
            ("辞职冲动频率", 96, "继续打工意愿", 4),
            ("摸鱼回血能力", 89, "加班承受力", 11),
            ("精神剩余电量", 11, "耗尽亏电值", 89)
        ],
        "insight_title": "▼ 心理学核心诊断意见 ▼",
        "insight_quote": "“诊断结论：工资两千八，受气两万八，建议立即启动带薪摸鱼自愈。”"
    },
    {
        "filename": "7_eq_dossier.png",
        "header_tag": "社交反操控防御 · 心理结界档案",
        "title": "防PUA王者级 · 免疫体质",
        "stamp": "心理结界 · 达成",
        "stamp_color": (16, 185, 129),
        "theme_gradient": [(18, 50, 42), (10, 25, 22)],
        "accent_color": (16, 185, 129),
        "tags": ["拒绝情绪绑架", "毒舌硬核回怼", "边界感极强", "清醒独立", "去老好人化"],
        "bars": [
            ("套路打压识别率", 95, "受骗受控率", 5),
            ("果断拒绝能力", 92, "妥协委屈度", 8),
            ("情绪脱敏抗性", 88, "内疚自责值", 12),
            ("被PUA受害概率", 6, "绝对防御值", 94)
        ],
        "insight_title": "▼ 心理学核心诊断意见 ▼",
        "insight_quote": "“你的清醒与边界感就是最好的护城河，任何套路在你面前都是小丑。”"
    },
    {
        "filename": "8_holland_dossier.png",
        "header_tag": "职业规划学术金标准 · RIASEC 档案",
        "title": "SEC 黄金组合 · 战略管理",
        "stamp": "天赋匹配 · 优选",
        "stamp_color": (6, 182, 212),
        "theme_gradient": [(18, 40, 68), (10, 20, 38)],
        "accent_color": (6, 182, 212),
        "tags": ["商业操盘", "组织协调", "人际洞察", "战略规划", "结构化执行"],
        "bars": [
            ("S-社会型特质", 94, "机械重复", 6),
            ("E-企业型特质", 89, "安于现状", 11),
            ("C-常规型特质", 78, "混乱无序", 22),
            ("I-研究型特质", 68, "盲目跟风", 32)
        ],
        "insight_title": "▼ 心理学核心诊断意见 ▼",
        "insight_quote": "“别在不擅长的细枝末节内耗，你天生适合站在台前整合资源、统揽大局。”"
    }
]

W, H = 1080, 1440

for c in cards:
    # 1. 深邃奢华背景渐变
    img = Image.new("RGBA", (W, H), (0, 0, 0, 255))
    draw = ImageDraw.Draw(img)
    
    c_top, c_bot = c["theme_gradient"]
    for y in range(H):
        ratio = y / float(H)
        r = int(c_top[0] * (1 - ratio) + c_bot[0] * ratio)
        g = int(c_top[1] * (1 - ratio) + c_bot[1] * ratio)
        b = int(c_top[2] * (1 - ratio) + c_bot[2] * ratio)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))

    # 2. 柔和光晕层
    glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_layer)
    glow_draw.ellipse([100, 150, 750, 750], fill=(*c["accent_color"], 110))
    glow_draw.ellipse([450, 650, 1000, 1200], fill=(255, 215, 0, 60))
    glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(150))
    img = Image.alpha_composite(img, glow_layer)

    # 3. UI 浮层
    ui_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ui_draw = ImageDraw.Draw(ui_layer)

    # 顶部档案编号胶囊
    font_head = get_font(32, bold=True)
    head_text = f"◆ {c['header_tag']} ◆"
    h_bbox = font_head.getbbox(head_text)
    hw = h_bbox[2] - h_bbox[0]
    ui_draw.text(((W - hw) // 2, 85), head_text, font=font_head, fill=(200, 220, 255, 220))

    # 大标题
    font_title = get_font(76, bold=True)
    t_text = c["title"]
    t_bbox = font_title.getbbox(t_text)
    tw = t_bbox[2] - t_bbox[0]
    ui_draw.text(((W - tw) // 2, 145), t_text, font=font_title, fill=(255, 255, 255, 255))

    # 鉴定印章 (Stamp Pill)
    font_stamp = get_font(30, bold=True)
    s_text = c["stamp"]
    s_bbox = font_stamp.getbbox(s_text)
    sw = s_bbox[2] - s_bbox[0]
    stamp_x = (W - sw) // 2
    stamp_y = 250
    ui_draw.rounded_rectangle(
        [stamp_x - 30, stamp_y - 12, stamp_x + sw + 30, stamp_y + 42],
        radius=25,
        fill=(*c["stamp_color"], 45),
        outline=(*c["stamp_color"], 220),
        width=2
    )
    ui_draw.text((stamp_x, stamp_y), s_text, font=font_stamp, fill=(255, 255, 255, 255))

    # 4. 人格标签词云 Tags (居中流式排列)
    font_tag = get_font(30, bold=True)
    tags = c["tags"]
    # 算总宽
    tag_paddings = 24
    tag_widths = [font_tag.getbbox(t)[2] - font_tag.getbbox(t)[0] + tag_paddings * 2 for t in tags]
    total_tags_w = sum(tag_widths) + (len(tags) - 1) * 16
    start_tag_x = (W - total_tags_w) // 2
    tag_y = 330
    
    cur_x = start_tag_x
    for i, t in enumerate(tags):
        tw_i = tag_widths[i]
        ui_draw.rounded_rectangle(
            [cur_x, tag_y, cur_x + tw_i, tag_y + 55],
            radius=16,
            fill=(255, 255, 255, 20),
            outline=(255, 255, 255, 50),
            width=1
        )
        t_box = font_tag.getbbox(t)
        real_tw = t_box[2] - t_box[0]
        ui_draw.text((cur_x + (tw_i - real_tw) // 2, tag_y + 10), t, font=font_tag, fill=(255, 215, 0, 255))
        cur_x += tw_i + 16

    # 5. 核心条形能量条卡片 (Glassmorphism Progress Bars)
    card_x1, card_y1, card_x2, card_y2 = 70, 425, W - 70, 1100
    ui_draw.rounded_rectangle([card_x1, card_y1, card_x2, card_y2], radius=32, fill=(12, 16, 32, 225), outline=(*c["accent_color"], 180), width=3)

    # 绘制 4 组双向进度条
    font_bar_name = get_font(32, bold=True)
    font_bar_val = get_font(32, bold=True)
    
    bar_start_y = card_y1 + 50
    bar_spacing = 150
    bar_w = card_x2 - card_x1 - 100
    bar_x = card_x1 + 50

    for idx, (name1, val1, name2, val2) in enumerate(c["bars"]):
        by = bar_start_y + idx * bar_spacing
        
        # 左右两端名称与百分比
        ui_draw.text((bar_x, by), f"{name1}  {val1}%", font=font_bar_name, fill=(255, 255, 255, 255))
        
        n2_str = f"{val2}%  {name2}"
        n2_box = font_bar_name.getbbox(n2_str)
        n2_w = n2_box[2] - n2_box[0]
        ui_draw.text((bar_x + bar_w - n2_w, by), n2_str, font=font_bar_name, fill=(148, 163, 184, 255))
        
        # 槽底 (灰底)
        track_y = by + 50
        track_h = 24
        ui_draw.rounded_rectangle([bar_x, track_y, bar_x + bar_w, track_y + track_h], radius=12, fill=(255, 255, 255, 25))
        
        # 高亮条 (主题色)
        fill_w = int(bar_w * (val1 / 100.0))
        ui_draw.rounded_rectangle([bar_x, track_y, bar_x + fill_w, track_y + track_h], radius=12, fill=(*c["accent_color"], 255))

    # 6. 底部主治诊断格言金句卡片 (Doctor Insight Card)
    q_x1, q_y1, q_x2, q_y2 = 70, 1140, W - 70, 1340
    ui_draw.rounded_rectangle([q_x1, q_y1, q_x2, q_y2], radius=28, fill=(225, 29, 72, 35), outline=(225, 29, 72, 190), width=2)
    
    font_ititle = get_font(32, bold=True)
    it_box = font_ititle.getbbox(c["insight_title"])
    it_w = it_box[2] - it_box[0]
    ui_draw.text(((W - it_w) // 2, q_y1 + 25), c["insight_title"], font=font_ititle, fill=(255, 215, 0, 255))
    
    font_iquote = get_font(34, bold=True)
    iq_box = font_iquote.getbbox(c["insight_quote"])
    iq_w = iq_box[2] - iq_box[0]
    ui_draw.text(((W - iq_w) // 2, q_y1 + 95), c["insight_quote"], font=font_iquote, fill=(255, 255, 255, 255))

    # 合成保存
    img = Image.alpha_composite(img, ui_layer)
    out_path = os.path.join(output_dir, c["filename"])
    img = img.convert("RGB")
    img.save(out_path, "PNG", quality=95)
    print(f"Generated dossier card: {out_path}")

print("All 8 dossier-style cards generated successfully!")
