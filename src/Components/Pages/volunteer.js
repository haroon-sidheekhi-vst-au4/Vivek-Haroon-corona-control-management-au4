import React, {Component} from 'react';
import axios from 'axios';
import * as MaterialUI from "@material-ui/core";
import Footer from './footer'
export default class Volunteer extends Component {

    constructor(props) {
        super(props);

        this.changeName = this.changeName.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeRole = this.changeRole.bind(this);
        this.changeNum = this.changeNum.bind(this);
        this.changeAdNum = this.changeAdNum.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            adress: '',
            age: '',
            role:'',
            num:'',
            adnum:''
        }
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    changeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }
    changeAge(e) {
        this.setState({
            age: e.target.value
        });
    }
    changeRole(e) {
        this.setState({
            role: e.target.value
        });
    }
    changeNum(e) {
        this.setState({
            num: e.target.value
        });
    }
    changeAdNum(e) {
        this.setState({
            adnum: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Name Submitted: ${this.state.name}`);
        console.log(`Adress Submitted: ${this.state.address}`);
        console.log(`Age Submitted: ${this.state.age}`);
        console.log(`Role Submitted: ${this.state.role}`);
        console.log(`Role Submitted: ${this.state.num}`);
        console.log(`Role Submitted: ${this.state.adnum}`);



        const newTodo = {
            name: this.state.name,
            address: this.state.address,
            age: this.state.age,
            role:this.state.role,
            num:this.state.num,
            adnum:this.state.adnum,
        }

        axios.post('https://coronacaresystem.herokuapp.com/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            address: '',
            age: '',
            role:'',
            num:'',
            adnum:''
        })
    }

    render() {
        return (
            <div>
            <div style={{
                marginTop: 20,
                marginLeft:"280px",
                marginRight:"80px",
                fontSize: 25}}>
                <b
              style={{

                fontFamily: "arch",
                fontSize: 50
              }}
                >
                Enter your details here
                </b>
                <MaterialUI.Paper
                    onClick={this.changeShowContent}
                    elevation={5}
                    style={{
                        width:
                        window.innerWidth > 800
                            ? window.innerWidth * 0.6
                            : window.innerWidth,
                        marginTop: "5px",
                    }}>
                <h4 onClick={this.changeShowContent}
                    style={{
                    cursor: "pointer",
                    fontSize: window.innerWidth > 800 ? 25 : 20,
                    }}>  If you are ready to be part of the fight against covid-19 with the govermental systems.
                    Then please submit the form below</h4>
                <p style={{
                    textIndent: "20px",
                    }}></p>
              <br/>
                </MaterialUI.Paper> <br/>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.changeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.address}
                                onChange={this.changeAddress}
                                />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input  type="number"
                                className="form-control"
                                value={this.state.age}
                                onChange={this.changeAge}
                                />
                    </div>

                    <div className="form-group">
                        <label>Area Of Intrest : </label> <br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Medical"
                                    checked={this.state.role==='Medical'}
                                    onChange={this.changeRole}
                                    />
                            <label className="form-check-label">Medical </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Documentation"
                                    checked={this.state.role==='Documentation'}
                                    onChange={this.changeRole}
                                    />
                            <label className="form-check-label">Documentation</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="Transportational"
                                    checked={this.state.role==='Transportational'}
                                    onChange={this.changeRole}
                                    />
                            <label className="form-check-label">Transportational</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="Surveillance"
                                    checked={this.state.role==='Surveillance'}
                                    onChange={this.changeRole}
                                    />
                            <label className="form-check-label">Surveillance</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Phone number: </label>
                        <input  type="number"
                                className="form-control"
                                value={this.state.num}
                                onChange={this.changeNum}
                                />
                    </div>
                    <div className="form-group">
                        <label>Aadhar number: </label>
                        <input  type="number"
                                className="form-control"
                                value={this.state.adnum}
                                onChange={this.changeAdNum}
                                />
                    </div>

                    <div  style={{
                                    paddingLeft:"690px"
                                  }}className="form-group">
                        <input type="submit" value="Submit" className="btn btn-success btn-lg btn-block" />
                    </div>
                </form>
                </div><br/><br/><br/><br/>
                <Footer/>
            </div>
        )
    }
}