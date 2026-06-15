const baseDishes = [
  { name: "尖椒肉丝", price: 25, category: "家常小炒" },
  { name: "笋干炒肉", price: 25, category: "家常小炒" },
  { name: "蒜苔炒肉", price: 20, category: "家常小炒" },
  { name: "香菇炒肉", price: 20, category: "家常小炒" },
  { name: "肉末茄子", price: 20, category: "家常小炒" },
  { name: "干张炒肉", price: 18, category: "家常小炒" },
  { name: "腐竹炒肉", price: 18, category: "家常小炒" },
  { name: "王中王火腿肠炒蛋", price: 20, category: "家常小炒" },
  { name: "香干炒肉", price: 18, category: "家常小炒" },
  { name: "酸菜炒肉", price: 20, category: "家常小炒" },
  { name: "丝瓜炒蛋", price: 18, category: "家常小炒" },
  { name: "苦瓜炒蛋", price: 18, category: "家常小炒" },
  { name: "炒藕片", price: 16, category: "家常小炒" },
  { name: "韭菜炒蛋", price: 18, category: "家常小炒" },
  { name: "葱花炒蛋", price: 16, category: "家常小炒" },
  { name: "黄瓜炒火腿肠", price: 18, category: "家常小炒" },
  { name: "西红柿炒蛋", price: 18, category: "家常小炒" },
  { name: "江豆炒粉", price: 20, category: "家常小炒" },
  { name: "麻辣土豆片", price: 15, category: "家常小炒" },
  { name: "外婆菜炒肉片", price: 20, category: "家常小炒" },
  { name: "咸菜小笋", price: 25, category: "家常小炒" },
  { name: "木耳炒肉", price: 18, category: "家常小炒" },

  { name: "酸辣土豆丝", price: 13, category: "田园时蔬" },
  { name: "蒜泥生菜", price: 15, category: "田园时蔬" },
  { name: "清炒空心菜", price: 15, category: "田园时蔬" },
  { name: "酸辣白菜", price: 13, category: "田园时蔬" },
  { name: "油麦菜", price: 15, category: "田园时蔬" },
  { name: "家常豆腐", price: 15, category: "田园时蔬" },
  { name: "麻辣豆腐", price: 13, category: "田园时蔬" },
  { name: "爆炒豆芽", price: 13, category: "田园时蔬" },
  { name: "青椒炒蛋", price: 18, category: "田园时蔬" },
  { name: "手撕包菜", price: 13, category: "田园时蔬" },

  { name: "西红柿蛋汤", price: 13, category: "暖味汤类", type: "soup" },
  { name: "紫菜蛋汤", price: 13, category: "暖味汤类", type: "soup" },
  { name: "榨菜肉丝汤", price: 15, category: "暖味汤类", type: "soup" },
  { name: "丝瓜蛋汤", price: 13, category: "暖味汤类", type: "soup" },
  { name: "黄瓜皮蛋汤", price: 15, category: "暖味汤类", type: "soup" },
  { name: "酸辣汤", price: 15, category: "暖味汤类", type: "soup" },
  { name: "玉米排骨汤", price: 48, category: "暖味汤类", type: "soup" },
  { name: "猪肝肉片汤", price: 20, category: "暖味汤类", type: "soup" },
  { name: "山药排骨汤", price: 45, category: "暖味汤类", type: "soup" },

  { name: "干锅牛蛙", price: 55, category: "干锅类" },
  { name: "干锅牛杂", price: 58, category: "干锅类" },
  { name: "干锅肥肠", price: 55, category: "干锅类" },
  { name: "干锅油焖白菜", price: 28, category: "干锅类" },
  { name: "干锅花菜", price: 28, category: "干锅类" },
  { name: "干锅杏鲍菇", price: 45, category: "干锅类" },
  { name: "干锅土豆片", price: 30, category: "干锅类" },
  { name: "干锅包菜", price: 30, category: "干锅类" },
  { name: "干锅干叶豆腐", price: 30, category: "干锅类" },

  { name: "龙虾", price: 98, category: "特色菜" },
  { name: "特色烤鱼", price: 138, category: "特色菜", type: "fish" },
  { name: "肥肠鸡钵包鱼", price: 98, category: "特色菜", type: "fish" },
  { name: "五花肉鸡钵包鱼", price: 118, category: "特色菜", type: "fish" },
  { name: "特色肥肠鸡", price: 55, category: "特色菜" },
  { name: "手抓扇子骨", price: 55, category: "特色菜" },
  { name: "泡椒牛蛙", price: 55, category: "特色菜" },
  { name: "小炒黄牛肉", price: 42, category: "特色菜" },
  { name: "猪蹄压黄豆", price: 48, category: "特色菜" },
  { name: "干锅黄金虾", price: 55, category: "特色菜" },
  { name: "莲花鸭血", price: 48, category: "特色菜" },
  { name: "水煮牛肉", price: 55, category: "特色菜" },
  { name: "椒盐小酥肉", price: 32, category: "特色菜" },
  { name: "毛血旺", price: 50, category: "特色菜" },
  { name: "红烧河虾", price: 45, category: "特色菜" },
  { name: "河虾", price: 55, category: "特色菜" },
  { name: "腊肉", price: 35, category: "特色菜" },
  { name: "粉蒸肉", price: 35, category: "特色菜" },
  { name: "铜炉土鸡", price: 98, category: "特色菜" },

  { name: "爆炒腰花", price: 45, category: "盖菜类" },
  { name: "红烧鸡爪", price: 39, category: "盖菜类" },
  { name: "黄豆烧鸡爪", price: 42, category: "盖菜类" },
  { name: "红烧带鱼", price: 45, category: "盖菜类", type: "fish" },
  { name: "土炒鸡", price: 35, category: "盖菜类" },
  { name: "尖椒猪耳朵", price: 38, category: "盖菜类" },
  { name: "农家香小炒肉", price: 32, category: "盖菜类" },
  { name: "红烧排骨仔排", price: 48, category: "盖菜类" },
  { name: "辣子鸡", price: 35, category: "盖菜类" },
  { name: "土猪腊肉", price: 58, category: "盖菜类" },
  { name: "酸萝卜鸡胗", price: 35, category: "盖菜类" },
  { name: "爆炒猪肝", price: 28, category: "盖菜类" },
  { name: "爆炒牛肚", price: 45, category: "盖菜类" },
  { name: "干煸猪肺", price: 28, category: "盖菜类" },
  { name: "尖椒猪肚", price: 42, category: "盖菜类" },
  { name: "外婆菜", price: 20, category: "盖菜类" },
  { name: "梅菜扣肉", price: 35, category: "盖菜类" },
  { name: "糯米鸡杂", price: 35, category: "盖菜类" },
  { name: "糖醋里脊", price: 42, category: "盖菜类" },

  { name: "金汤酸菜鱼", price: 58, category: "鱼类", type: "fish" },
  { name: "水煮鱼", price: 58, category: "鱼类", type: "fish" },
  { name: "红烧鲫鱼", price: 38, category: "鱼类", type: "fish" },
  { name: "干锅鱼子鱼泡", price: 58, category: "鱼类", type: "fish" },
  { name: "昂刺鱼烧豆腐", price: 48, category: "鱼类", type: "fish" },
  { name: "剁椒鱼头", price: 58, category: "鱼类", type: "fish" },
].map((dish, index) => ({ id: index + 1, ...dish }));

const weeklyPlansKey = "lunch-picker-weekly-plans-v1";
const dishRatingsKey = "lunch-picker-dish-ratings-v1";
const activeTabKey = "lunch-picker-active-tab-v1";
const categoryDataKey = "lunch-picker-category-data-v1";
const categoryDataVersion = 2;
const cloudSyncConfigKey = "lunch-picker-cloud-sync-config-v1";
const supabaseRoomKey = "lunch-picker-supabase-room-v1";
const supabaseAutoSyncKey = "lunch-picker-supabase-auto-sync-v1";
const supabaseRestUrl = "https://imngjwetsqqjjibfizfb.supabase.co/rest/v1";
const supabasePublishableKey = "sb_publishable_b6Em1XU-eeO_nLwv9SlPZQ_n0Bcp1Ek";
const DEFAULT_CATEGORY = "未分类";
const exclusionTags = ["内脏", "鱼类", "豆制品", "汤类", "辣口", "干锅", "大菜", "高价菜", "重口菜"];

let dishes = [];
let categoryCatalog = [];
let currentPlan = [];
let fixedDishIds = new Set();
let calendarDate = new Date();

const elements = {
  tabButtons: document.querySelectorAll("[data-tab]"),
  tabPanels: document.querySelectorAll("[data-tab-panel]"),
  peopleCount: document.querySelector("#people-count"),
  totalBudget: document.querySelector("#total-budget"),
  tablewareFee: document.querySelector("#tableware-fee"),
  discount: document.querySelector("#discount"),
  dishCount: document.querySelector("#dish-count"),
  category: document.querySelector("#category"),
  minRating: document.querySelector("#min-rating"),
  menuSearch: document.querySelector("#menu-search"),
  excludedTags: document.querySelector("#excluded-tags"),
  generateButton: document.querySelector("#generate-button"),
  saveWeeklyPlan: document.querySelector("#save-weekly-plan"),
  clearPlan: document.querySelector("#clear-plan"),
  clearWeekly: document.querySelector("#clear-weekly"),
  planSearch: document.querySelector("#plan-search"),
  planSearchResults: document.querySelector("#plan-search-results"),
  planList: document.querySelector("#plan-list"),
  budgetStatus: document.querySelector("#budget-status"),
  dishSubtotal: document.querySelector("#dish-subtotal"),
  tablewareTotal: document.querySelector("#tableware-total"),
  beforeDiscountTotal: document.querySelector("#before-discount-total"),
  discountLabel: document.querySelector("#discount-label"),
  finalTotal: document.querySelector("#final-total"),
  perPerson: document.querySelector("#per-person"),
  weeklyList: document.querySelector("#weekly-list"),
  dishGrid: document.querySelector("#dish-grid"),
  candidateCount: document.querySelector("#candidate-count"),
  calendarGrid: document.querySelector("#calendar-grid"),
  calendarMonth: document.querySelector("#calendar-month"),
  calendarSummary: document.querySelector("#calendar-summary"),
  calendarPrev: document.querySelector("#calendar-prev"),
  calendarToday: document.querySelector("#calendar-today"),
  calendarNext: document.querySelector("#calendar-next"),
  ratingSearch: document.querySelector("#rating-search"),
  ratingCategory: document.querySelector("#rating-category"),
  ratingStatus: document.querySelector("#rating-status"),
  ratingCount: document.querySelector("#rating-count"),
  ratingList: document.querySelector("#rating-list"),
  categoryNameInput: document.querySelector("#category-name"),
  addCategoryButton: document.querySelector("#add-category"),
  categoryList: document.querySelector("#category-list"),
  categoryCount: document.querySelector("#category-count"),
  cloudRepo: document.querySelector("#cloud-repo"),
  cloudBranch: document.querySelector("#cloud-branch"),
  cloudPath: document.querySelector("#cloud-path"),
  cloudToken: document.querySelector("#cloud-token"),
  cloudSaveConfig: document.querySelector("#cloud-save-config"),
  cloudPull: document.querySelector("#cloud-pull"),
  cloudPush: document.querySelector("#cloud-push"),
  cloudSyncToggle: document.querySelector("#cloud-sync-toggle"),
  supabaseRoom: document.querySelector("#supabase-room"),
  supabasePull: document.querySelector("#supabase-pull"),
  supabasePush: document.querySelector("#supabase-push"),
  supabaseAutoToggle: document.querySelector("#supabase-auto-toggle"),
  cloudSyncCode: document.querySelector("#cloud-sync-code"),
  cloudCopyCode: document.querySelector("#cloud-copy-code"),
  cloudApplyCode: document.querySelector("#cloud-apply-code"),
  clearSyncData: document.querySelector("#clear-sync-data"),
  syncStatus: document.querySelector("#sync-status"),
};

