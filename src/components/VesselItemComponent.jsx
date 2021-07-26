
import styled from 'styled-components';

const Container = styled.div`
  padding: 5px;
  margin: 5px;
  background-color: #d1e4f1;

  .show-details {
    display: ${(props) => props.showDetails ? 'block' : 'none'};
  }
`;


export function VesselItemComponent({ vessel, showDetails }) {

  // Access single item data from props.

  // Access the `GlobalSettingsContext` to know if you should show details or not.
  return (
    <Container showDetails={showDetails}>

      <div className="item-name">
        <div>Avatar -- {vessel.Name}</div>
        <div>----- {vessel.ChristianName}</div>
      </div>

      <br />
      <div className="show-details">
        <div>Vessel Details:</div>
        <div>
          <h5>{vessel.Details.IMONumber} - {vessel.Details.Type}</h5>
        </div>
      </div>
      {
        // Render item data here according to layout found in `./styles.scss`.
        // Show details only if global setting is true.
      }
    </Container>
  );
}
