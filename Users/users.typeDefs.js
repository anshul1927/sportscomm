import { gql } from "apollo-server"

const typeDefs = gql`

type Movie{
    id: Int
    title: String
    year: Int
}
type Query{
    movies: [Movie]
    movie: Movie
}

type Mutation {
    createMovie(title: String!): Boolean
    deleteMovie(title: String!): Boolean
}
`;