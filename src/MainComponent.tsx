import { FC, ReactElement, useContext, useEffect }  from 'react';
import { connect } from 'react-redux';
import VesselListComponentContainer from './components/VesselListComponent';
import { fetchDataThunk } from './redux/actions';
import { GlobalSettingsContext  } from './contexts/showDetails';

type ChildProps = {
    getData?: any,
    vessels?: any,
}

// Refactor this component into a functional component.
const MainComponent: FC<ChildProps> = ({getData, vessels}): ReactElement => {
    const { toggle, showDetails } = useContext(GlobalSettingsContext);
    
    useEffect(() => {
      // This code run once, when the component is mounted.
      getData();
    }, [ ]);
      return (
          <div>
              <h1>Hi, this is a Interview Challenge!</h1>
              <button onClick={() => toggle()}>Show Details</button>
              <VesselListComponentContainer vessels={vessels} showDetails={showDetails} />
          </div>
      );
}

const mapStateToProps = (state: any) => ({
    vessels: state.data
  });
  
const mapDispacthToProps = (dispatch: any) => {
    return {
        getData: () => dispatch(fetchDataThunk())    
    };
};
  

const MainComponentContainer = connect(
    mapStateToProps,
    mapDispacthToProps
  )(MainComponent);

export default MainComponentContainer;
