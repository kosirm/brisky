// const Thing = props => {
//   return <div>{props.title}!</div>
// }

// const List = props => {
//   return <div>{props.children}</div>
// }

// const App = ({ title }) => {
//   return <div>{title}
//     <List>
//       <Thing title={title} />
//     </List>
//     <Thing title='hello' />
//   </div>
// }

// including non literal text etc

const Poop = ({ gurf }) => {
  return <p>{gurf}</p>
}

const Sheit = ({ child, children }) => {
  return <section>{child}{children}</section>
}

// const Thing = ({ text, penis }) => {
//   return <h2>
//     <div>{text} {penis}</div>
//     <Poop gurf={text} />
//   </h2>
// }

// const App = ({ title, flups }) => {
//   return <div style={{ color: 'blue' }}>
//     <h1>{title}</h1>
//     <Thing text={title} penis='hello' />
//     <ul>
//       <li>
//         <Thing text={flups} />
//       </li>
//       <li>
//         <span>{title}</span>
//       </li>
//     </ul>
//   </div>
// }

const Thing = ({ fur, penis }) => {
  return <h2>{fur} {penis}<Poop gurf={penis + '🎩'} /></h2>
}

const App = ({ title, flups }) => {
  // const bla = title + '!!!' -- this is def a thing to parse
  return <div>
    <Thing fur={'👖' + title + '👖'} penis={'👕' + flups + '👕'} />
    <Sheit child={<button>{'HELLO'}</button>} />
    <Sheit><button>{'bye'}</button></Sheit>
    <Sheit child={'ha!'}><button>{'barf'}</button></Sheit>
  </div>

  // need a good system for <Poop gur='?' /> as a nested child (in an expression)
  // also need to pass .children as property!
  // is IsExternal add those in props

  // return <div>
  //   <Thing text={title} penis='static prop!' />
  //   <div>
  //     <Thing text={flups} penis={flups} />
  //   </div>
  // </div>
}

module.exports = App
