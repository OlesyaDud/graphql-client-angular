// https://the-guild.dev/graphql/apollo-angular/docs/data/mutations

import { gql } from 'apollo-angular';

const CREATE_BRAND = gql`
  mutation createBrand($brandDto: BrandDto) {
    saveBrand(brandDto: $brandDto) {
      id
      name
    }
  }
`;

const UPDATE_BRAND = gql`
  mutation updateBrand($id: Int, $brandDto: BrandDto) {
    updateBrand(id: $id, brandDto: $brandDto) {
      id
      name
    }
  }
`;

const DELETE_BRAND = gql`
  mutation deleteBrand($id: Int) {
    deleteBrand(id: $id) {
      id
    }
  }
`;

export { CREATE_BRAND, UPDATE_BRAND, DELETE_BRAND };

// # query{
//     #   findAllBrands{
//     #     id,
//     #     name,
//     #     country
//     #   }
//     # }

//     query{
//       findModelsByBrandId(brand_id: 10){
//         name,
//       }
//     }

//     # query{
//     #   findBrand(id: 50){
//     #     name
//     #   }
//     # }

//     # query{
//     #   findAllBrands{
//     #     id,
//     #     name,
//     #     models{
//     #       name
//     #     }
//     #   }
//     # }

//     # mutation{
//     #   updateBrand(id: 1, brandDto: {
//     #      name: "BMW", country: GER
//     #   }){
//     #     id
//     #   }
//     # }

//     # mutation{
//     #   deleteModel(id: 1){
//     #     id
//     #   }
//     # }

//     # query{
//     #   findAllBrands{
//     #     id,
//     #     name,
//     #     country
//     #     models {
//     #       id
//     #       name
//     #     }
//     #   }
//     # }

//     # mutation {
//     #   saveModel(brand_id: 1, name: "Clase E"){
//     #     id
//     #     name
//     #   }
//     # }

//     # mutation {
//     #   saveModel(modelDto: {
//     #     brand_id: 7
//     #     name: "Leon"
//     #   }){
//     #     id
//     #     name
//     #   }
//     # }

//     # mutation{
//     # 	saveBrand(brandDto: {
//     #     name: "Mercedes",
//     #     country: GER
//     #   }) {
//     #     id
//     #   }
//     # }

//     # mutation{
//     #   saveBrand(brandDto: {
//     #     name: "",
//     #     country: ES
//     #   }){
//     #     id
//     #     name
//     #     country
//     #   }
//     # }

//     # subscription{
//     #   findAllBrandsFlux{
//     #     name
//     #     models{
//     #       id
//     #       name
//     #     }
//     #   }
//     # }

//     # subscription{
//     #   findBrandMono(id: 10){
//     #     name
//     #   }
//     # }
