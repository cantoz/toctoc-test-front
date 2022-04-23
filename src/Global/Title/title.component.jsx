import React from "react";
import Typography from '@mui/material/Typography';

const Title = (props) => {
    return (
        <Typography className='title' variant='h2' component='h3'>
            {props.text}
        </Typography>
    );
}

export default Title;