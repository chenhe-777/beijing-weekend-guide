(() => {
  const checkKey = "beijing-weekend-prep-2026";
  const viewKey = "beijing-weekend-view-mode";
  const checks = [...document.querySelectorAll("[data-prep-check]")];
  const toast = document.getElementById("toast");

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
  };

  const readChecks = () => {
    try { return JSON.parse(localStorage.getItem(checkKey)) || {}; }
    catch { return {}; }
  };

  const saved = readChecks();
  checks.forEach((input) => {
    const confirmed = input.dataset.confirmed === "true";
    input.checked = confirmed || Boolean(saved[input.dataset.prepCheck]);
    input.disabled = confirmed;
    input.addEventListener("change", () => {
      const next = readChecks();
      next[input.dataset.prepCheck] = input.checked;
      localStorage.setItem(checkKey, JSON.stringify(next));
      showToast(input.checked ? "已记为完成" : "已取消完成");
    });
  });

  const applyView = (mode, persist = false) => {
    const value = mode === "mobile" ? "mobile" : "desktop";
    document.body.dataset.view = value;
    const button = document.getElementById("viewMode");
    if (button) {
      button.textContent = value === "mobile" ? "切到桌面版" : "切到手机版";
      button.setAttribute("aria-pressed", String(value === "mobile"));
    }
    if (persist) localStorage.setItem(viewKey, value);
  };

  applyView(localStorage.getItem(viewKey) || (matchMedia("(max-width: 820px)").matches ? "mobile" : "desktop"));
  document.getElementById("viewMode")?.addEventListener("click", () => {
    applyView(document.body.dataset.view === "mobile" ? "desktop" : "mobile", true);
    showToast(document.body.dataset.view === "mobile" ? "已切换为手机版" : "已切换为桌面版");
  });

  document.getElementById("copyPrep")?.addEventListener("click", async () => {
    const packingChecks = [...document.querySelectorAll("#packing [data-prep-check]")];
    const packing = packingChecks
      .map((input) => input.closest("label")?.querySelector("b")?.textContent?.trim())
      .filter(Boolean)
      .map((item) => `□ ${item}`)
      .join("\n");
    const text = `北京个人行前准备\n天气：9月11—13日晴，约14—29℃；短袖＋轻便长裤＋薄外套，不带厚外套\n已完成：9月12日天安门升旗，03:30—04:52，广场东侧路北安检03\n已完成：9月12日故宫上午场、钟表馆和珍宝馆\n已完成：9月13日颐和园4张上午票，09:00—12:00入园；佛香阁园中园票待加购\n演唱会座位：L区150通道，一层31排16—19号；指定检票口待主办方通知\n去程：G40 杭州东13:00—北京南17:41\n返程：G49 北京南19:04—杭州东23:21\n\n我的物品清单\n${packing}\n\n演唱会禁带：食品饮料、打火机、专业摄影器材、三脚架、灯牌、手幅、横幅、旗帜、发光物、激光笔和自制应援物`;
    try {
      await navigator.clipboard.writeText(text);
      showToast("行前清单已复制");
    } catch {
      showToast("复制失败，请手动选择清单");
    }
  });
})();
