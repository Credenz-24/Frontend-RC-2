import React from 'react'
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import { rows } from '../data';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';
import KeyboardDoubleArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowLeftTwoTone';

export default function Leaderboard(){
  const columns = [
    {
        name: "Rank",
        selector: (row) => row.rank,
        sortable: true
    },
    {
        name: "User",
        selector: (row) => row.username,
        sortable: true
    },
    {
        name: "Q1",
        selector: (row) => row.q1,
        sortable: true
    },
    {
        name: "Q2",
        selector: (row) => row.q2,
        sortable: true
    },
    {
        name: "Q3",
        selector: (row) => row.q3,
        sortable: true
    },
    {
        name: "Q4",
        selector: (row) => row.q4,
        sortable: true
    },
    {
        name: "Q5",
        selector: (row) => row.q5,
        sortable: true
    },
    {
        name: "Q6",
        selector: (row) => row.q6,
        sortable: true
    },
    {
        name: "Time",
        selector: (row) => row.time,
        sortable: true
    },
    {
        name: "Score",
        selector: (row) => row.score,
        sortable: true
    },
    // {
    //     name: "Accuracy",
    //     selector: (row) => row.accuracy
    // },
];
    const [data, setData]= useState([]);
    const [search, SetSearch]= useState('');
    const [filter, setFilter]= useState([]);

    useEffect(() => {
      // Directly setting custom data to state
        setData(rows);
        setFilter(rows);
    }, []);

    useEffect(() => {
        const result = data.filter((item) => {
            return item.username.toLowerCase().match(search.toLowerCase());
        });
        setFilter(result);
    }, [search, data]);
   
    const customStyles = {
        rows: {
            style: {
                 // Adjust based on your needs
                borderBottom: '2px solid cyan', // Cyan border for rows
                backgroundColor: '#1d135c',
                color: 'white'
            },
        },
        headCells: {
            style: {
                fontWeight: "bold",
                fontSize: "14px",
                borderRight: '2px solid cyan', // Cyan border for column separation
                borderTop: '2px solid cyan'
            },
        },
        cells: {
            style: {
                justifyContent: 'center', // Center align text in cells
                alignItems: 'center',
                display: 'flex',
                borderBottom: '2px solid cyan', // Cyan border for rows
                borderRight: '2px solid cyan', // Cyan border for column separation
            },
			
        },
        pagination:{
            style:{
                color: "black"
            }
        },
    };


    const defaultRowsPerPage = 5; // Default number of rows per page
    const rowsPerPageOptions = [5, 10, 15, 20];

    return(
        <React.Fragment>
           
        <div className="max-w-full mx-auto border-4 border-cyan-500 rounded-lg">
            <h1 className="dataTable-header text-center text-black">Leaderboard</h1>
            <DataTable
            className=""
            columns={columns}
            data={filter}
            pagination
            paginationPerPage={defaultRowsPerPage} // Set the default rows per page
            paginationRowsPerPageOptions={rowsPerPageOptions}
            // paginationIconFirstPage={<><img src="https://www.svgrepo.com/show/31619/next-arrow.svg" alt="" /></>}
            paginationIconNext={<><ArrowCircleRightIcon/></>}
            paginationIconPrevious={<><ArrowCircleLeftIcon/></>}
            // paginationIconNext={<><FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" /></>}
            paginationIconLastPage = {<><KeyboardDoubleArrowRightTwoToneIcon/></>}
            paginationIconFirstPage={<><KeyboardDoubleArrowLeftTwoToneIcon/></>}
            customStyles={customStyles}
            fixedHeader
            selectableRowsHighlight
            highlightOnHover
            subHeader
             subHeaderComponent={
                <input type="text"
                className="form-control w-1/4 p-2 border border-gray-300 rounded"
                placeholder="Search..."
                value={ search}
                onChange={(e)=>SetSearch(e.target.value)}
                
                />
             }
             subHeaderAlign="right"
            
            />
            </div>
        </React.Fragment>
    );
}