import React, { Component } from 'react';
import rd3 from 'rd3';
import $ from 'jquery';
import Select from 'react-select';
import 'react-select/dist/react-select.css';



let LineChart = rd3.LineChart;
//let Select = require('react-select');

let options = [
    { value: 'react', label: 'React' },
    { value: 'drupal', label: 'Drupal' },
    { value: 'rails', label: 'Rails' },
    { value: 'node', label: 'Node' },
];


class Search extends Component {
    constructor() {
        super();
        this.state = {
            allReports: [],
            request: []
        }
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        var newArray = this.state.request.slice();
        newArray.push(event.target.value);
        this.setState({request: newArray});
        console.log("Selected: " + JSON.stringify(this.state.request));
    }

    getAllReports() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '#', //would be BE url
                dataType: 'json',
                cache: false,
                success: function(data) {
                    this.setState({allReports: data}, function() {
                        console.log(this.state);
                    });
                }.bind(this)
            });
        });//promise
    }; //my func

    render() {
        //this.getAllReports();
        return (
            <div className="Search">
                <form onSubmit={this.handleSubmit}>
                <label>
                    Pick the technology:
                    <select value={this.state.value} onChange={this.handleChange} multiple>
                        <option value="react">react</option>
                        <option value="drupal">drupal</option>
                        <option value="rails">rails</option>
                        <option value="node">node</option>
                    </select>
                </label>
                    /*
 <label>
     <Select
         name="form-field-name"
         value={this.state.value}
         multi={true}
         options={options}
         onChange={this.handleChange}
     />
 </label>
 */

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Search;