
import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerID: 19129198130,
      name: "",
      age: "",
      relationship: "Has child",
      income: "500 000 kr" // Get from skatteetaten API
    };


  }

  getAge = (dateString) => {
    var res = dateString.split("-");
    var today = new Date();
    var birthDate = new Date(res[0], res[1], res[2]);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
         age--;
     }
     return age;
 };


  componentDidMount = () => {
    let self = this;
    let arr = [];
    fetch('https://dnbapistore.com/hackathon/customers/1.0/customer/' + this.state.customerID, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        //'Content-Type': 'application/json',
        'Authorization': 'Bearer 1200c346-5756-312e-bef8-b82946c0423d'
      }})
      .then(response => {
        return response.text();

      })
      .then(data => {
        var data_obj = JSON.parse(data);
        const name = data_obj.firstName + " " + data_obj.lastName;
        const age = self.getAge(data_obj.dateOfBirth);
        arr = [name, age];

        self.setState ({
          name: arr[0],
          age: arr[1]
        })
        return arr;
      })
  }


  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.age} years old</p>
        <p>{this.state.relationship}</p>
        <p>{this.state.income}</p>
      </div>
    );
  }
}

export default User;
