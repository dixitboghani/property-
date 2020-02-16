import React from "react";

import { UncontrolledCarousel, Container } from "reactstrap";

const items = [
  {
    src: require("../assets/img/theme/img-1-1200x1000.jpg"),
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: require("../assets/img/theme/img-2-1200x1000.jpg"),
    altText: '',
    caption: '',
    header: ''
  }
];

class HomeCarousel extends React.Component {
  render() {
    return (
      <><Container>
          <UncontrolledCarousel items={items} />
      </Container>
        
      </>
    );
  }
}

export default HomeCarousel;