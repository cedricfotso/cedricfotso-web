const WP_GRAPHQL_URL = process.env.WP_GRAPHQL_URL!;

if (!WP_GRAPHQL_URL) {
  throw new Error(
    "Erreur critique : WP_GRAPHQL_URL n'est pas défini dans les variables d'environnement."
  );
}

type WpQueryOptions = {
  variables?: Record<string, unknown>
  /** ISR revalidation in seconds. Default: 1h. Set to 0 to disable cache. */
  revalidate?: number
  /** Optional cache tags for on-demand revalidation. */
  tags?: string[]
}

export async function wpQuery<T = unknown>(
  query: string,
  options: WpQueryOptions = {},
): Promise<T> {
  const { variables, revalidate = 3600, tags } = options

  const res = await fetch(WP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate, tags },
  })

  if (!res.ok) {
    throw new Error(
      `[wpQuery] HTTP ${res.status} ${res.statusText} on ${WP_GRAPHQL_URL}`,
    )
  }

  const json = (await res.json()) as {
    data?: T
    errors?: Array<{ message: string }>
  }

  if (json.errors?.length) {
    throw new Error(
      `[wpQuery] GraphQL errors: ${json.errors.map((e) => e.message).join(" | ")}`,
    )
  }

  if (!json.data) {
    throw new Error("[wpQuery] Empty response (no data field).")
  }

  return json.data
}