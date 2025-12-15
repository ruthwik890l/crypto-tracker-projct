import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import './FAQ.css'; // Assuming you will add your styles here

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleExpansion('panel1')}
        TransitionComponent={Fade}
        sx={{ backgroundColor: 'var(--white)' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h4" className="faq-question">How often is the crypto data updated?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  variant="h5" className="faq-answer">
            Our crypto data is updated in real time every few seconds to provide you with the most accurate and up-to-date information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleExpansion('panel2')}
        TransitionComponent={Fade}
        sx={{ backgroundColor: 'var(--white)' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h4" className="faq-question">Can I track multiple cryptocurrencies at once?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" className="faq-answer">
            Yes, you can track multiple cryptocurrencies simultaneously. Our platform allows you to add and monitor a custom list of your favorite coins.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleExpansion('panel3')}
        TransitionComponent={Fade}
        sx={{ backgroundColor: 'var(--white)' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h4" className="faq-question">Is there a way to set price alerts for cryptocurrencies?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" className="faq-answer">
            Currently, we do not support price alerts. However, we are working on adding this feature in future updates to help you stay informed about significant price changes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleExpansion('panel4')}
        TransitionComponent={Fade}
        sx={{ backgroundColor: 'var(--white)' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography variant="h4" className="faq-question">How do I use the dashboard feature?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" className="faq-answer">
            To use the dashboard feature, simply navigate to the Dashboard section from the main menu. You can customize it to display the information that matters most to you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleExpansion('panel5')}
        TransitionComponent={Fade}
        sx={{ backgroundColor: 'var(--white)' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography  variant="h4" className="faq-question">Are there any fees associated with using the tracker?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" className="faq-answer">
            The crypto tracker is free to use. We do not charge any fees for accessing or using the tracking features on our platform.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
