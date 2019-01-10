import * as React from 'react';
import WidthContext from './WidthContext';

const withWidth = () => (Component) => {
    class WithWidthHoc extends React.Component {
        render() {
            return (
                <WidthContext.Consumer>
                    {({width}) =>
                        <Component {...this.props} width={width}/>
                    }
                </WidthContext.Consumer>
            )
        }
    }

    return WithWidthHoc;
};

export default withWidth;