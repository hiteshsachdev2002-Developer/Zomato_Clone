import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemsDescription from './ItemsDescription';

function MenuPage({itemCard}) {

  console.log(itemCard);
   return (
    <div>
      <Accordion sx={{ marginBottom: 5, marginTop: 5 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ marginBottom: 2, marginTop: 1 }}
        >
          <Typography component="span" className='item-card-heading'>{itemCard?.type}</Typography>
        </AccordionSummary>
        <AccordionDetails>
           {
               itemCard?.items?.map((item, index) => {
                  return (
                    <div key={index}>
                      <ItemsDescription item={item} />
                    </div>
                  );
                })

           }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MenuPage;