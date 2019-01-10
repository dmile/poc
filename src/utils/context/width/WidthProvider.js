import React from "react";
import withWidth from "@material-ui/core/withWidth";

import WidthContext from "./WidthContext";

class WidthProvider extends React.Component {
    render() {
        const {width, children} = this.props;
        return (
            <WidthContext.Provider value={{width}}>
                {children}
            </WidthContext.Provider>
        )
    }
}

export default withWidth()(WidthProvider);

