const feedUrl = "https://www.reddit.com/r/DawnwalkerOfficial/new/.rss";
let response;
try {
  response = await fetch(feedUrl, { headers: { "user-agent": "DawnArchive community pulse/1.0 (https://www.dawnwalker.cc)" } });
} catch (error) {
  console.log(`Community feed unavailable (${error.cause?.code || error.message}). Review player-feedback issues directly.`);
  process.exit(0);
}

if (!response.ok) {
  console.log(`Community feed unavailable (${response.status}). Review player-feedback issues directly.`);
  process.exit(0);
}

const xml = await response.text();
const decode = (value = "") => value
  .replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&#39;", "'").replaceAll("&quot;", '"');
const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((match) => {
  const entry = match[1];
  return {
    title: decode(entry.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1]?.replace(/<[^>]+>/g, "").trim()),
    href: entry.match(/<link[^>]+href="([^"]+)"/)?.[1],
    updated: entry.match(/<updated>([^<]+)<\/updated>/)?.[1],
  };
}).filter((entry) => entry.title && entry.href).slice(0, 20);

console.log("## Public community pulse\n");
console.log("Recent public post titles for human review. A link is not evidence that a report is correct.\n");
for (const entry of entries) console.log(`- [${entry.title.replaceAll("[", "\\[").replaceAll("]", "\\]")}](${entry.href}) — ${entry.updated || "time unavailable"}`);
if (!entries.length) console.log("No feed entries were available.");
