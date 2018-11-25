import React from "react"
import { hot } from "react-hot-loader"

import Child from "components/Child"

const App = () => {
  return (
    <div>
      <Child value="hoge" />
      <Child value="fuga" />
    </div>
  )
}

export default hot(module)(App)
