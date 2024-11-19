import { codeToHtml } from "shiki";

export async function CodeBlock({
  code,
  language,
}: {
  code: string;
  language?: Parameters<typeof codeToHtml>[1]["lang"];
}) {
  const codeAsHtml = await codeToHtml(code, {
    lang: language ?? "javascript",
    theme: "github-dark",
  });
  return (
    <div
      className="max-w-3xl overflow-scroll"
      dangerouslySetInnerHTML={{ __html: codeAsHtml }}
    />
  );
}
