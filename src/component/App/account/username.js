import React, { Component } from 'react';
import { MdPerson } from "react-icons/md";

export default class Username extends Component {
    render() {
        return (
            <div>
                {MdPerson({size: 20})}
            </div>
        );
    };
};

