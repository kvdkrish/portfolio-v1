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
    allSkillsets {
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
    allEducations {
      course
      endYear
      grade
      id
      instituteName
      startYear
    }
    allCompanies {
      current
      endYear
      id
      name
      role
      startYear
    }
  }
`;
