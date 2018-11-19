import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';


const styles = theme => ({
    courseLink: {
        textDecoration: 'none'
    },
    courseItem: {
        padding: theme.spacing.unit,
        boxShadow: theme.shadows[2],
        borderRadius: 2,
        transition: 'all 250ms ease',
        background: '#fff',
        '&:hover': {
            background: grey[200],
        }
    }
});

const CoursesListView = (props) => {
    const { classes } = props;
    return (
        <Grid container spacing={16}>
            {map(props.courses, course => (
                <Grid item xs={6} key={course.id}>
                    <a href={course.url} className={classes.courseLink}>
                        <div className={classes.courseItem}>
                            <Typography variant="h6">
                                {course.title}
                            </Typography>
                            <Typography variant="subtitle1">
                                {course.author}
                            </Typography>
                            <Typography variant="caption">
                                {course.description}
                            </Typography>
                        </div>
                    </a>
                </Grid>
            ))}
        </Grid>
    );
};

CoursesListView.propTypes = {
    classes: PropTypes.object.isRequired,
    courses: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(styles)(CoursesListView);
