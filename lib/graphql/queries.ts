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
        ordre
        tags
      }
    }
  }
`;

export const GET_PROJECT_BY_SLUG = `
  query GetProject($slug: ID!) {
    projet(id: $slug, idType: SLUG) {
      title
      slug
      tagline
      lienProjet
      secteur
      marche
      contexte
      defis
      solutions
      resultats
      tags
    }
  }
`;