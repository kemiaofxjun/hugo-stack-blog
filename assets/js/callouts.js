(function () {
  const TYPES = {
    "[!NOTE]":      { cls: "note",      icon: "💬" },
    "[!TIP]":       { cls: "tip",       icon: "💡" },
    "[!IMPORTANT]": { cls: "important", icon: "❗" },
    "[!WARNING]":   { cls: "warning",   icon: "⚠️" },
  };

  function normalize(text) {
    return (text || "").trimStart();
  }

  function matchType(text) {
    const t = normalize(text);
    for (const key of Object.keys(TYPES)) {
      if (t.startsWith(key)) return key;
    }
    return null;
  }

  function stripMarker(html, marker) {
    // 仅移除段落起始处的标记，保留后续 HTML
    const re = new RegExp("^\\s*" + marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*", "i");
    return html.replace(re, "");
    // 若你担心大小写，已加 i 标志
  }

  function transformBlockquote(bq) {
    if (!bq) return;

    // 只处理以 [!...] 开头的 blockquote
    const first = bq.firstElementChild;
    if (!first || first.tagName !== "P") return;

    const markerKey = matchType(first.textContent);
    if (!markerKey) return;

    const { cls, icon } = TYPES[markerKey];

    // 清理标记
    first.innerHTML = stripMarker(first.innerHTML, markerKey);

    // 构建结构：icon + content
    bq.classList.add("callout", cls);

    // 若已处理过，跳过
    if (bq.querySelector(".callout-icon")) return;

    const iconEl = document.createElement("div");
    iconEl.className = "callout-icon";
    iconEl.textContent = icon;

    const contentWrap = document.createElement("div");
    contentWrap.className = "callout-content";
    // 把原本的子节点全部移入 content 容器
    while (bq.firstChild) contentWrap.appendChild(bq.firstChild);

    bq.appendChild(iconEl);
    bq.appendChild(contentWrap);
  }

  function run() {
    document.querySelectorAll("blockquote").forEach(transformBlockquote);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
