import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';

// 
import { connect } from 'react-redux';
//
import { addList } from '../actions/listActions';
//import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

//
class ItemModal extends Component{
    state = {
        modal: false,
        name: ''
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool
    }
    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        });
    };
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const newList = {
            name: this.state.name
        };
        // Add new list into addList
        this.props.addList(newList);

        //Close modal
        this.toggle();
    }

    render(){
        return(
            <section>
                <div>
                {this.props.isAuthenticated ?
                <Button 
                    outline
                    color="dark" 
                    style={{marginBottom: '2rem', marginLeft:'1rem'}} 
                    onClick={//() => {
                        //const name = prompt('Add Work');
                        //if(name){
                        //    this.setState(state => ({
                        //        lists: [...state.list, {id: uuidv4(), name}]
                        //    }));
                        //}
                    //}
                                this.toggle
                            }> 
                    Add Work
                </Button>
                : <h6 className="mb-3 ml-4">Please login to manage tasks.</h6>
                }
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add to doing list</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="list">List work you need to do</Label>
                                <Input type="text" name="name" id="list" placeholder="Add list works" onChange={this.onChange}>
                                </Input>
                                <Button color="dark" style={{marginTop:'1rem'}} block>Add work</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
            </section>
        );
    }
}

//maping prop and state into addlist
const mapStateToProps = (state) => ({
    list: state.list,
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, {addList})(ItemModal);