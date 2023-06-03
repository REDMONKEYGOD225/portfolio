import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div style={{ backgroundImage: "url(images/matrix.gif)", padding: '20px' }}>
        <img src="images/jean paul.jpg" alt="" style={{ marginLeft: '250px' }} />
        <p style={{ color: 'white' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore maxime corporis hic quisquam. Molestiae dolorem provident hic, ducimus nam odio enim quia placeat a qui harum temporibus recusandae sint quaerat!</p>
      </div>
    );
  }
}

export default About;
