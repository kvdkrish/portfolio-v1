import { gql } from "@apollo/client";

export const getAllData = gql`
  query GetAllData {
    author {
      description {
        value
      }
      email
      id
      linkedin
      mobile
      name
      image {
        responsiveImage {
          width
          webpSrcSet
          title
          srcSet
          src
          sizes
          height
          bgColor
          base64
          aspectRatio
          alt
        }
      }
      portfolioStacks {
        id
        name
      }
      gitLink
    }
    allSkillsets(orderBy: ratings_DESC, first: 100) {
      id
      name
      ratings
    }
    allProjects {
      id
      name
      description {
        value
      }
      stacks {
        id
        name
      }
    }
    allEducations(orderBy: endYear_DESC) {
      course
      endYear
      grade
      id
      instituteName
      startYear
      location
    }
    allCompanies(orderBy: startYear_DESC) {
      current
      endYear
      id
      name
      role
      startYear
      location
    }
    allPlaygrounds {
      id
      name
      description {
        value
      }
      stacks {
        id
        name
        ratings
      }
      gitLinks(markdown: true)
    }
  }
`;
