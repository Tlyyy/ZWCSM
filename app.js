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
  { name: "清炒花菜", price: 15, category: "田园时蔬" },

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
  { name: "猪蹄压黄豆", price: 45, category: "特色菜" },
  { name: "干锅黄金虾", price: 55, category: "特色菜" },
  { name: "莲花鸭血", price: 48, category: "特色菜" },
  { name: "水煮牛肉", price: 55, category: "特色菜" },
  { name: "椒盐小酥肉", price: 32, category: "特色菜" },
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
  { name: "农家小炒肉", price: 32, category: "盖菜类" },
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

  { id: 1001, name: "毛血旺", price: 50, category: "特色菜" },
].map((dish, index) => ({ id: index + 1, ...dish }));

const weeklyPlansKey = "lunch-picker-weekly-plans-v1";
const dishRatingsKey = "lunch-picker-dish-ratings-v1";
const activeTabKey = "lunch-picker-active-tab-v1";
const activeBaseTabKey = "lunch-picker-active-base-tab-v1";
const categoryDataKey = "lunch-picker-category-data-v1";
const categoryDataVersion = 2;
const cloudSyncConfigKey = "lunch-picker-cloud-sync-config-v1";
const supabaseRoomKey = "lunch-picker-supabase-room-v1";
const supabaseAutoSyncKey = "lunch-picker-supabase-auto-sync-v1";
const syncApiUrl = "/api/sync";
const defaultSyncRoom = "zwcsm";
const DEFAULT_CATEGORY = "未分类";
const exclusionTagGroups = [
  { name: "忌口", tags: ["内脏", "鱼类", "豆制品", "蛋类"] },
  { name: "口味", tags: ["辣口", "重口菜", "腌腊类", "油炸干煸"] },
  { name: "菜型", tags: ["汤类", "干锅", "大菜", "骨头类"] },
  { name: "预算", tags: ["高价菜"] },
];
const exclusionTags = exclusionTagGroups.flatMap((group) => group.tags);

let dishes = [];
let categoryCatalog = [];
let currentPlan = [];
let fixedDishIds = new Set();
let backfillDishIds = new Set();
let calendarDate = new Date();
let currentReviewVariant = 0;
let recommendationHistory = [];
const maxRecommendationHistory = 8;

