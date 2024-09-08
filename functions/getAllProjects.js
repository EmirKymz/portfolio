import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getAllProjects = async () => {
  const getAllProjectsQuery = gql`
    query getAllProjects {
      porjects {
        title
        id
        tags
        source
        image {
          url
        }
        description
      }
    }
  `;

  const data = await graphcms.request(getAllProjectsQuery);
  return data.porjects;
};
