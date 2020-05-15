import React, { Component } from 'react';
// From @thai with love 
// import ListGroup from reactstrap
//reactstrap.github.io
import {Container, ListGroup, Button } from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

//import CSS transition from react-transition-group :)))
import {CSSTransition, TransitionGroup } from 'react-transition-group';

//import cai uuid nay de generate cai IDs cho cai Doing List. 
//import { v4 as uuidv4 } from 'uuid';

//import connect form react redux
import {connect} from 'react-redux';

//import prop
import PropTypes from 'prop-types';

//
import {getLists, addList, deleteList} from '../actions/listActions'


class DoingList extends Component {

    //i was bring list do it into listReducer so i need to call it agian, 
    //run that with a lifecycle
    componentDidMount(){
        this.props.getLists();
    }
    
    //delete click with lifecycle by id
    onDeleteClick = (id) => {
        this.props.deleteList(id);
    }
    
    render(){
        const { lists } = this.props.list;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="Doing-List-Well">
                        {lists.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={600} classNames="fade" >
                                <Toast>
                                    <ToastHeader>
                                        <Button outline className="remove-btn" 
                                            style={{marginRight:'1rem',marginTop:'0.5rem', marginBottom:'0.5rem'}}
                                            color="danger"
                                            size="sm" 
                                            onClick = {//() => {
                                                //this.setState(state => ({
                                                //    lists: state.lists.filter(
                                                //        list => list.id !== id
                                                //    )
                                                //}));
                                                this.onDeleteClick.bind(this, _id)
                                            }
                                            >Done
                                        </Button>
                                    </ToastHeader>
                                    <ToastBody fontSize="300" >
                                        {name}
                                    </ToastBody>
                                </Toast>
                                
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

DoingList.propTypes={
    getLists: PropTypes.func.isRequired,
    list: PropTypes.object.isRequired
}

//create map func
const mapStateToProps = (state) => ({
    list: state.list
});

export default connect(
    mapStateToProps, 
    { 
        getLists,
        addList,
        deleteList
    })(DoingList);