function activateTab(tabName) {
  const fallbackTab = "planner";
  const availableTabs = [...elements.tabButtons].map((button) => button.dataset.tab);
  const nextTab = availableTabs.includes(tabName) ? tabName : fallbackTab;

  elements.tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === nextTab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  elements.tabPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.tabPanel === nextTab);
  });

  localStorage.setItem(activeTabKey, nextTab);
}

function money(value) {
  return `${Number(value).toFixed(1)} 元`;
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(max, Math.max(min, number));
}

function getSettings() {
  const dishCountValue = elements.dishCount.value.trim();
  const minRatingValue = elements.minRating.value;
  return {
    peopleCount: clampNumber(elements.peopleCount.value, 1, 12, 4),
    totalBudget: clampNumber(elements.totalBudget.value, 10, 500, 100),
    tablewareFee: clampNumber(elements.tablewareFee.value, 0, 20, 2),
    discount: clampNumber(elements.discount.value, 0.1, 1, 0.88),
    dishCountMode: dishCountValue === "" ? "auto" : clampNumber(dishCountValue, 1, 10, 4),
    category: elements.category.value,
    minRating: minRatingValue === "none" ? "none" : clampNumber(minRatingValue, 1, 5, 3),
    searchTerm: elements.menuSearch.value.trim().toLowerCase(),
    excludedTags: getExcludedTags(),
  };
}

function readJsonStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function setSyncStatus(message, type = "ok") {
  if (!elements.syncStatus) return;
  elements.syncStatus.textContent = message;
  elements.syncStatus.classList.remove("ok", "warning", "danger");
  elements.syncStatus.classList.add(type);
}

function getCloudSyncConfig() {
  return {
    ...{
      repo: "Tlyyy/ZWCSM",
      branch: "main",
      path: "data/zwcsm-state.json",
      token: "",
      autoSync: false,
    },
    ...(readJsonStorage(cloudSyncConfigKey, {})),
  };
}

function saveCloudSyncConfig(nextConfig) {
  localStorage.setItem(cloudSyncConfigKey, JSON.stringify(nextConfig));
}

let cloudDebounceTimer = null;
let autoSyncTimer = null;
let isAutoSyncRunning = false;
let supabaseDebounceTimer = null;
let supabaseAutoTimer = null;
let isSupabaseAutoSyncRunning = false;
let isApplyingRemoteState = false;

function buildSyncPayload() {
  return {
    app: "ZWCSM",
    schema: 2,
    updatedAt: new Date().toISOString(),
    categoryData: readJsonStorage(categoryDataKey, null),
    weeklyPlans: readJsonStorage(weeklyPlansKey, {}),
    dishRatings: readJsonStorage(dishRatingsKey, {}),
    activeTab: localStorage.getItem(activeTabKey) || "planner",
  };
}

function getSupabaseRoom() {
  const raw = elements.supabaseRoom?.value || localStorage.getItem(supabaseRoomKey) || "zwcsm";
  return String(raw).trim() || "zwcsm";
}

function saveSupabaseRoom() {
  localStorage.setItem(supabaseRoomKey, getSupabaseRoom());
}

function isSupabaseAutoSyncEnabled() {
  return localStorage.getItem(supabaseAutoSyncKey) === "true";
}

function setSupabaseAutoSyncEnabled(enabled) {
  localStorage.setItem(supabaseAutoSyncKey, String(enabled));
}

