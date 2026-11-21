import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export async function GET() {
  const file = path.join(
    process.cwd(),
    "Books",
    "Sourashtra Gotra Kando .pdf",
  );
  const book = await readFile(file);

  return new Response(new Uint8Array(book), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'inline; filename="Sourashtra-Gotra-Kando.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
