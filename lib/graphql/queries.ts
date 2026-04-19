export const GET_PROJECTS = `
  query GetProjects {
    projets(first: 20) {
      nodes {
        title
        slug
        tagline
        lienProjet
        secteur
        marche
        tags
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

// lib/graphql/queries.ts (Suite du fichier)

export const GET_PROJECT_BY_SLUG = `
  query GetProject($slug: ID!) {
    projet(id: $slug, idType: SLUG) {
      title
      slug
      tagline
      lienProjet
      secteur
      marche
      tags
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      # On désactive temporairement ces champs le temps de configurer ACF/WPGraphQL côté WordPress
      # contexte
      # defis
      # solutions
      # resultats
    }
  }
`;