const elements = {
  tabButtons: document.querySelectorAll("[data-tab]"),
  tabPanels: document.querySelectorAll("[data-tab-panel]"),
  baseTabButtons: document.querySelectorAll("[data-base-tab]"),
  basePanels: document.querySelectorAll("[data-base-panel]"),
  peopleCount: document.querySelector("#people-count"),
  totalBudget: document.querySelector("#total-budget"),
  tablewareFee: document.querySelector("#tableware-fee"),
  discount: document.querySelector("#discount"),
  dishCount: document.querySelector("#dish-count"),
  category: document.querySelector("#category"),
  minRating: document.querySelector("#min-rating"),
  mealMode: document.querySelector("#meal-mode"),
  eatenWeekScope: document.querySelector("#eaten-week-scope"),
  menuSearch: document.querySelector("#menu-search"),
  excludedTags: document.querySelector("#excluded-tags"),
  generateButton: document.querySelector("#generate-button"),
  saveWeeklyPlan: document.querySelector("#save-weekly-plan"),
  copyMenu: document.querySelector("#copy-menu"),
  clearPlan: document.querySelector("#clear-plan"),
  clearWeekly: document.querySelector("#clear-weekly"),
  backfillSearch: document.querySelector("#backfill-search"),
  backfillSearchResults: document.querySelector("#backfill-search-results"),
  backfillPeople: document.querySelector("#backfill-people"),
  backfillDatetime: document.querySelector("#backfill-datetime"),
  backfillTotal: document.querySelector("#backfill-total"),
  backfillList: document.querySelector("#backfill-list"),
  saveBackfill: document.querySelector("#save-backfill"),
  clearBackfill: document.querySelector("#clear-backfill"),
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
  explainCard: document.querySelector("#explain-card"),
  explainText: document.querySelector("#explain-text"),
  reviewCard: document.querySelector("#review-card"),
  reviewText: document.querySelector("#review-text"),
  copyReview: document.querySelector("#copy-review"),
  shuffleReview: document.querySelector("#shuffle-review"),
  weeklyList: document.querySelector("#weekly-list"),
  dishGrid: document.querySelector("#dish-grid"),
  candidateCount: document.querySelector("#candidate-count"),
  calendarGrid: document.querySelector("#calendar-grid"),
  calendarMonth: document.querySelector("#calendar-month"),
  calendarSummary: document.querySelector("#calendar-summary"),
  calendarInsights: document.querySelector("#calendar-insights"),
  calendarRecordList: document.querySelector("#calendar-record-list"),
  calendarRecordCount: document.querySelector("#calendar-record-count"),
  calendarPrev: document.querySelector("#calendar-prev"),
  calendarToday: document.querySelector("#calendar-today"),
  calendarNext: document.querySelector("#calendar-next"),
  clearMonthHistory: document.querySelector("#clear-month-history"),
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
  const legacyTabMap = {
    menu: "base",
    categories: "base",
    ratings: "base",
  };
  const legacyBaseTabMap = {
    menu: "base-menu",
    categories: "base-categories",
    ratings: "base-ratings",
  };
  if (legacyBaseTabMap[tabName]) {
    activateBaseTab(legacyBaseTabMap[tabName]);
  }
  const availableTabs = [...elements.tabButtons].map((button) => button.dataset.tab);
  const normalizedTab = legacyTabMap[tabName] || tabName;
  const nextTab = availableTabs.includes(normalizedTab) ? normalizedTab : fallbackTab;
  const currentTab = [...elements.tabButtons].find((button) => button.classList.contains("is-active"))?.dataset.tab;

  if (currentTab === nextTab) {
    localStorage.setItem(activeTabKey, nextTab);
    return;
  }

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

function activateBaseTab(tabName) {
  if (!elements.baseTabButtons.length) return;
  const availableTabs = [...elements.baseTabButtons].map((button) => button.dataset.baseTab);
  const nextTab = availableTabs.includes(tabName) ? tabName : "base-menu";

  elements.baseTabButtons.forEach((button) => {
    const isActive = button.dataset.baseTab === nextTab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  elements.basePanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.basePanel === nextTab);
  });

  localStorage.setItem(activeBaseTabKey, nextTab);
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
    discount: clampNumber(elements.discount.value, 0.1, 1, 0.9),
    dishCountMode: dishCountValue === "" ? "auto" : clampNumber(dishCountValue, 1, 10, 4),
    category: elements.category.value,
    minRating: minRatingValue === "none" ? "none" : clampNumber(minRatingValue, 1, 5, 3),
    mealMode: elements.mealMode?.value || "normal",
    eatenWeekScope: clampNumber(elements.eatenWeekScope?.value, 0, 4, 1),
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
let hasCompletedInitialCloudPull = false;

function buildSyncPayload() {
  return {
    app: "ZWCSM",
    schema: 2,
    updatedAt: new Date().toISOString(),
    categoryData: readJsonStorage(categoryDataKey, null),
    weeklyPlans: readJsonStorage(weeklyPlansKey, {}),
    dishRatings: readJsonStorage(dishRatingsKey, {}),
  };
}

function getSupabaseRoom() {
  return defaultSyncRoom;
}

function saveSupabaseRoom() {
  localStorage.setItem(supabaseRoomKey, defaultSyncRoom);
}

function isSupabaseAutoSyncEnabled() {
  return localStorage.getItem(supabaseAutoSyncKey) !== "false";
}

function setSupabaseAutoSyncEnabled(enabled) {
  localStorage.setItem(supabaseAutoSyncKey, String(enabled));
}

async function callSyncApi(options = {}) {
  const response = await fetch(syncApiUrl, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const result = await response.json().catch(() => null);
  if (!response.ok) {
    const message = result?.error || result?.message || response.statusText;
    throw new Error(message);
  }
  return result;
}

async function pullSupabaseState({ silent = false } = {}) {
  saveSupabaseRoom();
  const roomId = getSupabaseRoom();
  const result = await callSyncApi({
    method: "GET",
    headers: {
      "X-Sync-Room": roomId,
    },
  });

  if (!result?.found) {
    if (!silent) setSyncStatus("云端还没有数据，修改后会自动保存。", "warning");
    return false;
  }

  isApplyingRemoteState = true;
  try {
    applySyncPayload(result.data);
    refreshAllViews();
  } finally {
    isApplyingRemoteState = false;
  }

  if (!silent) {
    setSyncStatus("已读取云端最新数据。", "ok");
  }
  return true;
}

async function pushSupabaseState({ silent = false } = {}) {
  saveSupabaseRoom();
  const roomId = getSupabaseRoom();
  setSyncStatus("保存中...", "warning");
  await callSyncApi({
    method: "PUT",
    body: JSON.stringify({
      roomId,
      data: buildSyncPayload(),
    }),
  });

  setSyncStatus("已保存到云端。", "ok");
  return true;
}

function scheduleSupabaseSync() {
  if (isApplyingRemoteState || !hasCompletedInitialCloudPull || !isSupabaseAutoSyncEnabled()) return;
  clearTimeout(supabaseDebounceTimer);
  supabaseDebounceTimer = setTimeout(async () => {
    try {
      await pushSupabaseState({ silent: true });
      setSyncStatus("已自动保存。", "ok");
    } catch (error) {
      setSyncStatus(`云端自动同步失败：${error.message}`, "danger");
      console.error("Supabase auto sync failed:", error);
    }
  }, 500);
}

async function syncSupabaseNow(action) {
  try {
    if (action === "pull") {
      await pullSupabaseState();
    } else {
      await pushSupabaseState();
    }
  } catch (error) {
    setSyncStatus(`云端同步失败：${error.message}`, "danger");
    console.error("Supabase sync failed:", error);
  }
}

function startSupabaseAutoSync() {
  if (!isSupabaseAutoSyncEnabled()) return;
  if (isSupabaseAutoSyncRunning) return;
  isSupabaseAutoSyncRunning = true;
  if (elements.supabaseAutoToggle) elements.supabaseAutoToggle.textContent = "暂停同步";
  pullSupabaseState({ silent: true })
    .catch((error) => {
      setSyncStatus(`自动拉取失败：${error.message}`, "danger");
    })
    .finally(() => {
      hasCompletedInitialCloudPull = true;
    });
  supabaseAutoTimer = setInterval(() => {
    pullSupabaseState({ silent: true }).catch((error) => {
      setSyncStatus(`自动拉取失败：${error.message}`, "danger");
    });
  }, 10000);
  setSyncStatus("云端自动同步已开启。", "ok");
}

function stopSupabaseAutoSync() {
  clearInterval(supabaseAutoTimer);
  supabaseAutoTimer = null;
  isSupabaseAutoSyncRunning = false;
  if (elements.supabaseAutoToggle) elements.supabaseAutoToggle.textContent = "开启同步";
}

function toggleSupabaseAutoSync() {
  saveSupabaseRoom();
  const nextEnabled = !isSupabaseAutoSyncEnabled();
  setSupabaseAutoSyncEnabled(nextEnabled);
  if (nextEnabled) {
    startSupabaseAutoSync();
  } else {
    stopSupabaseAutoSync();
    setSyncStatus("已暂停接口自动同步。", "warning");
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
  activateBaseTab(localStorage.getItem(activeBaseTabKey) || "base-menu");
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
  let shouldPersistHydratedData = false;
  const storedVersion = Number(stored?.version) || 1;
  const defaultList = uniqueCategoriesFrom([...getDefaultCategories(), DEFAULT_CATEGORY]);
  const storedCatalog = uniqueCategoriesFrom(Array.isArray(stored?.categories) ? stored.categories : []);
  const storedDishCategories = stored?.dishCategories && typeof stored.dishCategories === "object" ? stored.dishCategories : {};
  const storedDishNames = stored?.dishNames && typeof stored.dishNames === "object" ? stored.dishNames : {};
  const storedDishPrices = stored?.dishPrices && typeof stored.dishPrices === "object" ? stored.dishPrices : {};
  const deletedDishIds = new Set(Array.isArray(stored?.deletedDishIds) ? stored.deletedDishIds.map(Number) : []);
  const restoredDishIds = baseDishes
    .filter((dish) => dish.name === "玉米排骨汤")
    .map((dish) => dish.id);
  restoredDishIds.forEach((id) => {
    if (deletedDishIds.delete(id)) shouldPersistHydratedData = true;
  });
  const catalog = uniqueCategoriesFrom([...storedCatalog, ...defaultList]);
  const dishById = new Map(baseDishes.map((dish) => [dish.id, { ...dish, categories: [dish.category], category: dish.category }]));

  deletedDishIds.forEach((id) => dishById.delete(id));

  if (hasStored) {
    Object.entries(storedDishNames).forEach(([id, name]) => {
      const dish = dishById.get(Number(id));
      const normalizedName = String(name || "").trim();
      if (dish && normalizedName) dish.name = normalizedName;
    });

    Object.entries(storedDishPrices).forEach(([id, price]) => {
      const dish = dishById.get(Number(id));
      const normalizedPrice = Number(price);
      if (dish && Number.isFinite(normalizedPrice) && normalizedPrice >= 0) dish.price = normalizedPrice;
    });

    dishById.forEach((dish) => {
      if (dish.name === "猪蹄压黄豆" && Number(dish.price) === 48) {
        dish.price = 45;
        shouldPersistHydratedData = true;
      }
    });

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
  if (shouldPersistHydratedData) persistCategoryData();
}

function persistCategoryData() {
  const baseDishMap = new Map(baseDishes.map((dish) => [dish.id, dish]));
  const dishIds = new Set(dishes.map((dish) => dish.id));
  const dishNames = Object.fromEntries(
    dishes
      .filter((dish) => baseDishMap.get(dish.id)?.name !== dish.name)
      .map((dish) => [dish.id, dish.name]),
  );
  const dishPrices = Object.fromEntries(
    dishes
      .filter((dish) => Number(baseDishMap.get(dish.id)?.price) !== Number(dish.price))
      .map((dish) => [dish.id, dish.price]),
  );
  const deletedDishIds = baseDishes
    .filter((dish) => !dishIds.has(dish.id))
    .map((dish) => dish.id);
  const payload = {
    version: categoryDataVersion,
    categories: categoryCatalog,
    dishCategories: Object.fromEntries(dishes.map((dish) => [dish.id, dish.categories || [dish.category]])),
    dishNames,
    dishPrices,
    deletedDishIds,
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

function renameDish(dishId) {
  const dish = dishes.find((item) => item.id === dishId);
  if (!dish) return;
  const nextName = window.prompt("修改菜名：", dish.name);
  if (nextName === null) return;
  const normalizedName = nextName.trim();
  if (!normalizedName) {
    alert("菜名不能为空。");
    return;
  }
  const duplicate = dishes.some((item) => item.id !== dishId && item.name === normalizedName);
  if (duplicate && !confirm(`已经有「${normalizedName}」了，仍然继续改名吗？`)) return;

  dish.name = normalizedName;
  currentPlan = currentPlan.map((item) => (item.id === dishId ? { ...item, name: normalizedName } : item));
  persistCategoryData();
  renderPlan();
  renderCandidates();
  renderPlanSearchResults();
  renderBackfillSearchResults();
  renderBackfillDraft();
  renderRatingMaintenance();
  renderWeeklyPlans();
  renderCalendar();
}

function updateDishPrice(dishId) {
  const dish = dishes.find((item) => item.id === dishId);
  if (!dish) return;
  const nextPrice = window.prompt("修改价格：", String(dish.price));
  if (nextPrice === null) return;
  const normalizedPrice = Number(nextPrice.trim());
  if (!Number.isFinite(normalizedPrice) || normalizedPrice < 0) {
    alert("请输入有效价格。");
    return;
  }

  dish.price = Math.round(normalizedPrice * 10) / 10;
  currentPlan = currentPlan.map((item) => (item.id === dishId ? { ...item, price: dish.price } : item));
  persistCategoryData();
  renderPlan();
  renderCandidates();
  renderPlanSearchResults();
  renderBackfillSearchResults();
  renderBackfillDraft();
  renderRatingMaintenance();
  renderWeeklyPlans();
  renderCalendar();
}

function deleteDish(dishId) {
  const dish = dishes.find((item) => item.id === dishId);
  if (!dish) return;
  if (!confirm(`确定删除「${dish.name}」吗？\n\n删除后不会再出现在菜单维护、搜索加入和自动配菜里。`)) return;

  dishes = dishes.filter((item) => item.id !== dishId);
  currentPlan = currentPlan.filter((item) => item.id !== dishId);
  fixedDishIds.delete(dishId);
  backfillDishIds.delete(dishId);
  persistCategoryData();
  populateCategories();
  renderCategoryBoard();
  renderPlan();
  renderCandidates();
  renderPlanSearchResults();
  renderBackfillSearchResults();
  renderBackfillDraft();
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

function getRecentWeekKeys(weekCount = 1) {
  const count = clampNumber(weekCount, 0, 4, 1);
  return Array.from({ length: count }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index * 7);
    return getWeekKey(date);
  });
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

function savePlanToWeek(snapshot) {
  const allPlans = getAllWeeklyPlans();
  const weekKey = snapshot.weekKey || getWeekKey(snapshot.savedAt);
  allPlans[weekKey] = [snapshot, ...(allPlans[weekKey] || [])];
  saveAllWeeklyPlans(allPlans);
}

function clearPlansForMonth(monthKey) {
  const allPlans = getAllWeeklyPlans();
  let removedCount = 0;
  const nextPlansByWeek = Object.fromEntries(
    Object.entries(allPlans).map(([weekKey, plans]) => {
      const keptPlans = (plans || []).filter((plan) => {
        const shouldRemove = getMonthKey(plan.savedAt) === monthKey;
        if (shouldRemove) removedCount += 1;
        return !shouldRemove;
      });
      return [weekKey, keptPlans];
    }),
  );

  Object.keys(nextPlansByWeek).forEach((weekKey) => {
    if (nextPlansByWeek[weekKey].length === 0) delete nextPlansByWeek[weekKey];
  });

  if (removedCount > 0) saveAllWeeklyPlans(nextPlansByWeek);
  return removedCount;
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

function formatDateTimeLocal(date = new Date()) {
  const target = new Date(date);
  const year = target.getFullYear();
  const month = String(target.getMonth() + 1).padStart(2, "0");
  const day = String(target.getDate()).padStart(2, "0");
  const hour = String(target.getHours()).padStart(2, "0");
  const minute = String(target.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hour}:${minute}`;
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

function getEatenDishIdsForRecentWeeks(weekCount = 1) {
  const weekKeys = new Set(getRecentWeekKeys(weekCount));
  const plansByWeek = getAllWeeklyPlans();
  return new Set(
    Object.entries(plansByWeek)
      .filter(([weekKey]) => weekKeys.has(weekKey))
      .flatMap(([, plans]) => (plans || []).flatMap((plan) => plan.dishes.map((dish) => dish.id))),
  );
}

function getRecentDishUsageCounts(weekCount = 4) {
  const weekKeys = new Set(getRecentWeekKeys(weekCount));
  const plansByWeek = getAllWeeklyPlans();
  return Object.entries(plansByWeek)
    .filter(([weekKey]) => weekKeys.has(weekKey))
    .flatMap(([, plans]) => plans || [])
    .reduce((counts, plan) => {
      (plan.dishes || []).forEach((dish) => {
        counts[dish.id] = (counts[dish.id] || 0) + 1;
      });
      return counts;
    }, {});
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
  elements.excludedTags.innerHTML = exclusionTagGroups
    .map(
      (group) => `
        <div class="exclude-tag-group">
          <span>${group.name}</span>
          <div>
            ${group.tags
              .map(
                (tag) => `
                  <label>
                    <input type="checkbox" value="${tag}" />
                    ${tag}
                  </label>
                `,
              )
              .join("")}
          </div>
        </div>
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
  if (/炒蛋|蛋汤|皮蛋|鸡蛋|鸭蛋/.test(name)) tags.add("蛋类");
  if (isSoup(dish)) tags.add("汤类");
  if (/麻辣|酸辣|辣子|泡椒|剁椒|青椒|尖椒/.test(name)) tags.add("辣口");
  if (hasDishCategory(dish, "干锅类") || /干锅/.test(name)) tags.add("干锅");
  if (/排骨|仔排|扇子骨|鸭子骨|鸭骨|筒骨|骨/.test(name)) tags.add("骨头类");
  if (/腊肉|咸菜|酸菜|榨菜|梅菜|外婆菜|泡菜/.test(name)) tags.add("腌腊类");
  if (/椒盐|小酥肉|干煸|干锅|油炸|炸/.test(name)) tags.add("油炸干煸");
  if (isBigDish(dish)) tags.add("大菜");
  if (dish.price >= 50) tags.add("高价菜");
  if (/鸭血|毛血旺|牛蛙|鸡爪|猪耳|腊肉/.test(name)) tags.add("重口菜");

  return [...tags];
}

function getDishFilterState(dish, settings = getSettings()) {
  const dishTags = getDishTags(dish);
  const eatenIds = getEatenDishIdsForRecentWeeks(settings.eatenWeekScope);
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
  let count = 4;
  if (settings.peopleCount <= 2) count = 3;
  else if (settings.peopleCount <= 4) count = settings.totalBudget >= 130 ? 5 : 4;
  else if (settings.peopleCount <= 6) count = settings.totalBudget >= 170 ? 7 : 6;
  else count = 8;

  if (settings.mealMode === "budget") count = Math.max(3, count - 1);
  if (settings.mealMode === "treat" && settings.peopleCount >= 4) count = Math.min(10, count + 1);
  return count;
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

function isBudgetStretchDish(dish) {
  return isBigDish(dish) || isHeavyDish(dish) || dish.price >= 45;
}

function isSpicyDish(dish) {
  return /麻辣|酸辣|辣子|泡椒|剁椒|青椒|尖椒|水煮|毛血旺/.test(dish.name);
}

function isProteinDish(dish) {
  return !isVegetable(dish) && !isSoup(dish);
}

function getDishFamily(dish) {
  const name = dish.name;
  if (isSoup(dish)) return "汤";
  if (isOrganDish(dish)) return "内脏";
  if (dish.type === "fish" || /鱼|带鱼|鱼头|鲫鱼/.test(name)) return "鱼";
  if (/豆腐|腐竹|豆芽|黄豆|豆干|豆皮|干叶豆腐/.test(name)) return "豆制品";
  if (/鸡爪|土鸡|鸡胗|鸡杂|辣子鸡/.test(name)) return "鸡";
  if (/排骨|扇子骨|仔排|筒骨/.test(name)) return "骨头";
  if (/牛肉|牛蛙|牛杂|牛肚/.test(name)) return "牛";
  if (/炒蛋|蛋汤|皮蛋/.test(name)) return "蛋";
  if (/干锅/.test(name) || hasDishCategory(dish, "干锅类")) return "干锅";
  if (isSpicyDish(dish)) return "辣口";
  return getPrimaryCategory(dish);
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
  const family = getDishFamily(dish);
  if (["内脏", "鱼", "豆制品", "鸡", "骨头", "牛", "蛋", "干锅"].includes(family)) {
    return plan.some((item) => getDishFamily(item) === family);
  }
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
  const shouldUseBigDish =
    !excludeBigDish &&
    settings.mealMode !== "budget" &&
    (settings.totalBudget >= 90 || settings.mealMode === "treat");

  if (settings.dishCountMode !== "auto") {
    const count = getTargetDishCount(settings);
    const slots = shouldUseBigDish && count >= 4 ? ["big", "protein", "vegetable"] : ["protein", "vegetable"];
    if (count >= 3) slots.push(excludeSoup ? "vegetable" : "soup");
    while (slots.length < count) slots.push(slots.length % 3 === 0 ? "vegetable" : "protein");
    return slots.slice(0, count);
  }

  if (settings.peopleCount <= 2) {
    if (settings.mealMode === "hearty") return excludeSoup ? ["protein", "protein", "vegetable"] : ["protein", "protein", "soup"];
    return excludeSoup ? ["protein", "vegetable", "vegetable"] : ["protein", "vegetable", "soup"];
  }
  if (settings.peopleCount <= 4) {
    const core = shouldUseBigDish ? ["big", "protein"] : settings.mealMode === "light" ? ["protein", "vegetable"] : ["protein", "protein"];
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

function getBestSlotForDish(dish, slots) {
  const priority = ["soup", "vegetable", "big", "hard", "protein"];
  return priority.find((slot) => slots.includes(slot) && getSlotPredicate(slot)(dish));
}

function getRemainingMealSlots(settings, fixedDishes = []) {
  const slots = [...getMealSlots(settings)];
  fixedDishes.forEach((dish) => {
    const matchedSlot = getBestSlotForDish(dish, slots);
    if (!matchedSlot) return;
    slots.splice(slots.indexOf(matchedSlot), 1);
  });
  return slots;
}

function getDishScore(dish, plan, settings, slot, noise = 4, context = null) {
  let score = Math.random() * noise;
  const currentSubtotal = getDishSubtotal(plan);
  const nextSubtotal = currentSubtotal + dish.price;
  const budgetBand = context?.budgetBand || getBudgetBand(settings);
  const targetSubtotal = context?.targetSubtotal || getTargetBudgetSubtotal(settings);

  if (slot === "protein" && hasDishCategory(dish, "家常小炒")) score += 24;
  if (slot === "protein" && hasDishCategory(dish, "盖菜类")) score += 12;
  if (slot === "big" && isBigDish(dish)) score += 34;
  if (slot === "big" && dish.price >= 32 && dish.price <= 58) score += 16;
  if (slot === "big" && isVegetable(dish)) score -= 35;
  if (slot === "hard" && isHardDish(dish)) score += 24;
  if (slot === "vegetable" && hasDishCategory(dish, "田园时蔬")) score += 22;
  if (slot === "soup" && dish.price <= 20) score += 22;

  if (settings.mealMode === "budget") {
    if (dish.price <= 25) score += 18;
    if (isBudgetStretchDish(dish)) score -= 150;
  }

  if (settings.mealMode === "light") {
    if (isVegetable(dish) || isSoup(dish)) score += 18;
    if (isSpicyDish(dish)) score -= 30;
    if (isHeavyDish(dish) || isOrganDish(dish) || hasDishCategory(dish, "干锅类")) score -= 28;
  }

  if (settings.mealMode === "hearty") {
    if (hasDishCategory(dish, "家常小炒") || hasDishCategory(dish, "盖菜类")) score += 18;
    if (isSpicyDish(dish)) score += 8;
    if (isSoup(dish)) score -= 6;
  }

  if (settings.mealMode === "treat") {
    if (isBigDish(dish) || isHardDish(dish)) score += 24;
    if (dish.price >= 45 && dish.price <= 65) score += 12;
    if (isVegetable(dish) && dish.price <= 15) score -= 8;
  }

  score += getDishPriceFitScore(dish, settings, slot, context);
  score += getRatingPreferenceScore(dish, context) * 0.85;
  score -= getDishVarietyPenalty(dish, plan);
  score -= getContextRecentDishCount(dish, context) * (context?.fixedDishIds?.has(dish.id) ? 7 : 22);
  if (!context?.fixedDishIds?.has(dish.id)) {
    score -= (Number(context?.recentGeneratedDishCounts?.[dish.id]) || 0) * 16;
    if (context?.previousPlanIds?.has(dish.id)) score -= 62;
  }
  if (nextSubtotal <= budgetBand.upperSubtotal) score += 8;
  if (nextSubtotal > budgetBand.upperSubtotal) score -= Math.min(120, (nextSubtotal - budgetBand.upperSubtotal) * 4);
  if (plan.length + 1 >= (context?.targetCount || getTargetDishCount(settings))) {
    score -= Math.abs(targetSubtotal - nextSubtotal) * 0.28;
  }

  if (dish.price <= 18 && slot !== "vegetable" && slot !== "soup") score -= 10;
  if (isOrganDish(dish)) score -= plan.some(isOrganDish) ? 60 : 16;
  if (isHeavyDish(dish)) score -= plan.some(isHeavyDish) ? 60 : 12;
  if (isSpicyDish(dish)) score -= plan.filter(isSpicyDish).length * 18;
  if (getCategoryCount(plan, getPrimaryCategory(dish)) > 0) score -= 18;
  if (hasSimilarDish(plan, dish)) score -= 35;
  if (dish.price >= 55 && settings.totalBudget < 110 && settings.mealMode !== "treat") score -= 18;

  return score;
}

function pickWeighted(scoredDishes) {
  const topDishes = scoredDishes.slice(0, Math.min(8, scoredDishes.length));
  const weightTotal = topDishes.reduce((sum, item, index) => sum + Math.max(1, topDishes.length - index), 0);
  let marker = Math.random() * weightTotal;

  for (const [index, item] of topDishes.entries()) {
    marker -= Math.max(1, topDishes.length - index);
    if (marker <= 0) return item.dish;
  }

  return topDishes[0]?.dish;
}

function pickForSlot(candidates, plan, settings, slot, strict = true, options = {}, context = null) {
  const predicate = getSlotPredicate(slot);
  const scoredDishes = candidates
    .filter((dish) => predicate(dish) && canAddDish(plan, dish, strict))
    .filter((dish) => !(settings.mealMode === "budget" && isBudgetStretchDish(dish)))
    .map((dish) => ({ dish, score: getDishScore(dish, plan, settings, slot, options.noise ?? 4, context) }))
    .sort((a, b) => b.score - a.score);

  return options.weighted ? pickWeighted(scoredDishes) : scoredDishes[0]?.dish;
}

function getBudgetBand(settings) {
  const targetFinal = Math.max(0, settings.totalBudget);
  const lowerRatio = settings.mealMode === "budget" ? 0.82 : 0.95;
  const upperRatio = settings.mealMode === "budget" ? 0.95 : 1.05;
  const tablewareTotal = settings.peopleCount * settings.tablewareFee;
  const toDishSubtotal = (finalTotal) => Math.max(0, finalTotal / settings.discount - tablewareTotal);

  return {
    lowerFinal: targetFinal * lowerRatio,
    upperFinal: targetFinal * upperRatio,
    centerFinal: targetFinal * ((lowerRatio + upperRatio) / 2),
    lowerSubtotal: toDishSubtotal(targetFinal * lowerRatio),
    upperSubtotal: toDishSubtotal(targetFinal * upperRatio),
    centerSubtotal: toDishSubtotal(targetFinal * ((lowerRatio + upperRatio) / 2)),
  };
}

function getBudgetLimit(settings) {
  return getBudgetBand(settings).upperSubtotal;
}

function getTargetBudgetSubtotal(settings) {
  const band = getBudgetBand(settings);
  if (settings.mealMode === "budget") return band.lowerSubtotal;
  if (settings.mealMode === "treat") return band.upperSubtotal * 0.98;
  return band.centerSubtotal;
}

function getDishSubtotal(plan) {
  return plan.reduce((sum, dish) => sum + dish.price, 0);
}

function createRecommendationContext(candidates, settings, fixedDishes = []) {
  const targetCount = Math.max(fixedDishes.length, Math.min(getTargetDishCount(settings), candidates.length));
  const recentGeneratedDishCounts = getRecommendationHistoryDishCounts();
  return {
    targetCount,
    budgetBand: getBudgetBand(settings),
    targetSubtotal: getTargetBudgetSubtotal(settings),
    ratings: getDishRatings(),
    recentDishCounts: getRecentDishUsageCounts(Math.min(4, settings.eatenWeekScope + 2)),
    previousPlanIds: new Set(currentPlan.map((dish) => dish.id)),
    recentGeneratedDishCounts,
    recentGeneratedSignatures: new Set(recommendationHistory.map((item) => item.signature)),
    fixedDishIds: new Set(fixedDishes.map((dish) => dish.id)),
  };
}

function getContextDishRating(dish, context = null) {
  const ratings = context?.ratings || getDishRatings();
  return Number(ratings[dish.id]) || 0;
}

function getContextRecentDishCount(dish, context = null) {
  return Number(context?.recentDishCounts?.[dish.id]) || 0;
}

function getRatingPreferenceScore(dish, context = null) {
  const rating = getContextDishRating(dish, context);
  if (rating >= 5) return 42;
  if (rating >= 4) return 26;
  if (rating >= 3) return 8;
  if (rating >= 2) return -34;
  if (rating >= 1) return -72;
  return 0;
}

function getSlotBudgetRatio(slot, settings) {
  const baseRatios = {
    soup: 0.55,
    vegetable: 0.65,
    protein: 1,
    hard: 1.22,
    big: 1.38,
  };
  let ratio = baseRatios[slot] || 1;
  if (settings.mealMode === "budget" && slot !== "soup" && slot !== "vegetable") ratio -= 0.12;
  if (settings.mealMode === "treat" && (slot === "big" || slot === "hard")) ratio += 0.18;
  return ratio;
}

function getDishPriceFitScore(dish, settings, slot, context = null) {
  const targetCount = Math.max(1, context?.targetCount || getTargetDishCount(settings));
  const targetSubtotal = context?.targetSubtotal || getTargetBudgetSubtotal(settings);
  const expectedPrice = Math.max(slot === "soup" ? 12 : 15, (targetSubtotal / targetCount) * getSlotBudgetRatio(slot, settings));
  const tolerance = Math.max(7, expectedPrice * (slot === "big" || slot === "hard" ? 0.52 : 0.42));
  const missRatio = Math.abs(dish.price - expectedPrice) / tolerance;
  return Math.max(-38, 24 - missRatio * 30);
}

function getDishVarietyPenalty(dish, plan) {
  if (plan.length === 0) return 0;

  const family = getDishFamily(dish);
  const relaxedFamilies = ["田园时蔬", "家常小炒", "盖菜类"];
  const sameFamilyCount = plan.filter((item) => getDishFamily(item) === family).length;
  let penalty = sameFamilyCount * (relaxedFamilies.includes(family) ? 8 : 28);

  if (isVegetable(dish)) penalty += Math.max(0, plan.filter(isVegetable).length - 1) * 18;
  if (isSpicyDish(dish)) penalty += plan.filter(isSpicyDish).length * 16;

  const tags = new Set(getDishTags(dish));
  ["豆制品", "蛋类", "腌腊类", "油炸干煸", "骨头类", "高价菜", "干锅"].forEach((tag) => {
    if (!tags.has(tag)) return;
    const existingCount = plan.filter((item) => getDishTags(item).includes(tag)).length;
    penalty += existingCount * (tag === "高价菜" || tag === "干锅" ? 24 : 14);
  });

  return penalty;
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
        !(settings.mealMode === "budget" && isBudgetStretchDish(dish)) &&
        (getPrimaryCategory(dish) === getPrimaryCategory(removable) ||
          (isVegetable(removable) && isVegetable(dish)) ||
          (isSoup(removable) && isSoup(dish))),
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

function improveBudgetUsage(plan, candidates, settings, context = null) {
  let nextPlan = [...plan];
  const budgetBand = context?.budgetBand || getBudgetBand(settings);
  const budgetLimit = budgetBand.upperSubtotal;
  const targetSubtotal = context?.targetSubtotal || getTargetBudgetSubtotal(settings);
  const targetCount = Math.max(nextPlan.length, context?.targetCount || Math.min(getTargetDishCount(settings), candidates.length));
  let guard = 0;

  while (nextPlan.length < targetCount && getDishSubtotal(nextPlan) < budgetBand.lowerSubtotal) {
    const currentSubtotal = getDishSubtotal(nextPlan);
    const missingSlots = getRemainingMealSlots(settings, nextPlan);
    const preferredSlot =
      missingSlots.find((slot) => !nextPlan.some((dish) => getSlotPredicate(slot)(dish))) ||
      (nextPlan.filter(isVegetable).length < 1 ? "vegetable" : "protein");
    const addable = candidates
      .filter((dish) => canAddDish(nextPlan, dish, true))
      .filter((dish) => !(settings.mealMode === "budget" && isBudgetStretchDish(dish)))
      .filter((dish) => currentSubtotal + dish.price <= budgetLimit)
      .map((dish) => {
        const nextSubtotal = currentSubtotal + dish.price;
        const gap =
          nextSubtotal < budgetBand.lowerSubtotal
            ? budgetBand.lowerSubtotal - nextSubtotal
            : nextSubtotal > budgetBand.upperSubtotal
              ? nextSubtotal - budgetBand.upperSubtotal
              : Math.abs(targetSubtotal - nextSubtotal) * 0.18;
        const roleBonus = getSlotPredicate(preferredSlot)(dish) ? 22 : 0;
        const preferenceScore =
          getRatingPreferenceScore(dish, context) * 0.35 -
          getDishVarietyPenalty(dish, nextPlan) * 0.55 -
          getContextRecentDishCount(dish, context) * 10 -
          (Number(context?.recentGeneratedDishCounts?.[dish.id]) || 0) * 9;
        return { dish, score: -gap + roleBonus + preferenceScore - (isOrganDish(dish) ? 16 : 0) - (isHeavyDish(dish) ? 12 : 0) };
      })
      .sort((a, b) => b.score - a.score);

    if (!addable[0] || addable[0].score < -targetSubtotal * 0.14) break;
    addDish(nextPlan, addable[0].dish);
  }

  while (getDishSubtotal(nextPlan) < budgetBand.lowerSubtotal && guard < 8) {
    guard += 1;
    const currentSubtotal = getDishSubtotal(nextPlan);
    let bestMove = null;

    nextPlan.forEach((oldDish) => {
      const slot = getSlotForDish(oldDish);
      candidates.forEach((newDish) => {
        if (settings.mealMode === "budget" && isBudgetStretchDish(newDish)) return;
        if (!canReplaceDish(nextPlan, oldDish, newDish)) return;

        const newSubtotal = currentSubtotal - oldDish.price + newDish.price;
        if (newSubtotal > budgetLimit) return;
        if (newSubtotal <= currentSubtotal) return;

        const oldGap = Math.max(0, budgetBand.lowerSubtotal - currentSubtotal);
        const newGap = Math.max(0, budgetBand.lowerSubtotal - newSubtotal);
        const slotBonus = getSlotPredicate(slot)(newDish) ? 10 : 0;
        const preferenceScore =
          getRatingPreferenceScore(newDish, context) * 0.3 -
          getDishVarietyPenalty(newDish, nextPlan.filter((dish) => dish.id !== oldDish.id)) * 0.45 -
          getContextRecentDishCount(newDish, context) * 8 -
          (Number(context?.recentGeneratedDishCounts?.[newDish.id]) || 0) * 8;
        const score = oldGap - newGap + slotBonus + preferenceScore - (isHeavyDish(newDish) ? 8 : 0) - (isOrganDish(newDish) ? 10 : 0);

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

function getPlanFamilyDuplicates(plan) {
  const counts = plan.reduce((groups, dish) => {
    const key = getDishFamily(dish);
    groups[key] = (groups[key] || 0) + 1;
    return groups;
  }, {});
  return Object.entries(counts).reduce((sum, [family, count]) => {
    if (["田园时蔬", "家常小炒", "盖菜类"].includes(family)) return sum;
    return sum + Math.max(0, count - 1);
  }, 0);
}

function getPlanTagDuplicates(plan) {
  const limits = {
    "辣口": 2,
    "重口菜": 1,
    "腌腊类": 1,
    "油炸干煸": 1,
    "骨头类": 1,
    "高价菜": 1,
    "干锅": 1,
    "内脏": 1,
    "鱼类": 1,
  };
  const counts = plan.reduce((groups, dish) => {
    getDishTags(dish).forEach((tag) => {
      if (!Object.prototype.hasOwnProperty.call(limits, tag)) return;
      groups[tag] = (groups[tag] || 0) + 1;
    });
    return groups;
  }, {});

  return Object.entries(counts).reduce((sum, [tag, count]) => sum + Math.max(0, count - limits[tag]), 0);
}

function scoreMealPlan(plan, candidates, settings, fixedDishes = [], context = null) {
  if (plan.length === 0) return -Infinity;

  const targetCount = context?.targetCount || Math.max(fixedDishes.length, Math.min(getTargetDishCount(settings), candidates.length));
  const summary = calculatePlanSummary(plan, settings);
  const budgetBand = context?.budgetBand || getBudgetBand(settings);
  const targetSubtotal = context?.targetSubtotal || getTargetBudgetSubtotal(settings);
  const budgetBase = Math.max(settings.totalBudget, 1);
  const vegetableCount = plan.filter(isVegetable).length;
  const soupCount = plan.filter(isSoup).length;
  const proteinCount = plan.filter(isProteinDish).length;
  const bigDishCount = plan.filter(isBigDish).length;
  const heavyCount = plan.filter(isHeavyDish).length;
  const organCount = plan.filter(isOrganDish).length;
  const fishCount = plan.filter((dish) => dish.type === "fish").length;
  const spicyCount = plan.filter(isSpicyDish).length;
  const highPriceCount = plan.filter((dish) => dish.price >= 55).length;
  const fixedMissingCount = fixedDishes.filter((fixedDish) => !plan.some((dish) => dish.id === fixedDish.id)).length;
  const previousPlanIds = context?.previousPlanIds || new Set(currentPlan.map((dish) => dish.id));
  const fixedIds = context?.fixedDishIds || fixedDishIds;
  const previousOverlapCount = plan.filter((dish) => previousPlanIds.has(dish.id) && !fixedIds.has(dish.id)).length;
  const recentRecommendationOverlap = getRecentRecommendationOverlap(plan, context);
  const isRecentExactPlan = context?.recentGeneratedSignatures?.has(getPlanSignature(plan));
  const soupAllowed = !settings.excludedTags.includes("汤类");
  const bigDishAllowed = !settings.excludedTags.includes("大菜");
  const shouldHaveSoup = soupAllowed && targetCount >= 3;
  const shouldHaveBigDish =
    bigDishAllowed && settings.mealMode !== "budget" && (settings.totalBudget >= 100 || settings.mealMode === "treat") && targetCount >= 4;
  const ratedValues = plan.map((dish) => getContextDishRating(dish, context)).filter(Boolean);
  const averageRating = ratedValues.length > 0 ? ratedValues.reduce((sum, rating) => sum + rating, 0) / ratedValues.length : 0;
  const ratingCoverage = ratedValues.length / plan.length;
  const recentUseCount = plan.reduce((sum, dish) => sum + (context?.fixedDishIds?.has(dish.id) ? 0 : getContextRecentDishCount(dish, context)), 0);
  const distinctCategoryCount = new Set(plan.map(getPrimaryCategory)).size;
  const distinctFamilyCount = new Set(plan.map(getDishFamily)).size;
  const roleCount = [
    vegetableCount > 0,
    soupCount > 0,
    proteinCount > 0,
    bigDishCount > 0 || plan.some(isHardDish),
  ].filter(Boolean).length;

  let score = 1000;

  if (summary.finalTotal >= budgetBand.lowerFinal && summary.finalTotal <= budgetBand.upperFinal) {
    score += 220;
    score += Math.max(0, 85 - Math.abs(summary.dishSubtotal - targetSubtotal) * 1.1);
    if (settings.mealMode === "normal") score += 28;
  } else if (summary.finalTotal < budgetBand.lowerFinal) {
    const lowRatio = (budgetBand.lowerFinal - summary.finalTotal) / budgetBase;
    score -= 70 + lowRatio * 430;
  } else {
    const highRatio = (summary.finalTotal - budgetBand.upperFinal) / budgetBase;
    score -= 430 + highRatio * 920;
  }

  score -= Math.abs(plan.length - targetCount) * 120;
  score -= fixedMissingCount * 1000;
  score -= previousOverlapCount * 92;
  score -= recentRecommendationOverlap * 34;
  if (isRecentExactPlan) score -= 520;
  if (previousOverlapCount === plan.length && plan.length > 0) score -= 420;
  score -= getPlanCategoryDuplicates(plan) * 52;
  score -= getPlanFamilyDuplicates(plan) * 72;
  score -= getPlanTagDuplicates(plan) * 58;
  score -= recentUseCount * 36;
  score -= Math.max(0, vegetableCount - 2) * 42;
  score -= Math.max(0, soupCount - 1) * 90;
  score -= Math.max(0, fishCount - 1) * 88;
  score -= Math.max(0, organCount - 1) * 90;
  score -= Math.max(0, heavyCount - 1) * 88;
  score -= Math.max(0, spicyCount - 2) * 44;
  score -= Math.max(0, highPriceCount - 1) * 46;

  if (vegetableCount === 0 && targetCount >= 3) score -= 150;
  if (proteinCount === 0) score -= 120;
  if (shouldHaveSoup && soupCount === 0) score -= 72;
  if (!soupAllowed && soupCount > 0) score -= 600;
  if (shouldHaveBigDish && bigDishCount === 0) score -= 62;
  if (!bigDishAllowed && bigDishCount > 0) score -= 600;
  if (bigDishCount > 1 && settings.peopleCount <= 4) score -= 76;
  if (summary.finalTotal > budgetBand.upperFinal) score -= 520;
  if (summary.finalTotal < budgetBand.lowerFinal * 0.94 && candidates.length > targetCount) {
    score -= 80 + ((budgetBand.lowerFinal * 0.94 - summary.finalTotal) / budgetBase) * 360;
  }
  if (settings.mealMode === "budget" && summary.finalTotal <= settings.totalBudget * 0.9) score += 140;
  if (settings.mealMode === "budget" && summary.finalTotal > settings.totalBudget * 0.95) score -= 360;
  if (settings.mealMode === "treat" && summary.finalTotal >= settings.totalBudget * 0.9) score += 70;
  if (settings.mealMode === "light") score -= spicyCount * 45 + heavyCount * 35 + organCount * 35;
  if (settings.mealMode === "hearty" && proteinCount >= vegetableCount) score += 55;
  if (settings.mealMode === "treat" && bigDishCount > 0) score += 90;
  if (averageRating > 0) score += (averageRating - 3) * 46 + Math.min(ratedValues.length, 4) * 13 + ratingCoverage * 22;
  score += Math.min(distinctCategoryCount, targetCount) * 12;
  score += Math.min(distinctFamilyCount, targetCount) * 8;
  score += roleCount * 18;

  plan.forEach((dish) => {
    score += getRatingPreferenceScore(dish, context) * 0.18;
    if (isOrganDish(dish)) score -= 14;
    if (isHeavyDish(dish)) score -= 12;
    if (isSpicyDish(dish)) score -= 4;
    if (dish.price >= 55 && settings.totalBudget < 120) score -= 28;
    if (isVegetable(dish) && dish.price <= 18) score += 8;
    if (isSoup(dish) && dish.price <= 20) score += 10;
    if (hasDishCategory(dish, "家常小炒")) score += 5;
  });

  return score;
}

function buildCandidatePlan(candidates, settings, fixedDishes = [], attempt = 0, context = null) {
  const targetCount = context?.targetCount || Math.max(fixedDishes.length, Math.min(getTargetDishCount(settings), candidates.length));
  const plan = [...fixedDishes];
  const remainingSlots = getRemainingMealSlots(settings, fixedDishes);
  const slots = attempt % 3 === 0 ? remainingSlots : shuffleList(remainingSlots);
  const budgetLimit = getBudgetLimit(settings);
  const pickOptions = { weighted: attempt > 0, noise: attempt === 0 ? 1 : 12 };

  slots.forEach((slot) => {
    if (plan.length >= targetCount) return;
    const dish = pickForSlot(candidates, plan, settings, slot, true, pickOptions, context);
    addDish(plan, dish);
  });

  while (plan.length < targetCount && plan.reduce((sum, dish) => sum + dish.price, 0) < budgetLimit * 0.88) {
    const slot = plan.filter(isVegetable).length < 1 ? "vegetable" : "protein";
    const nextDish =
      pickForSlot(candidates, plan, settings, slot, true, pickOptions, context) ||
      pickForSlot(candidates, plan, settings, slot, false, pickOptions, context);
    if (!nextDish) break;
    addDish(plan, nextDish);
  }

  while (plan.length < Math.min(targetCount, fixedDishes.length + 2)) {
    const remaining = candidates.filter((dish) => canAddDish(plan, dish, false));
    if (remaining.length === 0) break;
    addDish(plan, remaining.sort((a, b) => a.price - b.price)[0]);
  }

  const budgetedPlan = trimToBudget(plan, candidates, settings);
  return improveBudgetUsage(budgetedPlan, candidates, settings, context);
}

function getPlanSignature(plan) {
  return plan
    .map((dish) => dish.id)
    .sort((a, b) => a - b)
    .join("-");
}

function getRecommendationHistoryDishCounts() {
  return recommendationHistory.reduce((counts, item, historyIndex) => {
    const weight = maxRecommendationHistory - historyIndex;
    item.ids.forEach((id) => {
      counts[id] = (counts[id] || 0) + weight;
    });
    return counts;
  }, {});
}

function getRecentRecommendationOverlap(plan, context = null) {
  const counts = context?.recentGeneratedDishCounts || {};
  return plan.reduce((sum, dish) => {
    if (context?.fixedDishIds?.has(dish.id)) return sum;
    return sum + (Number(counts[dish.id]) || 0);
  }, 0);
}

function rememberRecommendationPlan(plan) {
  if (!Array.isArray(plan) || plan.length === 0) return;
  const signature = getPlanSignature(plan);
  recommendationHistory = [
    {
      signature,
      ids: plan.map((dish) => dish.id),
    },
    ...recommendationHistory.filter((item) => item.signature !== signature),
  ].slice(0, maxRecommendationHistory);
}

function resetRecommendationHistory() {
  recommendationHistory = [];
}

function refinePlanByScore(plan, candidates, settings, fixedDishes = [], context = null) {
  let nextPlan = [...plan];
  let bestScore = scoreMealPlan(nextPlan, candidates, settings, fixedDishes, context);

  for (let guard = 0; guard < 4; guard += 1) {
    const currentIds = new Set(nextPlan.map((dish) => dish.id));
    let bestMove = null;

    nextPlan.forEach((oldDish) => {
      if (fixedDishIds.has(oldDish.id) || context?.fixedDishIds?.has(oldDish.id)) return;
      candidates.forEach((newDish) => {
        if (currentIds.has(newDish.id)) return;
        if (settings.mealMode === "budget" && isBudgetStretchDish(newDish)) return;
        if (!canReplaceDish(nextPlan, oldDish, newDish)) return;

        const candidatePlan = nextPlan.map((dish) => (dish.id === oldDish.id ? newDish : dish));
        const candidateScore = scoreMealPlan(candidatePlan, candidates, settings, fixedDishes, context);
        if (candidateScore > bestScore + 12 && (!bestMove || candidateScore > bestMove.score)) {
          bestMove = { oldDish, newDish, score: candidateScore };
        }
      });
    });

    if (!bestMove) break;
    nextPlan = nextPlan.map((dish) => (dish.id === bestMove.oldDish.id ? bestMove.newDish : dish));
    bestScore = bestMove.score;
  }

  return nextPlan;
}

function pickPlanFromTop(scoredPlans, context = null) {
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
  const freshPlans = uniquePlans.filter((item) => {
    if (context?.recentGeneratedSignatures?.has(getPlanSignature(item.plan))) return false;
    const plainOverlap = item.plan.filter((dish) => context?.previousPlanIds?.has(dish.id) && !context?.fixedDishIds?.has(dish.id)).length;
    return plainOverlap < Math.max(1, item.plan.length - 1);
  });
  const rankedPlans = freshPlans.length >= 3 ? freshPlans : uniquePlans;
  const rankedBestScore = rankedPlans[0]?.score ?? bestScore;
  const strongPlans = rankedPlans.filter((item, index) => index < 14 && item.score >= rankedBestScore - 140);
  const pickPool = strongPlans.length > 1 ? strongPlans : rankedPlans.slice(0, Math.min(8, rankedPlans.length));
  const lastPick = pickPool[pickPool.length - 1];
  const cutoffScore = Math.max((lastPick?.score ?? rankedBestScore) - 1, rankedBestScore - 140);
  const weightTotal = pickPool.reduce((sum, item, index) => sum + Math.max(1, item.score - cutoffScore + 6 - index), 0);
  let marker = Math.random() * weightTotal;

  for (const [index, item] of pickPool.entries()) {
    marker -= Math.max(1, item.score - cutoffScore + 6 - index);
    if (marker <= 0) return item.plan;
  }

  return pickPool[0]?.plan || [];
}

function generateBalancedPlan(candidates, settings, fixedDishes = []) {
  const context = createRecommendationContext(candidates, settings, fixedDishes);
  const attempts = Math.min(240, Math.max(72, candidates.length * 4));
  const scoredPlans = [];

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const candidatePlan = buildCandidatePlan(candidates, settings, fixedDishes, attempt, context);
    const candidateScore = scoreMealPlan(candidatePlan, candidates, settings, fixedDishes, context);
    scoredPlans.push({ plan: candidatePlan, score: candidateScore });
  }

  const selectedPlan = pickPlanFromTop(scoredPlans, context);
  const finalPlan = sortPlanDishes(refinePlanByScore(selectedPlan, candidates, settings, fixedDishes, context));
  rememberRecommendationPlan(finalPlan);
  return finalPlan;
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

  if (elements.explainText) {
    elements.explainText.textContent = getRecommendationExplanation(currentPlan, summary, settings);
  }

  renderReviewText(summary, settings);
}

function getDishRoleSummary(plan) {
  const bigDishCount = plan.filter(isBigDish).length;
  const soupCount = plan.filter(isSoup).length;
  const vegetableCount = plan.filter((dish) => isVegetable(dish) && !isBigDish(dish) && !isSoup(dish)).length;
  const proteinCount = plan.filter((dish) => isProteinDish(dish) && !isBigDish(dish)).length;
  const parts = [];
  if (bigDishCount > 0) parts.push(`${bigDishCount}道硬菜`);
  if (proteinCount > 0) parts.push(`${proteinCount}道下饭菜`);
  if (vegetableCount > 0) parts.push(`${vegetableCount}道素菜`);
  if (soupCount > 0) parts.push(`${soupCount}个汤`);
  return parts.join("、") || "搭配均衡";
}

function getMealModeLabel(mode) {
  return {
    budget: "省钱点",
    light: "清淡点",
    hearty: "下饭点",
    treat: "吃好点",
    normal: "正常吃",
  }[mode] || "正常吃";
}

function getRecommendationExplanation(plan = currentPlan, summary = calculatePlanSummary(currentPlan), settings = getSettings()) {
  if (plan.length === 0) return "生成菜单后会说明这桌为什么这样配。";

  const fixedCount = plan.filter((dish) => fixedDishIds.has(dish.id)).length;
  const planRatings = plan.map((dish) => getDishRating(dish.id));
  const ratedCount = planRatings.filter((rating) => rating > 0).length;
  const highRatedCount = planRatings.filter((rating) => rating >= 4).length;
  const budgetText =
    Math.abs(summary.budgetDiff) <= settings.totalBudget * 0.05
      ? `预算浮动内，差 ${money(Math.abs(summary.budgetDiff))}`
      : summary.budgetDiff > 0
        ? `预算内，剩 ${money(summary.budgetDiff)}`
        : `略超预算 ${money(Math.abs(summary.budgetDiff))}`;
  const parts = [`${getMealModeLabel(settings.mealMode)}模式`, getDishRoleSummary(plan), budgetText];

  if (fixedCount > 0) parts.push(`保留 ${fixedCount} 道固定菜`);
  if (highRatedCount > 0) parts.push(`优先 ${highRatedCount} 道高评分菜`);
  else if (ratedCount > 0) parts.push(`参考 ${ratedCount} 道菜品评分`);
  if (settings.excludedTags.length > 0) parts.push(`已避开 ${settings.excludedTags.join("、")}`);
  if (settings.eatenWeekScope > 0) parts.push(`排除最近 ${settings.eatenWeekScope} 周已吃`);
  if (settings.minRating !== "none") parts.push(`过滤低于 ${settings.minRating} 分`);

  return parts.join(" · ");
}

function hashText(text) {
  return [...text].reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0);
}

function pickReviewPart(options, seed, variant, offset = 0) {
  const index = Math.abs(hashText(`${seed}|${variant}|${offset}`)) % options.length;
  return options[index];
}

function generateReviewText(plan = currentPlan, summary = calculatePlanSummary(currentPlan), settings = getSettings()) {
  if (plan.length === 0) return "生成菜单后自动生成约 100 字好评。";
  const dishNames = plan.map((dish) => dish.name);
  const seed = dishNames.join("|");
  const highlightDishes = dishNames.slice(0, 3).join("、");
  const dishText = dishNames.length > 3 ? `${highlightDishes}这些菜` : `${highlightDishes}这几道菜`;
  const soupDish = plan.find(isSoup);
  const vegetableDish = plan.find(isVegetable);
  const spicyDish = plan.find(isSpicyDish);
  const freshDish = plan.find((dish) => dish.type === "fish" || /虾|鱼|河虾|鲫鱼/.test(dish.name));
  const bigDish = plan.find(isBigDish) || plan.find(isProteinDish) || plan[0];
  const otherDishNames = dishNames.filter((name) => name !== bigDish.name).slice(0, 3);
  const comboText = otherDishNames.length > 0 ? `${bigDish.name}配${otherDishNames.join("、")}` : dishText;
  const variant = currentReviewVariant;

  const featureLines = [
    soupDish ? `${soupDish.name}喝起来顺口，和热炒搭在一起很舒服` : "",
    vegetableDish ? `${vegetableDish.name}处理得清爽，刚好把这一桌的口味拉平衡` : "",
    spicyDish ? `${spicyDish.name}香味出来得快，辣得有存在感但不抢味` : "",
    freshDish ? `${freshDish.name}吃着比较鲜，调味没有盖过食材本身` : "",
    isOrganDish(bigDish) ? `${bigDish.name}处理得干净，火候和调味都挺稳` : "",
    isBigDish(bigDish) ? `${bigDish.name}作为主菜很撑场面，香味和入味程度都在线` : "",
    `${bigDish.name}是这一桌里很亮的一道，咸香、热乎、很适合配饭`,
    `${comboText}搭在一起不单调，几个人分着吃很顺`,
    `${dishText}整体都比较稳，没有那种凑数的感觉`,
  ].filter(Boolean);

  const openings = [
    "这家江西小炒挺对胃口",
    "今天这顿小炒吃得很舒服",
    "想吃热乎现炒的时候可以来这家",
    "这家店的家常味做得挺稳",
    "午餐选这家没有踩雷",
    "喜欢烟火气小炒的可以试试",
    "这家属于吃完会记住的江西小炒",
    "这顿饭最直观的感觉就是下饭",
    "附近想吃家常热菜可以考虑这家",
    "这家不是花哨路线，但味道很扎实",
    "这顿小炒有点超出预期",
    "今天点的这桌很适合朋友同事一起吃",
    "这家店给人的感觉挺踏实",
    "想换换口味吃江西小炒，这家可以",
    "这顿饭吃下来印象不错",
  ];
  const wokLines = [
    "菜端上来还是热的，锅气和香味都很明显",
    "猛火快炒的感觉有出来，闻到就很开胃",
    "小炒该有的香气在线，不是那种寡淡口感",
    "火候拿捏得不错，入口有热菜该有的鲜香",
    "整体是咸香下饭的路子，越吃越顺",
    "蒜香、椒香和油香融合得挺自然",
    "菜品上桌节奏还可以，中午吃饭不用等太久",
    "家常小炒的烟火气比较足，吃着不敷衍",
    "调味不会飘，入口是比较稳定的江西小炒味",
    "不是靠摆盘取胜，重点是热乎和顺口",
    "每道菜都有现炒的感觉，香味比较直接",
    "口味很接地气，适合日常想吃米饭的时候",
    "整体火候比较利落，菜没有软塌塌的感觉",
    "一桌菜上来颜色和香味都挺有食欲",
    "吃起来是熟悉的家常路线，但比外卖舒服不少",
  ];
  const dishLines = [
    `${dishText}都很适合配饭，尤其${bigDish.name}味道很稳`,
    `${comboText}放在一起很舒服，咸香层次比较清楚`,
    `${dishText}点得不花哨，但每道都有自己的味道`,
    `这桌里${bigDish.name}比较突出，香味和火候都不错`,
    `${comboText}适合几个人分着吃，口味不会单一`,
    `${dishText}吃下来没有明显短板，家常但顺口`,
    `${bigDish.name}做得挺入味，配其他菜刚刚好`,
    `${dishText}属于越吃越香的类型，米饭很容易见底`,
    `这几道菜搭在一起很像日常会回头的工作餐`,
    `${comboText}这一桌搭配自然，荤素和口味都不突兀`,
    `点的${dishText}都比较有记忆点，不是随便炒一炒`,
    `${bigDish.name}入口很有存在感，旁边几道菜也没有掉线`,
    `${highlightDishes}放在一桌很协调，吃起来有主有配`,
    `这桌菜没有靠重油重盐硬撑味道，整体挺耐吃`,
  ];
  const serviceLines = [
    "出菜速度也可以，适合中午想吃正餐的时候来",
    "店里不用搞得很复杂，重点就是饭菜热乎好吃",
    "整体吃下来很舒服，没有明显油腻负担",
    "这种店胜在稳定，想吃家常菜时很省心",
    "口味比较接地气，适合附近上班族日常吃",
    "菜品选择多，几个人来点一桌很方便",
    "不想吃外卖的时候，来这里吃现炒更舒服",
    "店里气氛比较日常，吃饭不会有压力",
    "服务节奏挺顺，点菜上菜都比较利落",
    "整体体验是轻松的，适合工作日简单聚餐",
    "菜上桌后温度保持得不错，吃到后面也不会冷冰冰",
    "菜单选择比较家常，第一次来也不难点",
  ];
  const valueLines = [
    "几个人一起吃很合适，热热闹闹刚刚好",
    "整体分量感不错，吃完很有满足感",
    "现炒热菜的幸福感还是很明显",
    "中午来吃很省心，点一桌大家都能夹到喜欢的",
    "口味和出品都在线，不是随便糊弄的水平",
    "吃完不会觉得腻，反而还想下次再试别的菜",
    "很适合工作日午餐，吃得热乎也吃得踏实",
    "这类家常小炒就是要这样，简单直接又下饭",
    "整体没有网红感，但胜在耐吃和稳定",
    "如果想吃一顿有烟火气的饭，这家挺合适",
    "这一桌吃下来很顺，大家都能找到喜欢的口味",
    "比起随便解决一餐，这种现炒小馆更有幸福感",
  ];
  const closings = [
    "下次想吃江西小炒还会再来。",
    "适合收藏成中午不知道吃什么时的备选。",
    "附近上班的话，这家可以放进常吃清单。",
    "想吃热乎、下饭、带锅气的，可以试试。",
    "整体是会推荐给同事的一家小炒店。",
    "不是网红噱头，胜在饭菜本身靠谱。",
    "喜欢家常小炒的人应该会满意。",
    "这一顿吃完，下午上班都踏实了。",
    "下次准备再来试试别的招牌菜。",
    "如果路过附近，可以安排一顿。",
    "属于不用纠结、直接来吃也稳的店。",
    "总体体验不错，会愿意再来。",
  ];

  const opening = pickReviewPart(openings, seed, variant, 1);
  const wokLine = pickReviewPart(wokLines, seed, variant, 2);
  const dishLine = pickReviewPart([...dishLines, ...featureLines], seed, variant, 3);
  const serviceLine = pickReviewPart(serviceLines, seed, variant, 4);
  const valueLine = pickReviewPart(valueLines, seed, variant, 5);
  const closing = pickReviewPart(closings, seed, variant, 6);
  const detailLine = variant % 3 === 0 ? pickReviewPart(featureLines, seed, variant, 7) : serviceLine;
  const sentenceParts = [opening, wokLine, dishLine, detailLine, valueLine, closing]
    .map((part) => part.replace(/[。,.，]+$/g, ""))
    .filter(Boolean);
  const text = `${sentenceParts[0]}，${sentenceParts[1]}。${sentenceParts[2]}，${sentenceParts[3]}。${sentenceParts[4]}，${sentenceParts[5]}。`;
  return text.length > 130 ? `${sentenceParts[0]}，${sentenceParts[1]}。${sentenceParts[2]}。${sentenceParts[5]}。` : text;
}

function renderReviewText(summary, settings) {
  if (!elements.reviewText || !elements.reviewCard) return;
  const text = generateReviewText(currentPlan, summary, settings);
  elements.reviewText.textContent = text;
  elements.reviewCard.classList.toggle("is-empty", currentPlan.length === 0);
}

function shuffleReviewText() {
  if (currentPlan.length === 0) {
    alert("先生成一套菜单，再换好评文案。");
    return;
  }
  currentReviewVariant += 1;
  renderSummary();
}

function copyReviewText() {
  const text = elements.reviewText?.textContent?.trim() || "";
  if (!text || currentPlan.length === 0) {
    alert("先生成一套菜单，再复制好评。");
    return;
  }

  const done = () => {
    if (!elements.copyReview) return;
    const original = elements.copyReview.textContent;
    elements.copyReview.textContent = "已复制";
    setTimeout(() => {
      elements.copyReview.textContent = original;
    }, 1200);
  };

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => {
      window.prompt("复制这段好评：", text);
    });
  } else {
    window.prompt("复制这段好评：", text);
  }
}

function getMenuCopyText(plan = currentPlan) {
  return sortPlanDishes(plan)
    .map((dish, index) => `${index + 1}${dish.name}`)
    .join("\n");
}

function copyMenuText() {
  const text = getMenuCopyText();
  if (!text) {
    alert("先生成一套菜单，再复制菜单。");
    return;
  }

  const done = () => {
    if (!elements.copyMenu) return;
    const original = elements.copyMenu.textContent;
    elements.copyMenu.textContent = "已复制";
    setTimeout(() => {
      elements.copyMenu.textContent = original;
    }, 1200);
  };

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => {
      window.prompt("复制这份菜单：", text);
    });
  } else {
    window.prompt("复制这份菜单：", text);
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
          <div class="plan-main">
            <div class="dish-title">
              <strong>${dish.name}</strong>
              <em class="source-pill ${fixed ? "fixed" : "random"}">${fixed ? "固定" : "随机"}</em>
            </div>
            <span class="plan-meta">${getDishLabel(dish)}</span>
          </div>
          <b class="plan-price">${dish.price}<span>元</span></b>
          <div class="plan-actions">
            <button class="icon-button pin-action" type="button" data-toggle-fixed-id="${dish.id}" aria-label="${fixed ? "取消固定" : "固定"}${dish.name}">
              ${fixed ? "取消固定" : "固定"}
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

function getReadonlyRatingStars(dishId) {
  const rating = getDishRating(dishId);
  const stars = [1, 2, 3, 4, 5]
    .map((value) => `<span class="readonly-star ${rating >= value ? "active" : ""}">★</span>`)
    .join("");
  return `
    <span class="readonly-rating" aria-label="${getRatingText(dishId)}">
      <span class="readonly-stars">${stars}</span>
      <span>${rating ? `${rating}分` : "未评"}</span>
    </span>
  `;
}

function getRatingText(dishId) {
  const rating = getDishRating(dishId);
  return rating ? `评分 ${rating}分` : "未评分";
}

function showButtonFeedback(button, text = "已保存") {
  if (!button) return;
  const original = button.textContent;
  button.textContent = text;
  button.disabled = true;
  setTimeout(() => {
    button.textContent = original;
    button.disabled = false;
  }, 1200);
}

function saveCurrentPlanToWeek() {
  if (currentPlan.length === 0) {
    alert("先生成一套菜单，再保存到本周。");
    return;
  }
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
  showButtonFeedback(elements.saveWeeklyPlan, "已保存");
  if (elements.budgetStatus) {
    elements.budgetStatus.textContent = "已保存到本周";
    elements.budgetStatus.classList.remove("over", "neutral");
    elements.budgetStatus.classList.add("ok");
  }
}

function getBackfillDishes() {
  return dishes.filter((dish) => backfillDishIds.has(dish.id));
}

function renderBackfillSearchResults() {
  if (!elements.backfillSearch || !elements.backfillSearchResults) return;
  const term = elements.backfillSearch.value.trim().toLowerCase();
  if (!term) {
    elements.backfillSearchResults.innerHTML = "";
    return;
  }

  const matches = dishes
    .filter((dish) => {
      const haystack = `${dish.name} ${getDishCategories(dish).join(" ")} ${getDishTags(dish).join(" ")}`.toLowerCase();
      return haystack.includes(term);
    })
    .slice(0, 8);

  if (matches.length === 0) {
    elements.backfillSearchResults.innerHTML = '<p class="empty-state">没搜到这道菜</p>';
    return;
  }

  elements.backfillSearchResults.innerHTML = matches
    .map((dish) => {
      const selected = backfillDishIds.has(dish.id);
      return `
        <div class="plan-search-item">
          <div>
            <strong>${dish.name}</strong>
            <span>${getDishLabel(dish)}</span>
          </div>
          <b class="plan-search-price">${dish.price} 元</b>
          <button class="mini-action" type="button" data-backfill-add-id="${dish.id}" ${selected ? "disabled" : ""}>
            ${selected ? "已加入" : "加入"}
          </button>
        </div>
      `;
    })
    .join("");
}

function renderBackfillDraft() {
  if (!elements.backfillList || !elements.backfillTotal) return;
  const draftDishes = getBackfillDishes();
  const settings = {
    ...getSettings(),
    peopleCount: clampNumber(elements.backfillPeople?.value, 1, 12, 4),
  };
  const summary = calculatePlanSummary(draftDishes, settings);

  elements.backfillTotal.textContent =
    draftDishes.length > 0
      ? `${draftDishes.length} 道 · ${money(summary.finalTotal)}`
      : "还没选择菜品";

  if (draftDishes.length === 0) {
    elements.backfillList.innerHTML = '<p class="empty-state">先搜索菜品加入补录清单。</p>';
    return;
  }

  elements.backfillList.innerHTML = draftDishes
    .map(
      (dish) => `
        <div class="backfill-dish">
          <div>
            <strong>${dish.name}</strong>
            <span>${getDishLabel(dish)}</span>
          </div>
          <b>${dish.price} 元</b>
          <button class="icon-button remove-action" type="button" data-backfill-remove-id="${dish.id}">删除</button>
        </div>
      `,
    )
    .join("");
}

function addDishToBackfill(id) {
  if (!dishes.some((dish) => dish.id === id)) return;
  backfillDishIds.add(id);
  renderBackfillDraft();
  renderBackfillSearchResults();
}

function removeDishFromBackfill(id) {
  backfillDishIds.delete(id);
  renderBackfillDraft();
  renderBackfillSearchResults();
}

function clearBackfillDraft() {
  backfillDishIds = new Set();
  if (elements.backfillSearch) elements.backfillSearch.value = "";
  renderBackfillDraft();
  renderBackfillSearchResults();
}

function saveBackfillPlan() {
  const draftDishes = getBackfillDishes();
  if (draftDishes.length === 0) {
    alert("先加入要补录的菜品。");
    return;
  }

  const savedAt = elements.backfillDatetime?.value
    ? new Date(elements.backfillDatetime.value)
    : new Date();
  if (Number.isNaN(savedAt.getTime())) {
    alert("补录时间不正确。");
    return;
  }
  if (getWeekKey(savedAt) !== getWeekKey()) {
    alert("这里只能补录本周菜单。要补历史月份，可以先切到对应功能后再处理。");
    return;
  }

  const settings = {
    ...getSettings(),
    peopleCount: clampNumber(elements.backfillPeople?.value, 1, 12, 4),
  };
  const summary = calculatePlanSummary(draftDishes, settings);
  const snapshot = {
    id: Date.now(),
    weekKey: getWeekKey(savedAt),
    savedAt: savedAt.toISOString(),
    source: "backfill",
    dishes: draftDishes.map(({ id, name, price, category, categories, type }) => ({
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

  savePlanToWeek(snapshot);
  clearBackfillDraft();
  renderWeeklyPlans();
  renderCalendar();
  renderCandidates();
  showButtonFeedback(elements.saveBackfill, "已补录");
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
          <div class="weekly-plan-head">
            <strong>${plan.peopleCount} 人 · ${money(plan.total)}</strong>
            <time>${new Date(plan.savedAt).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })}</time>
          </div>
          <div class="weekly-dishes">
            ${plan.dishes
              .map(
                (dish) => `
                  <div class="weekly-dish">
                    <div class="weekly-dish-main">
                      <strong>${dish.name}</strong>
                      <span>${dish.categories ? dish.categories.join(" · ") : dish.category} · ${getRatingText(dish.id)}</span>
                    </div>
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
  const firstWeekday = (monthStart.getDay() + 6) % 7;
  const dayCount = monthEnd.getDate();
  const rowCount = Math.ceil((firstWeekday + dayCount) / 7);
  const weekLabels = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

  const plansByDate = getPlansByDate();
  const currentMonthKey = getMonthKey(monthStart);
  const monthPlans = getAllSavedPlans().filter((plan) => getMonthKey(plan.savedAt) === currentMonthKey);
  const totalSavedDays = new Set(monthPlans.map((plan) => getDateKey(plan.savedAt))).size;
  const monthDateKeys = Object.keys(plansByDate)
    .filter((dateKey) => getMonthKey(dateKey) === currentMonthKey)
    .sort((a, b) => new Date(`${b}T00:00:00`) - new Date(`${a}T00:00:00`));
  const todayKey = getDateKey(new Date());

  elements.calendarMonth.textContent = monthStart.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
  });
  elements.calendarSummary.textContent =
    monthPlans.length > 0
      ? `本月 ${totalSavedDays} 天有记录，共保存 ${monthPlans.length} 套菜单`
      : "这个月还没有保存菜单";
  if (elements.calendarRecordCount) {
    elements.calendarRecordCount.textContent = `${totalSavedDays} 天`;
  }

  if (elements.calendarInsights) {
    const sortedMonthPlans = [...monthPlans].sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt));
    const latestPlan = sortedMonthPlans[0];
    const dishCounts = monthPlans.reduce((counts, plan) => {
      plan.dishes.forEach((dish) => {
        counts[dish.name] = (counts[dish.name] || 0) + 1;
      });
      return counts;
    }, {});
    const frequentDishes = Object.entries(dishCounts)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-CN"))
      .slice(0, 3)
      .map(([name, count]) => `${name}${count > 1 ? ` x${count}` : ""}`);

    elements.calendarInsights.innerHTML = `
      <span>本月保存 <strong>${monthPlans.length}</strong> 套</span>
      <span><strong>${totalSavedDays}</strong> 天有记录</span>
      <span>最近一次：<strong>${
        latestPlan ? new Date(latestPlan.savedAt).toLocaleDateString("zh-CN", { month: "numeric", day: "numeric" }) : "暂无"
      }</strong></span>
      <span class="calendar-insight-dishes">常见菜：${frequentDishes.length ? frequentDishes.join("、") : "暂无"}</span>
    `;
  }

  if (elements.calendarRecordList) {
    elements.calendarRecordList.innerHTML = monthDateKeys.length
      ? monthDateKeys
          .map((dateKey) => {
            const date = new Date(`${dateKey}T00:00:00`);
            const dayPlans = plansByDate[dateKey] || [];
            return `
              <article class="calendar-record-day">
                <div class="calendar-record-date">
                  <strong>${date.getMonth() + 1}/${date.getDate()}</strong>
                  <span>${weekLabels[date.getDay()]} · ${dayPlans.length} 套</span>
                </div>
                <div class="calendar-record-plans">
                  ${dayPlans
                    .map(
                      (plan) => `
                        <div class="calendar-record-plan">
                          <div class="calendar-record-plan-head">
                            <b>${plan.peopleCount} 人 · ${money(plan.total)}</b>
                            <time>${new Date(plan.savedAt).toLocaleTimeString("zh-CN", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}</time>
                          </div>
                          <div class="calendar-record-dishes">
                            ${plan.dishes.map((dish) => `<span>${escapeHtml(dish.name)}</span>`).join("")}
                          </div>
                        </div>
                      `,
                    )
                    .join("")}
                </div>
              </article>
            `;
          })
          .join("")
      : `
        <div class="calendar-empty-record">
          <strong>这个月还没有记录</strong>
          <span>在点菜页保存菜单后，这里会按日期列出来。</span>
        </div>
      `;
  }

  elements.calendarGrid.style.setProperty("--calendar-row-count", String(rowCount));
  const dayCells = Array.from({ length: dayCount }, (_, index) => {
    const date = new Date(monthStart);
    date.setDate(index + 1);
    const dateKey = getDateKey(date);
    const dayPlans = plansByDate[dateKey] || [];
    const isToday = dateKey === todayKey;
    const classes = [
      "calendar-day",
      isToday ? "is-today" : "",
      dayPlans.length ? "has-plan" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return `
      <article class="${classes}" ${index === 0 ? `style="grid-column-start: ${firstWeekday + 1};"` : ""}>
        <div class="calendar-day-head">
          <time datetime="${dateKey}">${date.getDate()}</time>
          ${dayPlans.length ? `<span>${dayPlans.length} 餐</span>` : ""}
        </div>
        <div class="calendar-day-plans">
          ${dayPlans.length ? `<span class="calendar-day-dot"></span><strong>${dayPlans.length} 套菜单</strong>` : ""}
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
      const state = getDishFilterState(dish, settings);
      const statusPills = [
        getReadonlyRatingStars(dish.id),
        state.eatenThisWeek ? '<em class="source-pill muted">本周已吃</em>' : "",
        state.lowRated ? '<em class="source-pill warning">低分</em>' : "",
      ].join("");
        return `
        <div class="dish-chip ${state.eatenThisWeek || state.lowRated ? "is-muted" : ""}">
          <div class="dish-chip-head">
            <strong>${escapeHtml(dish.name)}</strong>
            <b>${dish.price} 元</b>
          </div>
          <span class="dish-meta">${escapeHtml(getDishLabel(dish))}</span>
          ${getDishCategorySelect(dish, "inline-category-select", "data-menu-category-id")}
          <div class="dish-chip-footer">
            <div class="dish-status">${statusPills}</div>
            <div class="dish-maintenance-actions">
              <button class="mini-action" type="button" data-rename-dish-id="${dish.id}">改名</button>
              <button class="mini-action" type="button" data-price-dish-id="${dish.id}">改价</button>
              <button class="mini-action danger-action" type="button" data-delete-dish-id="${dish.id}">删除</button>
            </div>
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
  currentReviewVariant += 1;
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
  if (elements.mealMode) elements.mealMode.value = settings.mealMode;
  if (elements.eatenWeekScope) elements.eatenWeekScope.value = String(settings.eatenWeekScope);
}

function handleSettingsChange() {
  resetRecommendationHistory();
  normalizeInputs();
  renderSummary();
  renderCandidates();
}

function handleSettingsInput() {
  resetRecommendationHistory();
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
    button.addEventListener("click", () => {
      activateTab(button.dataset.tab);
      button.blur();
    });
  });

  elements.baseTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activateBaseTab(button.dataset.baseTab);
      button.blur();
    });
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
  elements.copyMenu?.addEventListener("click", copyMenuText);
  elements.clearPlan.addEventListener("click", () => {
    currentPlan = [];
    fixedDishIds = new Set();
    resetRecommendationHistory();
    renderPlan();
    renderCandidates();
    renderPlanSearchResults();
  });
  elements.copyReview?.addEventListener("click", copyReviewText);
  elements.shuffleReview?.addEventListener("click", shuffleReviewText);
  elements.clearWeekly.addEventListener("click", () => {
    saveCurrentWeekPlans([]);
    renderWeeklyPlans();
    renderCalendar();
    renderCandidates();
  });
  elements.backfillSearch?.addEventListener("input", renderBackfillSearchResults);
  elements.backfillPeople?.addEventListener("input", renderBackfillDraft);
  elements.saveBackfill?.addEventListener("click", saveBackfillPlan);
  elements.clearBackfill?.addEventListener("click", clearBackfillDraft);

  elements.backfillSearchResults?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-backfill-add-id]");
    if (!button) return;
    addDishToBackfill(Number(button.dataset.backfillAddId));
    if (elements.backfillSearch) elements.backfillSearch.value = "";
    renderBackfillSearchResults();
  });

  elements.backfillList?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-backfill-remove-id]");
    if (!button) return;
    removeDishFromBackfill(Number(button.dataset.backfillRemoveId));
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

  elements.clearMonthHistory?.addEventListener("click", () => {
    const monthStart = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1);
    const monthLabel = monthStart.toLocaleDateString("zh-CN", { year: "numeric", month: "long" });
    const monthKey = getMonthKey(monthStart);
    const count = getAllSavedPlans().filter((plan) => getMonthKey(plan.savedAt) === monthKey).length;

    if (count === 0) {
      alert(`${monthLabel} 没有历史记录可清空。`);
      return;
    }

    if (!confirm(`确定清空 ${monthLabel} 的 ${count} 套历史菜单吗？\n\n只会删除保存记录，不会删除评分、菜品和类别。`)) {
      return;
    }

    clearPlansForMonth(monthKey);
    renderWeeklyPlans();
    renderCalendar();
    renderCandidates();
  });

  [elements.peopleCount, elements.totalBudget, elements.tablewareFee, elements.discount, elements.dishCount].forEach((element) => {
    element.addEventListener("input", handleSettingsInput);
    element.addEventListener("change", handleSettingsChange);
  });

  elements.menuSearch.addEventListener("input", handleSettingsChange);
  elements.planSearch.addEventListener("input", renderPlanSearchResults);
  elements.ratingSearch.addEventListener("input", renderRatingMaintenance);

  [elements.category, elements.minRating, elements.mealMode, elements.eatenWeekScope].forEach(
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

  elements.planSearchResults.addEventListener("click", (event) => {
    const button = event.target.closest("[data-plan-add-id]");
    if (!button) return;
    addDishToPlan(Number(button.dataset.planAddId));
    elements.planSearch.value = "";
    renderPlanSearchResults();
  });

  elements.dishGrid.addEventListener("click", (event) => {
    const renameButton = event.target.closest("[data-rename-dish-id]");
    if (renameButton) {
      renameDish(Number(renameButton.dataset.renameDishId));
      return;
    }

    const priceButton = event.target.closest("[data-price-dish-id]");
    if (priceButton) {
      updateDishPrice(Number(priceButton.dataset.priceDishId));
      return;
    }

    const deleteButton = event.target.closest("[data-delete-dish-id]");
    if (deleteButton) {
      deleteDish(Number(deleteButton.dataset.deleteDishId));
      return;
    }

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
      setSyncStatus("云端自动同步已开启。", "ok");
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
if (elements.supabaseRoom) elements.supabaseRoom.value = defaultSyncRoom;
setSupabaseAutoSyncEnabled(true);
if (elements.supabaseAutoToggle) {
  elements.supabaseAutoToggle.textContent = isSupabaseAutoSyncEnabled() ? "暂停同步" : "开启同步";
}
if (elements.backfillDatetime) elements.backfillDatetime.value = formatDateTimeLocal();
if (elements.backfillPeople) elements.backfillPeople.value = elements.peopleCount.value || "4";
setSyncStatus("正在读取云端数据。");
normalizeInputs();
renderPlan();
renderPlanSearchResults();
renderBackfillDraft();
renderBackfillSearchResults();
renderCandidates();
renderWeeklyPlans();
renderCalendar();
renderRatingMaintenance();
activateBaseTab(localStorage.getItem(activeBaseTabKey) || "base-menu");
activateTab(localStorage.getItem(activeTabKey) || "planner");

if (initialCloudConfig.autoSync) {
  startAutoSync();
}

startSupabaseAutoSync();
