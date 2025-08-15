import { XMLParser } from "fast-xml-parser";

const FEEDS = [
  "https://feeds.reuters.com/reuters/businessNews",
  "https://feeds.reuters.com/reuters/marketsNews"
];

const parser = new XMLParser({ ignoreAttributes: false });

export default async () => {
  try {
    const all = [];
    for (const url of FEEDS) {
      const r = await fetch(url); const t = await r.text();
      const x = parser.parse(t);
      const items = x?.rss?.channel?.item || [];
      all.push(...items.map(i => ({
        title: i.title, link: typeof i.link === "string" ? i.link : "",
        published: i.pubDate || ""
      })));
    }
    // unique + latest 10
    const seen = new Set();
    const top = [];
    for (const it of all.sort((a,b)=>new Date(b.published)-new Date(a.published))) {
      if (!it.title || seen.has(it.title)) continue;
      seen.add(it.title); top.push(it); if (top.length===10) break;
    }
    return new Response(JSON.stringify({ items: top }), {
      headers: { "content-type": "application/json", "access-control-allow-origin": "*" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ items: [], error: String(e) }), {
      status: 500, headers: { "content-type": "application/json" }
    });
  }
};
