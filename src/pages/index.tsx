import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';

export interface UserInfo {
  id: number;
  firstName: string;
  familyName: string;
  eMail: string;
}

export default function UserManagementConsole() {
  const [usersState, setUsersState] = useState<UserInfo[]>([]);
  const columns: (keyof UserInfo)[] = ['id', 'firstName', 'familyName', 'eMail'];
  return (
    <Container fluid>
      <Col>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                {columns.map(col => {
                  return (<th>{col}</th>)
                })}
              </tr>
            </thead>
            <tbody>

            </tbody>
          </Table>
        </Row>
        <Row>
          <Button variant="outline-primary">Add</Button>
        </Row>
      </Col>
    </Container>
  )
}