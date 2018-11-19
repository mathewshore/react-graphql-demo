import React from 'react';

import Query from 'react-apollo/Query';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import grey from '@material-ui/core/colors/grey';

import CoursesListView from './components/views/CoursesListView';
import { COURSE_QUERIES } from './queries';



const styles = theme => ({
    appHeadContainer: {
        marginBottom: theme.spacing.unit * 2
    },
    appContent: {
        padding: theme.spacing.unit * 5,
        minHeight: '100vh',
        height: '100%',
        background: grey[50]
    }
});

const AppContent = props => {
    const { classes } = props;
    return (
        <div className={classes.appContent}>
            <div className={classes.appHeadContainer}>
                <Typography variant="h3">ReactJS, Material-UI, & GraphQL demo example</Typography>
                <Typography variant="body1">
                    This app uses <a href="https://launchpad.graphql.com/vm8mjvrnv3">https://launchpad.graphql.com/vm8mjvrnv3</a> for its data reference.
                </Typography>
                <Divider />
            </div>
            <Query query={COURSE_QUERIES.GET_COURSES}>
                {({ loading, error, data }) => {
                    if (loading) {
                        return 'loading...';
                    }
                    if (error) {
                        return error;
                    }
                    console.log('data', data);
                    return <CoursesListView courses={data.allCourses} />;
                }}
            </Query>
        </div>
    );
};

export default withStyles(styles, { withTheme: true })(AppContent);
