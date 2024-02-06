import React from 'react';

class AddSubButton extends React.Component {
  handleClick = () => {
    alert('Button clicked!');
  }

  render()
   {
    const { buttonText } = this.props;

    return (
        <button onClick={this.handleClick}>
            {buttonText}
        </button>
    );
  }
}

export default AddSubButton;
