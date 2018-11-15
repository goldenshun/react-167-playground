import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

function enhance(WrappedComponent) {
  class WithClientOnlyNext extends React.Component {
    state = {
      isClient: false,
    };

    componentDidMount() {
      this.setState({
        isClient: true,
      });
    }

    render() {
      const { isClient } = this.state;
      if (isClient === true) {
        return <WrappedComponent {...this.props} />;
      }

      return null;
    }
  }

  hoistNonReactStatics(WithClientOnlyNext, WrappedComponent);
  WithClientOnlyNext.displayName = `WithClientOnlyNext(${(WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent')})`;

  return WithClientOnlyNext;
}

export default enhance;
