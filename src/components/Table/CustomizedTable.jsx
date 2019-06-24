import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});


function CustomizedTable(props) {
    const { classes, tableData } = props;
    let dataHeader = [];

    function valueDataHeader(data) {
        for (let i = 0; i < data.length; i++) {
            if (i === 0) {
                dataHeader.push(Object.keys(data[i]));
            };
        }
    }

    valueDataHeader(tableData);
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {/* {dataHeader.map((row, key) => {
                            return (
                                <CustomTableCell key={key} >
                                    {row}
                                </CustomTableCell>
                            );
                        })} */}
         
                        <CustomTableCell>Dessert (100g serving)</CustomTableCell>
                        <CustomTableCell>Calories</CustomTableCell>
                        <CustomTableCell>Fat (g)</CustomTableCell>
                        <CustomTableCell>Carbs (g)</CustomTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {tableData.map((row, key) => (
                        <TableRow key={key}>
                            {Object.keys(row).map(function (key2) {
                                return (
                                    <CustomTableCell key={key2}>
                                        {row[key2]}
                                    </CustomTableCell>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);