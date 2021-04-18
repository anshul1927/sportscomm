export default {
    Mutation: {
        createMovie: (_, {title}) => {
            console.log(title);
            return true
        },
        deleteMovie: (_, {title}) => {
            console.log(title);
            return true
        },
    },
};