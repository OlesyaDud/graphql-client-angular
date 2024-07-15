// https://the-guild.dev/graphql/apollo-angular/docs/data/queries

import { gql } from 'apollo-angular';

const GET_BRANDS = gql`
  query {
    findAllBrands {
      id
      name
    }
  }
`;

const GET_MODELS_BY_BRANDID = gql`
  query findModelsByBrandId($brand_id: Int) {
    findModelsByBrandId(brand_id: $brand_id) {
      id
      name
      brand {
        name
      }
    }
  }
`;

export { GET_BRANDS, GET_MODELS_BY_BRANDID };
