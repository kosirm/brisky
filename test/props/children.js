const Thing = props => <div>{props.text}</div>

// this is step 1
const App = props => <div>
  <Thing text={props.title} />
</div>

// step 2 is switch
// step 3 is getting those expression to work faster / better / stronger

module.exports = App