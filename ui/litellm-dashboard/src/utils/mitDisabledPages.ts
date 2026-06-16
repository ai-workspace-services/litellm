export const MIT_DISABLED_UI_PAGES = new Set<string>([
  "agentic",
  "agents",
  "workflows",
  "memory",
  "mcp-servers",
  "skills",
  "claude-code-plugins",
  "guardrails",
  "policies",
  "tools",
  "search-tools",
  "vector-stores",
  "tool-policies",
  "guardrails-monitor",
  "model-hub-table",
  "experimental",
  "caching",
  "prompts",
  "transform-request",
  "tag-management",
  "usage",
]);

export const MIT_FALLBACK_UI_PAGE = "api-keys";

export function isMITDisabledUIPage(page?: string | null): boolean {
  return Boolean(page && MIT_DISABLED_UI_PAGES.has(page));
}
