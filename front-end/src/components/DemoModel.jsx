import React, { Component } from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
    Row,
    Col
  } from "reactstrap";

class DemoModel extends React.Component {
    state = {
        defaultModal: false
      };
      toggleModal = state => {
        this.setState({
          [state]: !this.state[state]
        });
      };

    render() {
        return (
            
            <Col md="4">
            <Button
              block
              className="mb-3"
              color="warning"
              type="button"
              onClick={() => this.toggleModal("notificationModal")}
            >
              Share FeedBack
            </Button>
            <Modal
              className="modal-dialog-centered modal-danger"
              contentClassName="bg-gradient-danger"
              isOpen={this.state.notificationModal}
              toggle={() => this.toggleModal("notificationModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-notification">
                  Your attention is required
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("notificationModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="py-3 text-center">
                  <i className="ni ni-active-40 ni-3x" />
                  <h4 className="heading mt-4">Are the details of the listing correct?</h4>
                  
                </div>
              </div>
              <div className="modal-footer">
                <Button className="btn-white" color="default" type="button">
                  Yes
                </Button>
                <Button className="btn-white" color="default" type="button">
                  No
                </Button>
                <Button className="btn-white" color="default" type="button">
                  Adviser No Reachable
                </Button>
                <Button
                  className="text-white ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("notificationModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </Col>
        )
    }
}

export default DemoModel
