import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "2mb",
    },
  },
};

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Sync-Room");
}

function getSupabaseClient() {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error("服务器缺少 SUPABASE_URL 或 SUPABASE_SERVICE_ROLE_KEY 环境变量");
  }
  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

function normalizeRoomId(value) {
  const roomId = String(value || "").trim();
  if (!roomId) return "";
  return roomId.slice(0, 80);
}

function getRoomId(req) {
  return normalizeRoomId(req.query.room || req.headers["x-sync-room"] || req.body?.roomId);
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (!["GET", "PUT", "POST"].includes(req.method)) {
    res.setHeader("Allow", "GET, PUT, POST");
    return res.status(405).json({ error: "不支持的请求方式" });
  }

  const roomId = getRoomId(req);
  if (!roomId) {
    return res.status(400).json({ error: "缺少同步房间号" });
  }

  try {
    const supabase = getSupabaseClient();

    if (req.method === "GET") {
      const { data, error } = await supabase
        .from("lunch_states")
        .select("data, updated_at")
        .eq("room_id", roomId)
        .maybeSingle();

      if (error) throw error;
      if (!data) return res.status(200).json({ found: false });

      return res.status(200).json({
        found: true,
        data: data.data,
        updatedAt: data.updated_at,
      });
    }

    const payload = req.body?.data;
    if (!payload || typeof payload !== "object") {
      return res.status(400).json({ error: "同步内容不能为空" });
    }

    const updatedAt = new Date().toISOString();
    const { error } = await supabase
      .from("lunch_states")
      .upsert(
        {
          room_id: roomId,
          data: payload,
          updated_at: updatedAt,
        },
        { onConflict: "room_id" },
      );

    if (error) throw error;

    return res.status(200).json({
      ok: true,
      updatedAt,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || "同步失败",
    });
  }
}
