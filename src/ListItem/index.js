import React from 'react';
import styled from 'styled-components';

export const ListWrapper = styled.span`
  background: ${props => props.completed ? 'red' : 'blue'};
  cursor: pointer;
`;

export const StyledButton = styled.button`
  background: yellow;
`;

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ListWrapper
          completed={this.props.listItem.completed}
          > {this.props.listItem.task} </ListWrapper>
        <StyledButton onClick={this.props.markItemDone}>done</StyledButton>
      </div>
    )
  }
}

export default ListItem;
