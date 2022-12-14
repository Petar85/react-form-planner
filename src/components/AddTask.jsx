import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export const AddTask = (props) => {
    const [taskName, setTaskName] = useState ([]);
    const [taskDescription, setTaskDescription] = useState ([]);
    const [assignedTo, setAssignedTo] = useState ([]);
    const [dueDate, setDueDate] = useState ([]);

    const add = (e) => {
        e.preventDeafault();
        
        setState({ taskName: "", taskDescription: "", assignedTo: "", dueDate: ""});
    };
    
    return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Disabled input</Form.Label>
        <Form.Control placeholder="Disabled input" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select disabled>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group>
    </>
    );

        
    
};

