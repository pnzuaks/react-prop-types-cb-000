// Code Goes Here
class Order extends React.Component {
  render() {
    return (
      <div className="order">
        <ul>
          <li>{ this.props.cone ? 'Cone' : 'Cup' }</li>
          <li>{ this.props.size }</li>
          <li>{ this.props.scoops.length } Scoops: {this.props.scoops.join(', ')}</li>
          <li>{ this.props.size }</li>
          <li>{ this.props.size }</li>
      </div>
    )
  }
}
