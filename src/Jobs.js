import React from 'react'
import { Card, Badge, Image } from 'react-bootstrap'


export default function Jobs({ jobs }) {
    return (
        <Card >
            <Card.Body >
                <div style={{ overflow: 'auto'}} className="d-flex justify-content-between">
                  <div>
                     <Card.Title>
                         {jobs.title} <Badge variant="info">{jobs.company}</Badge> 
                         <Image style={{ width: '50px', margin: '50px' }} src={jobs.company_logo} rounded />
                         <div>
                              <Badge variant="secondary">{jobs.location}</Badge>
                              
                         </div>
                     </Card.Title>
                     
                      <div>
                         <p>{jobs.description}</p> 
                      </div>
                    
                  </div>
                </div>
                 
            </Card.Body>
        </Card>
    )
}
