const _colors = {
  twitter: '#50ABF1',
  facebook: '#3956A0',
  wiki: '#444',
  teal: '#15B5C2',
  black: '#050618',
  blue: '#016AFE',
  smalt: '#00449B',
  pinterest: '#C92228',
  tumblr: '#35465C',
  'mine-shaft': '#3F3F3F',
  silver: '#B1B1B1'
}

export default class Icon extends React.Component {

  renderGraphic() {
    const { fill } = this.props;
    let fillColor = 'black';
    if(fill !== undefined) {
      if(_colors[fill] !== undefined) {
        fillColor = _colors[fill];  
      } else {
        fillColor = fill;
      }
    }
    switch (this.props.icon) {
      case 'caret-down':
        return (
          <g><path fill={fillColor} d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z"/></g>
        );
      case 'edit':
        return (
          <g><path fill={fillColor} d="M3 17.25v3.75h3.75l11.06-11.06-3.75-3.75-11.06 11.06zm17.71-10.21c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
        );
      case 'external-link':
        return (
          <g><path fill={fillColor} d="M19 19h-14v-14h7v-2h-7c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zm-5-16v2h3.59l-9.83 9.83 1.41 1.41 9.83-9.83v3.59h2v-7h-7z"></path></g>
        );
      case 'search':
        return (
          <g><path fill={fillColor} d="M15.5 14h-.79l-.28-.27c.98-1.14 1.57-2.62 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"></path></g>
        );
      case 'play':
        return (
          <g><path fill={fillColor} d="M8 5v14l11-7z"></path></g>
        );
      case 'play-circle':
        return (
          <g><path fill={fillColor} d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
        );
      case 'twitter':
        return (
          <g><path fill={fillColor} d="M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-2.29 7.33c-.06 4.62-3.02 7.78-7.42 7.98-1.82.08-3.14-.5-4.28-1.23 1.34.21 3.01-.32 3.9-1.09-1.32-.13-2.1-.8-2.46-1.88.38.07.78.05 1.14-.03-1.19-.4-2.04-1.13-2.08-2.67.33.15.68.29 1.14.32-.9-.5-1.55-2.35-.8-3.57 1.32 1.45 2.91 2.63 5.52 2.79-.65-2.8 3.06-4.32 4.61-2.44.66-.13 1.19-.38 1.7-.65-.21.65-.62 1.1-1.12 1.47.54-.07 1.03-.21 1.44-.41-.25.53-.81 1.01-1.29 1.41z"></path></g>
        );
      case 'facebook':
        return (
          <g><path fill={fillColor} d="M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-1 2v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v7h-3v-7h-2v-3h2v-2.5c0-1.93 1.57-3.5 3.5-3.5h2.5z"></path></g>
        );
      case 'tumblr':
        return (
          <g><path fill={fillColor} d="M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-4 9h-3v3.9c0 .73.14 1.1 1.1 1.1h1.9v3s-1.03.1-2.1.1c-2.65 0-3.9-1.62-3.9-3.4v-4.7h-2v-2.8c2.41-.2 2.62-2.04 2.8-3.2h2.2v3h3v3z"></path></g>
        );
      case 'pinterest':
        return (
          <g><path fill={fillColor} d="M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-7 14.2c-.8 0-1.57-.34-2.12-.92l-.95 3.2-.07.21-.03-.01c-.19.32-.54.52-.93.52-.61 0-1.1-.49-1.1-1.1l.01-.15h-.01l.05-.18 1.85-5.56s-.2-.61-.2-1.47c0-1.72.92-2.23 1.66-2.23.74 0 1.42.27 1.42 1.31 0 1.34-.89 2.03-.89 3 0 .74.6 1.34 1.34 1.34 2.33 0 3.16-1.76 3.16-3.41 0-2.18-1.88-3.95-4.2-3.95-2.32 0-4.2 1.77-4.2 3.95 0 .67.19 1.34.54 1.94.09.16.14.33.14.51 0 .55-.45 1-1 1-.36 0-.69-.19-.87-.5-.53-.9-.82-1.92-.82-2.96.02-3.27 2.8-5.94 6.22-5.94s6.2 2.67 6.2 5.95c0 2.63-1.63 5.45-5.2 5.45z"></path></g>
        );
      case 'reddit':
        return (
          <g><path fill={fillColor} d="M1,11.9c0-0.8,0.3-1.4,0.9-1.9S3.2,9.2,4,9.2c0.8,0,1.4,0.2,1.9,0.7H6c1.6-1,3.7-1.5,6.1-1.5l0.1-0.1l1.3-4.9l4.4,0.7 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.1-0.1,0.2-0.3c0.1-0.2,0.2-0.3,0.3-0.3c0.4-0.4,0.9-0.6,1.5-0.6c0.6,0,1.1,0.2,1.5,0.6 C21.8,3.9,22,4.4,22,5s-0.2,1.1-0.6,1.5c-0.4,0.4-0.9,0.6-1.5,0.6c-0.7,0-1.2-0.2-1.6-0.7c-0.4-0.5-0.5-1.1-0.5-1.8 c0,0-0.6-0.1-1.8-0.2s-1.8-0.3-2-0.3h-0.1c0,0-0.1,0.3-0.3,1s-0.4,1.3-0.5,2c-0.2,0.7-0.3,1.1-0.3,1.2v0.1l0.1,0.1 c0.9,0,1.8,0.1,2.7,0.4c0.9,0.2,1.7,0.6,2.4,1l0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0.3-0.2,0.5-0.4,0.6-0.5c0.1-0.1,0.3-0.2,0.5-0.2 C19.5,9,19.7,9,20,9c0.8,0,1.5,0.3,2.1,0.9S23,11.2,23,12c0,0.6-0.2,1.1-0.5,1.6s-0.7,0.8-1.3,1.1c0,2.4-1.6,4.2-4.7,5.5 c-0.5,0.2-0.8,0.4-1,0.4c-0.4,0.1-0.9,0.2-1.7,0.3c-0.7,0.1-1.3,0.2-1.7,0.2c-1.5,0-2.9-0.2-4.2-0.6c0,0-0.5-0.3-1.3-0.7 c-1.2-0.6-2.1-1.3-2.8-2.1c-0.7-0.8-1-1.7-1-2.8H2.7c-0.4-0.2-0.8-0.5-1.1-0.9l-0.2-0.2c-0.2-0.3-0.3-0.6-0.3-0.8 C1,12.6,1,12.3,1,11.9z M1.6,12.2c0,0.8,0.3,1.5,1,2c0.1-0.7,0.4-1.4,0.9-2.1c0.5-0.7,1.1-1.3,1.8-1.8C4.9,9.9,4.4,9.8,3.9,9.8 c-0.6,0-1.1,0.2-1.6,0.7C1.8,11,1.6,11.6,1.6,12.2z M3.5,14.8c0,0.7,0.2,1.3,0.6,1.9c0.4,0.6,0.9,1.1,1.5,1.6s1.2,0.8,1.9,1.1 s1.3,0.5,1.9,0.6c0.9,0.2,1.8,0.3,2.7,0.3c1.5,0,2.9-0.2,4.3-0.7s2.5-1.2,3.4-2.2h-0.1c0.4-0.5,0.6-0.9,0.8-1.3 c0.2-0.4,0.2-0.8,0.2-1.3c0-0.7-0.2-1.3-0.5-1.9s-0.7-1.1-1.3-1.5c-0.5-0.4-1.1-0.8-1.7-1.1c-0.6-0.3-1.2-0.5-1.8-0.7 c-1-0.3-2.1-0.4-3.3-0.4c-0.9,0-1.8,0.1-2.8,0.3c-0.9,0.2-1.9,0.5-2.7,1s-1.6,1-2.2,1.8C3.8,13,3.5,13.9,3.5,14.8z M6.9,13.5 c0-0.5,0.1-0.8,0.4-1.1S7.9,12,8.4,12c0.5,0,0.8,0.1,1.1,0.4C9.8,12.7,10,13,10,13.5c0,0.4-0.2,0.8-0.5,1.1S8.8,15,8.4,15 s-0.8-0.1-1.1-0.4S6.9,13.9,6.9,13.5z M7.5,16.5h0.8c0.3,0.5,0.8,1,1.5,1.3c0.7,0.3,1.3,0.4,2,0.4c0.7,0,1.4-0.1,2-0.4 c0.6-0.3,1.1-0.7,1.5-1.3h0.7c-0.3,0.8-0.9,1.3-1.7,1.8c-0.8,0.4-1.7,0.6-2.6,0.6c-0.9,0-1.7-0.2-2.6-0.6 C8.4,17.8,7.8,17.2,7.5,16.5z M13.7,13.5c0-0.5,0.1-0.8,0.4-1.1c0.3-0.3,0.7-0.4,1.1-0.4c0.4,0,0.8,0.1,1.1,0.4 c0.3,0.3,0.4,0.6,0.4,1.1s-0.1,0.8-0.4,1.1C16,14.9,15.6,15,15.2,15c-0.5,0-0.8-0.1-1.1-0.4C13.8,14.3,13.7,13.9,13.7,13.5z M18.3,5 c0,0.4,0.2,0.8,0.5,1.1c0.3,0.3,0.7,0.5,1.1,0.5c0.4,0,0.8-0.1,1.1-0.4c0.3-0.3,0.4-0.7,0.4-1.1c0-0.4-0.1-0.8-0.4-1.1 s-0.6-0.4-1.1-0.4s-0.8,0.1-1.1,0.4C18.5,4.2,18.3,4.6,18.3,5z M18.6,10.1c0.7,0.4,1.2,1,1.7,1.7c0.5,0.7,0.8,1.4,1,2.2 c0.7-0.5,1.1-1.1,1.1-1.8c0-0.7-0.2-1.3-0.6-1.8c-0.4-0.5-1-0.8-1.7-0.8C19.5,9.6,19,9.8,18.6,10.1z" /></g>
        );
      case 'link':
        return (
          <g><path fill={fillColor} d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4v-1.9h-4c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9h-4c-1.71 0-3.1-1.39-3.1-3.1zm4.1 1h8v-2h-8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4v1.9h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
        );
      case 'save':
        return (
          <g><path fill={fillColor} d="M17 3h-12c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-12l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10h-10v-4h10v4z"></path></g>
        );
      case 'cancel':
        return (
          <g><path fill={fillColor} d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"></path></g>
        );
      case 'check':
        return (
          <g><path fill={fillColor} d="M9 16.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41z"></path></g>
        );
      case 'menu':
        return (
          <g><path fill={fillColor} d="M3 18h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18v-2h-18z"></path></g>
        );
    }
  }

  render() {
    let styles = _.assign({}, this.props.style, {
      fill: "currentcolor",
      verticalAlign: "middle",
      width: this.props.size, // CSS instead of the width attr to support non-pixel units
      height: this.props.size // Prevents scaling issue in IE
    });

    return (
      <svg viewBox="0 0 24 24" className={this.props.className} preserveAspectRatio="xMidYMid meet" fit
        style={styles}>
          {this.renderGraphic()}
      </svg>
    );
  }
}