function getSupabaseHeaders(extra = {}) {
  return {
    apikey: supabasePublishableKey,
    Authorization: `Bearer ${supabasePublishableKey}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

async function callSupabase(path, options = {}) {
  const response = await fetch(`${supabaseRestUrl}${path}`, {
    ...options,
    headers: getSupabaseHeaders(options.headers || {}),
  });
  const text = await response.text();
  const result = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const message = result?.message || result?.hint || response.statusText;
    throw new Error(message);
  }
  return result;
}

async function pullSupabaseState({ silent = false } = {}) {
  saveSupabaseRoom();
  const roomId = getSupabaseRoom();
  const rows = await callSupabase(
    `/lunch_states?room_id=eq.${encodeURIComponent(roomId)}&select=data,updated_at&limit=1`,
  );

  if (!rows || rows.length === 0) {
    if (!silent) setSyncStatus(`云端还没有房间「${roomId}」的数据，先上传一次。`, "warning");
    return false;
  }

  isApplyingRemoteState = true;
  try {
    applySyncPayload(rows[0].data);
    currentPlan = [];
    fixedDishIds = new Set();
    refreshAllViews();
  } finally {
    isApplyingRemoteState = false;
  }

  if (!silent) {
    const updatedAt = rows[0].updated_at ? new Date(rows[0].updated_at).toLocaleString("zh-CN") : "未知时间";
    setSyncStatus(`已拉取房间「${roomId}」的数据（${updatedAt}）。`, "ok");
  }
  return true;
}

async function pushSupabaseState({ silent = false } = {}) {
  saveSupabaseRoom();
  const roomId = getSupabaseRoom();
  await callSupabase("/lunch_states?on_conflict=room_id", {
    method: "POST",
    headers: {
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify({
      room_id: roomId,
      data: buildSyncPayload(),
      updated_at: new Date().toISOString(),
    }),
  });

  if (!silent) setSyncStatus(`已上传到房间「${roomId}」。`, "ok");
  return true;
}

function scheduleSupabaseSync() {
  if (isApplyingRemoteState || !isSupabaseAutoSyncEnabled()) return;
  clearTimeout(supabaseDebounceTimer);
  supabaseDebounceTimer = setTimeout(async () => {
    try {
      await pushSupabaseState({ silent: true });
      setSyncStatus(`已自动同步到房间「${getSupabaseRoom()}」。`, "ok");
    } catch (error) {
      setSyncStatus(`Supabase 自动同步失败：${error.message}`, "danger");
      console.error("Supabase auto sync failed:", error);
    }
  }, 1000);
}

async function syncSupabaseNow(action) {
  try {
    if (action === "pull") {
      await pullSupabaseState();
    } else {
      await pushSupabaseState();
    }
  } catch (error) {
    setSyncStatus(`Supabase 同步失败：${error.message}`, "danger");
    console.error("Supabase sync failed:", error);
  }
}

function startSupabaseAutoSync() {
  if (!isSupabaseAutoSyncEnabled()) return;
  if (isSupabaseAutoSyncRunning) return;
  isSupabaseAutoSyncRunning = true;
  if (elements.supabaseAutoToggle) elements.supabaseAutoToggle.textContent = "关闭自动同步";
  pullSupabaseState({ silent: true }).catch((error) => {
    setSyncStatus(`自动拉取失败：${error.message}`, "danger");
  });
  supabaseAutoTimer = setInterval(() => {
    pullSupabaseState({ silent: true }).catch((error) => {
      setSyncStatus(`自动拉取失败：${error.message}`, "danger");
    });
  }, 30000);
  setSyncStatus(`已开启 Supabase 自动同步：${getSupabaseRoom()}`, "ok");
}

function stopSupabaseAutoSync() {
  clearInterval(supabaseAutoTimer);
  supabaseAutoTimer = null;
  isSupabaseAutoSyncRunning = false;
  if (elements.supabaseAutoToggle) elements.supabaseAutoToggle.textContent = "开启自动同步";
}

function toggleSupabaseAutoSync() {
  saveSupabaseRoom();
  const nextEnabled = !isSupabaseAutoSyncEnabled();
  setSupabaseAutoSyncEnabled(nextEnabled);
  if (nextEnabled) {
    startSupabaseAutoSync();
  } else {
    stopSupabaseAutoSync();
    setSyncStatus("已关闭 Supabase 自动同步。", "warning");
  }
}

function normalizeGithubPath(path) {
  return String(path || "").trim().replace(/^\/+|\/+$/g, "");
}

function parseOwnerRepo(value) {
  const raw = String(value || "").trim();
  if (!raw) return { owner: "", repo: "" };

  if (/^https?:\/\//i.test(raw)) {
    try {
      const parsed = new URL(raw);
      if (parsed.hostname.includes("github.com")) {
        const parts = parsed.pathname.split("/").filter(Boolean);
        if (parts.length >= 2) {
          return { owner: parts[0], repo: parts[1] };
        }
      }
    } catch {
      // fallback to simple split
    }
  }

  const [owner, repo] = raw.split("/");
  return {
    owner: (owner || "").trim(),
    repo: (repo || "").trim(),
  };
}

async function callGithubApi(url, { token, method = "GET", body = null } = {}) {
  const headers = {
    "Accept": "application/vnd.github+json",
  };
  if (token) headers.Authorization = `token ${token}`;
  const response = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    const reason = result?.message || response.statusText;
    throw new Error(`GitHub API 失败：${reason}`);
  }
  return result;
}

function toSafeBase64(value) {
  return btoa(unescape(encodeURIComponent(value)));
}

function fromSafeBase64(value) {
  return decodeURIComponent(escape(atob(value)));
}

function encodeRepoPath(path) {
  return encodeURIComponent(normalizeGithubPath(path)).replace(/%2F/g, "/");
}

async function pullCloudState() {
  const config = getCloudSyncConfig();
  const token = config.token?.trim() || "";
  if (!token) throw new Error("缺少 GitHub token");
  const { owner, repo } = parseOwnerRepo(config.repo);
  if (!owner || !repo) throw new Error("仓库格式应为 owner/repo");
  const path = normalizeGithubPath(config.path);
  if (!path) throw new Error("文件路径不能为空");

  const encodedPath = encodeRepoPath(path);
  const getUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${encodedPath}?ref=${encodeURIComponent(config.branch || "main")}`;
  const data = await callGithubApi(getUrl, { token });

  if (!data?.content) return null;
  const raw = fromSafeBase64(data.content);
  const payload = JSON.parse(raw);
  if (!payload || payload.app !== "ZWCSM") throw new Error("不是有效的同步文件");
  return { payload, sha: data.sha };
}

async function pushCloudState() {
  const config = getCloudSyncConfig();
  const token = config.token?.trim() || "";
  if (!token) throw new Error("缺少 GitHub token");
  const { owner, repo } = parseOwnerRepo(config.repo);
  if (!owner || !repo) throw new Error("仓库格式应为 owner/repo");

  const path = normalizeGithubPath(config.path);
  if (!path) throw new Error("文件路径不能为空");

  const encodedPath = encodeRepoPath(path);
  const baseUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${encodedPath}`;
  let sha;

  try {
    const remote = await pullCloudState();
    sha = remote?.sha;
  } catch (error) {
    if (error.message && error.message.includes("Not Found")) {
      sha = undefined;
    } else {
      throw error;
    }
  }

  const payload = buildSyncPayload();
  const response = await callGithubApi(baseUrl, {
    token,
    method: "PUT",
    body: {
      message: `sync ${new Date().toLocaleString("zh-CN")}`,
      branch: config.branch || "main",
      sha,
      content: toSafeBase64(JSON.stringify(payload)),
    },
  });
  return response;
}

function scheduleCloudSync() {
  scheduleSupabaseSync();
  const config = getCloudSyncConfig();
  if (!config.autoSync) return;

  clearTimeout(cloudDebounceTimer);
  cloudDebounceTimer = setTimeout(async () => {
    try {
      await pushCloudState();
      setSyncStatus("已自动同步到云端。", "ok");
    } catch (error) {
      setSyncStatus(`同步失败：${error.message}`, "danger");
      console.error("Auto sync push failed:", error);
    }
  }, 1200);
}

async function syncNow(action) {
  const config = getCloudSyncConfig();
  const token = config.token?.trim() || "";
  if (!token) {
    setSyncStatus("缺少 GitHub token，先保存配置。", "warning");
    return;
  }

  try {
    if (action === "pull") {
      const remote = await pullCloudState();
      if (!remote || !remote.payload) {
        setSyncStatus("云端无数据。", "warning");
        return;
      }
      applyCloudPayload(remote.payload);
      currentPlan = [];
      fixedDishIds = new Set();
      refreshAllViews();
      setSyncStatus("已从云端拉取并应用。", "ok");
    } else {
      await pushCloudState();
      setSyncStatus("已上传到云端。", "ok");
    }
  } catch (error) {
    setSyncStatus(`云端同步失败：${error.message}`, "danger");
    console.error("Cloud sync failed:", error);
  }
}

function applyCloudPayload(payload) {
  const categoryData = payload.categoryData;
  const weeklyPlans = payload.weeklyPlans;
  const dishRatings = payload.dishRatings;
  if (categoryData !== null) localStorage.setItem(categoryDataKey, JSON.stringify(categoryData));
  if (weeklyPlans) localStorage.setItem(weeklyPlansKey, JSON.stringify(weeklyPlans));
  if (dishRatings) localStorage.setItem(dishRatingsKey, JSON.stringify(dishRatings));
  if (payload.activeTab) localStorage.setItem(activeTabKey, payload.activeTab);
  if (payload.categoryData?.version) {
    localStorage.setItem(`${categoryDataKey}:version`, String(payload.categoryData.version));
  } else {
    localStorage.setItem(`${categoryDataKey}:version`, String(categoryDataVersion));
  }
}

function startAutoSync() {
  const config = getCloudSyncConfig();
  if (!config.autoSync) return;
  if (!config.token?.trim()) {
    setSyncStatus("未填写 token，无法开启自动同步。", "warning");
    config.autoSync = false;
    saveCloudSyncConfig(config);
    if (elements.cloudSyncToggle) elements.cloudSyncToggle.textContent = "开启自动同步";
    return;
  }
  if (isAutoSyncRunning) return;
  isAutoSyncRunning = true;
  autoSyncTimer = setInterval(() => syncNow("pull"), 30000);
  setSyncStatus("已开启自动同步（每30秒拉取）。", "ok");
}

function stopAutoSync() {
  if (!isAutoSyncRunning) return;
  clearInterval(autoSyncTimer);
  autoSyncTimer = null;
  isAutoSyncRunning = false;
}

function toggleAutoSync() {
  const config = getCloudSyncConfig();
  config.autoSync = !config.autoSync;
  saveCloudSyncConfig(config);
  if (!config.token?.trim()) {
    setSyncStatus("请先填写 token 并保存。", "warning");
    config.autoSync = false;
    saveCloudSyncConfig(config);
    elements.cloudSyncToggle.textContent = "开启自动同步";
    stopAutoSync();
    return;
  }

  if (config.autoSync) syncNow("pull");
  if (config.autoSync) {
    startAutoSync();
    elements.cloudSyncToggle.textContent = "关闭自动同步";
  } else {
    stopAutoSync();
    elements.cloudSyncToggle.textContent = "开启自动同步";
  }
}

function refreshAllViews() {
  migrateCategoryData();
  populateCategories();
  renderCategoryBoard();
  renderPlan();
  renderCandidates();
  renderPlanSearchResults();
  renderWeeklyPlans();
  renderCalendar();
  renderRatingMaintenance();
  const activeTab = localStorage.getItem(activeTabKey) || "planner";
  activateTab(activeTab);
  handleSettingsChange();
}

function clearSyncDataState() {
  if (!window.confirm("确定清空评分和本周菜单？此操作不可恢复。")) return;
  saveCurrentWeekPlans([]);
  saveDishRatings({});
  setSyncStatus("已清空：本周菜单和评分。", "warning");
  refreshAllViews();
  scheduleCloudSync();
}

function applySyncPayload(payload) {
  if (!payload || payload.app !== "ZWCSM") {
    throw new Error("不是有效的同步文件");
  }
  applyCloudPayload(payload);
}

function generateSyncCode() {
  const payload = buildSyncPayload();
  return toSafeBase64(JSON.stringify(payload));
}

function applySyncCode(text) {
  try {
    const raw = fromSafeBase64(String(text || ""));
    const payload = JSON.parse(raw);
    if (!window.confirm("恢复同步码会覆盖当前本地的分类、评分和本周记录，是否继续？")) return;
    applySyncPayload(payload);
    currentPlan = [];
    fixedDishIds = new Set();
    refreshAllViews();
    setSyncStatus("已应用同步码。", "ok");
  } catch (error) {
    console.error("Apply sync code failed:", error);
    setSyncStatus("同步码无效，请确认是从本应用复制的同步码。", "danger");
    alert("恢复失败：同步码无效。");
  }
}

function copySyncCode() {
  const code = generateSyncCode();
  if (elements.cloudSyncCode) elements.cloudSyncCode.value = code;

  if (navigator.clipboard?.writeText) {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setSyncStatus("同步码已复制到剪贴板。", "ok");
      })
      .catch(() => fallbackCopySyncCode(code));
  } else {
    fallbackCopySyncCode(code);
  }
}

function fallbackCopySyncCode(code) {
  try {
    const temp = document.createElement("textarea");
    temp.value = code;
    temp.style.position = "fixed";
    temp.style.opacity = "0";
    document.body.appendChild(temp);
    temp.focus();
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    setSyncStatus("同步码已复制到剪贴板。", "ok");
  } catch {
    setSyncStatus("同步码已生成，请手动复制文本框内容。", "warning");
  }
}

function applySyncCodeFromPrompt() {
  const input = window.prompt("粘贴同步码后恢复：", elements.cloudSyncCode?.value || "");
  if (input === null) return;
  applySyncCode(input.trim());
}

function saveCloudConfigFromUi() {
  const nextConfig = {
    repo: (elements.cloudRepo?.value || "").trim(),
    branch: (elements.cloudBranch?.value || "main").trim(),
    path: normalizeGithubPath(elements.cloudPath?.value || ""),
    token: elements.cloudToken?.value || "",
    autoSync: getCloudSyncConfig().autoSync,
  };
  saveCloudSyncConfig(nextConfig);
  if (elements.cloudPath) elements.cloudPath.value = nextConfig.path;
  if (!nextConfig.token) {
    setSyncStatus("已保存配置，但未填写 token，云端同步暂不可用。", "warning");
    stopAutoSync();
    if (elements.cloudSyncToggle) elements.cloudSyncToggle.textContent = "开启自动同步";
    return;
  }
  setSyncStatus("配置已保存。", "ok");
  syncNow("pull");
}

function normalizeCategoryName(value) {
  const trimmed = String(value || "").trim();
  return trimmed || DEFAULT_CATEGORY;
}

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}

function uniqueCategoriesFrom(items) {
  return [...new Set(items.map(normalizeCategoryName))];
}

function getDefaultCategories() {
  return uniqueCategoriesFrom(baseDishes.map((dish) => dish.category));
}

function setDishCategories(dish, value) {
  const category = normalizeCategoryName(value);
  dish.category = category;
  dish.categories = [category];
}

function hydrateCategoryData(force = false) {
  const stored = force ? null : readJsonStorage(categoryDataKey, null);
  const hasStored = stored && typeof stored === "object";
  const storedVersion = Number(stored?.version) || 1;
  const defaultList = uniqueCategoriesFrom([...getDefaultCategories(), DEFAULT_CATEGORY]);
  const storedCatalog = uniqueCategoriesFrom(Array.isArray(stored?.categories) ? stored.categories : []);
  const storedDishCategories = stored?.dishCategories && typeof stored.dishCategories === "object" ? stored.dishCategories : {};
  const catalog = uniqueCategoriesFrom([...storedCatalog, ...defaultList]);
  const dishById = new Map(baseDishes.map((dish) => [dish.id, { ...dish, categories: [dish.category], category: dish.category }]));

  if (hasStored) {
    Object.entries(storedDishCategories).forEach(([id, categoryConfig]) => {
      const dish = dishById.get(Number(id));
      if (!dish) return;
      if (!Array.isArray(categoryConfig)) return;
      const normalizedCategories = uniqueCategoriesFrom(categoryConfig).filter((category) => category && category.length > 0);
      if (normalizedCategories.length > 0) dish.categories = normalizedCategories;
      setDishCategories(dish, dish.categories[0] || dish.category);
    });
  }

  const categorySet = new Set(catalog);
  dishById.forEach((dish) => {
    if (!Array.isArray(dish.categories) || dish.categories.length === 0) {
      dish.categories = [dish.category || DEFAULT_CATEGORY];
    }
    dish.categories.forEach((category) => {
      categorySet.add(normalizeCategoryName(category));
    });
    setDishCategories(dish, dish.categories[0]);
  });

  dishes = Array.from(dishById.values());
  categoryCatalog = Array.from(categorySet);
}

function persistCategoryData() {
  const payload = {
    version: categoryDataVersion,
    categories: categoryCatalog,
    dishCategories: Object.fromEntries(dishes.map((dish) => [dish.id, dish.categories || [dish.category]])),
  };
  localStorage.setItem(categoryDataKey, JSON.stringify(payload));
  localStorage.setItem(`${categoryDataKey}:version`, String(categoryDataVersion));
  scheduleCloudSync();
}

function migrateCategoryData() {
  const store = readJsonStorage(`${categoryDataKey}:version`, null);
  const storedVersion = Number(store);
  hydrateCategoryData(storedVersion !== categoryDataVersion);
  if (storedVersion !== categoryDataVersion) {
    if (categoryCatalog.length === 0) {
      categoryCatalog = getDefaultCategories();
    }
    if (!categoryCatalog.includes(DEFAULT_CATEGORY)) categoryCatalog.push(DEFAULT_CATEGORY);
    persistCategoryData();
  }
}

function getDishCategories(dish) {
  if (Array.isArray(dish.categories) && dish.categories.length > 0) return dish.categories.map(normalizeCategoryName);
  if (dish.category) return [normalizeCategoryName(dish.category)];
  return [DEFAULT_CATEGORY];
}

function setDishPrimaryCategory(dishId, categoryName) {
  const normalized = normalizeCategoryName(categoryName);
  const dish = dishes.find((item) => item.id === dishId);
  if (!dish) return;
  const unique = uniqueCategoriesFrom(getDishCategories(dish).filter((item) => item !== normalized));
  dish.categories = unique.length ? [normalized, ...unique] : [normalized];
  dish.category = normalized;
  if (!categoryCatalog.includes(normalized)) categoryCatalog.push(normalized);
  persistCategoryData();
  populateCategories();
  renderPlan();
  renderCandidates();
  renderRatingMaintenance();
  renderWeeklyPlans();
  renderCalendar();
}

function hasDishCategory(dish, category) {
  return getDishCategories(dish).includes(normalizeCategoryName(category));
}

function getPrimaryCategory(dish) {
  return normalizeCategoryName(dish.category || getDishCategories(dish)[0]);
}

function getCategoryOptionsHtml(selected = "all") {
  const options = uniqueCategoriesFrom(categoryCatalog).sort((a, b) => a.localeCompare(b, "zh-Hans"));
  return options
    .map(
      (category) =>
        `<option value="${escapeHtml(category)}" ${category === selected ? 'selected="selected"' : ""}>${escapeHtml(category)}</option>`,
    )
    .join("");
}

function getDishCategorySelect(dish, className, dataAttr) {
  return `
    <label class="dish-category-editor">
      <span>类别</span>
      <select class="${className}" ${dataAttr}="${dish.id}" aria-label="${dish.name}类别">
        ${getCategoryOptionsHtml(getPrimaryCategory(dish))}
      </select>
    </label>
  `;
}

function normalizeStoredDish(dish) {
  const latestDish = dishes.find((item) => item.id === dish.id) || dishes.find((item) => item.name === dish.name);
  if (!latestDish) return { ...dish };
  return {
    id: latestDish.id,
    name: latestDish.name,
    price: latestDish.price,
    category: latestDish.category,
    categories: latestDish.categories,
    type: latestDish.type,
  };
}

function getWeekKey(date = new Date()) {
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  target.setDate(target.getDate() + 3 - ((target.getDay() + 6) % 7));
  const weekYear = target.getFullYear();
  const firstThursday = new Date(weekYear, 0, 4);
  firstThursday.setDate(firstThursday.getDate() + 3 - ((firstThursday.getDay() + 6) % 7));
  const week = 1 + Math.round((target - firstThursday) / 604800000);
  return `${weekYear}-W${String(week).padStart(2, "0")}`;
}

function getAllWeeklyPlans() {
  const stored = readJsonStorage(weeklyPlansKey, {});
  return Object.fromEntries(
    Object.entries(stored).map(([weekKey, plans]) => [
      weekKey,
      (plans || []).map((plan) => ({
        ...plan,
        dishes: (plan.dishes || []).map(normalizeStoredDish),
      })),
    ]),
  );
}

function saveAllWeeklyPlans(plansByWeek) {
  localStorage.setItem(weeklyPlansKey, JSON.stringify(plansByWeek));
  scheduleCloudSync();
}

function getCurrentWeekPlans() {
  return getAllWeeklyPlans()[getWeekKey()] || [];
}

function getAllSavedPlans() {
  return Object.values(getAllWeeklyPlans())
    .flat()
    .sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt));
}

function saveCurrentWeekPlans(plans) {
  const allPlans = getAllWeeklyPlans();
  allPlans[getWeekKey()] = plans;
  saveAllWeeklyPlans(allPlans);
}

function getDateKey(date) {
  const target = new Date(date);
  const year = target.getFullYear();
  const month = String(target.getMonth() + 1).padStart(2, "0");
  const day = String(target.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getMonthKey(date) {
  const target = new Date(date);
  return `${target.getFullYear()}-${String(target.getMonth() + 1).padStart(2, "0")}`;
}

function getPlansByDate() {
  return getAllSavedPlans().reduce((groups, plan) => {
    const key = getDateKey(plan.savedAt);
    groups[key] = groups[key] || [];
    groups[key].push(plan);
    return groups;
  }, {});
}

function getDishRatings() {
  return readJsonStorage(dishRatingsKey, {});
}

function saveDishRatings(ratings) {
  localStorage.setItem(dishRatingsKey, JSON.stringify(ratings));
  scheduleCloudSync();
}

function getDishRating(dishId) {
  return Number(getDishRatings()[dishId]) || 0;
}

function setDishRating(dishId, rating) {
  const ratings = getDishRatings();
  if (rating > 0) {
    ratings[dishId] = rating;
  } else {
    delete ratings[dishId];
  }
  saveDishRatings(ratings);
}

function getEatenDishIdsForCurrentWeek() {
  return new Set(getCurrentWeekPlans().flatMap((plan) => plan.dishes.map((dish) => dish.id)));
}

function getCategories() {
  return [...categoryCatalog].sort((a, b) => a.localeCompare(b, "zh-Hans"));
}

function populateCategories() {
  const categories = getCategories();
  const selectedCategory = elements.category.value;
  const selectedRatingCategory = elements.ratingCategory.value;
  const selectedTags = new Set([...elements.excludedTags.querySelectorAll("input:checked")].map((input) => input.value));
  const baseCategoryOptions = `<option value="all">全部分类</option>`;
  elements.category.innerHTML = baseCategoryOptions + categories.map((category) => `<option value="${category}">${category}</option>`).join("");
  elements.ratingCategory.innerHTML = baseCategoryOptions + categories.map((category) => `<option value="${category}">${category}</option>`).join("");

  if ([...elements.category.options].some((option) => option.value === selectedCategory)) {
    elements.category.value = selectedCategory;
  } else {
    elements.category.value = "all";
  }
  if ([...elements.ratingCategory.options].some((option) => option.value === selectedRatingCategory)) {
    elements.ratingCategory.value = selectedRatingCategory;
  } else {
    elements.ratingCategory.value = "all";
  }
  elements.excludedTags.innerHTML = exclusionTags
    .map(
      (tag) => `
        <label>
          <input type="checkbox" value="${tag}" />
          ${tag}
        </label>
      `,
    )
    .join("");
  [...elements.excludedTags.querySelectorAll("input[type=checkbox]")]
    .forEach((checkbox) => {
      if (selectedTags.has(checkbox.value)) checkbox.checked = true;
    });
}

function getCategoryBoardItems() {
  return categoryCatalog
    .map((category, index) => {
      const usage = dishes.filter((dish) => hasDishCategory(dish, category)).length;
      const safeCategory = escapeHtml(category);
      return `
        <article class="category-item">
          <div>
            <strong>${index + 1}. ${safeCategory}</strong>
            <small>${usage} 道菜</small>
          </div>
          <div class="category-item-actions">
            <button class="text-button" type="button" data-rename-category="${encodeURIComponent(category)}">重命名</button>
            <button class="text-button warning-action" type="button" data-delete-category="${encodeURIComponent(category)}">删除</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCategoryBoard() {
  elements.categoryCount.textContent = `${categoryCatalog.length} 个分类`;
  elements.categoryList.innerHTML = getCategoryBoardItems() || '<p class="empty-state">还没有分类，先新建一个吧。</p>';
}

function normalizeCategoryValue(value, fallback = DEFAULT_CATEGORY) {
  const trimmed = String(value || "").trim();
  return trimmed || fallback;
}

function createCategory(name) {
  const normalized = normalizeCategoryValue(name, "").trim();
  if (!normalized) return;
  if (categoryCatalog.includes(normalized)) {
    alert(`分类「${normalized}」已存在。`);
    return;
  }
  categoryCatalog.push(normalized);
  persistCategoryData();
  populateCategories();
  renderCategoryBoard();
  renderPlan();
  renderCandidates();
  renderRatingMaintenance();
}

function renameCategory(categoryName) {
  const target = decodeURIComponent(categoryName);
  if (!categoryCatalog.includes(target)) return;
  const next = prompt(`将分类「${target}」重命名为`, target)?.trim();
  if (!next) return;
  const normalized = normalizeCategoryValue(next, "");
  if (categoryCatalog.includes(normalized)) {
    alert(`分类「${normalized}」已存在。`);
    return;
  }
  if (!normalized) return;

  categoryCatalog = categoryCatalog.map((category) => (category === target ? normalized : category));
  dishes.forEach((dish) => {
    const sourceCategories = getDishCategories(dish);
    if (!sourceCategories.includes(target)) return;
    dish.categories = sourceCategories.map((category) => (category === target ? normalized : category));
    if (!dish.categories.includes(normalized)) dish.categories.unshift(normalized);
    if (!dish.category || dish.category === target) dish.category = normalized;
  });
  persistCategoryData();
  populateCategories();
  renderCategoryBoard();
  renderPlan();
  renderCandidates();
  renderRatingMaintenance();
  renderWeeklyPlans();
  renderCalendar();
}

function deleteCategory(categoryName) {
  const target = decodeURIComponent(categoryName);
  const count = dishes.filter((dish) => hasDishCategory(dish, target)).length;
  if (!categoryCatalog.includes(target)) return;
  if (categoryCatalog.length <= 1) {
    alert("至少保留一个分类。");
    return;
  }
  if (count === 0) {
    categoryCatalog = categoryCatalog.filter((category) => category !== target);
    persistCategoryData();
    populateCategories();
    renderCategoryBoard();
    return;
  }

  const fallback = categoryCatalog.find((category) => category !== target) || DEFAULT_CATEGORY;
  const moveToDefault = confirm(
    `分类「${target}」下有 ${count} 道菜。删除后转移到「${fallback}」吗？\n\n点击“确定”转移到「${fallback}」，点击“取消”转为${DEFAULT_CATEGORY}。`,
  );
  const transferTo = moveToDefault ? fallback : DEFAULT_CATEGORY;

  if (!categoryCatalog.includes(transferTo)) categoryCatalog.push(transferTo);
  dishes = dishes.map((dish) => {
    if (!hasDishCategory(dish, target)) return dish;
    const categories = getDishCategories(dish).filter((category) => category !== target);
    dish.categories = categories.length ? [...categories] : [transferTo];
    if (!dish.categories.includes(transferTo)) dish.categories.unshift(transferTo);
    dish.category = dish.categories[0];
    return dish;
  });

  categoryCatalog = categoryCatalog.filter((category) => category !== target);
  persistCategoryData();
  populateCategories();
  renderCategoryBoard();
  renderPlan();
  renderCandidates();
  renderRatingMaintenance();
  renderWeeklyPlans();
  renderCalendar();
}

function getExcludedTags() {
  return [...elements.excludedTags.querySelectorAll("input:checked")].map((input) => input.value);
}

function getDishTags(dish) {
  const tags = new Set();
  const name = dish.name;

  if (isOrganDish(dish)) tags.add("内脏");
  if (dish.type === "fish" || /鱼|鱼头|鲫鱼|酸菜鱼|烤鱼|带鱼/.test(name)) tags.add("鱼类");
  if (/豆腐|腐竹|干叶豆腐|黄豆|豆芽|豆干|豆皮/.test(name)) tags.add("豆制品");
  if (isSoup(dish)) tags.add("汤类");
  if (/麻辣|酸辣|辣子|泡椒|剁椒|青椒|尖椒/.test(name)) tags.add("辣口");
  if (hasDishCategory(dish, "干锅类") || /干锅/.test(name)) tags.add("干锅");
  if (isBigDish(dish)) tags.add("大菜");
  if (dish.price >= 50) tags.add("高价菜");
  if (/鸭血|毛血旺|牛蛙|鸡爪|猪耳|腊肉/.test(name)) tags.add("重口菜");

  return [...tags];
}

function getDishFilterState(dish, settings = getSettings()) {
  const dishTags = getDishTags(dish);
  const eatenIds = getEatenDishIdsForCurrentWeek();
  const rating = getDishRating(dish.id);
  const inCategory = settings.category === "all" || hasDishCategory(dish, settings.category);
  const notExcluded = !dishTags.some((tag) => settings.excludedTags.includes(tag));
  const searchText = `${dish.name} ${getDishCategories(dish).join(" ")} ${dishTags.join(" ")}`.toLowerCase();
  const matchesSearch = !settings.searchTerm || searchText.includes(settings.searchTerm);
  const eatenThisWeek = eatenIds.has(dish.id);
  const lowRated = settings.minRating !== "none" && rating > 0 && rating < settings.minRating;

  return { dishTags, rating, inCategory, notExcluded, matchesSearch, eatenThisWeek, lowRated };
}

function getFilteredDishes(options = {}) {
  const { forRandom = true } = options;
  const settings = getSettings();
  const searchTerm = settings.searchTerm;

  return dishes.filter((dish) => {
    if (settings.category !== "all" && !hasDishCategory(dish, settings.category)) return false;
    const state = getDishFilterState(dish, settings);
    const haystack = `${dish.name} ${getDishCategories(dish).join(" ")} ${getDishTags(dish).join(" ")}`.toLowerCase();
    if (searchTerm && !haystack.includes(searchTerm)) return false;
    if (!forRandom && searchTerm) {
      return true;
    }
    const hiddenBySaveOrRating = state.eatenThisWeek || state.lowRated;

    const canShowHiddenSearchResult = !forRandom && searchTerm && state.matchesSearch;
    return state.notExcluded && state.matchesSearch && (!hiddenBySaveOrRating || canShowHiddenSearchResult);
  });
}

function getTargetDishCount(settings) {
  if (settings.dishCountMode !== "auto") return settings.dishCountMode;
  if (settings.peopleCount <= 2) return 3;
  if (settings.peopleCount <= 4) return settings.totalBudget >= 130 ? 5 : 4;
  if (settings.peopleCount <= 6) return settings.totalBudget >= 170 ? 7 : 6;
  return 8;
}

function calculatePlanSummary(plan, settings = getSettings()) {
  const dishSubtotal = plan.reduce((sum, dish) => sum + dish.price, 0);
  const tablewareTotal = settings.peopleCount * settings.tablewareFee;
  const beforeDiscountTotal = dishSubtotal + tablewareTotal;
  const finalTotal = beforeDiscountTotal * settings.discount;
  const perPerson = finalTotal / settings.peopleCount;
  const budgetDiff = settings.totalBudget - finalTotal;

  return { dishSubtotal, tablewareTotal, beforeDiscountTotal, finalTotal, perPerson, budgetDiff };
}

function isVegetable(dish) {
  return (
    hasDishCategory(dish, "田园时蔬") ||
    /土豆|包菜|白菜|花菜|生菜|空心菜|油麦|豆腐|豆芽|茄子|藕|黄瓜|丝瓜|苦瓜|外婆菜|杏鲍菇|咸菜小笋/.test(
      dish.name,
    )
  );
}

function isSoup(dish) {
  return dish.type === "soup";
}

function isOrganDish(dish) {
  return /腰花|猪肝|猪肺|猪肚|肥肠|牛杂|牛肚|鸡胗|鸡杂|猪耳/.test(dish.name);
}

function isHardDish(dish) {
  return ["特色菜", "干锅类", "鱼类"].some((category) => hasDishCategory(dish, category)) && !isVegetable(dish);
}

function isBigDish(dish) {
  return (
    hasDishCategory(dish, "鱼类") ||
    hasDishCategory(dish, "特色菜") ||
    (hasDishCategory(dish, "干锅类") && !isVegetable(dish)) ||
    /龙虾|牛蛙|烤鱼|鱼头|酸菜鱼|水煮鱼|水煮牛肉|毛血旺|排骨|土鸡|里脊|带鱼/.test(dish.name)
  );
}

function isHeavyDish(dish) {
  return /鸭血|毛血旺|牛蛙|鸡爪|猪耳|腊肉/.test(dish.name);
}

function isProteinDish(dish) {
  return !isVegetable(dish) && !isSoup(dish);
}

function getCategoryCount(plan, category) {
  return plan.filter((dish) => hasDishCategory(dish, category)).length;
}

function hasSimilarDish(plan, dish) {
  if (isOrganDish(dish) && plan.some(isOrganDish)) return true;
  if (isHeavyDish(dish) && plan.some(isHeavyDish)) return true;
  if (isSoup(dish) && plan.some(isSoup)) return true;
  if (dish.type === "fish" && plan.some((item) => item.type === "fish")) return true;
  if (isVegetable(dish) && plan.filter(isVegetable).length >= 2) return true;
  return false;
}

function canAddDish(plan, dish, strict = true) {
  if (!dish || plan.some((item) => item.id === dish.id)) return false;
  if (!strict) return true;
  if (getCategoryCount(plan, getPrimaryCategory(dish)) >= 2) return false;
  if (hasSimilarDish(plan, dish)) return false;
  return true;
}

function cheapestBy(candidates, predicate, excludedIds) {
  return candidates
    .filter((dish) => predicate(dish) && !excludedIds.has(dish.id))
    .sort((a, b) => a.price - b.price)[0];
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function addDish(plan, dish) {
  if (dish && !plan.some((item) => item.id === dish.id)) plan.push(dish);
}

function getMealSlots(settings) {
  const excludeSoup = settings.excludedTags.includes("汤类");
  const excludeBigDish = settings.excludedTags.includes("大菜");
  const shouldUseBigDish = !excludeBigDish && settings.totalBudget >= 90;

  if (settings.dishCountMode !== "auto") {
    const count = getTargetDishCount(settings);
    const slots = shouldUseBigDish && count >= 4 ? ["big", "protein", "vegetable"] : ["protein", "vegetable"];
    if (count >= 3) slots.push(excludeSoup ? "vegetable" : "soup");
    while (slots.length < count) slots.push(slots.length % 3 === 0 ? "vegetable" : "protein");
    return slots.slice(0, count);
  }

  if (settings.peopleCount <= 2) return excludeSoup ? ["protein", "vegetable", "vegetable"] : ["protein", "vegetable", "soup"];
  if (settings.peopleCount <= 4) {
    const core = shouldUseBigDish ? ["big", "protein"] : ["protein", "protein"];
    const slots = excludeSoup ? [...core, "vegetable", "vegetable"] : [...core, "vegetable", "soup"];
    if (getTargetDishCount(settings) > 4) slots.splice(3, 0, "vegetable");
    return slots;
  }
  if (settings.peopleCount <= 6) {
    const slots = excludeSoup
      ? ["hard", "protein", "protein", "vegetable", "vegetable", "vegetable"]
      : ["hard", "protein", "protein", "vegetable", "vegetable", "soup"];
    if (getTargetDishCount(settings) > 6) slots.splice(3, 0, "hard");
    return slots;
  }
  return ["hard", "protein", "protein", "protein", "vegetable", "vegetable", "soup", "hard"];
}

function getSlotPredicate(slot) {
  if (slot === "vegetable") return isVegetable;
  if (slot === "soup") return isSoup;
  if (slot === "big") return isBigDish;
  if (slot === "hard") return (dish) => isHardDish(dish) || dish.type === "fish";
  return isProteinDish;
}

function getDishScore(dish, plan, settings, slot, noise = 4) {
  const targetDishBudget = Math.max(18, settings.totalBudget / settings.discount / Math.max(1, getTargetDishCount(settings)));
  let score = Math.random() * noise;

  if (slot === "protein" && hasDishCategory(dish, "家常小炒")) score += 24;
  if (slot === "protein" && hasDishCategory(dish, "盖菜类")) score += 12;
  if (slot === "big" && isBigDish(dish)) score += 34;
  if (slot === "big" && dish.price >= 32 && dish.price <= 58) score += 16;
  if (slot === "big" && isVegetable(dish)) score -= 35;
  if (slot === "hard" && isHardDish(dish)) score += 24;
  if (slot === "vegetable" && hasDishCategory(dish, "田园时蔬")) score += 22;
  if (slot === "soup" && dish.price <= 20) score += 22;

  if (dish.price >= targetDishBudget * 0.7 && dish.price <= targetDishBudget * 1.55) score += 12;
  if (dish.price <= 18 && slot !== "vegetable" && slot !== "soup") score -= 10;
  if (isOrganDish(dish)) score -= plan.some(isOrganDish) ? 60 : 16;
  if (isHeavyDish(dish)) score -= plan.some(isHeavyDish) ? 60 : 12;
  if (getCategoryCount(plan, getPrimaryCategory(dish)) > 0) score -= 18;
  if (hasSimilarDish(plan, dish)) score -= 35;
  if (dish.price >= 55 && settings.totalBudget < 110) score -= 18;

  return score;
}

function pickWeighted(scoredDishes) {
  const topDishes = scoredDishes.slice(0, Math.min(5, scoredDishes.length));
  const weightTotal = topDishes.reduce((sum, item, index) => sum + (topDishes.length - index) ** 2, 0);
  let marker = Math.random() * weightTotal;

  for (const [index, item] of topDishes.entries()) {
    marker -= (topDishes.length - index) ** 2;
    if (marker <= 0) return item.dish;
  }

  return topDishes[0]?.dish;
}

function pickForSlot(candidates, plan, settings, slot, strict = true, options = {}) {
  const predicate = getSlotPredicate(slot);
  const scoredDishes = candidates
    .filter((dish) => predicate(dish) && canAddDish(plan, dish, strict))
    .map((dish) => ({ dish, score: getDishScore(dish, plan, settings, slot, options.noise ?? 4) }))
    .sort((a, b) => b.score - a.score);

  return options.weighted ? pickWeighted(scoredDishes) : scoredDishes[0]?.dish;
}

function getBudgetLimit(settings) {
  return (settings.totalBudget * 1.05) / settings.discount - settings.peopleCount * settings.tablewareFee;
}

function getTargetBudgetSubtotal(settings) {
  return settings.totalBudget / settings.discount - settings.peopleCount * settings.tablewareFee;
}

function getDishSubtotal(plan) {
  return plan.reduce((sum, dish) => sum + dish.price, 0);
}

function sortPlanDishes(plan) {
  return [...plan].sort((a, b) => {
    const fixedA = fixedDishIds.has(a.id);
    const fixedB = fixedDishIds.has(b.id);
    if (fixedA !== fixedB) return fixedA ? -1 : 1;
    return getPrimaryCategory(a).localeCompare(getPrimaryCategory(b), "zh-Hans");
  });
}

function trimToBudget(plan, candidates, settings) {
  let nextPlan = [...plan];
  let summary = calculatePlanSummary(nextPlan, settings);
  const finalBudgetLimit = settings.totalBudget * 1.05;

  while (summary.finalTotal > finalBudgetLimit && nextPlan.length > 1) {
    const removable = nextPlan
      .filter((dish) => !fixedDishIds.has(dish.id))
      .sort((a, b) => {
        const penaltyA = isVegetable(a) ? 28 : isSoup(a) ? 22 : 0;
        const penaltyB = isVegetable(b) ? 28 : isSoup(b) ? 22 : 0;
        return b.price - penaltyB - (a.price - penaltyA);
      })[0];

    if (!removable) break;
    nextPlan = nextPlan.filter((dish) => dish.id !== removable.id);
      const replacement = cheapestBy(
      candidates,
      (dish) =>
        getPrimaryCategory(dish) === getPrimaryCategory(removable) ||
        (isVegetable(removable) && isVegetable(dish)) ||
        (isSoup(removable) && isSoup(dish)),
      new Set(nextPlan.map((dish) => dish.id)),
    );

    if (replacement && replacement.price < removable.price && canAddDish(nextPlan, replacement, false)) {
      addDish(nextPlan, replacement);
    }

    const newSummary = calculatePlanSummary(nextPlan, settings);
    if (newSummary.finalTotal >= summary.finalTotal && !replacement) break;
    summary = newSummary;
  }

  return nextPlan;
}

function canReplaceDish(plan, oldDish, newDish) {
  if (fixedDishIds.has(oldDish.id)) return false;
  if (!newDish || oldDish.id === newDish.id) return false;
  const withoutOld = plan.filter((dish) => dish.id !== oldDish.id);
  return canAddDish(withoutOld, newDish, true);
}

function getSlotForDish(dish) {
  if (isSoup(dish)) return "soup";
  if (isVegetable(dish)) return "vegetable";
  if (isBigDish(dish)) return "big";
  return "protein";
}

function improveBudgetUsage(plan, candidates, settings) {
  let nextPlan = [...plan];
  const budgetLimit = getBudgetLimit(settings);
  const targetSubtotal = getTargetBudgetSubtotal(settings);
  let guard = 0;

  while (getDishSubtotal(nextPlan) < targetSubtotal && guard < 12) {
    guard += 1;
    const currentSubtotal = getDishSubtotal(nextPlan);
    let bestMove = null;

    nextPlan.forEach((oldDish) => {
      const slot = getSlotForDish(oldDish);
      candidates.forEach((newDish) => {
        if (!canReplaceDish(nextPlan, oldDish, newDish)) return;

        const newSubtotal = currentSubtotal - oldDish.price + newDish.price;
        if (newSubtotal > budgetLimit) return;
        if (newSubtotal <= currentSubtotal) return;

        const oldGap = Math.abs(targetSubtotal - currentSubtotal);
        const newGap = Math.abs(targetSubtotal - newSubtotal);
        const slotBonus = getSlotPredicate(slot)(newDish) ? 10 : 0;
        const score = oldGap - newGap + slotBonus - (isHeavyDish(newDish) ? 8 : 0) - (isOrganDish(newDish) ? 10 : 0);

        if (!bestMove || score > bestMove.score) {
          bestMove = { oldDish, newDish, score, newSubtotal };
        }
      });
    });

    if (!bestMove || bestMove.score <= 0) break;
    nextPlan = nextPlan.map((dish) => (dish.id === bestMove.oldDish.id ? bestMove.newDish : dish));
  }

  return nextPlan;
}

function shuffleList(list) {
  const nextList = [...list];
  for (let index = nextList.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [nextList[index], nextList[swapIndex]] = [nextList[swapIndex], nextList[index]];
  }
  return nextList;
}

function getPlanCategoryDuplicates(plan) {
  const counts = plan.reduce((groups, dish) => {
    const key = getPrimaryCategory(dish);
    groups[key] = (groups[key] || 0) + 1;
    return groups;
  }, {});

  return Object.values(counts).reduce((sum, count) => sum + Math.max(0, count - 1), 0);
}

function scoreMealPlan(plan, candidates, settings, fixedDishes = []) {
  if (plan.length === 0) return -Infinity;

  const targetCount = Math.max(fixedDishes.length, Math.min(getTargetDishCount(settings), candidates.length));
  const summary = calculatePlanSummary(plan, settings);
  const budgetRatio = settings.totalBudget > 0 ? summary.budgetDiff / settings.totalBudget : 0;
  const absoluteBudgetRatio = Math.abs(budgetRatio);
  const vegetableCount = plan.filter(isVegetable).length;
  const soupCount = plan.filter(isSoup).length;
  const proteinCount = plan.filter(isProteinDish).length;
  const bigDishCount = plan.filter(isBigDish).length;
  const heavyCount = plan.filter(isHeavyDish).length;
  const organCount = plan.filter(isOrganDish).length;
  const fishCount = plan.filter((dish) => dish.type === "fish").length;
  const highPriceCount = plan.filter((dish) => dish.price >= 55).length;
  const fixedMissingCount = fixedDishes.filter((fixedDish) => !plan.some((dish) => dish.id === fixedDish.id)).length;
  const soupAllowed = !settings.excludedTags.includes("汤类");
  const bigDishAllowed = !settings.excludedTags.includes("大菜");
  const shouldHaveSoup = soupAllowed && targetCount >= 3;
  const shouldHaveBigDish = bigDishAllowed && settings.totalBudget >= 100 && targetCount >= 4;

  let score = 1000;

  if (absoluteBudgetRatio <= 0.05) {
    score += 260 - absoluteBudgetRatio * 1200;
  } else if (budgetRatio > 0) {
    score -= Math.min(260, absoluteBudgetRatio * 520);
  } else {
    score -= 360 + Math.abs(budgetRatio) * 900;
  }

  score -= Math.abs(plan.length - targetCount) * 120;
  score -= fixedMissingCount * 1000;
  score -= getPlanCategoryDuplicates(plan) * 52;
  score -= Math.max(0, vegetableCount - 2) * 42;
  score -= Math.max(0, soupCount - 1) * 90;
  score -= Math.max(0, fishCount - 1) * 88;
  score -= Math.max(0, organCount - 1) * 90;
  score -= Math.max(0, heavyCount - 1) * 88;
  score -= Math.max(0, highPriceCount - 1) * 46;

  if (vegetableCount === 0 && targetCount >= 3) score -= 150;
  if (proteinCount === 0) score -= 120;
  if (shouldHaveSoup && soupCount === 0) score -= 72;
  if (!soupAllowed && soupCount > 0) score -= 600;
  if (shouldHaveBigDish && bigDishCount === 0) score -= 62;
  if (!bigDishAllowed && bigDishCount > 0) score -= 600;
  if (bigDishCount > 1 && settings.peopleCount <= 4) score -= 76;
  if (summary.finalTotal > settings.totalBudget * 1.05) score -= 700;
  if (summary.finalTotal < settings.totalBudget * 0.82 && candidates.length > targetCount) score -= 160;

  plan.forEach((dish) => {
    if (isOrganDish(dish)) score -= 14;
    if (isHeavyDish(dish)) score -= 12;
    if (dish.price >= 55 && settings.totalBudget < 120) score -= 28;
    if (isVegetable(dish) && dish.price <= 18) score += 8;
    if (isSoup(dish) && dish.price <= 20) score += 10;
    if (hasDishCategory(dish, "家常小炒")) score += 5;
  });

  return score;
}

function buildCandidatePlan(candidates, settings, fixedDishes = [], attempt = 0) {
  const targetCount = Math.max(fixedDishes.length, Math.min(getTargetDishCount(settings), candidates.length));
  const plan = [...fixedDishes];
  const slots = attempt % 3 === 0 ? getMealSlots(settings) : shuffleList(getMealSlots(settings));
  const budgetLimit = getBudgetLimit(settings);
  const pickOptions = { weighted: attempt > 0, noise: attempt === 0 ? 1 : 12 };

  slots.forEach((slot) => {
    if (plan.length >= targetCount) return;
    const dish = pickForSlot(candidates, plan, settings, slot, true, pickOptions);
    addDish(plan, dish);
  });

  while (plan.length < targetCount && plan.reduce((sum, dish) => sum + dish.price, 0) < budgetLimit * 0.88) {
    const slot = plan.filter(isVegetable).length < 1 ? "vegetable" : "protein";
    const nextDish =
      pickForSlot(candidates, plan, settings, slot, true, pickOptions) ||
      pickForSlot(candidates, plan, settings, slot, false, pickOptions);
    if (!nextDish) break;
    addDish(plan, nextDish);
  }

  while (plan.length < Math.min(targetCount, fixedDishes.length + 2)) {
    const remaining = candidates.filter((dish) => canAddDish(plan, dish, false));
    if (remaining.length === 0) break;
    addDish(plan, remaining.sort((a, b) => a.price - b.price)[0]);
  }

  const budgetedPlan = trimToBudget(plan, candidates, settings);
  return improveBudgetUsage(budgetedPlan, candidates, settings);
}

function getPlanSignature(plan) {
  return plan
    .map((dish) => dish.id)
    .sort((a, b) => a - b)
    .join("-");
}

function pickPlanFromTop(scoredPlans) {
  const uniquePlans = [];
  const seenSignatures = new Set();

  scoredPlans
    .sort((a, b) => b.score - a.score)
    .forEach((item) => {
      const signature = getPlanSignature(item.plan);
      if (seenSignatures.has(signature)) return;
      seenSignatures.add(signature);
      uniquePlans.push(item);
    });

  const bestScore = uniquePlans[0]?.score ?? -Infinity;
  const strongPlans = uniquePlans.filter((item, index) => index < 8 && item.score >= bestScore - 85);
  const pickPool = strongPlans.length > 1 ? strongPlans : uniquePlans.slice(0, Math.min(4, uniquePlans.length));
  const weightTotal = pickPool.reduce((sum, item, index) => sum + Math.max(1, 12 - index * 2), 0);
  let marker = Math.random() * weightTotal;

  for (const [index, item] of pickPool.entries()) {
    marker -= Math.max(1, 12 - index * 2);
    if (marker <= 0) return item.plan;
  }

  return pickPool[0]?.plan || [];
}

function generateBalancedPlan(candidates, settings, fixedDishes = []) {
  const attempts = Math.min(120, Math.max(36, candidates.length * 2));
  const scoredPlans = [];

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const candidatePlan = buildCandidatePlan(candidates, settings, fixedDishes, attempt);
    const candidateScore = scoreMealPlan(candidatePlan, candidates, settings, fixedDishes);
    scoredPlans.push({ plan: candidatePlan, score: candidateScore });
  }

  return sortPlanDishes(pickPlanFromTop(scoredPlans));
}

function renderSummary() {
  const settings = getSettings();
  const summary = calculatePlanSummary(currentPlan, settings);

  elements.dishSubtotal.textContent = money(summary.dishSubtotal);
  elements.tablewareTotal.textContent = money(summary.tablewareTotal);
  elements.beforeDiscountTotal.textContent = money(summary.beforeDiscountTotal);
  elements.discountLabel.textContent = settings.discount.toFixed(2);
  elements.finalTotal.textContent = money(summary.finalTotal);
  elements.perPerson.textContent = money(summary.perPerson);

  elements.budgetStatus.classList.remove("ok", "over", "neutral");
  if (currentPlan.length === 0) {
    elements.budgetStatus.textContent = "还没生成方案";
    elements.budgetStatus.classList.add("neutral");
  } else if (Math.abs(summary.budgetDiff) <= settings.totalBudget * 0.05) {
    elements.budgetStatus.textContent =
      summary.budgetDiff >= 0 ? `预算附近，剩 ${money(summary.budgetDiff)}` : `预算附近，超 ${money(Math.abs(summary.budgetDiff))}`;
    elements.budgetStatus.classList.add("ok");
  } else if (summary.budgetDiff > 0) {
    elements.budgetStatus.textContent = `预算内，剩 ${money(summary.budgetDiff)}`;
    elements.budgetStatus.classList.add("ok");
  } else {
    elements.budgetStatus.textContent = `超预算 ${money(Math.abs(summary.budgetDiff))}`;
    elements.budgetStatus.classList.add("over");
  }
}

function renderPlan() {
  if (currentPlan.length === 0) {
    elements.planList.innerHTML = `
      <div class="empty-plan">
        <strong>还没开始点菜</strong>
        <span>按当前人数、预算和排除标签，自动配一桌更接近预算的菜单。</span>
        <button class="primary-action inline-generate" type="button" data-generate-inline>自动配一桌</button>
      </div>
    `;
    renderSummary();
    return;
  }

  elements.planList.innerHTML = currentPlan
    .map(
      (dish) => {
        const fixed = fixedDishIds.has(dish.id);
        return `
        <div class="plan-item ${fixed ? "is-fixed" : "is-random"}">
          <div>
            <div class="dish-title">
              <strong>${dish.name}</strong>
              <em class="source-pill ${fixed ? "fixed" : "random"}">${fixed ? "固定" : "随机"}</em>
            </div>
            <span>${getDishLabel(dish)}</span>
            ${getDishCategorySelect(dish, "inline-category-select", "data-plan-category-id")}
          </div>
          <b class="plan-price">${dish.price} 元</b>
          <div class="plan-actions">
            <button class="icon-button pin-action" type="button" data-toggle-fixed-id="${dish.id}" aria-label="${fixed ? "取消固定" : "固定"}${dish.name}">
              ${fixed ? "取消固定" : "固定这道"}
            </button>
            <button class="icon-button remove-action" type="button" data-remove-id="${dish.id}" aria-label="删除${dish.name}">删除</button>
          </div>
        </div>
      `;
      },
    )
    .join("");
  renderSummary();
  renderPlanSearchResults();
}

function renderPlanSearchResults() {
  const term = elements.planSearch.value.trim().toLowerCase();
  if (!term) {
    elements.planSearchResults.innerHTML = "";
    return;
  }

  const matches = dishes
    .filter((dish) => {
      const haystack = `${dish.name} ${getDishCategories(dish).join(" ")} ${getDishTags(dish).join(" ")}`.toLowerCase();
      return haystack.includes(term);
    })
    .slice(0, 6);

  if (matches.length === 0) {
    elements.planSearchResults.innerHTML = '<p class="empty-state">没搜到这道菜</p>';
    return;
  }

  elements.planSearchResults.innerHTML = matches
    .map((dish) => {
      const isFixed = fixedDishIds.has(dish.id);
      const inPlan = currentPlan.some((item) => item.id === dish.id);
      const disabled = isFixed || inPlan;
      return `
        <div class="plan-search-item">
          <div>
            <strong>${dish.name}</strong>
            <span>${getDishLabel(dish)}</span>
          </div>
          <b class="plan-search-price">${dish.price} 元</b>
          <button class="mini-action" type="button" data-plan-add-id="${dish.id}" ${disabled ? "disabled" : ""}>
            ${isFixed ? "已固定" : inPlan ? "已在方案" : "加入"}
          </button>
        </div>
      `;
    })
    .join("");
}

function getTypeLabel(type) {
  return { fish: "鱼类", soup: "汤类" }[type] || type;
}

function getDishLabel(dish) {
  const tags = getDishTags(dish);
  return [...new Set([...getDishCategories(dish), ...tags])].join(" · ");
}

function getRatingStars(dishId) {
  const rating = getDishRating(dishId);
  return [1, 2, 3, 4, 5]
    .map(
      (value) => `
        <button class="star-button ${rating >= value ? "active" : ""}" type="button" data-rate-id="${dishId}" data-rating="${value}" aria-label="${value}分">
          ★
        </button>
      `,
    )
    .join("");
}

function getRatingText(dishId) {
  const rating = getDishRating(dishId);
  return rating ? `评分 ${rating}分` : "未评分";
}

function saveCurrentPlanToWeek() {
  if (currentPlan.length === 0) return;
  const settings = getSettings();
  const summary = calculatePlanSummary(currentPlan, settings);
  const snapshot = {
    id: Date.now(),
    weekKey: getWeekKey(),
    savedAt: new Date().toISOString(),
    dishes: currentPlan.map(({ id, name, price, category, categories, type }) => ({
      id,
      name,
      price,
      category,
      categories,
      type,
    })),
    total: summary.finalTotal,
    peopleCount: settings.peopleCount,
  };
  saveCurrentWeekPlans([snapshot, ...getCurrentWeekPlans()]);
  renderWeeklyPlans();
  renderCalendar();
  renderCandidates();
}

function renderWeeklyPlans() {
  const plans = getCurrentWeekPlans();

  if (plans.length === 0) {
    elements.weeklyList.innerHTML = '<li class="empty-state">本周还没有保存菜单</li>';
    return;
  }

  elements.weeklyList.innerHTML = plans
    .map(
      (plan) => `
        <li class="weekly-plan">
          <strong>${plan.peopleCount} 人 · ${money(plan.total)}</strong>
          <time>${new Date(plan.savedAt).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })}</time>
          <div class="weekly-dishes">
            ${plan.dishes
              .map(
                (dish) => `
                  <div class="weekly-dish">
                    <span>${dish.name}</span>
                    <small>${dish.categories ? dish.categories.join(" · ") : dish.category}</small>
                    <small>${getRatingText(dish.id)}</small>
                    <div class="rating-control compact" aria-label="${dish.name}评分">${getRatingStars(dish.id)}</div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </li>
      `,
    )
    .join("");
}

function renderCalendar() {
  const monthStart = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1);
  const monthEnd = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0);
  const gridStart = new Date(monthStart);
  gridStart.setDate(monthStart.getDate() - ((monthStart.getDay() + 6) % 7));

  const plansByDate = getPlansByDate();
  const currentMonthKey = getMonthKey(monthStart);
  const monthPlans = getAllSavedPlans().filter((plan) => getMonthKey(plan.savedAt) === currentMonthKey);
  const totalSavedDays = new Set(monthPlans.map((plan) => getDateKey(plan.savedAt))).size;
  const todayKey = getDateKey(new Date());

  elements.calendarMonth.textContent = monthStart.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
  });
  elements.calendarSummary.textContent =
    monthPlans.length > 0
      ? `本月 ${totalSavedDays} 天有记录，共保存 ${monthPlans.length} 套菜单`
      : "这个月还没有保存菜单";

  const dayCells = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    const dateKey = getDateKey(date);
    const dayPlans = plansByDate[dateKey] || [];
    const isCurrentMonth = date.getMonth() === monthStart.getMonth();
    const isToday = dateKey === todayKey;
    const classes = [
      "calendar-day",
      isCurrentMonth ? "" : "is-outside",
      isToday ? "is-today" : "",
      dayPlans.length ? "has-plan" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return `
      <article class="${classes}">
        <div class="calendar-day-head">
          <time datetime="${dateKey}">${date.getDate()}</time>
          ${dayPlans.length ? `<span>${dayPlans.length} 餐</span>` : ""}
        </div>
        <div class="calendar-day-plans">
          ${dayPlans
            .slice(0, 2)
            .map(
              (plan) => `
                <div class="calendar-plan">
                  <div class="calendar-plan-head">
                    <strong>${plan.peopleCount} 人 · ${money(plan.total)}</strong>
                    <time>${new Date(plan.savedAt).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}</time>
                  </div>
                  <div class="calendar-dish-tags">
                    ${plan.dishes
                      .slice(0, 4)
                      .map((dish) => `<span>${dish.name}</span>`)
                      .join("")}
                    ${plan.dishes.length > 4 ? `<em>+${plan.dishes.length - 4}</em>` : ""}
                  </div>
                </div>
              `,
            )
            .join("")}
          ${dayPlans.length > 2 ? `<em>还有 ${dayPlans.length - 2} 套</em>` : ""}
        </div>
      </article>
    `;
  });

  elements.calendarGrid.innerHTML = dayCells.join("");
}

function renderCandidates() {
  const candidates = getFilteredDishes({ forRandom: false });
  const settings = getSettings();
  elements.candidateCount.textContent = `${candidates.length} 道菜`;

  if (candidates.length === 0) {
    elements.dishGrid.innerHTML = '<p class="empty-state">没有符合条件的候选菜，换个关键词或取消排除项试试。</p>';
    return;
  }

  elements.dishGrid.innerHTML = candidates
    .map((dish) => {
      const inPlan = currentPlan.some((item) => item.id === dish.id);
      const isFixed = fixedDishIds.has(dish.id);
      const state = getDishFilterState(dish, settings);
      const statusPills = [
        isFixed ? '<em class="source-pill fixed">已固定</em>' : "",
        state.eatenThisWeek ? '<em class="source-pill muted">本周已吃</em>' : "",
        state.lowRated ? '<em class="source-pill warning">低分</em>' : "",
      ].join("");
        return `
        <div class="dish-chip ${isFixed ? "is-fixed" : ""} ${state.eatenThisWeek || state.lowRated ? "is-muted" : ""}">
          <div class="dish-chip-head">
            <strong>${dish.name}</strong>
            <b>${dish.price} 元</b>
          </div>
          <span class="dish-meta">${getDishLabel(dish)}</span>
          ${getDishCategorySelect(dish, "inline-category-select", "data-menu-category-id")}
          <span class="dish-rating">${getRatingText(dish.id)}</span>
          <div class="dish-chip-footer">
            <div class="dish-status">${statusPills}</div>
            <button class="mini-action" type="button" data-add-id="${dish.id}" ${isFixed ? "disabled" : ""}>
              ${isFixed ? "已固定" : inPlan ? "固定这道" : "固定"}
            </button>
          </div>
        </div>
      `;
    })
    .join("");
}

function getRatingMaintenanceDishes() {
  const searchTerm = elements.ratingSearch.value.trim().toLowerCase();
  const category = elements.ratingCategory.value;
  const status = elements.ratingStatus.value;

  return dishes.filter((dish) => {
    const dishTags = getDishTags(dish);
    const rating = getDishRating(dish.id);
    const inCategory = category === "all" || hasDishCategory(dish, category);
    const inStatus =
      status === "all" ||
      (status === "rated" && rating > 0) ||
      (status === "unrated" && rating === 0) ||
      (status === "low" && rating > 0 && rating < 3);
    const searchText = `${dish.name} ${getDishCategories(dish).join(" ")} ${dishTags.join(" ")}`.toLowerCase();
    const matchesSearch = !searchTerm || searchText.includes(searchTerm);
    return inCategory && inStatus && matchesSearch;
  });
}

function getRatingStatsText(visibleCount) {
  const ratings = getDishRatings();
  const ratedTotal = dishes.filter((dish) => Number(ratings[dish.id]) > 0).length;
  const lowRatedTotal = dishes.filter((dish) => {
    const rating = Number(ratings[dish.id]) || 0;
    return rating > 0 && rating < 3;
  }).length;
  return `${visibleCount} 道菜 · 已评分 ${ratedTotal} · 未评分 ${dishes.length - ratedTotal} · 低分 ${lowRatedTotal}`;
}

function renderRatingCard(dish) {
  const tags = getDishTags(dish);
  const rating = getDishRating(dish.id);
  const ratingClass = rating === 0 ? "unrated" : rating < 3 ? "low" : "good";
  return `
    <div class="rating-card ${ratingClass}">
      <div class="rating-card-head">
        <strong>${dish.name}</strong>
        <b>${dish.price} 元</b>
      </div>
      <span class="rating-tags">${[...getDishCategories(dish), ...tags].join(" · ")}</span>
      ${getDishCategorySelect(dish, "inline-category-select", "data-rating-category-id")}
      <div class="rating-card-foot">
        <div class="rating-card-status">
          <span>${getRatingText(dish.id)}</span>
          <button class="clear-rating" type="button" data-clear-rating-id="${dish.id}" ${rating === 0 ? "disabled" : ""}>清空</button>
        </div>
        <div class="rating-control" aria-label="${dish.name}评分">${getRatingStars(dish.id)}</div>
      </div>
    </div>
  `;
}

function refreshRatingMaintenanceDish(dishId) {
  elements.ratingCount.textContent = getRatingStatsText(getRatingMaintenanceDishes().length);
  const dish = dishes.find((item) => item.id === dishId);
  if (!dish) return;
  const card = elements.ratingList
    .querySelector(`[data-clear-rating-id="${dishId}"]`)
    ?.closest(".rating-card");
  if (card) card.outerHTML = renderRatingCard(dish);
}

function renderRatingMaintenance() {
  const maintenanceDishes = getRatingMaintenanceDishes();
  elements.ratingCount.textContent = getRatingStatsText(maintenanceDishes.length);

  if (maintenanceDishes.length === 0) {
    elements.ratingList.innerHTML = '<p class="empty-state">没有符合条件的菜，换个关键词或分类试试。</p>';
    return;
  }

  elements.ratingList.innerHTML = maintenanceDishes
    .map(renderRatingCard)
    .join("");
}

function generateMealPlan() {
  const candidates = getFilteredDishes({ forRandom: true });
  const fixedDishes = dishes.filter((dish) => fixedDishIds.has(dish.id));

  if (candidates.length === 0 && fixedDishes.length === 0) {
    currentPlan = [];
    elements.planList.innerHTML = '<p class="empty-state">没有符合条件的菜，放宽一下分类或类型。</p>';
    renderSummary();
    renderCandidates();
    return;
  }

  const availableCandidates = [...new Map([...fixedDishes, ...candidates].map((dish) => [dish.id, dish])).values()];
  currentPlan = generateBalancedPlan(availableCandidates, getSettings(), fixedDishes);
  renderPlan();
  renderCandidates();
}

function removeDish(id) {
  fixedDishIds.delete(id);
  currentPlan = currentPlan.filter((dish) => dish.id !== id);
  renderPlan();
  renderCandidates();
  renderPlanSearchResults();
}

function addDishToPlan(id) {
  const dish = dishes.find((item) => item.id === id);
  if (!dish || fixedDishIds.has(id)) return;
  fixedDishIds.add(id);
  if (!currentPlan.some((item) => item.id === id)) currentPlan = [...currentPlan, dish];
  currentPlan = sortPlanDishes(currentPlan);
  renderPlan();
  renderCandidates();
  renderPlanSearchResults();
}

function togglePlanFixed(id) {
  const dish = currentPlan.find((item) => item.id === id);
  if (!dish) return;

  if (fixedDishIds.has(id)) {
    fixedDishIds.delete(id);
  } else {
    fixedDishIds.add(id);
  }

  currentPlan = sortPlanDishes(currentPlan);
  renderPlan();
  renderCandidates();
  renderPlanSearchResults();
}

function normalizeInputs() {
  const settings = getSettings();
  elements.peopleCount.value = settings.peopleCount;
  elements.totalBudget.value = settings.totalBudget;
  elements.tablewareFee.value = settings.tablewareFee;
  elements.discount.value = settings.discount.toFixed(2);
  elements.dishCount.value = settings.dishCountMode === "auto" ? "" : settings.dishCountMode;
  elements.minRating.value = settings.minRating === "none" ? "none" : String(settings.minRating);
}

function handleSettingsChange() {
  normalizeInputs();
  renderSummary();
  renderCandidates();
}

function handleSettingsInput() {
  renderSummary();
  renderCandidates();
}

function preserveScrollPosition(callback, anchorElement) {
  const pageScrollX = window.scrollX;
  const pageScrollY = window.scrollY;
  const ratingScrollTop = elements.ratingList.scrollTop;
  const anchorId =
    anchorElement?.querySelector("[data-clear-rating-id]")?.dataset.clearRatingId ||
    anchorElement?.querySelector("[data-rate-id]")?.dataset.rateId;
  const anchorTop = anchorElement?.getBoundingClientRect().top;

  const restore = () => {
    elements.ratingList.scrollTop = ratingScrollTop;
    if (anchorId && Number.isFinite(anchorTop)) {
      const nextAnchor = elements.ratingList
        .querySelector(`[data-clear-rating-id="${anchorId}"]`)
        ?.closest(".rating-card");
      if (nextAnchor) {
        elements.ratingList.scrollTop += nextAnchor.getBoundingClientRect().top - anchorTop;
      }
    }
    window.scrollTo(pageScrollX, pageScrollY);
  };

  callback();
  restore();
  requestAnimationFrame(restore);
}

function handleRatingClick(event) {
  const button = event.target.closest("[data-rate-id]");
  if (!button) return false;
  const anchorElement = button.closest(".rating-card");
  preserveScrollPosition(() => {
    setDishRating(Number(button.dataset.rateId), Number(button.dataset.rating));
    renderWeeklyPlans();
    renderCalendar();
    renderCandidates();
    refreshRatingMaintenanceDish(Number(button.dataset.rateId));
  }, anchorElement);
  return true;
}

function handleClearRatingClick(event) {
  const button = event.target.closest("[data-clear-rating-id]");
  if (!button) return false;
  const anchorElement = button.closest(".rating-card");
  preserveScrollPosition(() => {
    setDishRating(Number(button.dataset.clearRatingId), 0);
    renderWeeklyPlans();
    renderCalendar();
    renderCandidates();
    refreshRatingMaintenanceDish(Number(button.dataset.clearRatingId));
  }, anchorElement);
  return true;
}

function bindEvents() {
  elements.tabButtons.forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tab));
  });

  elements.addCategoryButton?.addEventListener("click", () => {
    const value = elements.categoryNameInput?.value || "";
    createCategory(value);
    if (elements.categoryNameInput) elements.categoryNameInput.value = "";
  });

  elements.categoryNameInput?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const value = elements.categoryNameInput.value || "";
    createCategory(value);
    if (elements.categoryNameInput) elements.categoryNameInput.value = "";
  });

  elements.categoryList?.addEventListener("click", (event) => {
    const renameTarget = event.target.closest("[data-rename-category]");
    if (renameTarget) {
      renameCategory(renameTarget.dataset.renameCategory);
      return;
    }

    const deleteTarget = event.target.closest("[data-delete-category]");
    if (deleteTarget) {
      deleteCategory(deleteTarget.dataset.deleteCategory);
    }
  });

  elements.generateButton.addEventListener("click", generateMealPlan);
  elements.saveWeeklyPlan.addEventListener("click", saveCurrentPlanToWeek);
  elements.clearPlan.addEventListener("click", () => {
    currentPlan = [];
    fixedDishIds = new Set();
    renderPlan();
    renderCandidates();
    renderPlanSearchResults();
  });
  elements.clearWeekly.addEventListener("click", () => {
    saveCurrentWeekPlans([]);
    renderWeeklyPlans();
    renderCalendar();
    renderCandidates();
  });

  elements.calendarPrev.addEventListener("click", () => {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1);
    renderCalendar();
  });

  elements.calendarToday.addEventListener("click", () => {
    calendarDate = new Date();
    renderCalendar();
  });

  elements.calendarNext.addEventListener("click", () => {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1);
    renderCalendar();
  });

  [elements.peopleCount, elements.totalBudget, elements.tablewareFee, elements.discount, elements.dishCount].forEach((element) => {
    element.addEventListener("input", handleSettingsInput);
    element.addEventListener("change", handleSettingsChange);
  });

  elements.menuSearch.addEventListener("input", handleSettingsChange);
  elements.planSearch.addEventListener("input", renderPlanSearchResults);
  elements.ratingSearch.addEventListener("input", renderRatingMaintenance);

  [elements.category, elements.minRating].forEach(
    (element) => element.addEventListener("change", handleSettingsChange),
  );
  [elements.ratingCategory, elements.ratingStatus].forEach((element) => {
    element.addEventListener("change", renderRatingMaintenance);
  });

  elements.excludedTags.addEventListener("change", handleSettingsChange);

  elements.planList.addEventListener("click", (event) => {
    const inlineGenerateButton = event.target.closest("[data-generate-inline]");
    if (inlineGenerateButton) {
      generateMealPlan();
      return;
    }

    const fixedButton = event.target.closest("[data-toggle-fixed-id]");
    if (fixedButton) {
      togglePlanFixed(Number(fixedButton.dataset.toggleFixedId));
      return;
    }

    const button = event.target.closest("[data-remove-id]");
    if (!button) return;
    removeDish(Number(button.dataset.removeId));
  });

  elements.planList.addEventListener("change", (event) => {
    const select = event.target.closest("[data-plan-category-id]");
    if (!select || !(select instanceof HTMLSelectElement)) return;
    setDishPrimaryCategory(Number(select.dataset.planCategoryId), select.value);
  });

  elements.planSearchResults.addEventListener("click", (event) => {
    const button = event.target.closest("[data-plan-add-id]");
    if (!button) return;
    addDishToPlan(Number(button.dataset.planAddId));
  });

  elements.dishGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-id]");
    if (!button) return;
    addDishToPlan(Number(button.dataset.addId));
  });

  elements.dishGrid.addEventListener("change", (event) => {
    const select = event.target.closest("[data-menu-category-id]");
    if (!select || !(select instanceof HTMLSelectElement)) return;
    setDishPrimaryCategory(Number(select.dataset.menuCategoryId), select.value);
  });

  elements.ratingList.addEventListener("click", (event) => {
    if (handleClearRatingClick(event)) return;
    handleRatingClick(event);
  });

  elements.ratingList.addEventListener("change", (event) => {
    const select = event.target.closest("[data-rating-category-id]");
    if (!select || !(select instanceof HTMLSelectElement)) return;
    setDishPrimaryCategory(Number(select.dataset.ratingCategoryId), select.value);
  });

  elements.weeklyList.addEventListener("click", (event) => {
    handleRatingClick(event);
  });

  if (elements.cloudSaveConfig) elements.cloudSaveConfig.addEventListener("click", saveCloudConfigFromUi);
  if (elements.cloudPull) elements.cloudPull.addEventListener("click", () => syncNow("pull"));
  if (elements.cloudPush) elements.cloudPush.addEventListener("click", () => syncNow("push"));
  if (elements.cloudSyncToggle) elements.cloudSyncToggle.addEventListener("click", toggleAutoSync);
  if (elements.supabaseRoom) {
    elements.supabaseRoom.addEventListener("change", () => {
      saveSupabaseRoom();
      setSyncStatus(`已切换同步房间：${getSupabaseRoom()}`, "ok");
    });
  }
  if (elements.supabasePull) elements.supabasePull.addEventListener("click", () => syncSupabaseNow("pull"));
  if (elements.supabasePush) elements.supabasePush.addEventListener("click", () => syncSupabaseNow("push"));
  if (elements.supabaseAutoToggle) elements.supabaseAutoToggle.addEventListener("click", toggleSupabaseAutoSync);
  if (elements.clearSyncData) elements.clearSyncData.addEventListener("click", clearSyncDataState);
  if (elements.cloudCopyCode) elements.cloudCopyCode.addEventListener("click", copySyncCode);
  if (elements.cloudApplyCode) elements.cloudApplyCode.addEventListener("click", applySyncCodeFromPrompt);
}

hydrateCategoryData(false);
migrateCategoryData();
populateCategories();
renderCategoryBoard();
bindEvents();
const initialCloudConfig = getCloudSyncConfig();
if (elements.cloudRepo) elements.cloudRepo.value = initialCloudConfig.repo || "Tlyyy/ZWCSM";
if (elements.cloudBranch) elements.cloudBranch.value = initialCloudConfig.branch || "main";
if (elements.cloudPath) elements.cloudPath.value = initialCloudConfig.path || "data/zwcsm-state.json";
if (elements.cloudToken) elements.cloudToken.value = "";
if (elements.cloudSyncToggle) elements.cloudSyncToggle.textContent = initialCloudConfig.autoSync ? "关闭自动同步" : "开启自动同步";
if (elements.supabaseRoom) elements.supabaseRoom.value = localStorage.getItem(supabaseRoomKey) || "zwcsm";
if (elements.supabaseAutoToggle) {
  elements.supabaseAutoToggle.textContent = isSupabaseAutoSyncEnabled() ? "关闭自动同步" : "开启自动同步";
}
setSyncStatus("当前数据默认保存在当前浏览器，可用 Supabase 房间号跨设备同步。");
normalizeInputs();
renderPlan();
renderPlanSearchResults();
renderCandidates();
renderWeeklyPlans();
renderCalendar();
renderRatingMaintenance();
activateTab(localStorage.getItem(activeTabKey) || "planner");

if (initialCloudConfig.autoSync) {
  startAutoSync();
}

if (isSupabaseAutoSyncEnabled()) {
  startSupabaseAutoSync();
}
