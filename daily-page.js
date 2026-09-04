(() => {
  const day = document.body.dataset.day;
  const storageKey = "beijing-weekend-guide-2026";
  const configs = {
    friday: {
      dispatch: "#execution .dispatch-card:nth-child(1)",
      route: "#friday",
      transport: "#transport-friday",
      meals: [
        { selector: "#friday-dinner", title: "19:45左右 · 周五晚饭", note: "步行线终点吃；20:00首选仍不能落座就切换，21:10开始回酒店。" }
      ],
      trafficDecisions: [
        ["北京南站 → 首都宾馆", "地铁", "门到门45—55分钟", "周五晚高峰，地铁时间更稳定。", "出租车排队≤10分钟且预计≤35分钟，或行李不便换乘时改打车。"],
        ["首都宾馆 → 前门老城", "步行", "10—20分钟进入核心街区", "正阳门、北京坊和杨梅竹是连续步行线。", "下雨或体力不足时打车到北京坊，走完杨梅竹后就近吃饭。"],
        ["晚饭地点 → 首都宾馆", "步行优先", "大栅栏 / 鲜鱼口约15—20分钟", "从大栅栏、鲜鱼口步行即可收尾。", "实时步行超过20分钟、去了虎坊桥或已经走累时直接打车。"]
      ],
      journey: [
        { dispatch: 0, traffic: [0], transportDetails: ["#transport-friday .journey-grid > .journey-leg:nth-child(1)"], switches: [0] },
        { dispatch: 1, traffic: [1], transportDetails: ["#transport-friday .journey-grid > .journey-leg:nth-child(2)"], details: ["#friday .map-card", "#friday .experience-grid", "#friday .cut-card"], switches: [1, 2] },
        { dispatch: 2, meals: [0], switches: [3] },
        { dispatch: 3, traffic: [2], transportDetails: ["#transport-friday .journey-grid > .journey-leg:nth-child(3)"], switches: [4] }
      ],
      switches: [
        ["17:15", "出站查看两种预计时间", "默认直接进地铁；只有出租车排队不超过10分钟且到酒店不超过35分钟，才改为打车。"],
        ["18:30", "才完成入住", "删去大栅栏回折，只保留正阳门—北京坊—杨梅竹—晚饭。"],
        ["19:15", "才从酒店出发", "只走北京坊—杨梅竹；不再为了补景点推迟晚饭。"],
        ["20:00", "首选仍不能落座", "立即切到下一家；21:10开始回酒店。"],
        ["21:10", "统一结束", "导航显示步行超过20分钟就打车，21:30前回房。"]
      ],
      checks: [
        ["train", "核对北京南到站时间", "确认车次、到达口与行李数量；默认走4号线—2号线，重行李再按实时路况切出租车。"],
        ["hotel", "保存首都宾馆完整地址", "前门东大街3号；打车目的地写“首都宾馆正门”，避免导到同名酒店。"],
        ["fridayqueue", "18:05查看晚饭排号", "放下行李后立即看首选与备选等待时间，能线上取号就先取。"],
        ["weather", "出发前48小时看天气", "下雨直接缩短胡同步行，并把晚饭安排到更靠酒店的一家。"]
      ],
      sourceLinks: [
        ["嬉游：老城与餐馆原文", "资料归档/00-微信资料台账.md"],
        ["首都宾馆高德位置", "https://ditu.amap.com/place/B000A1A4D2"]
      ],
      copy: "周五 9月11日\n17:00到北京南站；默认4号线到宣武门，换2号线到崇文门，再步行到首都宾馆。只有出租车排队≤10分钟且到酒店≤35分钟才打车。18:20轻装出发，走正阳门—北京坊—杨梅竹斜街。19:35查看晚饭等位，20:00仍不能落座就切下一家。21:10统一开始回酒店，21:30前回房。"
    },
    saturday: {
      dispatch: "#execution .dispatch-card:nth-child(2)",
      route: "#saturday",
      transport: "#transport-saturday",
      meals: [
        { selector: "#saturday-breakfast", title: "06:30—07:20 · 双店早餐", note: "天兴居＋锦芳并列首选；07:25必须向午门移动。" },
        { selector: "#saturday-lunch", title: "12:30以后 · 故宫后的午饭", note: "白记首选；平安锅贴、席上喳喳按排队情况接替。" },
        { selector: "#preconcert-dinner", title: "14:25—15:05 · 演出前晚饭", note: "酒店外卖首选平安锅贴、备选锦芳；15:00仍未送到就停止等待。" },
        { selector: "#late-night", title: "22:50以后 · 夜景与夜宵", note: "先过交通门槛，再决定什刹海与铜锅涮肉。" }
      ],
      trafficDecisions: [
        ["首都宾馆 → 天安门安检口", "步行", "约15—25分钟，另算安检排队", "距离短，步行最直接；入口以预约凭证为准。", "不在管制区反复叫车寻找下客点。"],
        ["天安门广场 → 鲜鱼口早餐", "步行", "约20—30分钟，服从单向疏散", "升旗后顺路向前门方向走。", "跟随开放出口离场，再导航天兴居鲜鱼口店。"],
        ["鲜鱼口早餐 → 故宫午门", "步行", "按45—55分钟预留通行与安检", "天安门至午门按南向北通行。", "07:25必须离店；没有更快的乘车捷径。"],
        ["神武门 → 午饭 / 酒店", "打车", "约25—40分钟，先走到可上车道路", "故宫北出、酒店在南，打车最省时。", "受管制时先随人流走到可叫车道路再下单。"],
        ["首都宾馆 → 奥林匹克公园", "地铁", "门到门约45—55分钟", "王府井站乘8号线直达。", "地铁临时停运或票面要求特殊集合点时改打车。"],
        ["奥园散场 → 什刹海", "地铁", "散场人流下按35—55分钟预留", "8号线往瀛海方向直达什刹海。", "22:50仍未进入交通系统就删什刹海。"],
        ["什刹海 → 夜宵 → 酒店", "打车", "分段约10—30分钟", "深夜分段目的地较散，打车最直接。", "先确认餐厅接客和等位，再叫车。"]
      ],
      journey: [
        { dispatch: 0, traffic: [0], transportDetails: ["#transport-saturday .journey-grid > .journey-leg:nth-child(1)"] },
        { dispatch: 1, traffic: [1], transportDetails: ["#transport-saturday .journey-grid > .journey-leg:nth-child(2)"], meals: [0] },
        { dispatch: 2, traffic: [2], switches: [0] },
        { dispatch: 3, details: ["#palace-plan"], switches: [2] },
        { dispatch: 4, traffic: [3], transportDetails: ["#transport-saturday .journey-grid > .journey-leg:nth-child(3)"], meals: [1], switches: [1] },
        { dispatch: 5, meals: [2] },
        { dispatch: 6, traffic: [4], transportDetails: ["#transport-saturday .journey-grid > .journey-leg:nth-child(4)"], details: ["#saturday .map-card"], switches: [3], forceSwitches: true },
        { dispatch: 7 },
        { dispatch: 8, traffic: [5, 6], transportDetails: ["#transport-saturday .journey-grid > .journey-leg:nth-child(5)", "#transport-saturday .journey-grid > .journey-leg:nth-child(6)", "#transport-saturday .journey-grid > .journey-leg:nth-child(7)"], details: ["#night-after-concert"], meals: [3], switches: [4, 5] }
      ],
      switches: [
        ["07:25", "早餐必须结束", "锦芳延迟开门就放弃甜点；08:30故宫入场不动。"],
        ["13:15", "白记仍未落座", "切平安锅贴，再不成立切席上喳喳；不把午休耗在等位上。"],
        ["13:00", "才离开故宫", "午饭选最快方案，仍保留至少30分钟休息。"],
        ["15:15", "离开酒店的最晚边界", "外卖仍未送到就停止等待；16:40停止奥园外围拍照，去票面入口。"],
        ["22:50", "仍未进入地铁或接驳交通", "删除什刹海；奥园夜景只在疏散过程中顺拍。"],
        ["23:10", "夜宵电话判断", "满恒记能接客、约23:30可落座且等位不超过10分钟才去；否则转北平三兄弟或回酒店。"]
      ],
      checks: [
        ["square", "天安门升旗预约与身份证", "保存预约成功截图和指定安检口；04:15离开酒店。"],
        ["palace", "故宫门票与珍宝馆", "确认9月12日票、入院证件和当日临时关闭区域；午门是唯一入口。"],
        ["concert", "演唱会票面入口", "座位公布后补票区颜色、检票口、禁限带物品；17:00进入实名核验。"],
        ["delivery", "14:25查看外卖时效", "平安锅贴首选、锦芳台基厂备选；两家都不可因等待拖过15:15。"],
        ["latehotpot", "保存两家夜宵电话", "散场后先确认满恒记是否接客和等位；北平三兄弟只在首选不成立时启用。"],
        ["weather", "出发前48小时看天气", "准备轻便雨具；大雨时缩短奥园与什刹海，不缩短入场缓冲。"]
      ],
      sourceLinks: [
        ["天安门官方升旗年表", "https://tamgw.beijing.gov.cn/sy/sjqsj/202512/t20251222_4356494.html"],
        ["故宫官方导览", "https://www.dpm.org.cn/Visit.html"],
        ["北京本地宝演唱会指南", "https://m.bj.bendibao.com/xiuxian/384930.html"],
        ["北京地铁线路查询", "https://www.bjsubway.com/station/xltcx/"]
      ],
      copy: "周六 9月12日\n03:45起床，04:15离店；05:52升旗。06:30天兴居、07:00锦芳，07:25去午门。08:30—12:30故宫。午饭白记优先，13:15未落座切平安锅贴，再切席上喳喳。13:50回房午休，14:25吃外卖，15:05左右离店。17:00到检票区，19:00演出。22:50已进入交通才去什刹海；23:10电话确认夜宵。"
    },
    sunday: {
      dispatch: "#execution .dispatch-card:nth-child(3)",
      route: "#sunday",
      transport: "#transport-sunday",
      meals: [
        { selector: "#sunday-breakfast", title: "08:15左右 · 去颐和园前早餐", note: "优先吃前一天漏掉的北京早点，并贴着4号线走。" },
        { selector: "#sunday-lunch", title: "12:40左右 · 颐和园内简餐", note: "20分钟内完成；不出园、不走回头路。" },
        { selector: "#sunday-pretrain", title: "15:40 / 16:05 · 返程前大餐", note: "周六没吃涮肉先补涮肉；已经吃到则烤肉刘优先。" }
      ],
      trafficDecisions: [
        ["首都宾馆 → 西四 / 平安里早餐", "打车", "约20—30分钟", "前一晚晚睡，短程打车减少绕行。", "道路异常时按实时导航改地铁，不推迟早餐。"],
        ["早餐店 → 西苑 → 东宫门", "地铁", "约35—45分钟，含步行", "西四、平安里均可乘4号线直达西苑。", "导航写完整的“颐和园东宫门”。"],
        ["新建宫门 → 晚饭 / 酒店", "打车", "约45—70分钟，按实时路况复核", "新建宫门无地铁直连，还要保住晚饭和火车。", "离园即叫车，不先转公交。"],
        ["酒店 / 最后一顿 → 北京南站", "打车", "约20—35分钟，17:25必须离店", "带行李直达进站层最省事。", "预计18:10后到就取消途中停留；路面严重拥堵时改走地铁。"]
      ],
      journey: [
        { dispatch: 0, traffic: [0], transportDetails: ["#transport-sunday .journey-grid > .journey-leg:nth-child(1)"], meals: [0] },
        { dispatch: 1, traffic: [1], transportDetails: ["#transport-sunday .journey-grid > .journey-leg:nth-child(2)"], switches: [0] },
        { dispatch: 2, transportDetails: ["#transport-sunday .journey-grid > .journey-leg:nth-child(3)"], details: ["#sunday .map-card", "#sunday .experience-grid"], meals: [1] },
        { dispatch: 3, details: ["#sunday .fallback-card"], switches: [1] },
        { dispatch: 4, traffic: [2], transportDetails: ["#transport-sunday .return-branches"], meals: [2], switches: [2, 3] },
        { dispatch: 5, traffic: [3], transportDetails: ["#transport-sunday .station-finish"], switches: [4, 5] }
      ],
      switches: [
        ["09:30", "仍未离开早餐店", "启用颐和园压缩线：删宫廷区细看与石舫，不动长廊、佛香阁、十七孔桥。"],
        ["13:00", "游船停航或排队超过25分钟", "立即改走东堤步行线，不回头、不等待下一班。"],
        ["14:40", "新建宫门必须离园", "周六没吃涮肉去满恒记；周六已吃涮肉先回酒店取行李，再去烤肉刘。"],
        ["15:50 / 16:15", "对应餐厅仍不能落座", "按所在分支切无需长等的备选；不再跨区追店。"],
        ["17:25", "任何餐厅统一离店", "未上齐的加菜取消，上车后核对高德预计到站时间。"],
        ["18:00", "进入北京南站", "保留约1小时安检和候车；如果导航预计18:10后到，取消所有途中停留。"]
      ],
      checks: [
        ["checkout", "退房并把行李寄存在酒店", "早餐前完成；保存行李牌，离园后按晚饭分支回来取。"],
        ["summerpalace", "颐和园门票与园中园", "确认东宫门入园、佛香阁是否开放；导航必须写完整门名。"],
        ["boat", "当天查看游船运行", "石舫—南湖岛段受天气影响；停航或等船超过25分钟立即走东堤。"],
        ["dinnerqueue", "离园前查看大餐排号", "按周六是否吃到涮肉决定类别，再看预计落座时间；17:25离店优先。"],
        ["train", "核对19:00北京南车次", "确认检票口、乘车人证件和取行李顺序；18:00前进入车站。"],
        ["weather", "出发前48小时看天气", "大风或大雨时默认游船不可靠，并给打车留更大路面缓冲。"]
      ],
      sourceLinks: [
        ["颐和园官方交通", "https://www.summerpalace.net.cn/single/detail/506.html"],
        ["颐和园官方网站", "https://summerpalace.net.cn/index.html"],
        ["嬉游餐馆资料台账", "资料归档/00-微信资料台账.md"]
      ],
      copy: "周日 9月13日\n07:45起床、退房寄存；早餐后乘4号线到西苑，步行到东宫门，目标10:10入园。宫廷区—长廊—佛香阁—20分钟简餐—石舫乘船或东堤—十七孔桥，14:40新建宫门离园。周六没吃涮肉去满恒记；已吃涮肉则取行李后去烤肉刘。17:25离店，18:00前进北京南站，19:00发车。"
    }
  };

  const confirmedMealDefaults = {
    fridayDinner: { primary: "四季民福前门大栅栏店", backup2: "便宜坊鲜鱼口旗舰店", backup3: "力力餐厅鲜鱼口店" },
    saturdayBreakfast: { primary: "天兴居＋锦芳双店早餐线", backup2: "增盛魁" },
    saturdayLunch: { primary: "白记肉饼", backup2: "平安锅贴西兴隆店", backup3: "席上喳喳" },
    preconcertDinner: { primary: "平安锅贴外卖到酒店", backup2: "锦芳台基厂店外卖到酒店" },
    saturdayLateNight: { primary: "满恒记平安里店周六夜宵", backup2: "北平三兄弟涮肉簋街店" },
    sundayBreakfast: { primary: "二友居西四包子铺", backup2: "护国寺小吃总店", backup3: "增盛魁" },
    sundayLunch: { primary: "排云殿东九间园内快餐", backup2: "颐和园售品点轻食" },
    sundayPretrain: { primary: "满恒记平安里西大街店周日晚饭", backup2: "烤肉刘虎坊桥老店周日晚饭", backup3: "聚宝源牛街创始店周日晚饭" }
  };

  const restaurantExecutionCopy = {
    "四季民福前门大栅栏店": "果木挂炉烤鸭现片上桌，主打酥香嫩烤鸭、贝勒烤肉和巧拌豆苗；作为抵京第一顿，仪式感最强。",
    "便宜坊鲜鱼口旗舰店": "焖炉不见明火，鸭肉水分更足；主打花香酥烤鸭、芥末鸭掌和干烧鸭四宝，是四季民福排队时的同片区替代。",
    "力力餐厅鲜鱼口店": "主打担担面、宫保鸡丁和鸡丝凉面；出餐较快，适合前两家无法按时落座时启用。",
    "天兴居＋锦芳双店早餐线": "06:30在天兴居吃炒肝和包子，06:50左右收住；07:00转锦芳吃豆汁、奶油炸糕和元宵，五样少量分食。",
    "增盛魁": "主打糖油饼、咸豆腐脑和门钉肉饼；只有路线确实经过东四时顺吃，不专程绕行。",
    "白记肉饼": "现烙牛肉饼馅大饼薄，可配羊杂汤或羊肉汤；店内座位少，预计等位超过15分钟就切换。",
    "平安锅贴西兴隆店": "猪肉倭瓜、猪肉韭菜和羊肉西葫芦锅贴是重点；份量和用时容易控制，适合白记排队时切换。",
    "席上喳喳": "主打丝娃娃、豆腐丸子和酸汤肉丸粉；想从京味早餐切到酸爽口味时选，用餐仍控制在60分钟内。",
    "平安锅贴外卖到酒店": "午饭吃白记后，这顿改点猪肉倭瓜、羊肉西葫芦或猪肉韭菜锅贴；在酒店吃完再出发。",
    "锦芳台基厂店外卖到酒店": "早餐已吃豆汁、炸糕和元宵，这顿改点羊杂汤、丸子汤或门钉肉饼；送到酒店后再吃。",
    "满恒记平安里店周六夜宵": "清汤铜锅涮鲜切羊肉，搭配爆肚和麻酱糖饼；只有约23:30能落座且等位不超过10分钟时前往。",
    "北平三兄弟涮肉簋街店": "营业至次日03:00，主打鲜切羊肉、鲜羊上脑和一口酥烧饼；满恒记不成立时启用。",
    "二友居西四包子铺": "距西四站D口约60米，吃完直接乘4号线北上；主吃猪肉大葱包子、麻酱豆腐汤，时间充足再加牛肉饼。",
    "护国寺小吃总店": "平安里站就在4号线上；本次优先面茶、羊杂汤和糖火烧，避开周六已经吃过的豆汁、炸糕和元宵。",
    "排云殿东九间园内快餐": "佛香阁下山后顺路经过；现场有热面或简餐且队伍短就吃，20分钟内结束。",
    "颐和园售品点轻食": "快餐档口排队时，在长廊西段或石舫方向买能立即吃的主食、蛋白和饮料，不为午饭回头。",
    "满恒记平安里西大街店周日晚饭": "平安里在颐和园回酒店的方向上；周六没吃到涮肉时，先吃铜锅涮肉，再回酒店取行李。",
    "烤肉刘虎坊桥老店周日晚饭": "牛羊肉片与葱、香菜铺在炙子上现烤；周六已经吃过涮肉时优先，吃完继续前往北京南站。",
    "聚宝源牛街创始店周日晚饭": "认准牛街创始店，重点吃手切羊肉、高钙羔羊肉和一品烧饼；只在能够及时落座时启用。"
  };

  const restaurantRiskCopy = {
    "四季民福前门大栅栏店": ["换店条件", "18:05线上取号；19:35查看进度，20:00前仍不能落座就换店。"],
    "便宜坊鲜鱼口旗舰店": ["启用条件", "四季民福无法按时落座时启用；21:10开始回酒店。"],
    "力力餐厅鲜鱼口店": ["启用条件", "20:00前到店且前两家都不成立时启用；21:10开始回酒店。"],
    "天兴居＋锦芳双店早餐线": ["硬截止", "07:00锦芳未开门就放弃甜点或外带；07:25离开。"],
    "增盛魁": ["启用条件", "只有路线确实经过东四时启用，不专程绕路。"],
    "白记肉饼": ["换店条件", "预计13:15后进店或排队超过15分钟，切平安锅贴。"],
    "平安锅贴西兴隆店": ["启用条件", "白记无法落座时启用；仍要为午休留出时间。"],
    "席上喳喳": ["换店条件", "13:10到店仍需等位时切平安锅贴，不侵占午休。"],
    "平安锅贴外卖到酒店": ["换店条件", "14:20看时效；超过25分钟、不可下单或主要菜售罄就切锦芳，15:00停止等待。"],
    "锦芳台基厂店外卖到酒店": ["启用条件", "平安锅贴不可下单、时效更慢或想喝热汤时启用；15:00停止等待。"],
    "满恒记平安里店周六夜宵": ["启用条件", "约23:30能到、仍接新桌、等位≤10分钟且能正常用餐，四项同时满足才去。"],
    "北平三兄弟涮肉簋街店": ["晚睡边界", "满恒记不成立时启用；控制在60—75分钟，等位超过15分钟就改轻量夜宵。"],
    "二友居西四包子铺": ["点单取舍", "肉饼另等约15分钟；时间紧就先吃包子和麻酱豆腐汤。"],
    "护国寺小吃总店": ["门店与去重", "认准护国寺街总店；周六京味小吃已经吃得很满足时，仍以二友居为先。"],
    "排云殿东九间园内快餐": ["十分钟规则", "排队或等餐超过10分钟就切售品点；14:40离园不动。"],
    "颐和园售品点轻食": ["现场底线", "12:55仍没买到就继续向石舫走；13:00后不为午饭回头。"],
    "满恒记平安里西大街店周日晚饭": ["启用条件", "仅在周六没吃到涮肉时优先；15:50仍不能落座就切换，17:25前离店。"],
    "烤肉刘虎坊桥老店周日晚饭": ["跨天规则", "周六已吃涮肉且周五没吃烤肉刘时优先；17:25必须离店。"],
    "聚宝源牛街创始店周日晚饭": ["换店条件", "离园后先看号；16:15仍不能落座就放弃，不带行李久等。"]
  };

  const config = configs[day];
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const readState = () => {
    try { return JSON.parse(localStorage.getItem(storageKey)) || {}; }
    catch { return {}; }
  };
  const saveState = (patch) => localStorage.setItem(storageKey, JSON.stringify({ ...readState(), ...patch }));
  const escapeText = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));

  const isMapLink = (href = "") => /^https:\/\/(?:www\.)?(?:ditu\.)?amap\.com\//i.test(href) || /^https:\/\/maps\.apple\.com\//i.test(href);

  const cleanChoiceLabel = (value = "") => value
    .replace(/嬉游推荐|嬉游评论补充|嬉游评论路线|嬉游评论区|北京旅游网老字号|北京旅游网推荐|北京文旅资料|园方服务点|劳保推荐|高德\s*\/\s*大众点评补充|大众点评补充|作者直接背书/g, "")
    .replace(/^\s*·\s*|\s*·\s*$/g, "")
    .replace(/\s*·\s*·\s*/g, " · ")
    .trim();

  const compactStageBrief = (value = "") => value
    .replace("按已经确认的顺位执行：", "")
    .replace("按已确认餐饮顺位执行：", "")
    .replace("白记为已确认午饭首选", "白记优先")
    .replace("首选预计20:00前仍不能落座，就立刻展开并切换备选", "20:00前仍不能落座就切换备选");

  const cleanExecutionContent = (root) => {
    if (!root) return root;

    $$(".platform-audit-note, .excluded-food, .placement-grid, .breakfast-filter-note.lunch-rule, .shichahai-proof, .night-meal-placeholder", root)
      .forEach((node) => node.remove());
    $$(".evidence", root).forEach((node) => node.remove());
    if (root.id === "sunday-breakfast") $(".breakfast-radar", root)?.remove();
    if (root.id === "late-night") $(".lunch-route", root)?.remove();
    if (root.id === "sunday-pretrain") $(".lunch-route", root)?.remove();
    if (root.id === "night-after-concert") {
      $(".egress-bar", root)?.remove();
      const nightSteps = $$(".night-route article", root);
      nightSteps[1]?.remove();
      nightSteps[2]?.remove();
      const nightTitle = $(".panel-title > span", root);
      const nightNote = $(".panel-title > small", root);
      if (nightTitle) nightTitle.textContent = "夜景只留两个停留点";
      if (nightNote) nightNote.textContent = "奥园随疏散顺拍；什刹海只走银锭桥与后海南岸";
    }

    const intro = $(".meal-decision-head > div:first-child > p:last-of-type", root);
    intro?.remove();

    $$(".restaurant-card", root).forEach((card) => {
      const candidate = card.dataset.foodCandidate;
      const summary = restaurantExecutionCopy[candidate];
      const introParagraph = $(":scope > p", card);
      if (summary && introParagraph) introParagraph.textContent = summary;

      const titleLabel = $(".restaurant-title > span", card);
      if (titleLabel) {
        const cleaned = cleanChoiceLabel(titleLabel.textContent);
        titleLabel.textContent = cleaned || "本次安排";
      }

      $$("dd", card).forEach((item) => {
        item.textContent = item.textContent
          .replace(/嬉游资料/g, "参考")
          .replace(/公开资料/g, "参考");
      });

      const riskCopy = restaurantRiskCopy[candidate];
      const risk = $(".restaurant-risk", card);
      if (riskCopy && risk) risk.innerHTML = "<b>" + escapeText(riskCopy[0]) + "</b>" + escapeText(riskCopy[1]);
    });

    $$(".source-links", root).forEach((container) => {
      $$("a", container).forEach((link) => {
        if (!isMapLink(link.href)) link.remove();
        else link.textContent = "打开地图 ↗";
      });
      $$("a", container).slice(1).forEach((link) => link.remove());
      if (!container.querySelector("a")) container.remove();
    });

    $$("a", root).forEach((link) => {
      if (isMapLink(link.href)) return;
      if (/嬉游|原文|依据|资料|参考|介绍|公开数据|公开页|品牌/.test(link.textContent)) link.remove();
    });

    const beijingFun = $$(".experience-grid article", root).find((item) => $("h3", item)?.textContent.trim() === "北京坊");
    if (beijingFun) $("p", beijingFun).textContent = "PAGEONE、现代商业空间和前门历史街区同框，适合看老城如何进入今天的城市生活。";

    const jingshan = $$(".branch-choices article", root).find((item) => $("h3", item)?.textContent.trim() === "提前出宫＋景山");
    if (jingshan) {
      $("span", jingshan).textContent = "现场可加";
      $("p", jingshan).textContent = "仅当11:30前已出神武门且体力很好时成立；否则继续故宫主线。";
    }

    const nightBanner = $("#night-after-concert .recommendation-banner", root);
    if (nightBanner) nightBanner.innerHTML = "<b>预计休息时间</b><span>满恒记成立约01:30入睡；转北平三兄弟约02:00—02:30。22:50仍未进入交通系统就删什刹海。</span>";

    return root;
  };

  let toastTimer;
  const showToast = (message) => {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
  };

  const initialiseDefaults = () => {
    const state = readState();
    const patch = {};
    Object.entries(confirmedMealDefaults).forEach(([mealKey, defaults]) => {
      const saved = state[mealKey] || {};
      if (!saved.primary) patch[mealKey] = { ...defaults, ...saved };
    });
    if (Object.keys(patch).length) saveState(patch);
  };

  const arrangeConfirmedChoices = (group, ranking) => {
    const cards = $$('[data-food-candidate]', group);
    if (!cards.length) return;
    const primary = cards.find((card) => card.dataset.foodCandidate === ranking.primary) || cards[0];
    const orderedNames = [ranking.backup2, ranking.backup3].filter(Boolean);
    const confirmedNames = new Set([primary.dataset.foodCandidate, ...orderedNames]);
    cards.filter((card) => !confirmedNames.has(card.dataset.foodCandidate)).forEach((card) => card.remove());
    const alternatives = cards
      .filter((card) => card !== primary && confirmedNames.has(card.dataset.foodCandidate))
      .sort((a, b) => {
        const aIndex = orderedNames.indexOf(a.dataset.foodCandidate);
        const bIndex = orderedNames.indexOf(b.dataset.foodCandidate);
        return (aIndex < 0 ? 99 : aIndex) - (bIndex < 0 ? 99 : bIndex);
      });

    const zone = document.createElement("section");
    zone.className = "confirmed-choice-zone";
    zone.innerHTML = `
      <header class="confirmed-choice-title"><span>本顿安排</span><div><h4>首选</h4><p>首选无法落座、停业或触发止损条件时，再展开备选。</p></div></header>
      <div class="confirmed-primary-grid"></div>
      ${alternatives.length ? `<details class="confirmed-alternatives"><summary><b>展开备选</b><span>共 ${alternatives.length} 项</span></summary><div class="alternative-card-grid"></div></details>` : ""}`;

    const firstGroup = cards[0].closest(".candidate-group");
    const insertionPoint = firstGroup || cards[0].parentElement;
    insertionPoint.parentElement.insertBefore(zone, insertionPoint);
    const primaryBadge = document.createElement("div");
    primaryBadge.className = "choice-status is-primary";
    primaryBadge.textContent = "首选";
    primary.prepend(primaryBadge);
    primary.dataset.selectedRank = "primary";
    $(".confirmed-primary-grid", zone).append(primary);

    alternatives.forEach((card) => {
      const rank = ranking.backup2 === card.dataset.foodCandidate ? "backup2" : ranking.backup3 === card.dataset.foodCandidate ? "backup3" : "";
      const badge = document.createElement("div");
      badge.className = "choice-status";
      badge.textContent = rank === "backup2" ? "备选二" : "备选三";
      card.prepend(badge);
      if (rank) card.dataset.selectedRank = rank;
      else delete card.dataset.selectedRank;
      $(".alternative-card-grid", zone)?.append(card);
    });

    $$(".candidate-group", group).forEach((candidateGroup) => candidateGroup.remove());
    $(".food-ranking", group)?.remove();
    $$(".rank-actions", group).forEach((actions) => actions.remove());
  };

  const bindRankings = () => {
    $$('[data-meal-key]').forEach((group) => {
      const mealKey = group.dataset.mealKey;
      const candidates = new Set($$('[data-food-candidate]', group).map((card) => card.dataset.foodCandidate));
      const saved = readState()[mealKey] || {};
      const defaults = confirmedMealDefaults[mealKey] || {};
      const ranking = Object.fromEntries(Object.entries({ ...defaults, ...saved }).filter(([, value]) => candidates.has(value)));
      arrangeConfirmedChoices(group, ranking);
    });
  };

  const createMealChapter = (source, mealIndex) => {
    const meal = config.meals[mealIndex];
    const panel = meal ? source.querySelector(meal.selector)?.cloneNode(true) : null;
    if (!panel) return null;
    panel.hidden = false;
    panel.removeAttribute("hidden");
    panel.classList.add("daily-meal-panel");
    cleanExecutionContent(panel);
    const chapter = document.createElement("section");
    chapter.className = "journey-meal";
    chapter.innerHTML = `<header><span>本段用餐</span><div><b>${escapeText(meal.title)}</b></div></header>`;
    chapter.append(panel);
    return chapter;
  };

  const createTrafficBlock = (trafficIndexes = []) => {
    if (!trafficIndexes.length) return null;
    const block = document.createElement("section");
    block.className = "journey-traffic";
    block.innerHTML = `<header><span>怎么走</span><b>交通选择</b></header><div class="journey-traffic-grid">${trafficIndexes.map((trafficIndex) => {
      const [routeName, mode, estimate, reason, fallback] = config.trafficDecisions[trafficIndex];
      return `<article><div class="journey-traffic-route"><span>${escapeText(routeName)}</span><b>${escapeText(mode)}</b></div><strong>${escapeText(estimate)}</strong><p>${escapeText(reason)}</p><small><em>切换条件</em>${escapeText(fallback)}</small></article>`;
    }).join("")}</div>`;
    return block;
  };

  const createSwitchBlock = (switchIndexes = []) => {
    if (!switchIndexes.length) return null;
    const block = document.createElement("section");
    block.className = "journey-switches";
    block.innerHTML = `<header><span>到场判断</span><b>本段只看这些时间边界</b></header><div>${switchIndexes.map((switchIndex) => {
      const [time, title, body] = config.switches[switchIndex];
      return `<article><time>${escapeText(time)}</time><div><b>${escapeText(title)}</b><p>${escapeText(body)}</p></div></article>`;
    }).join("")}</div>`;
    return block;
  };

  const createDetailBlock = (source, selectors = []) => {
    if (!selectors.length) return null;
    const block = document.createElement("section");
    block.className = "journey-local-details";
    selectors.forEach((selector) => {
      const detail = source.querySelector(selector)?.cloneNode(true);
      if (detail) block.append(cleanExecutionContent(detail));
    });
    return block.childElementCount ? block : null;
  };

  const createTransportDetails = (source, selectors = []) => {
    if (!selectors.length) return null;
    const block = document.createElement("section");
    block.className = "journey-transport-details";
    block.innerHTML = `<header><span>具体走法</span><b>站口、方向与落地动作</b></header><div></div>`;
    const content = $(":scope > div", block);
    selectors.forEach((selector) => {
      const detail = source.querySelector(selector)?.cloneNode(true);
      if (detail) content.append(detail);
    });
    return content.childElementCount ? block : null;
  };

  const renderJourney = (source, dispatch) => {
    const dispatchItems = $$(".dispatch-list > li", dispatch);
    const root = $("#journeyContent");
    root.innerHTML = `
      <header class="journey-heading"><p class="eyebrow">当天路线</p><h2>走一段，看一段</h2><p>展开当前路段，查看走法、吃饭和切换条件。</p></header>
      <div class="journey-progress" aria-label="当天路线进度">${config.journey.map((_, index) => `<a href="#stage-${day}-${index + 1}"><span>${String(index + 1).padStart(2, "0")}</span></a>`).join("")}</div>
      <div class="journey-flow"></div>`;
    const flow = $(".journey-flow", root);

    config.journey.forEach((step, index) => {
      const sourceItem = dispatchItems[step.dispatch];
      if (!sourceItem) return;
      const time = $("time", sourceItem)?.textContent?.trim() || "按现场";
      const title = $("b", sourceItem)?.textContent?.trim() || `第${index + 1}段`;
      const body = compactStageBrief($("p", sourceItem)?.textContent?.trim() || "");
      const state = sourceItem.classList.contains("live") ? "现场判断" : sourceItem.classList.contains("hard") ? "硬截止" : "按计划";
      const showBrief = body && !step.transportDetails?.length && !step.details?.length;
      const stage = document.createElement("details");
      stage.className = "journey-stage";
      stage.id = `stage-${day}-${index + 1}`;
      stage.open = index === 0;
      stage.innerHTML = `
        <summary><span class="stage-number">${String(index + 1).padStart(2, "0")}</span><time>${escapeText(time)}</time><div><small>${escapeText(state)}</small><h3>${escapeText(title)}</h3></div><i>展开本段</i></summary>
        <div class="journey-stage-body">${showBrief ? `<p class="stage-brief">${escapeText(body)}</p>` : ""}</div>`;
      const bodyNode = $(".journey-stage-body", stage);
      const traffic = step.transportDetails?.length ? null : createTrafficBlock(step.traffic);
      const transportDetails = createTransportDetails(source, step.transportDetails);
      const details = createDetailBlock(source, step.details);
      const switches = step.transportDetails?.length && !step.forceSwitches ? null : createSwitchBlock(step.switches);
      if (traffic) bodyNode.append(traffic);
      if (transportDetails) bodyNode.append(transportDetails);
      if (details) bodyNode.append(details);
      (step.meals || []).forEach((mealIndex) => {
        const meal = createMealChapter(source, mealIndex);
        if (meal) bodyNode.append(meal);
      });
      if (switches) bodyNode.append(switches);
      if (index < config.journey.length - 1) {
        const next = document.createElement("button");
        next.type = "button";
        next.className = "journey-next";
        next.dataset.nextStage = `stage-${day}-${index + 2}`;
        next.innerHTML = `<span>本段看完</span><b>打开下一段 →</b>`;
        bodyNode.append(next);
      }
      flow.append(stage);
    });
  };

  const bindJourney = () => {
    $$('[data-next-stage]').forEach((button) => button.addEventListener("click", () => {
      const current = button.closest(".journey-stage");
      const next = document.getElementById(button.dataset.nextStage);
      if (!next) return;
      current.open = false;
      next.open = true;
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
  };

  const viewStorageKey = "beijing-weekend-view-mode";
  const applyViewMode = (mode, persist = false) => {
    const resolved = mode === "mobile" ? "mobile" : "desktop";
    document.body.dataset.view = resolved;
    const button = $("#viewMode");
    if (button) {
      button.textContent = resolved === "mobile" ? "切到桌面版" : "切到手机版";
      button.setAttribute("aria-pressed", String(resolved === "mobile"));
    }
    if (persist) localStorage.setItem(viewStorageKey, resolved);
  };

  const initialiseViewMode = () => {
    const stored = localStorage.getItem(viewStorageKey);
    applyViewMode(stored || (matchMedia("(max-width: 820px)").matches ? "mobile" : "desktop"));
    $("#viewMode")?.addEventListener("click", () => {
      const next = document.body.dataset.view === "mobile" ? "desktop" : "mobile";
      applyViewMode(next, true);
      showToast(next === "mobile" ? "已切换为手机版" : "已切换为桌面版");
    });
  };

  const bindChecks = () => {
    const state = readState();
    const checks = state.checks || {};
    $$('[data-check]').forEach((input) => {
      input.checked = Boolean(checks[input.dataset.check]);
      input.addEventListener("change", () => {
        const current = readState();
        saveState({ checks: { ...(current.checks || {}), [input.dataset.check]: input.checked } });
        showToast(input.checked ? "已记为完成" : "已取消完成");
      });
    });
  };

  const renderChecks = () => {
    const operationalLinks = config.sourceLinks.filter(([label, href]) => !href.startsWith("资料归档/") && !/嬉游|资料台账/.test(label));
    const links = operationalLinks.length
      ? `<div class="daily-sources"><b>实时入口</b>${operationalLinks.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${escapeText(label)} ↗</a>`).join("")}</div>`
      : "";
    $("#before-you-go").innerHTML = `
      <header><p class="eyebrow">出发前与当天凭证</p><h2>只核对今天会用到的东西</h2><p>完成一项，勾选一项。</p></header>
      <div class="checklist daily-checklist">${config.checks.map(([key, title, body]) => `
        <label><input type="checkbox" data-check="${escapeText(key)}"><span></span><div><b>${escapeText(title)}</b><p>${escapeText(body)}</p></div></label>`).join("")}</div>
      ${links}`;
  };

  const openHashChapter = () => {
    const target = location.hash ? $(location.hash) : null;
    const details = target?.closest("details");
    if (details) details.open = true;
  };

  const loadPage = async () => {
    if (!config) throw new Error("无法识别日期");
    initialiseDefaults();
    const response = await fetch("source.html?all=1", { cache: "no-store" });
    if (!response.ok) throw new Error("主攻略读取失败");
    const source = new DOMParser().parseFromString(await response.text(), "text/html");

    const dispatch = source.querySelector(config.dispatch)?.cloneNode(true);
    if (!dispatch) throw new Error("当天资料不完整");
    renderJourney(source, dispatch);
    renderChecks();
    bindRankings();
    bindJourney();
    bindChecks();

    $("#selectFallback")?.addEventListener("click", (event) => {
      const selected = !event.currentTarget.classList.contains("selected");
      event.currentTarget.classList.toggle("selected", selected);
      event.currentTarget.textContent = selected ? "已记住：停航或起晚走压缩线" : "记住这条压缩路线";
      saveState({ fallback: selected });
      showToast(selected ? "已记住压缩路线" : "已取消压缩路线");
    });

    $$('a[href^="#"]').forEach((link) => link.addEventListener("click", () => setTimeout(openHashChapter, 0)));
    window.addEventListener("hashchange", openHashChapter);
    openHashChapter();
    $("#dailyLoading").hidden = true;
    document.body.classList.add("daily-ready");
  };

  $("#copyDay")?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(config.copy);
      showToast("当天行程已复制");
    } catch {
      showToast("复制失败，请手动选择时间表");
    }
  });

  initialiseViewMode();
  loadPage().catch((error) => {
    $("#dailyLoading").innerHTML = `<b>当天手册没有成功载入</b><p>${escapeText(error.message)}。请刷新页面。</p>`;
  });
})();
