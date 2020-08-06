import React from 'react';

export default class Body extends React.Component<{data: number}>{

    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div>
                My Body
                {this.props.data}
            </div>
        )
    }

}
