import { useState } from "react"
import './Test.css'
import { Table, Form, Button, Collapse } from 'react-bootstrap';


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
        <div className="container-fluid text-black">
            <div className="container">
                <div className="row">
                    Value: {counter}
                </div>
                <div className="row">
                    <button className="btn btn-sm btn-danger" onClick={increment}>Increment By 1</button>
                    <button className="btn btn-sm btn-success" onClick={incrementByFive}>Increment By 5</button>
                    <button className="btn btn-sm btn-warning" onClick={setBackToZero}>reset</button>
                    <button className="btn btn-blue">
                        Button
                    </button>
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
                <div className="row">
                    <Table striped bordered hover className="bg-white">
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
                                            className="remove-border"
                                            type="text"
                                            value={item.name}
                                            onChange={(e) => handleDataChange(item.id, 'name', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            className="remove-border"
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
                <div className="row">
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

        </div >
    )
}
export default Test