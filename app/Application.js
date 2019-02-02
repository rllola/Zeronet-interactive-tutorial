import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class Application extends Component {
  state = {
    contentIframe: '<html><head><title>Zeronet</title></head><body>LOla</body></html>'
  }

  onChange = (event) => {
    let frame = document.getElementById('iframe-code')
    console.log(frame)
    console.log(frame.contentDocument)
    let contents = frame.srcdoc
    console.log(contents)
    frame.srcdoc = event.target.value
  }

  render () {
    return (
      <Grid style={{ padding: '24px' }} columns={2} onChange={this.onChange}>
        <Grid.Column>
          <h1>Text Editor</h1>
          <textarea rows='4' cols='50' defaultValue={this.state.contentIframe}>

          </textarea>
        </Grid.Column>
        <Grid.Column>
          <h1>Result</h1>
          <iframe id='iframe-code' srcDoc={this.state.contentIframe} width='100%'></iframe>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Application
