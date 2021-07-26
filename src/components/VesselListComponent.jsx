import { VesselItemComponent } from './VesselItemComponent';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  margin: 5px;
`;


// Refactored this component into a functional component.
const VesselListComponent = (props) => {
  // Accessed data via Redux `store`.
  const { vessels } = props;
  return (
    <Container>
      {vessels.map(vessel => {
        return <VesselItemComponent key={vessel.ID} vessel={vessel} showDetails={props.showDetails}
          deleteVessel={props.deleteVessel} />;
      })}
    </Container>
  );
}

export default VesselListComponent;