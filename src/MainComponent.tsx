import { FC, ReactElement, useContext, useEffect }  from 'react';
import { connect } from 'react-redux';
import VesselListComponentContainer from './components/VesselListComponent';
import { fetchDataThunk, deleteItem } from './redux/actions';
import { GlobalSettingsContext  } from './contexts/showDetails';

type ChildProps = {
    getData?: any,
    vessels?: any,
    deleteVessel?: any
    dispatch?: any
}

// Refactor this component into a functional component.
const MainComponent: FC<ChildProps> = ({getData, vessels, deleteVessel, dispatch}): ReactElement => {
    const { toggle, showDetails } = useContext(GlobalSettingsContext);
    
    useEffect(() => {
      // This code run once, when the component is mounted.
      dispatch(fetchDataThunk());
    }, [dispatch]);
      return (
          <div>
              <h1>Hi, this is a Interview Challenge!</h1>
              {vessels.length ? <button onClick={() => toggle()}>Show Details</button> : null}
              <VesselListComponentContainer vessels={vessels} showDetails={showDetails} deleteVessel={deleteVessel} />
          </div>
      );
}

const mapStateToProps = (state: any) => ({
    vessels: state.data
  });
  
const mapDispacthToProps = (dispatch: any) => {
    return {
      dispatch,
        deleteVessel: (id: number) => dispatch(deleteItem(id))    
    };
};
  

const MainComponentContainer = connect(
    mapStateToProps,
    mapDispacthToProps
  )(MainComponent);

export default MainComponentContainer;
