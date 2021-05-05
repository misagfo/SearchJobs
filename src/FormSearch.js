import React from 'react'
import { Form, Col } from 'react-bootstrap'

export default function FormSearch({params, paramChange}) {
    return (
       <Form>
           <Form.Row>
               <Form.Group as={Col}>
                   <Form.Label>Description</Form.Label>
                     <Form.Control onChange={paramChange} value={params.description} type="text" name="description">
                  </Form.Control>
               </Form.Group>
               <Form.Group as={Col}>
                   <Form.Label>Location</Form.Label>
                     <Form.Control onChange={paramChange} value={params.location} type="text" name="location">
                  </Form.Control>
               </Form.Group>
               <Form.Group as={Col}>
                  <Form.Check className="mt-5" onChange={paramChange} value={params.full_time} type="checkbox" name="full_time" id="full-time" label="Full-Time"/>
                </Form.Group>
           </Form.Row>
       </Form>
    )
}
