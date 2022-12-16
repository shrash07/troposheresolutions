import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



export default function VerticalLinearStepper() {
  const data = require('../utils/data.json');

  const ALL_FEES=['Exam Fee', 'Application Fee']
  const ALL_NATIONALITY=['INDIAN', 'FOREIGN', 'NRI', 'SAARC']
  const ALL_COURSES=['Medical', 'Dental', 'Ayurveda']
  const ALL_LEVEL=['UG', 'PG', 'DIPLOMA', 'Ph.D', 'UG-DIPLOMA']

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [fee,setFee] = React.useState('');
  const [nationality,setNationality] = React.useState('');
  const [course,setCourse] = React.useState('');
  const [level,setLevel] = React.useState('')

  const steps = [`Select Fee Type ${fee && `- ${fee}}`}`, `Select Nationality ${nationality && `- ${nationality}`}`, `Select Course ${course && `- ${course}`}`, `Select Level ${level && `- ${level}`}`];


  const getStepContent = (step)=>{
  switch (step) {
    case 0:
      return <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Fee Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fee}
          onChange={(e)=>{
            setFee(e.target.value)
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {ALL_FEES.map((e)=><MenuItem value={e}>{e}</MenuItem>)}
        </Select>
      </FormControl>
      <div className={classes.actionsContainer}>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={()=>{
setFee('')
handleBack()
}}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              variant="contained"
              disabled={!fee}
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              Next
            </Button>
          </div>
        </div>
      </div>;
    case 1:
      return <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={nationality}
          onChange={(e)=>{
            setNationality(e.target.value)
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {fee==="Exam Fee" && ALL_NATIONALITY.map((e)=><MenuItem value={e}>{e}</MenuItem>)}
          {fee==="Application Fee" && ALL_NATIONALITY.filter((e)=>e=="INDIAN"||e=="FOREIGN").map((e)=><MenuItem value={e}>{e}</MenuItem>)}
        </Select>
      </FormControl>
      <div className={classes.actionsContainer}>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={()=>{
                setNationality('')
                handleBack()
              }}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              variant="contained"
              disabled={!nationality}
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              Next
            </Button>
          </div>
        </div>
      </div>;
      case 2:
      return <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Course</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={course}
          onChange={(e)=>{
            setCourse(e.target.value)
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {ALL_COURSES.map((e)=><MenuItem value={e}>{e}</MenuItem>)}
        </Select>
      </FormControl>
      <div className={classes.actionsContainer}>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={()=>{
                setCourse('')
                handleBack()
              }}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              variant="contained"
              disabled={!course}
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              Next
            </Button>
          </div>
        </div>
      </div>;
      case 3:
      return <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={level}
          onChange={(e)=>{
            setLevel(e.target.value)
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {fee==="Exam Fee" && ALL_LEVEL.filter((e)=>e!=='UG-DIPLOMA').map((e)=><MenuItem value={e}>{e}</MenuItem>)}
          {fee==="Application Fee" && ALL_LEVEL.filter((e)=>e!=='DIPLOMA'&&e!=='Ph.D').map((e)=><MenuItem value={e}>{e}</MenuItem>)}
        </Select>
      </FormControl>
      <div className={classes.actionsContainer}>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={()=>{
                setLevel('')
                handleBack()
              }}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              variant="contained"
              disabled={!level}
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              Next
            </Button>
          </div>
        </div>
      </div>;
    default:
      return 'Unknown step';
  }
}

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setFee('');
    setNationality('');
    setCourse('');
    setLevel('');
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index)}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Amount - <span style={{fontWeight:'bold'}}>{fee==="Exam Fee" && data[fee][nationality]['ALL_COURSES']['ALL_LEVEL'].amount}{fee==="Application Fee" && data[fee][nationality]['ALL_COURSES'][level].amount}</span></Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}

