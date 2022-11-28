const {ApolloServer,gql} = require("apollo-server");

//scaler types // string, int , float, boolean , ID

const typeDefs =gql `
type Query{
    hello: String
    numberOfAnimals: Int
}
`;

const resolvers = {
    Query:{
        hello:() =>{
            return "World";
        },
        numberOfAnimals:() =>{
            return 25;
        }
    },
};

const server= new ApolloServer ({
    typeDefs,
    resolvers,
})

server.listen().then(({url}) =>{
    console.log("server is up" + url);
})