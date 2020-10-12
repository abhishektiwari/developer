import React from 'react';
import mermaid, {mermaidAPI} from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  "theme": "neutral",
  "themeCSS": ".node rect { fill: #eef4ff; }"
});

class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
  }
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}


export default Mermaid;