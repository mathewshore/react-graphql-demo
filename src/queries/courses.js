import { gql } from 'apollo-boost';


const GET_COURSES = gql`
    query {
        allCourses {
            id
            title
            author
            description
            topic
            url
        }
    }
`;

export {
    GET_COURSES
};
