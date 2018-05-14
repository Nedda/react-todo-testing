import React from 'react';
import styled from 'styled-components';

export const ListWrapper = styled.span`
  background: ${props => props.completed ? 'red' : 'blue'};
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
          >{this.props.listItem.task}</ListWrapper>
        <button onClick={this.props.markItemDone}>done</button>
      </div>
    )
  }
}

export default ListItem;
