import React, { Component } from 'react';
import rd3 from 'rd3';
// import Select from 'react-select';
// import 'react-select/dist/react-select.css';



let LineChart = rd3.LineChart;
//let Select = require('react-select');


class Search extends Component {
    constructor() {
        super();
        this.state = {
            allReports: [],
            request: []
        };
    }

    static defaultProps = {
            techOptions: [
            { value: 'react', label: 'React' },
            { value: 'meteor', label: 'meteor' },
            { value: 'vue', label: 'vue' },
            { value: 'angular', label: 'angular' },
        ]
    };

    handleChange(event) {
        this.props.updateFilters({
            techs: this.getOptions()
        });
    }

    getOptions() {
        let options = this.refs.techs.selectedOptions || [];
        let arr = [];
        for (let i = 0; i < options.length; i++) {
            arr.push(options[i].value);
        }
        return arr;
    }

    render() {
        let options = this.props.techOptions.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        });
        return (
            <div className="Search">
                <form>
                <label>
                    Pick the technology:
                    <select ref="techs" defaultValue={this.props.techOptions.map(option => option.value)} onChange={this.handleChange.bind(this)} multiple>
                        {options}
                    </select>
                </label>

                </form>
            </div>
        );
    }
}

export default Search;