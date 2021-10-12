import React from "react";
import { ButtonGroup } from "reactstrap";
import Button from "reactstrap/lib/Button";
import Col from "reactstrap/lib/Col";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Input from "reactstrap/lib/Input";
import InputGroup from "reactstrap/lib/InputGroup";
import InputGroupAddon from "reactstrap/lib/InputGroupAddon";
import Label from "reactstrap/lib/Label";
import Row from "reactstrap/lib/Row";
import UncontrolledButtonDropdown from "reactstrap/lib/UncontrolledButtonDropdown";
import HeaderProfile from "../../components/HeaderProfile/HeaderProfile";
import Widget from "../../components/Widget/Widget";

class BasicDetails extends React.Component {
  //   constructor() {}

  //   _click() {
  //     this.setState((prevState) => ({ readOnly: !prevState.readOnly }));
  //   }

  render() {
    return (
      <div>
        <div className="col-12">
         
          <HeaderProfile />   
          <Widget settings refresh close>
          
            <FormGroup>
              <Form>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Legal Name
                      </Label>
                      <Input
                        type="text"
                        placeholder="Search Dashboard"
                        id="no-borders-input"
                        className="input-no-border bg-gray-lighter"
                        value="ABC Corporation"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        LEI Registration Status
                      </Label>
                      <Input
                        type="text"
                        placeholder="Search Dashboard"
                        id="no-borders-input"
                        className="input-no-border bg-gray-lighter"
                        value="Registered"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Primary Country of Operations
                      </Label>
                      <Input
                        type="text"
                        placeholder="Search Dashboard"
                        id="no-borders-input"
                        className="input-no-border bg-gray-lighter"
                        value="Singapore"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Swift Code
                      </Label>
                      <Input
                        type="text"
                        placeholder="Search Dashboard"
                        id="no-borders-input"
                        className="input-no-border bg-gray-lighter"
                        value="ABCFXX"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Registration Number
                      </Label>
                      <Input
                        type="text"
                        placeholder="Search Dashboard"
                        id="no-borders-input"
                        className="input-no-border bg-gray-lighter"
                        value="1002343-AXZSDF"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        LEI
                      </Label>
                      <Input
                        type="text"
                        placeholder="Search Dashboard"
                        id="no-borders-input"
                        className="input-no-border bg-gray-lighter"
                        value="ABC4097092374092BDJ3"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Primary ISIC Code
                      </Label>
                      <Input
                        type="text"
                        placeholder="Search Dashboard"
                        id="no-borders-input"
                        className="input-no-border bg-gray-lighter"
                        value="1122 - Food and Beverages"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Incorporation Country
                      </Label>
                      <Input
                        type="text"
                        placeholder="Search Dashboard"
                        id="no-borders-input"
                        className="input-no-border bg-gray-lighter"
                        value="Singapore"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Incorporation Date
                      </Label>
                      <Input
                        type="text"
                        placeholder="Search Dashboard"
                        id="no-borders-input"
                        className="input-no-border bg-gray-lighter"
                        value="12 May 2012"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Entity Type
                      </Label>
                      <Input
                        type="text"
                        placeholder="Search Dashboard"
                        id="no-borders-input"
                        className="input-no-border bg-gray-lighter"
                        value="Subsidiary"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </FormGroup>
          </Widget>
          <Widget settings refresh close>
            <div className="mb-4 border-bottom pb-3">
              <h4 className="sec__hdr">Address</h4>
            </div>
            <FormGroup>
              <Form>
                <Row>
                  <Col md={6}>
                    <h5 className="article__hdr">Registered</h5>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Address Line 1
                          </Label>
                          <Input
                            type="text"
                            placeholder="Search Dashboard"
                            id="no-borders-input"
                            className="input-no-border bg-gray-lighter"
                            value="22 Street 11"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            City
                          </Label>
                          <Input
                            type="text"
                            placeholder="Search Dashboard"
                            id="no-borders-input"
                            className="input-no-border bg-gray-lighter"
                            value="Singapore"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Country
                          </Label>
                          <Input
                            type="text"
                            placeholder="Search Dashboard"
                            id="no-borders-input"
                            className="input-no-border bg-gray-lighter"
                            value="Singapore"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Legal Name
                          </Label>
                          <Input
                            type="text"
                            placeholder="Search Dashboard"
                            id="no-borders-input"
                            className="input-no-border bg-gray-lighter"
                            value="#22-30"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Address Line 2
                          </Label>
                          <Input
                            type="text"
                            placeholder="Search Dashboard"
                            id="no-borders-input"
                            className="input-no-border bg-gray-lighter"
                            value="-"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            State
                          </Label>
                          <Input
                            type="text"
                            placeholder="Search Dashboard"
                            id="no-borders-input"
                            className="input-no-border bg-gray-lighter"
                            value="112233"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <h5 className="article__hdr">Operational</h5>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Address Line 1
                          </Label>
                          <Input
                            type="text"
                            placeholder="Search Dashboard"
                            id="no-borders-input"
                            className="input-no-border bg-gray-lighter"
                            value="22 Street 11"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            City
                          </Label>
                          <Input
                            type="text"
                            placeholder="Search Dashboard"
                            id="no-borders-input"
                            className="input-no-border bg-gray-lighter"
                            value="Singapore"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Country
                          </Label>
                          <Input
                            type="text"
                            placeholder="Search Dashboard"
                            id="no-borders-input"
                            className="input-no-border bg-gray-lighter"
                            value="Singapore"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Legal Name
                          </Label>
                          <Input
                            type="text"
                            placeholder="Search Dashboard"
                            id="no-borders-input"
                            className="input-no-border bg-gray-lighter"
                            value="#22-30"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Address Line 2
                          </Label>
                          <Input
                            type="text"
                            placeholder="Search Dashboard"
                            id="no-borders-input"
                            className="input-no-border bg-gray-lighter"
                            value="-"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            State
                          </Label>
                          <Input
                            type="text"
                            placeholder="Search Dashboard"
                            id="no-borders-input"
                            className="input-no-border bg-gray-lighter"
                            value="112233"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </FormGroup>
          </Widget>
        </div>
      </div>
    );
  }
}

export default BasicDetails;
