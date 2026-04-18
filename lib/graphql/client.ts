const WP_GRAPHQL_URL = process.env.WP_GRAPHQL_URL!;

export async function fetchGraphQL<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  // Vérification de sécurité pour la variable d'environnement
  if (!WP_GRAPHQL_URL) {
    throw new Error("Erreur : WP_GRAPHQL_URL n'est pas défini dans vos variables d'environnement.");
  }

  const res = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Erreur réseau GraphQL: ${res.status}`);
  }

  const json = await res.json();

  // Intercepter les erreurs retournées par l'API WordPress (ex: champ inexistant)
  if (json.errors) {
    console.error("Erreurs GraphQL renvoyées par WordPress :", JSON.stringify(json.errors, null, 2));
    throw new Error("La requête GraphQL a échoué. Regardez le terminal pour les détails.");
  }

  // Si data est null ou undefined alors qu'il n'y a pas d'erreur, on force un objet vide
  if (!json.data) {
    console.warn("Avertissement GraphQL : La réponse est vide (pas de data).");
  }

  return json.data as T;
}