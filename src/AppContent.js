import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const getMovies = gql`
    query {
        allCourses {
            id
            title
        }
    }
`;

const AppContent = () => (
    <Query query={getMovies}>
        {({ loading, error, data }) => {
            if (loading) {
                return 'loading...';
            }
            if (error) {
                return error;
            }
            console.log('data', data);
            return data.allCourses.map(course => <div key={course.id}>{course.title}</div>)
        }}
    </Query>
);

export default AppContent;
