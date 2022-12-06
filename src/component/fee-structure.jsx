import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';


export default function FeeStructure() {
  const data = require('../utils/data.json');

  const ALL_COURSES=['Medical', 'Dental', 'Ayurveda']
  const ALL_LEVEL=['UG', 'PG', 'DIPLOMA', 'Ph.D']


  return (
    <TreeView
    style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-evenly'
    }}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
      <TreeItem nodeId="1" label={Object.keys(data)[0]}>
        {Object.keys(data['Exam Fee'])?.map((nationality,k)=>{
          return  <TreeItem nodeId={100*(k+1)} label={nationality}>
            {Object.keys(data["Exam Fee"][nationality])[0]==="ALL_COURSES"&& ALL_COURSES.map((course,key)=>{
              return <TreeItem nodeId={(100*(k+1)+key+1)} label={course}>
                {Object.keys(data["Exam Fee"][nationality]["ALL_COURSES"])[0]==="ALL_LEVEL"&&ALL_LEVEL.map((level,lkey)=>{
                  return <TreeItem nodeId={100*(k+1)+10*(key+1)+lkey+1} label={level}>
                      <p>Amount : {data["Exam Fee"][nationality]["ALL_COURSES"]["ALL_LEVEL"].amount}</p>
                  </TreeItem>
                })}
              </TreeItem>
            })}
          </TreeItem>
        })}
      </TreeItem>
      <TreeItem nodeId="1000" label={Object.keys(data)[1]}>
        {Object.keys(data['Application Fee'])?.map((nationality,nkey)=>{
          return <TreeItem nodeId={1000+100*(nkey+1)} label={nationality}>
                {Object.keys(data['Application Fee'][nationality])[0]==="ALL_COURSES"&&ALL_COURSES.map((course,ckey)=>{
                  return <TreeItem nodeId={1000+100*(nkey+1)+10*(ckey+1)} label={course}>
                    {Object.keys(data['Application Fee'][nationality]["ALL_COURSES"]).map((level,lkey)=>{
                      return <TreeItem nodeId={1000+100*(nkey+1)+10*(ckey+1)+lkey+1} label={level}>
                          <p>Amount : {data['Application Fee'][nationality]["ALL_COURSES"][level].amount}</p>
                      </TreeItem>
                    })}
                  </TreeItem>
                })}
            </TreeItem>
        })}
      </TreeItem>
    </TreeView>
  );
}
