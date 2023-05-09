import { useState } from "react"
import './Test.css'
import { Table, Form, Button, Collapse } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function Test() {
    const [counter, setCounter] = useState(0);
    const [showCollapse, setShowCollapse] = useState(false);
    const [people, setPeople] = useState([
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        { id: 3, name: 'Bob', age: 40 }
    ]);

    const handleToggleCollapse = () => setShowCollapse(!showCollapse);

    const handleDataChange = (id, field, value) => {
        setPeople(prevPeople => {
            return prevPeople.map(item => {
                if (item.id === id) {
                    return { ...item, [field]: value };
                }
                return item;
            });
        });
    };

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    const incrementByFive = () => {
        setCounter(prevCounter => prevCounter + 5)
    }

    const setBackToZero = () => {
        setCounter(0)
    }

    return (
        <div className="container-fluid text-white bg-dark h-100">
            <div className="row">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container >
                        <Navbar.Brand><Link to={'/home'} className="text-decoration-none text-white">React-Bootstrap</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="container bg-dark ">
                <div className="row">
                    <h1>
                        Value : {counter}
                    </h1>
                </div>
                <div className="row">
                    <div className="col-sm-2"><button className="btn btn-md btn-danger" onClick={increment}>+1</button></div>
                    <div className="col-sm-2"><button className="btn btn-md btn-success" onClick={incrementByFive}>+5</button></div>
                    <div className="col-sm-2"><button className="btn btn-md btn-warning" onClick={setBackToZero}>Reset</button></div>
                    <div className="row mt-2">
                        <p>
                            <Button variant="primary" onClick={handleToggleCollapse}>
                                Link with onClick
                            </Button>
                        </p>
                        <Collapse in={showCollapse}>
                            <div className="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </Collapse>
                    </div>
                </div>
                <div className="row">
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Oh snap! You got an error!</strong>
                        <p>
                            Change this and that and try again.
                        </p>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <Table striped bordered hover className="bg-white" bgcolor="dark" variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {people.map(item =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>
                                        <Form.Control 
                                            className="remove-border bg-dark text-white"
                                            type="text"
                                            value={item.name}
                                            onChange={(e) => handleDataChange(item.id, 'name', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            className="remove-border bg-dark text-white"
                                            type="number"
                                            value={item.age}
                                            onChange={(e) => handleDataChange(item.id, 'age', e.target.value)}
                                        />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>

        </div >
    )
}
export default Test